import React from "react";
import NavigationContainer from "../navigation/navigation-container";

import CheffSelfie from "../../../static/images/cheff-self.jpg";
import Reviews from "../reviews/review";

export default function about() {
  return (
    <div>
      <NavigationContainer />
      <div className="about-page">
        <div className="page-container">
          <div className="content-wrapper">
            <img src={CheffSelfie} alt="Featured chef" className="chef" />

            <p>
              I am Haitian American from Lawrence, MA with a Bachelor of Science
              degree in psychology. I chose to leave the field in 2020 and
              decided to pursue my true passion in the culinary arts. With
              knowing the risk, in early 2021 I decided to go into business for
              myself and created “Blacc’s Kitchen LLC” of which I am the
              owner/head chef. My God given gift to this world is bringing
              people together with delicious meals from a culture they might not
              otherwise be familiar with. My business specializes in private
              dinners and event catering with a Caribbean based cuisine
              selection.
            </p>
          </div>
        </div>

        <div>
          <Reviews />
        </div>
      </div>
    </div>
  );
}
