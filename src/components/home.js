import React, { useContext } from "react";
import { AppContext } from "../context/appContext";

const Home = () => {
  const { data } = useContext(AppContext);
  //TODO --- Query to fetch details of user- username or email from db
  return (
    <>
      <h1>{data.user || "No user"}</h1>
    </>
  );
};

export default Home;
