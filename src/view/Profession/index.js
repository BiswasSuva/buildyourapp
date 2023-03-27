import React, { useEffect, useState } from "react";
import g from "../../images/briefcase-02.png";
import "../Profession/Proffession.css";

import { getAllProf } from "../../api/appApi";
import ProfHeaerUi from "../../Component/ProfessionUi/ProfHeaerUi";

import { updateUserDetail } from "../../api/authapi";
import Alert from "../../Component/Alert/alert";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import Professionslider from "../../Component/ProfessionUi/Professionslider";
function Index() {

  return (
   <>
    <ProfHeaerUi
      header="Choose Your Profession"
      paragraph="Our Advanced AI personalises your SuperAPP experience"
    >

      {/* <ProfCardUi mt="14">
        {professions.map((item, index) => {
          if (index === 0) {
            return (
              <ProfessionCard
                key={item._id}
                image={item.prof_pic}
                name={item.prof_name}
                onSelect={() => SelectProfession(item._id)}
              />
            );
          }
        })}
      </ProfCardUi>
      <ProfCardUi mt="10">
        {professions.map((item, index) => {
          if (index === 1 || index === 2) {
            return (
              <ProfessionCard
                key={item._id}
                image={item.prof_pic}
                name={item.prof_name}
                onSelect={() => SelectProfession(item._id)}
              />
            );
          }
        })}
      </ProfCardUi>
      <ProfCardUi mt="4">
        {professions.map((item, index) => {
          if (index === 3 || index === 4) {
            return (
              <ProfessionCard
                key={item._id}
                image={item.prof_pic}
                name={item.prof_name}
                onSelect={() => SelectProfession(item._id)}
              />
            );
          }
        })}
      </ProfCardUi> */}
      {/* <ProfCardUi mt="0">
        <ProfessionCard />
      </ProfCardUi> */}
<Professionslider/>
  
    </ProfHeaerUi>
    </>
  );
}

export default Index;


