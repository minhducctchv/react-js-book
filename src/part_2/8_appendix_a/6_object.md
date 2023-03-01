# Object
```tsx{4}
// code/appendix/proptypes/object.js
class Component extends React.Component {
  static propTypes = {
    user: PropTypes.object
  }
  // ...
  render() {
    const { user } = this.props
    return (
      <div>
        <h1>{user.name}</h1>
        <h5>{user.profile}</h5>
      </div>
    )
  }
}
```
```tsx
const user = {
  name: 'Ari'
}

<Component user={user} />
<Component user={{name: 'Anthony'}} />
```