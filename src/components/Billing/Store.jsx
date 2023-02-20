import { apple, google } from "../../assets";

const Store = () => (
  <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
    <img
      src={apple}
      alt="google_play"
      className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
    />
    <img
      src={google}
      alt="google_play"
      className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
    />
  </div>
);

export default Store;
