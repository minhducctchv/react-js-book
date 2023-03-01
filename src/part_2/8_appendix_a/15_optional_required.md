# Optional & required props
Mọi props là optional nếu muốn là required thì thêm `.isRequired`
```jsx{6-7}
class Component extends React.Component {
  static propTypes = {
    // Optional props:
    onStart: PropTypes.func,
    // Required props:
    onComplete: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
  }
  // ...
  startTimer = (seconds=5) => {
    const { onStart, onComplete } = this.props
    onStart()
    setTimeout(() => onComplete(), seconds)
  }
  // ...
  render() {
    const { name } = this.props
    return (
      <div onClick={this.startTimer}>
        {name}
      </div>
    )
  }
}
```