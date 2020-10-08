import React, { Component } from 'react';
import MyDrawer from './Drawer';
import MyAppBar from './Appbar';
import { Route, Router } from 'react-router-dom';
import history from './history';
import MyChart from './chart';

// import MyCard   from './Card';
import MyCard2   from './Card2';
// import Background from './bg.jpg'
import './App.css'
import MyTabBar from './Tabbar'


import ManageProjects from './screens/Manage_Projects';
import ImproveIdeas from './screens/Improve_ideas';
import ManageProcess from './screens/Manage_process';
import SupportPeople from './screens/Support_people'
import AnalysisGeneral from './screens/Analysis_general';
import AnalysisTools from './screens/Analysis_tools';
import AnalysisIdeas from './screens/Analysis_ideas';
import AnalysisIssues from './screens/Analysis_issues';
import AnalysisPeople from './screens/Analysis_people';
import AnalysisProcess from './screens/Analysis_process';
import ManageAdminprojects from './screens/Manage_adminprojects';
import ManageAdminusers from './screens/Manage_adminusers';
import ManageAdminTools from './screens/Manage_admintools';
import SupportIdeasProblems from './screens/Support_ideasproblems';
import SupportIssues from './screens/Support_issues';
import ImproveTSP from './screens/Improve_tsp';
import ImproveTools from './screens/Improve_tools';
class Projects extends Component {
  state = {  }
  render() { 
    return (  <Router history={history}>

      <Route  path='/' render={(routesProps) => <MyDrawer {...routesProps} history={history} />} /> 
      <Route  path='/' render={(routesProps) => <MyAppBar {...routesProps} history={history} />} /> 
      
      <Route exact path='/MyChart' component={MyChart} />
      <Route exact path='/' component={AnalysisGeneral} />
      <Route exact path='/Improve_ideas' component={ImproveIdeas} />
      <Route exact path='/Improve_tools' component={ImproveTools} />
      <Route exact path='/Improve_TOP SUCCESSFULL PEOPLE' component={ImproveTSP} />

      <Route exact path='/Manage_process' component={ManageProcess} />
      <Route exact path='/Manage_projects' component={ManageProjects} />
      <Route exact path='/Manage_admin projects' component={ManageAdminprojects} />
      <Route exact path='/Manage_admin users' component={ManageAdminusers} />
      <Route exact path='/Manage_admin tools' component={ManageAdminTools} />

      <Route exact path='/Support_people' component={SupportPeople} />
      <Route exact path='/Support_ideas, problems' component={SupportIdeasProblems} />
      <Route exact path='/Support_issues' component={SupportIssues} />

      {/* <Route exact path='/Analysis_general' component={AnalysisGeneral} /> */}
      <Route exact path='/Analysis_general' component={AnalysisGeneral} />
      <Route exact path='/Analysis_toos' component={AnalysisGeneral} />
      <Route exact path='/Analysis_ideas' component={AnalysisGeneral} />
      <Route exact path='/Analysis_issues' component={AnalysisGeneral} />
      <Route exact path='/Analysis_people' component={AnalysisGeneral} />
      <Route exact path='/Analysis_process' component={AnalysisProcess} />

      
{/* <div style={{marginTop:'65px',marginLeft:'270px'}}>
 <span> <MyCard/> </span>
 <span> <MyCard/> </span>
 <span> <MyCard/> </span>
 <span> <MyCard/> </span>
 </div>  */}

{/* <div style={{marginTop:'66px',marginLeft:'270px'}}>
<ManageProcess/>
 </div> */}
    </Router>
      






    );
  }
}
 
export default Projects;
