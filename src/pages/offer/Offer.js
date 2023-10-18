import React, { useState } from "react";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import SpecialOffers from "../../components/home/specialOffers/SpecialOffers";

function Offer() {
  const [prevLocation] = useState("");
  return (
    <div className="max-w-container">
      <Breadcrumbs title="Offer" prevLocation={prevLocation} />
      <div className="pb-10">
        <SpecialOffers />
      </div>
    </div>
  );
}

export default Offer;
