import { useRouteError } from "react-router-dom";

const Error = ({}) => {
  const error: any = useRouteError();
  return (
    <div className="text-center">
      <br />
      <div className="flex justify-center">
        <a href="/">
          <img src="/404.png" />
        </a>
      </div>
      <br />
      <h2>{error.message ? error.message : "Page not found"}</h2>
    </div>
  );
};

export default Error;
