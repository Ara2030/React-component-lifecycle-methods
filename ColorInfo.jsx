// Используя один из методов жизненного цикла сделать так,
// чтобы через 1000 мс после рендера цвет сменился на Yellow
class ColorInfo1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "Green" };
  }

  componentDidMount() {
    setInterval(() => this.setState({ color: "Yellow" }), 1000);
  }

  render() {
    return <h1>Color is {this.state.color}</h1>;
  }
}
