# any type
Chấp nhận mọi kiểu
```jsx{3}
class Component extends React.Component {
  static propTypes = {
    mustBePresent: PropTypes.any
  }
  // ...
  render() {
    return (
      <div>
        Is here: {this.props.mustBePresent}
      </div>
    )
  }
}
```