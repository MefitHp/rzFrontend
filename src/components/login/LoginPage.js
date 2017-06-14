import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo_reto.png';
import { Paper, RaisedButton, Divider, CardActions, CardTitle, CardText } from 'material-ui';
import CircularProgress from 'material-ui/CircularProgress';
import firebase from '../../Api/firebase';
import toastr from 'toastr';
import MainLoader from '../common/MainLoader';
import api from '../../Api/Django';



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
        this.props.history.push('/userprofile/wall');
    };

    googleLogin = () => {
        this.setState({loading:true});
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
            // const token = result.credential.accessToken;
                localStorage.setItem("userToken",JSON.stringify('google '+result.credential.accessToken));
                localStorage.setItem("userInfo",JSON.stringify(result.user));
            //     this.setState({
            //    user: result.user
            // });
            // console.log('hola ', this.state.user.displayName);
            this.setState({loading:false});
            //Crea el perfil en django
            api.createProfile(result.user.photoURL);
            this.decideRoute();
            })
            .catch((e)=> {
                this.setState({loading:false});
                console.log(e);
                toastr.error(e.message);
        });
    };

    faceLogin = () => {
        this.setState({loading:true});
        const provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                // const token = result.credential.accessToken;
                localStorage.setItem("userToken",JSON.stringify('facebook '+result.credential.accessToken));
                localStorage.setItem("userInfo",JSON.stringify(result.user));
                //     this.setState({
                //    user: result.user
                // });
                // console.log('hola ', this.state.user.displayName);
                this.setState({loading:false});
                //Crea el perfil en django
                api.createProfile(result.user.photoURL);                // this.sendToBackend(result.credential.accessToken);
                this.decideRoute();

            })
            .catch((e)=> {
                this.setState({loading:false});
                console.log(e);
                toastr.error(e.message);
            });
    };

    sendToBackend = (token) => {
        api.getAndSaveToken(token);
    };

    componentWillMount(){

         // const user = JSON.parse(localStorage.getItem('userInfo'));
         // user.id
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

                <Link to="/">
                <img width="200" src={logo} alt="logo"/>
                </Link>


                <Paper>
                    <CardTitle title="Inicia sesión para continuar" />
                    <Divider />
                    <CardText>
                        <p>
                        Gracias por entrar a CrowdFoundingRetoZapopan,
                        y ser parte de los grandes proyectos que habitan aquí.
                        </p>
                        <p>Porfavor solo selecciona la red social de tu preferencia
                        y da clic en el botón correspondiente.
                        Así de fácil ¡sin constraseñas que olvidar!
                        </p>

                    </CardText>
                    <CardActions>
                        <RaisedButton
                            buttonStyle={styles.buttonColor}
                            primary={true}
                            onTouchTap={this.faceLogin}
                        >
                            Facebook
                        </RaisedButton>
                        <RaisedButton
                            label={!loading && "Google"}
                            onTouchTap={this.googleLogin}
                            buttonStyle={styles.buttonColor}
                            secondary={true}
                            icon={loading && <CircularProgress />}

                        />
                    </CardActions>
                    <CardText>
                        ¿Tienes dudas? escribenos: <a href="mailto:reto@zapopan.com">reto@zapopan.com</a>
                    </CardText>
                </Paper>
                <br/>
                {/*{loading &&  <CircularProgress size={60} thickness={7} />}*/}
                {/*{loading &&  <MainLoader />}*/}
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
