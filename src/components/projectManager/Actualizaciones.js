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
import {GridList, GridTile} from 'material-ui/GridList';
import firebase from '../../Api/firebase';
import toastr from 'toastr';


class Actualizaciones extends Component{


  constructor(){
    super()
    this.state={
      imageUrl:'',
      text:'',
      project:{},
      update:{
        update:'',
        project:'',
        author:'',
        image:''
      },
      updates:[]
    }
  }
  componentWillMount(){
    api.getProject(this.props.match.params.projectId)
        .then(project=>{
            if(project.detail === "No encontrado."){
                this.props.history.push('/');
            }

            this.setState({updates:project.updates, loading:false, project});
            // console.log('dentro', project);
            console.log(project)
            console.log('state: ',this.state.updates);
        })
        .catch(e=>{
            alert('no se pudo',e);
            this.props.history.push('/');

        });

  }
  sendUpdate=()=>{
    let update={
      update:this.state.text,
      author:this.state.project.author.id,
      image:this.state.imageUrl,
      project:this.state.project.id
    }
    api.postUpdates(update).then(r=>{
      toastr.success('Se agregó tu actualización')
      this.state.updates.push(update)
      this.setState({updates:this.state.updates})
    }).catch(e=>{
      console.log(e)
    })
  }

  updateText=(e)=>{
    let text = e.target.value
    this.setState({text})
    console.log(this.state.text)
  }
  imageFirebase=(e)=>{

    let file = e.target.files[0];
    let storage = firebase.storage().ref().child('updates/' + file.name);

    storage.put(file).then((snapshot)=> {
      let imageUrl = snapshot.metadata.downloadURLs[0]

      this.setState({imageUrl})
    });
  }


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



                <GridList
                  cols={3}
                  cellHeight='auto'
                  style={{padding:'2%'}}>
                  <GridTile style={{padding:'1%'}} cols={1}>
                    {this.state.updates.map(act=>{
                        return(
                          <Paper style={{padding:'1% 2%', marginBottom:'1%'}}>
                              <h5 style={{margin:'0 auto'}}>{act.update}</h5>
                              {act.image?<img
                                style={{width:'100%'}}
                                src={act.image}/>:''}
                          </Paper>
                        );
                      }).reverse()}

                  </GridTile>
                  <GridTile cols={2} style={{padding:'1%'}}>
                    <Paper style={{padding:'1% 2%', height:'auto'}}>
                      <h5>Agrega una actualización</h5>
                      <div style={{height:'20vh', overflowY:'scroll', position:'relative', marginBottom:'5%'}}>
                        <TextField
                          onChange={this.updateText}
                          multiLine={true}
                          rows={2}
                          fullWidth={true}
                          hintText="A punto de lograrlo!!!"
                          floatingLabelText="Actualización"
                        /><br />

                      </div>
                      <FloatingActionButton
                        onTouchTap={this.sendUpdate}
                        mini={true} style={{position:'absolute', top:20, right:20}}>
                        <ContentAdd />
                      </FloatingActionButton>

                      <div style={{position:'absolute', top:100, right:20}}>
                        <label htmlFor="upload" className="file-upload__label">
                          <Photo/>

                        </label>
                        <input
                          onChange={this.imageFirebase}
                          id="upload" className="file-upload__input" type="file" name="file-upload"/>
                      </div>

                        {this.state.imageUrl?<img src={this.state.imageUrl}
                          style={{width:'100%', overflow:'hidden'}}/>:''}

                    </Paper>
                  </GridTile>
                </GridList>


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
