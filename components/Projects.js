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
    playLink: "https://youtu.be/CVMWE64RcTc?si=x7CyGJ1dE2HHoyMh",
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
    title: "The Hollow Bow",
    genre: "3D PvE / PC",
    duration: "2025.06.18 ~ 2025.06.20",
    teamSize: "1인 프로젝트",
    role: "기획, 레벨 디자인 및 블루프린트(Blueprint) 기반의 전체 게임플레이 시스템 및 UI 단독 개발",
    github: "https://github.com/GAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG",
    playLink: "https://youtu.be/K9KKlUR2OVY?si=DSWlTxJqc0U4_vky",
    image: "https://img.youtube.com/vi/K9KKlUR2OVY/maxresdefault.jpg",
    details: {
      genre: "3D PvE 게임 / PC (언리얼 엔진)",
      summary: "불꽃 화살을 쏘는 궁수가 판타지 숲에만 존재하는 신비의 트로피를 구하러 가는 게임입니다.",
      concept: "블루프린트를 통한 궁수 캐릭터의 전투 및 이동 메커니즘 설계",
      goals: [
        "Unreal Engine의 Blueprint를 활용한 PvE 게임 구현",
        "블루프린트를 통한 궁수 캐릭터의 전투 및 이동 메커니즘 설계",
        "레벨 디자인을 통한 적 배치 및 클리어 목표 설정"
      ],
      techStack: ["Unreal Engine 5.3", "Blueprint"],
      githubLinks: [
        "https://github.com/GAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG"
      ],
      playLinks: [
        { name: "게임 소개 (처음부터)", url: "https://youtu.be/K9KKlUR2OVY?si=DSWlTxJqc0U4_vky" },
        { name: "게임 플레이 (6분 22초부터)", url: "https://youtu.be/K9KKlUR2OVY?t=382" }
      ]
    }
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
