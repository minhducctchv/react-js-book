# Function
```tsx{4}
// code/appendix/proptypes/func.js
class Component extends React.Component {
  static propTypes = {
    onPress: PropTypes.func
  }
  // ...
  render() {
    return (
      <div onClick={this.props.onPress}>
        Press me
      </div>
    )
  }
}
```
```tsx
const x = function(name) {};
const fn = value => alert("Value: " + value);

<Component onComplete={x} />
<Component onComplete={fn} />
```