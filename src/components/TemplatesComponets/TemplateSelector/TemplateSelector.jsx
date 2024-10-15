import style from "./TemplateSelector.module.css";
import React from "react";
import { useDispatch } from "react-redux";
import { setTemplate } from "../../../Redux/Templateslice";
import { useNavigate } from "react-router-dom";

const TemplateSelector = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleTemplateSelection = (template) => {
    dispatch(setTemplate(template));
    navigate("/form");
  };

  return (
    <div className="template-selector bg-white border-gray-200 dark:bg-gray-900 ">
      <ul className="font-medium flex flex-col justify-center items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <button onClick={() => handleTemplateSelection("BusinessCard")}>
            Business Card
          </button>
        </li>
        <li>
          <button onClick={() => handleTemplateSelection("GalleryView")}>
            Gallery View
          </button>
        </li>
        <li>
          <button onClick={() => handleTemplateSelection("Letter")}>
            Letter
          </button>
        </li>
      </ul>
    </div>
  );
};

export default TemplateSelector;
