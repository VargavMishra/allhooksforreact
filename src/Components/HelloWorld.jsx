import { useState } from 'react';
export default function HelloWorld() {
    const [name, setName] = useState("Vargav")
    const [age,setAge] = useState("22")
    const [sex,setSex] = useState("Male")

    return (

        <div className="box border-2 border-black flex items-center justify-center py-2 gap-y-2 flex-col">
            <div className='text-center px-2 py-4 flex flex-col gap-y-2'>

                <input className='border-2 bg-amber-200 text-center w-125' id='name' placeholder='type your name here' name="name" value={name} onChange={(e) => setName(e.target.value)} />

                <input className='border-2 bg-amber-200 text-center w-125'
                id='age' placeholder='type your age here' age="age" value={age}
                onChange={(a) => setAge(a.target.value)}/> 

                <input className='border-2 bg-amber-200 text-center w-125'
                id='sex' placeholder='enter your gender' sex='sex' value={sex}
                onChange={(sex) => setSex(sex.target.value)}/>
            </div>
            <div className='border-2 bg-cyan-200 w-125 text-center'>Hello ( {name} ) your age is ( {age} ) your gender is ( {sex} )</div>
        </div>

    )
}