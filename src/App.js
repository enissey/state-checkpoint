import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
    state={
      person:{FullName:"Yassine Chatti",
      Bio:"This is my bio",
      imgSrc:<img src='profile.jpg' alt='profile'/>,
      Profession:"teacher"},

    Show:false,
    intervall:null,
    timer:0

  }

  componentDidMount(){
    this.setState({
      intervall:setInterval(()=>{
        this.setState({timer:this.state.timer +1});
      }, 1000)
    })
  }


   toggle=()=>{
     this.setState({
       Show:!this.state.Show
     })
   }
  render() {
    return (
      <div className='cont'>
      <div className='appl'>
        <button onClick={this.toggle}>show</button>
        {this.state.Show&&<h1>{this.state.person.imgSrc}</h1>}
        {this.state.Show&&<h2>{this.state.person.FullName}</h2>}
        {this.state.Show&&<h2 className='Bio'>{this.state.person.Bio}</h2>}
        {this.state.Show&&<h2>{this.state.person.Profession}</h2>}
      </div>
      <h2 className='timer'>{this.state.timer}</h2> 
      </div>
    )
  }
}

