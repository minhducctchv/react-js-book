# Multiple types

## `oneOf`
prop phải là 1 trong các values
```tsx{4-6}
// code/appendix/proptypes/oneOf.js
class Component extends React.Component {
  static propTypes = {
    level: PropTypes.oneOf([
      'debug', 'info', 'warning', 'error'
    ])
  }
  // ...
  render() {
    return (
      <div>
        <p>{this.props.level}</p>
      </div>
    )
  }
}
```

## oneOfType
prop phải là 1 trong các types
```tsx{4-7}
// code/appendix/proptypes/oneOfType.js
class Component extends React.Component {
  static propTypes = {
    phoneNumber: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ])
  }
  // ...
  render() {
    return (
      <div>
        <p>{this.props.phoneNumber}</p>
      </div>
    )
  }
}
```