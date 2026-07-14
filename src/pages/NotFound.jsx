import { Link } from "react-router-dom";

export const NotFound = () => (
  <main className="not-found">
    <p className="eyebrow">404</p>
    <h1>This path doesn’t lead anywhere.</h1>
    <Link className="button button-primary" to="/">Return home</Link>
  </main>
);
