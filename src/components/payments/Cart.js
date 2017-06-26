import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo_reto.png';
import {Paper, CardTitle, Divider, CardText, CardActions, RaisedButton, CircularProgress} from 'material-ui';
import api from '../../Api/Django';
import toastr from 'toastr';
import firebase from '../../Api/firebase';
import $ from 'jquery';
import MainLoader from '../common/MainLoader';
import Conekta from '../../conekta/conekta.js';






class Cart extends Component{

    constructor(props){
        super(props);
        this.state = {
            reward:{},
            rewardId:this.props.match.params.rewardId,
            load:true,
            loading:false,
            tokenParams:{
              "card": {
                "number": "4242424242424242",
                "name": "Fulanito Pérez",
                "exp_year": "2020",
                "exp_month": "12",
                "cvc": "123"
              }
            }
        };
        console.log(this.props);
    }

    componentWillMount(){
        if (!firebase.auth().currentUser){
            this.props.history.push('/login?next=/cart/'+this.props.match.params.rewardId)
        }
        // console.log('nombre: ',typeof this.state.rewardId);
        // console.log(this.state.rewardId);
        if(this.state.rewardId !== 'false'){
            api.getReward(this.state.rewardId)
                .then(reward=>{
                    this.setState({reward, load:false});
                    // console.log(reward);
                })
                .catch(e=>{
                    toastr.error('No se puedo cargar tu recompensa', e);
                });
        }else{
            const reward = {
                id:0,
                title:"Aportación libre",
                description:"Tu corazón es muy grande, ¡gracias por apoyarnos!",
                amount:JSON.parse(localStorage.getItem("freeInput"))
            };
            this.setState({reward, load:false});

        }


    } //willMount
    
    
    componentDidMount(){
        //tokenizer conekta
        Conekta.setPublishableKey("key_Ik4WxMhXctrriTvyfMAimyg");
        Conekta.setLanguage("es");  
        let ck = Conekta.getPublishableKey();
        let lg = Conekta.getLanguage();
        console.log('mierda',ck);
        console.log('lenguaje',lg);
        
    }
    
    onChange = (e) => {
        let tokenParams = this.state.tokenParams;
        const field = e.target.name;
        const value = e.target.value;
        tokenParams.card[field] = value;
        this.setState({tokenParams});
    };
    
    successResponseHandler = (token) => {
         this.setState({loading:false});
        toastr.success('exito putito'),
            console.log(token);
  // Do something on sucess
  // you need to send the token to the backend.
    };
    
    errorResponseHandler = (error) => {
         this.setState({loading:false});
        toastr.warning('Falle perro', error)
    };

    tokenizeNPay = () => {
        this.setState({loading:true});
        Conekta.token.create(this.state.tokenParams, this.successResponseHandler, this.errorResponseHandler);
    };

    render(){
        const {load, loading, reward} = this.state;
        return(
            <div style={styles.loginCard}>

                {load && <MainLoader/>}

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
                        <div id="card-form">
                          <span className="card-errors"></span>
                          <div>
                            <label>
                              <span>Nombre del tarjetahabiente</span>
                              <input 
                              type="text" 
                              size="20"
                              name="name"
                              onChange={this.onChange} />
                            </label>
                          </div>
                          <div>
                            <label>
                              <span>Número de tarjeta de crédito</span>
                              <br/>
                              <input 
                              type="text" 
                              size="20" 
                              name="number"
                              onChange={this.onChange}/>
                            </label>
                          </div>
                          <div>
                            <label>
                              <span>CVC</span>
                              <input 
                              type="text" 
                              size="4"
                               name="cvc"
                                onChange={this.onChange} />
                            </label>
                          </div>
                          <div>
                            <label>
                              <span>Fecha de expiración (MM/AAAA)</span>
                              <input 
                              type="text" 
                              size="2" 
                              name="exp_month"
                              onChange={this.onChange} />
                            </label>
                            <span>/</span>
                            <input 
                            type="text" 
                            size="4" 
                            name="exp_year"
                            onChange={this.onChange} /> 
                          </div>
                        </div>

                    </CardText>
                    <CardActions>
                        <RaisedButton
                            label={!loading && "Pagar"}
                            disabled={load ? true:false}
                            buttonStyle={styles.buttonColor}
                            secondary={true}
                            icon={loading && <CircularProgress />}
                            onTouchTap={this.tokenizeNPay}

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