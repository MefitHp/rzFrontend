import React, {Component} from 'react';
import api from '../../Api/Django';
import toastr from 'toastr';
import firebase from '../../Api/firebase';
import Conekta from '../../conekta/conekta.js';
import {CartContainer} from './CartContainer';
import {PayDetailContainer} from "./PayDetailContainer";

import './cart.css';






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
                "cvc": "123"              }
            },
            tel:"5555555555",
            logo:"generic"

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
        console.log('key',ck);
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
        toastr.options.hideMethod = 'noop';
        toastr.warning('Intentando hacer el cargo, espere porfavor...'),
            console.log(token);
        api.createCharge({
            name:this.state.tokenParams.card.name,
            rewardId:this.state.reward.id,
            tel:this.state.tel,
            token,
            amount:0
        })
        .then(r=>{
            console.log(r);
            toastr.success('¡El cargo fué realizado con éxito! ' + r);
            this.setState({loading:false});
            //redirecciona
        })
        .catch(e=>toastr.error('fallo' + e));
  // Do something on sucess
  // you need to send the token to the backend.
    };
    
    errorResponseHandler = (error) => {
         this.setState({loading:false});
        toastr.warning('Fallé', error)
    };

    tokenizeNPay = () => {
        this.setState({loading:true});
        
//        validate before sending to tokenize
     if(!Conekta.card.validateNumber(this.state.tokenParams.card.number)){
            toastr.error('Verifica tu número de tarjeta');
            this.setState({loading:false});
        }else if(!Conekta.card.validateExpirationDate(this.state.tokenParams.card.exp_month, this.state.tokenParams.card.exp_year)){
             toastr.error('Verifica tus fechas de expiración');
            this.setState({loading:false});
        }else if(!Conekta.card.validateCVC(this.state.tokenParams.card.cvc)){
            toastr.error('Verifica tu código de seguridad');
            this.setState({loading:false});
        }
        else{
             Conekta.token.create(this.state.tokenParams, this.successResponseHandler, this.errorResponseHandler);
        }
        
       
    };


    findLogo = (e) => {
        this.onChange(e);
        let text = String(e.target.value);
        if( text.charAt(0) === "4") this.setState({logo:"visa"});
        else if (text.charAt(0) === "5") {
            this.setState({logo:"masterCard"});
        } else {
            this.setState({logo:"generic"});
        }

    };

    submit = (e) => {
        e.preventDefault();
        //this.setState({loading:true});
        this.tokenizeNPay();
    };

    render(){
        const {logo, loading} = this.state;
        return(
            <div>
                <h2 style={styles.h2}>Tu Patrocinio:</h2>
                <div style={styles.container} >
                    <PayDetailContainer match={this.props.match} />
                    <br/>
                    <CartContainer
                        submit={this.submit}
                        onChange={this.onChange}
                        findLogo={this.findLogo}
                        logo={logo}
                        loading={loading}
                    />
                </div>

            </div> 
        );
    }
}

const styles = {
  container:{
      display:"flex",
      width:"80%",
      margin:"0 auto",
      flexDirection:"column"
  },
    h2:{
        width:300,
        margin:"0 auto",
        paddingTop:50,
        paddingBottom:50
    }
};

export default Cart;