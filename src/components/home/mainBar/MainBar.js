import React, {Component} from 'react';
import './MainBar.css';
import toastr from 'toastr';
import {Link} from 'react-router-dom';
import {Avatar} from 'material-ui';



class MainBar extends Component{

    state = {
        barra:false,
        user: null
    };

    onScroll = () => {
        let y = window.scrollY;
      // console.log(window.scrollY);
      if (y>100) this.setState({barra:true});
      if (y<100) this.setState({barra:false});
    };

    componentDidMount(){
        window.addEventListener('scroll',this.onScroll);
        const user = JSON.parse(localStorage.getItem('userInfo'));
        if(user){
            console.log('yes');
            this.setState({user:user});
        } else{
            console.log('ño');
        }
    }

    render(){
        const {barra, user} = this.state;
        return(
            <div
                onScroll={this.onScroll}
                ref="mainbar"
                className={barra ? "bar-container":"beginning"}>
                <h3
                    style={{float:'left'}}
                >CrowdZapopan</h3>



                <div className="links">
                    <Link
                        style={styles.elLink}
                        to="/explorar" >
                        Explorar
                    </Link>
                    <span style={{color:'white'}}>{" | "}</span>
                    {!user && <Link
                        style={styles.elLink}
                        to="/login" >
                        Iniciar Sesión
                    </Link>}

                    {
                        user && <Avatar
                            style={{float:'right'}}
                            src={user.photoURL}/>
                    }

                </div>



            </div>
        );
    }
}

const styles = {
    elLink: {
        textDecoration:'none'
    }
};




export default MainBar;