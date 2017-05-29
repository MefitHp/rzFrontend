import React, { Component } from 'react';
import logo from '../../assets/logo_reto.png';
import { Paper, RaisedButton, Divider, CardActions, CardTitle, CardText } from 'material-ui';
import CircularProgress from 'material-ui/CircularProgress';
import firebase from '../../Api/firebase';



class LoginPage extends Component {

    state = {
        loading: false,
        user: ''
    };

    decideRoute = () => {
        const search = this.props.location.search;
        if(search){
            const params = new URLSearchParams(search);
            const next = params.get('next');
            if(next){
                this.routeNext(next);
            }
        } else{
            this.routeNatural();
        }
    };

    routeNext = (next) => {
        this.props.history.push(next);
    };

    routeNatural = () => {
        this.props.history.push('/userprofile');
    };

    googleLogin = () => {
        this.setState({loading:true});
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
            // const token = result.credential.accessToken;
                localStorage.setItem("userToken",JSON.stringify(result.credential.accessToken));
                localStorage.setItem("userInfo",JSON.stringify(result.user));
            //     this.setState({
            //    user: result.user
            // });
            // console.log('hola ', this.state.user.displayName);
            this.setState({loading:false});
            this.decideRoute();
            })
            .catch(function(e) {
                this.setState({loading:false});
                console.log(e);
        });
    };

    componentWillMount(){

        // const search = this.props.location.search;
        // const params = new URLSearchParams(search);
        // const foo = params.get('next');
        //
        // if(search){
        //     console.log('paso',foo);
        // } else{
        //     console.log('nopaso',search);
        // }


        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.decideRoute();
            }
        });


    }

    render(){
        const {loading} = this.state;
        return(

            <div style={styles.loginCard}>

                <img width="200" src={logo} alt="logo"/>
                <Paper>
                    <CardTitle title="Inicia sesión para continuar" />
                    <Divider />
                    <CardText>
                        Thanks for signing up for our service! Brand.io is the fun new way to brand your I/O. Please verify your email by clicking this button:
                    </CardText>
                    <CardActions>
                        <RaisedButton
                            buttonStyle={styles.buttonColor}
                            primary={true}>
                            Facebook
                        </RaisedButton>
                        <RaisedButton
                            onTouchTap={this.googleLogin}
                            buttonStyle={styles.buttonColor}
                            secondary={true}>
                            Google
                        </RaisedButton>
                    </CardActions>
                    <CardText>
                        ¿Olvidaste tu contraseña?
                    </CardText>
                </Paper>
                <br/>
                {loading &&  <CircularProgress size={60} thickness={7} />}
            </div>

        );
    }
}

const styles = {
    loginCard: {
        textAlign:'center',
        maxWidth:'400px',
        margin:'0 auto',
        marginTop: 20
    },
    buttonColor: {
        color: 'white'
    }
}

export default LoginPage;