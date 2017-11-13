import React from 'react';
import './Card.css';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import LinearProgress from 'material-ui/LinearProgress';
import {Link} from 'react-router-dom';
//import FlatButton from 'material-ui/FlatButton';
//redux
import {connect} from 'react-redux';


class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      completed: 0
    };
  }

  componentDidMount() {
    this.timer = setTimeout(() => this.progress(5), 1000);
    // console.log('mi prop:',this.props.project);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  progress(completed) {
    if (completed > this.props.project.actual_percent) {
      this.setState({completed:this.props.project.actual_percent});
    } else {
      this.setState({completed});
      const diff = Math.random() * 10;
      this.timer = setTimeout(() => this.progress(completed + diff), 1000);
    }
  }

    render() {

         const {project} = this.props;

         const porcent = Math.round(this.props.project.actual_percent);



        return (
        <div className='container'>
<Link to={'/detail/' + project.id} >
            <div className='card flip '>
                  <div className='front'>
                      <div className='image' style={{backgroundImage:`url('${project.photo}')`}}>
                        <div className='extras'>
                          <FontIcon className='material-icons etiqueta' style={{transform:'scale(.4)', color:'white'}} >local_offer</FontIcon>
                          <span>{this.props.categories.find(c=>c.id==project.category[0]).name}</span> {/*Corrige las categorias*/}
                        </div>
                      </div>

                  		<p id="card" className="project" style={{fontWeight:'bold', fontSize:20, color:'black', textAlign: 'left', margin: '20px', marginBottom: 0}}>
                        {this.props.project.name}
                      </p>



                      <div style={{textAlign: 'left', marginLeft: '20px', display: 'flex', alignItems: 'center', marginTop: '10px'}}>
                        <Avatar src={this.props.project.photoURL} style={{height: '25px',width: '25px', marginRight:'5px'}}/>
                        <span style={{fontSize:'12px', color:'#61656a'}}>{project.author.username}</span>
                      </div>
                      <div>
                          <p className="parra" >
                              {this.props.project.summary}
                          </p>
                      </div>
                  <div className='bar_progress'>
                      <LinearProgress mode="determinate" color="#4596A0" value={this.state.completed} />
                      <p>{porcent}% financiado <span>de la meta de</span> <span>${this.props.project.goal}</span> </p>

                  </div>

                  <div className='iconos'>
                          <div className='inf_project'>

                              <div className='data_project'>
                                  <FontIcon className='material-icons icon_dest' style={{color:'#4596A0'}}>timer</FontIcon>
                                  <p className='cantidad'>OLI</p>
                                  <p>Días restantes</p>
                              </div>
                              <div  className='data_project'>
                                  <FontIcon className='material-icons icon_dest' style={{color:'#4596A0'}}>group</FontIcon>
                                  <p className='cantidad'>{project.donadores}</p>
                                  <p>Patrocinadores</p>
                              </div>
                              <div  className='data_project'>
                                  <FontIcon className='material-icons icon_dest' style={{color:'#4596A0'}}>trending_up</FontIcon>
                                  <p className='cantidad'>$ {project.actual_score}</p>
                                  <p>Recaudado</p>
                              </div>
                          </div>
                      </div>
                  </div>
          	</div>
            </Link>
        </div>
        );
    }
}

function mapStateToProps(state){
    return {
        categories:state.category.list
    }
}

export default Card = connect(mapStateToProps)(Card);
