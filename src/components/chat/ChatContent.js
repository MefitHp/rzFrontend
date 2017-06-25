import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import face from '../../assets/bliss.jpg';
import $ from 'jquery';
import firebase, {getOrCreateChat, addMessage} from '../../Api/firebase';
import {TextField, RaisedButton} from 'material-ui';



class ChatContent extends Component{

    state = {
        messages:[{id:1,name:'perro', text:'cochinito'},{id:2,name:'gat', text:'cochinon'},{id:3,name:'perico', text:'cochino'}],
        chat:[],
        message:''
    };

    createChat = (props) => {
      getOrCreateChat(props.match.params.userId)
      .then(r=>{
        console.log(r);
        this.setState({messages:r});
      })
      .catch(e=>{
        this.setState({messages:[{id:1,name:'perro', text:'cochinito'}]});
      });
<<<<<<< HEAD
    };


    submitText = (e) => {
      addMessage(this.props.match.params.userId, this.state.message);
      this.setState({message:''});
      // .catch();
    };

    onChange = (e) => {
      this.setState({message:e.target.value});
    };

=======
    };


    submitText = (e) => {
      addMessage(this.props.match.params.userId, this.state.message);
      this.setState({message:''});
      // .catch();
    };

    onChange = (e) => {
      this.setState({message:e.target.value});
    };

>>>>>>> d6567f8fbb634f9530ae9441c4743857bf41a9d1
    componentWillReceiveProps(props){
      this.createChat(props);
    }

    componentWillMount(){
      this.createChat(this.props);
<<<<<<< HEAD
=======

>>>>>>> d6567f8fbb634f9530ae9441c4743857bf41a9d1
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


    render(){
        return(

            <div id="container" style={styles.contenedor}>
                <div id="sub">
                {this.state.messages.map(
                    m=>{
                        return(
                            <Card key={m.id}>
                                <CardHeader
                                    title={m.name}
                                    subtitle={m.date}
                                    avatar={face}
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
                            hintText="Escribe algo mijo"
                            underlineFocusStyle={styles.underline}
                            onChange={this.onChange}
                            value={this.state.message}
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
