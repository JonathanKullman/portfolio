// components/CopyEmailButton.js
'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import confetti from "../../../../public/confetti.gif"
import Image from 'next/image';
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

const CopyEmailButton = () => {
  const [buttonText, setButtonText] = useState('Copy email address');
  const email = 'jontekull@gmail.com';
  const [bgColor, setBgColor] = useState('bg-purple-800');
  const [textColor, setTextColor] = useState('text-white');
  const [opacity, setOpacity] = useState('opacity-100');
  const [showGif, setShowGif] = useState(false); // State to manage GIF visibility

  const copyToClipboard = async () => {
    toast("Copied to clipboard.", {
        description: "Thanks for reaching out!",
      })
    try {
      await navigator.clipboard.writeText(email);
      setButtonText('Copied to clipboard.');
      setBgColor('bg-black'); 
      setTextColor('text-white'); 
      setOpacity('opacity-65'); 
      setShowGif(true); // Show GIF when email is copied
      setTimeout(() => {
        setShowGif(false); 
      }, 2000);
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  };

  return (
    <div className="relative inline-block">
    <Button
      onClick={copyToClipboard}
      className={`z-[100] relative flex rounded-sm font-mono text-white dark:hover:text-black dark:hover:bg-white opac ${bgColor} ${textColor} ${opacity}`}
    >
      {buttonText}
    </Button>
    {showGif && (
        <div className="absolute inset-0 z-[309] flex items-center justify-center">
        <Image 
          src={confetti} // Replace with the actual path to your GIF
          alt="Success"
          className="object-cover"
          layout="fill"
        />
      </div>
      )}
      <Toaster />
     </div>
  );
};

export default CopyEmailButton;
