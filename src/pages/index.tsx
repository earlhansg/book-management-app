import Image from "next/image";
import { Inter } from "next/font/google";
import { BeakerIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from "react";


const inter = Inter({ subsets: ["latin"] });

type Books = {
  id: number;
  title: string;
  author: string;
  publishDate: Date;
  genre: string;
}

export default function Home() {
  const [books, setBooks] = useState<Books[]>([] as Books[])
  const [updateBook, setUpdateBook] = useState<{id: number}>({} as {id: number})

  useEffect(() => {
    const data = [
      {
        id: 1,
        title: "Solo Leveling",
        author: "Jason B",
        publishDate: new Date(6/12/1995),
        genre: "Horror"
      },
      {
        id: 2,
        title: "Jujutsu Kaisen",
        author: "Earl Eagles",
        publishDate: new Date(2/1/1995),
        genre: "Romance"
      },
      {
        id: 3,
        title: "Hunter X Hunter",
        author: "Yuhan D",
        publishDate: new Date(3/30/1972),
        genre: "Adventure"
      }
    ]
    setBooks(data);
  },[]);

  return (
    <div className={`min-h-screen ${inter.className}`}>
      <div className="m-5">
        <button className="flex pr-5 pl-5 pt-2 pb-2 bg-blue-500 rounded-md text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
              Add New
        </button>
      </div>
      <div className="">
        <table className="border-2 border-gray-300 m-5">
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
              {books.map((book) => (
                <tr key={book.id}>
                  <td className="pr-5 pl-5 pt-3 pb-3 border-2 border-gray-300">{book.title}</td>
                  <td className="pr-5 pl-5 pt-3 pb-3 border-2 border-gray-300">{book.author}</td>
                  <td className="pr-5 pl-5 pt-3 pb-3 border-2 border-gray-300">{book.publishDate.getDate()}</td>
                  <td className="pr-5 pl-5 pt-3 pb-3 border-2 border-gray-300">{book.genre}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
