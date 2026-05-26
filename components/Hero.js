import { ArrowRight, FileText } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <span className="hero-greeting fade-in">Hello, World!</span>
          <h1 className="hero-title fade-in delay-1">
            경험을 창조하는<br />
            <span>게임 개발자</span> 서가은입니다.
          </h1>
          <p className="hero-subtitle fade-in delay-2">
            플레이어의 심장을 뛰게 만드는 몰입감 넘치는 게임 플레이와 
            최적화된 시스템을 구현하는 데 열정을 쏟고 있습니다.
          </p>
          <div className="hero-actions fade-in delay-3">
            <a href="#projects" className="btn btn-primary">
              프로젝트 보기 <ArrowRight size={18} />
            </a>
            <a href="/resume" className="btn">
              이력서 보기 <FileText size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
