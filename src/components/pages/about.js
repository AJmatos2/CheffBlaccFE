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
              selection. nostrum at alias. Assumenda architecto ducimus odit a
              nam distinctio, veritatis ab deserunt nesciunt.
            </p>

            {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              beatae nisi voluptatem, delectus fuga obcaecati doloribus dolore
              sequi maxime earum ea amet sit aspernatur quae omnis numquam
              voluptas nemo praesentium accusantium modi impedit odio? Minus
              quam hic at beatae consectetur ut rerum distinctio quaerat dolore
              suscipit. Dolor sapiente nostrum enim, explicabo quasi
              voluptatibus. Officiis non, obcaecati minus ipsa sequi assumenda
              harum, nobis earum culpa illum dolore officia consequatur. Aperiam
              quis consectetur delectus dolore sed praesentium laboriosam, quasi
              in odit magni officia.
            </p> */}
          </div>
        </div>

        <div>
          <Reviews />
        </div>
      </div>
    </div>
  );
}
