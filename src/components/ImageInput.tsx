import { useState } from "react";

const upload = require("../assets/images/upload.png");
const cancel = require("../assets/images/delete.png");

export default function ImageInput() {
  const [image, setImage] = useState<string>();

  return image ? (
    <div className="flex-1 flex flex-col w-full items-center justify-center">
      <img
        className="flex items-center justify-center w-full"
        id="image"
        alt="user"
        src={image}
      />
      <div className="flex items-start my-4 mx-5 justify-start w-full">
        <input
          accept="image/*"
          type="file"
          id="files"
          onChange={(e) => {
            // @ts-ignore: Object is possibly 'null'
            var src = URL.createObjectURL(e.target.files[0]);
            setImage(src);
          }}
          className="flex-1 absolute opacity-0 h-full"
        />
        <img className="h-6 w-6" src={cancel} alt="cancel" />
        <p className="text-sm text-[#A80000] font-['Poppins'] font-semibold ml-5">
          Delete and re-upload
        </p>
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center border-dashed border rounded-[5px] px-16 py-12 my-16">
      <input
        accept="image/*"
        type="file"
        id="files"
        onChange={(e) => {
          // @ts-ignore: Object is possibly 'null'
          var src = URL.createObjectURL(e.target.files[0]);
          setImage(src);
        }}
        className="flex-1 absolute opacity-0 h-full"
      />
      <img className="w-[33px]" src={upload} alt={"upload"} />
      <p className="text-center my-2 text-sm font-['Poppins'] font-semibold">
        Upload cover image
      </p>
      <p className="text-center my-2 text-[#979797] text-sm font-['Poppins'] font-medium">
        16:9 ratio is recommended. Max image size 1 MB
      </p>
    </div>
  );
}
