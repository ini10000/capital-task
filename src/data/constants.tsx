const menu = require("../assets/images/menu.png");
const home = require("../assets/images/home.png");
const checklist = require("../assets/images/checklist.png");

interface MenuItem {
  name: string;
  icon: string;
}

interface userInfo {
  title: string;
  name: string;
}

interface details {
  show: boolean;
  internalUse: boolean;
}

interface info {
  firstName: details;
  lastName: details;
  emailId: details;
  phoneNumber: details;
  nationality: details;
  currentResidence: details;
  idNumber: details;
  dateOfBirth: details;
  gender: details;
  // personalQuestions: [
  //   {
  //     id: string;
  //     type: string;
  //     question: string;
  //     choices: string[];
  //     maxChoice: number;
  //     disqualify: boolean;
  //     other: boolean;
  //   }
  // ];
}

let headers: string[] = [
  "Program details",
  "Application Form",
  "Workflow",
  "Preview",
];

let menuItems: MenuItem[] = [
  { name: "menu", icon: menu },
  { name: "home", icon: home },
  { name: "checklist", icon: checklist },
];

let personalInfo: userInfo[] = [
  { title: "First Name", name: "firstName" },
  { title: "Last Name", name: "lastName" },
  { title: "Email", name: "emailId" },
  { title: "Phone", name: "phoneNumber" },
  { title: "Nationality", name: "nationality" },
  { title: "Current Residence", name: "currentResidence" },
  { title: "ID Number", name: "idNumber" },
  { title: "Date of Birth", name: "dateOfBirth" },
  { title: "Gender", name: "gender" },
];

let profile: userInfo[] = [
  { title: "Education", name: "education" },
  { title: "Experience", name: "experince" },
  { title: "Resume", name: "resume" },
];

export { headers, menuItems, personalInfo, profile };
export type { info, details };
