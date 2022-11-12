import React, { useRef } from "react";
import { useState } from "react";

function NewProjectFrom() {
  const [isValidated, setIsValidated] = useState(false);
  const nameInputRef = useRef();
  function submitHandler(event) {
    event.preventDefault();
  }
  return (
    <form class="p-32" onSubmit={submitHandler}>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            نام
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            
            required
          />
          {isValidated && (
            <p class="text-red-500 text-xs italic">
              لطفا نام خود را وارد کنید.
            </p>
          )}
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            نام خانوادگی
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:bg-white"
            id="grid-last-name"
            type="text"
            required
          />
          {isValidated && (
            <p class="text-red-500 text-xs italic">
              لطفا نام خانوادگی خود را وارد کنید.
            </p>
          )}
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            دانشگاه
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            required
          />
          {isValidated && (
            <p class="text-red-500 text-xs italic">
              لطفااسم انشگاه را وارد کنید.
            </p>
          )}
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            رشته
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:bg-white"
            id="grid-last-name"
            type="text"
            required
          />
        </div>
        <div class="w-full md:w-1/2 px-3">
          <div>
            <label for="files" class="btn">
              Select Image
            </label>
            <input id="files" className="visibility:hidden;" type="file" />
          </div>

          {isValidated && (
            <p class="text-red-500 text-xs italic">
              لطفا فایل خود را وارد کنید.
            </p>
          )}
        </div>
      </div>
      <div className="flex">
        <button class="bg-gray-700 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-auto rounded">
          {"ارسال"}
        </button>
      </div>
    </form>
  );
}

export default NewProjectFrom;
