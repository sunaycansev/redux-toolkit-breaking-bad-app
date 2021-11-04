import "./single-quote.css";
import { Link } from "react-router-dom";

export function SingleQuote({ item }) {
  return (
    <div className="quote">
      <Link to={`/quotes/${item.quote_id}`}>
        <q>{item.quote}</q>
      </Link>

      <strong>{item.author}</strong>
    </div>
  );
}
