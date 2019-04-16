Props - these are variables that are passed to a component.

Below, when we render the component tag, we assign a variable 'name'.
This gets saved to the 'props' object.
This object can then be refered to in the component.  
The props object allows a component to accept inputs.

Props objects must be in curly brackets, which JSX uses to evaluates JS expressions.

How to pass a props object into a function?
We create a function that takes the 'props' object as an argument

```javascript
var Element = props => {
  return <h1> Damn! {props.name}</h1>;
};

ReactDOM.render(<Element name="Jack" />, document.getElementById("root"));
```

Below, we do the same with a class. This will render: Hello, mel -- yo!

```javascript
class Welcome extends React.Component {
  state = {
    name: "mel"
  };
  render() {
    return (
      <h1>
        Hello, {this.state.name} -- {this.props.saying}
      </h1>
    );
  }
}

ReactDOM.render(<Welcome saying="yo!" />, document.getElementById("root"));
```
