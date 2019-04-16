---
layout: post
published: true
categories: react
title: Passing from Child to Parent
---

If we want to change the state of the Parent via the Child component,
we create a "parent interface" method in the Parent component,
which we pass to the Child, where it is accessed as 'props'.

Below are several examples.

**EXAMPLE ONE**

Here is our 'interface':

```javascript
setParent = newCount => {
  this.setState({ clicks: newCount * 2 });
};
```

In the same Parent component, we pass this Interface method
to the Child via its Component tag as a 'callback':

```javascript
    render() {
        return(
            <div>
                <Child setParent={this.setParent} />
                <p>In parent, multiplied by 2:
                    {this.state.clicks}</p>
            </div>
        )
    }
```

Then we use the `setParent` method in the Child:  
Notice that second function is set to fire ONLY after the first is finished;
otherwise, the callback might fire before the state has been reset.

```javascript
handleClick = () => {
  this.setState(
    {
      click: this.state.click + 1
    },
    () => {
      this.props.setParent(this.state.click);
    }
  );
};
```

**EXAMPLE TWO**

Our interface in the Parent class:

```jsx
class Parent extends React.Component {
  setParent = props1 => {
    this.props.setGlobal(props1);
  };
```

Still in the Parent class, we pass the interface to the Child.  
Notice, the right side of the prop (setParent) refers to the Parent method
the left side (setP) will be used in the Child:

```jsx
  renderSquare(i) {
    return <Child setP={this.setParent} value={i} />;
  }
```

Where it is used to return the key on click:

```jsx
    changeSquare() {
    this.props.setP(this.props.value);
  }

  render() {
    return (
      <Inner
        key={this.props.value}
        onClick={() => this.changeSquare()}>
      </Inner>
      ...
```

**EXAMPLE THREE**

Our interface in the Parent:

```jsx
setGlobal = props1 => {
  this.state.keysCalled.includes(props1)
    ? this.gameOver(props1)
    : this.gameContinue(props1);
};
```

Still in the Parent, we pass to the Child, along with various other state attributes:

```jsx
 render() {
    return (
      <OuterBody>
        <Header
          score={this.state.value}
          msg={this.state.msg}
          hiScore={this.state.topScore}
        />
        <Body setGlobal={this.setGlobal} />
        <Footer footMsg={this.state.footMsg} />
      </OuterBody>
```

We use in the Child (in this case, as part of another interface):

```jsx
class Child extends React.Component {
  setParent = props1 => {
    this.props.setGlobal(props1);
  };
```
