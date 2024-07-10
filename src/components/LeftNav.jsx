import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import LeftNavMenuItem from "./LeftNavMenuItem";
// import { categories } from "../utils/constants.jsx";
import { Context } from "../context/contextApi";
import { categories } from "../utils/constants";

export default function LeftNav() {
  const { selectedCategory, setSelectedCategory, mobileMenu } =
    useContext(Context);

  const navigate = useNavigate();

  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        return setSelectedCategory(name);
      case "home":
        return setSelectedCategory(name);
      case "menu":
        return false;
      default:
        break;
    }
  };

  return (
    // h-full
    <div
      className={`md:block w-[240px] overflow-y-auto py-4 bg-black absolute md:relative z-10  md:translate-x-0 transition-all ${
        mobileMenu ? "translate-x-0" : "translate-x-[-240px]"
      }`}
    >
      <div className="flex flex-col px-5">
        {categories.map((item, idx) => {
          return (
            <React.Fragment key={idx}>
              <LeftNavMenuItem
                key={idx}
                text={item.name === "New" ? "Home" : item.name}
                icon={item.icon}
                action={() => {
                  clickHandler(item.name, item.type);
                  navigate("/");
                }}
                className={
                  selectedCategory === item.name ? "bg-white/[0.15]" : ""
                }
              />
              {item.divider && <hr className="my-5 border-white/[0.2]" />}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
