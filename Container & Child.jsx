// В файле index.jsx приведены компоненты Container и Child
// Добавить кнопку, при нажатии на которую компонент Child
// будет убираться из рендера в Container'е
class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  render() {
    let childComponent = null;

    if (this.state.show) {
      childComponent = <Child />;
    }

    return <>{childComponent}</>;
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    alert("The component Child is unmounted.");
  }

  render() {
    return <h1>Children!</h1>;
  }
}
