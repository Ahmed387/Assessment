import style from "./NotFound.module.css";
import Notfound from "../../../assets/242688-P3DOT4-743.jpg";
export default function NotFound() {
  return (
    <>
      <div className="w-full h-screen inset-0 z-0 relative">
        <img src={Notfound} alt="notfoundimage" />
      </div>
    </>
  );
}
