import React, {useState} from 'react'
import './Error.css'

const Error = () => {

    const [loading, setLoading] = useState(true);
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.style.display = 'none';
            setLoading(false);
        }, 0);
    }
    
    return (
        !loading && (
            <>
                <div className="Main-div">
                    <main className='Main'>
                        <h1 className='Main-h1'>4<span className='Main-span'><i class="fas fa-ghost"></i></span>4</h1>
                        <h2 className='Main-h2'>Error: 404 page not found</h2>
                        <p className='Main-p'>Sorry, the page you're looking for cannot be accessed</p>
                        <a href="/" class="myButton">Home</a>
                    </main>
                </div>
            </>
        )
    );
}

export default Error