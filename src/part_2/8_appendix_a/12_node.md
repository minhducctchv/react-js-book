# Node
Mọi thứ có thể rendered được: number, string, DOM elements, arrays...
```jsx{3}
class Component extends React.Component {
  static propTypes = {
    icon: PropTypes.node
  }
  // ...
  render() {
    const { icon } = this.props
    return (
      <div>
        {icon}
      </div>
    )
  }
}
```
```jsx
const icon = <FontAwesomeIcon name="user" />


<Component icon={icon} />
<Component icon={"fa fa-cog"} /> // phức tạp hơn
```