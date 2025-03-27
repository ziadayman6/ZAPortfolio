import { useEffect, useRef, useState } from "react";
import Project from "./../components/Project";
import Title from "../components/Title";

function ThirdSection() {
  const [isOpen3, setIsOpen3] = useState(false);
  const [height, setHeight] = useState("0px");

  function handleOpened3() {
    setIsOpen3(!isOpen3);
  }

  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const scrollHeight = containerRef.current.scrollHeight;
      if (isOpen3) {
        setHeight(`${scrollHeight}px`);
      } else {
        setHeight("0px");
      }
    }
  }, [isOpen3]);

  const projects = [
    {
      id: 1,
      title: "SECURITY SYSTEM WEBSITE",
      desc: "It's a website for security system product company called 'La Casa Segura'. \n It provides you with many services such as knowing more information about the company's features and offers, purchasing devices and more. \n I create this website using HTML, CSS, JS as Front-end & PHP, xampp, MySQL as Back-end.",
      image: "imgs/home1.png",
      url: "https://ziadayman6.github.io/LaCasaSegura/body.html",
      code: "https://github.com/ziadayman6/LaCasaSegura",
      tools: ["imgs/html-5.png", "imgs/css-3.png", "imgs/js.png"],
    },
    {
      id: 2,
      title: "HUMAN RESOURCES WEBSITE",
      desc: "It's a website for human resources system that allows the admins to manage the employees' information and vacation requests. I create this website using HTML, CSS, JS as Front-end & Django, Python, SQlite3 as Back-end.",
      image: "imgs/home.png",
      url: "http://ziadayman.pythonanywhere.com/home/",
      code: "https://github.com/ziadayman6/HumanResources",
      tools: [
        "imgs/html-5.png",
        "imgs/css-3.png",
        "imgs/js.png",
        "imgs/django.png",
      ],
    },
    {
      id: 3,
      title: "REACT QUIZ WEBSITE",
      desc: "It's a website for react js quiz that contains 15 question on react with different difficulties to let someone testing his knowledge level of react js. \n I create this website using REACTJS and MATERIAL UI.",
      image: "imgs/reactquiz.png",
      url: "https://reactquiz26.netlify.app/",
      code: "https://github.com/ziadayman6/React_JS_Quiz",
      tools: ["imgs/reactjs.png", "imgs/mui.png"],
    },
  ];

  return (
    <div className="section4" id="to3">
      <center>
        <Title onClick={handleOpened3} isOpen={isOpen3}>
          MY WORK
        </Title>
        <div
          className="container"
          ref={containerRef}
          style={{
            height: height,
            transition: "height 1s ease",
            overflow: "hidden",
          }}
        >
          {projects.map((project) => (
            <Project
              key={project.id}
              image={project.image}
              title={project.title}
              url={project.url}
              desc={project.desc}
              tools={project.tools}
              code={project.code}
            />
          ))}
        </div>
      </center>
    </div>
  );
}

export default ThirdSection;
