import React, { Component } from 'react';
import * as V from 'victory';
import { VictoryStack , VictoryChart , VictoryArea , VictoryAxis} from 'victory';



const sampleData1 = [
    {quarter: 1, earnings: 1000},
    {quarter: 2, earnings: 13500},
    {quarter: 3, earnings: 10250},
    {quarter: 4, earnings: 11000}
  ];
  const sampleData2 = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000}
  ];
  const sampleData3 = [
    {quarter: 1, earnings: 2000},
    {quarter: 2, earnings: 26500},
    {quarter: 3, earnings: 34250},
    {quarter: 4, earnings: 49000}
  ];
  const sampleData4 = [
    {quarter: 1, earnings: 93000},
    {quarter: 2, earnings: 86500},
    {quarter: 3, earnings: 74250},
    {quarter: 4, earnings: 69000}
  ];

class MyChart extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div style={{width:'100%'}}>
        <VictoryChart width={1800}
       
        height={800}
            events={[{
              childName: "all",
              target: "data",
              eventHandlers: {
                onClick: () => {
                  return [
                    {
                      childName: "area-2",
                      target: "data",
                      mutation: (props) => ({ style: Object.assign({}, props.style, { fill: "gold" }) })
                    }, {
                      childName: "area-3",
                      target: "data",
                      mutation: (props) => ({ style: Object.assign({}, props.style, { fill: "orange" }) })
                    }, {
                      childName: "area-4",
                      target: "data",
                      mutation: (props) => ({ style: Object.assign({}, props.style, { fill: "red" }) })
                    },
                    {
                        childName: "area-4",
                        target: "data",
                        mutation: (props) => ({ style: Object.assign({}, props.style, { fill: "red" }) })
                      }
                  ];
                }
              }
            }]}
          >
                
                <VictoryAxis dependentAxis  orientation={"right"}/>
                
                <VictoryAxis tickValues={[20,30,40,60]}  />
            <VictoryStack 
            
            animate={{
                duration: 4000,
                onLoad: { duration: 1000 }
              }}
              domain={{x: [0, 80], y: [0, 200]}}
tickValue={[20,80,100,200]}
              
            >
            
     
            <VictoryArea name="area-1"
            
             style={{
                data: { fill: "#4294d0" }
              }}
               data={ [
    { x: 0, y: 0, y0: 0},       
    { x: 1, y: 5, y0: 0},
    { x: 5, y: 10, y0: 0 },
    { x: 20, y: 13.5, y0: 0 },
    { x: 35, y: 14.5, y0: 0 },
    { x: 40, y: 17, y0: 0 },
    { x: 47, y: 17, y0: 0 },
    { x: 49, y: 17.5, y0: 0 },
    { x: 54, y: 17.5, y0: 0 },
    { x: 56, y: 16.5, y0: 0 },
    { x: 60, y: 16.5, y0: 0 },
    { x: 64, y: 18, y0: 0 },
    { x: 67, y: 18, y0: 0 },
    { x: 76, y: 20, y0: 0 },
    { x: 78, y: 22.5, y0: 0 },
  ] }/>
   
    <VictoryArea name="area-1" data={ [
    { x: 0, y: 0, y0: 0},       
    { x: 1, y: 10, y0: 0},
    { x: 5, y: 20, y0: 0 },
    { x: 20, y: 27, y0: 0 },
    { x: 35, y: 29, y0: 0 },
    { x: 40, y: 34, y0: 0 },
    { x: 47, y: 34, y0: 0 },
    { x: 49, y: 35, y0: 0 },
    { x: 54, y: 35, y0: 0 },
    { x: 56, y: 33, y0: 0 },
    { x: 60, y: 33, y0: 0 },
    { x: 64, y: 36, y0: 0 },
    { x: 67, y: 36, y0: 0 },
    { x: 76, y: 40, y0: 0 },
    { x: 78, y: 45, y0: 0 },
  ] }
  />
    
          <VictoryArea 
          
          name="area-1" data={ [

    { x: 0, y: 0, y0: 0},       
    { x: 1, y: 20, y0: 0},
    { x: 5, y: 40, y0: 0 },
    { x: 20, y: 54, y0: 0 },
    { x: 35, y: 58, y0: 0 },
    { x: 40, y: 68, y0: 0 },
    { x: 47, y: 68, y0: 0 },
    { x: 49, y: 70, y0: 0 },
    { x: 54, y: 70, y0: 0 },
    { x: 56, y: 66, y0: 0 },
    { x: 60, y: 66, y0: 0 },
    { x: 64, y: 72, y0: 0 },
    { x: 67, y: 72, y0: 0 },
    { x: 76, y: 80, y0: 0 },
    { x: 78, y: 90, y0: 0 },
  ] }
  />
     
              
            </VictoryStack>
          </VictoryChart> 
          </div>);
    }
}
 
export default MyChart;