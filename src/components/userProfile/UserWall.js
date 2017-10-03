import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import {Link} from 'react-router-dom';
import './UserProfilePage.css';
import api from '../../Api/Django';
import 'moment/locale/es';
import moment from 'moment';

const stylePaper = {
  width: '99%',
  marginLeft:'.5%',
  padding:'2%',
  marginTop: '1%',
  textAlign: 'left',
  display: 'inline-block',
  position:'relative'
};

class Post extends Component{



  render(){
    return(
      <Paper zDepth={2} style={stylePaper}>
        <div className="userp posts">
          <Avatar  src={this.props.projectimage} />
          <div className="userp itemp">
            <h5 style={{color:'#bcbcbc'}}>actualización de{' '}
              <Link
                style={{textDecoration:'none', color:'#000'}}
                to={'/detail/'+this.props.idproject}>
                 {this.props.project}
              </Link>
            {' '+this.props.date}
            </h5>
            <span></span>

          </div>
        </div>
        <div>
          {this.props.texto}
          {this.props.image?
            <img
              style={{width:'100%'}}
              src={this.props.image}/>:''
          }
        </div>
      </Paper>
    );
  }
}

class UserWall extends Component{

  constructor(){
    super()
    this.state={
      updates:[]
    }
  }
  componentWillMount(){
    api.getUserUpdates().then(r=>{
      this.setState({updates:r.data})
      console.log(this.state.updates)
      this.dates()
    }).catch(e=>{
      console.log(e)
    })
  }
  dates=()=>{
    moment.locale('es')
    for (let p in this.state.updates){
      let fecha = this.state.updates[p].date
      fecha=moment(fecha).startOf().fromNow();
      //fecha=moment(fecha).format('LL')

      let updates = this.state.updates;
      updates[p]['date'] = fecha
      //polizas[p]['fecha_poliza2'] = fecha2
      this.setState({updates});
      console.log(this.state.updates)
    }
  }

  render(){
    return(
      <div>
        {this.state.updates.map(up=>{
          return(
            <div>
              <Post
                texto={up.update}
                image={up.image}
                idproject={up.project.id}
                project={up.project.name}
                projectimage={up.project.photoURL}
                date={up.date}/>
            </div>
          );
        }).reverse()}
      </div>

    );
  }
}

export default UserWall;
