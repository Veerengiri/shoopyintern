import React, { useState } from 'react'
import '../css/Navbar.css';
import { ReactComponent as Paypal } from '../images/paypal.svg'
function Navbar() {
  const [show,setShow]=useState(false);
  return (
    <>
      <div className='nav2'>
        <img onClick={()=>{document.getElementsByTagName("nav")[0].style.display='flex'}} className='menuimg' src="https://cdn-icons-png.flaticon.com/128/4204/4204600.png" alt="Menu" />
        <div className='paypalLogo list1'><Paypal/></div>
        <img className='menuimg' src="https://cdn-icons-png.flaticon.com/128/1828/1828479.png" alt="Logout" />
      </div>
       { <nav>
          {window.innerWidth<=849 && <span onClick={()=>{document.getElementsByTagName("nav")[0].style.display='none'}} style={{position:'absolute',left:'70vw',scale:'1.2'}}>X</span>}
          <div className='OpList'>
              <div className='paypalLogo list1'><Paypal/></div>
              <span>Home</span>
              <span>Finance</span>
              <span>Send and Request</span>
              <span>Deals</span>
              <span>Wallet</span>
              <span className='navhover'>Activity</span>
              <span>Help</span>
          </div>
          {window.innerWidth<=700 ? <div className='OpList'>
            <span >Notifiaction</span>
            <span >Setings</span>
            <span >LOG OUT</span>
          </div> : 
          <div className='OpList ' style={{gap:'15px'}}>
              <img src="https://cdn-icons-png.flaticon.com/128/1827/1827349.png" className='belLogo' alt="notification" />
              <img src="https://cdn-icons-png.flaticon.com/128/3019/3019014.png" className='belLogo' alt="settings" />
              <span style={{fontSize:'small'}}>LOG OUT</span>
          </div>}
          
      </nav>}
    </>
    
  )
}

export default Navbar