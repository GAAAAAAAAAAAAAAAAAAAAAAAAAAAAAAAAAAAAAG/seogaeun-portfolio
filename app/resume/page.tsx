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
              게임공학을 전공하며 C++ 기반 게임 프로그래밍과 게임 클라이언트 개발을 공부하고 있습니다.
              AI 도구를 활용해 구현 방향을 찾아보고, 막히는 부분을 작은 단위로 나누어 확인하며 개발 과정을 더 빠르고 명확하게 만드는 데 관심이 있습니다.
            </p>
          </div>

          <div className="resume-grid">
            {/* Left Column: Projects, Education */}
            <div className="resume-left-col">
              {/* Projects Section */}
              <div className="resume-section">
                <h2 className="resume-sec-title">Projects</h2>

                {/* Project 1: Sandy Heroes */}
                <div className="resume-project-item">
                  <img src="https://img.youtube.com/vi/CVMWE64RcTc/maxresdefault.jpg" alt="Sandy Heroes" className="resume-project-image" />
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
                      <li><strong>충돌 처리(Collision Detection)</strong>: 3D 월드 공간 상에서 움직이는 캐릭터와 오브젝트 간의 정밀한 충돌 검사 및 물리 반응 구현.</li>
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

                {/* Project 2: Jamitnex */}
                <div className="resume-project-item">
                  <img src="/projects/jamitnex/logo.png" alt="재밌넥이라도 사랑은 하고 싶어" className="resume-project-image resume-project-image-contain" />
                  <div className="resume-proj-header">
                    <h3 className="resume-proj-title">재밌넥이라도 사랑은 하고 싶어</h3>
                    <span className="resume-proj-date">2026.07.24 ~ 2026.07.26</span>
                  </div>
                  <div className="resume-proj-tech">
                    사용 기술: <strong>Unity, STT, LLM, Suno AI</strong> (4인 프로젝트)
                  </div>
                  <div className="resume-proj-desc">
                    2026 재밌넥 게임잼에서 제작한 영상형 시뮬레이션 게임입니다.
                    <ul>
                      <li>메인 기획 및 시나리오 작성, 디자인, 미니 게임 개발 담당.</li>
                      <li>실사 영상 연기와 Suno AI를 활용한 BGM 제작 담당.</li>
                      <li>플레이 테스트 및 버그 수정을 함께 맡아 콘텐츠 완성도를 점검.</li>
                      <li>STT 및 LLM 기술을 활용한 텍스트/음성 기반 상호작용을 기획에 반영.</li>
                    </ul>
                  </div>
                  <div className="resume-proj-links">
                    <a href="https://github.com/Bazzi4263/MyFirst3D" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </div>
                </div>

                {/* Project 3: Diet Defense */}
                <div className="resume-project-item">
                  <img src="https://img.youtube.com/vi/Jr1Cg_P9-L8/maxresdefault.jpg" alt="Diet Defense" className="resume-project-image" />
                  <div className="resume-proj-header">
                    <h3 className="resume-proj-title">Diet Defense</h3>
                    <span className="resume-proj-date">2026.07.03 ~ 2026.07.05</span>
                  </div>
                  <div className="resume-proj-tech">
                    사용 기술: <strong>C++, Direct2D, ChatGPT, Codex, Suno AI</strong> (1인 프로젝트)
                  </div>
                  <div className="resume-proj-desc">
                    재밌넥 참가를 위한 사전 과제로 제작한 Direct2D 기반 2D 타워 디펜스 게임입니다.
                    <ul>
                      <li>타워 배치, 강화, 판매, 자원 관리 시스템 구현.</li>
                      <li>6개 웨이브와 3단계 스테이지, Q/W/E 스킬, 랜덤 이벤트 구성.</li>
                      <li>ChatGPT, Codex, Suno AI를 활용해 기획, 구현 보조, 리소스 제작 과정을 진행.</li>
                    </ul>
                  </div>
                  <div className="resume-proj-links">
                    <a href="https://youtu.be/Jr1Cg_P9-L8?si=2UhyFg3MbtbPymJD" target="_blank" rel="noopener noreferrer">
                      플레이 영상 링크
                    </a>
                    <a href="/projects/diet-defense/diet_defense_work_report.pdf" target="_blank" rel="noopener noreferrer">
                      보고서
                    </a>
                  </div>
                </div>

                {/* Project 4: The Hollow Bow */}
                <div className="resume-project-item">
                  <img src="https://img.youtube.com/vi/K9KKlUR2OVY/maxresdefault.jpg" alt="The Hollow Bow" className="resume-project-image" />
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
              </div>

              <div className="resume-section">
                <h2 className="resume-sec-title">Additional Works</h2>
                <div className="resume-project-item">
                  <div className="resume-proj-header">
                    <h3 className="resume-proj-title">Animation Works</h3>
                    <span className="resume-proj-date">2026</span>
                  </div>
                  <div className="resume-animation-thumbs">
                    <a href="https://youtu.be/Y2BMvJFtx20?si=NcvgcZD-LYBagvNR" target="_blank" rel="noopener noreferrer">
                      <img src="https://img.youtube.com/vi/Y2BMvJFtx20/maxresdefault.jpg" alt="MetaHuman Cinematic" />
                      <span>Unreal · MetaHuman</span>
                    </a>
                    <a href="https://youtu.be/GhddiflIppY?si=J9Y7g5K9TIISYMVg" target="_blank" rel="noopener noreferrer">
                      <img src="https://img.youtube.com/vi/GhddiflIppY/maxresdefault.jpg" alt="Unity Character Animation" />
                      <span>Unity · Modeling · Rigging</span>
                    </a>
                  </div>
                  <div className="resume-proj-desc">
                    코딩뿐 아니라 캐릭터, 연출, 제작 파이프라인에도 관심을 가지고 진행한 짧은 애니메이션 작업입니다.
                    <ul>
                      <li>Unreal Engine의 MetaHuman을 활용한 캐릭터 중심 시네마틱 제작.</li>
                      <li>Unity 작업에서 모델링, 리깅, 애니메이션 제작을 직접 진행.</li>
                    </ul>
                  </div>
                  <div className="resume-proj-links">
                    <a href="https://youtu.be/Y2BMvJFtx20?si=NcvgcZD-LYBagvNR" target="_blank" rel="noopener noreferrer">
                      Unreal 영상
                    </a>
                    <a href="https://youtu.be/GhddiflIppY?si=J9Y7g5K9TIISYMVg" target="_blank" rel="noopener noreferrer">
                      Unity 영상
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
                    <a href="https://github.com/seogaeun22" target="_blank" rel="noopener noreferrer">
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
                    <span className="skill-tag">Unreal Engine 5</span>
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
                  <div className="resume-edu-date">2026.04 / 2026.07</div>
                  <div className="resume-edu-desc">특강 실습 지원</div>
                </div>

                <div className="resume-edu-item">
                  <div className="resume-edu-title">cbs AI 집중교육 조교 (n8n)</div>
                  <div className="resume-edu-date">2026.02</div>
                  <div className="resume-edu-desc">교육 실습 보조</div>
                </div>

                <div className="resume-edu-item">
                  <div className="resume-edu-title">2026 재밌넥 게임잼 참가</div>
                  <div className="resume-edu-date">2026.07</div>
                  <div className="resume-edu-desc">영상형 시뮬레이션 게임 제작</div>
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
