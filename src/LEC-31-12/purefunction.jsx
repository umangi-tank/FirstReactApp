import * as React  from "react";

/*export default ({abc, xyz}) =>
    <button disabled={abc}>
        {xyz}
    </button>;
    */

    const MyButton = ({ abc ,  def}) =>
        <button disabled={abc}>
            {def}
        </button>

MyButton.defulatpropes = {
    abc: false,
    def: "Click mee",
}

export default MyButton;