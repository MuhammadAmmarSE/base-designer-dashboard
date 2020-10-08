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
    createData('Emporio Armani','Designer', 'Design engineering +1' ,'+ 21.5%', 'primary'),
    createData('Tommy Hilfiger','Developer', 'Design engineering' ,'+ 21.5%', 'primary'),
    createData('Kevin Systrom','Manufacturer', 'New design process +5' ,'+ 19%', 'primary'),

    createData('Mark Zuckerburg','Administrator', 'New design process +3' ,'+ 18.5%', 'primary'),
    createData('Emporio Armani','Management', 'Design engineering +1' ,'+ 18%', 'primary'),
    createData('Tommy Hilfiger','Management', 'Design engineering' ,'+ 17.5%', 'primary'),
    createData('Kevin Systrom','Sales', 'New design process +5' ,'+ 17%', 'primary'),

    createData('Sean Parker','Designer', 'New design process +3' ,'+ 20%', 'primary'),
    createData('Brian Chesky','Designer', 'New design process +3' ,'+ 20%', 'primary'),



    
   
  ];


  const styles8=theme=>({
    root: {
        marginLeft:'4%',
        width: '88%',
        
        borderRadius:'0px',
        overflowX: 'auto',
        paddingLeft:'2%',
        paddingRight:'2%',
        
      },
      table: {
        minWidth: 650,
        fontWeight:'bold'
      },
  });
class ImproveTSP extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    
    render() { 
      
        const {classes}=this.props;
        return (
        <div style={{marginTop:'65px',marginLeft:'270px',paddingTop:'30px',minHeight:'calc(100vh - 95px)',backgroundImage:`url(${Background})`,backgroundSize:'cover'}}>
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
                {rows.map((row,index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="left">{row.role}</TableCell>
                    <TableCell align="left">{row.active_projects}</TableCell>
                    <TableCell align="left" > <p style={{color:"#4294d0",fontWeight:'bold',margin:'0px',padding:'0px'}}>{row.value}</p> </TableCell>
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
 
export default withStyles(styles8)(ImproveTSP);