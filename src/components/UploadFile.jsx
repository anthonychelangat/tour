"use client";
import { handleUpload } from "@/lib/data";
import Image from "next/image";
import { useState } from "react";
import { FaPen } from "react-icons/fa";

const UploadFile = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = e => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  return (
    <div>
      <form className="w-[5rem]" action={handleUpload}>
        <div className="relative">
          <Image
            className="w-[4rem] aspect-square rounded-[50%]"
            src={"/elise.jpg"}
            width={24}
            height={24}
          />
          <label
            className="text-blue-600 absolute bottom-0 right-0 hover:text-blue-900"
            htmlFor="file">
            <FaPen className="ml-4 mb-1 text-2xl" />
          </label>
          <input
            className="hidden"
            type="file"
            name="file"
            id="file"
            onChange={handleFileChange}
          />
        </div>
      </form>
    </div>
  );
};
export default UploadFile;
