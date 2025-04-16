import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import MainLayout from "./layout/main-layout"
import Homepage from "./pages/homepage"

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<Homepage/>}/>
      </Route>
    )
  )
  return (
    <div>
      <RouterProvider router={routes}/>
    </div>
  )
}

export default App