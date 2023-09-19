import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="container" style={{display : "flex", justifyContent : "center", alignItems : "center", height : "100vh"}}>
      <div>
          <h1 className="mb-5 text-center">Oops!</h1>
          <p className="mb-5 text-center">Sorry, an unexpected error has occurred.</p>
          <p className="text-center">
            <i>{error.statusText || error.message}</i>
          </p>
      </div>

    </div>
  );
}