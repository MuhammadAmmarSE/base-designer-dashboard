import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import {fade} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

import MyPopOver from './popOver1';
import MyPopOver2 from './popOver2';
const styles2= theme =>({
    buttonMargin: {
        margin: theme.spacing(2),
        backgroundColor:'#4294d0'
      },
    appBar: {
        width: `calc(100% - ${270}px)`,
        marginLeft: 270,
        backgroundColor:'#eeeeee',
        color:'black'
      },
      search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.5),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.9),
        },  marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(20),
          width: '300px',
        },
        
      },
        searchIcon: {
            width: theme.spacing(7),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          inputRoot: {
            color: 'inherit',fontSize:13
          },
          inputInput: {
            padding: theme.spacing(1, 1, 1, 7),
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
              width: 130,
              '&:focus': {
                width: 250,
              }, 
            },
        },
        avatar: {
            margin: 10,
          },
});
class MyAppBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {classes} = this.props; 
        return (
        <div>
            <AppBar className={classes.appBar}position="fixed" >
                <Toolbar>
                    <Typography variant="h6" >
                       PROCESS
                    </Typography>
                   
                   <MyPopOver2/>
                   <div style={{marginLeft:'200px'}}>
                   <MyPopOver/>
                   </div>
                    <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search Proccesses (5)"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <Avatar className={classes.avatar}>H</Avatar>
                </Toolbar>
            </AppBar>

        </div>  );
    }
}
 
export default withStyles(styles2)(MyAppBar);