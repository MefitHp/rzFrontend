import React, {Component} from 'react';
import {Paper, ToolbarTitle, ListItem} from 'material-ui';



class RewardList extends Component {
    render(){
        return(
            <div>



                <Paper>
                    <ToolbarTitle
                        style={{color:'black'}}
                        text="Recompensas"
                    />
                </Paper>
                <div className="reward-list">

                    {this.props.project.rewards.map(
                        r=>{
                           return(
                               <div
                                   key={r.id}
                                   className="reward-paper"
                                   style={{
                                       paddingTop:'10px',
                                       paddingBottom:'10px'
                                   }}
                               >
                        <span
                            style={{}}
                        >{r.title} </span>
                                   <span
                                       style={{}}
                                   >
                            <strong>
                                $ {r.amount}
                            </strong>

                        </span>
                               </div>
                           );
                        }
                    )}






                </div>





            </div>

        );
    }
}

export default RewardList;