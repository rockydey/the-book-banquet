import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";
import { getStoredReadBook } from "../../../utility/localStorage";
import "./PagesToRead.css";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const PagesToRead = () => {
  const books = useLoaderData();
  const [readBooks, setReadBooks] = useState([]);
  useEffect(() => {
    const storedReadBooksId = getStoredReadBook();
    if (books.length > 0) {
      const booksRead = [];
      for (const id of storedReadBooksId) {
        const book = books.find((book) => book.bookId === id);
        if (book) {
          booksRead.push(book);
        }
      }
      setReadBooks(booksRead);
    }
  }, []);

  // Pie Chart Data
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke='none' fill={fill} />;
  };

  return (
    <div className='max-w-screen-xl mx-auto'>
      <Header />
      <div className='bg-[#13131308] mt-9 py-10 rounded-3xl'>
        <ResponsiveContainer className='mx-auto' width='98%' height={540}>
          <BarChart
            data={readBooks}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='bookName' />
            <YAxis />
            <Bar
              dataKey='totalPages'
              fill='#8884d8'
              shape={<TriangleBar />}
              label={{ position: "top" }}>
              {readBooks.map((readBook, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PagesToRead;
