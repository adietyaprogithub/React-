import { useState } from "react"

export function Form(){

    const [mobile , setMobile] = useState()



    function handlechange (value){


    }
    return (
        <div>
            <input type="text"
        placeholder="mobile"
        onChange={handlechange}
        />

        <button onClick={handlechange}></button>
        </div>

        
    )
}