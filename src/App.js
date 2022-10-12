import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import React, { Component } from 'react';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


export default class App extends Component {
  pageSize = 15;
  // apikey=process.env.REACT_APP_NEWS_API;
  apikey="4466ebdca99642129cf1fdd125bd8a34";
  state = {
    progress: 0,
  }
  setProgress = (progress) =>
  {
    this.setState({progress:progress});
  }
  render() {
    return (
      <>
      <Router>
        <Navbar/> 
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
        <Routes>
          <Route path="/general" element={<News apikey={this.apikey} setProgress={this.setProgress} key="general" pageSize={this.pageSize}  countryCode={"in"} category={"general"}/>}></Route>
          <Route path="/general" element={<News apikey={this.apikey} setProgress={this.setProgress} key="general" pageSize={this.pageSize}  countryCode={"in"} category={"general"}/>}></Route>
          <Route path="/entertainment"  element={<News apikey={this.apikey} setProgress={this.setProgress}  key="entertainment"  pageSize={this.pageSize} countryCode={"in"} category={"entertainment"}/>}></Route>
          <Route path="/business"  element={<News apikey={this.apikey} setProgress={this.setProgress} key="business" pageSize={this.pageSize} countryCode={"in"} category={"business"}/>}></Route>
          <Route path="/health"  element={ <News apikey={this.apikey} setProgress={this.setProgress} key="health" pageSize={this.pageSize} countryCode={"in"} category={"health"}/>}> </Route>
          <Route path="/science"   element={<News apikey={this.apikey} setProgress={this.setProgress} key="science" pageSize={this.pageSize} countryCode={"in"} category={"science"}/>}>  </Route>
          <Route path="/technology"   element={<News apikey={this.apikey} setProgress={this.setProgress} key="technology" pageSize={this.pageSize} countryCode={"in"} category={"technology"}/>}></Route>
        </Routes>
      </Router>  
      </>
    )
  }
}

