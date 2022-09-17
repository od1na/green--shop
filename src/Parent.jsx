import React, { Component } from "react";
import Child from "./Child"
import image1 from "./image 1.png"
import image2 from "./image 2.png"
import image3 from "./image 3.png"
import "./parent.css"



export class Parent extends Component{
    render() {
        return (
            <div className="div">
                <div className="birinchidiv">
                <Child
                    name="Barberton Daisy"
                    code="SKU: 1995687687656"
                    price={ 119}
                    images={image1}
                    
                />
                <Child
                    name="Blusin Bromelad"
                    code="SKU: 199534567676"
                    price={179}
                    images={image2}

                />
                <Child
                    name="Aluminum Plant"
                    code="SKU: 1995876756675"
                    price={139}
                    images={image3}

                    />
                    
                </div>
                <div className="ikkinchidiv">
                    <h2 className="h2">Card Totals</h2>
                    <hr />
                    <h4>Cupon Apply</h4>
                    <div className="inputlar">
                        <input type="text" placeholder="Enter cupon code here" className="inputs" />
                     <button className="button">Apply </button></div>
                    </div>
               
            </div>
        );
    }
        
}
    export default Parent
