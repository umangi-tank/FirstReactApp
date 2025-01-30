import * as React from "react";

function fetchUserData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({name: "RKU STUDENT", age: 20});
        }, 2000);
    });
}

function App() {
    const [user, setUser] = React.useState("LOADING........");
    const [age,setAge] = React.useState("LOADING........");
    
    React.useEffect(() => {
        fetchUserData()
       .then((data) => {
        setUser(data.name);
        setAge(data.age);
       });
       return () => {
            // cleanup
       };
        }, []);
        
    return (
        <div>
            <h1>Hello {user}</h1>
            <p>Your age is {age}</p>
        </div>
    );
}

export default App;