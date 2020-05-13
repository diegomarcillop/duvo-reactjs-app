import React from "react";
import "./ContactForm.css";

export default function Contact() {
  return (
    <>
    <div className="content-contact">
    <div className="card col-sm-6 mx-auto contact-card shadow-sm">
          <h1 className="text-center">Contactanos</h1>
        <div className="row m-4">
          <div className="col-sm-4">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                aria-describedby="emailHelp"
                placeholder="Nombre"
              />
            </div>
          </div>
          <div className="col-sm-8">
            <div class="form-group">
              <input type="email" class="form-control" placeholder="Email" />
            </div>
          </div>
          
        <div className="col-sm-12">
          <div class="form-group">
             <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="8"
              placeholder="Mensaje"
            ></textarea>
          </div>
        </div>
        <div className="action mx-auto col-sm-4" style={{
            marginRight: "10px"
        }}>
            
        <button className="btn button-duvo-contact btn-block" type="button">Enviar</button>
        </div>
        </div>  
      </div>
    </div>
    </>
  );
}
