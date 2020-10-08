import React, { Component } from 'react';
import Button from '@material-ui/core/Button';


import withStyles from '@material-ui/core/styles/withStyles';  

import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import ExpPanel2 from './expPanel2';
const BootstrapInput = withStyles(theme => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
        width:'100%'
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid black',
      fontSize: 16,
      paddingRight:'10px',
      paddingTop:'10px',
      paddingBottom:'10px',
      width:'100%',
      height:'30px',
      paddingLeft:'10px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }))(InputBase);



const styles5=theme=>({

    typography: {
        margin: theme.spacing(2),
      },
      button1:{color:'#ffffff'},
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width:'100%',
      },
      dense: {
        marginTop: theme.spacing(2),
      },
      popfield:{
        marginLeft: theme.spacing(1),
          border:'1px black solid',
          height:'35px',
          marginRight: theme.spacing(1),
          width:'95%',
          marginTop:theme.spacing(2),
          paddingBottom:'15px',
          paddingLeft:'5%'
      },
      selectone:{
        marginTop:theme.spacing(3),
          width:'100%',
          marginLeft:theme.spacing(1),
          height:'50px',
          marginBottom:'15px',
          
      },
      formone:{
          width:'100%'
      }

});


class MyPopOver extends Component {
    constructor(props) {
        super(props);
        this.state = { open:false }
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
        this.setState({open:!this.state.open});
   
    }
   handleChange = event => {
        this.setState({
          ...this.state,
          age: event.target.value,
        });
      };
    
    render() { 
        
      const {classes}=this.props;
        return (<div style={{paddingLeft:'20px'}}>  
            
            
            <div>
         <Button  variant="contained" 
         style={{paddingLeft:'10px',paddingRight:'15px'}}
         
         size="small" 
         color='primary'
          className={classes.button1}
         onClick={this.handleClick}
          >
                    <AddIcon /> New
                    </Button>
                    </div>
          
          { this.state.open===true? <div style={{position:'absolute',left:'3%',marginTop:'5px'}} >
              <div className="demos "></div>
              <div style={{backgroundColor:'#ffffff',width:'300px',paddingTop:'10px',borderRadius:'5px'}}>   
           <div style={{width:'90%',marginLeft:'3%',paddingBottom:'10px'}}>
              <TextField
        id="outlined-dense"
        label="Project"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        variant="outlined"
      />

<Paper className={classes.popfield}>
    
      <InputBase
        className={classes.input}
        placeholder="Users"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
     
      
    </Paper>


    <FormControl className={classes.formone}>
        
        <NativeSelect
          value={"age"}
          onChange={this.handleChange}
          input={<BootstrapInput name="age" id="age-customized-native-simple" />}
          className={classes.selectone}
        >
          <option value={10}>Invision</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
      </FormControl>

<ExpPanel2/>





      </div>
           
<div style={{height:'40px',width:'100%',backgroundColor:'#2196f3'}}>
<CloseIcon color="error" style={{paddingTop:'10px',paddingLeft:'10px'}}/>
</div>


               </div>
         
         </div> : null }
         
        
     
   
        </div>  );
    }
}
 
export default withStyles(styles5)(MyPopOver);