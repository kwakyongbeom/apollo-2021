import React from 'react';
import {HashRouter as Router, Route} from "react-router-dom";
import Home from "../routes/Home";
import Detail from "../routes/Detail"


function App() { //Route 생성 
  //해당 경로와 component를 지정 
  return <Router>
    <Route exact path="/" component={Home} />
    <Route path="/:id" component={Detail} />
  </Router>
}

export default App;
