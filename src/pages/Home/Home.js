import { useSelector, useDispatch } from "react-redux";
import "./home.css";
import { useEffect } from "react";
import { fetchCharacters } from "../../redux/characterSlice/charactersServices";
import Masonry from "react-masonry-css";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const Home = () => {
  const characters = useSelector((state) => state.characters.items);
  const isLoading = useSelector((state) => state.characters.isLoading);
  const error = useSelector((state) => state.characters.error);
  const dispatch = useDispatch();
  console.log(characters);
  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);
  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loading />
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <h1>
          <Error message={error} />
        </h1>
      </div>
    );
  }
  return (
    <div>
      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {characters.map((item) => (
          <div key={item.char_id}>
            <img src={item.img} alt={item.name} className="character-img" />
            <h4>{item.name}</h4>
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default Home;
