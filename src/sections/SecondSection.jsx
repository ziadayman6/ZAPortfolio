import { useEffect, useRef, useState } from "react";
import Skill from "../components/Skill";
import Title from "../components/Title";

function SecondSection() {
  const [isOpen2, setIsOpen2] = useState(false);
  const [height, setHeight] = useState("0px");

  function handleOpened2() {
    setIsOpen2(!isOpen2);
  }

  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const scrollHeight = containerRef.current.scrollHeight;
      if (isOpen2) {
        setHeight(`${scrollHeight}px`);
      } else {
        setHeight("0px");
      }
    }
  }, [isOpen2]);

  const skills = [
    { name: "HTML", image: "imgs/html-5.png", size: "70vw", id: 1 },
    { name: "CSS", image: "imgs/css-3.png", size: "70vw", id: 2 },
    { name: "CSSMODULES", image: "imgs/cssModules.png", size: "80vw", id: 3 },
    { name: "JS", image: "imgs/js.png", size: "70vw", id: 4 },
    { name: "JQUERY", image: "imgs/jquery.png", size: "80vw", id: 5 },
    { name: "DJANGO", image: "imgs/django.png", size: "90vw", id: 15 },
    { name: "BOOTSTRAP", image: "imgs/bootstrap.png", size: "90vw", id: 6 },
    { name: "REACT", image: "imgs/reactjs.png", size: "90vw", id: 7 },
    { name: "REACTROUTER", image: "imgs/reactRouter.png", size: "90vw", id: 8 },
    { name: "REDUX", image: "imgs/redux.png", size: "70vw", id: 9 },
    { name: "MUI", image: "imgs/mui.png", size: "70vw", id: 10 },
    { name: "FIGMA", image: "imgs/figma.png", size: "80vw", id: 11 },
    { name: "PS", image: "imgs/photoshop.png", size: "70vw", id: 12 },
    { name: "GIT", image: "imgs/git.png", size: "80vw", id: 13 },
    { name: "NPM", image: "imgs/npm.png", size: "80vw", id: 14 },
  ];
  return (
    <div className="section3" id="to2">
      <center>
        <Title onClick={handleOpened2} isOpen={isOpen2}>
          SKILLS
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
          <div className="parent">
            {skills.map((skill) => (
              <Skill
                key={skill.id}
                name={skill.name}
                image={skill.image}
                size={skill.size}
              />
            ))}
          </div>
        </div>
      </center>
    </div>
  );
}

export default SecondSection;
