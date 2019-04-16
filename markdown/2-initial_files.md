---
layout: post
published: true
categories: react_fresh
title: initial files
---

The file environment consists of at least 3 files.

1. index.html - in the body, add a div with an id. This div is called the "root element"

```javascript
<div id="app" />
```

2. index.js - this file imports components and renders them into the corresponding root element.

```javascript
import Parent from "./components/parent";

ReactDOM.render(<Parent />, document.getElementById("app"));
```

In the previous, the render method consists of two arguments

- The component to render (Parent)
- The root element on which to render (id="app")

3.  Finally, we would have the component itself. In this case, it lives in the parent.jsx file in the component directory.

```javascript
const element = <h1> Damn! </h1>;
export default element;
```

1. app.js defines a JSX element and exports it
2. index.js imports it and renders it to id="root" in our index.html file

But first, be sure to consider these three parts in the following files:

app.js (our component) will consist of 3 parts:

1. import react and react-dom
2. create your element or component
3. render or export it to a file that will render it.

```javascript
import React from "react";
import ReactDOM from "react-dom";
import element from "./app";

ReactDOM.render(element, document.getElementById("root"));
```
