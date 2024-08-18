import React, { useEffect, useState } from "react";
import { getProjects } from "../../services/Api";
import WorksItem from "./WorksItem";
// import { matchMedia } from "../../helpers/matchMedia";

const projectFilters = [
 { name: 'all' },
 { name: 'personal' },
 { name: 'team' },
];

const Works = () => {
  const [filter, setFilter] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);

  // const [projects, setProjects] = useState(() => {
  //   return JSON.parse(localStorage.getItem("projects") ?? []);
  // });

  const [visibleProjects, setVisibleProjects] = useState([]);
  const [active, setActive] = useState(0);
  //   const [page, setPage] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    getProjects()
      .then((res) => {
        setProjects(res);
        setVisibleProjects(res);
        setIsLoaded(false);
      })
      .catch((e) => console.log(e.message));
  }, []);

  useEffect(() => {
    if (filter.name === "all") {
      setVisibleProjects(projects);
    } else {
      setVisibleProjects(
        projects.filter(
          (item) => item.category.toLowerCase() === filter.name.toLowerCase()
        )
      );
    }
  }, [filter, projects]);

  useEffect(() => {
    window.localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  const handleClick = (e, index) => {
    setFilter({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <>
      <div className="work__filters">
        {projectFilters.map((i, index) => {
          return (
            <span
              onClick={(e) => handleClick(e, index)}
              key={index}
              //   className="work__item"
              className={`${active === index ? "active-work" : ""} work__item`}
            >
              {i.name}
            </span>
          );
        })}
      </div>

      <div className="work__container container grid">
        {visibleProjects.map((item) => {
          return <WorksItem item={item} key={item.id} isLoaded={isLoaded} />;
        })}
      </div>
    </>
  );
};

export default Works;
