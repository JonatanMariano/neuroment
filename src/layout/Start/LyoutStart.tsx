
import { Outlet } from "react-router-dom";
const BgLight = require("../../assets/imgBackGraund/backgroundLight.svg").default;

const LayoutStart = () => {
  return (
    <div
      className="layoutStart"
      style={{ backgroundImage: `url(${BgLight})` }}
    >
      <Outlet />
    </div>
  );
};

export default LayoutStart;
