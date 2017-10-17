import React, {Component} from 'react';
import './UserProfilePage.css';
import LaBarra from '../laBarra/LaBarra';
import MainLoader from '../common/MainLoader';
//MaterialUI
import {Card, CardText, FlatButton, Tabs, Tab, FloatingActionButton} from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';

//redux
import {connect} from 'react-redux';
import {store} from '../../index';

class UserProfile extends Component{

    state = {
      user:{},
      fetched:false
    };

    componentWillReceiveProps(p){
        this.setState({user:p.user, fetched:p.fetched});
    }

    componentWillMount(){
        const userInfo = localStorage.getItem("userInfo");
        if(!userInfo) this.props.history.push("/login");
        //this.setState({lista: store.getState().lista})
        this.unsubscribe = store.subscribe(() => {
            const {user} = store.getState();
            this.setState({user, fetched:user!=={}});
        })
    }

  render(){
      const {fetched, user}  = this.state;
      console.log("ora?", user);
    return(
        <div>

            <LaBarra history={this.props.history} />
            {!fetched ? <MainLoader/> :
                <div  className="perfil-container">
                    <Card>
                        <CardText style={{textAlign:"center"}}>
                            <img style={styles.image} src={user.photoURL ? user.photoURL : "https://maxcdn.icons8.com/Share/icon/Users//circled_user_female1600.png"} alt="user pic"/>
                            <h2>{user.displayName}</h2>
                            <FlatButton
                                label="Acompleta tu información"
                                backgroundColor="lightblue"
                            />
                        </CardText>

                    </Card>

                    <Card style={{marginTop:20}}>
                        <Tabs>
                            <Tab label="Muro" >
                                <div>
                                    <h2>Tab One</h2>
                                    <p>
                                        This is an example tab.
                                    </p>
                                    <p>
                                        You can put any sort of HTML or react component in here. It even keeps the component state!
                                    </p>
                                </div>
                            </Tab>
                            <Tab label="Proyectos" >
                                <div>
                                    <h2>Tab Two</h2>
                                    <p>
                                        This is another example tab.
                                    </p>
                                    <FloatingActionButton style={styles.botonFlotante}>
                                        <ContentAdd />
                                    </FloatingActionButton>
                                </div>
                            </Tab>
                            <Tab
                                label="Aportes"
                                data-route="/home"
                            >
                                <div>
                                    <h2>Tab Three</h2>
                                    <p>
                                        This is a third example tab.
                                    </p>
                                </div>
                            </Tab>
                        </Tabs>
                    </Card>

                </div>
            }
        </div>
    );
  }
}

const styles = {
  image:{
      borderRadius:"50%",
      width:"200px"
  },
    botonFlotante:{
      position:"absolute",
        bottom:"5px",
        right:"5px"
    }
};

function mapStateToProps(state){
    console.log(state);
    return {
        user: state.user,
        fetched: state.user !== {}
    }
}

function mapDispatchToProps(){
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
