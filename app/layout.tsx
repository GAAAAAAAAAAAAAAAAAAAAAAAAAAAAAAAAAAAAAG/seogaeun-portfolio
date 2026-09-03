import './globals.css';

export const metadata = {
  metadataBase: new URL('https://seogaeun.com'),
  title: '서가은',
  description: '게임 개발자 서가은의 포트폴리오입니다.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: '서가은',
    description: '게임 개발자 서가은의 포트폴리오입니다.',
    url: 'https://seogaeun.com',
    siteName: '서가은 포트폴리오',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 1200,
        alt: '서가은 포트폴리오 대표 이미지',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '서가은',
    description: '게임 개발자 서가은의 포트폴리오입니다.',
    images: ['/og-image.png'],
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
