import React from "react";
import "../Styles.css";
import ImageSlider from "../utils/ImageSlider";
import IndividualStudentProgressChart from "./dashboard/IndividualStudentProgressChart";
import SubjectBasedProgressChart from "./dashboard/SubjectBasedProgressChart";
import ClassBasedProgressChart from "./dashboard/ClassBasedProgressChart";

const Home = () => {
  const HandleStudProgess = () => {
    window.location.href = "/student";
  };

  return (
    <section>
      <div className="dashboard">
        <div className="min-h-screen p-6 rounded-lg ">
          <div className="db-container mx-auto p-15">
            <h1 className="wlc-text text-2xl font-bold pb-6">Welcome Kofi,</h1>
            <div className="slider pb-6">
              <ImageSlider />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* <div className="bg-white shadow-md rounded-lg p-4">
                <IndividualStudentProgressChart />
              </div> */}
              <button onClick={HandleStudProgess}>
                Individual Student Progress Char
              </button>
              <div className="bg-white shadow-md rounded-lg p-4">
                <SubjectBasedProgressChart />
              </div>
              <div className="bg-white shadow-md rounded-lg p-4">
                <ClassBasedProgressChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
