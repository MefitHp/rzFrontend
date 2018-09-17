import React, { Component } from 'react';
import {Toolbar, ToolbarTitle} from 'material-ui/Toolbar';
import {cyan500} from 'material-ui/styles/colors';
import ReactMarkdown from 'react-markdown';
import { RaisedButton, ToolbarGroup, MenuItem, Dialog } from 'material-ui';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import ActionSettingsEthernet from 'material-ui/svg-icons/action/settings-ethernet';
import ActionVisibility from 'material-ui/svg-icons/action/visibility';
import CircularProgress from 'material-ui/CircularProgress';
import MainLoader from '../common/MainLoader';





class DescriptionPage extends Component{

    state = {
        open:false,
        input: this.props.project.body,
        selectedIndex: 0,
        ancho: document.documentElement.clientWidth < 600,
        desapareceMark: '',
        desaparecePrev: ''
    };

    select = (index) => this.setState({selectedIndex: index});


    // onChange = (e) => {
    //    this.setState({
    //        input: e.target.value
    //    });
    // };

    componentDidMount(){


            this.setState({input:this.props.project.description});

            let s1 = document.getElementById('Select1');
            let s2 = document.getElementById('Select2');

            function select_scroll_1(e) {
                s2.scrollTop = s1.scrollTop; //console.log(s1.scrollTop);
            }

            // function select_scroll_2(e) {
            //     s1.scrollTop = s2.scrollTop; //console.log(s2.scrollTop);
            // }


            s1.addEventListener('scroll', select_scroll_1, false);
            // s2.addEventListener('scroll', select_scroll_2, false);
            // desaparecemos el preview en mobiles
            if (this.state.ancho) this.setState({desaparecePrev: 'desaparece'})





    }

    // componentWillReceiveProps(nextProps){
    // this.setState({input:nextProps.project.description});
    // }

    update = (e) => {
        e.preventDefault();
        this.props.onSave();
    };





    render(){
        const {project} = this.props;
        const {body} = project;

        return(
            <div >
                {this.props.project.validated && <div className="la-card-cover"></div>}




                <Toolbar
                    style={{
                        backgroundColor:"grey",
                        marginBottom:0}}>
                    <ToolbarTitle
                        style={{color:'white'}}
                        text="Descripción de tu proyecto" />
                    <ToolbarGroup>
                        <MenuItem
                            onClick={()=>this.setState({open:true})}
                            style={{color:"white"}}>
                            ¿MarkDown?
                        </MenuItem>
                        <RaisedButton
                            onTouchTap={this.update}
                            label={!this.props.loading && "Guardar"}
                            secondary={true}
                            icon={this.props.loading && <CircularProgress />}
                        />
                    </ToolbarGroup>
                </Toolbar>

                <div className="desc-container">

                    <div
                        className={"desc-editor " + this.state.desapareceMark}

                    >
                       <textarea
                        style={{cursor:'text'}}
                           id="Select1"
                           name="body"
                           value={body}
                           onChange={this.props.onChange} cols="30" rows="10">
                
                       </textarea>

                    </div>
                     <br/>
                    <div
                        id="Select2"
                        className={"mark desc-preview " + this.state.desaparecePrev}>
                        <ReactMarkdown
                            id="mijo"
                            style={{color:'red'}}
                            source={body} />
                    </div>


                </div>




                {/*Switch de visibilidad si mobile*/}
                {this.state.ancho && <Paper
                    style={{
                        position:'fixed',
                        bottom:0,
                        width:'100%'
                    }}
                    zDepth={1}>
                    <BottomNavigation selectedIndex={this.state.selectedIndex}>
                        <BottomNavigationItem
                            label="Markdown"
                            icon={<ActionSettingsEthernet/>}
                            onTouchTap={() => {
                                this.select(0);
                                this.setState({
                                    desaparecePrev: 'desaparece',
                                    desapareceMark:''
                                });
                            }}
                        />
                        <BottomNavigationItem
                            label="Preview"
                            icon={<ActionVisibility/>}
                            onTouchTap={() =>{
                                this.select(1);
                                this.setState({
                                    desapareceMark:'desaparece',
                                    desaparecePrev: ''
                                });
                            }}
                        />
                    </BottomNavigation>
                </Paper>}



                {this.props.loading   && <MainLoader/>}


                <Dialog
                    autoScrollBodyContent={true}
                    onRequestClose={()=>{this.setState({open:false})}}
                    open={this.state.open}>
                    <h2>¿Cómo usar Markdown?</h2>
                    <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
                        <div style={{display:"flex", flexDirection:"column"}}>
                            <h4>Markdown</h4>
                            <p>**text**</p>
                            <p>*text*</p>
                            <p>[title](http://)</p>
                            <p>`code`</p>
                            <p>![alt](http://)</p>
                            <p>> quote</p>
                            <p>### Heading</p>
                            <p>## Heading</p>
                            <p># Heading</p>


                        </div>
                        <div className="mark" style={{display:"flex", flexDirection:"column"}}>
                            <h4>Resultado</h4>
                            <ReactMarkdown
                                source="**text**"
                            />
                            <ReactMarkdown
                                source="*text*"
                            />
                            <ReactMarkdown
                                source="[title](http://)"
                            />
                            <ReactMarkdown
                                source="`code`"
                            />
                            <ReactMarkdown
                                source="imagen"
                            />
                            <ReactMarkdown
                                source="> quote"
                            />
                            <ReactMarkdown
                                source="### Heading"
                            />
                            <ReactMarkdown
                                source="## Heading"
                            />
                            <ReactMarkdown
                                source="# Heading"
                            />




                        </div>
                    </div>
                </Dialog>

            </div>

        );
    }
}

export default DescriptionPage;