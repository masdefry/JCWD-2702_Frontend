import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios';

export default function DetailPage(){
    const params = useParams()
    const [product, setProduct] = useState(null)
    const [imageToShow, setImageToShow] = useState('')

    const onFetchProductDetail = async() => {
        try {
            const response = await axios.get(`http://localhost:5000/products/${params.productId}`)
            setProduct(response.data)

            // Step-01 Image Utama disimpan ke useState "imageToShow"
            setImageToShow(response.data.imageUrl[0])
        } catch (error) {   
            console.log(error)
        }
    }

    useEffect(() => {
        onFetchProductDetail()
    }, [])

    if(product === null) return <div>Loading...</div>

    return(
        <>
            <div className='flex gap-10 py-10 px-10'>
                <div className=' flex gap-10'>
                    <div className='flex flex-col gap-5'>
                        {
                            product?.imageUrl?.map((item, index) => {
                                return(
                                    // Step-02 Setiap Kali onClick Akan Mengubah URL Main Image yang Ada di useState "imageToShow"
                                    <div onClick={() => setImageToShow(item)} className='w-[100px] h-[100px] overflow-hidden'>
                                        <img
                                            src={item}
                                            className='object-cover min-w-full min-h-full'
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div
                        className='w-[700px] h-[700px] overflow-hidden'
                    >
                        {/* SRC From useState product */}
                        {/* <img 
                            src={product.imageUrl[0]}
                            className='object-cover min-w-full min-h-full'
                        /> */}

                        {/* SRC From useState imageToShow */}
                        <img 
                            src={imageToShow}
                            className='object-cover min-w-full min-h-full'
                        />
                    </div>
                </div>
                <div className=''>
                    <h1 className='text-3xl font-bold'>
                        {product.name}
                    </h1>
                    <h1 className='text-3xl font-bold'>
                         Rp. {product?.price?.toLocaleString('id-ID')}
                    </h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio provident necessitatibus assumenda rem expedita laboriosam, placeat laborum et reiciendis eius quas. Minus soluta voluptate nihil, ut similique enim. Quaerat, praesentium.
                    </p>
                    <h1 className='text-xl font-bold mt-10'>
                        Pilih Ukuran 
                    </h1>
                    <div className='flex gap-3'>
                        {
                            product?.sizes?.map((item, index) => {
                                return(
                                    <h6 className='border text-xl px-3 py-1'>
                                        {item.size}
                                    </h6>
                                )
                            })
                        }
                    </div>

                    <button className='btn bg-red-500 text-white w-full mt-5 rounded-none'>
                        Add to Cart 
                    </button>
                </div>
            </div>
        </>
    )
}