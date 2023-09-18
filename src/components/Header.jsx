import React from 'react';
import './Header.css';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';



const Header = () => {
  return (
    <div className='maindiv' >
        <div className='header__left'>
            <Avatar className='avatar' sx={{ height: '60px', width: '60px' }}  src='./image/char3.png'  alt="Remy Sharp" />
            <h1 className='name' >
              Charlene
            </h1>
        </div>
        <div className='buttons' >
          <div className="buttons__box">
            <Button variant="contained" >About </Button>
            <Button variant="contained">Work</Button>
            <Button variant="contained">Contact</Button>
          </div>
         
        </div>
        
      </div>
  )
}

export default Header