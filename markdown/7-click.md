---
layout: post
published: true
categories: react
title: Simple Click
---

We can include an in-line click:

```jsx
  render() {
    return (
      <button
        onClick={() => this.setState({value: 'X'})}
      >
        {this.state.value}
      </button>
    );
  }
```

Or define our click outside of the render (notice that we must return the state to the render function so that it can print it)

```javascript
    click = () => {
        // set state is a function
        this.setState({count: this.state.count+1})
        return this.state.count
    }
    render() {
        return (
        <button onClick={() => this.click()}>
            {this.state.value}
        </button>
        );
  }
```

Whichever way you do it, calling this.setState directly or calling an intermediary click method, the call can't be done directly, but must be placed in the body of a function. Here's an example of a direct call:

```jsx
    render() {
        return (
        <button onClick={this.click()}>
            {this.state.value}
        </button>
        );
  }
```

Here's an example of a "reset" method that brings the counter back to 0:

```javascript
reset = () => {
  this.setState({ count: 0 });
  return this.state.count;
};
```
