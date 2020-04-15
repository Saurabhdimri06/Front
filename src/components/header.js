import React from 'react'
import restaurant from "../restaurant_image.jpg"
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';

class Header extends React.Component{
    render(){
        return(
            <div>
                <div className='header'>
                    <img src={restaurant} className="header_img" alt="Restaurant Photo" />
                </div>
                <div className="header_items">
                    <ul>
                        <li><a href="#"><HomeIcon />Menu</a></li>
                        <li><a href="#"><InfoIcon />Orders</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header