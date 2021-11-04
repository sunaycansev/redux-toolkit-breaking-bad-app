import { useSelector, useDispatch } from "react-redux";
import "./home.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { fetchCharacters } from "../../redux/characterSlice/charactersServices";
import Masonry from "react-masonry-css";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const Home = () => {
  const characters = useSelector((state) => state.characters.items);
  const status = useSelector((state) => state.characters.status);
  const error = useSelector((state) => state.characters.error);
  const nextPage = useSelector((state) => state.characters.page);
  const hasNextPage = useSelector((state) => state.characters.hasNextPage);
  const dispatch = useDispatch();
  console.log(characters);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCharacters());
    }
  }, [dispatch, status]);

  if (status === "failed") {
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
            <Link to={`/character/${item.char_id}`}>
              <img src={item.img} alt={item.name} className="character-img" />
              <h4>{item.name}</h4>
            </Link>
          </div>
        ))}
      </Masonry>
      {status === "loading" && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loading />
        </div>
      )}
      {hasNextPage && status !== "loading" && (
        <div className="load-more-btn">
          <button onClick={() => dispatch(fetchCharacters(nextPage))}>
            load more ({nextPage})
          </button>
        </div>
      )}
      {!hasNextPage && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          There is Nothing to be shown.
        </div>
      )}
    </div>
  );
};

export default Home;
