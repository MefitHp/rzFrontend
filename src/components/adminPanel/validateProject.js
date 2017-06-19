import React, {Component} from 'react';
import api from '../../Api/Django';
import {GridList, GridTile} from 'material-ui/GridList';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import {ListItem} from 'material-ui/List';



class ValidateProject extends Component{

  constructor(){
    super();
    this.state={
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </GridTile>
              </GridList>
            </Paper>

          </GridTile>
          <GridTile cols={1} style={{padding:'0 2% 2% 2%'}}>
            <Paper zDepth={1} style={{height:'85vh'}}>
              {this.state.author.username}
            </Paper>
          </GridTile>
        </GridList>
      </div>
    );
  }
}
export default ValidateProject;
