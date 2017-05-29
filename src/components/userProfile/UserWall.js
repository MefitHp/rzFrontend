import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Avatar from 'material-ui/Avatar';
import Dialog from 'material-ui/Dialog';
import './UserProfilePage.css';

const stylePaper = {
  width: '99%',
  marginTop: 10,
  padding:'2%',
  textAlign: 'left',
  display: 'inline-block',
  position:'relative'
};

const styleButton = {
  position:'absolute',
  right:10,
  bottom:10

}

class Post extends Component{
  render(){
    return(
      <Paper zDepth={2} style={stylePaper}>
        <div className="userp posts">
          <Avatar  src="http://artoflegends.com/jp/wp-content/uploads/svu/champion/square/23_Web_0.jpg" />
          <div className="userp itemp">
            <h4>Tryndamere pichó la comida</h4>
            <p>Hace 2 horas</p>
          </div>
        </div>
        <div>
          Unas tortas ahogadas
        </div>
      </Paper>
    );
  }
}

class UserWall extends Component{
  constructor(){
    super();
    this.state={
      open: false,
    }
  }

  handleOpen = () => {
   this.setState({open: true});
 };

 handleClose = () => {
   this.setState({open: false});
 };
  render(){
    return(
      <div>

          <Post/>
          <Post/>
          <Post/>

          <Dialog
            title="Dialog With Actions"
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}>
           The actions in this window were passed in as an array of React objects.
         </Dialog>
          <FloatingActionButton style={styleButton} onTouchTap={this.handleOpen}>
          <ContentAdd />
        </FloatingActionButton>
      </div>

    );
  }
}

export default UserWall;
