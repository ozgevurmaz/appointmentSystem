import React from "react";
import { Tile } from "./Tile";

export const TileList = (props) => {
if(props.type==="contact"){  
  return (
    <div className="tile-list">
          {props.data.map((item, index) => (
              <Tile key={index} name={item.name} description={[item.phone,item.email]} />   
          ))}   
    </div>
  )}else{
    return (
      <div className="tile-list">
          {props.data.map((item, index) => (
              <Tile key={index} name={item.name} description={[item.date,item.time]} />   
          ))}   
    </div>
    )
  }
};
