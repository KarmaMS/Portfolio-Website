import pythonLogo from "../assets/python.png"
import cLogo from "../assets/c.png"
import tsLogo from "../assets/ts.png"
import reactLogo from "../assets/react.png"
import sqlLogo from "../assets/mysql.png"
import tailwindLogo from "../assets/tailwind.png"
import gitLogo from "../assets/git.png"
import awsLogo from "../assets/aws.png"
import azureLogo from "../assets/azure.png"
import prismaLogo from "../assets/prisma.png"
import dockerLogo from "../assets/docker.png"
import jsonLogo from "../assets/json.png"
import linuxLogo from "../assets/linux.png"
import LatexLogo from "../assets/tex.png"
import nodeLogo from "../assets/nodejs.png"

export const TechStack = () => {
    const technologies = [
        { name: "Python", description: "Security Engineering & Automation", src: pythonLogo },
        { name: "C / C++", description: "Systems & Network Programming", src: cLogo },
        { name: "TypeScript", description: "Typed Frontend Development", src: tsLogo },
        { name: "React", description: "Frontend Architecture", src: reactLogo },
        { name: "Tailwind CSS", description: "UI Systems", src: tailwindLogo },
        { name: "MySQL", description: "Relational Databases", src: sqlLogo },
        { name: "Node.js", description: "App Tooling & APIs", src: nodeLogo },
        { name: "Git", description: "Version Control", src: gitLogo },
        { name: "AWS", description: "Cloud Security", src: awsLogo },
        { name: "Azure", description: "Cloud Infrastructure", src: azureLogo },
        { name: "Prisma Cloud", description: "CSPM & RQL", src: prismaLogo },
        { name: "Docker", description: "Containers", src: dockerLogo },
        { name: "JSON", description: "Automation Workflows", src: jsonLogo },
        { name: "Linux / Bash", description: "Systems & Scripting", src: linuxLogo },
        { name: "LaTeX", description: "Technical Writing", src: LatexLogo },
    ];

    return (
        <section id="techstack" className="py-24 px-4 bg-background">
  <div className="container mx-auto max-w-5xl text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      A <span> <a className="text-glow">Tech Stack</a></span> for Innovation
    </h2>

        <h3 className="text-muted-foreground mb-6">Cloud security, secure systems, and product-focused software engineering.</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 back ">
      {technologies.map((tech, index) => (
        <div
          key={index}
          className="group relative bg-muted p-6 rounded-xl shadow-md transform transition duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent blur-sm opacity-0 group-hover:opacity-100 transition duration-300" />
          <img src={tech.src} alt={tech.name} className="h-12 mx-auto mb-2" loading="lazy" decoding="async" />
          <p className="text-sm font-medium text-foreground mb-1">{tech.name}</p>
          <p className="text-xs font-medium text-muted-foreground">{tech.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

    )
}
