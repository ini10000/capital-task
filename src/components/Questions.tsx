import { useState } from "react";

const plus = require("../assets/images/plus.png");
const cancel = require("../assets/images/delete.png");
const add = require("../assets/images/add.png");
const unorderedList = require("../assets/images/unorderedList.png");

export default function Questions() {
  const [questions, setQuestions] = useState([""]);
  const [selected, setSelected] = useState<string>();

  return (
    <div className="w-full">
      {
        // @ts-ignore: Object is possibly 'null'
        questions.length > 0
          ? // @ts-ignore: Object is possibly 'null'
            questions.map((question, index) => (
              <div>
                <div>
                  <p className="font-['Poppins'] text-xl font-semibold mt-7 mb-2">
                    Type
                  </p>
                  <div className="p-6 rounded-[5px] border font-['Poppins'] text-[#979797]">
                    <select
                      onChange={(e) => setSelected(e.target.value)}
                      className="w-full bg-white"
                    >
                      <option>Paragragh</option>
                      <option>Short Answer</option>
                      <option>Yes/No</option>
                      <option>Dropdown</option>
                      <option>Multiple Choice</option>
                      <option>Date</option>
                      <option>Number</option>
                      <option>File Upload</option>
                      <option>Video Question</option>
                    </select>
                  </div>
                </div>
                <div className="w-full">
                  <p className="font-['Poppins'] text-xl font-semibold mt-7 mb-2">
                    Question
                  </p>

                  <div className="p-6 rounded-[5px] border font-['Poppins']">
                    <input placeholder="Type here" className="w-full" />
                  </div>
                  {(selected === "Dropdown" ||
                    selected === "Multiple Choice") && (
                    <div>
                      <div className="flex items-center justify-btween">
                        <img
                          src={unorderedList}
                          alt="list"
                          className="hidden"
                        />
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
                            <div className="w-full mx-2 p-6 rounded-[5px] border font-['Poppins']">
                              <input
                                placeholder="Type here"
                                className="w-full"
                              />
                            </div>
                            <img src={add} alt="list" className="h-3 w-3" />
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center mt-7 ">
                        <input
                          type="checkbox"
                          className="h-[18px] w-[18px] mr-3 accent-[#087B2F]"
                        />
                        <p className="font-['Poppins'] text-sm">
                          Enable "Other" option
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                {selected === "Yes/No" && (
                  <div className="flex items-center mt-7 ">
                    <input
                      type="checkbox"
                      className="h-[18px] w-[18px] mr-3 accent-[#087B2F]"
                    />
                    <p className="font-['Poppins'] text-sm">
                      Disqualify candidate if answer is "No"
                    </p>
                  </div>
                )}
                <div className="flex w-full my-5 items-center justify-between">
                  <div
                    className="flex items-center"
                    // @ts-ignore: Object is possibly 'null'
                    onClick={() => setQuestions(questions.splice(index, 1))}
                  >
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
            ))
          : null
      }
      <div
        className="flex w-full mt-16 mb-12 cursor-pointer"
        onClick={() =>
          // @ts-ignore: Object is possibly 'null'
          setQuestions(questions.length > 0 ? [...questions, ""] : [""])
        }
      >
        <img className="h-6 w-6" src={plus} alt="plus" />
        <p className="text-sm font-['Poppins'] font-semibold ml-5">
          Add a question
        </p>
      </div>
    </div>
  );
}
