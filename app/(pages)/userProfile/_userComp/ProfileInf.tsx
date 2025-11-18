import { AiOutlineStock } from "react-icons/ai";
import { FaPeopleGroup } from "react-icons/fa6";
import { RiComputerFill } from "react-icons/ri";

const ProfileInf = () => {
  return (
    <div className="w-full px-3 py-2 flex justify-between">
      <div className="w-[32.5%] border-white/50 border-b pb-3  rounded-sm">
        <h2 className=" text-center">Hobbies</h2>
        <ul className="flex flex-col gap-1">
          <li className="flex px-5  items-center gap-2">
            <AiOutlineStock />
            <h3>Economy</h3>
          </li>
          <li className="flex px-5  items-center gap-2">
            <FaPeopleGroup />
            <h3>Politics</h3>
          </li>
          <li className="flex px-5 items-center gap-2">
            <RiComputerFill />
            <h3>Software</h3>
          </li>
        </ul>
      </div>
      <div className="w-[35%] flex items-end justify-center">
        <h1>@Aykublut</h1>
      </div>
      <div
        className="w-[32.5%] 
            border-white/50 border-b
           pb-3 rounded-sm
          "
      >
        <h2 className="  text-center">About</h2>
        <ul className="flex flex-col gap-1">
          <li className="flex px-5  items-center gap-2">
            <AiOutlineStock />
            <h3>Economy</h3>
          </li>
          <li className="flex px-5  items-center gap-2">
            <FaPeopleGroup />
            <h3>Politics</h3>
          </li>
          <li className="flex px-5 items-center gap-2">
            <RiComputerFill />
            <h3>Software</h3>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileInf;
