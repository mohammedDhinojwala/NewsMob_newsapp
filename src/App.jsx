import { useState } from "react";
import Navbar from "./component/Navbar";
import React from "react";
import News from "./component/News";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  let pageSize = 25;

  const apiKey = "413377f44af245538395050a7881aca8"
  
 const [progress,setProgress] = useState(0);
  
//  let  setProgress = (progress)=> {
//     setProgress;
//   }
  
    return (

      <div>
        
        <Router>
          
        <LoadingBar
        color='#f11946'
        progress ={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
          <Navbar />
       
          
          <Switch>

          <Route exact path="/general">
              <News setProgress = {setProgress} apiKey = {apiKey}
                key="general"
                pageSize={pageSize}
                country="in"
                category="general"
              />
            </Route>

              
            <Route exact path="/sports">
              <News setProgress = {setProgress} apiKey = {apiKey}
                key="sports"
                pageSize={pageSize}
                country="in"
                category="sports"
              />
              sports
            </Route>
            <Route exact path="/business">
              <News setProgress = {setProgress} apiKey = {apiKey}
                key="business"
                pageSize={pageSize}
                country="in"
                category="business"
              />{" "}
              business
            </Route>
            <Route exact path="/entertainment">
              <News setProgress = {setProgress} apiKey = {apiKey}
                key="entertainment"
                pageSize={pageSize}
                country="in"
                category="entertainment"
              />{" "}
              entertainment
            </Route>
            <Route exact path="/health">
              <News setProgress = {setProgress} apiKey = {apiKey}
                key="health"
                pageSize={pageSize}
                country="in"
                category="health"
              />{" "}
              health
            </Route>
            <Route exact path="/science">
              <News setProgress = {setProgress} apiKey = {apiKey}
                key="science"
                pageSize={pageSize}
                country="in"
                category="science"
              />{" "}
              science
            </Route>
            <Route exact path="/technology">
              <News setProgress = {setProgress} apiKey = {apiKey}
                key="technology"
                pageSize={pageSize}
                country="in"
                category="technology"
              />{" "}
              technology
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }

  export default App;