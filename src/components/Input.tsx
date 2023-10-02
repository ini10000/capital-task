import { useState } from "react";
import Switch from "react-switch";
import { details } from "../data/constants";

const checked = require("../assets/images/checked.png");
const unchecked = require("../assets/images/unchecked.png");

type Props = { label: string; data: details };

export function Input(props: Props) {
  const { label, data } = props;
  const [on, setOn] = useState(false);
  const [internal, setInternal] = useState(false);

  return (
    <div
      className={`flex justify-between items-center py-6 ${
        label !== "Gender" ? "border-b" : "border-b-0"
      } border-b-[#C4C4C4]`}
    >
      <p className="w-[230px] font-['Poppins'] text-xl font-semibold mr-4">
        {label}
        {label === "Phone" && (
          <span className="text-sm"> (without dial code)</span>
        )}
      </p>
      {label === "First Name" || label === "Last Name" || label === "Email" ? (
        <input className="w-[55%]" />
      ) : (
        <div className="flex items-center justify-between w-[55%]">
          <div className="flex items-center">
            <img
              onClick={() => setInternal(!internal)}
              src={internal ? checked : unchecked}
              alt="internal"
              className="h-[18px] w-[18px]"
            />{" "}
            <p className="font-['Poppins'] text-base m-2">
              {" "}
              {label === "Education" ||
              label === "Experience" ||
              label === "Resume"
                ? "Mandatory"
                : "Internal"}
            </p>
          </div>
          <div className="flex items-center">
            <Switch
              checked={on}
              onChange={setOn}
              onColor="#888"
              offColor="#087B2F"
              uncheckedIcon={false}
              checkedIcon={false}
              width={45}
              height={20}
            />
            <p className="font-['Poppins'] text-[#666] text-base m-2">
              {on === false ? "Show" : "Hide"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Input;
