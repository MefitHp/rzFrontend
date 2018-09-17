import React, {Component} from 'react';
import SimpleCard from './SimpleCard';
import Card from '../card/Card';



class MainList extends Component{
    render(){
        return(
            <div
                style={{
                    display:'flex',
                    flexFlow: 'row wrap',
                    justifyContent: "center",
                    paddingTop:70,
                    paddingLeft:20,
                    paddingBottom:20
                }}>

              {this.props.items.map(i=> {

                  return (
                      <div
                          key={i.id}
                          style={{
                              flex:1,
                              maxWidth:'350px',
                              marginBottom:10
                      }}>
                        <Card {...i} />
                      </div>
                  );
              })}
            </div>
        );
    }
}

export default MainList;