import React, { Component } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import withStyles from '@material-ui/core/styles/withStyles';

const styles4=theme=>({
    root: {
        width: '100%',
        paddingBottom:'10px'
      },
      heading: {
        fontSize: theme.typography.pxToRem(15),
      },
      secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
      },
      column: {
        flexBasis: '33.33%',
        display:'block'
      },


})
class MyExpPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { const {classes} =this.props;
        return ( 
        <div className={classes.root}>
             <ExpansionPanel >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        > <div style={{height:'50px'}}> 
          <div className={classes.column}>
            <Typography className={classes.heading}>Project</Typography>
          </div>
          
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>Completed</Typography>
          </div>
          </div>
        </ExpansionPanelSummary>
        <Typography >Select trip destination</Typography>
            </ExpansionPanel>
        </div> );
    }
}
 
export default withStyles(styles4)(MyExpPanel);