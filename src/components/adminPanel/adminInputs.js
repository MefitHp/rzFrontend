import React, {Component} from 'react';
import { Paper, Toggle, Dialog, Table, TableBody, TableRow, TableRowColumn, TableHeader, TableHeaderColumn, TextField, SelectField, MenuItem} from 'material-ui';
import {getAllDonaciones} from "../../redux/actions/donacionActions";
import {connect} from 'react-redux';
import MainLoader from "../common/MainLoader";
import moment from 'moment';

class AdminInputs extends Component{

    state={
        search:''
    };

    onSearch=(e)=>{
        this.setState({search:e.target.value})
    }

  render(){
        console.log(this.props.donaciones)
      const regEx = new RegExp(this.state.search,'i');
      let items = this.props.donaciones.slice();
      if(this.state.search){
          items = items.filter(item=>regEx.test(item.proyecto.name)||regEx.test(item.conekta)||regEx.test(item.donador.username))
      }
    return(
      <div>
          {!this.props.fetched?
          <MainLoader/>:
              <div style={{paddingTop:'8%'}}>
                  <Paper
                      style={{
                          marginBottom:'1%',
                          display:'flex',
                          justifyContent:'space-between',
                          alignItems:'center',
                          padding:'1%'}}>

                      <TextField
                          hintText="Buscador"
                          onChange={this.onSearch}
                          style={{width:'50%'}}

                      />
                      <SelectField
                          floatingLabelText="Filtro"

                      >
                          <MenuItem value={2} primaryText="Emprendedor" />
                          <MenuItem value={3} primaryText="No emprendedor" />
                          <MenuItem value={4} primaryText="Todos" />


                      </SelectField>

                  </Paper>
                  <Paper>
                      <Table
                          selectable={true}>
                          <TableHeader
                              displaySelectAll={false}
                              adjustForCheckbox={false}>
                              <TableRow>
                                  <TableHeaderColumn>Proyecto</TableHeaderColumn>
                                  <TableHeaderColumn>Monto</TableHeaderColumn>
                                  <TableHeaderColumn>Fecha</TableHeaderColumn>
                                  <TableHeaderColumn>Pagado</TableHeaderColumn>
                                  <TableHeaderColumn>Donador</TableHeaderColumn>
                                  <TableHeaderColumn>Recompensa</TableHeaderColumn>
                                  <TableHeaderColumn>Referencia</TableHeaderColumn>

                              </TableRow>
                          </TableHeader>
                          <TableBody displayRowCheckbox={false}>
                              {items.map((i, key)=>{
                            return(
                                <TableRow key={key}>
                                    <TableRowColumn>{i.proyecto.name}</TableRowColumn>
                                    <TableRowColumn>{i.monto}</TableRowColumn>
                                    <TableRowColumn>{moment(i.fecha).format('LLL')}</TableRowColumn>
                                    <TableRowColumn>{i.pagado?'si':'no'}</TableRowColumn>
                                    <TableRowColumn>{i.donador.username}</TableRowColumn>
                                    <TableRowColumn>{i.recompensa}</TableRowColumn>

                                    <TableRowColumn>
                                        <a href={"https://auth.conekta.com/charges/"+i.conekta}>{i.conekta}</a>
                                    </TableRowColumn>

                                </TableRow>
                            );
                        })}
                          </TableBody>
                      </Table>
                  </Paper>
              </div>}
      </div>
    );
  }
}

function mapStateToProps(getState){
    return{
        donaciones:getState.donaciones,
        fetched:getState.donaciones!==null && getState.donaciones!==undefined
    }
}

function mapDispatchToProps(dispatch){
    dispatch(getAllDonaciones());
    return{}
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminInputs);
