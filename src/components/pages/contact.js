import React, { useEffect, useState, useRef } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import emailjs from "@emailjs/browser";

import { TextArea } from "@thumbtack/thumbprint-react";
import { useForm } from "react-hook-form";

import { FaPhoneVolume, FaMapMarkerAlt, FaRegClock } from "react-icons/fa";
import axios from "axios";

import NavigationContainer from "../navigation/navigation-container";
import Logo from "../../../static/images/cheff-black-Logo.jpg";

const animatedComponents = makeAnimated();

const styles = {
  selsect: {
    display: "flex",
    justifyItems: "center",
    alignItems: "center",
    fontSize: 14,
  },
};

export default function contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y58soxa",
        "template_iar90qf",
        form.current,
        "ijh2wi6etzDTyh9Ls"
      )
      .then(
        (result) => {
          // e.target.reset();
          console.log("message sent : " + result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const [selectedapplist, setselectedapplist] = useState([]);
  const [entrelist, setentrelist] = useState([]);
  const [deslist, setdeslist] = useState([]);
  const [sidelist, setsidelist] = useState([]);

  const [appetizerItems, setAppetizerItems] = useState([]);
  const [entreeItems, setEntreeItems] = useState([]);
  const [sideItems, setSideItems] = useState([]);
  const [dessertItems, setDessertItems] = useState([]);

  const { register, handleSubmit, watch, errors } = useForm();
  const [textF, setTextF] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectChange = (value, course) => {
    if (course == appertizer) {
      setselectedapplist(value);
    } else if (course == entree) {
      setentrelist(value);
    } else if (course == side) {
      setsidelist(value);
    } else if (course == dessert) {
      setdeslist(value);
    } else console.log("error splitting list due to : ", error);
  };

  const onSubmit = (data) => console.log(data);

  const getAllMenuItems = () => {
    axios
      .get("https://chefblaccbe.herokuapp.com/get")
      .then((response) => {
        response.data.forEach((item) => {
          const tempItem = {
            value: item.id,
            label: item.name,
          };

          if (item.course == "Appetizer") {
            setAppetizerItems((appetizerItems) => [
              ...appetizerItems,
              tempItem,
            ]);
          } else if (item.course == "Dessert") {
            setDessertItems((dessertItems) => [...dessertItems, tempItem]);
          } else if (item.course == "Entree") {
            setEntreeItems((entreeItems) => [...entreeItems, tempItem]);
          } else if (item.course == "Sides") {
            setSideItems((sideItems) => [...sideItems, tempItem]);
          } else {
            console.error("failed to add item");
          }
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getAllMenuItems();
  }, []);

  return (
    <div>
      <NavigationContainer />
      <div className="contact-container">
        <div className="grid-wrapper">
          <div className="sidebar-wrapper">
            <div className="logo">
              <img src={Logo} alt="Logo" />
            </div>
            <div className="company-details-wrapper">
              <FaMapMarkerAlt className="icon" />
              <div>Lawrence, MA, 12345</div>
            </div>
            <div className="company-details-wrapper">
              <FaPhoneVolume className="icon" />
              <div>(617) 580-1374</div>
            </div>
            <div className="company-details-wrapper">
              <FaRegClock className="icon" />

              <div>10am - 6pm</div>
            </div>
          </div>

          <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <input type="text" name="client_name" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="client_email"
                placeholder="Your Email"
              />
            </div>

            <em>
              In the following space please make sure to note the size of your
              party , any allergies or special requests, and your selection.
              Choose two from each of our 4 courses and our team will get back
              to you with the estimate :
            </em>
            <div className="form-group">
              <textarea
                {...register("attendies", { required: true })}
                name="message"
                className="textField"
                placeholder="Your Message"
                onChange={(e) => {
                  setTextF(e.target.value);
                }}
              />
            </div>

            <div className="center-btn-wrapper">
              <input type="submit" value="Send" className="button" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
{
  /* <div className="food-selector"> */
}
{
  /* <label htmlFor="Appetizer">Choose your Appetizer:</label>
              <Select
                closeMenuOnSelect={false}
                // {...register("Appetizer")}
                // value={selectedClient}
                onChange={handleSelectChange(appetizer)}
                components={animatedComponents}
                isOptionDisabled={() => selectedOptions.length >= 2}
                isMulti
                name="Appetizer_Requested"
                options={appetizerItems}
              />

              <label htmlFor="Entree">Choose your Entree: </label>
              <Select
                closeMenuOnSelect={false}
                // {...register("Entree")}
                // value={selectedOptions}
                onChange={handleSelectChange(entree)}
                components={animatedComponents}
                isOptionDisabled={() => selectedOptions.length >= 2}
                isMulti
                name="Entree_Requested"
                options={entreeItems}
              />

              <label htmlFor="Side">Choose your Side: </label>
              <Select
                closeMenuOnSelect={false}
                // {...register("Side")}
                // value={selectedOptions}
                onChange={handleSelectChange(side)}
                components={animatedComponents}
                isOptionDisabled={() => selectedOptions.length >= 2}
                isMulti
                name="Side_Requested"
                options={sideItems}
              />

              <label htmlFor="Dessert">Choose your Dessert:</label>
              <Select
                closeMenuOnSelect={false}
                // {...register("Dessert")}
                // value={selectedOptions}
                onChange={handleSelectChange(dessert)}
                components={animatedComponents}
                isOptionDisabled={() => selectedOptions.length >= 2}
                isMulti
                name="Dessert_Requested"
                options={dessertItems}
              /> */
}
{
  /* </div> */
}
