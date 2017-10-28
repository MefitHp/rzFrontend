import React from 'react';
import './Card.css';
import Avatar from '../common/Avatar';
import FontIcon from 'material-ui/FontIcon';
import LinearProgress from 'material-ui/LinearProgress';
import {Link} from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';

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
    if (completed > 100) {
      this.setState({completed: 100});
    } else {
      this.setState({completed});
      const diff = Math.random() * 10;
      this.timer = setTimeout(() => this.progress(completed + diff), 1000);
    }
  }

  render() {
    const {project} = this.props;
    return (
      <div className='container'>
        <Link to={'detail/' + project.id}>
          <div className='card flip'>
            <div className='front'>
              <div className='image' style={{
                backgroundImage: `url('${project.photo}')`
              }}>
                <div className='extras'>
                  <span>{project.category[0].name}</span>
                </div>
              </div>
              <div>
              <div className='datos' style={{
                  background: 'rgba(0, 0, 0, .7)',
                }}>
                <p className="project" style={{
                  margin: 0,
                  fontSize: 20,
                  marginLeft: 10
                }}>
                  {this.props.project.name}
                </p>
                </div>
                <div className='text_card'>
                <span style={{
                    color: '#61656a',
                    fontSize: 12,
                    marginLeft: 10
                  }}>
                  Por: {project.author.username}
                </span>
              </div>
                <div className='description'>
                  <p>
                    {this.props.project.summary}
                  </p>
                </div>
                {/*<span className='text' style={{
                    color: '#61656a',
                    fontSize: 12
                  }}>
                  Por: {project.author.username}
                </span>*/}
              </div>
              {/*<div className='meta'>
                <p>$ {project.goal}</p>
              </div>*/}
              <div className='bar_progress'>
                <LinearProgress mode="determinate" value={30} color='#5BA9A6' style={{
                  height: 10
                }}/>
              </div>
              <div className='iconos'>
                <div className='inf_project'>
                  <div className='data_project'>
                    <p className='cantidad' style={{
                        color: '#43a7cb',
                        fontSize: 18
                      }}>$ {project.goal}</p>
                    <p style={{fontSize: 14}}>Donado</p>
                  </div>
                  <div className='data_project'>
                    <p className='cantidad' style={{
                        color: '#43a7cb',
                        fontSize: 18
                      }}>14 mil</p>
                    <p style={{fontSize: 14}}>Seguidores</p>
                  </div>
                  <div className='data_project'>
                    <p className='cantidad' style={{
                        color: '#43a7cb',
                        fontSize: 18
                      }}>14 mil</p>
                    <p style={{fontSize: 14}}>Donadores</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='backs'>
              <div className='foto_back'>
                <Avatar/>
              </div>
              <div className='datos_back'>
                <p className="project" style={{
                  margin: 0
                }}>
                  {this.props.project.name}
                </p>
                <span>{project.author.username}</span>
              </div>
              <div className='description'>
                <p>
                  {this.props.project.summary}
                </p>
              </div>
              <div className='bar_progress'>
                <LinearProgress mode="determinate" value={30} color='#5BA9A6' style={{
                  height: 10
                }}/>
              </div>
              <div className='period_progress'>
                <span className='left'>3 de Julio 2017</span>
                <span className='right'>3 de Sept 2017</span>
              </div>

              <div className='bar_progress'>
                <LinearProgress mode="determinate" value={70} color='#3E9EB9' style={{
                  height: 10
                }}/>
              </div>
              <div className='period_progress'>
                <span className='left'>$0</span>
                <span className='right'>${this.props.project.goal}</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default Card;
