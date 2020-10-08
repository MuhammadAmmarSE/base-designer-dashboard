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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Icon from '@material-ui/core/Icon';

function createData(name, role, active_projects, value,manage) {
    return { name, role, active_projects, value,manage };
  }
const rows = [
    createData('Mark Zuckerburg','Designer', 'New design process +3' ,'+ 20%', 'primary'),
    createData('Steve Jobs','Designer', 'Design engineering +1' ,'+ 8%', 'primary'),
    createData('Elon Musk','Designer', 'Design engineering' ,'- 16%', 'secondary'),
    createData('Peter Thiel','Designer', 'New design process +5' ,'+ 2%', 'primary'),
    createData('Jeff Bezos','Designer', 'New design process +2' ,'- 10%', 'secondary'),
   
  ];


  const styles8=theme=>({
    root: {
        marginLeft:'4%',
        width: '88%',
        
        overflowX: 'auto',
        paddingLeft:'2%',
        paddingRight:'2%',
      },
      table: {
        minWidth: 650,
        fontWeight:'bold'
      },
  });
class SupportPeople extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    
    render() { 
      
        const {classes}=this.props;
        return (
        <div style={{marginTop:'65px',marginLeft:'270px',paddingTop:'30px',height:'calc(100vh - 95px)',backgroundImage:`url(${Background})`,backgroundSize:'cover'}}>
        <Paper className={classes.root} style={{}}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                 
                  <TableCell align="left">NAME</TableCell>
                  <TableCell align="left">ROLE</TableCell>
                  <TableCell align="left">ACTIVE PROJECTS</TableCell>
                  <TableCell align="left">VALUE</TableCell>
                  <TableCell align="left">MANAGE</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="left">{row.role}</TableCell>
                    <TableCell align="left">{row.active_projects}</TableCell>
                    <TableCell align="left" > <p style={{color:"darkpink",fontWeight:'bold',margin:'0px',padding:'0px'}}>{row.value}</p> </TableCell>
                    <TableCell align="left"><Button size="small" style={{width:'250px',height:'40px'}}  variant="contained" color={row.manage}> <span style={{paddingLeft:'70px'}}>Details </span><span style={{marginLeft:'60px',paddingTop:'5px'}}><ExpandMoreIcon/></span> </Button></TableCell>
                    

                   
        
       



                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
          </div>

       );
    }
}
 
export default withStyles(styles8)(SupportPeople);