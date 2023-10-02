import { headers } from "../data/constants";

const caret = require("../assets/images/caret.png");
export default function Header() {
  return (
    <div className="h-[128px] shadow-lg mt-[120px] -z-2 flex flex-row justify-evenly items-center">
      {headers.map((header, index) =>
        header === "Workflow" ? (
          <div
            key={index}
            className="flex flex-1 h-full items-center justify-center py-6"
          >
            <div className="flex w-full h-full items-center justify-center border-r border-r-[#C4C4C4]">
              <p className="text-center font-['Inter'] text-xl font-medium">
                {header}
              </p>
            </div>
          </div>
        ) : (
          <div
            key={index}
            className={`flex flex-1 h-full items-center justify-center ${
              header === "Application Form" ? "relative bg-[#00635B]" : ""
            }`}
          >
            <p
              className={`${
                header === "Application Form" ? "text-white" : ""
              } font-['Inter'] text-xl font-medium`}
            >
              {header}
            </p>
            {header === "Application Form" ? (
              <img
                src={caret}
                className="absolute ] h-[21px] right-[-10px]"
                alt="caret"
              />
            ) : null}
          </div>
        )
      )}
    </div>
  );
}
