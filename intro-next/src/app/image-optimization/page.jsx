import Image from "next/image";

export default function ImageOptimizationPage(){
    return(
        <div>
            <Image 
                src={'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg'}
                width={1000}
                height={1000}
                alt='Gambar Kucing'
            />
        </div>
    )
}