
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const technologies = [
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    category: "Programming"
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    category: "Programming"
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    category: "Programming"
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    category: "Frontend"
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    category: "Backend"
  },
  {
    name: "TensorFlow",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    category: "AI/ML"
  },
  {
    name: "PyTorch",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
    category: "AI/ML"
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    category: "DevOps"
  },
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    category: "Cloud"
  },
  {
    name: "n8n",
    icon: "https://avatars.githubusercontent.com/u/45487711",
    category: "No-Code"
  },
  {
    name: "Make.com",
    icon: "https://seeklogo.com/images/M/make-logo-A4E8F8C6DD-seeklogo.com.png",
    category: "No-Code"
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    category: "Database"
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    category: "Database"
  },
  {
    name: "GraphQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    category: "API"
  },
  {
    name: "GPT-4",
    icon: "https://img.icons8.com/color/96/000000/chatgpt.png",
    category: "AI/ML"
  }
];

const categories = [
  { name: "Programming", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
  { name: "Frontend", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" },
  { name: "Backend", color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" },
  { name: "AI/ML", color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200" },
  { name: "DevOps", color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200" },
  { name: "Cloud", color: "bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-200" },
  { name: "No-Code", color: "bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200" },
  { name: "Database", color: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200" },
  { name: "API", color: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200" }
];

const TechStackSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slack-black dark:text-white mb-4">
            Technologies We Use
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            We leverage cutting-edge technologies and platforms to build powerful AI automation solutions
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <span 
              key={category.name}
              className={`px-4 py-1.5 text-sm font-medium rounded-full ${category.color}`}
            >
              {category.name}
            </span>
          ))}
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {technologies.map((tech) => {
            const categoryData = categories.find(c => c.name === tech.category);
            const colorClass = categoryData?.color || "";
            
            return (
              <Card key={tech.name} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div className="w-16 h-16 mb-4 flex items-center justify-center">
                    <img 
                      src={tech.icon} 
                      alt={tech.name} 
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <h3 className="font-medium text-slate-900 dark:text-white mb-1">{tech.name}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${colorClass}`}>
                    {tech.category}
                  </span>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
