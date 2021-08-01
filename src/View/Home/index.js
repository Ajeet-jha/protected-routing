import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getAllPosts } from "../../store/Actions/UserActions";
import Users from "../../components/Users";
import "../../App.css";

function Home() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    history.push("/signin");
  };
  return (
    <div className="App">
      <h1>This is a React-Redux Structure Demo App</h1>
      <h2>Welcome to the Homepage / Landing page</h2>
      <button className="btn btn-primary" onClick={handleLogout}>
        Logout
      </button>
      <Users />
    </div>
  );
}

export default Home;
