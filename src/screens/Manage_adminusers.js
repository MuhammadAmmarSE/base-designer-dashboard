import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Background from '../bg.jpg'
import withStyles from '@material-ui/core/styles/withStyles';

import ClearIcon from '@material-ui/icons/Clear';
import EditIcon from '@material-ui/icons/Edit';


function createData(name,role,email) {
    return {name , role ,email};
  }
var rows = [
    createData('Jero Juujarvi','Management (MA)','jero@baseapp.com' ),
    createData('Jess Singh','Design (DE)', 'js@orderstay.com'),
    createData('Ralph Jergensen','Design (DE)','ralph@baseapp.com' ),
    createData('Thomas Hansen','Management (MA)','thomas@baseapp.com' ),
    createData('Rita Silva','Development (DE)','rita@baseapp.com' ),
    createData('Catarina Lopez','Design (DE)','catarina@baseapp.com' ),
    createData('Patricia Jansen','Development (DE)','patricia@baseapp.com' ),
    createData('Lars Thomnsen','Development (DE)','larsbaseapp.com' ),
    createData('Tom Jones','Operation (OP)','tom@baseapp.com' ),
    createData('Kasper Sol','Operation (OP)','kasper@baseapp.com' ),
    createData('Tiago Gomes','Management (MA)','tiago@baseapp.com' ),

    
  ];   

  const styles8=theme=>({
    root: {
        marginLeft:'2%',
        width: '92%',
        
        overflowX: 'auto',
        paddingLeft:'2%',
        paddingRight:'2%',
      },
      table: {
        minWidth: 650,
        fontWeight:'bold'
      },
  });


class ManageAdminUsers extends Component {
    constructor(props) {
        super(props);
        this.state = { rows:rows.length }
        this.delete=this.delete.bind(this);
    }
    delete(name){
       
     delete rows[name]
        this.setState({ rows:this.state.rows-1 })
    }
    render() { 
        const {classes}=this.props;
        return ( <div style={{marginTop:'65px',marginLeft:'270px',paddingTop:'30px',minHeight:'calc(100vh - 95px)',backgroundImage:`url(${Background})`,backgroundSize:'cover'}}>
        <Paper className={classes.root} style={{}}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell align="left">NAME</TableCell>
                  <TableCell align="left">ROLE</TableCell>
                  <TableCell align="left">EMAIL</TableCell>
                  <TableCell align="left">MANAGE</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map( (row,index) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="left">{row.role}</TableCell>
                    <TableCell align="left">{row.email}</TableCell>
                    <TableCell align="left">{row.yc} &euro;</TableCell>

                    <TableCell align="left">
                    <Button size="small" style={{height:'40px',width:'120px',backgroundColor:'white'}}  variant="contained" color="default"> <EditIcon size="small" color="primary"/></Button>
                    <Button onClick={()=>this.delete(index)} size="small" style={{marginLeft:'20px',height:'40px',width:'120px',backgroundColor:'white'}}  variant="contained" color="default"> <ClearIcon size="small" color="secondary"/></Button> 
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
          </div>  );
    }
}
 
export default withStyles(styles8)(ManageAdminUsers);