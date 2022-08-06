import React from "react";
import NavigationContainer from "../navigation/navigation-container";

import CheffSelfie from "../../../static/images/cheff-self.jpg";

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

            <p>
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
            </p>
          </div>
        </div>

        <div className="review-container">
          <div className="review-content">
            <div className="stars-outer">
              <p>★ ★ ★ ★ ★</p>
            </div>
            <h3>
              <em> I just had to Reach Out! </em>
            </h3>
            <p>
              The food was amazing. The cheff Absolutely killed the vegan
              Cauliflower corn fritters! I'll Definitely be contacting you real
              real soon, God Bless!
            </p>
            <p>[Ig instagram name ]</p>
          </div>
          <div className="review-content">
            <div className="stars-outer">
              <p>★ ★ ★ ★ ★</p>
            </div>
            <h3>
              <em>
                Completely proffesional from arrival to set-up to break down
              </em>
            </h3>
            <p>
              Cannnot for a second being to express how much I truly enjoyed the
              experience CheffBlacc provided. Given the freedom to choose
              exactly what he thought worked well together because it was all
              delicious and expertly designed. A three course meal for a party
              of 15, was provided in a timely and efficient manner providing an
              unforgettable experience. The food was prepared perfectly to the
              T. I can't stress how amazing the settting was made because of his
              excellent planning.
              <br />
              Side note - the swordfish is a must have special request!!!
            </p>
            <p>[Ig instagram name ]</p>
          </div>
          <div className="review-content">
            <div className="stars-outer">
              <p>★ ★ ★ ★ ★</p>
            </div>
            <h3>
              <em> I just had to Reach Out! </em>
            </h3>
            <p>
              The food was amazing. The cheff Absolutely killed the vegan
              Cauliflower corn fritters! I'll Definitely be contacting you real
              real soon, God Bless!
            </p>
            <p>[Ig instagram name ]</p>
          </div>
        </div>
      </div>
    </div>
  );
}
