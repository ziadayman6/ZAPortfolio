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
    { name: "CSS Modules", image: "imgs/cssModules.png", size: "80vw", id: 3 },
    {
      name: "Styled Components",
      image: "imgs/styled-components.png",
      size: "70vw",
      id: 18,
    },
    { name: "Tailwindcss", image: "imgs/tailwind.png", size: "90vw", id: 15 },
    { name: "Bootstrap", image: "imgs/bootstrap.png", size: "90vw", id: 6 },
    { name: "JS", image: "imgs/js.png", size: "70vw", id: 4 },
    { name: "TS", image: "imgs/ts.png", size: "70vw", id: 16 },
    { name: "ReactJS", image: "imgs/reactjs.png", size: "90vw", id: 7 },
    {
      name: "React Router",
      image: "imgs/reactRouter.png",
      size: "90vw",
      id: 8,
    },
    { name: "Redux", image: "imgs/redux.png", size: "70vw", id: 9 },
    { name: "React Query", image: "imgs/ReactQuery.png", size: "80vw", id: 5 },
    {
      name: "React Hook Form",
      image: "imgs/reactHookForm.png",
      size: "80vw",
      id: 19,
    },
    { name: "i18Next", image: "imgs/i18next.png", size: "80vw", id: 17 },
    { name: "MUI", image: "imgs/mui.png", size: "70vw", id: 10 },
    { name: "Figma", image: "imgs/figma.png", size: "80vw", id: 11 },
    { name: "Photoshop", image: "imgs/photoshop.png", size: "70vw", id: 12 },
    { name: "GIT", image: "imgs/git.png", size: "80vw", id: 13 },
    { name: "NPM", image: "imgs/npm.png", size: "80vw", id: 14 },
    { name: "Vite", image: "imgs/vite.png", size: "70vw", id: 20 },
    { name: "Netlify", image: "imgs/netlify.png", size: "90vw", id: 21 },
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
