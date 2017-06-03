import React, {Component} from 'react';
import {CircularProgress} from 'material-ui';

class MainLoader extends Component{
    render(){
        return(
            <div style={styles.container}>
                <CircularProgress
                    style={styles.progress}
                    size={120}
                    thickness={10} />
            </div>
        );
    }
}

const styles = {
  container: {
      position:'fixed',
      width:'100vw',
      height:'100vh',
      top: 0,
      left: 0,
      background: 'rgba(0,0,0,0.5)',
      zIndez: 10000,

  },
    progress: {
        position:'absolute',
        top:'50%',
        left:'50%'
    }
};

export default MainLoader;