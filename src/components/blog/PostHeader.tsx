import React from "react";

type Props = {
  date: string;
  title: string;
  description: string;
};

const PostHeader: React.FC<Props> = ({ date, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center pt-6">
      <h1 className="text-3xl font-semibold py-4">{title}</h1>
      <p className="text-gray-700">{date}</p>
    </div>
  );
};

export default PostHeader;
