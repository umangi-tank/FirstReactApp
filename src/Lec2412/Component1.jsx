import * as React from "react";

class Component2 extends React.Component
{
    render(){
        return (
            <div>
                <h1>Hello World!</h1>
                <h2>Component1</h2>
            </div>
        );
    }
}

class Component1 extends React.Component
{
    render(){
        return (
            <div>
                <h1>Hello World!</h1>
                <h2>Component2</h2>
                <Component2 />
            </div>
        );
    }
}

export default Component1;