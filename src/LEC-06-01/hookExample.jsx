//usestate
//useeffect
//usereducer
//usecontext
//usememo usereferences
//usecallback

import { useState } from "react";

function StateExample()
{
    const [name] = useState ("RKU");
    return <div>{name}</div>;
}

export default StateExample;