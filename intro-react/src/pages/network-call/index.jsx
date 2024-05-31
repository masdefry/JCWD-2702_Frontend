import axios from 'axios';
import { useEffect, useState } from 'react';

/*
    NETWORK CALL: HTTP REQUEST

    HTTP REQUEST METHOD: 
    - GET: Untuk Mengambil Data
    - POST: Untuk Menyimpan Data
    - PUT/PATCH: Untuk Mengupdate Data
    - DELETE: UNtuk Menghapus Data
*/

export default function NetworkCallPage(){
    const [data, setData] = useState([])

    // Step-01 Bikin Function untuk Fetch Data
    const onFetchData = async() => {
       try {
            const res = await axios.get('http://localhost:5000/users')
            console.log(res)
            // Step-02 Hasil Fetch Data nya disimpan ke useState
            setData(res.data)
       } catch (error) {
        console.log('CATCH')
            console.log(error)
       }
    }

    // Step-03 Function Fetch Data dipanggil di ComponentDidMount
    useEffect(() => {
        console.log('FETCHING DATA')
        onFetchData()
    }, [])

    // Conditional Rendering, Ketika Datanya Masih Kosong
    if(data.length === 0) return <div>Loading...</div>

    return(
        <>
            {/* Step-04 Map Data yang disimpan di useState untuk Menampilkan di Halaman Website */}
            {
                data.map((item, index) => {
                    return(
                        <div>
                            <div>
                            {item.username}
                            </div>
                            <div>
                            {item.email}
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}