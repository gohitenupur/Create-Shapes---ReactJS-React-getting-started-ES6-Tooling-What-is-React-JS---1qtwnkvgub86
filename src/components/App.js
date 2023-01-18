import React from 'react'
import '../styles/App.css';


class App extends React.Component{
  constructor(){
    super();
    this.state={
      selectedShape:"square",
      shapes:[]
    }
  }

  changeSelectedShape=(e)=>{
    this.setState({
      selectedShape:e.target.value
    })
  }

  addShape=()=>{
    //Update an Array 

    //Create a copy of Array
    const allShapes=[...this.state.shapes];
    allShapes.push(this.state.selectedShape);
    this.setState({
      shapes:allShapes
    })
  }

  render(){
    return(
      <div id="main">
        
      <div id="shape-creator">
      <select value={this.state.selectedShape} onChange={this.changeSelectedShape}>
          <option value="square">Square</option>
          <option value="circle">Circle</option>
        </select>
        <button onClick={this.addShape}>Add Shape</button>

      </div>
      <div id="shapes-holder">
        {this.state.shapes.map((shape,index)=>{
          if(shape==="square"){
            return <div className='square'>{index}</div>
          }
          return <div className='circle'>{index}</div>
        })}
      </div>
    </div>
    )
  }
}



export default App;
