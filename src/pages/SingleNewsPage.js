import React from "react";
import { useParams } from "react-router-dom";

const SingleNews = () => {
  const { id } = useParams();

  return (
    <div className="">
      <h2>single news</h2>
      <p>{id}</p>
    </div>
  );
};

export default SingleNews;
