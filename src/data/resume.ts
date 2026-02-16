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
      companyUrl: "https://www.tii.ae/",
      location: "Abu Dhabi",
      role: "Lead Robotics Engineer",
      period: "2022 - Present",
      promotions:
        "Engineer to Senior Engineer (2023), Senior Engineer to Lead Engineer (2026)",
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
      companyUrl: "https://unchainlabs.xyz/",
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
      companyUrl: "https://cm-robotics.com/",
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
      institutionUrl: "https://www.ec-nantes.fr/",
      period: "2019 - 2021",
    },
    {
      degree: "M.Sc. - Computer Engineering & Aeronautics",
      institution: "Ynov Bordeaux",
      institutionUrl: "https://www.ynov.com/campus/bordeaux",
      period: "2018 - 2019",
    },
    {
      degree: "B.Sc. - Electronics Engineering",
      institution: "Nantes Université",
      institutionUrl: "https://www.univ-nantes.fr/",
      period: "2014 - 2018",
    },
  ],

  publications: [
    {
      title: "Decentralized Acceleration-Based Bird-Inspired Flocking",
      venue: "IEEE/RSJ IROS 2024",
      date: "October 2024",
      url: "https://www.researchgate.net/publication/387418977_Decentralized_Acceleration-Based_Bird-Inspired_Flocking",
    },
    {
      title: "Real-time Jitter Measurements under ROS2: the Inverted Pendulum Case",
      venue: "MDPI Robotics, 2021",
      date: "March 2021",
      url: "https://www.researchgate.net/publication/350353690_Real-time_Jitter_Measurements_under_ROS2_the_Inverted_Pendulum_case",
    },
    {
      title: "Survey of the Multi-Agent Pathfinding Solutions",
      venue: "Preprint, 2021",
      date: "January 2021",
      url: "https://www.researchgate.net/publication/348716625_Survey_of_the_Multi-Agent_Pathfinding_Solutions",
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
