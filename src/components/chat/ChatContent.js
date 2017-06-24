import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import face from '../../assets/bliss.jpg';
import $ from 'jquery';




class ChatContent extends Component{

    state = {
        messages:[1,2,3,4,5,6,7]
    };

    componentDidMount(){

        // setTimeout(()=>{
        //     const container = document.getElementById('container');
        //     window.scrollTo(0,container.scrollHeight);
        // },1000);

        const s1 = document.getElementById('sub');

        const timerID = setInterval(function() {
            window.scrollBy(0, 5);

            console.log('offset',window.pageYOffset);

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
                            <Card key={m}>
                                <CardHeader
                                    title="URL Avatar"
                                    subtitle="Subtitle"
                                    avatar={face}
                                />
                                <CardText
                                    onClick={this.scroll}
                                    style={styles.text}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
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