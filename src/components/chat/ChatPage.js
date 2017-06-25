import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import UserList from './UserList';
import { Route } from 'react-router-dom';
import ChatContent from './ChatContent';
import {TextField} from 'material-ui';



class ChatPage extends Component{

    state = {
      personName:'BlisS Campos',
        open:true
    };

    handleToggle = () => this.setState({open: !this.state.open});

    getChat = () => {
        return (
            <ChatContent

            />
        );
    };

    componentDidMount(){
        window.addEventListener('scroll', ()=>{
            console.log(this.props.match.url);
        },false)
    }


    render(){
        const {personName} = this.state;
        return(
            <div>
                <Drawer
                    open={this.state.open}
                    docked={document.documentElement.clientWidth > 600}
                    onRequestChange={this.handleToggle}
                >

                    <MenuItem>
                        <ActionSearch style={styles.icon}/>
                        <TextField
                            hintText="Buscar"
                            fullWidth={false}
                            onChange={this.props.onChangeSearch}
                            underlineFocusStyle={styles.underline}
                        />

                    </MenuItem>
                    <UserList elMatch={this.props.match.url}/>
                </Drawer>

                <div  style={this.state.open ? styles.open:styles.closed}>
                    <AppBar
                        title={personName}
                        style={styles.bar}
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                        onLeftIconButtonTouchTap={this.handleToggle}
                    />


                    <div>
                        {/* <Route path={`${this.props.match.url}/:userId`} render={this.getChat}/> */}
                        <Route path={`${this.props.match.url}/:userId`} component={ChatContent} />

                        <Route exact path={this.props.match.url} render={()=>{
                            return <h1>Selecciona un usuario</h1>
                        }}/>
                    </div>

                </div>

            </div>
        );
    }
}

const styles = {

    bar:{
        backgroundColor:'red',
        position:'fixed'
    },
    open:{
        paddingLeft:255,
        transition:'all 1s ease'
    },
    closed:{
        paddingLeft:0,
        transition:'all 1s ease'
    },
    icon:{
        marginRight: 14,
        color: 'grey'
    }
};

export default ChatPage;
