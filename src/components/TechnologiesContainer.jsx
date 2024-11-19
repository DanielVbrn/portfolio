import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiPostgresql,
  DiReact,
  DiGit,
  DiDocker,
  DiBootstrap
} from "react-icons/di"

import "../styles/components/technologiescontainer.sass"

const technologies = [
  { 
    id: "html", 
    name: "HTML5", 
    icon: <DiHtml5 />, 
    text:"Já desenvolvi projetos com HTML5 como construção de landing pages e blogs, e tenho contato com essa tecnologia há mais de 2 anos."},
  { 
    id: "css", 
    name: "CSS3", 
    icon: <DiCss3 />,
    text:"Já desenvolvi projetos com CSS3 como construção de estilização de páginas, aplicativos e blogs, e tenho contato com essa tecnologia há mais de 2 anos."
  },
  { 
    id: "js", 
    name: "JavaScript", 
    icon: <DiJsBadge />,
    text:"Já desenvolvi projetos com JavaScript, sendo essa a linguagem que aprendi lógica de progração, e tenho contato com essa linguagem a quase 3 anos."
  },
  { 
    id: "node", 
    name: "Node.js", 
    icon: <DiNodejsSmall /> ,
    text:"Já desenvolvi projetos com nodejs, projetos voltados para o backend de aplicações, como criação de apis para serviços web."
  },
  { 
    id: "postgresql", 
    name: "Postgresql", 
    icon: <DiPostgresql />,
    text:"Já desenvolvi projetos com PostgreSQL, sendo o banco que mais utilizei para projetos, fazendo consultas e executando ações no banco como inserts, updates, deletes. Além disso inplementei sistemas a nível de banco de dados usando triggers e funções."

  },
  { 
    id: "react", 
    name: "React", 
    icon: <DiReact />,
    text:"Já desenvolvi projetos em Reactjs, sendo o framework que mais utilizei para frontend com javascript e typescript."

  },
  { 
    id: "git", 
    name: "Git", 
    icon: <DiGit />,
    text:"Já desenvolvi projetos com Git para controle de versão, e desenvolvi aplicações junto a minha equipe."

  },
  {
    id:"docker",
    name: "Docker",
    icon:<DiDocker/>,
    text:"Já desenvolvi projetos com Docker para deploy de aplicações e criação de containers."
  },
  {
    id:"bootstrap",
    name:"BootStrap",
    icon:<DiBootstrap/>,
    text:"Implementei landing pages e aplicações responsivas completas usando na estilização BootStrap."
  }

];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
              <div className="technology-info">
                <h2>
                {tech.icon}
                </h2>
                <h3>{tech.name}</h3>
                <p>{tech.text}</p>
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}

export default TechnologiesContainer;