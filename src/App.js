import React, { useState} from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages';
import SigninPage from './pages/signin';
import Services from './components/ServiceSection';


//เรียก navbar ให้ไปแสดงทุกหน้าที่มีการเปลี่ยน บรรทัด 15

function App() {


  return (
    <Router>
      <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/signin" component={SigninPage} exact />
      <Route path="/service" component={Services} exact />
      {/* <Route path="/discover" component={} exact />
      <Route path="/signup" component={home} exact /> */}
      </Switch>
    </Router>
  );
}

export default App;
