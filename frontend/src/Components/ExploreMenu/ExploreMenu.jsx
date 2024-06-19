import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({category,setcategory}) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        "Feast on flavors, feast on life. With a click, unlock a world of taste.
        From classics to creative cuisine, let every bite tell a story. Order
        now, and let the adventure begin at your table!"
      </p>
      <div className="explore-menu-list">
        {/* this is a very important concept understand with notes  */}

        {menu_list.map((item, index) => {
          return (
            <div onClick={()=>setcategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                
                {/* ye bhi dekhna hai new tareeka */}

              <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
