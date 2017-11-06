import React from 'react';
import Card from "../card/Card";

const FavoriteProjects = ({follows}) => {
    return (
        <div>
            {follows.map(f=>{
                return(

                <Card project={f.project}/>
                )
            })}
        </div>
    )
};

export default FavoriteProjects;