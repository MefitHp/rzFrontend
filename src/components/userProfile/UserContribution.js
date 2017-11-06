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



const UserContribution = ({projects, fetched}) => {
    return(
        <div style={styles.aport}>
            <Paper className="flex_aport"  zDepth={1} rounded={false}>

                    <div className="aportacion">
                        <img src="https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/12227223_877633965665326_4250458589751884486_n.jpg?oh=09746224b834e67b13cfb9a9609945d0&oe=5A9F65B1" alt=""/>

                    </div>

                    <div className="infor">
                        <h2>Nombre del proyecto</h2>

                        <p>Finaliza el: 30 de Febrero de 2017</p>
                    </div>
                    <div className="infor bordeado">
                        <h2>Aportacion: $800</h2>
                        <p>Recompensa jweqhfdakiwluhf1;wqf
                        qfnolireukhfn13ruilqfh
                        </p>
                    </div>

            </Paper>
            <Paper className="flex_aport"  zDepth={1} rounded={false}>

                <div className="aportacion">
                    <img src="https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/12227223_877633965665326_4250458589751884486_n.jpg?oh=09746224b834e67b13cfb9a9609945d0&oe=5A9F65B1" alt=""/>

                </div>

                <div className="infor">
                    <h2>BrendijS</h2>

                    <p>Finaliza el: 30 de Febrero de 2017</p>
                </div>
                <div className="infor bordeado">
                    <h2>Aportacion: $800</h2>
                    <p>Recompensa jweqhfdakiwluhf1;wqf
                        qfnolireukhfn13ruilqfh
                    </p>
                </div>

            </Paper>
            <Paper className="flex_aport"  zDepth={1} rounded={false}>

                <div className="aportacion">
                    <img src="https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/12227223_877633965665326_4250458589751884486_n.jpg?oh=09746224b834e67b13cfb9a9609945d0&oe=5A9F65B1" alt=""/>

                </div>

                <div className="infor">
                    <h2>BrendijS</h2>

                    <p>Finaliza el: 30 de Febrero de 2017</p>
                </div>
                <div className="infor bordeado">
                    <h2>Aportacion: $800</h2>
                    <p>Recompensa jweqhfdakiwluhf1;wqf
                        qfnolireukhfn13ruilqfh
                    </p>
                </div>

            </Paper>
            <Paper className="flex_aport"  zDepth={1} rounded={false}>

                <div className="aportacion">
                    <img src="https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/12227223_877633965665326_4250458589751884486_n.jpg?oh=09746224b834e67b13cfb9a9609945d0&oe=5A9F65B1" alt=""/>

                </div>

                <div className="infor">
                    <h2>BrendijS</h2>

                    <p>Finaliza el: 30 de Febrero de 2017</p>
                </div>
                <div className="infor bordeado">
                    <h2>Aportacion: $800</h2>
                    <p>Recompensa jweqhfdakiwluhf1;wqf
                        qfnolireukhfn13ruilqfh
                    </p>
                </div>

            </Paper>
            <Paper className="flex_aport"  zDepth={1} rounded={false}>

                <div className="aportacion">
                    <img src="https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/12227223_877633965665326_4250458589751884486_n.jpg?oh=09746224b834e67b13cfb9a9609945d0&oe=5A9F65B1" alt=""/>

                </div>

                <div className="infor">
                    <h2>BrendijS</h2>

                    <p>Finaliza el: 30 de Febrero de 2017</p>
                </div>
                <div className="infor bordeado">
                    <h2>Aportacion: $800</h2>
                    <p>Recompensa jweqhfdakiwluhf1;wqf
                        qfnolireukhfn13ruilqfh
                    </p>
                </div>

            </Paper>
            <Paper className="flex_aport"  zDepth={1} rounded={false}>

                <div className="aportacion">
                    <img src="https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/12227223_877633965665326_4250458589751884486_n.jpg?oh=09746224b834e67b13cfb9a9609945d0&oe=5A9F65B1" alt=""/>

                </div>

                <div className="infor">
                    <h2>BrendijS</h2>

                    <p>Finaliza el: 30 de Febrero de 2017</p>
                </div>
                <div className="infor bordeado">
                    <h2>Aportacion: $800</h2>
                    <p>Recompensa jweqhfdakiwluhf1;wqf
                        qfnolireukhfn13ruilqfh
                    </p>
                </div>

            </Paper>
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