var Comment = React.createClass({
  render: function() {
    return (
      <li>
        {this.props.children}
      </li>
    );
  }
});

var Comments = React.createClass({
  render: function() {
    return (
      <ul>
        <Comment>Comment 1</Comment>
        <Comment>Comment 2</Comment>
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
