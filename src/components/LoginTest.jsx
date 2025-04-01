import React, { useState } from 'react'

export default function LoginTest() {

    const userData = [{

    }]
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const proceedLogin = (event) => {
        event.preventDefault()
        userData.push({ "name": name, "email": email })
        alert('Entered name is ' + '' + userData[1].name + ' and email is ' + '' + userData[1].email)

    }


    return (

        <div className="flex items-center flex-col mt-10">
            <div className='text-2xl'>LoginTest</div>
            <p>Enter details to proceed to dashboard</p>
            <form className='flex flex-col w-full gap-2 px-6 ' onSubmit={proceedLogin}>
                <input type="text" className='border rounded-md w-full pl-2 py-2' placeholder='Enter Name' value={name} onChange={(event) => setName(event.target.value)} />
                <input type="text" className='border rounded-md w-full pl-2 py-2' placeholder='Enter email' value={email} onChange={(event) => setEmail(event.target.value)} />
                <input type="submit" value="Proceed to login" className='cursor-pointer bg-black text-white rounded-md py-2' />
            </form>
        </div>
    )
}
