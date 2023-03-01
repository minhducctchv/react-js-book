# Custom validator
dùng function để custom validator nó sẽ return `new Error()` nếu sai. nó nhận vào 3 arguments
- `props` (obj props chứa all prop)
- `propName`
- `componentName`
```jsx{3-8}
class Component extends React.Component {
  static propTypes = {
    user: function(props, propName, componentName) {
      const user = props[propName];
      if (!user.isValid()) {
        return new Error('Invalid user');
      }
    }
  }
  // ...
  render() {
    const { user } = this.props
    return (
      <div>
        {user.name}
      </div>
    )
  }
}
```
```jsx
class User {
  constructor(name) {
    this.name = name
  }
  isValid() {
    // must have a name
    return !!this.name && new Error('Name must be present')
  }
}
```