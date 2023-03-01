# Element
chấp nhận value là `ReactElement`
```jsx{3}
class Component extends React.Component {
  static propTypes = {
    listComponent: PropTypes.element,
    list: PropTypes.array
  }
  // ...
  render() {
    const { list } = this.props
    return (
      <ul>
        {list.map(this.renderListItem)}
      </ul>
    )
  }
}
```
```jsx
const Item = function(props) {
  return (
    <div>{props.children}</div>
  )
}
<List list={[1, 2, 3]} />
<List list={[1, 2, 3]} listComponent={Item} />
```