# instanceOf
value truyền vào phải là instance của 1 class
```tsx{4}
// code/appendix/proptypes/instanceOf.js
class Component extends React.Component {
  static propTypes = {
    user: PropTypes.instanceOf(User)
  }
  // ...
  render() {
    const { user } = this.props

    return (
      <div>
        <h3>{user.name}</h3>
      </div>
    )
  }
}
```
```tsx
// code/appendix/proptypes/instanceOf.js
class User {
  constructor(name) {
    this.name = name
  }
}
```
```tsx
const ari = new User('Ari');

<Component user={ari} />
```