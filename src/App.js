import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: "",
      todos: [], // initialize an empty array to store the todos
    };
  }
  
  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { todo: this.state.todo }; // create a new todo object
    const todos = [...this.state.todos, newTodo]; // add the new todo object to the existing todos array
    this.setState({
      todos,
      todo: "", // clear the todo input
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <div>
        <div className="app">
          <div className="container">
            <div className="box">
              <h1>My Daily Task</h1>
              <form className="form-wrap" onSubmit={this.handleSubmit}>
                <textarea
                  className="input"
                  name="todo"
                  value={this.state.todo}
                  onChange={this.handleChange}
                  placeholder="enter task"
                />
                <input className="button" type="submit" value="add" /> {/* use submit instead of button type */}
              </form>
              {todos.map((todo, index) => ( // map over the todos array
                <div className="list" key={index}>
                  <p className="item">{todo.todo}</p> {/* render each todo as a paragraph */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;


// const [text,setText]=useState('')
// const [todos,setTodos]=useState([])
// setText('jhvjvjkk')
// setTodos([mb,])
// import React, { Component,useState} from "react";
// import "./App.css";

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       todos: [],
//       text:''
//     };
//   }
//   handleChange = (e) => {
//     e.preventDefault();
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//     console.log(this.state);
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.setState({
//       todos:[...this.state.todos,this.state.text]
//     })
//   };

  

  
//   render() {
    
//     return (
//       <div>
//         <div className="app">
//           <div className="container">
//             <div className="box">
//               <form className="form-wrap" onSubmit={this.handleSubmit}>
//                 <textarea
//                   className="input"
//                   name="text"
//                   value={this.state.text}
//                   onChange={this.handleChange}
//                   placeholder="enter task"
//                 />
//                 <input className="button" type="submit" value="add" />
//               </form>
              
//               </div>
//             <div className="list">
//             {  this.state.todos.map((todo)=>{
//               return(<div >  
//                 <p className="item">{todo}</p>
//               </div>)
               
              
//               })}
                
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
