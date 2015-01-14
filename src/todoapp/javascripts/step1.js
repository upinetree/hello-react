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
  render: function() {
    return (
      <input
        type="text"
        placeholder="What to do next?"
      />
    );
  }
});

var TodoApp = React.createClass({
  render: function() {
    return (
      <div>
        <TodoInput />
        <Todos todos={this.props.todos} />
      </div>
    );
  }
});

React.render(
  <TodoApp todos={TODOS} />,
  document.getElementById("todo-container")
);
