import { useState } from "react";
function StateExample2()
{
    const [name, setName] = useState("RKU-RAGA SWARA");

    return(
    <div>
        <h1>Hello {name}</h1>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </div>
    
    )
}

export default StateExample2;