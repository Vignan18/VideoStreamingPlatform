import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Head from "./components/Head";
import MainContainer from "./components/Maincontainer";
import WatchPage from "./components/Watchpage";
import store from "./utils/store";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Head />
        <Body />
      </div>),
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>

        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
