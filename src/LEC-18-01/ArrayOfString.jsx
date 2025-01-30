import * as React from "react";

function convertArrayToList(stringsArray) {
    const validItems = Array.isArray(stringsArray)
        ? stringsArray.filter((item) => typeof item === "string")
        : [];

    return (
        <ul>
            {validItems.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}
function App() {
    const myStrings = ["UMANGI TANK", "DEVANSHI VWKARIYA", "PRINCY PAMBHAR", "LEKHNA PANSURIYA"]; 

    return (
        <div>
            <h1>arrray of string</h1>
            {convertArrayToList(myStrings)} {}
        </div>
    );
}

export default App;
