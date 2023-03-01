# Intro

`ReactComponent` là 1 Javascript object, có 1 function `render()` function này return 1 `ReactElement`

`ReactElement` là 1 DOM trong Virtual DOM

:::tip KEY
`ReactElement` ta đã tìm hiểu trong chapter **JSX and the Virtual DOM**
:::

Chương này ta sẽ tìm hiểu về:
- `render()` - hàm bắt buộc trên mọi ReactComponent.
- `props` - "tham số đầu vào" cho component
- `context` - "global variable" cho component
- `state` - cách giữ dữ liệu chỉ nội bộ đến thành phần (ảnh hưởng đến quá trình hiển thị).
- `Stateless components` - một cách đơn giản hóa để viết các reusable component.
- `children` - cách tương tác và thao tác với các component con.
- `statics` - cách tạo "class methods" trong components.