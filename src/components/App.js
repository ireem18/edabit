import React,{Component} from 'react';
import Header1 from './Header1';
import Header2 from './Header2';
import Middle1 from './Middle1';
import Middle2 from './Middle2';
import Middle3 from './Middle3';
import Language from './Language';
import Person from './person';
import Footer from './footer';



class App extends  Component{
  render(){
      return(
        <>
        <Header1 />
        <Header2 />
        <Middle1 />
        <Middle2 />
        <Middle3 />
        <Language />
        <Person />
        <Footer />
        </>
      );

  }

}

export default App;