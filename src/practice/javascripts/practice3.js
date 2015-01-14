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
  getInitialState: function() {
    return { comments: [] };
  },

  componentDidMount: function() {
    this.loadComments();
    setInterval(this.loadComments, this.props.pollInterval);
  },

  loadComments: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(comments) {
        this.setState({comments: comments});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  render: function() {
    var commentNodes = this.state.comments.map(function(comment) {
      return (
        <Comment key={comment.id} author={comment.user.login}>
          {comment.body}
        </Comment>
      );
    });

    return (
      <ul>
        {commentNodes}
      </ul>
    );
  }
});

React.render(
  <Comments url="https://api.github.com/repos/upinetree/hello-react/issues/comments" pollInterval={5000} />,
  document.getElementById("comments")
);
