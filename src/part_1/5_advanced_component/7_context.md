# Context
Cách tạo biến toàn cục cho toàn bộ project

B1: tạo biến context bằng `React.createContext()`
```js{4}
// advanced-components/components-cookbook/src/components/theme/src/theme.js
import React from 'react';
  // ...
export const ThemeContext = React.createContext(themes.dark);
```

B2:

## Default value

## Multiple contexts