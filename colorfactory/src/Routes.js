import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import CheckColorDetails from './CheckColorDetails';
import ColorList from './ColorList';
import NewColor from './NewColor';
import NotFound from './NotFound';

const Routes = ({ colors, addColor }) => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/colors/:color">
            <CheckColorDetails colors={colors} />
          </Route>
          <Route path="/new-color">
            <NewColor colors={colors} addColor={addColor} />
          </Route>
          <Route path="/colors">
            <ColorList colors={colors} />
          </Route>
          <Redirect to="/colors" />
          <Route><NotFound /></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;