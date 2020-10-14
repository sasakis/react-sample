import React from 'react';
//import { Component} from 'react';
//import logo from './logo.svg';
import './App.css';

// class App extends Component {
//   render(){
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> 
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
//  };
// }

const App = () =>{

  const profiles = [
    {
      name: "Taro", age:10
    },
    {
      name: "Hanako", age:5
    },
    { name: "NoAge"}
  ]

  return (
    <React.Fragment>
    {
      profiles.map((profile,index ) => {
        return <User name={profile.name} age={profile.age} key={index}/>
      })
    }
  </React.Fragment>
  )
}

const User = (props) =>{
  return <div>Hi!, I am {props.name}! and {props.age} years old!</div>
}


User.defaultProps = {
  age: 1
}


export default App;
