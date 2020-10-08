import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import withStyles from '@material-ui/core/styles/withStyles';  
import Icon from '@material-ui/core/Icon';
const styles5=theme=>({

    typography: {
        margin: theme.spacing(2),
      },
      button1:{color:'#4294d0'}

});


class MyPopOver extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
      const {classes}=this.props;
        return (<div>
            <PopupState variant="popover" popupId="demo-popup-popover">
      {popupState => (
        <div>
         <span style={{marginLeft:'20px',fontSize:'12px'}}> PROCESS</span> 
          <Button 
          endIcon={<Icon>send</Icon>}
          className={classes.button1}
          {...bindTrigger(popupState)}>
            ADOBE XD <ExpandMoreIcon/>
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Typography className={classes.typography}>The content of the Popover.</Typography>
          </Popover>
        </div>
      )}
    </PopupState>
        </div>  );
    }
}
 
export default withStyles(styles5)(MyPopOver);