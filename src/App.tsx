import { useEffect, useState } from "react";

import { info, personalInfo, profile } from "./data/constants";
import Input from "./components/Input";
import SectionContainer from "./components/SectionContainer";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

const upload = require("./assets/images/upload.png");
const plus = require("./assets/images/plus.png");
const edit = require("./assets/images/edit.png");
const cancel = require("./assets/images/delete.png");
const unorderedList = require("./assets/images/unorderedList.png");
function App() {
  const [data, setData] = useState<info>();
  const [image, setImage] = useState<string>();

  useEffect(() => {
    const getApiData = async () => {
      const response = await fetch(
        "http://127.0.0.1:4010/api/422.896900765624/programs/voluptatum/application-form"
      ).then((response) => response.json());

      setData(response.data.attributes.personalInformation);
    };

    getApiData();
  }, []);

  data && console.log(data["firstName"]);
  return (
    data && (
      <div className="flex flex-col flex-1 w-full h-screen">
        <Sidebar />
        <div className="w-full pl-[100px]">
          <Header />
          <div className="mt-[82px] pl-[70px] w-[590px]">
            <SectionContainer heading="Upload Cover Image">
              {image ? (
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
              )}
            </SectionContainer>
            <SectionContainer heading="Personal Infromation">
              {personalInfo.map((field, index) => (
                <Input
                  data={data[field.name as keyof info]}
                  label={field.title}
                  key={index}
                />
              ))}
              <div className="flex w-full mt-16 mb-12">
                <img className="h-6 w-6" src={plus} alt="plus" />
                <p className="text-sm font-['Poppins'] font-semibold ml-5">
                  Add a question
                </p>
              </div>
            </SectionContainer>
            <SectionContainer heading="Profile">
              {profile.map((field, index) => (
                <Input
                  data={data[field.name as keyof info]}
                  label={field.title}
                  key={index}
                />
              ))}
              <div className="flex w-full mt-16 mb-12">
                <img className="h-6 w-6" src={plus} alt="plus" />
                <p className="text-sm font-['Poppins'] font-semibold ml-5">
                  Add a question
                </p>
              </div>
            </SectionContainer>
            <SectionContainer heading="Additional Questions">
              <div>
                <p className="font-['Poppins'] text-[#979797] text-sm font-medium text-left w-full pt-6">
                  Paragraph
                </p>
                <div
                  className={`flex justify-between items-center pb-4 mt-2 border-b border-b-[#C4C4C4]`}
                >
                  <p className="font-['Poppins'] text-xl font-semibold w-[90%] mr-4">
                    Please tell me about yourself in less than 500 words
                  </p>
                  <div className="flex items-center justify-end ">
                    <img
                      src={edit}
                      alt="internal"
                      className="h-[18px] w-[18px]"
                    />
                  </div>
                </div>
              </div>
              <div>
                <p className="font-['Poppins'] text-[#979797] text-sm font-medium text-left w-full pt-6">
                  Dropdown
                </p>
                <div className="mt-2 border-b border-b-[#C4C4C4]">
                  <div className={`flex justify-between items-center`}>
                    <p className="font-['Poppins'] text-xl font-semibold w-[90%] mr-4">
                      Please select the year of graduation from the list below
                    </p>
                    <div className="flex items-center justify-end ">
                      <img
                        src={edit}
                        alt="internal"
                        className="h-[18px] w-[18px]"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="font-['Poppins'] text-xl font-semibold w-[90%] mt-7 mb-2">
                      Question
                    </p>
                    <div className="p-6 rounded-[5px] border font-['Poppins']">
                      <input placeholder="Type here" className="w-full" />
                    </div>
                  </div>
                  <div className="flex items-center justify-btween">
                    <img src={unorderedList} alt="list" className="hidden" />
                    <div className="w-full">
                      <p className="font-['Poppins'] text-xl font-semibold ml-8 mt-7 mb-2">
                        Choice
                      </p>
                      <div className="flex items-center justify-between">
                        <img
                          src={unorderedList}
                          alt="list"
                          className="h-6 w-6"
                        />
                        <div className="w-full ml-2 p-6 rounded-[5px] border font-['Poppins']">
                          <input placeholder="Type here" className="w-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full my-12 items-center justify-between">
                    <div className="flex items-center">
                      <img className="h-6 w-6" src={cancel} alt="cancel" />
                      <p className="text-sm text-[#A80000] font-['Poppins'] font-semibold ml-5">
                        Delete question
                      </p>
                    </div>
                    <div className="flex items-center justify-center rounded-[5px] bg-[#087B2F] px-3 py-2">
                      <p className="text-sm text-white font-['Poppins'] font-semibold">
                        Save
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full mt-16 mb-12">
                <img className="h-6 w-6" src={plus} alt="plus" />
                <p className="text-sm font-['Poppins'] font-semibold ml-5">
                  Add a question
                </p>
              </div>
            </SectionContainer>
          </div>
        </div>
      </div>
    )
  );
}

export default App;
