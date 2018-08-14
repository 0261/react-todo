import React, { Component } from 'react';


import TodoList from './todo/TodoList'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList:[
                {id:1,date:"2018-08-13 09:00", todo:"회사 출근", isSuccess:false, },
                {id:2,date:"2018-08-13 10:00", todo:"오전 회의", isSuccess:false, },
                {id:3,date:"2018-08-13 12:00", todo:"점심 식사", isSuccess:false, },
            ]
        }
    }

    handleTodoItemChange = (event) => {
        const { todoList } = this.state
        const value = event.target.value
        const id = event.target.name

        const editedTodoList = todoList.map(item=>{
            if(item.id ==  id){
                item.todo = value;
            }
            return item;
        })
        this.setState({
            todoList: editedTodoList
        })
    }

    handleTodoItemCancel = (event) => {
        const { todoList } = this.state
        const value = event.target.value
        const id = event.target.name

        const editedTodoList = todoList.map(item => {
            if (item.id == id) {
                item.todo = value;
            }
            return item;
        })
        this.setState({
            todoList: editedTodoList
        })
    }

    handleTodoItemDelete = (event) => {
        const { todoList } = this.state
        const value = event.target.value
        const id = event.target.name

        const editedTodoList = todoList.filter(item => {
            if (item.id == id) {
            }else{
                return item;
            }
        })
        this.setState({
            todoList: editedTodoList
        })
    }


    render(){
        return(
            <div>
                <div className="ui raised very padded text container segment">
                    <h2 className="ui header center">Todo List</h2>
                </div>
                <div className="ui raised very padded text container segment">
                    <TodoList
                        todoList={this.state.todoList}
                        onTodoItemUpdate={this.handleTodoItemChange}
                        onTodoItemCancel={this.handleTodoItemCancel}
                        onTodoItemDelete={this.handleTodoItemDelete}
                    />
                </div>
            </div>
        )
    }
    
}


export default App;
