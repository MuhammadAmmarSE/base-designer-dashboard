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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EditIcon from '@material-ui/icons/Edit';
import { listenerCount } from 'events';

function createData(phase,role,loss) {
    return {phase , role ,loss};
  }
var rows = [
    createData('PNG','Design (DE)','20,600'),
    createData('Cover Images','Design (DE)','16,300'),
    createData('Background Images','Design (DE)','3,850'),
    createData('Design Themes','Design (DE)','10,200'),
    createData('PNG','Design (DE)','20,600'),
    createData('Cover Images','Design (DE)','16,300'),
    createData('Background Images','Design (DE)','3,850'),
    createData('Design Themes','Design (DE)','10,200'),
    createData('Background Images','Design (DE)','3,850'),
    createData('Design Themes','Design (DE)','10,200'),

    
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
        fontWeight:'bold',
       
      },tablehead:{
          color:'#4292d0'
      }
  });
class SupportIssues extends Component {
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
                 
                  <TableCell className={classes.tablehead} align="left">PHASE</TableCell>
                  <TableCell className={classes.tablehead} align="left">ROLE</TableCell>
                  <TableCell className={classes.tablehead} align="left">LOSS</TableCell>
                  <TableCell className={classes.tablehead} align="left">MANAGE</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map( (row,index) => (
                  <TableRow key={index}>
                    <TableCell width="25%" component="th" scope="row">
                      {row.phase}
                    </TableCell>
                    <TableCell width="20%" align="left">{row.role}</TableCell>
                    <TableCell width="20%" align="left">{row.loss} &euro;</TableCell>

                    <TableCell align="left">
                    <Button size="small" style={{height:'34px',width:'150px'}}  variant="contained" color="primary">NEW IDEA</Button>
                    <Button  size="small" style={{textAlign:'center',fontWeight:'normal',marginLeft:'10px',height:'34px',width:'150px',backgroundColor:'white'}}  variant="contained" color="default"> <span style={{marginLeft:'30px'}}>Details</span> <ExpandMoreIcon style={{marginLeft:'20px'}}size="small" color="primary"/></Button> 
                    </TableCell>
                    

                   
        
       



                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
          </div>  );
    }
}
 
export default withStyles(styles8)(SupportIssues);