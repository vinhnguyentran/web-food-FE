import React from 'react'
import './ServiceMenu.css'
import { menu_list } from '../../assets/assets'
const ServiceMenu = () => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1></h1>
      {/* <p className='explore-menu-text'>The Explore Menu is show all menu of us, about image, description, price & some detail infomation</p> */}
      <div className='explore-menu-list'>
          {menu_list.map((item, index) => {
            return(
              <div onClick={() => setCategory(prev=>prev===item.sub_name?'All':item.sub_name)} key={index} className='explore-menu-list-item'>
                  <img className={category===item.sub_name?'active':''} src={item.menu_image} alt="" />
                  <p>{item.menu_name}</p>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default ServiceMenu
