import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo_reto.png';
import {Paper, CardTitle, Divider, CardText, CardActions, RaisedButton, CircularProgress} from 'material-ui';
import api from '../../Api/Django';
import toastr from 'toastr';
import firebase from '../../Api/firebase';
import conekta from 'conekta';





class Cart extends Component{

    constructor(props){
        super(props);
        this.state = {
            reward:{},
            rewardId:this.props.match.params.rewardId,
            loading:false
        };
        console.log(this.props);
    }

    componentWillMount(){
        if (!firebase.auth().currentUser){
            this.props.history.push('/login?next=/cart/'+this.props.match.params.rewardId)
        }
        // console.log(this.state.rewardId);
        if(!this.props.reward){
            api.getReward(this.state.rewardId)
                .then(reward=>{
                    this.setState({reward});
                    // console.log(reward);
                })
                .catch(e=>{
                    toastr.error('No se puedo cargar tu recompensa', e);
                });
        }else{
            this.setState({reward:this.props.reward});
        }


    }

    render(){
        const {loading, reward} = this.state;
        return(
            <div style={styles.loginCard}>

                <Link to="/">
                    <img width="200" src={logo} alt="logo"/>
                </Link>

<div style={document.documentElement.clientWidth > 600 ? {display:'flex'}:{display:'block'}}>
                <Paper>
                    <CardTitle title="Tu recompensa" />
                    <Divider style={{width:'100%'}} />
                    <CardText>
                        <h3>
                            {reward.title}
                        </h3>
                        <p>
                            {reward.description}
                        </p>

                    </CardText>
                    <CardActions>
                        <h2>
                            $ {reward.amount}
                        </h2>
                    </CardActions>
                    <CardText>
                        ¿Tienes dudas? escribe al creador del proyecto: <a href="mailto:reto@zapopan.com">Chat</a>
                    </CardText>
                </Paper>
                <Paper>
                    <CardTitle title="Tu información de tarjeta" />
                    <Divider style={{width:'100%'}} />
                    <CardText>
                        <form action="" method="POST" id="card-form">
                            <span class="card-errors"></span>
                            <div>
                                <label>
                                    <span>Nombre del tarjetahabiente</span>
                                    <input type="text" size="20" data-conekta="card[name]"/>
                                </label>
                            </div>
                            <div>
                                <label>
                                    <span>Número de tarjeta de crédito</span>
                                    <input type="text" size="20" data-conekta="card[number]"/>
                                </label>
                            </div>
                            <div>
                                <label>
                                    <span>CVC</span>
                                    <input type="text" size="4" data-conekta="card[cvc]"/>
                                </label>
                            </div>
                            <div>
                                <label>
                                    <span>Fecha de expiración (MM/AAAA)</span>
                                    <input type="text" size="2" data-conekta="card[exp_month]"/>
                                </label>
                                <span>/</span>
                                <input type="text" size="4" data-conekta="card[exp_year]"/>
                            </div>
                            {/*<button type="submit">Crear token</button>*/}
                        </form>

                    </CardText>
                    <CardActions>
                        <RaisedButton
                            label={!loading && "Pagar"}

                            buttonStyle={styles.buttonColor}
                            secondary={true}
                            icon={loading && <CircularProgress />}

                        />
                    </CardActions>
                    <CardText>
                        ¿Prefieres depositar en Oxxo? <a href="mailto:reto@zapopan.com">Click Aquí</a>
                    </CardText>
                </Paper>

</div>

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
        maxWidth:'800px',
        margin:'0 auto',
        marginTop: 20
    },
    buttonColor: {
        color: 'white'
    }
}

export default Cart;