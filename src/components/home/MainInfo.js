import React from 'react'
import proImage from "../../assets/ProImg.png";
function MainInfo() {
  return (
    <header className="bg-white items-center shadow mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8 flex -space-x-2">
    <img
      className="inline-block h-32 w-32 rounded-full ring-2 ring-white ml-8"
      src={proImage}
      alt="عکس پروفایل"
    />
    <h1 className="text-3xl font-bold tracking-tight text-gray-900">
      {"دکتر محمد تقی تقوی فرد"}
    </h1>
  </header>
  )
}

export default MainInfo