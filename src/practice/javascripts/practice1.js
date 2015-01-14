var Hello = React.createClass({
  render: function() {
    return (
      <div>Hello {this.props.name}!!</div>
    );
  }
})

React.render(<Hello name="React" />, document.getElementById("hello"));

// var JsxErrorOccurs= React.createClass({
//   render: function() {
//     return (
//       <div>XJS elements</div>
//       <div>must be wrapped</div>
//     );
//   }
// })
//
// React.render(<JsxErrorOccurs />, document.getElementById("app"));
