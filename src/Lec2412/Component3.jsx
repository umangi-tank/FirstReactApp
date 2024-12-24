import * as React from "react";
class InputTest extends React.Component {

    render() {
        return (
            <div>
                <input type="text" placeholder="your name"/>
                <br/>

                <input type="checkbox"/>
                <label>checkbox</label>
                <br/>

                <input type="radio button"/>
                <label>radio button</label>
                <br/>

                <input type="color pellete"/>
                <label>color pellete</label>
                <br/>

                <input type="button"/>
                <label>button</label>
                <br/>

            </div>
        );
}

}

export default InputTest;