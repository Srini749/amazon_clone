import React, {useState, useEffect} from 'react'
import MultilevelSidebar from "react-multilevel-sidebar";
import {useStateValue} from '../StateProvider'
import '../css/Sidebar.css'
import "react-multilevel-sidebar/src/Sidebar.css";
import { auth } from "./firebase.js";


function Sidebar(props) {
  const [state, dispatch] = useStateValue();


  function handleSidebarToggle () {
    
    if(state.sidebar ===true){
      dispatch({
            type: "closeSidebar",
        })
    }else{
      dispatch({
            type: "openSidebar",
        })
    }
  };

  function handleClick(itemOptions) {
    if(itemOptions.name == "SignOut"){
      auth.signOut();
    }
  };

  let options = [
  {
    title: "Trending",
    content: [{ id: 1, name: "Best Sellers",  },{ id: 1, name: "New Releases", to: "/" },{ id: 1, name: "Movers and Shakers", to: "/" }]
  },
  {
    title: "Shop by Department",
    content: [
      {
        id: 2,
        name: "Mobiles & Computers",
        children: [
          {
            title: "Mobile Phones, Tablets and More",
            content: [
              {
                id: 3,
                name: "All Mobile Phones",
              },
              {
                id: 4,
                name: "All Mobile Accessories",
              },
              {
                id: 3,
                name: "Cases & Covers",
              },
              {
                id: 3,
                name: "Screen Protectors",
              },
              {
                id: 3,
                name: "Power Banks",
              }
            ]
          },
          {
            title: "Computer & Accessories",
            content: [
              {
                id: 3,
                name: "All Computer & Accessories",
              },
              {
                id: 4,
                name: "Laptops",
              },
              {
                id: 3,
                name: "Devices & Storage",
              },
              {
                id: 3,
                name: "Printers & Ink",
              },
              {
                id: 3,
                name: "Networking Devices",
              }
            ]
          },

        ]
      },
      {
        id: 3,
        name: "TV Appliances, Electronics",
        children: [
          { id: 1, name: "TV, Audio and Cameras", content: [
          {
                id: 3,
                name: "Televisions",
          },
          {
                id: 3,
                name: "Home entertainment Systems",
          },
          {
                id: 3,
                name: "Headphones",
          },
          {
                id: 3,
                name: "Speakers",
          },
          {
                id: 3,
                name: "Cameras",
          },
          {
                id: 3,
                name: "DSLR Cameras",
          },
          {
                id: 3,
                name: "Security Cameras",
          },
        ] }]
      },
      {
        id: 4,
        name: "Men's Fashion",
        children: [
          {
            title: "Men's Clothing",
            content: [
              {
                id: 3,
                name: "Clothing",
              },
              {
                id: 4,
                name: "T-shirts and Polos",
              },
              {
                id: 3,
                name: "Shirts",
              },
              {
                id: 3,
                name: "Jeans",
              },
              {
                id: 3,
                name: "Innerwear",
              }
            ]
          },
          {
            title: "Accessories",
            content: [
              {
                id: 3,
                name: "Watches",
              },
              {
                id: 4,
                name: "Bags & Luggage",
              },
              {
                id: 3,
                name: "Sunglasses",
              },
              {
                id: 3,
                name: "Jewellery",
              },
              {
                id: 3,
                name: "Wallet",
              }
            ]
          },

        ]
      },
      {
        id: 4,
        name: "Women's Fashion",
        children: [
          {
            title: "Women's Clothing",
            content: [
              {
                id: 3,
                name: "Clothing",
              },
              {
                id: 4,
                name: "Western Wear",
              },
              {
                id: 3,
                name: "Ethnic Wear",
              },
              {
                id: 3,
                name: "Lingerie & Nightwear",
              },
              {
                id: 3,
                name: "Top Brands",
              }
            ]
          },
          {
            title: "Accessories",
            content: [
              {
                id: 3,
                name: "Watches",
              },
              {
                id: 4,
                name: "Handbags & Clutches",
              },
              {
                id: 3,
                name: "Sunglasses",
              },
              {
                id: 3,
                name: "Gold and Diamond Jewellery",
              },
              {
                id: 3,
                name: "shoes & Sandals",
              }
            ]
          },

        ]
      },
    ]
  },
  {
    title: "Help & Settings",
    content: [{ id: 1, name: "Your Account", to: "/" },{ id: 1, name: "Customer Service", to: "/" },{ id: 1, name: "SignOut", to: "/" }]
  },
];
  return (
    <div>
        <MultilevelSidebar
          open={state.sidebar}
          onToggle={handleSidebarToggle}
          options={options}
          header="Home"
          onItemClick={handleClick}
        />        
    </div>
  )
}

export default Sidebar



