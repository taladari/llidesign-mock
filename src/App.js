import React, { Component } from 'react';
import './App.css';
import ImageCarousel from './ImageCarousel/ImageCarousel';
import Header from './Header/Header';

class App extends Component {
    render(){
      return (
        <div className="container">
          <ImageCarousel />
          <Header />
        </div>
      );
    }
}

export default App;
