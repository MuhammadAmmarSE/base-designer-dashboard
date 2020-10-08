import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import MyExpPanel from './expansionPanel'
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import InputAdornment from '@material-ui/core/InputAdornment';
import ClearIcon from '@material-ui/icons/Clear';
import Button from '@material-ui/core/Button';

const option1 = [
    {
      value: 'a',
      label: 'User Interface',
    },
    {
      value: 'EUR',
      label: 'Option B',
    },
    {
      value: 'BTC',
      label: 'Option C',
    },
    {
      value: 'JPY',
      label: 'Option D',
    },
  ];

  const option2 = [
    {
      value: 'a',
      label: 'Interaction with layers',
    },
    {
      value: 'EUR',
      label: 'Option B',
    },
    {
      value: 'BTC',
      label: 'Option C',
    },
    {
      value: 'JPY',
      label: 'Option D',
    },
  ];
  const option3 = [
    {
      value: 'a',
      label: 'Phase 1',
    },
    {
      value: 'EUR',
      label: 'Phase 2',
    },
    {
      value: 'BTC',
      label: 'Phase 3',
    },
    {
      value: 'JPY',
      label: 'Phase 4',
    },
  ];
  

const styles3=theme=>({
card:{ width: '100%',
    margin:'0px',
    padding:'0px',
backgroundColor:'white'},
title:{fontSize:16,color:'black',textAlign:'center'},

textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 400,
  },


});
class MyCard extends Component {
    constructor(props) {
        super(props);
        this.state = {text1:'User Interface',text2:'Interaction with layers',text3:'phase 1'  }
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(event,name) {
        this.setState({ ...this.state, [name]: event.target.value });
      }
    render() { 
        const {classes}=this.props;
        return (  <div style={{display:'inline-block',padding:'0px',margin:'0px'}}>
            <Card className={classes.card}>
      <CardContent>
        <div style={{display:'inline-block',float:'left'}}>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         {this.props.header}
        </Typography>
        </div>
        <div style={{marginTop:'-5px',display:'inline-block',float:'right',width:'15%'}}>
<Button color="primary" >
<ClearIcon style={{verticalAlign:'text-top'}}/>
</Button>

        </div>

        <hr style={{display:'block',width:'110%',marginLeft:'-16px',marginTop:'40px'}}/>


        <TextField
        id="standard-select-currency"
        select
        label="Stage"
        className={classes.textField}
        value={this.state.text1}
        onChange={(event)=>this.handleChange(event,'text1')}
        SelectProps={{
          MenuProps: {
            className: classes.menu,
          },
        }}
       
        margin="normal"
        InputProps={{
            endAdornment: <InputAdornment style={{paddingRight:'20px',font:'5px '}} position="end">Mandatory</InputAdornment>,
          }}
      >
        {option1.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>



      <TextField
        id="standard-select-currency"
        select
        label="Operations"
        className={classes.textField}
        value={this.state.text2}
        onChange={(event)=>this.handleChange(event,'text2')}
        SelectProps={{
          MenuProps: {
            className: classes.menu,
          },
        }}
        
        margin="normal"
        InputProps={{
            endAdornment: <InputAdornment style={{paddingRight:'20px',font:'5px '}} position="end">Optionally</InputAdornment>,
          }}
      >
        {option2.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>


      <TextField
        id="standard-select-currency"
        select
        label="Phase"
        className={classes.textField}
        value={this.state.text3}
        onChange={(event)=>this.handleChange(event,'text3')}
        SelectProps={{
          MenuProps: {
            className: classes.menu,
          },
        }}
        placeholder="Placeholder"
        
        fullWidth
        margin="normal"
        InputProps={{
            endAdornment: <InputAdornment style={{paddingRight:'20px',font:'5px '}} position="end">Optionally</InputAdornment>,
          }}
      >
        {option3.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

        <div>
<MyExpPanel/>

</div>


        </CardContent>
        </Card>
        </div>);
    }
}
 
export default withStyles(styles3)(MyCard);