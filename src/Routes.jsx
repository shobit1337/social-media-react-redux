import React from 'react';
import {
  BrowserRouter as Router,
  Routes as RoutesContainer,
  Route,
} from 'react-router-dom';
import App from './App';
import Home from './Home/Home';
import Notifications from './Notifications/Notifications';

const Routes = () => {
  return (
    <Router>
      <RoutesContainer>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/notifications" element={<Notifications />} />
        </Route>
      </RoutesContainer>
    </Router>
  );
};

export default Routes;
