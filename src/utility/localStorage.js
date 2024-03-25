import { toast } from "react-toastify";

const getStoredReadBook = () => {
  const storedReadBook = localStorage.getItem("read-books");
  if (storedReadBook) {
    return JSON.parse(storedReadBook);
  }
  return [];
};

const saveReadBook = (id) => {
  const storedReadBooks = getStoredReadBook();
  const exists = storedReadBooks.find((bookId) => bookId === id);
  if (!exists) {
    storedReadBooks.push(id);
    localStorage.setItem("read-books", JSON.stringify(storedReadBooks));
    toast.success("Book added to read list!");
  } else {
    toast.error("You have already read this book!");
  }
};

const getWishlistBook = () => {
  const storedWishlistBook = localStorage.getItem("wishlist-books");
  if (storedWishlistBook) {
    return JSON.parse(storedWishlistBook);
  }
  return [];
};

const saveWishlistBook = (id) => {
  const storedWishlistBooks = getWishlistBook();
  const existsWishlist = storedWishlistBooks.find((bookId) => bookId === id);
  const storedReadBooks = getStoredReadBook();
  const existsReadList = storedReadBooks.find((bookId) => bookId === id);
  if (!existsWishlist && !existsReadList) {
    storedWishlistBooks.push(id);
    localStorage.setItem("read-books", JSON.stringify(storedWishlistBooks));
    toast.success("Book added to wish list!");
  } else {
    toast.error("You have already read this book!");
  }
};

export { getStoredReadBook, saveReadBook, getWishlistBook, saveWishlistBook };
