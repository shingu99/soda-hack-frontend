"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { PlusIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { sendImage } from "../../utils/sendImage";

export default function Profile() {
  const [file, setFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | undefined>();

  const images = [
    {
      src: "/colloseum.jpg",
      name: "Colloseum",
    },
    {
      src: "./zurich.jpg",
      name: "Zurich",
    },
    {
      src: "./europe.jpg",
      name: "Europe",
    },
    {
      src: "./salzburg.jpg",
      name: "Salzburg",
    },
    {
      src: "./trevi.jpg",
      name: "Trevi Fountain",
    },
    {
      src: "./louvre.jpg",
      name: "Louvre museum",
    },
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      const reader = new FileReader();
      reader.onload = () => {
        setFilePreview(reader.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please provide a file and a username.");
      return;
    }
    const formData = new FormData();
    formData.append("image", file);
    formData.append("username", "raghavShankar");
    // formData.forEach((value, key) => {
    //     console.log(`${key}:`, value);
    //   });
    await sendImage(formData);
  };

  return (
    <div className="flex justify-center h-screen items-center font-ubuntu mb-2">
      <div className="grid grid-cols-6 mt-2 gap-4 h-screen w-full max-w-xl p-2 border-2 border-gray-500 rounded-2xl bg-gradient-to-t from-purple-100 via-blue-200 to-blue-300">
        <div className="col-span-6 grid grid-cols-6 gap-2 items-center">
          <div className="col-span-3 justify-self-center">
            <Label className="font-rockSalt text-3xl text-black">
              @s.h.i.n.g.u
            </Label>
          </div>
          <div className="col-span-1 text-center text-blue-700">
            <Label>266</Label>
            <p>posts</p>
          </div>
          <div className="col-span-1 text-center text-blue-700">
            <Label>346</Label>
            <p>followers</p>
          </div>
          <div className="col-span-1 text-center text-blue-700">
            <Label>363</Label>
            <p>following</p>
          </div>
          <Separator className="col-span-6 border-2 border-double border-black -mt-16" />
        </div>
        <div className="col-span-3 -mt-12 flex flex-col items-center gap-1.5 p-4">
          <div className="relative mt-2 transition ease-in-out hover:scale-105 hover:translate-y-0.8 duration-150 ">
            <Input
              id="uploadPicture"
              type="file"
              onChange={handleFileChange}
              className="rounded-full w-36 h-36 opacity-0 absolute inset-0 cursor-pointer"
            />
            <div className="flex items-center justify-center rounded-full w-36 h-36 border-2 border-blue-700 text-center">
              {file ? (
                <img
                  src={filePreview}
                  alt="uploadedImage"
                  className="rounded-full w-32 h-32"
                />
              ) : (
                <PlusIcon className="w-16 h-16 text-blue-700" />
              )}
            </div>
          </div>{" "}
          {!file && (
            <Label className="mt-2 text-black" htmlFor="uploadPicture">
              Upload Profile
            </Label>
          )}
        </div>
        <div className="col-span-3 mt-6 flex flex-col items-center gap-1.5 p-4 rounded-md ">
          <Button
            onClick={handleUpload}
            className="mt-2 transition ease-in-out hover:scale-105 hover:translate-y-0.8 duration-150"
            disabled={!file}
          >
            Upload
          </Button>
        </div>

        <Separator className="col-span-6 border-2 border-double border-black -mt-16" />
        <div className="col-span-6 -mt-44 grid grid-cols-6 gap-x-2 gap-y-0.5">
          <div className="col-span-6 sm:-mt-8 flex justify-center items-center py-4 ">
            <h1 className="text-2xl font-bold text-black">POSTS</h1>
          </div>

          {images.map((img) => (
            <div key={img.name} className="col-span-2 -mt-5">
              <img
                src={img.src}
                alt={img.name}
                className="w-full rounded-lg h-36 transition ease-in-out hover:scale-105 hover:translate-y-0.8 duration-150"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
