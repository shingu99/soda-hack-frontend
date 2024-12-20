"use client";
import { starWarsQuotes } from "@/app/utils/starwarsquotes";
import { useState } from "react";
import { Button } from "../ui/button";

export default function Homepage() {    
  const [quote, setQuote] = useState("");
  const [fadeClass, setFadeClass] = useState('animate-fadeIn');

  const getRandomQuote = async() => {
    setFadeClass('animate-fadeOut');
    setTimeout(()=> {
        const randomIndex = Math.floor(Math.random() * starWarsQuotes.length);
        setQuote(starWarsQuotes[randomIndex]);
        setFadeClass('animate-fadeIn');
    }, 400)
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        {quote && <p className={`mt-4 font-orbitron text-center -translate-y-48 text-5xl text-gray-700 font-medium ${fadeClass}`}>{quote}</p>}
        <Button
          onClick={getRandomQuote}
          className="fixed transition ease-in-out hover:scale-105 hover:translate-y-0.8 duration-150"
        >
          Hello there
        </Button>
      </div>
    </>
  );
}
