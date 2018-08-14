import React, {Component} from 'react';


class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit:true,
            originTodo:this.props.todo
        }
    }
    
    handleCancelButtonClick = (event) => {
        this.props.onTodoItemCancel(event);
        this.handleEditButtonClick();
    }
    handleEditButtonClick = () => {
        this.setState({
            isEdit: !this.state.isEdit
        })
    }
    handleSaveButtonClick = () => {
        this.setState({
            originTodo:this.props.todo
        })
        this.setState({
            isEdit: !this.state.isEdit
        })
    }
    handleDeleteButtonClick = (event) => {
        this.props.onTodoItemDelete(event)
        this.handleEditButtonClick();
    }
    
    render(){
        const value = `${this.props.todo}`;
        const id = `${this.props.id}`;
        return (
            <div className="item">
                <div className="right floated content">
                    {this.state.isEdit ? <button className="ui primary button"
                        name={this.props.id}
                        onClick={this.handleEditButtonClick}
                    >
                    Edit</button>: null}
                    {!this.state.isEdit ? <button className="ui primary button"
                        name={this.props.id}
                        onClick={this.handleSaveButtonClick}
                    >
                    Save</button>:null}
                    {!this.state.isEdit ? <button className="ui negative button"
                        value={this.state.originTodo}
                        name={id}
                        onClick={this.handleCancelButtonClick}
                    >
                        Cancel
                    </button> : null }
                    {this.state.isEdit ? <button className="ui negative button"
                        value={this.state.originTodo}
                        name={id}
                        onClick={this.handleDeleteButtonClick}
                    >
                       Check
                    </button>: null }
                </div>
                <div className="content">
                        <input
                            disabled={this.state.isEdit}
                            value={value}
                            name={id}
                            onChange={this.props.onTodoItemUpdate}
                        />
                    </div>
            </div>
        )
    }
}

export default TodoItem