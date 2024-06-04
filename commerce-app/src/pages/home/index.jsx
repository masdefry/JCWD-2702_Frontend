import { useEffect, useState } from "react"
import axios from 'axios';

// Step:
// 01. Render Component Return
// 02. Menjalankan Function yang Ada didalam useEffect
// 03. Terjadi Perubahan Pada useState
// 04. Akan Me-render Halaman Ulang

export default function HomePage(){
    const [products, setProducts] = useState(null)

    const onFetch = async() => {
        try {
            const response = await axios.get('http://localhost:5000/products')
            setProducts(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        onFetch()
    }, [])

    if(products === null) return <div>Loading...</div>

    return(
        <>
            <section name='jumbotron'>
                <img src='https://www.bata.com/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-id-Library/default/dwe1c4a872/utility/Apr_150_2000x800_INDO.png?sw=1410&q=100' />
            </section>
            <section name='card-products' className='p-10'>
                <h1 className='text-5xl font-bold'>
                    Koleksi Terbaru 
                </h1>
                <div className='py-10 grid grid-cols-3 gap-10'>
                    {
                        products.map((item, index) => {
                            return(
                                <div>
                                    <div>
                                        <img src={item.imageUrl[0]} />
                                    </div>
                                    <h1 className='text-xl font-bold'>
                                        {item.name}
                                    </h1>
                                    <h1 className='text-xl'>
                                        Rp. {item.price.toLocaleString('id-ID')}
                                    </h1>
                                </div>
                                
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}