import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <div className="work__card__div">
      <img src={item.image} alt="" className="work__img" />
      </div>
      <h3 className="work__title">{item.title}</h3>
      <span className="work__desc">{item.desc}</span>   
      {item.demo !== "" ? (
        <div className="work__buttom__div">
          <a href={item.github} className="work__button" target="_blank" rel="noopener noreferrer">
            Github
            <i className="bx bx-right-arrow-alt work__button-icon"></i>
          </a>
          <a href={item.demo} className="work__button" target="_blank" rel="noopener noreferrer">
            Demo
            <i className="bx bx-right-arrow-alt work__button-icon"></i>
          </a>
        </div>
      ) : (
          <div className="work__buttom__div">
        <a href={item.github} className="work__button" target="_blank" rel="noopener noreferrer">
        {item.category === "web" && "Github"}
        {item.category === "UIUX" && "Figma"}
        {item.category === "design" && "Dribbble"}
          <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
      </div>
      )}
    </div>
  );
};

export default WorkItems;
