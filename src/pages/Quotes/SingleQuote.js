import "./single-quote.css";
export function SingleQuote({ item }) {
  return (
    <div className="quote">
      <q>{item.quote}</q> <strong>{item.author}</strong>
    </div>
  );
}
