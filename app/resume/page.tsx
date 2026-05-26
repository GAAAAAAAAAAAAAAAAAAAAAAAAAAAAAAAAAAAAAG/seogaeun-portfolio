'use client';

import React from 'react';
import { ArrowLeft, Printer, Mail, Phone, Github, Globe } from 'lucide-react';
import Link from 'next/link';

export default function Resume() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-page">
      <div className="container">
        {/* Actions Header - Hidden on print */}
        <div className="resume-header-actions no-print">
          <Link href="/" className="btn">
            <ArrowLeft size={18} /> 포트폴리오로 돌아가기
          </Link>
          <button onClick={handlePrint} className="btn btn-primary">
            <Printer size={18} /> PDF로 저장 / 인쇄
          </button>
        </div>

        {/* Resume Paper Content */}
        <div className="resume-paper">
          {/* Header Info */}
          <div className="resume-title-section">
            <h1 className="resume-name">서가은 <span>Seo Gaeun</span></h1>
            <div className="resume-job">게임 프로그래머 (Game Programmer)</div>
            <p className="resume-intro">
              플레이어에게 잊지 못할 경험을 선사하고, 안정적이며 효율적인 시스템을 구현하는 게임 개발자 서가은입니다. 
              단순한 코딩을 넘어 기획의 의도를 완전히 이해하고 최적의 게임 플레이를 설계하는 데 집중합니다.
            </p>
          </div>

          <div className="resume-grid">
            {/* Left Column: Projects, Education */}
            <div className="resume-left-col">
              {/* Projects Section */}
              <div className="resume-section">
                <h2 className="resume-sec-title">Projects</h2>

                {/* Project 1: The Hollow Bow */}
                <div className="resume-project-item">
                  <div className="resume-proj-header">
                    <h3 className="resume-proj-title">The Hollow Bow</h3>
                    <span className="resume-proj-date">2025.06.18 ~ 2025.06.20</span>
                  </div>
                  <div className="resume-proj-tech">
                    사용 기술: <strong>Unreal Engine 5.3, Blueprint</strong> (1인 프로젝트)
                  </div>
                  <div className="resume-proj-desc">
                    Unreal Engine의 Blueprint를 활용하여 제작한 3D PvE 액션 게임입니다.
                    <ul>
                      <li>불꽃 화살을 발사하는 궁수 캐릭터의 역동적인 조작감 및 카메라 연동 시스템 구현.</li>
                      <li>신비의 트로피를 획득하기 위한 레벨 디자인 및 다양한 장애물/지형 배치.</li>
                      <li>간단한 PvE 적 인공지능(AI) 구축 및 피격/전투 시스템 판정 설계.</li>
                    </ul>
                  </div>
                  <div className="resume-proj-links">
                    <a href="https://youtu.be/K9KKlUR2OVY?si=DSWlTxJqc0U4_vky" target="_blank" rel="noopener noreferrer">
                      소개 영상 링크
                    </a>
                  </div>
                </div>

                {/* Project 2: Sandy Heroes */}
                <div className="resume-project-item">
                  <div className="resume-proj-header">
                    <h3 className="resume-proj-title">Sandy Heroes</h3>
                    <span className="resume-proj-date">2024.09 ~ 2025.08</span>
                  </div>
                  <div className="resume-proj-tech">
                    사용 기술: <strong>C++, DirectX 12, IOCP</strong> (3인 프로젝트)
                  </div>
                  <div className="resume-proj-desc">
                    Component 구조를 적용한 커스텀 프레임워크 기반의 3D PvE 3인 멀티플레이어 FPS 게임입니다.
                    <ul>
                      <li><strong>그림자 매핑(Shadow Mapping)</strong>: 광원 시점의 깊이 맵(Depth Map)을 생성하여 실시간 3D 그림자 구현 및 시각적 몰입감 극대화.</li>
                      <li><strong>파티클 시스템(Particle System)</strong>: 기하 쉐이더(Geometry Shader)를 도입하여 CPU 오버헤드를 해소하고, GPU 연산 기반 실시간 폭발 및 사막 모래바람 연출 구현.</li>
                      <li><strong>충돌 처리(Collision Detection)</strong>: 3D 월드 공간 상에서 움직이는 캐릭터와 정적/동적 오브젝트 간의 정밀한 충돌 검사 및 물리 반응 구현.</li>
                      <li><strong>길찾기 알고리즘 및 맵 제작</strong>: A* 알고리즘을 직접 구현하여 적 몬스터의 장애물 회피 및 최적 경로 추적 AI 시스템 구축, 사막 유적 레벨 디자인 및 콘텐츠 배치 담당.</li>
                    </ul>
                  </div>
                  <div className="resume-proj-links">
                    <a href="https://youtu.be/CVMWE64RcTc?si=x7CyGJ1dE2HHoyMh" target="_blank" rel="noopener noreferrer">
                      소개 영상 링크
                    </a>
                    <a href="https://github.com/klop2211/SandyHeroesClient" target="_blank" rel="noopener noreferrer">
                      GitHub Client
                    </a>
                    <a href="https://github.com/ehdxorhrl/SandyHeroes_--" target="_blank" rel="noopener noreferrer">
                      GitHub Server
                    </a>
                  </div>
                </div>
              </div>

              {/* Education Section */}
              <div className="resume-section">
                <h2 className="resume-sec-title">Education</h2>
                <div className="resume-edu-item">
                  <div className="resume-edu-title">한국공학대학교 게임공학과</div>
                  <div className="resume-edu-date">2022.03 ~ 현재 (재학)</div>
                  <div className="resume-edu-desc">
                    게임 프로그래밍 핵심 원리, 컴퓨터 그래픽스, DirectX 기반 3D 게임 엔진 응용 설계 등 전공 교과 이수.
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact, Skills, Experience */}
            <div className="resume-right-col">
              {/* Contact Info */}
              <div className="resume-section">
                <h2 className="resume-sec-title">Contact</h2>
                <ul className="resume-contact-list">
                  <li>
                    <Mail size={16} className="contact-icon" />
                    <a href="mailto:seogaeun@tukorea.ac.kr">seogaeun@tukorea.ac.kr</a>
                  </li>
                  <li>
                    <Phone size={16} className="contact-icon" />
                    <span>010-6513-2117</span>
                  </li>
                  <li>
                    <Github size={16} className="contact-icon" />
                    <a href="https://github.com/GAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG" target="_blank" rel="noopener noreferrer">
                      GitHub 프로필
                    </a>
                  </li>
                  <li>
                    <Globe size={16} className="contact-icon" />
                    <a href="https://seogaeun.com" target="_blank" rel="noopener noreferrer">
                      seogaeun.com
                    </a>
                  </li>
                </ul>
              </div>

              {/* Skills Section */}
              <div className="resume-section">
                <h2 className="resume-sec-title">Skills</h2>
                
                <div className="resume-skill-group">
                  <div className="resume-skill-group-title">Core Skills</div>
                  <div className="resume-skill-tags">
                    <span className="skill-tag core">C++</span>
                    <span className="skill-tag core">DirectX 12</span>
                  </div>
                </div>

                <div className="resume-skill-group">
                  <div className="resume-skill-group-title">Familiar / Tools</div>
                  <div className="resume-skill-tags">
                    <span className="skill-tag">Unity</span>
                    <span className="skill-tag">Unreal Engine 5</span>
                    <span className="skill-tag">C#</span>
                    <span className="skill-tag">Git</span>
                  </div>
                </div>
              </div>

              {/* Experience Section */}
              <div className="resume-section">
                <h2 className="resume-sec-title">Experience</h2>
                
                <div className="resume-edu-item">
                  <div className="resume-edu-title">C/C++ 프로그래밍 학술 멘토</div>
                  <div className="resume-edu-date">2024 1,2학기 / 2026 1학기</div>
                  <div className="resume-edu-desc">학과 후배들 대상 기초 개념 멘토링</div>
                </div>

                <div className="resume-edu-item">
                  <div className="resume-edu-title">kbs 바이브코딩 특강 조교</div>
                  <div className="resume-edu-date">2026.04</div>
                  <div className="resume-edu-desc">특강 실습 지원</div>
                </div>

                <div className="resume-edu-item">
                  <div className="resume-edu-title">cbs AI 집중교육 조교 (n8n)</div>
                  <div className="resume-edu-date">2026.02</div>
                  <div className="resume-edu-desc">교육 실습 보조</div>
                </div>

                <div className="resume-edu-item">
                  <div className="resume-edu-title">망고게이밍 친목 소모임 임원</div>
                  <div className="resume-edu-date">2024.03 ~ 2024.12</div>
                  <div className="resume-edu-desc">동아리 관리 및 이벤트 기획</div>
                </div>

                <div className="resume-edu-item">
                  <div className="resume-edu-title">게임공학과 학생회 부원</div>
                  <div className="resume-edu-date">2022.03 ~ 2023.02</div>
                  <div className="resume-edu-desc">학과 행사 지원 및 기획</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
