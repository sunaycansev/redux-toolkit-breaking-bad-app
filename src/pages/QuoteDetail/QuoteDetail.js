import "./quote-detail.css";
import { Redirect, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { quotesSelector } from "../../redux/quotesSlice/quotesSlice";

const QuoteDetail = () => {
  const { quote_id } = useParams();
  const items = useSelector(quotesSelector);
  const quote = items.find(
    (item) => Number(item.quote_id) === Number(quote_id)
  );
  useEffect(() => {
    console.log(items);
    console.log("selected", quote);
  }, [items, quote_id]);

  if (!quote) {
    return <Redirect to="/quotes" />;
  }

  return (
    <div>
      <h1>Qute Detail</h1>
      <pre>{JSON.stringify(quote, null, 2)}</pre>
    </div>
  );
};

export default QuoteDetail;
