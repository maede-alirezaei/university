import React, { useRef } from "react";
import { useState } from "react";

function NewProjectFrom(props) {
  const [isValidated, setIsValidated] = useState(false);
  const nameInputRef = useRef();
  const lastNameInputRef = useRef();
  const universityInputRef = useRef();
  const majorInputRef = useRef();
  const fileInputRef = useRef();
  function submitHandler(event) {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const enteredUniversity = universityInputRef.current.value;
    const enteredMajor = majorInputRef.current.value;
    const enteredFile = fileInputRef.current.value;
    const project = {
      studentName: enteredName,
      studentLastName: enteredLastName,
      universityName: enteredUniversity,
      studentMajor: enteredMajor,
      studentFile: enteredFile,
    };
    props.onAddProject(project)
  }
  return (
    <form className="p-32" onSubmit={submitHandler}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            نام
          </label>
          <input
            ref={nameInputRef}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            required
          />
          {isValidated && (
            <p className="text-red-500 text-xs italic">
              لطفا نام خود را وارد کنید.
            </p>
          )}
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-last-name"
          >
            نام خانوادگی
          </label>
          <input
            ref={lastNameInputRef}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:bg-white"
            id="grid-last-name"
            type="text"
            required
          />
          {isValidated && (
            <p className="text-red-500 text-xs italic">
              لطفا نام خانوادگی خود را وارد کنید.
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            دانشگاه
          </label>
          <input
            ref={universityInputRef}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            required
          />
          {isValidated && (
            <p className="text-red-500 text-xs italic">
              لطفااسم انشگاه را وارد کنید.
            </p>
          )}
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-last-name"
          >
            رشته
          </label>
          <input
            ref={majorInputRef}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:bg-white"
            id="grid-last-name"
            type="text"
            required
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <div>
            <label htmlFor="files" className="btn">
              {"فایل"}
            </label>
            <input
              ref={fileInputRef}
              id="files"
              className="visibility:hidden;"
              type="file"
            />
          </div>

          {isValidated && (
            <p className="text-red-500 text-xs italic">
              لطفا فایل خود را وارد کنید.
            </p>
          )}
        </div>
      </div>
      <div className="flex">
        <button className="bg-gray-700 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-auto rounded">
          {"ارسال"}
        </button>
      </div>
    </form>
  );
}

export default NewProjectFrom;
