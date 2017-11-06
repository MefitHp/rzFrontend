import React, {Component} from 'react';
import './UserContribution.css';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {Link} from 'react-router-dom';
//MaterialUI
import {Paper, RefreshIndicator, Chip, Avatar} from 'material-ui';

const img = "https://cdn3.iconfinder.com/data/icons/photography/512/Icon_3-512.png";

const Loader = () => (
    <RefreshIndicator
        size={50}
        left={70}
        top={0}
        loadingColor="#FF9800"
        status="loading"
        //style={style.refresh}
    />
);



const UserContribution = ({donaciones, fetched}) => {
    return(
        <div style={styles.aport}>

            {donaciones.map(d=>{
                return(
                    <Paper className="flex_aport"  zDepth={1} rounded={false}>

                        <div className="aportacion">
                            <img src={d.proyecto.photo} alt=""/>

                        </div>

                        <div className="infor">
                            <h2>{d.recompensa.title}</h2>

                            <p>Finaliza el: {d.proyecto.finish}</p>
                        </div>
                        <div className="infor bordeado">
                            <h2>Aportacion: ${d.recompensa.amount}</h2>
                            <p>{d.recompensa.description}</p>
                        </div>

                    </Paper>
                )
            })}
        </div>
    );
};

const styles = {
    aport: {
        width: "90%",
        marginLeft: "5%",
        marginTop:"30px",

    }
};

export default UserContribution;