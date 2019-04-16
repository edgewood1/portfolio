The render() return() has 2 general kinds of tags

1. element tags

<h1> hello world </h1>

Element tags can carry such as key, className, onclick, You don't need to pass anything into () why?

<h1 key='5' className={ourClass} onClick={()=> {console.log(key)}}></h1>

Or better to xtract it into a sub-component. The problem with using an arrow function in the render call is it will create a new function every time, which ends up causing unneeded re-renders.

<h1 key='5' className={ourClass} onClick={()=> {console.log(key)}}></h1>

\*\* why woudln't you pass a variable into the argument of onClick

handleClick = () => {
console.log(key)
}

<h1 key='5' className={ourClass} onClick={this.handleClick}></h1>

And what can go inbetween these tags?

- regular text
- {variables w/'this' refering to strings, arrays, objects, etc}
- {functions w/this, but they must be called!! }

<h1> hello, {this.name} hope you are {this.math()} </h1>

math() {
return(<p> good </p>)
}

or

math = () => {
return <p>oye</p>;
};

or ... props can be accessed from any function / method in the class...

math = () => {
return <p>{this.props.hello}</p>;
};

2. component tags

<Child />

Component tags have attributes called 'props'. There are several kinds:
a variable referencing a string, arrayliteral, variable referencing a string, and variable refernecing a function

<Child a = '5', b= {this.stuff}, c={this.test}>

Here, we are passing the variable x
which refers to a Parent function called test hence.

test = (y) => {console.log(y)}

Could you do this, unlikely...

<Child x =(arg) => {console.log(arg)}
