import React from 'react';
import { Mail, Github, Youtube, Download } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">
          Contact <span>Me</span>
        </h2>
        
        <div className="contact-content">
          <p className="contact-text">
            게임 개발에 대한 열정과 끈기를 바탕으로, 언제나 성장하는 개발자가 되겠습니다.
            협업 제안이나 궁금한 점이 있으시다면 언제든 연락 주세요!
          </p>
          
          <div className="contact-info">
            <div className="contact-item">
              <Mail className="contact-icon" size={24} />
              <a href="mailto:seogaeun@tukorea.ac.kr">seogaeun@tukorea.ac.kr</a>
            </div>
            <div className="contact-item">
              <Github className="contact-icon" size={24} />
              <a href="https://github.com/GAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG" target="_blank" rel="noopener noreferrer">
                github.com/GAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG
              </a>
            </div>
            <div className="contact-item">
              <Youtube className="contact-icon" size={24} />
              <a href="https://www.youtube.com/@seogaeun22" target="_blank" rel="noopener noreferrer">
                youtube.com/@seogaeun22
              </a>
            </div>
          </div>
          
          <a href="/resume.pdf" className="btn btn-primary" style={{ marginTop: '1rem' }}>
            이력서 다운로드 <Download size={18} />
          </a>
        </div>
      </div>
      
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Seogaeun. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
}
