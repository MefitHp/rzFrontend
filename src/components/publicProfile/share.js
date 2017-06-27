import React, {Component} from 'react';
import Shar from 'material-ui/svg-icons/social/share';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FacebookProvider, { Share } from 'react-facebook'
import FontAwesome from 'react-fontawesome';
import IconButton from 'material-ui/IconButton';


class Compartir extends Component{

  constructor(){
    super();
    this.state={
      open:false
    }
  }



  handleOpen = () => {
  this.setState({open: true});
};

handleClose = () => {
  this.setState({open: false});
};
shareTw=(url)=>{
  window.open(url, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=150,left=500,width=400,height=400");
}
shareGo=(url)=>{
  window.open(url, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=150,left=500,width=400,height=400");
}

  render(){
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,

    ];
    return(

    <div>
      <IconButton tooltip="Comparte"
        tooltipPosition="bottom-right"
        onTouchTap={this.handleOpen}
        iconStyle={{width: 50, height: 50,}}
        style={{position:'absolute', top:10, left:70,width: 50,height: 50,}}>
        <Shar/>
      </IconButton>

      <Dialog
        contentStyle={{width:'30%'}}
        title="Comparte este proyecto"
        actions={actions}
        modal={false}
        open={this.state.open}
        onRequestClose={this.handleClose}

      >

        <FacebookProvider appId="1351076504983566">
          <Share href={"https://rz.fixter.org/detail/"+this.props.pid}>
            <RaisedButton
              label="Facebook"

              backgroundColor="#4267b2"
              fullWidth={true}
              icon={<FontAwesome name="facebook-square"
                style={{color:'white'}}
                size='2x'/>}

              labelColor="#ffffff"
              onTouchTap={this.handleClose}
            />
          </Share>
        </FacebookProvider>
        <br/>

        <br/>

        <a class="twitter-share-button"

          onClick={()=>this.shareTw(
            "https://twitter.com/intent/tweet?text=Apoya el proyecto " +this.props.pname+ " en http://rz.fixter.org/detail/"+this.props.pid
          )}>

          <RaisedButton
            label="Twitter"
            labelColor="#ffffff"
            backgroundColor="#1b95e0"
            fullWidth={true}
            icon={<FontAwesome
              size='2x'
              name="twitter-square"
              style={{color:'white'}}/>}

            onTouchTap={this.handleClose}/>
        </a>
        <br/>

        <br/>

      <a
        onClick={()=>this.shareGo(
          "https://plus.google.com/share?text=Apoya el proyecto " +this.props.pname+ " en http://rz.fixter.org/detail/"+this.props.pid
        )}>

        <RaisedButton
          label="google"
          labelColor="#ffffff"
          backgroundColor="#db4437"
          fullWidth={true}
          icon={<FontAwesome
            size='2x'
            name="google-plus-square"
            style={{color:'white'}}/>}

          onTouchTap={this.handleClose}/>
      </a>

      </Dialog>
    </div>
    );
  }
}

export default Compartir;
