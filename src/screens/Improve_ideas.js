import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Background from '../bg.jpg'
import MyCard2   from '../Card2';
import MyCard3   from '../Card3';
import MyCard6   from '../Card6';

import SwipeableViews from 'react-swipeable-views';
import { withHooksHOC } from '../useStyles';





function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        <Box p={3}>{children}</Box>
      </Typography>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  
 


  class ImproveIdeas extends Component {
      constructor(props) {
          super(props);
          this.state = { value:0,new:false }
          this.handleChange=this.handleChange.bind(this);
          this.newCard=this.newCard.bind(this);
      }

       handleChange = (event, newValue) => {
       this.setState({value:newValue});
      };
     handleChangeIndex = index => {
      this.setState({value:index});
      };

      newCard(abc){
        
        
        this.setState({...this.state,new:!this.state.new,newhead:abc});
      }
      render() { 
          
         
          return ( 
              <div style={{marginTop:'65px',marginLeft:'270px',marginRight:'0px',marginBottom:'0px',width:'80%',minHeight:'calc(100vh - 65px)',backgroundImage:`url(${Background})`,backgroundSize:'cover'}}>
   <AppBar color="default" position="static">
        <Tabs 
        indicatorColor="primary"
        textColor="primary"
        centered={true}
       
        value={this.state.value} onChange={this.handleChange}>
          <Tab  color="primary" label="NEW" {...a11yProps(0)} />
          <Tab lcolor="primary" label="EVALUATED" {...a11yProps(1)} />
          <Tab  color="primary" label="ADOPTED" {...a11yProps(2)} />
        </Tabs>
      </AppBar>

      <SwipeableViews
       axis={this.props.theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={this.state.value}
        onChangeIndex={this.handleChangeIndex}
      >
      <TabPanel  style={{margin:'0px',padding:'0px'}} value={this.state.value} index={0}  dir={this.props.theme.direction} >

{/* LEFT */}
<div style={{width:'100%',background:'green',margin:'0px',padding:'0px'}}> 

       <div style={{float:'left',width:'49%',margin:'0px'}}>
        
         <p style={{display:'inline-block',marginTop:'0px',paddingTop:'0px',color:'white',fontWeight:'bold'}}>NEW IDEAS &nbsp;</p>
         <p style={{display:'inline-block',marginTop:'0px',paddingTop:'0px',color:'lightgrey',fontWeight:'bold'}}>&nbsp; 5</p>
   
                   
       <MyCard2 />
       <MyCard2/>
       <MyCard2/>
       <MyCard2/>
      
       </div>

       {/* RIGHT */}
       <div style={{float:'right',marginLeft:'0px',marginRight:'2%',width:'49%',margin:'0px',padding:'0px'}}>
       <p style={{display:'inline-block',marginTop:'0px',paddingTop:'0px',color:'white',fontWeight:'bold'}}>IN TESTING</p>
       <p style={{display:'inline-block',marginTop:'0px',paddingTop:'0px',color:'lightgrey',fontWeight:'bold'}}>&nbsp; 5</p>

       <MyCard2/>
       <MyCard2/>
       </div>
       </div>

      </TabPanel>
      



      <TabPanel style={{}} value={this.state.value} index={1} dir={this.props.theme.direction} >
        <div style={{paddingRight:'50px',textAlign:'center'}}>
     
       </div>

       <div style={{textAlign:'center',width:'50%',float:this.state.new?'left':null,margin:'auto'}}>
       <p style={{display:'inline-block',marginTop:'0px',paddingTop:'0px',color:'white',fontWeight:'bold'}}>EVALUATED IDEAS</p>
       <p style={{display:'inline-block',marginTop:'0px',paddingTop:'0px',color:'lightgrey',fontWeight:'bold'}}>&nbsp; 5</p>

       <MyCard3 new={(aa)=>this.newCard(aa)}/>
       <MyCard3 new={(aa)=>this.newCard(aa)}/>
       
       </div>
       <div style={{float:'right',width:'47%',margin:'auto',background:'red',marginTop:'-10px'}}>
{this.state.new?<MyCard6 header={this.state.newhead}/>:null}
       </div>
       
      </TabPanel>



      <TabPanel style={{}}  dir={this.props.theme.direction} value={this.state.value} index={2} >

      <div style={{paddingRight:'50px',textAlign:'center'}}>
      <p style={{display:'inline-block',marginTop:'0px',paddingTop:'0px',color:'white',fontWeight:'bold'}}>ADOPTED IDEAS</p>
       <p style={{display:'inline-block',marginTop:'0px',paddingTop:'0px',color:'lightgrey',fontWeight:'bold'}}>&nbsp; 3</p>

       </div>

       <div style={{contentAlign:'center',width:'55%',margin:'auto'}}>
       <MyCard3 new={(aa)=>this.newCard(aa)}/>
       <MyCard3 new={(aa)=>this.newCard(aa)}/>
       </div>



        
      </TabPanel>
      </SwipeableViews>
              </div>

           );
      }
  }
   
  export default withHooksHOC(ImproveIdeas);






