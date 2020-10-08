import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import './App.css'

const styles9=theme=>({
    paperroot: {
        marginTop:'-20px',
        marginLeft:'0px',
        marginRight:'0px',
        marginBottom:'10px',
       
        paddingTop:'20px',
        paddingLeft:'10px',
        paddingRight:'0px',
        paddingBottom:'20px',
       
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
            <p className="paperhead">
              {this.props.head}
                    </p>
            <p className="paperbody" >
             {this.props.body}
            </p>
          </Paper> );
    }
}
 
export default withStyles(styles9)(MyPaper);