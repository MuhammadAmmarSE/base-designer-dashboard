import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import MyPaper from './Paper1';
import MyPaper2 from './Paper2';
import More from './more.png';
import './App.css';



const styles3=theme=>({
    
    
      card:{ width: 330,
    
backgroundColor:'#eeeeee'},
title:{fontSize:16,color:'black',textAlign:'center'},


});
class MyCard4 extends Component {
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
         {this.props.header}
        </Typography>
        <div style={{position:'absolute',top:'15px',right:'5px'}}>
          <Button size="small">
<img width='20px' src={More} alt="more"/>
          </Button>
        </div>
        {
           this.props.lists.map((list,index)=>( <div>

             <MyPaper head={list.head} body={list.body} edit={list.edit} />
             {
               list.cat.length>1?<div style={{height:'45px',width:'1px',background:'black',position:'relative',marginLeft:'12px',marginTop:'-17px',marginBottom:'12px',zIndex:'5'}}></div>:null
             }


             {list.cat.map((pap,index)=>(
              <div style={{}}> <MyPaper2 head={pap.head} body={pap.body}/> </div>
             ))}
             { list.addphase?<div style={{cursor:'pointer',paddingLeft:"10px",fontWeight:'bold',marginTop:'20px',marginBottom:'20px'}}> + Add Phase </div>:null }
     


      </div>
      ))} 
        
        <Button style={{width:'100%',border:'1px lightgrey solid'}} color="primary">+ New Operation</Button>

        </CardContent>
        </Card>
        </div>);
    }
}
 
export default withStyles(styles3)(MyCard4);