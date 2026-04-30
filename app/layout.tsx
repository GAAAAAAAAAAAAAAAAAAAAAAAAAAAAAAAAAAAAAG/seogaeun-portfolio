import './globals.css';

export const metadata = {
  title: '서가은',
  description: '게임 개발자 서가은의 포트폴리오입니다.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}
