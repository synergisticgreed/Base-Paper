import React from "react";

const FolderCard = ({ folder }) => {
  return (
    <a
      href={folder.link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#1b1b1d] border border-[#2b2b2e] hover:border-[#60a5fa] transition-all rounded-2xl p-6 shadow-md hover:shadow-lg flex flex-col justify-between"
    >
      <div>
        <h2 className="text-xl font-semibold text-white mb-2">{folder.name}</h2>
        <p className="text-gray-400 text-sm">{folder.description}</p>
      </div>
      <span className="text-[#60a5fa] mt-4 text-sm">Open Folder →</span>
    </a>
  );
};

export default FolderCard;
