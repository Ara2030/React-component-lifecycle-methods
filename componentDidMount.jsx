// В файле index.jsx приведен компонент ColorInfo
// Используя один из методов жизненного цикла после обновления компонента:
// Вывести в div(id=color-div) такой текст:
// The updated color is {this.state.color}
class ColorInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "violet" };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ color: "gray" });
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1>Color is {this.state.color}</h1>
        <div id="color-div"></div>
      </div>
    );
  }
}
