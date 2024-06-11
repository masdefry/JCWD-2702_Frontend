// props: {children: segala sesuatu yang diapit oleh 2 tag}

export default function Button(props){
    return(
        <button className='btn bg-red-500 text-white'>
            {props.children} {props.bebas} {props.pwd}
        </button>
    )
}