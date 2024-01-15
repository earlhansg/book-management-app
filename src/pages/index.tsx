import Image from "next/image";
import { Inter } from "next/font/google";
import { BeakerIcon } from '@heroicons/react/24/solid'
import { useState } from "react";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [updateUser, setUpdateUser] = useState<{id: number}>({} as {id: number})
  return (
    <div className={`min-h-screen ${inter.className}`}>
      <div className="m-5">
      {/* <div className="flex items-center justify-center text-white"> */}
        <button className="flex pr-5 pl-5 pt-2 pb-2 bg-blue-500 rounded-md text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
              Add New
        </button>
      </div>
      {/* </div> */}
      {/* <div className="flex items-center justify-center"> */}
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
            <tr>
              <td className="pr-5 pl-5 pt-3 pb-3 border-2 border-gray-300">Solo Leveling</td>
              <td className="pr-5 pl-5 pt-3 pb-3 border-2 border-gray-300">Jason B</td>
              <td className="pr-5 pl-5 pt-3 pb-3 border-2 border-gray-300">July 12, 1995</td>
              <td className="pr-5 pl-5 pt-3 pb-3 border-2 border-gray-300">Horror</td>
            </tr>
            <tr>
              <td className="pr-5 pl-5 pt-3 pb-3 border-2 border-gray-300">Jujutsu Kaisen</td>
              <td className="pr-5 pl-5 pt-3 pb-3 border-2 border-gray-300">Earl Eagles</td>
              <td className="pr-5 pl-5 pt-3 pb-3 border-2 border-gray-300">February 1, 1995</td>
              <td className="pr-5 pl-5 pt-3 pb-3 border-2 border-gray-300">Romance</td>
            </tr>
            <tr>
              <td className="pr-5 pl-5 pt-3 pb-3 border-2 border-gray-300">Hunter X Hunter</td>
              <td className="pr-5 pl-5 pt-3 pb-3 border-2 border-gray-300">Yuhan D</td>
              <td className="pr-5 pl-5 pt-3 pb-3 border-2 border-gray-300">March 30, 1972</td>
              <td className="pr-5 pl-5 pt-3 pb-3 border-2 border-gray-300">Adventure</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
