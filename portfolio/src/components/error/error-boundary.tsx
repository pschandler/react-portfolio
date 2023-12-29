import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export interface IRouteError {
  status: number;
}

function ErrorBoundaryComponent() {
  const error = useRouteError() as IRouteError;
  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <div>Resource not found.</div>;
    }

    if (error.status === 401) {
      return <div>Unauthorized</div>;
    }
    return <div>Internal server error.</div>;
  }
}

export const ErrorBoundary = ErrorBoundaryComponent;
