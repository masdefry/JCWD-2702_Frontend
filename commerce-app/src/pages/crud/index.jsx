import { useRef } from "react"
import axios from 'axios';

export default function CRUDPage(){
    const inputName = useRef()
    const inputAddress = useRef()

    async function onSubmit(){
        try {
            event.preventDefault()
        
            // Step-01 Ambil Value dari Dalam Kolom Input
            const name = inputName.current.value
            const address = inputAddress.current.value

            // Step-02 Valuenya dikirim ke API untuk Disimpan ke DB
            // axios.post('url', {data yang mau disimpan})
            console.log('Hello')
            await axios.post('http://localhost:5000/studentssss', {name, address})
            alert('SUCCESS')
        } catch (error) {
            console.log('CATCH')
            console.log(error)
        }
    }

    return(
        <>
            <form className='flex justify-center gap-5 py-5'>
                <input ref={inputName} type='text' placeholder='Type your name' className='input border border-black' />
                <input ref={inputAddress} type='text' placeholder='Type your address' className='input border border-black' />
                <button onClick={onSubmit} type='submit' className='btn bg-red-500 text-white'>
                    Submit
                </button>
            </form>
        </>
    )
}