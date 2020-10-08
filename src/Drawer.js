import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import withStyles from '@material-ui/core/styles/withStyles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

import Typography from '@material-ui/core/Typography';
import SvgIcon from '@material-ui/core/SvgIcon';
import Logo from './logo.png';
import Button from '@material-ui/core/Button';


const list=[ ['IDEAS','TOOLS','TOP SUCCESSFULL PEOPLE'],
             ['PEOPLE','ISSUES','IDEAS, PROBLEMS'],
              ['GENERAL','TOOLS','IDEAS','ISSUES','PEOPLE','PROCESS'],
              ['PROCESS','ADMIN USERS','ADMIN TOOLS','ADMIN PROJECTS','PROJECTS']
          ]

const drawerWidth = 270;
const styles1 = theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        
      },
      drawerPaper: {
        width: drawerWidth,
        backgroundColor:'#232526',
        color:'#B9BABA'
      },
      drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
        
      },
      Listroot: {
        width: '100%',
        maxWidth: 270,
        backgroundColor: theme.palette.background.paper,
        
      },
      drawerBottomButton:{
        color:'#4294d0',
       
          margin: theme.spacing(1),
          
          width:'90%'
      
      },
      drawerBottomText:{ 
        
        marginLeft:'20%',
        justifyContent:'center',
        width:'60%',
        fontSize:14,
    
    },
    listouter:{
     
        fontSize:'4px'
    },
    drawerBottom:{
      position:'sticky',
      top:'800px',
      textAlign:'center',
    },
  });

  function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }


class MyDrawer extends Component {
    constructor(props){
        super(props);
       this.state={open0:false,open1:false,open2:false,open3:false}
       this.handleClick=this.handleClick.bind(this);
       this.navclick=this.navclick.bind(this);
    }

    navclick(text,text1){
this.props.history.push('/'+text+'_'+text1);

    }

    handleClick(listName){
      


      this.setState({ ...this.state,[listName]:!this.state[listName] });
      
    }
    
    render() { 
        const {classes} = this.props; 
        return (
             <div>
              
             
                 <Drawer
            className={classes.drawer}
            variant="permanent"
            anchor="left"
           
            classes={{
              paper: classes.drawerPaper,
            }}
          >
             <div className={classes.drawerHeader}>
              
          <Button >
            <img width='40px' src={Logo} alt="BASE"/>
            <div style={{color:'#eeeeee',paddingLeft:'7px'}}> BASE</div>
          </Button>
         
          </div>
              <Divider/>
{ ['IMPROVE', 'SUPPORT', 'ANALYSIS', 'MANAGE'].map((text, index) => (<div>
  <List
  component="nav"
      aria-labelledby="nested-list-subheader"
      style={{backgroundColor:'#232526',padding:'0px'}}
    
      className={classes.Listroot}
  >
    <ListItem onClick={ ()=>this.handleClick('open'+index) }style={{backgroundColor:'rgb(76, 132, 211,0.1)',height:'45px',fontSize:'4px'}} button key={text}>
         <ListItemIcon>
         <HomeIcon color="primary" fontSize="medium" />
        </ListItemIcon>
          <ListItemText primary={<Typography type="body2" style={{ fontSize:'13px',color: '#ffffff' }}>{text}</Typography>}className={classes.listouter}/>
       </ListItem>
       </List>
       {(index===0)||(index===2)?<Divider/>:null}
    <Collapse in={this.state['open'+index] }  unmountOnExit> 
    
    {  
      list[index].map((text1, index) =>(
  <List component="div" disablePadding >
   
          <ListItem button className={classes.nested} style={{height:'40px'}} onClick={()=>this.navclick(text,text1)}>
            
            <ListItemText primary={<Typography type="body2" style={{ fontSize:'13px',
            
            
           color:this.props.history.location.pathname=="/"+text+"_"+text1?'#4294d0':'grey',
          }}>{text1}</Typography>} />
        { this.props.history.location.pathname=="/"+text+"_"+text1? <span style={{height:'5px',width:'5px',borderRadius:'100%',backgroundColor:'#4294d0'}}></span>:null}
          </ListItem>
        </List>


       ))
       
       
       }
        
      </Collapse>
      </div>
))}

<div className={classes.drawerBottom}>

  <div className={classes.drawerBottomText}> Invite your team and start collaborating now!</div>
  <Button variant="outlined"  color="primary" width="100px" font="10px" className={classes.drawerBottomButton}>Invite to Base</Button>
</div>
                
        
          </Drawer> </div>);
    }
}
 
export default withStyles(styles1)(MyDrawer);