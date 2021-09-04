import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from '../pages/Auth';
import Home from '../pages/Home';
import { firebaseService } from '../services';

const AppRouter: React.FC = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);

  useEffect(() => {
    const init = async () => {
      const firebaseOptions = await window?.API?.ipcRenderer.invoke('getFirebaseConfig');
      console.log('firebaseConfig: ', firebaseOptions);
      firebaseService.init(firebaseOptions);
      const app = firebaseService.getApp();
      const auth = firebaseService.getAuth(app);
      setIsLoggedin(!!auth.currentUser);
    };

    init();
  }, []);

  return (
    <Router>
      <Switch>
        {isLoggedin ? (
          <Route exact path="/">
            <Home />
          </Route>
        ) : (
          <Route exact path="/">
            <Auth />
          </Route>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
