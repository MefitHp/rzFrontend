import React, { Component } from 'react';
import {Toolbar, ToolbarTitle} from 'material-ui/Toolbar';
import {cyan500} from 'material-ui/styles/colors';
import ReactMarkdown from 'react-markdown';
import { RaisedButton, ToolbarGroup } from 'material-ui';



class DescriptionPage extends Component{

    state = {
        input: '# cochinon\n\n> cita loquilla\n\n![bliss](http://localhost:3000/static/media/bliss.06322ec7.jpg)'
    };

    onChange = (e) => {
       this.setState({
           input: e.target.value
       });
    };

    componentDidMount(){

        let s1= document.getElementById('Select1');
        let s2= document.getElementById('Select2');

        function select_scroll_1(e) { s2.scrollTop = s1.scrollTop; //console.log(s1.scrollTop);
             }
        function select_scroll_2(e) { s1.scrollTop = s2.scrollTop; //console.log(s2.scrollTop);
             }


        s1.addEventListener('scroll', select_scroll_1, false);
        // s2.addEventListener('scroll', select_scroll_2, false);


    }

    render(){

        const {input} = this.state;

        return(
            <div >
                <Toolbar
                    style={{
                        backgroundColor:cyan500,
                        marginBottom:0}}>
                    <ToolbarTitle
                        style={{color:'white'}}
                        text="Descripción de tu proyecto" />
                    <ToolbarGroup>
                        <RaisedButton label="Guardar" secondary={true}/>
                    </ToolbarGroup>
                </Toolbar>

                <div className="desc-container">

                    <div
                        className="desc-editor"

                    >
                       <textarea
                           id="Select1"
                           value={this.state.input}
                           onChange={this.onChange} name="input" cols="30" rows="10">

                       </textarea>

                    </div>
                     <br/>
                    <div
                        id="Select2"
                        className="mark desc-preview">
                        <ReactMarkdown
                            id="mijo"
                            style={{color:'red'}}
                            source={input} />
                    </div>


                </div>




            </div>
        );
    }
}

export default DescriptionPage;