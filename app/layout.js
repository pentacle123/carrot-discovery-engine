export const metadata = {
  title: '한화캐롯 Brand Discovery AI Platform',
  description: '관심사 기반 브랜드 발견 전략 — Pentacle × AI',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  )
}
