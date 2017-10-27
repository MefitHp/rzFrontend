import React, {Component} from 'react';
import { Paper, Toggle, Dialog, Table, TableBody, TableRow, TableRowColumn, TableHeader, TableHeaderColumn, TextField, SelectField, MenuItem} from 'material-ui';

class AdminInputs extends Component{
  render(){
    return(
      <div>
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
                            <TableHeaderColumn>Nombre</TableHeaderColumn>
                            <TableHeaderColumn>Categoría</TableHeaderColumn>
                            <TableHeaderColumn>Meta</TableHeaderColumn>
                            <TableHeaderColumn>Fondeado</TableHeaderColumn>
                            <TableHeaderColumn>Status</TableHeaderColumn>
                            <TableHeaderColumn>Editar</TableHeaderColumn>
                            <TableHeaderColumn>Detalle</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {/*items.map((i, key)=>{
                            return(
                                <TableRow key={key}>
                                    <TableRowColumn>{i.name}</TableRowColumn>
                                    <TableRowColumn>{i.category[0].name}</TableRowColumn>
                                    <TableRowColumn>$ {i.goal}</TableRowColumn>

                                </TableRow>
                            );
                        })*/}
                    </TableBody>
                </Table>
            </Paper>
        </div>
      </div>
    );
  }
}

export default AdminInputs;
