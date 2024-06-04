"use client";

import React, { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  arrayMove,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard"; // Import the ProjectCard component

interface Project {
  id: any;
  title: string;
}

interface CardGridProps {
  sidebarVisible: boolean;
}

const initialProjects: Project[] = [
  {
    id: 1,
    title: "Programming",
  },
  {
    id: 2,
    title: "Designs",
  },
];

const SortableItem = ({
  id,
  project,
}: {
  id: number | string;
  project: Project;
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <motion.div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="relative"
      layout
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      <ProjectCard project={project} />
    </motion.div>
  );
};

const Placeholder = ({ id }: { id: number | string }) => {
  const { setNodeRef } = useSortable({ id });
  return (
    <motion.div
      ref={setNodeRef}
      className="border border-dashed border-white border-opacity-5 h-40 flex items-center justify-center text-white"
      layout
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    />
  );
};

const CardGrid: React.FC<CardGridProps> = ({ sidebarVisible }) => {
  const [items, setItems] = useState<Project[]>([
    ...initialProjects,
    { id: "placeholder-1", title: "Placeholder" },
    { id: "placeholder-2", title: "Placeholder" },
    { id: "placeholder-3", title: "Placeholder" },
    { id: "placeholder-4", title: "Placeholder" },
    { id: "placeholder-5", title: "Placeholder" },
    { id: "placeholder-6", title: "Placeholder" },
    { id: "placeholder-7", title: "Placeholder" },
    { id: "placeholder-8", title: "Placeholder" },
    { id: "placeholder-9", title: "Placeholder" },
    { id: "placeholder-10", title: "Placeholder" },
    { id: "placeholder-11", title: "Placeholder" },
    { id: "placeholder-12", title: "Placeholder" },
    { id: "placeholder-13", title: "Placeholder" },
  ]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active && over && active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items} strategy={rectSortingStrategy}>
        <div className="w-full h-full overflow-hidden p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {items.map((item) =>
              item.title === "Placeholder" ? (
                <Placeholder key={item.id} id={item.id} />
              ) : (
                <SortableItem key={item.id} id={item.id} project={item} />
              )
            )}
          </div>
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default CardGrid;
