import { useEffect, useState } from "react";

import { info, personalInfo, profile, profileInfo } from "./data/constants";
import Input from "./components/Input";
import SectionContainer from "./components/SectionContainer";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ImageInput from "./components/ImageInput";
import Questions from "./components/Questions";

const cancel = require("./assets/images/delete.png");
const edit = require("./assets/images/edit.png");
const unorderedList = require("./assets/images/unorderedList.png");
function App() {
  const [data, setData] = useState<info>();
  const [profileData, setProfileData] = useState<profileInfo>();

  useEffect(() => {
    const getApiData = async () => {
      const response = await fetch(
        "http://127.0.0.1:4010/api/422.896900765624/programs/voluptatum/application-form"
      ).then((response) => response.json().catch(() => null));
      setData(response.data.attributes.personalInformation);
      setProfileData(response.data.attributes.profile);
    };

    getApiData();
  }, []);

  return !data || !profileData ? null : (
    <div className="flex flex-col flex-1 w-full h-screen">
      <Sidebar />
      <div className="w-full pl-[100px]">
        <Header />
        <div className="mt-[82px] pl-[70px] w-[590px]">
          <SectionContainer heading="Upload Cover Image">
            <ImageInput />
          </SectionContainer>
          <SectionContainer heading="Personal Infromation">
            {data &&
              personalInfo.map((field, index) => (
                <Input
                  data={data[field.name as keyof info]}
                  label={field.title}
                  key={index}
                />
              ))}
            <Questions />
          </SectionContainer>
          <SectionContainer heading="Profile">
            {profileData &&
              profile.map((field, index) => (
                <Input
                  data={profileData[field.name as keyof profileInfo]}
                  label={field.title}
                  key={index}
                />
              ))}
            <Questions />
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
                      <img src={unorderedList} alt="list" className="h-6 w-6" />
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
            <div>
              <p className="font-['Poppins'] text-[#979797] text-sm font-medium text-left w-full pt-6">
                Yes/No
              </p>
              <div
                className={`flex justify-between items-center pb-4 mt-2 border-b border-b-[#C4C4C4]`}
              >
                <p className="font-['Poppins'] text-xl font-semibold w-[90%] mr-4">
                  Have you ever been rejected by the UK Embassy?
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
          </SectionContainer>
        </div>
      </div>
    </div>
  );
}

export default App;
