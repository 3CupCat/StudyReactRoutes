import { Link, NavLink, Route, Routes, useLocation, useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import BookList from "./pages/BookList";
import Book from "./pages/Book";
import NewBook from "./pages/NewBook";
import NotFound from "./pages/NotFound";
import BookLayout from "./BookLayout";
import BookRoutes from "./BookRoutes";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./style.css";

function App() {
  const location = useLocation();
  return (
    <>
      {/* <Routes location="/books">
      // location ==> 判斷我們在某個頁面
        <Route path='/books' element={<h1>Extra Content</h1>} />
        // 僅在某個頁面時，顯示這段element
      </Routes> */}
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/books">Books</NavLink>
          </li>
        </ul>
      </nav>
      {location.state}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/*" element={<BookRoutes />} />
        {/* <Route path='books' element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=':id' element={<Book />} />
          <Route path='new' element={<NewBook />} />
        </Route> */}
        {/* <Route path='/books' element={<BookList />} />
        <Route path='/books/:id' element={<Book />} />
        <Route path='/books/new' element={<NewBook />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
