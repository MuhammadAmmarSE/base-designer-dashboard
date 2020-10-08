import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import MyExpPanel from './expansionPanel'

import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';


const styles3=themes=>({
card:{ width: 330,
    
backgroundColor:'#eeeeee'},
title:{fontSize:16,color:'black',textAlign:'center'},


});
class MyCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {classes}=this.props;
        return (  <div style={{display:'inline-block',padding:'10px'}}>
            <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         Apply XD only
        </Typography>
        <div>
<MyExpPanel/>
<MyExpPanel/>
<MyExpPanel/>
<MyExpPanel/>
</div>


        </CardContent>
        </Card>
        </div>);
    }
}
 
export default withStyles(styles3)(MyCard);