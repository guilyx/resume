// Erwin Lejeune - 2026-02-15

import type { ResumeData } from "../types/resume";

export const resumeData: ResumeData = {
  name: "Erwin Lejeune",
  title:
    "Head of Robotics | Robot Autonomy, Fleet & Fault Management, Agentic AI Workflows",
  summary:
    "Robotics technical lead taking autonomy from the lab to the field, with 8+ years across AMR navigation, fleet management and fault management, and robotics products shipped end to end. Builds teams from scratch and runs them: roadmaps, performance reviews, and hands-on design and pull request reviews. Brings AI in without lowering the bar: workflows that make a whole team faster, and on-robot agents that diagnose faults while deterministic rules stay in control.",
  contact: {
    email: "erwin.lejeune15@gmail.com",
    portfolio: "https://v4.elejeune.me",
    location: "Abu Dhabi, open to relocate",
  },

  experience: [
    {
      company: "SIRB.AI",
      companyUrl: "https://sirb.ai/",
      location: "Abu Dhabi",
      role: "Head of Robotics",
      period: "Feb 2026 - Present",
      visible: true,
      bullets: [
        {
          text: "Founding team: built the robotics team from scratch; own the software architecture, roadmap and performance reviews.",
        },
        {
          text: "Built swarm-wide fault management: fault and state recording, ML-based mission scoring before launch, and agents that read the fault timeline and propose repairs while deterministic rules keep control of the actuators.",
        },
        {
          text: "Led the team's AI workflows: a Slack company brain that answers from sources each team curates, and self-hosted AI code reviews on every change, with a person owning everything that ships.",
        },
        {
          text: "Took the autonomy stack from prototype to public launch at UMEX 2026, unveiled as the Middle East's first AI-powered swarm platform.",
        },
      ],
    },
    {
      company: "Technology Innovation Institute",
      companyUrl: "https://www.tii.ae/",
      location: "Abu Dhabi",
      role: "Team Lead - Robotics Software",
      period: "2024 - 2026",
      visible: true,
      bullets: [
        {
          text: "Grew and led a Robotics Software team of 9 engineers across autonomy (navigation, perception, orchestration), infrastructure (DevOps, RobotOps) and platform integration.",
        },
        {
          text: "Overhauled the swarm autonomy architecture, cutting onboard CPU usage by 74% and network bandwidth by 52%.",
        },
        {
          text: "Scaled the framework with tooling for reliable, repeatable missions, and expanded the team's scope to path planning and path tracking.",
        },
        {
          text: "Joint program with Caltech on their multi-modal robot M4 and their humanoid: worked on outdoor planning and tracking for M4's flying and rolling modalities.",
        },
        {
          text: "Led autonomy demos to companies in Europe and the UAE, resulting in USD 10M+ in contracts.",
        },
        {
          text: "Started building AI tooling for the team to raise engineering efficiency and productivity.",
        },
      ],
    },
    {
      company: "Technology Innovation Institute",
      companyUrl: "https://www.tii.ae/",
      location: "Abu Dhabi",
      role: "Senior Engineer - Robotics Software",
      period: "2022 - 2024",
      visible: true,
      bullets: [
        {
          text: "Led the research & development of components for multi-robot behavior orchestration, collaboration and control.",
        },
        {
          text: "Designed new swarm behaviors, including decentralized bird-inspired flocking published at IEEE/RSJ IROS 2024.",
        },
        {
          text: "Ran the live demos to partners; the project led to USD 3M in contracts with other companies in the UAE ecosystem.",
        },
      ],
    },
    {
      company: "Unchained Labs",
      companyUrl: "https://unchainedlabs.dev/",
      role: "Founder",
      period: "2024 - Present",
      visible: true,
      bullets: [
        {
          text: "Build AI brains for companies: local-first agentic systems that run on their own models, data and infrastructure.",
        },
        {
          text: "Architect graph-based agent orchestration ([Kymatics](https://kymatics.vercel.app/)) and open-source the tooling to run it reliably.",
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

  projects: [
    {
      name: "grip",
      description:
        "Git hook that quizzes you on your own diff before you commit or push, with an LLM-graded score and a pass mark.",
      repoUrl: "https://github.com/guilyx/grip",
      liveUrl: "https://guilyx.github.io/grip/",
      visible: true,
    },
    {
      name: "pymapf",
      description:
        "Multi-agent planning toolbox on arbitrary graphs: CBS, PIBT, LaCAM, MAPF-LNS, plus multi-agent RL.",
      repoUrl: "https://github.com/APLA-Toolbox/pymapf",
      liveUrl: "https://apla-toolbox.github.io/pymapf/",
      visible: true,
    },
    {
      name: "jupyddl",
      description:
        "Dependency-free Python PDDL framework: parser, grounder, 14 planners, LM-cut and FF heuristics.",
      repoUrl: "https://github.com/APLA-Toolbox/PythonPDDL",
      liveUrl: "https://apla-toolbox.github.io/PythonPDDL/",
      visible: true,
    },
    {
      name: "rostree",
      description:
        "ROS 2 dependency-graph explorer from the CLI, a TUI, or a self-contained interactive graph.",
      repoUrl: "https://github.com/guilyx/rostree",
      liveUrl: "https://guilyx.github.io/rostree/",
      visible: true,
    },
    {
      name: "flybots",
      description:
        "Multirotor, fixed-wing and VTOL flight models with 40+ runnable simulations and an RL gym.",
      repoUrl: "https://github.com/guilyx/flybots",
      liveUrl: "https://guilyx.github.io/flybots/",
      visible: true,
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
      items: ["C++", "Python", "Go", "Rust", "C", "TypeScript", "React"],
    },
    {
      category: "Autonomy & Planning",
      items: [
        "Multi-Agent Planning",
        "PDDL Planning",
        "Behavior Trees",
        "Path Planning",
        "Motion Control",
        "Sensor Fusion",
        "Fleet Management",
        "Fault Management",
        "ROS2",
      ],
    },
    {
      category: "Agentic AI",
      items: [
        "Agent Orchestration",
        "AI Code Review",
        "Graph Workflows",
        "MCP",
        "RAG",
        "LLM APIs",
      ],
    },
    {
      category: "Leadership & Management",
      items: [
        "Team Building",
        "Roadmaps",
        "Performance Reviews",
        "Code Review",
        "Scrum",
        "Jira",
      ],
    },
  ],
};
