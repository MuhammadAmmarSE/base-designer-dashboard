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
class MyCard3 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {classes}=this.props;
        return (  <div style={{textAlign:'left',background:'yellow',marginBottom:'15px'}}>
            <Card className={classes.card}>
      <CardContent>

        < div style={{float:"left",width:'83%',paddingLeft:'3%',paddingTop:'5px'}} >
        < Typography className={classes.title} color="textSecondary" gutterBottom >
         Adobe XD + Invision
        </Typography>
        <Typography className={classes.bodytext} color="textSecondary" gutterBottom>
         Lorem ipsum dolor sit amet, consectetur adepiscing elit. Cras vestibulum nibh 
         Lorem ipsum dolor sit amet, consectetur adepiscing elit. Cras vestibulum nibh 
        </Typography>
 
       

        <Toolbar width="100%" disableGutters={true} style={{marginBottom:'10px'}}> 
        <Avatar className={classes.avatar} >JJ</Avatar>
       
       <span style={{width:'40%',marginLeft:'4%'}}>
        <p className={classes.avatartext}>Thomas Andersan</p>
        <p className={classes.daytime}>Yesterday AT 13:20PM</p>
        </span>

        <span style={{width:'60%',marginLeft:'2%'}}>
        
        <Fab size="small" variant="extended" aria-label="delete" className={classes.fab} style={{color:'white',background:'black',paddingLeft:'20px',paddingRight:'20px'}}>
       ABC
      </Fab>

      <Fab size="small" color="primary" aria-label="add" className={classes.fab}>
        1
      </Fab>
      <Fab size="small" color="secondary" aria-label="edit" className={classes.fab}>
        2
      </Fab>
      </span>
        </Toolbar>
      
      
        </div>
       <div style={{float:'right',width:'10%',textAlign:'center'}}>
       <Fab size="medium" color="primary" aria-label="add" className={classes.fab}>
        <AddIcon onClick={()=>this.props.new("Adobe XD + Invision")}/>
      </Fab>

      <IconButton className={classes.folderbutton} aria-label="new">
      <img alt="add folder"  src={Folder}  width="26px"/>
      </IconButton>
        
      

      
      </div>
      
        


        </CardContent>
        </Card>
        </div>);
    }
}
 
export default withStyles(styles3)(MyCard3);