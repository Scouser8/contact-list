import { AppDispatch, RootState } from "../../types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";
import { getUsers } from "../../store/usersSlice";
import ContactsList from "../ContactsList";

const INITIAL_NUMBER_OF_USERS = 8;

const Home = () => {
  const { users } = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // So, this could be simply called directly with Axios, & actually using Redux on this App is an overkill,
    // however I liked to use it to show the ability of doing so that could be used later to use for example
    // Master Data that will be needed all over the application on scaling the project.
    if (!users?.length) {
      dispatch(
        getUsers({ numberOfUsers: INITIAL_NUMBER_OF_USERS, nationality: "us" })
      );
    }
  }, []);

  return users?.length ? <ContactsList /> : <Loader />;
};

export default Home;
