import React from "react";

const MainContentBox = () => {
  return (
    <div className="py-12 px-4 flex flex-col items-center gap-8 text-center">
      <div className="flex flex-col items-center gap-4 self-stretch relative">
        <img
          src={require("../images/Rectangle25.png")}
          alt="cup"
          className="absolute top-0 ml-12"
        />
        <img src={require("../images/cup.png")} alt="cup" />
        <p className="text-xl font-medium leading-[110%]">Nibh viverra</p>
        <p className="text-lg leading-[160%] ">
          Sit bibendum donec dolor fames neque vulputate non sit aliquam.
          Consequat turpis natoque leo, massa.
        </p>
      </div>
      <div className="flex flex-col items-center gap-4 self-stretch relative">
        <img
          src={require("../images/Rectangle26.png")}
          alt="cup"
          className="absolute top-0 ml-6"
        />
        <img src={require("../images/hug.png")} alt="cup" />
        <p className="text-xl font-medium leading-[110%]">Cursus amet</p>
        <p className="text-lg leading-[160%] ">
          Sit bibendum donec dolor fames neque vulputate non sit aliquam.
          Consequat turpis natoque leo, massa.
        </p>
      </div>
      <div className="flex flex-col items-center gap-4 self-stretch relative">
        <img
          src={require("../images/Rectangle27.png")}
          alt="cup"
          className="absolute top-0 ml-16"
        />
        <img src={require("../images/tv.png")} alt="cup" />
        <p className="text-xl font-medium leading-[110%]">Ipsum fermentum</p>
        <p className="text-lg leading-[160%] ">
          Sit bibendum donec dolor fames neque vulputate non sit aliquam.
          Consequat turpis natoque leo, massa.
        </p>
      </div>
    </div>
  );
};

export default MainContentBox;
