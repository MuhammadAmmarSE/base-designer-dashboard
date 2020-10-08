import React, { Component } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import withStyles from '@material-ui/core/styles/withStyles';
import Radio from '@material-ui/core/Radio';

import Typography from '@material-ui/core/Typography';


const styles6=theme=>({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  formControl:{
    marginTop:'-20px'
  }
  
});

class ExpPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
      const {classes}=this.props;
        return (
          <div style={{marginLeft:'7px',width:'100%'}}>
            <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Ideas</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              
            <FormControl component="fieldset" className={classes.formControl}>
        
        <RadioGroup aria-label="gender" name="gender2" value={"female"} >
          <FormControlLabel
            value="female"
            control={<Radio color="primary" />}
            label="Idea 1"
            labelPlacement="start"
          />
          <FormControlLabel
            value="male"
            control={<Radio color="primary" />}
            label="Idea 2"
            labelPlacement="start"
          />
          <FormControlLabel
            value="other"
            control={<Radio color="primary" />}
            label="Idea 3"
            labelPlacement="start"
          />
          <FormControlLabel
            value="disabled"
            control={<Radio />}
            label="Idea 4"
            labelPlacement="start"
          />
        </RadioGroup>
       
      </FormControl>
 


              
            </ExpansionPanelDetails>
          </ExpansionPanel>
          </div>  );
    }
}
 
export default withStyles(styles6)(ExpPanel);