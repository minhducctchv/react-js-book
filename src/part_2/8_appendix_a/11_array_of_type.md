# Array of type
define type cho phần tử trong mảng
```tsx{3}
class Component extends React.Component {
  static propTypes = {
    authors: PropTypes.arrayOf(PropTypes.object)
  }
  // ...
  render() {
    const { authors } = this.props
    return (
      <div>
        {authors && authors.map(author => {
          <AuthorCard author={author} />
        })}
      </div>
    )
  }
}
```
```tsx
const users = [
  {name: 'Ari'},
  {name: 'Anthony'}
];


<Component authors={[{name: 'Anthony'}]} />
<Component authors={users} />
```