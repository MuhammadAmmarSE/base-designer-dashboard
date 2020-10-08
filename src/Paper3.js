import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import './App.css'
import MyChart from './chart';

const styles9=theme=>({
    paperroot: {
        marginTop:'0px',
        marginLeft:'0px',
        marginRight:'0px',
        marginBottom:'0px',
       
        paddingTop:'20px',
        paddingLeft:'0px',
        paddingRight:'0px',
        paddingBottom:'0px',

        width:'100%',
        borderRadius:'0px'
       
      },
    



});
class MyPaper extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {classes}=this.props;
        return ( <Paper className={classes.paperroot}>
            <p className="chartpaphead">
              {this.props.head}
                    </p>
                    <hr style={{marginLeft:'20px',marginRight:'60px'}}/>
            <p className="paperbody" >
          { <MyChart/>}
            </p>

<div style={{paddingTop:'30px',paddingBottom:'30px',textAlign:'center'}}>

<div style={{display:'inline-block',paddingLeft:'8%',paddingRight:'8%',width:'16%',borderRight:'1px grey solid',}}>

<p style={{margin:'0px',padding:'0px',paddingBottom:'5px'}} className="chartsmall"> START VALUE</p>
<p style={{margin:'0px',padding:'0px',fontWeight:'bold',color:'black'}}>130,060&euro;</p>

</div>
<div style={{display:'inline-block',paddingLeft:'8%',paddingRight:'8%',width:'16%',borderRight:'1px grey solid',}}>

<p style={{margin:'0px',padding:'0px',paddingBottom:'5px'}} className="chartsmall">VALUE THIS YEAR </p>
<p style={{margin:'0px',padding:'0px',fontWeight:'bold',color:'#4294d0'}}>216,189&euro;</p>

</div>
<div style={{display:'inline-block',paddingLeft:'8%',paddingRight:'8%',width:'16%'}}>

<p style={{margin:'0px',padding:'0px',paddingBottom:'5px'}} className="chartsmall">POTENTIAL VALUE THIS YEAR </p>
<p style={{margin:'0px',padding:'0px',fontWeight:'bold',color:'lightblue'}}>266,000&euro; </p>

</div>

</div>
          </Paper> );
    }
}
 
export default withStyles(styles9)(MyPaper);