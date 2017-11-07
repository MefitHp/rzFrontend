import React, {Component} from 'react';
import api from '../../Api/Django';
import {GridList, GridTile} from 'material-ui/GridList';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import {ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import './adminPanelPage.css';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import ReactMarkdown from 'react-markdown';
import toastr from 'toastr';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Warn from 'material-ui/svg-icons/action/report-problem';


class ValidateProject extends Component{

  constructor(){
    super();
    this.state={
      newComm:{},
      observations:[],
      value:'',
      project:{
        observation:[],
        name:'',
        category:[{
          name:''
        }],

      },
      author:{
        username:'',
        profile:{
          photoURL:'',
        }
      },
      video:''
    }
  }

  componentWillMount(){


    api.getProject(this.props.match.params.id)
        .then(

            p=>{
                console.log(p);
                let video = '';
                if(p.video){video = p.video.split('/').slice(-1)[0];}


                p['video'] = video;
                p['publish'] = new Date(p.publish);
                p['finish'] = new Date(p.finish);

                this.setState({project:p, author:p.author, value:p.status, observations:p.observation});
            }
        )
    .catch(
        e=>{
            console.log(e);
        }
    );
  }

   handleChange = (event, index, value) => {
    const {project} = this.state;
    project.status = value
     this.setState({value, project});
     console.log(this.state.project)
   }
   handleInicio = (event,value) => {
    const {project} = this.state;

    project.publish = value
     this.setState({project});
     console.log(this.state.project)
   }
   handleFinal = (event,value) => {
    const {project} = this.state;

    project.finish = value
     this.setState({project});
     console.log(this.state.project)
   }
   handleText = (event, index) => {
     const field = event.target.name;
     const project = this.state.project;
     project[field] = event.target.value;
     this.setState({project});
     console.log(this.state.project)
   }
   modificarProyecto = () => {
     const {project} = this.state;
     console.log(this.state.project.id, 'b',project);
     delete project.photo;
     api.updateProject(this.state.project.id, project)
      .then(r=>{
        toastr.success('Haz modificado este proyecto')
      }).catch(e=>{
        console.log(e)
      })
   }

   addComment = () => {

        let nuevo = this.state.newComm;
        nuevo.project = this.state.project.id;
        api.newObservation(nuevo)
            .then(
                r=>{
                    let observations = this.state.observations;
                    observations.push(r);
                    this.setState({
                        observations,
                        newComm:{}
                    });
                    toastr.success('Se añadió tu observación')

                })
            .catch(
                e=>{
                    toastr.options.closeButton=true;
                    toastr.error(e.data.text);

                }
            );





   }
   newObservation = (e) => {

     let observation = this.state.newComm;
     let field = e.target.name;
     observation[field] = e.target.value;
     this.setState({
         newComm:observation
     });

   }
   cleanText =(e)=>{
     e.target.value=""
   }
  render(){
    return(

      <div style={{paddingTop:50 }}>
        <GridList cols={3} cellHeight={'auto'} style={{padding:'3% 1% 1% 1%'}}>
          <GridTile cols={document.documentElement.clientWidth > 600 ? 2:3}>
            <iframe
                title="Video" width="100%"
                height={document.documentElement.clientWidth > 600 ? 345 : 200}

                src={"https://www.youtube.com/embed/" + this.state.project.video + ""}
                frameBorder="0"
                allowFullScreen/>
            <Paper zDepth={1} style={document.documentElement.clientWidth > 600 ? {marginTop:4, height:'36vh', padding:'2%'}:{marginTop:4, height:'10vh', padding:'2%'}}>
              <h1 style={{margin:0, textAlign:'center'}}>{this.state.project.name}</h1>
              <GridList cols={3} cellHeight={'auto'} style={document.documentElement.clientWidth > 600 ? {}:{display:'none'}}>
                <GridTile cols={document.documentElement.clientWidth > 600 ? 1 :3}>

                    <ListItem
                      primaryText={this.state.author.username}
                      leftAvatar={<Avatar src={this.state.author.profile.photoURL}/>}>
                    </ListItem>

                    {this.state.project.category.map((cat, key)=>{
                      return(
                        <Chip key={key} style={{marginTop:'1%'}} >{cat.name}</Chip>
                      );
                    })}

                </GridTile>
                <GridTile cols={document.documentElement.clientWidth > 600 ? 2 :3}>
                <div
                  style={{height:200,overflowY:'scroll'}}>
                    <ReactMarkdown source={this.state.project.description}/>
                </div>
                </GridTile>
              </GridList>
            </Paper>

          </GridTile>
          <GridTile cols={document.documentElement.clientWidth > 600 ? 1 :3} >
            <Paper zDepth={1}
              style={{padding:'1%',height:'90vh'}}>
              <div>
                <ListItem disabled={true} primaryText="Status" leftIcon={<ContentInbox />} />
                  <SelectField
                    style={{paddingLeft:'5%'}}
                   floatingLabelText="El estado actual será"
                   value={this.state.value}
                   autoWidth={true}
                   onChange={this.handleChange}
                 >
                   <MenuItem value={'editing'} primaryText="Editando" />
                   <MenuItem value={'review'} primaryText="En Revisión" />
                   <MenuItem value={'rejected'} primaryText="Rechazado" />
                   <MenuItem value={'approved'} primaryText="Aprobado" />

                 </SelectField>
                <Divider style={{width:'100%'}} />
              </div>

              <div>
                <ListItem disabled={true} primaryText={"Meta Actual: $"+ this.state.project.goal} leftIcon={<ContentInbox />} />
                  <TextField
                    name='goal'
                    style={{paddingLeft:'5%'}}
                    hintText={'Actual: $'+this.state.project.goal}
                    onBlur={this.handleText}
                  /><br />
                <Divider style={{width:'100%'}} />
              </div>
              <div>
                <ListItem disabled={true} primaryText="Periodo de Fondeo" leftIcon={<ContentInbox />} />
                  <div style={{padding:'2%'}}>
                    <GridList cols={2} cellHeight={'auto'}>
                      <GridTile>
                        <DatePicker
                          name='publish'
                          hintText="Inicio"
                          style={{width:'50%'}}
                          value={this.state.project.publish}
                          autoOk={true}
                          onChange={this.handleInicio}/>
                      </GridTile>
                      <GridTile>
                        <DatePicker
                          name='finish'
                          value={this.state.project.finish}
                          hintText="Final"
                          style={{width:'50%'}}
                          autoOk={true}
                          onChange={this.handleFinal}/>
                      </GridTile>
                    </GridList>
                  </div>
                <Divider style={{width:'100%'}} />
              </div>
              <div
                style={{overflowY:'scroll', height:'33vh', marginBottom:'2%', position:'relative', width:'100%'}}>
                <ListItem disabled={true} primaryText="Observaciones" leftIcon={<Warn />} />
                  <TextField
                      fullWidth={true}
                    name='text'
                    style={{paddingLeft:'5%'}}
                    hintText="Ser mas claro en..."
                    floatingLabelText="El emprendedor deberá..."
                    multiLine={true}
                    rows={2}
                    onChange={this.newObservation}
                    onBlur={this.cleanText}
                  /><br />

                {this.state.observations.map(obs=>{
                      return(
                        <div key={obs.id}>
                          <ListItem
                            disabled={true}
                            primaryText={obs.text}

                            style={{background:'yellow', marginBottom:1}} />
                        </div>
                      )
                    })}
                    <FloatingActionButton mini={true}
                      style={{position:'absolute', top:'50', right:'10'}}
                      onTouchTap={this.addComment}>
                      <ContentAdd />
                    </FloatingActionButton>
              </div>
               <RaisedButton
                 primary={true}
                 label="Guardar"
                 fullWidth={true}
                 onTouchTap={this.modificarProyecto}/>
            </Paper>
          </GridTile>
        </GridList>
      </div>
    );
  }
}
export default ValidateProject;
