---
layout: post
published: true
categories: react_fresh
title: JSX
---

JSX is a syntax extension to JavaScript.

It's the primary type in React. a variable that stores HTML - an immutable object that describes a DOM node and its attributes or properties. It has no methods / prototypes.

It's a combination of XML syntax and JavaScript.

It is used to write React "elements", which are rendered to the DOM.

It must be converted to vanilla javascript via Babel.

JSX is different from HTML in that it can use JS variables. It also uses different styling and class name formats.

JSX tags look much like an HTML tag.

A typical tag looks like this:

<div id="foo">Hello world</div>

You can use self-closing tags:

<div className="sidebar" />

A self-closing tag, also known as a void element contains no child elements or text node.

With a closing tag, use a space between the tagName and the closing slash.

If the first initial of the tag name is capitalized, then React knows it is dealing with a component name. Here's a self-closing one:

```javascript
ReactDOM.render(<Parent />, ...
```

Sometimes, component tags do use closing tags. This example shows a component tags enclosing non-componet tags:

```javascript
<Child key={counter.id}>
  <h4> Title </h4>
</Child>
```

JSX is not required. It is just "syntactic sugar" for calling createElement(), which is a Document Object Method. For example, using regular JS, we can render HTML:

```javascript
var div = document.createElement("h1");
div.textContent = "hello world";
div.setAttribute("class", "yellow");
document.body.appendChild(div);
```

We could do the same with React and vanilla JS:

```javascript
const title = React.createElement("h1", { className: "yellow" }, "hello world");
```

Or we can just use React and straight JSX, which is translated to React.createElement by Babel:

```jsx
const hello = <h1 className="yellow"> Hello World </h1>;
```

All will render this onto the DOM:

```javascript
<h1 class="yellow">hello world</h1>
```

React.createElement contains three arguments: type, props, children.

-type (string) - contains an HTML tag or a variable referring to a React Component

-props (null or Object) - an object containing attributes/props and values to be passed, like className, color...

-children (null or string) - a string that becomes text content. it could also be a variable reference to another element or component, or an array that contains multiple of these.

- And what is this? >

```jsx
const element = {
  type: "h1",
  props: {
    className: "yellow",
    children: "Hello, world!"
  }
};
```

An example of using variables rather than strings as the children:

```jsx
const title = React.createElement("h1", {}, "My First React Code");
const container = React.createElement("div", {}, title);
ReactDOM.render(container, document.getElementById("global"));
```
