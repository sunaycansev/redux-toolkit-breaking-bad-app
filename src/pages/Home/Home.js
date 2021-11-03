import { useSelector } from "react-redux";
import { charactersSlice } from "../../redux/characterSlice/charactersSlice";

const Home = () => {
  const data = useSelector((state) => state.characters.items);
  console.log(data);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
