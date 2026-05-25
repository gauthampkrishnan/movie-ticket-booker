import { useRouteError } from "react-router-dom";

export default function ErrorFunc() {
  const error = useRouteError();
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1 className="mt-3">
            <p>Sorry error</p>
            <p>
              <em>{error.statusText || error.message}</em>
            </p>
          </h1>
        </div>
      </div>
    </div>
  );
}
