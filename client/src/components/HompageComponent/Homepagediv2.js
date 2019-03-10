import React from "react";
import "./style.css";
import Wine1 from "./HomepageImages/wine1.jpg";
import Beer1 from "./HomepageImages/beer1.jpg";
import Spirit1 from "./HomepageImages/Spirit1.jpg";

function Homepagediv2() {

  return (
    <React.Fragment>
      <div className="containerfluid row p-0 m-0 headertitle text-center">
        <div className="container-fluid">
          <div className="titlehome m-auto">
            About Radburn Liquors
          </div>
        </div>
        <div className="description1 pb-4">
          We are a family-owned local business that provides small-town service with an international inventory. If you are looking for something specific, special, or hard-to-find, we are happy to obtain special products for our customers. Just ask! We also have NJ lottery, cigarettes/cigars, and a generous selection of tasty snacks. Best of all, we're open every day! Call us today for custom orders or requests!
        </div>
      </div>

      {/* <div className="row container-fluid">
      </div>

      <div className="containerfluid row p-0 m-0 headertitle text-center">

        <div className="col-4">
          <div className="titlehome">
            Wine
          </div>
          <div className="container">
            <img className="hpd2 img-fluid" src={Wine1} alt="wine image" />
          </div>
        </div>

        <div className="col-4">
          <div className="titlehome">
            Spirits
          </div>
          <div className="container">
            <img className="hpd2 img-fluid" src={Spirit1} alt="wine image" />
          </div>
        </div>

        <div className="col-4">
          <div className="titlehome">
            Beer
          </div>
          <div className="container">
            <img className="hpd2 img-fluid" src={Beer1} alt="wine image" />
          </div>
        </div> */}

        {/* <div className="col-3">
          <div className="titlehome">
            Cigars
         </div>
          <div className="container">
            <img className="hpd2 img-fluid" src={r1} alt="wine image" />
          </div>
        </div> */}

      

    </React.Fragment>
  )
}

export default Homepagediv2;