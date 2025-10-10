

import { Outlet } from "react-router-dom";
import BgLight from "../../assets/imgBackground/backgroundLight.svg";

const LayoutStart = () => {
  return (
    <div
      className="w-screen h-screen justify-content-center align-items-center flex "
      style={{
        backgroundImage: `url(${BgLight})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed' // Opcional: fixa durante scroll
      }}
    >
      <Outlet />
    </div>
  );
};

export default LayoutStart;
