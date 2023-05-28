
import { useSelector } from "react-redux";
import Logout from "../components/User/Logout";

const Home = () => {
  const user = useSelector((state) => state.auth.user);

  // useEffect(() => {
  //   const getUserDetails = async () => {
  //     try {
  //       const response = await axios.post(`http://localhost:3001/auth/getUser/${user.id}`);

  //       dispatch(setUser(response.data.user));
  //       dispatch(setTokens(response.data.tokens));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   if (!user) {
  //     getUserDetails();
  //   }
  // }, [user, dispatch]);

  const handleUpdate = () => {
    // Update logic goes here
  };

  return (
    <div>
      {user ? <h2>Hello, {user.firstName}</h2> : <h2>Hello, User</h2>}

      <button onClick={handleUpdate}>Update</button>
      <Logout />
    </div>
  );
};

export default Home;
