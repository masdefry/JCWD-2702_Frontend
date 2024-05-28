export default function Card(props){
    return(
        <div id='card'>
            <div style={{ width: '100%', height: '200px' }}>
                <img
                    src={props.imageUrl}
                    width={'100%'}
                    height={'100%'}
                    style={{ objectFit: 'cover', borderRadius: '10px' }}
                />
            </div>
            <h3 style={{ marginTop: '10px', fontWeight: 'bold' }}>
                {props.programName}
            </h3>
            <div style={{ display: 'flex', gap: 10 }}>
                <div style={{ border: '1px solid black', borderRadius: 50, padding: 5 }}>
                    On Campus 
                </div>
                <div style={{ border: '1px solid black', borderRadius: 50, padding: 5 }}>
                    Online
                </div>
                <div style={{ border: '1px solid black', borderRadius: 50, padding: 5 }}>
                    Company
                </div>
            </div>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore rem ullam alias itaque nihil provident dolores, accusantium, quibusdam, deserunt autem laboriosam modi assumenda aliquam ad quasi placeat. Nesciunt, omnis nostrum?
            </p>
            <button style={{ backgroundColor: 'black', color: 'white', border: 'none', width: '100%' }}>
                Hubungi Kami 
            </button>
        </div>
    )
}