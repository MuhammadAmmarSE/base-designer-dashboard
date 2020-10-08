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

function createData(project,process, manage) {
    return {project , process , manage };
  }
const rows = [
    createData('Adobe creative cloud','Adobe XD',  '3'),
    createData('Sketch','Adobe XD', '1'),
    createData('Invision','Adobe XD', '2'),
   
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
class ManageAdminProjects extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {classes}=this.props;
        return ( <div style={{marginTop:'65px',marginLeft:'270px',paddingTop:'30px',height:'calc(100vh - 95px)',backgroundImage:`url(${Background})`,backgroundSize:'cover'}}>
        <Paper className={classes.root} style={{}}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                 
                  <TableCell align="left">PROJECT</TableCell>
                  
                  <TableCell align="left">PROCESS</TableCell>
                  <TableCell align="left" style={{paddingLeft:'200px'}}>MANAGE</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <TableRow key={row.project}>
                    <TableCell component="th" scope="row">
                      {row.project}
                    </TableCell>
                    <TableCell align="left">{row.process}</TableCell>
                    
                    <TableCell style={{paddingLeft:'200px'}}align="left"><Button size="small" style={{width:'100%',height:'40px'}}  variant="contained" color="primary"> <span style={{paddingLeft:'120px'}}>{row.manage} tools</span><span style={{marginLeft:'100px',paddingTop:'5px'}}><ExpandMoreIcon/></span> </Button></TableCell>
                    

                   
        
       



                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
          </div>  );
    }
}
 
export default withStyles(styles8)(ManageAdminProjects);