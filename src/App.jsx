import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import TemplateSelector from "./components/TemplatesComponets/TemplateSelector/TemplateSelector";
import Form from "./components/Pages/Form/Form";
import PreviewPage from "./components/Pages/PreviewPage/PreviewPage";
import NotFound from "./components/StaticComponents/NotFound/NotFound";

function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <TemplateSelector /> },
        { path: "/form", element: <Form /> },
        { path: "/preview", element: <PreviewPage /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
