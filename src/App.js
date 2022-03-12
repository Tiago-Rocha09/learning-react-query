import { Route, Routes } from 'react-router-dom';
import { BooksList } from './booksList/BooksList';
import { CreateBook } from './createBook';
import { UpdateBook } from './updateBook';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<BooksList />} />
        <Route path="update-book/:id" element={<UpdateBook />} />
        <Route path="create-book" element={<CreateBook />} />
      </Routes>
    </>
  );
}

export default App;
