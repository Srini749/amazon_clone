import React, {useState, useEffect} from 'react'
import MultilevelSidebar from "react-multilevel-sidebar";
import {useStateValue} from '../StateProvider'

import "react-multilevel-sidebar/src/Sidebar.css";

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

  let options = [
  {
    title: "Trending",
    content: [{ id: 1, name: "Best Sellers", to: "/" },{ id: 1, name: "New Releases", to: "/" },{ id: 1, name: "Movers and Shakers", to: "/" }]
  },
  {
    title: "Digital Content and Devices",
    hideBorder: true,
    content: [
      {
        id: 2,
        name: "Web Development",
        children: [
          {
            title: "JavaScript",
            content: [
              {
                id: 3,
                name: "functions",
                ["Some property i need on clicking this"]: "value"
              }
            ]
          }
        ]
      }
    ]
  }
];
  return (
    <div>
        <MultilevelSidebar
          open={state.sidebar}
          onToggle={handleSidebarToggle}
          options={options}
          header="Home"
        />        
    </div>
  )
}

export default Sidebar



