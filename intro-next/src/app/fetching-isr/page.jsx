const onFetchData = async() => {
    try {
        const res = await fetch('http://localhost:5000/posts', {
            next: {
                revalidate: 20 // Satuan Second
            }
        })
 
        const resJSON = await res.json()
        return resJSON // Data yang Berisikan Array of Object
    } catch (error) {
        console.log('ERROR')
        console.log(error)
    }
}

export default async function FetchingPage(){

    const posts = await onFetchData()
    
    return(
        <>
            {
                posts.map((item, index) => {
                    return(
                        <div>
                            {item.title}
                        </div>
                    )
                })
            }
        </>
    )
}