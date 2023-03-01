# `Proptypes`
Khai báo type cho props bằng `static` `propTypes`:
```tsx
class MapComponent extends React.Component {
  static propTypes = {
    lat: PropTypes.number,
    lng: PropTypes.number,
    zoom: PropTypes.number,
    place: PropTypes.object,
    markers: PropTypes.array
  }
  // ...
 };
```

Scalar types:
- string
- number
- boolean

Complex types:
- function
- object
- array
- arrayOf
- node
- element

Xem [Appendix A: PropTypes](../../part_2/8_appendix_a/1_validators.md)
