import React, { Component } from 'react';
import MyCard from '../Card';
import './screens.css';
import Background from '../bg.jpg'
class ManageProjects extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div class="flex-container" style={{marginTop:'65px',marginLeft:'270px',minHeight:'calc(100vh - 65px)',backgroundImage:`url(${Background})`,backgroundSize:'cover'}}> 
<div className="transitioncard"></div>
<span  className="abc">  <MyCard/> </span>
<span className="abc"> <MyCard/> </span>
<span className="abc"> <MyCard/> </span>
<span  className="abc"> <MyCard/> </span>

        </div> );
    }
}
 
export default ManageProjects;

