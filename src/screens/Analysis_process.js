import React, { Component } from 'react';
import Background from '../bg.jpg'
import MyChart1 from '../chart';
import MyChart2 from '../chart';
import MyChart3 from '../chart';
import MyChart4 from '../chart';
import Paper3 from '../Paper3';
import './screens.css';

const list=[
    
    {cost:'COST 1', percent: 'XX%'},    
    {cost:'COST 2', percent: 'XX%'},    
    {cost:'COST 3', percent: 'XX%'},    
    {cost:'COST 4', percent: 'XX%'},    
    {cost:'COST 5', percent: 'XX%'},       
    {cost:'COST 1', percent: 'XX%'},    
    {cost:'COST 2', percent: 'XX%'},    
    {cost:'COST 3', percent: 'XX%'},    
    {cost:'COST 4', percent: 'XX%'},    
    {cost:'COST 5', percent: 'XX%'},    
      


]


class AnalysisProcess extends Component {
    constructor(props) {
        super(props);
        this.state = {  currenthead:'SAVINGS + GROWTH',chart:MyChart1 }
        this.changechart=this.changechart.bind(this);
        }
    changechart(text,newchart){
        this.setState({currenthead:text,chart:newchart})
    }
    render() { 
        return (  
<div style={{marginTop:'65px',marginLeft:'271px',marginRight:'0px',marginBottom:'0px',width:'80.18%',minHeight:'calc(100vh - 65px)',backgroundImage:`url(${Background})`,backgroundSize:'cover'}}>

<div style={{paddingTop:'30px',paddingLeft:'5%',paddingRight:'10%',width:'85%'}}>

    <div style={{width:'80%',float:"left",margin:'0px'}}>
<Paper3 head={this.state.currenthead} chart={this.state.chart} />
</div>
<div style={{color:'white',width:'20%',background:'#4294d0',float:"right",height:'433.5px',paddingTop:'40px'}} >
 <div style={{marginLeft:'30px'}}>TIME AND COST %

 </div>
 <hr style={{marginBottom:'40px'}} />
  {
list.map((head,index)=>(

    <div style={{marginLeft:'20px',paddingBottom:'10px', color:'white',fontSize:'13px',fontWeight:'bold'}}> 
    
    <span  style={{cursor:'pointer'}} > {head.cost} </span>
    <span  style={{float:'right',cursor:'pointer',marginRight:'20px'}} > {head.percent} </span>
    </div>
))

  }

</div>

</div>

</div>



        );
    }
}
 
export default AnalysisProcess;