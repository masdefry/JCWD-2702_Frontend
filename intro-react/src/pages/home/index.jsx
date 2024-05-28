import './index.css';

export default function HomePage(){
    return(
        <>
            <div id='program'>
                <div id='card'>
                    <div style={{ width: '100%', height: '276px' }}>
                        <img
                            src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/SandCat12.jpg/1200px-SandCat12.jpg'
                            width={'100%'}
                            height={'100%'}
                            style={{ objectFit: 'cover', borderRadius: '10px' }}
                        />
                    </div>
                    <h1>
                        Visual Design 
                    </h1>
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
                <div>
                    Card-02 
                </div>
                <div>
                    Card-03 
                </div>
                <div>
                    Card-04
                </div>
            </div>
        </>
    )
}