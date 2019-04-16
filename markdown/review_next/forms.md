---
layout: post
published: true
categories: react
title:  Forms
---

A form requires at least 4 methods. 

First: we set the state to a blank value - why?

```javascript
state = { 
    value: ''
}
```

Second: when we click "submit", this function
1. takes the event object as an argument
2. disrupts the form submission process
3. grabs the value from the passed in event object 
4. sets the state with the new Input

```javascript
someFn = (e) => {
    e.preventDefault();  
    var newInput = e.target.value
    this.setState({
        value: newInput
    })      
    console.log("value ", this.state.value)
}
```

Third: a function to handle onChange.  Here, we change the state in real time. 

```javascript
some = (e) => {
    this.setState({value: e.target.value})
    console.log(this.state.value)
}
```

Fourth:  The form itself, for which: 
1. onSubmit -  will take the full contents and pass it to the someFn method
2. the input will take the value of 'this.state.value' - notice that you have to set a default value for 'value'; otherwise, it will initially evaluate to undefined because this.state.name isn't yet set upon initial rendering.  If it evaluates to undefined/null, then it will believe this to be uncontrolled.**
3. onChange - with each keystroke, some() is fired.  However, we could use onBlur.  
Then, the handler fires after user has finished the field. 

```javascript
render() {
    return(
        <form onSubmit={this.someFn}>
    <label>
        Name:
          <input type="text" value={this.state.value || ' '} 
            onChange={this.some} />
    </label>
    <input type="submit" value="Submit" />
    </form>

    )
}
```

Typically, onChange will wait until the hover leaves the input box, and then it will capture the contents of the input box.  This way, you can validate the contents before the user clicks submit.  Consider this index.html: 

```javascript
<input>
<script>
document.querySelector
('input').onchange = function(event) {
    console.log(event.target.value)
}
</script>

```

** In most cases, we recommend using controlled components to implement forms. In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.