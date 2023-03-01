# String
```tsx{4}
// code/appendix/proptypes/string.js
class Component extends React.Component {
  static propTypes = {
    name: PropTypes.string
  }
  // ...
  render() {
    return (<div>{this.props.name}</div>)
  }
}
```
2 cách truyền sau đều đúng:
```tsx
<Component name={"Ari"} />
<Component name="Ari" />
```