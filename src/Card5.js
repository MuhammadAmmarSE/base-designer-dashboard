import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Folder from './folder.png';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';

const styles3=theme=>({
card:{ width: '100%',
    margin:'0px',
    padding:'0px',
backgroundColor:'#ffffff',
borderRadius:'0px'},

title:{
  fontSize:19,
  color:'black',
  fontWeight:'bold'
},
bodytext:{
  fontSize:12,
  color:'#a1a1a2',
  
},
folderbutton: {
 
  marginTop:'40px',
},
avatar:{
  
    color: 'black',
    backgroundColor: '#ffffff',
    border:'1px solid grey',
    
    
},
bottomdescp:{
  display:'block',
},

avatartext:{
padding:'0px',
margin:'0px',
fontSize:'14px',
color:'black',
fontWeight:'black'
},
daytime:{
  padding:'0px',
  margin:'3px',
  fontSize:'11px',
  color:'grey'
},
extendedIcon: {
    marginRight: theme.spacing(1),
  }, fab: {
    margin: theme.spacing(1),
  },

});
class MyCard5 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {classes}=this.props;
        return (  <div style={{background:'yellow',marginBottom:'15px'}}>
            <Card className={classes.card}>
      <CardContent>

        < div style={{float:"left",width:'83%',paddingLeft:'3%',paddingTop:'5px'}} >
        < Typography className={classes.title} color="textSecondary" gutterBottom >
         {this.props.title}
        </Typography>
        <Typography className={classes.bodytext} color="textSecondary" gutterBottom>
         Lorem ipsum dolor sit amet, consectetur adepiscing elit. Cras vestibulum nibh 
         Lorem ipsum dolor sit amet, consectetur adepiscing elit. Cras vestibulum nibh 
        </Typography>
 </div>

 <div style={{float:'right',width:'10%',textAlign:'center'}}>
       <Fab size="medium" color="default" aria-label="add" style={{background:'white'}} className={classes.fab}>
        <AddIcon  style={{color:'#4294d0'}} />
      </Fab>

        
      

      
      </div>

        < div style={{float:"left",width:'90%',paddingLeft:'1%',paddingTop:'5px'}} >

        <Toolbar width="100%" disableGutters={true} style={{marginBottom:'10px'}}> 
        
       
     

        
        <Fab size="large" variant="extended" aria-label="delete" className={classes.fab} style={{width:'30%',height:'35px',fontSize:'12px',color:'white',background:'#4294d0'}}>
        38.000&euro;
       
        <Typography variant="h6" style={{paddingLeft:'1px',display:'inline-block',fontSize:'10px',color:'white'}}>
     &nbsp; POTENTIAL
      </Typography> 
      </Fab>

      <Fab size="large" variant="extended" aria-label="delete" className={classes.fab} style={{width:'25%',height:'35px',fontSize:'12px',color:'#4294d0',background:'white'}}>
        23
       
        <Typography variant="h6" style={{paddingLeft:'5px',display:'inline-block',fontSize:'10px',color:'black'}}>
     &nbsp; EVAUATIONS
      </Typography> 
      </Fab>

      <Fab size="large" variant="extended" aria-label="delete" className={classes.fab} style={{width:'35%',height:'35px',fontSize:'12px',color:'black',background:'white'}}>
        23
       
        <Typography variant="h6" style={{paddingLeft:'5px',display:'inline-block',fontSize:'10px',color:'black'}}>
     &nbsp; COMPANIES USING IT
      </Typography> 
      </Fab>
     
     
        </Toolbar>
      
      
        </div>
     
      
        


        </CardContent>
        </Card>
        </div>);
    }
}
 
export default withStyles(styles3)(MyCard5);