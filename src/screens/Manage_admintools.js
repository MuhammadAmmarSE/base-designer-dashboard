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
import EditIcon from '@material-ui/icons/Edit';

function createData(name,area,yc, manage) {
    return {name , area ,yc, manage };
  }
const rows = [
    createData('Adobe creative cloud','Design(DE)','30,000',  '3'),
    createData('Sketch','Design(DE)','30,000' ,'1'),
    createData('Invision','Design(DE)','30,000' ,'2'),
   
  ];
  const styles8=theme=>({
    root: {
        marginLeft:'4%',
        width: '88%',
        background:'#eeeeee',
        overflowX: 'auto',
        paddingLeft:'2%',
        paddingRight:'2%',
      },
      table: {
        minWidth: 650,
        fontWeight:'bold'
      },
  });
class ManageAdminTools extends Component {
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
                 
                  <TableCell align="left">NAME</TableCell>
                  
                  <TableCell align="left">AREA</TableCell>
                  <TableCell align="left">YEARLY COSTS</TableCell>
                  <TableCell align="left">MANAGE</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row,index)=> (
                  <TableRow key={row.index}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="left">{row.area}</TableCell>
                    <TableCell align="left">{row.yc} &euro;
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    </TableCell>
                    <TableCell style={{paddingLeft:'0px'}}align="left">
                    <Button size="small" style={{background:"white",width:'30%',height:'40px'}} variant="contained"><EditIcon style={{}}color="primary"/></Button>
                        <Button size="small" style={{marginLeft:'5%',width:'65%',height:'40px'}}  variant="contained" color="primary"> <span style={{marginLeft:'80px'}}>{row.manage} tools</span><span style={{marginLeft:'60px',paddingTop:'5px'}}><ExpandMoreIcon/></span> </Button>
                       
                        </TableCell>
                    

                   
        
       



                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
          </div>  );
    }
}
 
export default withStyles(styles8)(ManageAdminTools);