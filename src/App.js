import React, { Component } from 'react';
import Header from './component/Header';
import Footer from './component/Footer';

class App extends Component {
  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <h1 className="App-title">Welcome to React</h1>
  //       </header>
  //       <p className="App-intro">
  //         To get started, edit <code>src/App.js</code> and save to reload.
  //       </p>
  //     </div>
  //   );
  // }


 
  render() {
   const siswa = ['Andi','Budi','Adi'];
   const listSiswa = siswa.map(
     (siswa, index) => <li key={siswa.toString()}>{siswa}</li>
   )
    return (
      <div>
       <Header />
       <h1>Selamat Datang !</h1>
       <Footer />
      </div>
    );
  }
}

export default App;
