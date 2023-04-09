import React from "react";
import SimpleCard from "./SimpleCard";
import Question from "./Question";
import RegisterForm from "./RegisterForm";
import DescriptionFirst from "./DescriptionFirst";
import CountdownTimer from "./CountdownTimer";
import VideosFrame from "./VideosFrame";

const HeadBanner = () => {
  return (
    <div class="grid grid-cols-1 gap-4 mt-6">
      <SimpleCard />
      <div class="flex justify-center">
        <div class="max-w-lg">
          <DescriptionFirst />
        </div>
      </div>
      <VideosFrame/>
      <div class="flex justify-center">
        <CountdownTimer />
      </div>
      <div class="flex justify-center">
        <RegisterForm />
      </div>
      <div class="flex justify-center">
        <div class="max-w-sm md:max-w-lg">
          <Question />
        </div>
      </div>
    </div>
  );
};

export default HeadBanner;
