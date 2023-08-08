import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeExperience(
  ".Sprinklr",
  ` As a Product Engineer at Sprinklr, my role entails crafting and refining software products. 
  Collaborating across teams, I employ coding expertise to innovate and elevate Sprinklr's customer experience and social media marketing solutions.`,
   "Product Engineer @Sprinklr",
  "Sprinklr",
  "July 2023 - Sept 2023 (Active)"
);

hoverChangeExperience(
  ".GSoC'23",
  `I developed interactive web plugins for Rocketchat using advanced TypeScript, React, and React Native. 
  Additionally, I mentored a project focused on enhancing mobile message composer media handling, involving tasks such as facilitating media transfer from other apps and adding clipboard copying functionality on mobile devices.`,
  "Mentor@Rocket.chat",
  "GSoC",
  "May 2023 - Sept 2023 (4 months)"
);

hoverChangeExperience(
  ".Sashido",
  `I contributed to the Open API project by improving live queries for Swift and Objective-C languages. Collaborating with the team, I enhanced file management processes for smoother operations.
   Notable clients like JetBlue, Lovesac, U.S. Cellular, and U.S. Department of Defense were served during this tenure.`,
  "Api Engineer",
  "Sashido",
  "Sept 2022 - Nov 2022 (2 months)"
);

hoverChangeExperience(
  ".GSoC'22",
  `I developed interactive web plugins for Rocketchat using advanced TypeScript, React, and React Native. 
  Additionally, I mentored a project focused on enhancing mobile message composer media handling, involving tasks such as facilitating media transfer from other apps and adding clipboard copying functionality on mobile devices.`,
  "Mentee@joplin",
  "GSoC",
  "May 2022 - Sept 2022 (4 months)"
);

hoverChangeExperience(
  ".Solana Labs",
  `I teamed up with fellow student designers and engineers for pro-bono initiatives, conceptualizing brands, design systems, and Solana blockchain projects at Solana Labs. 
   I also executed technical solutions aligned with Bitcoin business needs.`,
  "Backend Developer",
  "Solana Labs",
  "Jan 2022 - Apr 2022 (4 months)"
);


hoverChangeDescription(
  ".html",
  "HTML is a markup language, where we mark the elements to define what information the page will display."
);
hoverChangeDescription(
  ".css",
  "CSS is a style page language composed of “layers”, bred for the purpose of styling pages."
);
hoverChangeDescription(
  ".js",
  "JavaScript is a programming language that allows you to implement dynamic elements in web pages."
);
hoverChangeDescription(
  ".sass",
  "Sass is a CSS pre-processor that adds some resources that are not available natively."
);
hoverChangeDescription(
  ".react",
  "React is a JavaScript library with a focus on creating user interfaces in a componentized way."
);
hoverChangeDescription(
  ".next",
  "Next.js is a web framework that enables features such as server-side rendering and generation of static React-based web sites."
);
hoverChangeDescription(
  ".styled",
  "styled-components is a library that uses the concept of CSS-in-JS, or so on, which allows us to write CSS code within Javascript."
);
hoverChangeDescription(
  ".tailwind",
  "Tailwind CSS is a CSS framework that provides us with utility classes for the purpose of styling pages."
);
hoverChangeDescription(
  ".typescript",
  "TypeScript is a superset of JavaScript that includes resources that are not present in the language natively, besides making it static."
);
hoverChangeDescription(
  ".radix",
  "Radix is ​​a library that provides accessible components without styles for building React applications."
);
hoverChangeDescription(
  ".cypress",
  "Cypress is a framework for end-to-end test automation, where it currently uses the JavaScript language."
);
hoverChangeDescription(
  ".storybook",
  "Storybook is a tool whose objective is to document and test the components of the application."
);
