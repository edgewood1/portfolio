---
layout: post
published: true
categories: react
title: Passing to Child 1
---

When we nest a component inside another,
the nested component is the "child"
and the other is the "parent".

While a child can manage its own state,
it can also recieve 'inputs' or 'props' from its parent.

---

In the parent, we rendered the child, assigning a variable.

```javascript
class Parent extends Component {
  render() {
    return <Child value="hello" />;
  }
}
```

In the child, we can access this variable through the 'props' object

So in the child, we can assign this props key to our state:

```javascript
class Child extends Component {
  constructor(props) {
    super(props)
      this.state = {
        count: this.props.value
      }
  }
  render() { ... }
```

Props is actually an object from React.Component that lists all the attributes in the current component.
