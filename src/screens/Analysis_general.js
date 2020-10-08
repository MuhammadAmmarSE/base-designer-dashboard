import React, { Component } from 'react';
import Background from '../bg.jpg'
import MyChart1 from '../chart';
import MyChart2 from '../chart';
import MyChart3 from '../chart';
import MyChart4 from '../chart';
import Paper3 from '../Paper3';
import './screens.css';

const list=[ {head:'SAVINGS + GROWTH',chart:MyChart1},{head:'TOOLS BENEFITS',chart:MyChart2},{head:'OPERATION BENEFITS',chart:MyChart3}, {head:'OPERATION VALLUE',chart:MyChart4}]

class AnalysisGeneral extends Component {
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
<div style={{color:'white',width:'20%',background:'#4294d0',float:"right",height:'473.5px'}} className="flex-containercol">
    
  {
list.map((head,index)=>(

    <div style={{paddingBottom:'10px', color:this.state.currenthead==head.head?'white':'lightgrey',fontSize:'13px',fontWeight:'bold'}}> 
    {this.state.currenthead==head.head?<hr style={{marginBottom:'5px',width:'15px',display:'inline-block'}} />:null}

    <span  style={{marginLeft:'7px',cursor:'pointer'}} onClick={()=>this.changechart(head.head,head.chart)}> {head.head} </span>
    </div>
))

  }

</div>

</div>

</div>



        );
    }
}
 
export default AnalysisGeneral;