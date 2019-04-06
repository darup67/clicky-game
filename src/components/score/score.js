import React from "react";
import "./score.css";

const Score = props => ( <div className = "gamescore">
    <h3 className = "score" > Your Score { props.total } </h3>   <
    <h3 className = "status" > { props.status } </h3> </div>
);

export default score;