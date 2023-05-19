import React from "react";
import Slider from "react-slick";

export default function SimpleSlider( props ) {
    
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="px-8">
      <Slider {...settings}>
        {
          props.projects.map((project, index) => (
            <div key={index} className="w-full h-[26rem] transition-all duration-500 bg-neutral-100 hover:bg-yellow-100 opacity-70 hover:opacity-100">
              <div className="max-h-72 overflow-hidden">
                <img className="w-full aspect-[4/3] sm:aspect-auto object-cover" src={project[2]}></img>
              </div>
              <div className=" text-darkmodeblue-darkblue p-4">
                <h1 className="text-xl transition-all duration-500 origin-left hover:scale-125 hover:text-blue-800"><a href={project[3]} >{project[0]}</a></h1>
                <p>{project[1]}</p>
              </div>
            </div>
          )) 
        }
      </Slider>
    </div>
  );
}