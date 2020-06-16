// import React from 'react';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// function Avatar(props) {
//   return (
//     <div className="App-wrapAvatar">
//       <img className="App-avatar"
//         src={props.author.avatarUrl}
//         alt={props.author.name} />
//     </div>
//   )
// }

// function Title(props) {
//   return <h1 className="App-title">This is {props.title}</h1>
// }

// function Description(props) {
//   return (
//     <div className="App-description">
//       <ul>
//         <Descriptionsitem item="(a) 12345" />
//         <Descriptionsitem item="(b) 12345" />
//         <Descriptionsitem item="(c) 12345" />
//         <Descriptionsitem item="(d) 12345" />
//         <Descriptionsitem item="(e) 12345" />
//       </ul>
//     </div>
//   )
// }
// function Descriptionsitem(props) {
//   return <li><a href="#">{props.item}</a></li>
// }

// function Button(props) {
//   return (
//     <button>
//       <ButtonText buttonText={comment.buttonText} />
//     </button>
//   )
// }

// function ButtonText(props) {
//   return <span>{props.buttonText}</span>
// }

// function App() {
//   return (
//     <div className="App">
//       <Avatar author={comment.author} />
//       <Title title={comment.title} />
//       <Description />
//       <Button />
//     </div>
//   );
// }

// const comment = {
//   author: {
//     avatarUrl: 'https://placekitten.com/g/64/64',
//     name: 'avatar'
//   },
//   title: 'Cat',
//   buttonText: 'TextButton'
// }
// =================================================

class Avatar extends Component {
  render() {
    return (
      <div className="App-wrapAvatar">
        <img className="App-avatar"
          src={this.props.author.avatarUrl}
          alt={this.props.author.name} />
      </div>
    )
  }
}

class Title extends Component {
  render() {
    return <h1 className="App-title">This is {this.props.title}</h1>
  }
}

class Description extends Component {
  render() {
    return (
      <div className="App-description">
        <ul>
          <Descriptionsitem item="(a) 12345" />
          <Descriptionsitem item="(b) 12345" />
          <Descriptionsitem item="(c) 12345" />
          <Descriptionsitem item="(d) 12345" />
          <Descriptionsitem item="(e) 12345" />
        </ul>
      </div>
    )
  }
}
class Descriptionsitem extends Component {
  render() {
    return <li><a href="#">{this.props.item}</a></li>
  }
}

class Button extends Component {
  render() {
    return (
      <button>
        <ButtonText buttonText={comment.buttonText} />
      </button>
    )
  }

}

class ButtonText extends Component {
  render() {
    return <span>{this.props.buttonText}</span>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Avatar author={comment.author} />
        <Title title={comment.title} />
        <Description />
        <Button />
      </div>
    );
  }
}

const comment = {
  author: {
    avatarUrl: 'https://placekitten.com/g/64/64',
    name: 'avatar'
  },
  title: 'Cat',
  buttonText: 'TextButton'
}

export default App;
