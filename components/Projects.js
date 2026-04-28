import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    id: 1,
    title: "Neon Cyber Strike",
    genre: "Action FPS",
    duration: "2024.09 - 2024.12",
    teamSize: "4인 프로젝트",
    role: "무기 시스템 및 적 AI 상태 머신(FSM) 설계 및 구현. 플레이어의 이동 속도와 피격 데미지 계산 최적화.",
    github: "https://github.com",
    playLink: "https://steampowered.com",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=400&h=200&fit=crop"
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
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">
          My <span>Projects</span>
        </h2>
        
        <div className="projects-grid">
          {projectsData.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
