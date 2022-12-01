import React from "react";
import img1 from "../../assets/img1.svg";
import img2 from "../../assets/img2.svg";
import img3 from "../../assets/img3.svg"

  const HowitWorks = () =>{
    return (
    <section className="container how-it-works margin-top-md">       
          <h2 className="text-left section-title font-weight-bold">How It Works</h2>             
        <div className="row py-4">
         <div className="col-md-4 align-self-end mt-md-4 mb-3">
        <div className="border-radius-sm slim-border-2 shadow-lg  mb-sm-3 py-4 px-4">
          <h2 className="color1">Sign Up</h2>
          <div className="text-center">             
          <img src= {img1} alt="" /> 
          </div>
             <p className="text-center my-3 color-dark p-5 mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper magna arcu, </p>
             </div>
             </div>
        <div className="col-md-4">
          <div className="align-items-center border-radius-sm shadow-lg py-4 px-4  mb-3 color2 bg-color1" >
    <h2>Select Plan</h2>
    <div className="text-center">             
          <img src= {img2} alt="" /> 
          </div>     <div className="benefit">
    <p className= "text-center  p-5 pl-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam semper magna arcu, </p>
    </div>
    </div>
    </div>
    <div className="col-md-4  align-self-end">
          <div className="border-radius-sm shadow-lg py-4 px-4 slim-border-2">
                <h2 className="color1">Start Saving</h2>
    <div className="text-center"><img src= {img3} alt="" /></div>
     <p className="text-center p-5 pl-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam semper magna arcu,</p>
     </div>
     </div>
        </div>
     
      </section>

    );
};
export default HowitWorks;
