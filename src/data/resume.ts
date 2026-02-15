// Erwin Lejeune - 2026-02-15

import type { ResumeData } from "../types/resume";

export const resumeData: ResumeData = {
  name: "Erwin Lejeune",
  title: "Lead Software Engineer | Robotics, AI, Blockchain",
  summary:
    "Software Engineer driving robotics autonomy, agentic AI, and blockchain-based platforms across domains. Experienced in C++, Python, Go. Active contributor to open-source projects and communities.",
  contact: {
    email: "erwin.lejeune15@gmail.com",
    portfolio: "https://elejeune.me",
    location: "Abu Dhabi, open to relocate",
  },

  experience: [
    {
      company: "Technology Innovation Institute",
      location: "Abu Dhabi",
      role: "Lead Robotics Engineer",
      period: "2022 - Present",
      promotions: "Engineer to Senior Engineer (2023), Senior Engineer to Lead Engineer (2026)",
      bullets: [
        {
          text: "Leading a Robotics Software team of 9 engineers developing decentralized autonomy frameworks for heterogeneous drone swarms. Subjects span across Autonomy (Navigation, Perception, Orchestration), Infrastructure (DevOps, RobotOps), and Integration of software and firmware into real-world platforms.",
        },
        {
          text: "Led initiatives on modular software architecture, lifecycle management, and behavior orchestration for swarm autonomy.",
        },
      ],
    },
    {
      company: "Unchained Labs",
      role: "Principal Solutions Engineer",
      period: "2024 - Present",
      bullets: [
        {
          text: "Developed tools for blockchain data analysis on EVM chains.",
        },
        {
          text: "Developed AI Agents for Market Analysis and Arbitrage Research.",
        },
      ],
    },
    {
      company: "Coalescent Mobile Robotics",
      role: "Founding Robotics Engineer",
      period: "2021 - 2022",
      bullets: [
        {
          text: "Founding core technical team that delivered the first working in-store robot system, supporting company milestones across pre-seed and seed rounds.",
        },
        {
          text: "Led development of navigation stack: path planning, motion control, and localization.",
        },
        {
          text: "Contributed to perception (detection, filtering, tracking) and sensor fusion (EKF with odometry + IMU).",
        },
      ],
    },
    {
      company: "Hiventive, Ecole Centrale Nantes, Ingeniarius",
      role: "Software, Robotics & Research Engineer",
      period: "2018 - 2021",
      bullets: [
        {
          text: "Developed backend systems and ROS2 software across robotics and web platforms using Go, Python, and TypeScript.",
        },
        {
          text: "Delivered multi-agent autonomy, AI planning, and real-time control solutions with Dockerized, CI/CD-ready deployments.",
        },
      ],
    },
  ],

  education: [
    {
      degree: "M.Sc. - Control & Robotics",
      institution: "Ecole Centrale de Nantes",
      period: "2019 - 2021",
    },
    {
      degree: "M.Sc. - Computer Engineering & Aeronautics",
      institution: "Ynov Bordeaux",
      period: "2018 - 2019",
    },
    {
      degree: "B.Sc. - Electronics Engineering",
      institution: "Nantes Université",
      period: "2014 - 2018",
    },
  ],

  skills: [
    {
      category: "Software Engineering",
      items: ["C++", "Python", "Go", "React", "Rust", "C", "ROS2"],
    },
    {
      category: "Robotics",
      items: ["Path Planning", "Motion Control", "Sensor Fusion"],
    },
    {
      category: "AI",
      items: ["Agentic Stacks", "RAG", "MCP", "LLM APIs"],
    },
    {
      category: "Software Management",
      items: ["Scrum", "Jira", "Github", "Gitlab"],
    },
  ],
};
