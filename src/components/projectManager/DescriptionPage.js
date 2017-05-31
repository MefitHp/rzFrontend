import React, { Component } from 'react';
import {Toolbar, ToolbarTitle} from 'material-ui/Toolbar';
import {cyan500} from 'material-ui/styles/colors';
import ReactMarkdown from 'react-markdown';
import { RaisedButton, ToolbarGroup } from 'material-ui';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import ActionSettingsEthernet from 'material-ui/svg-icons/action/settings-ethernet';
import ActionVisibility from 'material-ui/svg-icons/action/visibility';
import CircularProgress from 'material-ui/CircularProgress';
import api from '../../Api/Django';
import toastr from 'toastr';



class DescriptionPage extends Component{

    state = {
        input: '',
        selectedIndex: 0,
        ancho: document.documentElement.clientWidth < 600,
        desapareceMark: '',
        desaparecePrev: '',
        buttonLoading: false

    };

    select = (index) => this.setState({selectedIndex: index});


    onChange = (e) => {
       this.setState({
           input: e.target.value
       });
    };

    componentDidMount(){


            this.setState({input:this.props.project.description});

            let s1 = document.getElementById('Select1');
            let s2 = document.getElementById('Select2');

            function select_scroll_1(e) {
                s2.scrollTop = s1.scrollTop; //console.log(s1.scrollTop);
            }

            function select_scroll_2(e) {
                s1.scrollTop = s2.scrollTop; //console.log(s2.scrollTop);
            }


            s1.addEventListener('scroll', select_scroll_1, false);
            // s2.addEventListener('scroll', select_scroll_2, false);
            // desaparecemos el preview en mobiles
            if (this.state.ancho) this.setState({desaparecePrev: 'desaparece'})





    }

    componentWillReceiveProps(nextProps){
    this.setState({input:nextProps.project.description});
    }



    update = () => {
        this.setState({
            buttonLoading:true
        });
        let project = this.props.project;
        project.description = this.state.input;
        api.updateProject(this.props.project.id, project)
            .then(()=>{
            toastr.success('Descripción guardada con éxito');
                this.setState({
                    buttonLoading:false
                });
            })
            .catch((e)=>toastr.error('Algo muy malo pasó!, intenta de nuevo porfavor '));
    };

    render(){
        const {input} = this.state;

        return(
            <div >

                {this.props.loading && <CircularProgress
                    style={{margin:'0 auto', display:'block'}}
                    size={80}
                    thickness={5} />}


                <Toolbar
                    style={{
                        backgroundColor:cyan500,
                        marginBottom:0}}>
                    <ToolbarTitle
                        style={{color:'white'}}
                        text="Descripción de tu proyecto" />
                    <ToolbarGroup>
                        <RaisedButton
                            onTouchTap={this.update}
                            label={!this.state.buttonLoading && "Guardar"}
                            secondary={true}
                            icon={this.state.buttonLoading && <CircularProgress />}
                        />
                    </ToolbarGroup>
                </Toolbar>

                <div className="desc-container">

                    <div
                        className={"desc-editor " + this.state.desapareceMark}

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
                        className={"mark desc-preview " + this.state.desaparecePrev}>
                        <ReactMarkdown
                            id="mijo"
                            style={{color:'red'}}
                            source={input} />
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


            </div>

        );
    }
}

export default DescriptionPage;