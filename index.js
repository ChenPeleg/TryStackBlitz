import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Layout from "./src/layout"
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <Layout/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
