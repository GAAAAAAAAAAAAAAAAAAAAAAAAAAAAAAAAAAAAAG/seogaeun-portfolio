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
              안녕하세요! 유저에게 잊지 못할 경험을 선사하는 게임 개발자 서가은입니다.
              단순히 코드를 작성하는 것을 넘어, 게임 디자인의 의도를 정확히 파악하고 이를 효율적인 시스템으로 구현하는 데 집중합니다.
            </p>
            <p>
              저는 새로운 기술과 엔진을 배우는 것을 즐기며, 동료들과의 원활한 커뮤니케이션을 통해 프로젝트의 완성도를 높이는 것을 중요하게 생각합니다.
            </p>

            <div className="skills-container">
              <span className="skill-tag">C++</span>
              <span className="skill-tag">C#</span>
              <span className="skill-tag">Unity</span>
              <span className="skill-tag">Unreal Engine</span>
              <span className="skill-tag">Git</span>
              <span className="skill-tag">Data Structures</span>
              <span className="skill-tag">Algorithms</span>
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
                <span className="exp-date">2026.02</span>
                <h3 className="exp-title">cbs AI 집중교육 조교</h3>
                <span className="exp-company">n8n</span>
              </div>
              <div className="experience-item">
                <span className="exp-date">2026.04</span>
                <h3 className="exp-title">kbs 바이브코딩 특강 조교</h3>
                <span className="exp-company">바이브코딩</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
