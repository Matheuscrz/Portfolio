"use client";
import { useEffect, useState } from "react";
import axios from "axios";

interface GitHubProject {
  id: number;
  name: string;
  description: string;
  html_url: string;
  readmeContent?: string;
}

async function getGitHubProjects(username: string): Promise<GitHubProject[]> {
  const response = await axios.get(
    `https://api.github.com/users/${username}/repos?type=owner`
  );
  const projects = await Promise.all(
    response.data.map(async (project: GitHubProject) => {
      const readmeResponse = await axios.get(`${project.html_url}/readme`);
      const readmeContent = Buffer.from(
        readmeResponse.data.content,
        "base64"
      ).toString("utf-8");
      return { ...project, readmeContent };
    })
  );
  return projects;
}

interface GitHubProjectsProps {
  username: string;
}

function useGitHubProjects({ username }: GitHubProjectsProps) {
  const [projects, setProjects] = useState<GitHubProject[]>(
    [] as GitHubProject[]
  );

  useEffect(() => {
    getGitHubProjects(username).then((data) => setProjects(data));
  }, [username]);

  return projects;
}

function ProjectsSection() {
  const projects = useGitHubProjects({ username: "Matheuscrz" });

  return (
    <section
      id="projects"
      className="container flex flex-col gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Projetos
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-4 border border-gray-200 rounded-md shadow-md"
            >
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <p className="text-gray-600">{project.description}</p>
              <a
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:underline mt-2 inline-block"
              >
                Ver no GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
