import React, {Component} from 'react';
import Paper from 'material-ui/Paper';

import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';
import Divider from 'material-ui/Divider';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';



const style = {
  paper: {
    width:'85%',
    display: 'flex',
    justifyContent:'flex-start',
    margin: '10px auto',

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
  render(){
    return(

        <Paper style={style.paper}  zDepth={1}>
          <Menu>
            <MenuItem primaryText="Tengo un el brazo derecho más fuerte" leftIcon={<RemoveRedEye />} disabled={true} style={style.item}/>
            <MenuItem primaryText="Share" leftIcon={<PersonAdd />} disabled={true} style={style.item}/>
            <MenuItem primaryText="Get links" leftIcon={<ContentLink />}disabled={true} style={style.item} />
            <Divider />
            <MenuItem primaryText="Make a copy" leftIcon={<ContentCopy />} disabled={true} style={style.item}/>
            <MenuItem primaryText="Download" leftIcon={<Download />} disabled={true} style={style.item}/>

          </Menu>
        </Paper>


    );
  }
}

export default BasicInfo;
