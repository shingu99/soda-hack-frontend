import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function Contact() {
  const contacts = [
    {
      name: "Raghav Shankar",
      email: "raghavshankar99@gmail.com",
    },
    {
      name: "Ninad Nale",
      email: "ninadnale@gmail.com",
    },
    {
      name: "Viraj Sonaje",
      email: "viraj.sonaje@gmail.com",
    },
    {
      name: "Shikha Verma",
      email: "svermau@gmail.com",
    },
  ];
  return (
    <div className="flex justify-center h-screen items-center font-ubuntu mb-2">
      <div className="grid grid-cols-6 mt-2 gap-4 h-screen w-full max-w-xl p-2 border-2 border-gray-500 rounded-2xl bg-gradient-to-t from-purple-100 via-blue-200 to-blue-300">
        {contacts.map((item) => (
          <div
            key={item.name}
            className="col-span-6 flex flex-col items-center md:flex-row md:gap-6 p-4 border-2 border-blue-500 shadow-md rounded-lg"
          >
            <Label className="md:w-1/2 text-blue-700 text-xl font-medium">
              {(item.name).toUpperCase()}
            </Label>
            <p className="md:w-1/2 text-gray-500 text-xl">
              <a href={`mailto:${item.email}`}>{item.email}</a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
