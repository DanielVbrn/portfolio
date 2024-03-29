import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiPostgresql,
  DiReact
} from "react-icons/di"

import "../styles/components/technologiescontainer.sass"

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
  { id: "postgresql", name: "Postgresql", icon: <DiPostgresql /> },
  { id: "react", name: "React", icon: <DiReact /> },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
            <div className="technology-card" id={tech.id} key={tech.id}>
              {tech.icon}
              <div className="technology-info">
                <h3>{tech.name}</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Quia praesentium atque quasi aspernatur 
                  doloremque provident eum dicta molestias 
                  quisquam, pariatur debitis. Accusamus quia, molestiae a 
                  facere itaque iure repellat sed!
                </p>
              
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}

export default TechnologiesContainer;