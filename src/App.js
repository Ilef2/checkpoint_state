import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "ilefDimassi",
      bio: "i study the training of the full stack java script",
      profesion: "student",
      show: true,
      src: "./fleur.webp",
      count:0,
    };
  }
  btn = () => {
    this.setState({ show: !this.state.show ,count:0});
  };
  componentDidMount(){  setInterval( () => {
    this.setState({ count: (this.state.count+1) });
  }, 1000);}

 


  render() {
    return (
      <div>
       { this.state.show?(
      <div className="profil">
        <h1 className="name">{this.state.fullName}</h1>
        {this.state.count}
        <h3>{this.state.bio}</h3>
        <h3>{this.state.profesion}</h3>
        <img className="img" src={this.state.src}/>
        <button  className="btn" onClick ={this.btn}>
          showTrue
        </button>
      </div>):(<button className="btn" onClick ={this.btn}>
          showTrue
        </button>)}
      </div>
    );
  }
}

export default App;
