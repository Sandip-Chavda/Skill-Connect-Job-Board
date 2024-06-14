import qs from "query-string";
import { IoStarSharp } from "react-icons/io5";
import { GiBarbedStar } from "react-icons/gi";
import { GiStarFormation } from "react-icons/gi";

export const recruiterOnboardFormControls = [
  {
    label: "Full Name",
    name: "name",
    placeholder: "Sandip Chavda",
    componentType: "input",
  },
  {
    label: "Company Name",
    name: "companyName",
    placeholder: "Skill Connect - World's Best Job Seeking Platform",
    componentType: "input",
  },
  {
    label: "Your Role",
    name: "companyRole",
    placeholder: "Technical Recruiter",
    componentType: "input",
  },
];

export const initialRecruiterFormData = {
  name: "",
  companyName: "",
  companyRole: "",
  //   isPremiumUser: "",
};

export const candidateOnboardFormControls = [
  {
    label: "Resume/CV",
    name: "resume",
    // placeholder: "Sandip Chavda",
    componentType: "file",
  },
  {
    label: "Full Name",
    name: "name",
    placeholder: "Sandip Chavda",
    componentType: "input",
  },
  {
    label: "Current Company Name",
    name: "currentCompany",
    placeholder: "Skill Connect - World's Best Job Seeking Platform",
    componentType: "input",
  },
  {
    label: "Current Job Location",
    name: "currentJobLocation",
    placeholder: "Gujarat",
    componentType: "input",
  },
  {
    label: "Prefered Job Location",
    name: "preferedJobLocation",
    placeholder: "India, Remote",
    componentType: "input",
  },
  {
    label: "Current Salary",
    name: "currentSalary",
    placeholder: "9000000",
    componentType: "input",
  },
  {
    label: "Notice Period",
    name: "noticePeriod",
    placeholder: "30 days",
    componentType: "input",
  },
  {
    label: "Skills",
    name: "skills",
    placeholder: "TimePass, MoneyWasting, etc...",
    componentType: "input",
  },
  {
    label: "Previous Companies Name",
    name: "previousCompanies",
    placeholder: "Google, Microsoft, SpaceX, etc...",
    componentType: "input",
  },
  {
    label: "Total Experience",
    name: "totalExperience",
    placeholder: "0 years",
    componentType: "input",
  },
  {
    label: "College Name",
    name: "college",
    placeholder: "ABC XYZ University",
    componentType: "input",
  },
  {
    label: "College Location",
    name: "collegeLocation",
    placeholder: "College location",
    componentType: "input",
  },
  {
    label: "Graduated Year",
    name: "graduatedYear",
    placeholder: "2023",
    componentType: "input",
  },
  {
    label: "LinkedIn Profile",
    name: "linkedinProfile",
    placeholder: "Your linkedin profile link",
    componentType: "input",
  },
  {
    label: "Github Profile",
    name: "githubProfile",
    placeholder: "Your github profile link",
    componentType: "input",
  },
];

export const initialCandidateFormData = {
  resume: "",
  name: "",
  currentJobLocation: "",
  preferedJobLocation: "",
  currentSalary: "",
  noticePeriod: "",
  skills: "",
  currentCompany: "",
  previousCompanies: "",
  totalExperience: "",
  college: "",
  collegeLocation: "",
  graduatedYear: "",
  linkedinProfile: "",
  githubProfile: "",
  //   isPremiumUser: false,
};

export const initialCandidateAccountFormData = {
  // resume: "",
  name: "",
  currentJobLocation: "",
  preferedJobLocation: "",
  currentSalary: "",
  noticePeriod: "",
  skills: "",
  currentCompany: "",
  previousCompanies: "",
  totalExperience: "",
  college: "",
  collegeLocation: "",
  graduatedYear: "",
  linkedinProfile: "",
  githubProfile: "",
  //   isPremiumUser: false,
};

export const postNewJobFormControls = [
  {
    label: "Company Name",
    name: "companyName",
    placeholder: "Company Name",
    componentType: "input",
    disabled: true,
  },
  {
    label: "Job Title",
    name: "title",
    placeholder: "Full Stack (MERN) Developer",
    componentType: "input",
  },
  {
    label: "Job Type",
    name: "type",
    placeholder: "Job Type",
    componentType: "input",
  },
  {
    label: "Location",
    name: "location",
    placeholder: "Gujarat, India / Hybrid",
    componentType: "input",
  },
  {
    label: "Experience",
    name: "experience",
    placeholder: "10 Years",
    componentType: "input",
  },
  {
    label: "Job Description",
    name: "description",
    placeholder: "Write about job description and role...",
    componentType: "textarea",
  },
  {
    label: "Skills",
    name: "skills",
    placeholder: "React.js, Next.js, JavaScript, TypeScript,...",
    componentType: "input",
  },
];

export const initialPostNewJobFormData = {
  companyName: "",
  title: "",
  type: "",
  location: "",
  experience: "",
  description: "",
  skills: "",
};

export const filterMenuDataArray = [
  {
    id: "companyName",
    label: "Company Name",
  },
  {
    id: "title",
    label: "Title",
  },
  {
    id: "type",
    label: "Type",
  },
  {
    id: "location",
    label: "Location",
  },
];

export function formUrlQuery({ params, dataToAdd }) {
  let currentURL = qs.parse(params);

  if (Object.keys(dataToAdd).length > 0) {
    Object.keys(dataToAdd).map((key) => {
      if (dataToAdd[key].length === 0) delete currentURL[key];
      else currentURL[key] = dataToAdd[key].join(",");
    });
  }

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentURL,
    },
    {
      skipNull: true,
    }
  );
}

export const membershipPlans = [
  {
    heading: "Starter Pack",
    price: "599",
    type: "basic",
    icon: <IoStarSharp size={30} />,
    description:
      "Essential plan for candidates and recruiters to kickstart their career or hiring journey.",
  },
  {
    heading: "Growth Bundle",
    price: "1899",
    type: "teams",
    icon: <GiBarbedStar size={30} />,
    description:
      "Advanced features for candidates and teams to streamline job searches and hiring processes",
  },
  {
    heading: "Elite Experience",
    price: "3599",
    type: "enterprise",
    icon: <GiStarFormation size={30} />,
    description:
      "Comprehensive solutions for candidates and enterprises to manage premium job.",
  },
];
