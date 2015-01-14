var TODOS = [
  {id: 1, title: 'Try React.js'},
  {id: 2, title: 'Buy a iPhone 6'},
  {id: 3, title: 'Read a book'}
]

var Todos = React.createClass({
  render: function() {
    todoNodes = this.props.todos.map(function(todo) {
      return (
        <li key={todo.id}>{todo.title}</li>
      );
    });

    return (
      <ul>{todoNodes}</ul>
    );
  }
});

var TodoInput = React.createClass({
  handleKeyDown: function(e) {
    if (e.which !== 13) { return; } // 13: ENTER_KEY

    e.preventDefault();

    val = this.refs.todoTitle.getDOMNode().value;
    this.props.onNewTodo(val);
    this.refs.todoTitle.getDOMNode().value = '';
  },

  render: function() {
    return (
      <input
        type="text"
        placeholder="What to do next?"
        onKeyDown={this.handleKeyDown}
        ref="todoTitle"
      />
    );
  }
});

var TodoApp = React.createClass({
  addTodo: function(title) {
    newTodos = this.props.todos.concat({
      id: this.props.todos.length + 1,
      title: title
    });
    // Can not set props as states
    this.props.todos = newTodos;
  },

  render: function() {
    return (
      <div>
        <TodoInput onNewTodo={this.addTodo} />
        <Todos todos={this.props.todos} />
      </div>
    );
  }
});

React.render(
  <TodoApp todos={TODOS} />,
  document.getElementById("todo-container")
);
