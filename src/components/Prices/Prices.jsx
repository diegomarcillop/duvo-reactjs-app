import React from "react";
import Pack from "./Pack";

export default function Prices() {
  return (
    <>
      <div className="container prices-container" style={{
        height:"70vh"
      }}>
        <h1 className="text-center">Nuestros planes</h1>
        <div className="col-10  mx-auto"  >
          <div className="row">
           <div className="col">
           <Pack title="Free"  image="/img/free.png" price="Free"/>
           </div>
            <div className="col">
            <Pack title="Premium" image="/img/premium.png" price="$250.000"/>
            </div>
            <div className="col">
            <Pack title="Enterprise" image="/img/enterprice.png" price="$500.000"/>
            </div>

          </div>
        </div>
      </div>
     </>
  );
}
