import React, { Component } from 'react';
import MyCard4 from '../Card4';
import Background from '../bg.jpg'

var lists1=[
    {
        head:'But keep for simple Graphic Design',
        body:' This is applying only for design in this category; for other areas, please go ahead with your current tools',
        edit:true,
                cat:[],
                addphase:false,
    },
  
    ]
    var lists2=[
        
       
        {
            head:'User Interface + User Experience',
            body:'This operation is applied solely for user experience design;For others graphic related design, please ignore',
            edit:false,
           cat:[
                    { head:"1. Drafting",body:"To draft and make an overview of the UI & UX, please find a few documents that helps out understanding how Adobe XD.."},
                    { head:"2. Mockups",body:"To draft and make an overview of the UI & UX, please find a few documents that helps out understanding how Adobe XD.."}
                    ],
                addphase:true,
       
        },
       
        ]
        var lists3=[
            {
                head:'Saving screens',
                body:'Invision is a great tool to complement XD with for prototyping the drafts to our customers',
                edit:false
                , cat:[
                    { head:"1. PNG",body:"To draft and make an overview of the UI & UX, please find a few documents that helps out understanding how Adobe XD.."},
                    { head:"2. Mockups",body:"To draft and make an overview of the UI & UX, please find a few documents that helps out understanding how Adobe XD.."}
                    ],
                    addphase:true
            },
            {
                head:'Saving screens',
                body:'Invision is a great tool to complement XD with for prototyping the drafts to our customers',
                edit:false,
                cat:[],
                addphase:true,
            },

            ]
            var lists4=[
              
    
                ]

class ManageProcess extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
<div class="flex-container" style={{marginTop:'65px',marginLeft:'270px',minHeight:'calc(100vh - 65px)',backgroundImage:`url(${Background})`,backgroundSize:'cover'}}> 
<div className="transitioncard"></div>
<span  className="abc">  <MyCard4 lists={lists1} header={"Discard Photoshop"}/> </span>
<span className="abc"> <MyCard4 lists={lists2} header={"Apply Xd only"}/> </span>
<span className="abc"> <MyCard4 lists={lists3} header={"Invision"}/> </span>
<span className="abc"> <MyCard4 lists={lists4} header={"Adobe"} /> </span>


        </div> 


         );
    }
}
 
export default ManageProcess;