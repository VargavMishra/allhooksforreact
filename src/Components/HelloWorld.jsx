import { useState } from 'react';
export default function HelloWorld() {
    const [name, setName] = useState("World")
    const [age,setAge] = useState("22")
    const [sex,setSex] = useState("Female")

    return (
        <div className="box border-2 border-black flex items-center justify-center py-2 gap-y-2 flex-col">
            <div style={{ textAlign: 'center', padding: '5px' }}>

                <input className='border-2 bg-amber-200 text-center w-[500px]' id='name' placeholder='type your name here' name="name" value={name} onChange={(e) => setName(e.target.value)} />

                <input className='border-2 bg-amber-200 text-center w-[500px]'
                id='age' placeholder='type your age here' age="age" value={age}
                onChange={(a) => setAge(a.target.value)}/> 

                <input className='border-2 bg-amber-200 text-center w-[500px]'
                id='sex' placeholder='enter your gender' sex='sex' value={sex}
                onChange={(sex) => setSex(sex.target.value)}/>
            </div>
            <div className='border-2 bg-cyan-200 w-[500px] text-center'>Hello {name} and your age is {age} and my gender is {sex}</div>
        </div>

    )
}