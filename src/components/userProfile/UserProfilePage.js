import React, {Component} from 'react';
import './UserProfilePage.css';
import Paper from 'material-ui/Paper';


const style = {
  height: 200,
  width: 200,
  padding: 1,
  textAlign: 'center',
  display: 'inline-block',
};

class UserProfile extends Component{
  render(){
    return(
        <div>
          <section className="userp backimage">
            <div className="userp marcimage">
              <Paper zDepth={2} style={style} rounded={true} >
                <img className="userp imagep" src="http://artoflegends.com/jp/wp-content/uploads/svu/champion/square/23_Web_0.jpg"/>
              </Paper>

            </div>
          </section>
          <section>
            
          </section>
        </div>
    );
  }
}

export default UserProfile;
