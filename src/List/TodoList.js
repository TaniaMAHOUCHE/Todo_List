import React, { Component } from 'react';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            items: []
        };
    }

    onChange(event) {
        this.setState({
            userInput: event.target.value
        });
    }

    addTodo(event) {
        event.preventDefault();
        this.setState({
            userInput: '',
            items: [...this.state.items, this.state.userInput]
        });
    }

    deleteTodo(item) {
        const array = this.state.items;
        const index = array.indexOf(item);
        array.splice(index, 1);
        this.setState({
            items: array
        });
    }

    renderTodos() {
        return this.state.items.map((item) => {
            return (
                <div key={item}>
                    {item} <button onClick={this.deleteTodo.bind(this, item)}>Supprimer</button>
                </div>    
            );
        });
    }

    render() {
        return(
            <div className="todo-container">
                <div className="header">Ma Todo list</div>
                <div className="create-task" >
                    <form>
                        <input 
                            value={this.state.userInput} 
                            type="text" 
                            placeholder="Ajouter une tâche"
                            onChange={this.onChange.bind(this)}
                        />
                        <div className="submit-button" >
                            <button onClick={this.addTodo.bind(this)} >Ajouter</button>
                        </div>
                    </form>
                </div>
                <div>
                    {this.renderTodos()}
                </div>
            </div>
        );
    }
}

export default TodoList;