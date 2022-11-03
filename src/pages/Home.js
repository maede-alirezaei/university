import React from "react";
import proImage from "../assets/ProImg.png";
import uniImage from "../assets/UniImg.jpg";
import Card from "../components/ui/Card";

export default function Home() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full">
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
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <Card>
              <div className="px-4 py-6 sm:px-0">
                {" عضو هیئت علمی دانشگاه علامه طباطبایی"}
              </div>
              <img
                className="p-1 bg-white border rounded max-w-sm"
                src={uniImage}
                alt="عکس دانشگاه"
              />
            </Card>
            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  );
}
