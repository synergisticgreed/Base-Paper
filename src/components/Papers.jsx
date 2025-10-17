import React from "react";
import { folders } from "../data/folders";
import FolderCard from "../components/FolderCard";

const Papers = () => {
  return (
    <div className="container">
      <h1 className="text-3xl font-bold mb-6 text-white">Past Year Papers</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {folders.map((folder) => (
          <FolderCard key={folder.id} folder={folder} />
        ))}
      </div>
    </div>
  );
};

export default Papers;
