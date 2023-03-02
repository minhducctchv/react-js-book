# Default props with `getDefaultProps()`
```jsx{2-4}
class Counter extends React.Component {
  static defaultProps = {
    initialValue: 1
  };
  // ...
};
```
```jsx
<Counter />
<Counter initialValue={1} />
```