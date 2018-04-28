import React from "react";
import "./ArticleCard.css";

const ArticleCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div class="col-md-6">
      <div class="card box-shadow h-md-250">
        <div class="cardBody">
          <h3>{props.title}</h3>
           <div class="text-muted">{props.date}</div>
           <a href={props.link}>Continue reading</a>
        </div>
        </div>
      </div>
    </div>
);

export default ArticleCard;
