import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import face from '../../assets/bliss.jpg';
import $ from 'jquery';
import firebase, {getOrCreateChat} from '../../Api/firebase';




class ChatContent extends Component{

    state = {
        messages:[{id:1,name:'perro', text:'cochinito'},{id:2,name:'gat', text:'cochinon'},{id:3,name:'perico', text:'cochino'}],
        chat:[]
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
  }
};

export default ChatContent;
