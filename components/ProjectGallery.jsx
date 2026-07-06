"use client";

import { projects } from "@/data/projects";
import { useState } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, X, ExternalLink } from "lucide-react";

export default function ProjectGallery() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="min-h-screen bg-[#fafafa] px-8 md:px-24 pb-8 md:pb-24 pt-0 font-sans text-zinc-900">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tight mb-3">
          Work I've contributed to.
        </h2>

        <p className="text-base text-gray-500 mb-12 max-w-2xl">
          Real products built with product teams for real clients — not personal
          projects.
        </p>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="flex flex-col group cursor-pointer"
            >
              {/* Image Container with Hover Overlay */}
              <div className="relative aspect-video bg-zinc-200 rounded-xl overflow-hidden mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-zinc-900/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 bg-white/20 p-3 rounded-full backdrop-blur-md">
                    <ArrowUpRight
                      className="w-6 h-6 text-white"
                      strokeWidth={2}
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center pr-2">
                <h3 className="font-semibold text-lg 2xl:text-2xl tracking-tight text-zinc-900">
                  {project.title}
                </h3>
                <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 transition-colors transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Drawer Overlay */}
      {activeProject && (
        <div
          className="fixed inset-0 bg-zinc-900/20 backdrop-blur-sm z-40 transition-opacity cursor-pointer"
          onClick={() => setActiveProject(null)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[450px] bg-white shadow-2xl z-50 transform transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col ${
          activeProject ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {activeProject && (
          <div className="h-full overflow-y-auto p-8 flex flex-col">
            {/* Drawer Header */}
            <div className="flex justify-between items-start mb-10">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 leading-tight">
                {activeProject.title}
              </h2>
              <button
                onClick={() => setActiveProject(null)}
                className="p-2 hover:bg-zinc-100 rounded-full transition-colors cursor-pointer"
              >
                <X className="w-5 h-5 text-zinc-500" />
              </button>
            </div>

            {/* Live Link */}
            <div className="flex mb-10">
              {activeProject.demo && (
                <a
                  href={activeProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-zinc-900 text-white text-sm font-medium py-3.5 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-zinc-800 transition-colors shadow-sm cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4" /> Visit Live Site
                </a>
              )}
            </div>

            {/* Description */}
            <div className="space-y-4 mb-10">
              <h4 className="font-semibold text-sm text-zinc-900 uppercase tracking-wider">
                About the Role
              </h4>
              <p className="text-zinc-600 text-sm leading-relaxed">
                <span className="font-medium text-zinc-900">
                  {activeProject.role}
                </span>{" "}
                — {activeProject.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="space-y-4 mt-auto border-t border-zinc-100 pt-8">
              <h4 className="font-semibold text-sm text-zinc-900 uppercase tracking-wider">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeProject.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-zinc-100 text-zinc-700 text-xs font-medium px-3.5 py-1.5 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
