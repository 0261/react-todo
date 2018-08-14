import React, {Component} from 'react';
import TodoItem from './TodoItem.js'



class TodoList extends Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        const item = this.props.todoList.map((item)=>{
            return(
                <TodoItem
                    {...item}
                    onTodoItemUpdate={this.props.onTodoItemUpdate}
                    onTodoItemCancel={this.props.onTodoItemCancel}
                    onTodoItemDelete={this.props.onTodoItemDelete}
                    key={item.id}
                />
            )
        })
        return (
            <div className="ui list">    
                {item}
            </div>
        )
    }
}

export default TodoList
