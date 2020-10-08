import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SwipeableViews from 'react-swipeable-views';
import Background from '../bg.jpg'
import Toolbar from '@material-ui/core/Toolbar';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Button from '@material-ui/core/Button';
import MyCard3   from '../Card3';
import MyCard5   from '../Card5';
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
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
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
  }

  const styles10=theme=>({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
      },



  });
  



class ImproveTools extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            value:0
         }
         this.handleChange=this.handleChange.bind(this);
    }
    handleChange = (event, newValue) => {
        this.setState({value:newValue});
       };
       handleChangeIndex = index => {
        this.setState({value:index});
        };
    
    render() { 
       
        const {classes}=this.props;
        return (
            <div style={{marginTop:'65px',marginLeft:'270px',marginRight:'0px',marginBottom:'0px',width:'80%',minHeight:'calc(100vh - 65px)',backgroundImage:`url(${Background})`,backgroundSize:'cover'}}>
          
            <AppBar position="static" color="default">
            <Toolbar>
              <Tabs
                value={this.state.value}
                onChange={this.handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
                style={{width:'77%'}}
              >
                <Tab label="ADOBE CREATIVE CLOUD" {...a11yProps(0)}   style={{border:this.state.value==0?'2px solid #4294d0':null, borderRadius:'10px'}} />
                <Tab label="SKETCH" {...a11yProps(1)}   style={{   border:this.state.value==1?'2px solid #4294d0':null,borderRadius:'10px' }} />
                <Tab label="INVISION" {...a11yProps(2)} style={{border:this.state.value==2?'2px solid #4294d0':null,borderRadius:'10px'}}  />
                <Tab label="TOOL 4" {...a11yProps(3)} style={{border:this.state.value==3?'2px solid #4294d0':null,borderRadius:'10px'}} /> 
                <Tab label="TOOL 5" {...a11yProps(4)} style={{border:this.state.value==4?'2px solid #4294d0':null,borderRadius:'10px'}} />
                <Tab label="TOOL 6" {...a11yProps(5)} style={{border:this.state.value==5?'2px solid #4294d0':null,borderRadius:'10px'} } /> 
                <Tab label="TOOL 7" {...a11yProps(6)}  style={{border:this.state.value==6?'2px solid #4294d0':null,borderRadius:'10px'}}/>
                <Tab label="TOOL 8" {...a11yProps(7)}  style={{border:this.state.value==7?'2px solid #4294d0':null,borderRadius:'10px'}}/>
                <Tab label="TOOL 9" {...a11yProps(8)} style={{border:this.state.value==8?'2px solid #4294d0':null,borderRadius:'10px'}}/>
                <Tab label="TOOL 10" {...a11yProps(9)} style={{border:this.state.value==9?'2px solid #4294d0':null,borderRadius:'10px'}}/>
                <Tab label="TOOL 11" {...a11yProps(10)} style={{border:this.state.value==10?'2px solid #4294d0':null,borderRadius:'10px'}}/>
              </Tabs>
              <div className="vertical-bar" style={{height:'40px'}}></div>
              <Button> <VisibilityIcon/>
              <Typography variant="caption" style={{color:'grey'}}>
              &nbsp;
        Manager
      </Typography>
      </Button>
           
      <div className="vertical-bar" style={{marginLeft:'10px',height:'20px'}}></div>
      <Button> 
      <Typography variant="caption" style={{color:'grey'}}>
     &nbsp; All Modules
      </Typography>
      </Button>
           
              
            
            
            
            </Toolbar>
            </AppBar>
            <SwipeableViews
       axis={ 'x'}
        index={this.state.value}
        onChangeIndex={this.handleChangeIndex}
      >
            <TabPanel value={this.state.value} index={0}  dir={'ltr'}>
            
            <div style={{paddingRight:'50px',textAlign:'center'}}>
      <p style={{display:'inline-block',marginTop:'0px',paddingTop:'0px',color:'white',fontWeight:'bold'}}>IDEAS</p>
       <p style={{display:'inline-block',marginTop:'0px',paddingTop:'0px',color:'lightgrey',fontWeight:'bold'}}>&nbsp; 5</p>

       </div>

       <div style={{contentAlign:'center',width:'55%',margin:'auto'}}>
       <MyCard5 title="Adobe XD + Invision"/>
       <MyCard5 title="Sketch"/>
       <MyCard5 title="Invision"/>
       <MyCard5 title="Adobe XD + Invision"/>
       </div>
       
            </TabPanel>


            <TabPanel value={this.state.value} index={1} dir={'ltr'}>
            <div style={{paddingRight:'50px',textAlign:'center'}}>
      <p style={{display:'inline-block',marginTop:'0px',paddingTop:'0px',color:'white',fontWeight:'bold'}}>IDEAS</p>
       <p style={{display:'inline-block',marginTop:'0px',paddingTop:'0px',color:'lightgrey',fontWeight:'bold'}}>&nbsp; 5</p>

       </div>

       <div style={{contentAlign:'center',width:'55%',margin:'auto'}}>
       <MyCard3/>
       <MyCard3/>
       </div>
         
            </TabPanel>

            <TabPanel value={this.state.value} index={2} dir={'ltr'}>
            
            <div style={{paddingRight:'50px',textAlign:'center'}}>
      <p style={{display:'inline-block',marginTop:'0px',paddingTop:'0px',color:'white',fontWeight:'bold'}}>IDEAS</p>
       <p style={{display:'inline-block',marginTop:'0px',paddingTop:'0px',color:'lightgrey',fontWeight:'bold'}}>&nbsp; 5</p>

       </div>

       <div style={{contentAlign:'center',width:'55%',margin:'auto'}}>
       <MyCard3/>
       <MyCard3/>
       </div>
       
            </TabPanel>
            <TabPanel value={this.state.value} index={3} dir={'ltr'}>
            
            <div style={{paddingRight:'50px',textAlign:'center'}}>
      <p style={{display:'inline-block',marginTop:'0px',paddingTop:'0px',color:'white',fontWeight:'bold'}}>IDEAS</p>
       <p style={{display:'inline-block',marginTop:'0px',paddingTop:'0px',color:'lightgrey',fontWeight:'bold'}}>&nbsp; 5</p>

       </div>

       <div style={{contentAlign:'center',width:'55%',margin:'auto'}}>
       <MyCard3/>
       <MyCard3/>
       </div>
       
            </TabPanel>
            <TabPanel value={this.state.value} index={4} dir={'ltr'}>
            
            <div style={{paddingRight:'50px',textAlign:'center'}}>
      <p style={{display:'inline-block',marginTop:'0px',paddingTop:'0px',color:'white',fontWeight:'bold'}}>IDEAS</p>
       <p style={{display:'inline-block',marginTop:'0px',paddingTop:'0px',color:'lightgrey',fontWeight:'bold'}}>&nbsp; 5</p>

       </div>

       <div style={{contentAlign:'center',width:'55%',margin:'auto'}}>
       <MyCard3/>
       <MyCard3/>
       </div>
       
            </TabPanel>
            <TabPanel value={this.state.value} index={5} dir={'ltr'}>
              
            <div style={{paddingRight:'50px',textAlign:'center'}}>
      <p style={{display:'inline-block',marginTop:'0px',paddingTop:'0px',color:'white',fontWeight:'bold'}}>IDEAS</p>
       <p style={{display:'inline-block',marginTop:'0px',paddingTop:'0px',color:'lightgrey',fontWeight:'bold'}}>&nbsp; 5</p>

       </div>

       <div style={{contentAlign:'center',width:'55%',margin:'auto'}}>
       <MyCard3/>
       <MyCard3/>
       </div>
       
            </TabPanel>
            <TabPanel value={this.state.value} index={6} dir={'ltr'}>
              
            <div style={{paddingRight:'50px',textAlign:'center'}}>
      <p style={{display:'inline-block',marginTop:'0px',paddingTop:'0px',color:'white',fontWeight:'bold'}}>IDEAS</p>
       <p style={{display:'inline-block',marginTop:'0px',paddingTop:'0px',color:'lightgrey',fontWeight:'bold'}}>&nbsp; 5</p>

       </div>

       <div style={{contentAlign:'center',width:'55%',margin:'auto'}}>
       <MyCard3/>
       <MyCard3/>
       </div>
       
            </TabPanel>
            <TabPanel value={this.state.value} index={7} dir={'ltr'}>
             
            <div style={{paddingRight:'50px',textAlign:'center'}}>
      <p style={{display:'inline-block',marginTop:'0px',paddingTop:'0px',color:'white',fontWeight:'bold'}}>IDEAS</p>
       <p style={{display:'inline-block',marginTop:'0px',paddingTop:'0px',color:'lightgrey',fontWeight:'bold'}}>&nbsp; 5</p>

       </div>

       <div style={{contentAlign:'center',width:'55%',margin:'auto'}}>
       <MyCard3/>
       <MyCard3/>
       </div>
       
            </TabPanel>
            <TabPanel value={this.state.value} index={8} dir={'ltr'}>
              
            <div style={{paddingRight:'50px',textAlign:'center'}}>
      <p style={{display:'inline-block',marginTop:'0px',paddingTop:'0px',color:'white',fontWeight:'bold'}}>IDEAS</p>
       <p style={{display:'inline-block',marginTop:'0px',paddingTop:'0px',color:'lightgrey',fontWeight:'bold'}}>&nbsp; 5</p>

       </div>

       <div style={{contentAlign:'center',width:'55%',margin:'auto'}}>
       <MyCard3/>
       <MyCard3/>
       </div>
       
            </TabPanel>
            <TabPanel value={this.state.value} index={9} dir={'ltr'}>
            <div style={{paddingRight:'50px',textAlign:'center'}}>
      <p style={{display:'inline-block',marginTop:'0px',paddingTop:'0px',color:'white',fontWeight:'bold'}}>IDEAS</p>
       <p style={{display:'inline-block',marginTop:'0px',paddingTop:'0px',color:'lightgrey',fontWeight:'bold'}}>&nbsp; 5</p>

       </div>

       <div style={{contentAlign:'center',width:'55%',margin:'auto'}}>
       <MyCard3/>
       <MyCard3/>
       </div>
       
            </TabPanel>
            <TabPanel value={this.state.value} index={10} dir={'ltr'}>
            <div style={{paddingRight:'50px',textAlign:'center'}}>
      <p style={{display:'inline-block',marginTop:'0px',paddingTop:'0px',color:'white',fontWeight:'bold'}}>IDEAS</p>
       <p style={{display:'inline-block',marginTop:'0px',paddingTop:'0px',color:'lightgrey',fontWeight:'bold'}}>&nbsp; 5</p>

       </div>

       <div style={{contentAlign:'center',width:'55%',margin:'auto'}}>
       <MyCard3/>
       <MyCard3/>
       </div>
       
            </TabPanel>
            
            </SwipeableViews>
           
          </div>
        );
        
    }
}
 
export default withStyles(styles10)(ImproveTools);