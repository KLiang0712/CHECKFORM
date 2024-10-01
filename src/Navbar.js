import React from "react";
import icon1 from "./project2-1.svg";
import logo from "./logo.svg";

const Navbar = () => 
{
  return (
        <div className="ui fixed menu">
            <div className="ui container center">
                <h1 id="ptodo">TO-DO LIST</h1>
                <img class="icon2-1" alt="icon2-1" src={icon1} />
                <img class="logo" alt="logo" src={logo} />
            </div>
        </div>
    );
}; 

export default Navbar; 