import React from "react";
import "./Pack.css";

export default function Pack({ title, image, price }) {
  return (
    <>
      <div className="mx-auto col-sm-6 col-lg-10 pack text-center shadow-lg">
        <h1 className=" ">{title}</h1>
        <div className=" ">
          <div className="w-100" >
            <img src={image} alt="pack-precies" width="100" height="110" />
          </div> 
          <p>{price}</p>  
          <div className="col-12">
            <button className="btn-duvo btn btn-lg ">Seleccionar</button>
          </div>
          
          <a href="/">Detalles <i class="fas fa-angle-right"></i> </a>
        </div>
      </div>
    </>
  );
}
