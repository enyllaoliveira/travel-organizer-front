
import { CreateTripPage } from "./pages/create-trip";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TripDetailsDate from "./pages/trip-details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateTripPage />,
  },
  {
    path: "/trips/:tripId",
    element: <TripDetailsDate />,
  }
]);

export function App() {
  return <RouterProvider router={router}/>;
}
// h-screen flex items-center justify-center enylla

