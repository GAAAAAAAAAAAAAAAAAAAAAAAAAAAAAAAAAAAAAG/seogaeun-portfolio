"use client";

import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const projectsData = [
  {
    id: 1,
    title: "Sandy Heroes",
    genre: "3D PvE FPS / PC",
    duration: "2024.09 - 2025.08",
    teamSize: "3인 프로젝트",
    role: "그림자 매핑, 파티클 시스템, 충돌 처리, 길찾기 알고리즘 구현 및 맵·콘텐츠 제작 담당",
    github: "https://github.com/klop2211/SandyHeroesClient",
    playLink: "https://youtu.be/CVMWE64RcTc?si=qVf0-Clg6RNGWatZ",
    image: "https://img.youtube.com/vi/CVMWE64RcTc/maxresdefault.jpg",
    details: {
      genre: "3D PvE FPS 게임 / PC",
      summary: "캐주얼한 PvE 스타일의 게임으로, 최대 3명이 함께 플레이할 수 있는 1인칭 15분짜리 FPS 게임이다.",
      concept: "사막 고대 유적에 숨어있는 나쁜 용을 물리쳐라!",
      goals: [
        "Component 구조를 사용한 게임 프레임워크",
        "기하 쉐이더를 사용한 파티클 시스템과 몰입감을 높여주는 컷신 시스템",
        "클라이언트와 서버의 연동을 위한 Lock 없는 IOCP 서버 구현"
      ],
      techStack: ["C++", "DirectX12", "IOCP"],
      githubLinks: [
        "https://github.com/klop2211/SandyHeroesClient",
        "https://github.com/ehdxorhrl/SandyHeroes_--"
      ],
      reportFile: "/reports/[양식] 2025 게임공학과 최종 보고서.hwp",
      reportFileName: "2025 게임공학과 최종 보고서.hwp"
    }
  },
  {
    id: 2,
    title: "Shadow of Ruins",
    genre: "RPG",
    duration: "2024.03 - 2024.06",
    teamSize: "개인 프로젝트",
    role: "인벤토리 시스템, 퀘스트 데이터 연동, 그리고 보스 몬스터의 패턴(페이즈 전환) 로직 핵심 구현.",
    github: "https://github.com",
    playLink: "https://itch.io",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=400&h=200&fit=crop"
  },
  {
    id: 3,
    title: "Galactic Racing",
    genre: "Racing",
    duration: "2023.10 - 2023.12",
    teamSize: "2인 프로젝트",
    role: "차량 물리 엔진 파라미터 조절 및 멀티플레이어 네트워크 동기화(Photon) 처리.",
    github: "https://github.com",
    image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=400&h=200&fit=crop"
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">
          My <span>Projects</span>
        </h2>

        <div className="projects-grid">
          {projectsData.map(project => (
            <div key={project.id} onClick={() => handleProjectClick(project)} style={{ cursor: 'pointer' }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
      
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
}
