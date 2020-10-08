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
import ClearIcon from '@material-ui/icons/Clear';



function createData(idus, problem_title, problem_description) {
    return { idus, problem_title, problem_description };
  }
const rows = [
    createData('Adobe XD + Invision ','Problem 1', 'Lorem ipsum dolor sit ame, consecteur adispiscing elit, Cras vestibulum nibh ult Lorem ipsum dolor sit ame, consecteur adispiscing elit.'),
    createData('Adobe XD + Invision ','Problem 2', 'Lorem ipsum dolor sit ame, consecteur adispiscing elit, Cras vestibulum nibh ult Lorem ipsum dolor sit ame, consecteur adispiscing elit.'),
    createData('Adobe XD + Invision ','Problem 3', 'Lorem ipsum dolor sit ame, consecteur adispiscing elit, Cras vestibulum nibh ult Lorem ipsum dolor sit ame, consecteur adispiscing elit.'),
    createData('Sketch','Problem 1', 'Lorem ipsum dolor sit ame, consecteur adispiscing elit, Cras vestibulum nibh ult Lorem ipsum dolor sit ame, consecteur adispiscing elit.'),
    createData('Sketch','Problem 2', 'Lorem ipsum dolor sit ame, consecteur adispiscing elit, Cras vestibulum nibh ult Lorem ipsum dolor sit ame, consecteur adispiscing elit.'),
    createData('Sketch','Problem 3', 'Lorem ipsum dolor sit ame, consecteur adispiscing elit, Cras vestibulum nibh ult Lorem ipsum dolor sit ame, consecteur adispiscing elit.'),


   
  ];


  const styles8=theme=>({
    root: {
        marginLeft:'2%',
        width: '94%',
        
        overflowX: 'auto',
        paddingLeft:'1%',
        paddingRight:'1%',
      },
      table: {
        minWidth: 650,
        fontWeight:'bold'
      },
  });
class SupportIdeasProblems extends Component {
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
                 
                  <TableCell align="left">IDEA + USER</TableCell>
                  <TableCell align="left">PROBLEM TITLE</TableCell>
                  <TableCell align="left">PROBLEM DESCRIPTION</TableCell>
                  <TableCell align="left">MANAGE</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row,index) => (
                  <TableRow key={index}>
                    <TableCell width='16.3%' style={{fontSize:'12px'}} component="th" scope="row">
                      {row.idus}
                    </TableCell>
                    <TableCell align="left" width='12%' style={{fontSize:'12px'}} >{row.problem_title}</TableCell>
                    <TableCell align="left" width='43.7%' style={{fontSize:'12px'}}>{row.problem_description}</TableCell>
                    
                    <TableCell align="left" width='28%'>
                    <Button size="small" style={{paddingLeft:'20px',paddingRight:'20px',height:'40px',backgroundColor:'white',color:'#4294d0'}}  variant="contained" color="default" > CREATE REVISION </Button> 
                    <Button size="small" style={{marginLeft:'8px',height:'40px',width:'40px',backgroundColor:'white',color:'red'}}  variant="contained" > <ClearIcon size="small" color="secondary"/></Button>
                    </TableCell>
                    

                   
        
       



                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
          </div>

       );
    }
}
 
export default withStyles(styles8)(SupportIdeasProblems);