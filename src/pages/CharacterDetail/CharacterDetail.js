import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../../components/Loading";
import { prettyDOM } from "@testing-library/react";

const CharacterDetail = () => {
  const { char_id } = useParams();
  const [loading, setLoading] = useState(true);
  const [char, setChar] = useState(null);

  useEffect(() => {
    const response = axios
      .get(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters/${char_id}`)
      .then((res) => res.data)
      .then((data) => setChar(data[0]))
      .finally(() => setLoading(false));
  }, [char_id]);
  return (
    <div>
      {loading && (
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
      {char && (
        <div>
          <h1>{char.name}</h1>
          <img
            src={`${char.img}`}
            alt={`${char.name}`}
            style={{ width: "50%" }}
          />
        </div>
      )}
      {char && <pre>{JSON.stringify(char, null, 2)}</pre>}
    </div>
  );
};
export default CharacterDetail;
