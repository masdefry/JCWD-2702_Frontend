import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { BsBoxSeam } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";

export default function Navbar(){
    return(
        <section name='navbar'>
        <nav name='top' className='flex justify-between py-5 px-10'>
          <div className='flex gap-10'>
            <div className='flex items-center gap-1'>
              <IoMdCheckmarkCircleOutline className='text-green-500' />
              Gratis Ongkir 
            </div>
            <div className='flex items-center gap-1'>
              <IoMdCheckmarkCircleOutline className='text-green-500' />
              Pengiriman Seluruh Indonesia 
            </div>
            <div className='flex items-center gap-1'>
              <IoMdCheckmarkCircleOutline className='text-green-500' />
              Keuntungan menjadi Bata Club
            </div>
          </div>
          <div className='flex gap-10'>
            <div className='flex gap-1 items-center'>
              <IoLocationOutline />
              Toko 
            </div>
            <div>
              Kontak 
            </div>
            <div>
              Bata Club 
            </div>
            <div>
              Bahasa Indonesia
            </div>
          </div>
        </nav>
        <nav name='bottom' className='py-8 px-10 border'>
          <div className='grid grid-cols-3'> 
            <div>
              
            </div>
            <div className='flex justify-center'>
              <img 
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Bata.svg/2560px-Bata.svg.png'
                width={200}
                height={100}
              />
            </div>
            <div className='flex justify-end gap-5'>
              <div className='flex flex-col items-center'>
                <BsBoxSeam className='text-xl' />
                Pesanan Saya
              </div>
              <div className='flex flex-col items-center'>
                <AiOutlineUser className='text-xl' />
                Masuk
              </div>
            </div>
          </div>
          <div className='flex justify-center gap-10 mt-5'>
            <div>
              Serba Hemat 150
            </div>
            <div>
              Wanita 
            </div>
            <div>
              Pria 
            </div>
            <div>
              Anak-Anak
            </div>
          </div>
        </nav>
      </section>
    )
}