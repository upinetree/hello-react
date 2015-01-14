var Comment = React.createClass({
  render: function() {
    return (
      <li>
        <div>{this.props.author}</div>
        <div>{this.props.children}</div>
      </li>
    );
  }
});

var Comments = React.createClass({
  render: function() {
    return (
      <ul>
        <Comment author="Bob">Comment 1</Comment>
        <Comment author="Alice">Comment 2</Comment>
      </ul>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <input placeholder="Comment here" />
    );
  }
});

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h2>Comments</h2>
        <Comments />
        <CommentForm />
      </div>
    );
  }
});

React.render(<CommentBox />, document.getElementById("comments"));
