import React, { Component } from 'react';
import './App.css';
import Layout from "../components/Layout/layout-component";
import Sidebar from "../components/Sidebar/sidebar-component";
import Footer from "../components/Footer/footer-component";
import Editor from "../components/Editor/editor-component";

class App extends Component {
  render() {
    return (
      <Layout
        main={<Editor/>}
        footer={<Footer/>}
        sidebar={<Sidebar />}
      />
    );
  }
}

export default App;
