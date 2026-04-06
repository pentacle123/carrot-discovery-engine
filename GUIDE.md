# GUIDE.md — Claude Code Desktop 빌드 가이드

## 1. GitHub 레포 생성 + 푸시

```bash
# GitHub에서 새 레포 생성
# https://github.com/new → 이름: carrot-discovery-engine

# 로컬에서 클론 후 파일 복사
git clone https://github.com/pentacle123/carrot-discovery-engine.git
cd carrot-discovery-engine

# 이 프로젝트의 모든 파일을 복사한 후
git add -A
git commit -m "Initial: 한화캐롯 Brand Discovery AI Platform v3.0"
git push origin main
```

## 2. Vercel 배포

```bash
# Vercel CLI
npx vercel --prod
# 또는 https://vercel.com에서 GitHub 레포 연결
```

## 3. 프로젝트 구조

```
carrot-discovery-engine/
├── app/
│   ├── layout.js          # 루트 레이아웃 (Pretendard 폰트)
│   └── page.js            # 메인 페이지 (전체 플랫폼)
├── package.json           # Next.js 14 + React 18
├── next.config.js
├── .gitignore
└── README.md
```

## 4. 핵심 구조 설명 (page.js)

### 데이터 구조
- `USP_DATA[]` — 4개 USP (permile, women, tech, service)
- 각 USP에 `assets[]` (확인/확장), `opp[]` (확인된 기회), `ckws[]` (카테고리 키워드)
- 시장/숏폼/전략 데이터는 상단 상수로 하드코딩

### 컴포넌트 구조
- `App()` — 메인 (헤더 + 히어로 + 탭바 + 4개 탭)
- `USPPage({u})` — USP 상세 분석 페이지
  - 헤더 → 3열 정보 → 핵심 발견 3개
  - 제품 자산분석 (확인 풀카드 + 확장 소형그리드)
  - 확인된 기회 (자산별 아이콘 + 태그)
  - 맥락 발견 CTA → 6축 맥락 그리드 → AI TOP5

### Claude API 연동
- `runAI()` — `claude-sonnet-4-20250514` 호출
- JSON 포맷으로 TOP 5 맥락 조합 생성
- 구조화된 카드 UI로 렌더링 (점수/HOOK/씬/크리에이터)

### ListeningMind 데이터
- 모든 검색 볼륨/인구통계 하드코딩 (MCP 외부연결 불가)
- 데이터 소스: keyword_info, path_finder, cluster_finder

## 5. Claude Code Desktop에서 수정 시 참고

### 데이터 추가/수정
- `USP_DATA` 배열에서 각 USP의 `assets`, `opp`, `ckws` 수정
- `grade: "확인"` vs `"확장"` 구분 중요 (렌더링 다름)

### 새 USP 추가
- `USP_DATA`에 새 객체 추가 (id, nm, em, lv, str, assets, opp, ckws 필수)
- `subs` 객체에 id: 설명 추가

### 디자인 수정
- 컬러: `C`(오렌지), `LvS`(레벨별), `TC`(태그별)
- 아이콘: 각 USP의 `em` 필드, 자산의 `icon` 필드

## 6. 향후 확장 계획
- [ ] API 라우트 분리 (app/api/generate/)
- [ ] 데이터 파일 분리 (keywordPool.js, confirmedOpportunities.js)
- [ ] ListeningMind MCP 실시간 연동 (Vercel 서버사이드)
- [ ] 숏폼 제작 탭 추가 (삼양 4번째 탭)
