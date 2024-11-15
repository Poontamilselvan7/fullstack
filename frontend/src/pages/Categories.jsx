import React from "react";
import { useNavigate } from "react-router-dom";
import bc from "./images/categories.jpg";
import bo from "./images/bo.jpg";

export default function Categories() {
  const navigate = useNavigate();

  // Function to handle category click and navigate with category as part of the URL
  const CategoryClick = (category) => {
    
  // Navigating to /book/create/[category] where category is Historical or Fantasy
  if(category==='Historical'){  
  navigate(`/show`);
  }
  else{
    navigate(`/sho`);
  }
};

  return (
    <center>
      <div className="a">
        <h1 className="b">BOOK LIBRARY</h1>
        
        <img src={bo}  className="oi"/>
        <div className="ui">
<p className="a7">Select Your Category</p>
        </div>     
          <button className="n" onClick={() => CategoryClick("Historical")}>
            Historical
          </button>
          <button className="o" onClick={() => CategoryClick("Fantasy")}>
            Fictional
          </button>
          </div>
    </center>
  );
}
