what is another kind of component?

Class components

Unlike component functions, class components can maintain their own state.

'state' is a a regular object. In the class, we refer to it using 'this' keyword: this.state

The following code will render 'Hello, mel' :

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
