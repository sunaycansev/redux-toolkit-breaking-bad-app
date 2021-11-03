import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCharacters } from "../../redux/characterSlice/charactersServices";
import Masonry from "react-masonry-css";

const Home = () => {
  const characters = useSelector((state) => state.characters.items);
  const dispatch = useDispatch();
  console.log(characters);
  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);
  return (
    <div>
      <h1>Characters</h1>
      {characters.map((item) => (
        <div key={item.char_id}>
          <img src={item.img} alt={item.name} />
        </div>
      ))}
    </div>
  );
};

export default Home;
