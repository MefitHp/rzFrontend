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


class ValidateProject extends Component{

  constructor(){
    super();
    this.state={
      value:'',
      project:{

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
    console.log(this.props.match)
    api.getProject(this.props.match.params.id)
        .then(
            p=>{
                console.log(p);
                this.setState({project:p, author:p.author, value:p.status});
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
     console.log('b',project);
     delete project.photo;
     api.updateProject(this.state.project.id, project)
      .then(r=>{
        toastr.success('Haz modificado este proyecto')
      }).catch(e=>{
        console.log(e)
      })
   }
  render(){
    return(

      <div style={{paddingTop:50 }}>
        <GridList cols={3} cellHeight='100%' style={{padding:'3% 1% 1% 1%'}}>
          <GridTile cols={2}>
            <iframe title="Video" width="100%" height="345px" src="https://www.youtube.com/embed/IvUU8joBb1Q?autoplay=0" frameBorder="0" allowFullScreen></iframe>
            <Paper zDepth={1} style={{marginTop:4, height:'30vh', padding:'2%'}}>
              <h1 style={{margin:0, textAlign:'center'}}>{this.state.project.name}</h1>
              <GridList cols={3} cellHeight={'auto'} style={{height:130, overflowY:'scroll'}}>
                <GridTile cols={1} >

                    <ListItem
                      primaryText={this.state.author.username}
                      leftAvatar={<Avatar src={this.state.author.profile.photoURL}/>}>
                    </ListItem>

                    {this.state.project.category.map(cat=>{
                      return(
                        <Chip style={{marginTop:'1%'}}>{cat.name}</Chip>
                      );
                    })}

                </GridTile>
                <GridTile cols={2}>
                <div style={{height:200,overflow:'scroll'}}>
                    <ReactMarkdown source={this.state.project.description}/>
                </div>
                </GridTile>
              </GridList>
            </Paper>

          </GridTile>
          <GridTile cols={1} style={{padding:'0 2% 2% 2%'}}>
            <Paper zDepth={1}
              style={{padding:'1%',height:'85vh'}}>
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
                <ListItem disabled={true} primaryText="Meta" leftIcon={<ContentInbox />} />
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
                          autoOk={true}
                          onChange={this.handleInicio}/>
                      </GridTile>
                      <GridTile>
                        <DatePicker
                          name='finish'
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
                style={{overflow:'scroll'}}>
                <ListItem disabled={true} primaryText="Observaciones" leftIcon={<ContentInbox />} />
                  <TextField
                    name='observaciones'
                    style={{paddingLeft:'5%'}}
                    hintText="Ser mas claro en..."
                    floatingLabelText="El emprendedor deberá..."
                    multiLine={true}
                    rows={3}
                  /><br />
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
