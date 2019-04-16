Context

**LEVEL ONE**

create a file and pass an empty object to createContext():

```jsx
import React from "react";

const FamilyContext = React.createContext({});
```

To this file, we add 2 components and export them.

The first will be our "provider" component, which we'll use in our top-level 'grandparent' component.

The second will be our "consumer" component, which we'll use in our bottom-level 'grandchild' component

```jsx
export const FamilyProvider = FamilyContext.Provider;
export const FamilyConsumer = FamilyContext.Consumer;
```

**LEVEL TWO: GRANDPARENT**

Now we make our 'top-level' 'grandParent' component. In the GrandParent, import our both the provider and consumer components and define state:

```jsx
import React from "react";
import { FamilyProvider, FamilyConsumer } from "./FamilyContext";

export class Grandmother extends React.Component {
  state = {
    lastName: "Sanchez"
  };
```

Now, since we want the grandChild to have access to this state, we first give it to the grandChild's Parent ('Mother').

We do this by wrapping the Prop and the Mother within the Provider component. The Provider contains the wrap and the parent interface.

```jsx
  render() {
    return (
      <FamilyProvider value={this.state.lastName}>
        <Mother />
      </FamilyProvider>
    );
  }
}
```

**LEVEL THREE**

In Mother, we invoke Child:

```jsx
const Mother = () => {
  return <Child />;
};
```

**LEVEL FOUR**

And child "consumes" what the grandParent "provides"

To do this, the Child returns the Consumer component that wraps the following function:

```jsx
{
  context => <p>{context}</p>;
}
```

'context' contains the grand parent's 'state' - the lastName property

```jsx
const Child = () => {
  return <FamilyConsumer>{context => <p>{context}</p>}</FamilyConsumer>;
};
```

This is the render prop" pattern.
Render props are "built" in order to use Context.

They expose the context object to its children - in this case, a <p> tag.

**notes**

Trying this with classes results in:

Warning: A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.
