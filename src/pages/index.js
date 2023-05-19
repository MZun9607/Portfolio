import ContainerMaxWidth from "@src/components/containers/ContainerMaxWidth";
import Navbar from "@src/components/Navbar";
import SectionDivider from "@src/components/SectionDivider";
import ContainerMiniCard from "@src/components/containers/ContainerMiniCard";
import React, { useEffect, useRef, useState } from "react";
import SimpleSlider from "@src/components/SimpleSlider";
import Footer from "@src/components/Footer";


export default function Home() {
  
  const [skills, setSkills] = useState([]);

  const [projects, setProjects] = useState([]);

  const refQuienSoy =useRef(null);
  const refConocimientos =useRef(null);
  const refProyectos =useRef(null);

  const items = [["Proyectos", refProyectos], ["Conocimientos", refConocimientos], ["Quién Soy", refQuienSoy]] ;

  useEffect(() => {
    setSkills([
      ["React", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png"],
      ["Bootstrap", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png"],
      ["Tailwind", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"],
      ["Unity3D", "https://gitlab.com/uploads/-/system/project/avatar/20257117/unity-3d-icon-68.png"],
      ["Android Studio", "https://2.bp.blogspot.com/-tzm1twY_ENM/XlCRuI0ZkRI/AAAAAAAAOso/BmNOUANXWxwc5vwslNw3WpjrDlgs9PuwQCLcBGAsYHQ/s1600/pasted%2Bimage%2B0.png"],
      ["HTML - CSS - JS", "https://jml.neocities.org/html5-css3-js.png"],
    ])
  },[]);

  useEffect(() => {
    setProjects([
      ["LICEX", "Single Page desarrollada usando React y Tailwind.", "/Licex.PNG", "https://zingy-basbousa-a31bde.netlify.app/"],
      ["Kittens", "Pequeña aplicación desarrollada usando React y Tailwind.", "/Kittens.PNG", "https://stately-cassata-351d79.netlify.app"],
      ["Ball #", "Videojuego educativo desarrollado en Unity3D", "/ball.png", "https://play.google.com/store/apps/details?id=com.Deizoforia.Ball"]
    ])
  },[]);

  return (
    
    <main className="flex text-neutral-100 min-h-screen h-full bg-gradient-to-r from-darkmodeblue-darkblue to-darkmodeblue-blue flex-col items-center justify-between font-Barlow ">
      <div ref={refQuienSoy}></div>
      <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      <header className="w-full sticky top-0 z-50">
        <div className="relative">
          <Navbar items={items}/>
        </div> 
      </header>
      
      <div className="w-full">
        <ContainerMaxWidth spacing="pt-4" item={
          <div className="grid grid-cols-5 gap-8 h-96 items-center place-content-center">
            <div className="col-span-5 sm:col-span-3">
              <h1 className="text-4xl  py-1">Hola, mi nombre es </h1>
              <h1 className="origin-left text-6xl py-6 transition-all duration-300 text-amber-400 opacity-70 hover:scale-110 hover:opacity-100  hover:text-amber-300">Mauricio Zúñiga</h1>
              <h3 className="text-xl py-3">Desarrollador front end junior</h3>
            </div>
            <div className="col-span-2 hidden sm:flex">
              <img className="opacity-85  transition-all duration-300 hover:scale-125 hover:opacity-100" src="/Software-Developer.svg"></img>
            </div>
          </div>
        }/>
        <div ref={refConocimientos}></div>
        <SectionDivider/>
        
        <ContainerMaxWidth spacing="pt-12" item={
          <>
            <h2 className="text-3xl py-1">Conocimientos:</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 ">
              {
                skills.map((skill, key) => (
                  <React.Fragment key={key}>
                    <ContainerMiniCard img={skill[1]} desc={skill[0]}/>
                  </React.Fragment>
                ))
              }
            </div>
          </>
        }/>
        <div ref={refProyectos}></div>
        <SectionDivider/>
        
        <ContainerMaxWidth spacing="pt-12" item={
          <>
            <h2 className="text-3xl">Proyectos:</h2>
            <div className="py-12">
              <SimpleSlider projects={projects} />
            </div>
            
          </>
        }/>
        <Footer/>
      </div>

    </main>
  )
}
