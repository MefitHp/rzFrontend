import React, {Component} from 'react';
import {
    Toolbar,
    ToolbarTitle,
    Avatar,
    Table,
    TableRowColumn,
    TableRow,
    TableHeaderColumn,
    TableHeader,
    TableBody
} from 'material-ui';
//import {cyan500} from 'material-ui/styles/colors';
import moment from 'moment';
//import es from 'moment/locale/es';
import {Doughnut} from 'react-chartjs-2';

const user = "https://cdn.pixabay.com/photo/2014/04/02/17/07/user-307993_960_720.png";

function getRecaudado(donaciones, goal){
    let total=0;
    goal = parseInt(goal);
    donaciones.forEach(d=>{
        //console.log(total);
        total+=parseInt(d.monto);

    });
    goal = goal - total ;
    return {
        labels: [
            // 'Red',
            'Recaudado',
            'Faltante'
        ],
        datasets: [{
            data: [ total, goal],
            backgroundColor: [
                 '#87316C',
                '#36A2EB',
                //'#FFCE56'
            ],
            hoverBackgroundColor: [
                 '#87316C',
                '#36A2EB',
                //'#FFCE56'
            ]
        }]
    };;
}

const data = {
    labels: [
       // 'Red',
        'Recaudado',
        'Faltante'
    ],
    datasets: [{
        data: [ 50, 100],
        backgroundColor: [
           // '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
           // '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ]
    }]
};

const DonacionCard = ({donador, proyecto, recompensa, monto, fecha, conekta, ...props}) => (
    <TableRow {...props}>
        {props.children[0]}
        <TableRowColumn>
            <Avatar
                src={donador.profile ? donador.profile.photoURL:null}
            />
        </TableRowColumn>
        <TableRowColumn>{donador.username}</TableRowColumn>
        <TableRowColumn>{proyecto.name}</TableRowColumn>
        <TableRowColumn>{recompensa.title}</TableRowColumn>
        <TableRowColumn>{moment(fecha).format('LLL')}</TableRowColumn>
        <TableRowColumn>{monto}</TableRowColumn>
    </TableRow>
);

const Aportaciones = ({donaciones, goal}) => {
    //console.log(donaciones);
        return(
            <div>
                <Toolbar
                    style={{backgroundColor:"grey"}}>
                    <ToolbarTitle
                        style={{color:'white'}}
                        text="Aportaciones de usuarios" />
                </Toolbar>

                <div style={{marginBottom:100}} />
                <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center", flexDirection:"row"}}>
                    <div>
                        <Doughnut data={getRecaudado(donaciones, goal)} />
                    </div>
                    <div>
                        <Doughnut data={getRecaudado(donaciones, goal)} />
                    </div>

                </div>

                <div style={{marginBottom:100}} />

                <Table style={{minWidth:800, maxWidth:1000, margin:"0 auto"}} bodyStyle={{minWidth:800}}>
                    <TableHeader >
                        <TableRow>
                            <TableHeaderColumn>Avatar</TableHeaderColumn>
                            <TableHeaderColumn>Usuario</TableHeaderColumn>
                            <TableHeaderColumn>Proyecto</TableHeaderColumn>
                            <TableHeaderColumn>Recompensa</TableHeaderColumn>
                            <TableHeaderColumn>Fecha</TableHeaderColumn>
                            <TableHeaderColumn>Monto</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {donaciones.map(d=><DonacionCard  key={d.id} {...d} />)}
                    </TableBody>
                </Table>





            </div>
        );
    };




export default Aportaciones;

