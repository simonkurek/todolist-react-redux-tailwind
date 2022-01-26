import React from "react";

type Props = {
  text: string;
};

const Button = ({ text }: Props) => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r h-16 w-60">
      {text}
    </button>
  );
};

export default Button;
