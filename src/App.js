import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
            This is a firebase hosting step
        </p>
        <ul>
          <li>1. Use 'create-react-app' to build React project</li>
          <li>2. When the project is done, use 'npm run build' to build a 'build' folder</li>
          <li>3. Before hosting, you should create a project for this App at Firebase</li>
          <li>4. 'firebase login'</li>
          <li>5. 'firebase init'</li>
          <li>6. 'Are you ready to preceed?' 'Yes'</li>
          <li>7. 'Hosting:Configure and deploy Firebase Hosting sites'</li>
          <li>8. 'What do you want to use as your public directory?' 'build'--create before</li>
          <li>9. 'Configure as a single-page app?' 'Yes'</li>
          <li>10. 'File build/index.html already exists. Overwrite?' 'No'</li>
          <li>11. 'firebase deploy'</li>
        </ul>
      </div>
    );
  }
}

export default App;
