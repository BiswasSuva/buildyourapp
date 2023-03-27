// import React, { useState } from "react";
// import Component1 from "./Component1";
// import Component2 from "./Component2";
// import Component3 from "./Component3";
// import Component4 from "./Component4";
// import { useMultistepForm } from "../../customHooks/useMultiStepForm";

// const INITIAL_DATA = {
//     firstName: "",
//     lastName: "",
//     age: "",
//     street: "",
//     city: "",
//     state: "",
//     zip: "",
//     email: "",
//     password: "",
//   }
// const Multisteps = () => {
//   const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
//     useMultistepForm([
//       <Component1 />,
//       <Component2 />,
//       <Component3 />,
//       <Component4 />,
//     ]);

//   function onSubmit(e) {
//     e.preventDefault();
//     if (!isLastStep) return next();
//     alert("Successful Account Creation");
//   }
//   return (
//     <div className="parent-div">
//       <div className="arrow-container">
//         <div className="arrow-div">
//           <div className={currentStepIndex + 1 === 1 ? "active" : "completed"}>
//             <p>1</p>
//           </div>
//         </div>
//         <div className="arrow-div">
//           <div
//             className={
//               currentStepIndex + 1 === 2
//                 ? "active"
//                 : page < 2
//                 ? "inactive"
//                 : "completed"
//             }
//           >
//             <p>2</p>
//           </div>
//         </div>
//         <div className="arrow-div">
//           <div
//             className={
//               currentStepIndex + 1 === 3
//                 ? "active"
//                 : page < 3
//                 ? "inactive"
//                 : "completed"
//             }
//           >
//             <p>3</p>
//           </div>
//         </div>
//         <div className="arrow-div">
//           <div className={currentStepIndex + 1 === 4 ? "active" : "inactive"}>
//             <p>4</p>
//           </div>
//         </div>
//       </div>

//       <div className="component-div">
//         <div className="display title-dynamic">{step}</div>

//         <div className="mutlibtns">
//           {!isFirstStep && (
//             <button type="button" onClick={back} className="btns">
//               Back
//             </button>
//           )}
//           <button onClick={onSubmit}>{isLastStep ? "Finish" : "Next"}</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Multisteps;
