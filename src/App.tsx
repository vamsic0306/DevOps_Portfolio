import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { 
  GithubIcon, 
  ContainerIcon, 
  CloudIcon, 
  TerminalIcon, 
  ShieldIcon, 
  BarChart3Icon, 
  GitBranchIcon,
  CpuIcon,
  SettingsIcon,
  DownloadIcon 
} from 'lucide-react';

function App() {
  const handleDownloadResume = () => {
  // Correct raw GitHub URL format for direct PDF download
  const resumeUrl = 'https://raw.githubusercontent.com/vamsic0306/My_Portafolio/main/resume.pdf';
  window.open(resumeUrl, '_blank');
};


  const projects = [
    {
      title: "CI/CD Pipeline Automation",
      description: "Implemented robust CI/CD pipelines using GitHub Actions, reducing deployment time by 60%",
      icon: <GitBranchIcon className="w-6 h-6" />,
      skills: ["GitHub Actions", "Jenkins", "ArgoCD"]
    },
    {
      title: "Infrastructure as Code",
      description: "Developed Terraform modules for AWS infrastructure, achieving 100% infrastructure automation",
      icon: <CloudIcon className="w-6 h-6" />,
      skills: ["Terraform", "AWS", "Infrastructure Automation"]
    },
    {
      title: "Container Orchestration",
      description: "Managed microservices architecture using Kubernetes, improving system reliability by 40%",
      icon: <ContainerIcon className="w-6 h-6" />,
      skills: ["Kubernetes", "Docker", "Microservices"]
    },
    {
      title: "Monitoring & Observability",
      description: "Implemented comprehensive monitoring using Prometheus & Grafana, reducing MTTR by 50%",
      icon: <BarChart3Icon className="w-6 h-6" />,
      skills: ["Prometheus", "Grafana", "ELK Stack"]
    },
    {
      title: "Security Automation",
      description: "Integrated automated security scanning, achieving 95% compliance with security standards",
      icon: <ShieldIcon className="w-6 h-6" />,
      skills: ["SonarQube", "OWASP", "Security Automation"]
    },
    {
      title: "Infrastructure Optimization",
      description: "Optimized cloud infrastructure costs, resulting in 30% reduction in monthly cloud spending",
      icon: <SettingsIcon className="w-6 h-6" />,
      skills: ["Cost Optimization", "Cloud Architecture", "Performance Tuning"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center mb-16">
          <TerminalIcon className="w-16 h-16 mb-6 text-blue-400" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">DevOps Engineer</h1>
          <TypeAnimation
            sequence={[
              'Infrastructure as Code',
              2000,
              'CI/CD Pipeline Expert',
              2000,
              'Kubernetes Specialist',
              2000,
              'Cloud Architecture',
              2000,
            ]}
            wrapper="span"
            speed={50}
            className="text-xl md:text-2xl text-blue-400"
            repeat={Infinity}
          />
          <div className="flex gap-4 mt-8">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors">
              <GithubIcon className="w-5 h-5" />
              GitHub
            </a>
            <button 
              onClick={handleDownloadResume}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-lg transition-colors">
              <DownloadIcon className="w-5 h-5" />
              Download Resume
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  {project.icon}
                </div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="bg-gray-700 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-8">Technical Expertise</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-gray-800 p-4 rounded-lg flex items-center gap-2">
              <CloudIcon className="w-5 h-5 text-blue-400" />
              <span>AWS</span>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg flex items-center gap-2">
              <ContainerIcon className="w-5 h-5 text-blue-400" />
              <span>Docker</span>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg flex items-center gap-2">
              <CpuIcon className="w-5 h-5 text-blue-400" />
              <span>Kubernetes</span>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg flex items-center gap-2">
              <TerminalIcon className="w-5 h-5 text-blue-400" />
              <span>Terraform</span>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg flex items-center gap-2">
              <GitBranchIcon className="w-5 h-5 text-blue-400" />
              <span>CI/CD</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
