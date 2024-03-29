import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';

const Dashboard = () => (<h2>Dashboard</h2>);
const SurveyNew = () => (<h2>SurveyNew</h2>);
const Landing = () => (<h2 className="container">Landing</h2>);

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <div>
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/New" component={SurveyNew} />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
