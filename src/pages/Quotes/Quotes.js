import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllQuotes } from "../../redux/quotesSlice/quotesServices";
import {
  errorSelector,
  quotesSelector,
  statusSelector,
} from "../../redux/quotesSlice/quotesSlice";
import Error from "../../components/Error";
import Loading from "../../components/Loading";

import { SingleQuote } from "./SingleQuote";
import { Link } from "react-router-dom";

const Quotes = () => {
  const data = useSelector(quotesSelector);
  const status = useSelector(statusSelector);
  const error = useSelector(errorSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchAllQuotes());
    }
  }, [dispatch, status]);
  console.log(data);
  if (error) {
    return <Error message={error} />;
  }

  return (
    <div>
      <h1>Quotes</h1>
      {status === "loading" && <Loading />}
      {status === "succeeded" &&
        data.map((item) => (
          <div
            key={item.quote_id}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SingleQuote key={item.quote_id} item={item} />
          </div>
        ))}
    </div>
  );
};
export default Quotes;
