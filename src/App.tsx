/* lint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './features/todos/Todos';
import { initFirebase } from './firebase';

const App: React.FC = () => {
  useEffect(() => {
    try {
      // test Main IPC communication
      window?.API?.test('test arg').then((v) => console.log('v: ', v));
      window?.API?.ipcRenderer.invoke('test', 'invoke test');

      const init = async () => {
        const config = await window?.API?.ipcRenderer.invoke('getFirebaseConfig');
        console.log('firebaseConfig: ', config);
        initFirebase(config);
      };

      init();
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TodoList></TodoList>
        <p>
          Edit <code>src/App.tsx</code> and save to reload!!.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
