import React from "react";
import hall from "../../images/hall.png";
import fan from "../../images/fan7.png";
import chair from "../../images/wooden_chair6.png";
import room from "../../images/room15.png";
import sofa from "../../images/sofa14.png";
import dance from "../../images/dance2.png";
import temple from "../../images/temple2.png";
// import bulb from "../../images/bulb7.png";
// import mouse2 from "../../images/comp_mouse25.png";
// import room2 from "../../images/room2.png";
// import sofa2 from "../../images/sofa21.png";
// import mouse from "../../images/comp_mouse9.png";

export default function Portfolio() {
  return (
    <section className="py-10">
      <div>
        <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          Since the beginning of my journey as a freelance designer and
          developer, I've done remote work for
          <span className="text-teal-500"> agencies </span>
          consulted for <span className="text-teal-500">startups </span>
          and collaborated with talanted people to create digital products for
          both business and consumer use.
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          I offer from a wide range of services, including brand design,
          programming and teaching.
        </p>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div>
          <div className="basis-1/3 flex-1 nayan-team">
            <img
              className="rounded-lg object-cover nayan-img"
              layout="responsive"
              src={dance}
              alt="idfk"
            />
          </div>
        </div>
        <div className="basis-1/3 flex-1">
          <img
            className="rounded-lg object-cover"
            layout="responsive"
            src={chair}
            alt="idfk"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <img
            className="rounded-lg object-cover"
            layout="responsive"
            src={hall}
            alt="idfk"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <img
            className="rounded-lg object-cover"
            layout="responsive"
            src={sofa}
            alt="idfk"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <img
            className="rounded-lg object-cover"
            layout="responsive"
            src={room}
            alt="idfk"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <img
            className="rounded-lg object-cover"
            layout="responsive"
            src={room}
            alt="idfk"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <img
            className="rounded-lg object-cover"
            layout="responsive"
            src={fan}
            alt="idfk"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <img
            className="rounded-lg object-cover"
            layout="responsive"
            src={temple}
            alt="idfk"
          />
        </div>
      </div>
    </section>
  );
}
