import style from "./PreviewPage.module.css";

import { useSelector } from "react-redux";
import BusinessCard from "../../TemplatesComponets/BusinessCard/BusinessCard";
import GalleryView from "../../TemplatesComponets/GalleryView/GalleryView";
import Letter from "../../TemplatesComponets/Letter/Letter";

export default function PreviewPage() {
  const { selectedTemplate, userData } = useSelector(
    (state) => state.templatered
  );
  console.log(selectedTemplate);
  console.log(userData.id);

  return (
    <>
      <div>
        {selectedTemplate === "BusinessCard" && (
          <>
            <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
              BusinessCard
            </h1>
            <BusinessCard data={userData} />
          </>
        )}
        {selectedTemplate === "GalleryView" && (
          <>
            <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
              Nature Gallery
            </h1>
            <GalleryView />
          </>
        )}
        {selectedTemplate === "Letter" && (
          <>
            <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
              this is letter
            </h1>

            <Letter data={userData} />
          </>
        )}
      </div>
    </>
  );
}
