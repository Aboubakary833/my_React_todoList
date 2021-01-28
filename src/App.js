import React from "react";
import './App.css';

export default class App extends React.Component {
  input = React.createRef();
  state = {
    todos: [
      {id: 0, todo: 'Cuisine'},
      {id: 1, todo: 'Vaisellle'},
      {id: 2, todo: 'Courses'}
    ]
  };
  delTodo = id => {
    let myCopy = this.state.todos.slice();
    const index= myCopy.findIndex(todo => todo.id === id);
    myCopy.splice(index, 1);
    this.setState({todos: myCopy});
    console.log(this.state.todos);
  }
  addTodo = e => {
    e.preventDefault();
    const myCopy = this.state.todos.slice();
    const id = myCopy.length;
    const todo = this.input.current.value;
    const newTodo = {id, todo};
    myCopy.push(newTodo);
    this.setState({todos: myCopy});
    this.input.current.value = ''
  }

  render() {
    return (
      <div id="container">
        <h1>My ToDo List</h1>
        <ul>
          {
          this.state.todos.map(el => {
            return <li>
                      <span>{el.todo}</span>
                      <button onClick = {() => {this.delTodo(el.id)} }>
                      <div className="lign"></div>
                      <div className="lign"></div>
                      </button>
                    </li>
          })}
        </ul>
        <form onSubmit={this.addTodo}>
          <input type="text" ref={this.input} placeholder="Nom d'une tâche à faire" />
          <button type="submit">Ajouter</button>
        </form>
      </div>
    );
  }
}