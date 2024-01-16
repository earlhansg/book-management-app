import { Inter } from "next/font/google";
import { useState } from "react";

import { useQuery } from "react-query";

const inter = Inter({ subsets: ["latin"] });

export type Books = {
  id: number;
  title: string;
  author: string;
  publishedDate: Date;
  genre: string;
};

const fetchBooks= async (): Promise<Books[]> => {
  const response = await fetch('api/books')
  const data = await response.json()
  return data;
  // setBooks(data);
}

export default function Home() {
  // const [books, setBooks] = useState<Books[]>([] as Books[]);
  const [updateBook, setUpdateBook] = useState<Books>({} as Books);

  const {isLoading, data: booksList} = useQuery('books', fetchBooks, {
    select: (data) => data,
  })

  return (
    <div className={`min-h-screen ${inter.className}`}>
      <div className="m-5">
        <button className="flex pr-5 pl-5 pt-2 pb-2 bg-blue-500 rounded-md text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Add New
        </button>
      </div>
      <div className="">
        <table className="border-2 border-gray-300 m-5 w-100">
          <thead>
            <tr>
              <th className="p-5 border-2 border-gray-300">Title</th>
              <th className="p-5 border-2 border-gray-300">Author</th>
              <th className="p-5 border-2 border-gray-300">Published Date</th>
              <th className="p-5 border-2 border-gray-300">Genre</th>
              <th className="p-5 border-2 border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {booksList?.map((book) => (
              <tr key={book.id}>
                <td className="pr-5 pl-5 pt-3 pb-3 border-2 border-gray-300">
                  {book.id === updateBook.id ? (
                    <input
                      type="text"
                      className="pt-2 pb-2 pl-1 pr-1 rounded-md"
                      value={book.title}
                    />
                  ) : (
                    <>{book.title}</>
                  )}
                </td>
                <td className="pr-5 pl-5 pt-3 pb-3 border-2 border-gray-300">
                  {book.id === updateBook.id ? (
                    <input
                      type="text"
                      className="pt-2 pb-2 pl-1 pr-1 rounded-md"
                      value={book.author}
                    />
                  ) : (
                    <>{book.author}</>
                  )}
                </td>
                <td className="pr-5 pl-5 pt-3 pb-3 border-2 border-gray-300">
                  {book.id === updateBook.id ? (
                    <input
                      type="date"
                      className="pt-2 pb-2 pl-1 pr-1 rounded-md"
                    />
                  ) : (
                    <>
                      {new Date(book.publishedDate).toLocaleDateString(
                        "en-US",
                        {
                          month: "numeric",
                          day: "numeric",
                          year: "numeric",
                        }
                      )}
                    </>
                  )}
                </td>
                <td className="pr-5 pl-5 pt-3 pb-3 border-2 border-gray-300">
                  {book.id === updateBook.id ? (
                    <input
                      type="text"
                      className="pt-2 pb-2 pl-1 pr-1 rounded-md"
                      value={book.genre}
                    />
                  ) : (
                    <>{book.genre}</>
                  )}
                </td>

                <td className="pr-5 pl-5 pt-3 pb-3 border-2 border-gray-300 text-center">
                  {updateBook.id ? (
                    <>
                      <button
                        id="dropdownDefaultButton"
                        data-dropdown-toggle="dropdown"
                        type="button"
                        className="mr-2"
                        onClick={() => setUpdateBook({} as Books)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                          />
                        </svg>
                      </button>
                      <button
                        id="dropdownDefaultButton"
                        data-dropdown-toggle="dropdown"
                        type="button"
                        onClick={() => setUpdateBook({} as Books)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        id="dropdownDefaultButton"
                        data-dropdown-toggle="dropdown"
                        type="button"
                        className="mr-2"
                        onClick={() => setUpdateBook(book)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                          />
                        </svg>
                      </button>
                      <button
                        id="dropdownDefaultButton"
                        data-dropdown-toggle="dropdown"
                        type="button"
                        className="mr-2"
                        onClick={() => setUpdateBook(book)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                          />
                        </svg>
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
