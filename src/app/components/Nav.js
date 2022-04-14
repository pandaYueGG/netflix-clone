import React, { useState, useEffect }from 'react';
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if(window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar)
        return () => window.removeEventListener("scroll", transitionNavBar)
    }, [])

  return (
    <div className={`nav ${ show && "nav_black"}`}>
        <div className='nav_contents'>
            <img 
                className='nav_logo'
                src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                alt=""
            />
            <img 
                className='nav_avatar'
                src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3D465FCD20497179704614ACF6E14542C4B0C86FBE891A691C66F9DB305C7F2F/scale?width=1200&aspectRatio=1.78&format=jpeg" 
                alt=""
            />
        </div>
    </div>
  )
}

export default Nav
