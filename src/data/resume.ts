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
      company: "SIRB.AI",
      companyUrl: "https://sirb.ai/",
      location: "Abu Dhabi",
      role: "Lead Robotics Engineer",
      period: "2026 - Present",
      visible: true,
      bullets: [
        {
          text: "Lead the autonomy team at a defense-technology startup spun off from Technology Innovation Institute (TII).",
        },
        {
          text: "Agentic generation of missions for surveillance, monitoring, and tail chasing.",
        },
        {
          text: "Architecture and algorithm development for decentralized swarm control and multi-agent planning.",
        },
      ],
    },
    {
      company: "Technology Innovation Institute",
      companyUrl: "https://www.tii.ae/",
      location: "Abu Dhabi",
      role: "Lead Robotics Engineer",
      period: "2022 - Present",
      visible: true,
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
      visible: true,
      bullets: [
        {
          text: "Developed Agentic AI tools for [automated documentation PRs](https://doxmosis.vercel.app/), [agentic orchestration](https://kymatics.vercel.app/), agentic contribution analysis, real-estate analysis & UAE defense data analysis.",
        },
        {
          text: "Developed production backend services for [LoopFi](https://loopfi.xyz/)'s blockchain data analysis on EVM chains.",
        },
      ],
    },
    {
      company: "Coalescent Mobile Robotics",
      companyUrl: "https://cm-robotics.com/",
      role: "Founding Robotics Engineer",
      period: "2021 - 2022",
      visible: true,
      bullets: [
        {
          text: "Founding core technical team that delivered the first working in-store robot system, supporting company milestones across pre-seed and seed rounds.",
        },
        {
          text: "Led development of navigation stack: path planning, motion control, and localization. Contributed to perception (detection, filtering, tracking)",
        },
      ],
    },
    {
      company: "Hiventive",
      companyUrl: "https://www.hiventive.com/en/",
      role: "Software Engineer",
      location: "Remote",
      period: "Jun 2020 - Feb 2021",
      visible: true,
      bullets: [
        {
          text: "Built core backend services in Golang with PostgreSQL and Docker for a web-based computer-aided production engineering platform.",
        },
        {
          text: "Developed automated programming test manager for candidate evaluation.",
        },
      ],
    },
    {
      company: "Ecole Centrale de Nantes",
      companyUrl: "https://www.ec-nantes.fr/",
      role: "Robotics Researcher",
      location: "Nantes, France",
      period: "Mar 2020 - Feb 2021",
      visible: true,
      bullets: [
        {
          text: "Led 4 projects on multi-agent pathfinding, AI planning (PDDL), real-time ROS control (Xenomai/XDDP), and ROS2 latency benchmarking.",
        },
      ],
    },
    {
      company: "Ingeniarius",
      companyUrl: "https://ingeniarius.pt/",
      role: "Robotics Assistant",
      location: "Coimbra, Portugal",
      period: "Jul 2019 - Sep 2019",
      visible: true,
      bullets: [
        {
          text: "Built full autonomy stacks from scratch using ROS and embedded systems. Won mapped and unmapped maze-solving competitions.",
        },
      ],
    },
    {
      company: "Hiventive",
      companyUrl: "https://www.hiventive.com/en/",
      role: "Embedded Software Engineer",
      location: "Bordeaux, France",
      period: "Sep 2018 - Jul 2019",
      visible: true,
      bullets: [
        {
          text: "Developed SystemC/TLM virtual prototype of STM32 microcontroller for SoC emulation, emulating peripherals (TIM, I2C, CAN, GPIO, USART) with QEMU integration.",
        },
      ],
    },
    {
      company: "Polytech Nantes (LS2N)",
      companyUrl: "https://www.ls2n.fr/",
      role: "Robotics Intern",
      location: "Nantes, France",
      period: "May 2018 - Jul 2018",
      visible: false,
      bullets: [
        {
          text: "Built TurtleBot3 platform and developed WiFi mesh RSSI-based triangulation algorithm for indoor localization.",
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
      venue: "Preprint, 2021",
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
