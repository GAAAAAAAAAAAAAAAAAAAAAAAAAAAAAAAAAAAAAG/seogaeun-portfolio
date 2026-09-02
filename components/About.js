import React from 'react';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">
          About <span>Me</span>
        </h2>

        <div className="about-grid">
          <div className="about-image-container">
            <div className="about-image-wrapper">
              <img src="/profile.jpg" alt="서가은 프로필 사진" className="about-profile-image" />
              <div className="about-image-glow"></div>
            </div>
          </div>

          <div className="about-text">
            <p>
              안녕하세요. 게임공학을 전공하며 C++ 기반 게임 프로그래밍과 게임 클라이언트 개발을 공부하고 있는 서가은입니다.
              AI 도구를 활용해 구현 방향을 찾아보고, 막히는 부분을 작은 단위로 나누어 확인하며 개발 과정을 더 빠르고 명확하게 만드는 데 관심이 있습니다.
            </p>
            <p>
              DirectX 12 프로젝트에서는 그림자, 파티클, 충돌, 길찾기 같은 기능을 맡아 구현했고, Unreal Engine 프로젝트에서는 전투 시스템과 레벨 구성을 직접 만들어 보며 플레이 흐름을 다듬었습니다.
              새로운 기술을 배울 때는 AI의 도움을 받아 이해의 폭을 넓히고, 실제로 실행해 보며 제 것으로 만드는 과정을 중요하게 생각합니다.
            </p>

            <div className="skills-section">
              <div className="skills-category">
                <h4 className="skills-category-title">Core Skills</h4>
                <div className="skills-container">
                  <span className="skill-tag core">C++</span>
                  <span className="skill-tag core">DirectX 12</span>
                </div>
              </div>

              <div className="skills-category" style={{ marginTop: '1.5rem' }}>
                <h4 className="skills-category-title">Familiar / Tools</h4>
                <div className="skills-container">
                  <span className="skill-tag">Unreal Engine</span>
                  <span className="skill-tag">Git</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-experience">
            <div className="experience-list">
              <div className="experience-item">
                <span className="exp-date">2022.03 - 현재</span>
                <h3 className="exp-title">한국공학대학교 게임공학과</h3>
                <span className="exp-company">재학중</span>
              </div>
              <div className="experience-item">
                <span className="exp-date">2022.03 - 2023.02</span>
                <h3 className="exp-title">게임공학과 학생회 부원</h3>
                <span className="exp-company">학과 내 행사 기획 및 지원</span>
              </div>
              <div className="experience-item">
                <span className="exp-date">2024 1,2학기 / 2026 1학기</span>
                <h3 className="exp-title">C/C++ 프로그래밍 학술 멘토</h3>
                <span className="exp-company">학과 내 C/C++ 멘토링 진행</span>
              </div>
              <div className="experience-item">
                <span className="exp-date">2026.02</span>
                <h3 className="exp-title">cbs AI 집중교육 조교</h3>
                <span className="exp-company">n8n 단기 특강 조교 활동</span>
              </div>
              <div className="experience-item">
                <span className="exp-date">2026.04 / 2026.07</span>
                <h3 className="exp-title">kbs 바이브코딩 특강 조교</h3>
                <span className="exp-company">바이브코딩 단기 특강 조교 활동</span>
              </div>
              <div className="experience-item">
                <span className="exp-date">2026.07</span>
                <h3 className="exp-title">2026 재밌넥 게임잼 참가</h3>
                <span className="exp-company">영상형 시뮬레이션 게임 제작</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
