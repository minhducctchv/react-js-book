# Number
```tsx{4}
// code/appendix/proptypes/number.js
class Component extends React.Component {
  static propTypes = {
    totalCount: PropTypes.number
  }
  // ...
  render() {
    return (<div>{this.props.totalCount}</div>)
  }
}
```
```tsx
var x = 20;

<Component totalCount={20} />
<Component totalCount={x} />
```