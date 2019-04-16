---
layout: post
published: true
categories: react
title: Embedding Components
---

Here, we create a Child component with a button. Each button maintains its own state.

We decide to render 4 such components in the Parent:

```javascript
import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  render() {
    return (
      <div>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    );
  }
}
```

An alternative to writing our 4 Child methods would be to:

- use the map to loop through this.state.counters
- for each counter, render the Counter tag
- for each counter, assign props based on this.state.counter
- props included below: key (unique id) & value variables.

```javascript
  render() {
    return (
      <div>
        {this.state.counters.map(counter =>
            <Counter key={counter.id}
              value={counter.value}/>)}
      </div>
    )
  }
```
