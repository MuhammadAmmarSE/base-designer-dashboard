import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Pencil from './pencil.png';
import Button from '@material-ui/core/Button';


import './App.css'

const styles9=theme=>({
    paperroot: {
        marginTop:'20px',
        marginLeft:'0px',
        marginRight:'0px',
        marginBottom:'10px',
       
        paddingTop:'10px',
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
        return ( 
        <div>
        <Paper className={classes.paperroot}>

            {this.props.edit?  <div style={{float:'right',marginTop:'-5px',marginRight:'-7px'}}>
          <Button style={{width:'5px',paddingLeft:'0px',paddingRight:'0px',margin:'0px'}}>
<img width='16px' src={Pencil} alt="edit" style={{margin:'0px',padding:'0px'}}/>
          </Button>
        </div>:null}


            <p className="paperhead">
              {this.props.head}
                    </p>
            <p className="paperbody" >
             {this.props.body}
            </p>
          </Paper>
          </div> );
    }
}
 
export default withStyles(styles9)(MyPaper);