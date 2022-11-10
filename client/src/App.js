import store from "./app/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Paths from "./containers/Paths";
import Courses from "./containers/Courses";
import HowTo from "./containers/HowTo";
import Login from "./containers/Login";
import Register from "./containers/Register";
import Home from "./containers/Home";
import Layout from "./Layout/Layout";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="courses" element={<>please subscribe first</>} />
            <Route path="list/courses" element={<Courses />} />
            <Route path="list/paths" element={<Paths />} />
            <Route path="list/howto" element={<HowTo />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
