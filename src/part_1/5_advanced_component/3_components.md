# Components

## Creating Components - ES6 Classes or Functional Components
2 Cách tạo ReactComponent:
1. ES6 classes
2. Function components

```tsx
// advanced-components/components-cookbook/src/components/Component/Components.js
import React from "react";

// ES6 class-style
class ComponentApp extends React.Component {
  render() {
    return <div />;
  }
}

export default ComponentApp;
```

```tsx
// advanced-components/components-cookbook/src/components/Component/FunctionComponent.js
// Functional Component Style
const FunctionComponent = props => {
  return <div />;
};

export default FunctionComponent;
```

Về cơ bản khi dùng Function Component thì bản thân nó giống 1 `render()` function

## `render()` Returns a `ReactElement` Tree

`render()` là required method của ReactComponent

`render()` return về **single** `ReactElement` hoặc `fasly` value. Nếu return về fasly value thì React sẽ render ra
1 `<noscript />` tag => dùng để remove tag khỏi page

```tsx
// advanced-components/components-cookbook/src/components/Component/FunctionComponentHeading.js
const FunctionComponentHeading = props => {
  return <h1>Hello</h1>;
};
```

```tsx
// advanced-components/components-cookbook/src/components/Component/Header.js
class Heading extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}
```

## Getting Data into `render()`
bla bla...