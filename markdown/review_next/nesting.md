---
layout: post
published: true
categories: react
title: Nested Components
---

Here, we have an App component that holds references to two other components (Nav and Body).  
Because it contains other components, App is called the "parent":

```javascript
import Nav from './components/Nav';
import Body from './components/Body';

class App extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <Body />
            </div>
        )...
```

Nav and Body would be their own components in their own files that are imported:

```javascript
class Nav extends React.Component {
  render() {
    return (
      <div>
        <h1>Nav</h1>
      </div>
    );
  }
}

class Body extends React.Component {
  render() {
    return (
      <div>
        <h1>Body</h1>
      </div>
    );
  }
}
```
