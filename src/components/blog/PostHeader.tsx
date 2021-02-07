import React from "react";

type Props = {
  date: string;
  title: string;
  description: string;
};

const PostHeader: React.FC<Props> = ({ date, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <p className="text-sm text-gray-700">{date}</p>
      <p className="text-sm text-gray-700">By Sunny Golovine</p>
      <h1 className="text-3xl font-semibold py-4">{title}</h1>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
};

export default PostHeader;
