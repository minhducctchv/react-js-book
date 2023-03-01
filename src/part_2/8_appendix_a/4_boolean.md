# Boolean
```tsx{4}
// code/appendix/proptypes/bool.js
class Component extends React.Component {
  static propTypes = {
    on: PropTypes.bool
  }
  // ...
  render() {
    return (
      <div>
        {this.props.on ? 'On' : 'Off'}
      </div>
    )
  }
}
```
```tsx
var isOn = true;

<Component on={true} />
<Component on={false} />
<Component on={isOn} />
```
:::tip Cách ẩn hiện component với `&&`
Như đã biết nếu `render()` return fasly thì component là `<noscript />` tag
```tsx{2}
render() { 
  return ( <div> {this.props.on && <p>This component is on</p>} </div> ) 
}
```
:::