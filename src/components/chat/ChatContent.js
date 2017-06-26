import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import face from '../../assets/bliss.jpg';
import $ from 'jquery';
import firebase, {getOrCreateChat, addMessage} from '../../Api/firebase';
import {TextField, RaisedButton} from 'material-ui';
import moment from 'moment';
import toastr from 'toastr';


class ChatContent extends Component{

    state = {
        messages:[],
        chat:'',
        message:'',
        badge:{}
    };

    createChat = (props) => {
      // apagamos el listener
      let chat = this.state.chat;
      if (chat) chat.off();

      // borramos mensajes
      this.setState({messages:[]});
      // traemos chat
      getOrCreateChat(props.match.params.userId)
      .then(r=>{
        // console.log(r.chat);
        // this.setState({messages:r.messages});
        this.putListener(r.chat);
      })
      .catch(e=>{
        toastr.warning('No hay mensajes por cargar, escribe uno.');
        this.setState({messages:[]});
          console.log('falló', e);
        // this.setState({messages:[{id:1,name:'perro', text:'cochinito'}]});
      });




    };


    putListener = (chat) => {
      this.setState({chat});
      chat.on('child_added', (response)=>{
        console.log(response.key);
        // console.log(response.val());
        const o = response.val();
        o['id'] = response.key;
        this.state.messages.push(o);
        this.setState({messages:this.state.messages});
        // scroll
        const container = document.getElementById('container');
        window.scrollTo(0,container.scrollHeight);

      });
        

        
    };

    submitText = (e) => {
      addMessage(this.props.match.params.userId, this.state.message);
      this.setState({message:''});
      // this.createChat(this.props);
      // .catch();
    };

    onChange = (e) => {
      this.setState({message:e.target.value});
    };


    componentWillReceiveProps(props){
      this.createChat(props);
    }

    componentWillMount(){
      this.createChat(this.props);

    }

    componentDidMount(){


        // setTimeout(()=>{
        //     const container = document.getElementById('container');
        //     window.scrollTo(0,container.scrollHeight);
        // },1000);

        const s1 = document.getElementById('sub');

        const timerID = setInterval(function() {
            window.scrollBy(0, 5);

            // console.log('offset',window.pageYOffset);

            setTimeout(function(){
                clearInterval(timerID);
            },10000)
        }, 13);

        // console.log($('#container').scrollTop());



            // $(window).animate({ scrollTop:$('#sub').height() },"slow");
            // let s1 = document.getElementById('sub');
            // s1.scrollTop = 1156;
            // window.addEventListener('scroll', function(){
            //     console.log(s1.scrollTop);
            //     console.log(window.scrollY);
            // }, false);





    }

handleKeyPress = (event) => {
  if(event.key == 'Enter'){
  this.submitText(event)
  }
}


    render(){
        return(

            <div id="container" style={styles.contenedor}>
                <div id="sub">
                {this.state.messages.map(
                    m=>{
                        return(
                            <Card key={m.id}>
                                <CardHeader
                                    title={m.displayName}
                                    subtitle={moment(m.date).fromNow()}
                                    avatar={m.photoURL}
                                />
                                <CardText
                                    onClick={this.scroll}
                                    style={styles.text}>
                                  {m.text}
                                </CardText>

                            </Card>
                        );
                    }
                )}
                </div>
                <nav style={styles.footer}>
                    <div>
                        <TextField
                            style={{maxWidth:'100%', display:'inline-block', width:'50%'}}
                            hintText="¡Comienza la charla! =D"
                            underlineFocusStyle={styles.underline}
                            onChange={this.onChange}
                            value={this.state.message}
                            onKeyPress={this.handleKeyPress}
                        />
                        <RaisedButton
                            style={{display:'inline-block'}}
                            label="Enviar"
                            onTouchTap={this.submitText}
                        />
                    </div>

                </nav>
            </div>


        );
    }
}

const styles = {
    contenedor:{
        // overflow:'scroll',
        paddingBottom:100,
        paddingTop:100
    },
    text:{
      paddingLeft:'50px',
      paddingRight:50
  },
  footer:{
      position:'fixed',
      bottom:0,
      backgroundColor:'lightgrey',
      width:'100%',
      height:'65px',
      paddingLeft:'50px'
  },
  underline:{
    borderColor:'red'
  }
};

export default ChatContent;
