import React from 'react';
import Card from "../card/Card";

const FavoriteProjects = ({follows}) => {
    return (
        <div style={{marginTop:'30px'}}>
            {follows.map(f=>{
                return(

                <Card project={f.project}/>
                )
            })}
        </div>
    )
};

export default FavoriteProjects;