var ControlledText = React.createClass({
  getInitialState: function() {
    return { textValue: "initial value" };
  },

  changeText: function(e) {
    this.setState({textValue: e.target.value});
  },

  render: function() {
    return (
      <div>
        <h2>ControlledText</h2>
        <p>{this.state.textValue}</p>
        <input type="text" value={this.state.textValue} onChange={this.changeText} />

        <p>can not change below</p>
        <input type="text" value={this.state.textValue} />
        <input type="text" value="controlled value" />
      </div>
    );
  }
});

React.render(
  <ControlledText />,
  document.getElementById("controlled")
);
