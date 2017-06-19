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


class ValidateProject extends Component{

  constructor(){
    super();
    this.state={
      value:1,
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
                this.setState({project:p, author:p.author});
            }
        )
    .catch(
        e=>{
            console.log(e);
        }
    );
  }

   handleChange = (event, index, value) => this.setState({value});
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                </GridTile>
              </GridList>
            </Paper>

          </GridTile>
          <GridTile cols={1} style={{padding:'0 2% 2% 2%'}}>
            <Paper zDepth={1}
              style={{padding:'1%',height:'85vh', display:'flex', flexDirection:'column', justifyContent:'space-around'}}>
              <div>
                <ListItem disabled={true} primaryText="Status" leftIcon={<ContentInbox />} />
                  <SelectField
                    style={{paddingLeft:'5%'}}
                   floatingLabelText="El estado actual será"
                   value={this.state.value}
                   autoWidth={true}
                   onChange={this.handleChange}
                 >
                   <MenuItem value={1} primaryText="Never" />
                   <MenuItem value={2} primaryText="Every Night" />
                   <MenuItem value={3} primaryText="Weeknights" />
                   <MenuItem value={4} primaryText="Weekends" />
                   <MenuItem value={5} primaryText="Weekly" />
                 </SelectField>
                <Divider style={{width:'100%'}} />
              </div>
              <div>
                <ListItem disabled={true} primaryText="Meta" leftIcon={<ContentInbox />} />
                  <TextField
                    style={{paddingLeft:'5%'}}
                    hintText="$100000"
                    floatingLabelText="Meta Actual"
                  /><br />
                <Divider style={{width:'100%'}} />
              </div>
              <div
                style={{overflow:'scroll'}}>
                <ListItem disabled={true} primaryText="Observaciones" leftIcon={<ContentInbox />} />
                  <TextField
                    style={{paddingLeft:'5%'}}
                    hintText="Ser mas claro en..."
                    floatingLabelText="El emprendedor deberá..."
                    multiLine={true}
                    rows={5}
                  /><br />
              </div>
            </Paper>
          </GridTile>
        </GridList>
      </div>
    );
  }
}
export default ValidateProject;
