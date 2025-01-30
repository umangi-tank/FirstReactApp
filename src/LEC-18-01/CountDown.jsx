
import * as React from "react";

function fetchUserData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ name: "RKU STUDENT", age: 20 });
        }, 2000); 
    });
}

function App() {
    const [user, setUser] = React.useState("LOADING........");
    const [age, setAge] = React.useState("LOADING........");
    const [countdown, setCountdown] = React.useState(10); 

    React.useEffect(() => {
        fetchUserData().then((data) => {
            setUser(data.name);
            setAge(data.age);
        });
        const timer = setInterval(() => {
            setCountdown((prevCountdown) => {
                if (prevCountdown <= 1) {
                    clearInterval(timer); 
                    return 0;
                }
                return prevCountdown - 1; 
            });
        }, 1000);
        return () => {
            clearInterval(timer); 
        };
    }, []);

    return (
        <div>
            <h1>Hello {user}</h1>
            <p>Your age is {age}</p>
            <p>Countdown: {countdown} seconds</p> {}
        </div>
    );
}
export default App;
