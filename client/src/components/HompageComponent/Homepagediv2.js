import React from "react";
import "./style.css";
import Wine1 from "./HomepageImages/wine1.jpg";
import Beer1 from "./HomepageImages/beer1.jpg";
import Spirit1 from "./HomepageImages/Spirit1.jpg";

function Homepagediv2() {

  return (
    <React.Fragment>
      <div className="containerfluid row p-0 m-0 headertitle text-center">
        <div className="titlehome m-auto">
          About Radburn Liquors
      </div>
        <div className="description1 pb-4">
          Radburn Liquors is your one-stop shop in Fair Lawn, NJ for quality beer, wine, liquors, NJ lottery, cigars and cigarettes and a generous selection of tasty snacks. We are a locally- and family-owned company that provides small-town service with an international inventory. Looking for something specific or special, even a hard-to-find product?  For your convenience, we can obtain specialize products for our customers.  Just ask! Best of all, we're available every day.  Visit us Monday-Sunday, or call today for custom orders or requests!
        </div>

      </div>

    <div className="row container-fluid">
    </div>
      <div className="containerfluid row p-0 m-0 headertitle text-center">

        <div className="col-4">
          <div className="titlehome">
            {/* Wine */}
          </div>
          <div className="container">
            <img className="hpd2 img-fluid" src={Wine1} alt="wine image" />
          </div>
        </div>

        <div className="col-4">
          <div className="titlehome">
            {/* Spirits */}
          </div>
          <div className="container">
            <img className="hpd2 img-fluid" src={Spirit1} alt="wine image" />
          </div>
        </div>

        <div className="col-4">
          <div className="titlehome">
            {/* Beer */}
          </div>
          <div className="container">
            <img className="hpd2 img-fluid" src={Beer1} alt="wine image" />
          </div>
        </div>

        {/* <div className="col-3">
          <div className="titlehome">
            Cigars
         </div>
          <div className="container">
            <img className="hpd2 img-fluid" src={r1} alt="wine image" />
          </div>
        </div> */}

      </div>

    </React.Fragment>
  )
}

export default Homepagediv2;