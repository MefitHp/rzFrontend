import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Dialog from 'material-ui/Dialog';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';
import Divider from 'material-ui/Divider';
import Edit from 'material-ui/svg-icons/content/create';



const style = {
  paper: {
    width:'100%',
    display: 'flex',
    justifyContent:'flex-start',
    margin: '4% auto',

  },
  rightIcon: {

    textAlign: 'center',
    lineHeight: '24px',
  },
  item:{
    color:'#000',

  }
};


class BasicInfo extends Component{

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

        <Paper style={style.paper}  zDepth={1}>
          <Menu>
            <MenuItem primaryText="Tengo un el brazo derecho más fuerte" leftIcon={<RemoveRedEye />} disabled={true} style={style.item}/>
            <MenuItem primaryText="Challenger" leftIcon={<PersonAdd />} disabled={true} style={style.item}/>
            <MenuItem primaryText="M 7" leftIcon={<ContentLink />}disabled={true} style={style.item} />
            <Divider />

            <MenuItem primaryText="Edit" leftIcon={<Edit />}  style={style.item} onTouchTap={this.handleOpen}/>

            <Dialog
              title="Dialog With Actions"
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}>

           </Dialog>
          </Menu>
        </Paper>


    );
  }
}

export default BasicInfo;
