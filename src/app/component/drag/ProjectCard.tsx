"use client";

import React from "react";
import Image from "next/image";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="flex justify-center  bg-transparent border border-white rounded-lg shadow text-white hover:text-Gray   hover:bg-white transition-all">
      <div className="px-10 py-16 flex flex-col">
        <h5 className="flex-auto mb-2 text-3xl font-bold ">{project.title}</h5>
        <a href="#">
          <h2 className="text-center font-semibold hover:text-blue-700">
            Click Me!
          </h2>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
