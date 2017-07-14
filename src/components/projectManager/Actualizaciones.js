import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import TextField from 'material-ui/TextField';
import {Paper, Toolbar, ToolbarTitle} from 'material-ui';
import {cyan500} from 'material-ui/styles/colors';
import api from '../../Api/Django';
import './Manager.css';
import Photo from 'material-ui/svg-icons/editor/insert-photo';


class Actualizaciones extends Component{


  constructor(){
    super()
    this.state={
      open: false,
      update:{
        update:'',
        project:'',
        author:'',
      },
      updates:[{
        texto:'texto de la actualización',
        image:'https://images.pexels.com/photos/449461/pexels-photo-449461.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'

      }]
    }
  }
  componentWillMount(){
    api.getProject(this.props.match.params.projectId)
        .then(project=>{
            if(project.detail === "No encontrado."){
                this.props.history.push('/');
            }
            let updates = project.updates
            this.setState({updates, loading:false});
            // console.log('dentro', project);

            console.log('state: ',this.state.project);
        })
        .catch(e=>{
            alert('no se pudo',e);
            this.props.history.push('/');

        });
  }
  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

    render(){
      const actions = [
        <FlatButton
          label="Cancelar"
          primary={true}
          onTouchTap={this.handleClose}
        />,
        <FlatButton
          label="Actualizar"
          primary={true}

          onTouchTap={this.handleClose}
        />,
      ];
        return(
            <div>
                <Toolbar
                    style={{backgroundColor:cyan500}}>
                    <ToolbarTitle
                        style={{color:'white'}}
                        text="Actualizaciones de estado" />
                </Toolbar>

                <div style={{marginBottom:100}} />

                {this.state.updates.map(act=>{
                    return(
                      <Paper className="la-card">
                          <h5>{act.texto}</h5>
                          <img
                            style={{width:'100%'}}
                            src={act.image}/>
                      </Paper>
                    );
                  })}




                  <Dialog
                    title="Actualización para los seguidores de tu proyecto"
                    contentStyle={{width:'50%', position:'relative'}}
                    actions={actions}
                    modal={true}
                    autoScrollBodyContent={true}
                    open={this.state.open}
                  >
                    <div style={{height:'20vh', overflowY:'scroll', position:'relative'}}>
                      <TextField
                        multiLine={true}
                        rows={2}
                        fullWidth={true}
                        hintText="A punto de lograrlo!!!"
                        floatingLabelText="Actualización"
                      /><br />

                    </div>

                    <div style={{position:'absolute', top:100, right:0}}>
                      <label htmlFor="upload" className="file-upload__label"><Photo/></label>
                      <input id="upload" className="file-upload__input" type="file" name="file-upload"/>
                    </div>

                  </Dialog>

                <FloatingActionButton
                    style={style}
                    onTouchTap={this.handleOpen}>
                  <ContentAdd />
                </FloatingActionButton>
            </div>
        );
    }
}

const style = {
    position:'fixed',
    bottom:40,
    right:30,
    zIndex:999
};

export default Actualizaciones;
