---
path: "/blog/rendering"
date: "2017-11-07"
title: "Mastering"
tags: ["React"]
published: true
---

**Elements**

1. What is an element?

It is a description of an individual DOM node - an HTML tag, attributes, and text:

```jsx
const element = <h1> Damn! </h1>;
```

2. how do we render an element?

We pass it into a render function:

```javascript
ReactDOM.render(element, document.getElementById("root"));
```

3. what is a component?

A component returns an element tree but it can accept inputs and render these along with the element. These inputs are called 'props'.

_We represent components via a capital initial enclosed in a self-closing tag. This is called a **component tag** _ These tags occur in the render function or whereever they are referenced in parent components. Here's an example:

```jsx
<Element />
```

4. what is one kind of component?

Component Functions aka Stateless Components

```javascript
function Element() {
  return <h1> Damn! </h1>;
}
```

This is the same function in ES6:

```javascript
var Element = () => {
  return <h1> Damn! </h1>;
};
```

Notice the component tag:

```jsx
ReactDOM.render(<Element />, document.getElementById("root"));
```

6. what is another kind of component?

class components

unlike component functions, class components can maintain their own state.

'state' is a a regular object that carries a host of key-value pairs
since it is a property of the class, it would be refered to with the 'this' keyword. So, the state object would be refered to as this.state

7. What does this look like?

```javascript
class Welcome extends React.Component {
  state = {
    name: "mel"
  };
  render() {
    return <h1>Hello, {this.state.name}</h1>;
  }
}

ReactDOM.render(<Welcome />, document.getElementById("root"));
```

7. What is another way of writing a class component?

We could use a constructor function. Below, we inherit inputs from previous classes, bind an event, and set our state:

```jsx
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }
```

In a constructor, we can define state, get props, and do any other setup. It's a useful function since it's the first of our lifecycle methods to be used.

For more on this, see the discussion on classes.
