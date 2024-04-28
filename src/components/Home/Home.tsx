import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../types";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Loader from "../Loader";
import { getUsers } from "../../store/usersSlice";

const Home = () => {
  const { users, error } = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch<AppDispatch>();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // So, this could be simply called directly with Axios, & actually using Redux on this App is an overkill,
    // however I liked to use it to show the ability of doing so that could be used later to use for example
    // Master Data that will be needed all over the application on scaling the project.
    dispatch(getUsers(8))
      .unwrap()
      .then(() => {
        setIsLoading(false);
      });
  }, []);
  return !isLoading ? (
    <div style={{ height: "100%", display: "flex" }}>Welcome to contacts</div>
  ) : (
    <Loader />
  );
};

export default Home;
