---
layout: post
published: true
categories: react
title: Updating State
---

Updating State

We can't modify the state directly

This doesn't work:

```javascript
handleIncrement = () => {
  this.state.count++;
};
```

To modify the state, we use a Component method setState().
This will add or overwrite the argument to the state

```javascript
handleIncrement = () => {
  this.setState({ count: this.state.count + 1 });
};
```

What happens when state changes?

1. Call this component method.
2. React will then schedule a call to the render(). But this is an asynch call, so its timing is unpredictable.
3. When render is called, it will feature the new state.
