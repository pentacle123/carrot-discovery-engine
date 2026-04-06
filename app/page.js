"use client";
import { useState } from "react";
const C="#FF6B00",G="#1a1a1a",DIM="#888",RED="#E8505B";
const LvS={CORE:{fg:"#FF6B00",bg:"#FFF3E8"},NEW:{fg:"#E8505B",bg:"#FFF0F0"},TECH:{fg:"#3EC6FF",bg:"#EBF8FF"},SERVICE:{fg:"#00B894",bg:"#E6FFF8"}};
const TC={INTEREST:{fg:"#3b82f6",bg:"#EFF6FF"},PAIN:{fg:"#E8505B",bg:"#FFF0F0"},NEED:{fg:"#00B894",bg:"#E6FFF8"},LIFE:{fg:"#a855f7",bg:"#F5F0FF"},WHO:{fg:"#f59e0b",bg:"#FFFBEB"},WHERE:{fg:"#06b6d4",bg:"#ECFEFF"}};
const TABS=[{id:"market",l:"◉ 채널 성과 분석"},{id:"influence",l:"◆ 숏폼의 영향력"},{id:"strategy",l:"◇ 콘텐츠 전략"},{id:"usps",l:"▸ 브랜드자산 분석"}];
const mC=[{l:"숏폼 광고 접촉",v:"94.9%",s:"인스타 릴스",r:"오픈서베이"},{l:"광고 스킵률",v:"65.9%",s:"보험/금융 광고",r:"인크로스"},{l:"보험 숏폼 검색",v:"0건",s:"'자동차보험 유튜브'",r:"LM"},{l:"관심사 풀",v:"30만+",s:"보험 미검색 잠재",r:"LM"}];
const mD=[{m:"자동차보험 비교",v:"78,100/월",d:"가입 직전 경쟁 치열"},{m:"캐롯 브랜드",v:"54,400/월",d:"브랜드 인지"},{m:"고정비 절약",v:"62,000+/월",d:"잠재 풀"},{m:"임신·출산",v:"122,000+/월",d:"여성 특약 연결"}];
const pf=[{n:"YouTube Shorts",s:57.4,c:"#F00"},{n:"Instagram Reels",s:29.2,c:"#E4405F"},{n:"TikTok",s:10.6,c:"#000"},{n:"기타",s:2.8,c:"#ccc"}];
const iC=[{l:"인플루언서 ROI",v:"6.5배",s:"1달러→6.5달러",r:"IMH 2025"},{l:"관심사 CTR",v:"3.2배",s:"보험광고 대비",r:"내부"},{l:"숏폼 전환율",v:"+23%",s:"관심사 기반",r:"카테노이드"},{l:"마이크로 참여",v:"3~5배",s:"메가 대비",r:"나스미디어"}];
const sfTypes=[{n:"절약/재테크형",i:"💰",d:"고정비 줄이기에서 출발",c:C,p:"고정비 연 62K+"},{n:"안전/불안형",i:"🛡️",d:"혼자 운전 불안에서 출발",c:"#3EC6FF",p:"혼자운전 여성 86%"},{n:"라이프스타일형",i:"👶",d:"임산부/육아맘에서 출발",c:RED,p:"출산준비물 연 55K+"}];
const prin=[{t:"무관여 카테고리",i:"🎯",b:"캐롯 퍼마일 → 스킵",g:"고정비 중 이것, 줄일 수 있는 거?"},{t:"90/10 공식",i:"⚖️",b:"보험 광고를 숏폼에",g:"관심사 → Bridge → 캐롯 발견"},{t:"같은 차, 다른 보험",i:"🚗",b:"최저가 비교 → 가격 매몰",g:"주말만 타는 차에 왜 매일 보험료?"},{t:"여성 안전 진정성",i:"💜",b:"핑크 마케팅 → 표면적",g:"실제 불안 데이터 기반 솔루션"}];

const USP_DATA=[
{id:"permile",nm:"퍼마일 월정산",em:"⏱️",lv:"CORE",str:"Saving-hook",
desc:"주행거리 기반 보험료 · 안 타는 만큼 안 내는 구조",
def:"보험을 '절약'의 언어로 번역한다.\n안 타는 만큼 안 내는 구조가 절약 관심사 안에서 발견된다.",
bv:54400,bva:652800,
prof:{f:58,a3:38,a4:28},
jn:[{r:1,f:"자동차보험 비교",t:"자동차보험 다이렉트",n:"가격 비교 분기점"},{r:2,f:"고정비 줄이기",t:"자동차 유지비",n:"절약 맥락 진입"},{r:3,f:"육아휴직",t:"자동차보험",n:"차 안 타는 기간 → 보험 재검토"}],
comp:"자동차보험 비교(연 937K) 검색에서 퍼마일 구조적 차별점 노출 없음. 가격 비교만 존재.",ckw:"자동차보험 비교",cv:937200,
findings:[{i:"🔥",t:"카테고리 진입만이 답",d:"퍼마일 직접 검색 연 6,156회. 카테고리(연 1,200만+)에서 발견되게 해야 함."},{i:"📊",t:"차 안 타는 시간 = 돈",d:"육아휴직(941K), 재택근무(168K) — 차 안 타는 기간에 보험료가 줄어드는 경험"},{i:"⚡",t:"대중교통 6.6M",d:"K패스·기후동행카드 검색자 = 평일 차 안 타는 사람. 숏폼 후킹 소재 최강"}],
assets:[
{name:"육아휴직",desc:"육아휴직 기간 = 차 안 타는 기간 확실",vol:941000,top:"육아휴직 (941K)",icon:"👶",grade:"확인"},
{name:"자동차 비용 절약",desc:"기름값, 주유할인카드, 차계부, 자동차 유지비",vol:937740,top:"기름값 (300K+)",icon:"💰",grade:"확인"},
{name:"자동차 고정비 관리",desc:"자동차세 연납, 엔진오일, 셀프세차",vol:851081,top:"자동차세 연납 (300K+)",icon:"🔧",grade:"확인"},
{name:"차 소유 비용 고민",desc:"중고차 판매, 카셰어링",vol:251190,top:"중고차 판매 (200K+)",icon:"🚙",grade:"확인"},
{name:"연비/효율 관심",desc:"연비 좋은 차 순위",vol:248320,top:"연비 좋은 차 (248K)",icon:"⛽",grade:"확인"},
{name:"재택근무",desc:"재택근무, 원격근무",vol:168160,top:"재택근무 (168K)",icon:"🏠",grade:"확인"},
{name:"학원 픽업/라이딩맘",desc:"학원 픽업, 학원 셔틀",vol:14520,top:"학원 픽업 (14K)",icon:"🎒",grade:"확장"},
{name:"대중교통 통근자",desc:"K패스, 기후동행카드",vol:6627240,top:"K패스 (5M+)",icon:"🚇",grade:"확장"},
{name:"전기차 관심",desc:"전기차 보조금, 충전, 유지비",vol:1398910,top:"전기차 보조금 (1M+)",icon:"🔌",grade:"확장"},
{name:"주말 차량 사용",desc:"캠핑, 차박, 주말 드라이브",vol:764100,top:"캠핑 (500K+)",icon:"⛺",grade:"확장"},
{name:"절약 라이프스타일",desc:"가계부, 짠테크, 돈 모으는 법",vol:750630,top:"가계부 (688K)",icon:"📒",grade:"확장"},
{name:"구독형 월정산",desc:"넷플릭스처럼 매달 쓴 만큼만",vol:2383596,top:"넷플릭스 추천 (198K)",icon:"📺",grade:"확인"},
],
opp:[
{a:"육아휴직",tag:"LIFE",who:"육아휴직 중 엄마 (여 70%+)",sf:"육아휴직 6개월, 차는 주차장에. 보험료는 왜 매달 같은 금액?",vol:941000,path:"육아휴직 → 보험 경로 0 = 완전한 블루오션",kw:"육아휴직",kwV:78416},
{a:"자동차 비용 절약",tag:"INTEREST",who:"차 비용 절약 관심 (여 55%)",sf:"주유할인카드 만들면서, 보험료는 왜 안 줄이세요?",vol:937740,path:"기름값/주유할인카드 → 보험 경로 0",kw:"주유할인카드+기름값",kwV:78145},
{a:"자동차 고정비 관리",tag:"PAIN",who:"자동차세/정비 관심자",sf:"자동차세 연납으로 10% 아꼈는데, 보험료는 연납해도 안 줄잖아요. 퍼마일은 줄어요.",vol:851081,path:"자동차세 연납 → 보험 경로 약함",kw:"자동차세 연납",kwV:70923},
{a:"재택근무",tag:"INTEREST",who:"재택근무 여성 (여 68%)",sf:"재택 3일이면 주행 60% 감소. 보험료는 왜 같나요?",vol:168160,path:"재택근무 → 보험 경로 0 = Ad Competition 0",kw:"재택근무",kwV:14013},
{a:"대중교통 통근자",tag:"INTEREST",who:"K패스/기후동행 사용자",sf:"K패스로 출퇴근하는데, 차는 주말만. 보험료는 365일치?",vol:6627240,path:"K패스 → 보험 경로 0. 볼륨 극대 = 숏폼 후킹 최강",kw:"K패스",kwV:552270},
{a:"연비/효율",tag:"NEED",who:"합리적 차량 구매자",sf:"연비 좋은 차 사놓고, 보험료는 왜 주행거리 안 봐요?",vol:248320,path:"연비 관심 = 합리적 소비자 = 퍼마일 구조 이해 빠름",kw:"연비 좋은 차",kwV:20693},
{a:"절약 라이프스타일",tag:"INTEREST",who:"가계부 쓰는 여성 (여 76%)",sf:"가계부에 보험료 적으면서, 이게 줄일 수 있는 건지 몰랐죠?",vol:750630,path:"가계부/짠테크 → 보험 경로 0",kw:"가계부",kwV:62552},
{a:"월정산 구조 (구독형)",tag:"INTEREST",who:"넷플릭스 구독자 (여 60%, 40대 34%)",sf:"넷플릭스는 월 구독하면서, 자동차 보험료는 왜 탄 만큼 월 구독 안 하세요?",vol:2383596,path:"넷플릭스 추천 198K/월 → 구독 모델 익숙한 소비자. 보험도 월정산이라는 인식 전환",kw:"넷플릭스 추천",kwV:198633},
],
ckws:[
{kw:"K패스",vol:6627240,t:"↑"},{kw:"넷플릭스 추천",vol:2383596,t:"↑"},{kw:"전기차 보조금",vol:1398910,t:"→"},
{kw:"육아휴직",vol:941000,t:"→"},{kw:"자동차 비용 절약",vol:937740,t:"↓"},{kw:"자동차 고정비",vol:851081,t:"→"},
{kw:"주말 차량",vol:764100,t:"↑"},{kw:"절약 라이프",vol:750630,t:"↓"},{kw:"연비/효율",vol:248320,t:"→"},
{kw:"재택근무",vol:168160,t:"↓"},
]},
{id:"women",nm:"여성/자녀 특약",em:"🎀",lv:"NEW",str:"Family-hook",
desc:"lady케어 · 자녀할인 32.3% · 자녀올케어 · 사고알림 · 여성전용보상",
def:"여성 운전자를 위해 설계된 보험.\n출산·육아 관심사에서 자연스러운 보험 발견.",
bv:2400,bva:28800,prof:{f:78,a3:42,a4:22},
jn:[{r:1,f:"출산준비물",t:"카시트 추천",n:"보험 경로 부재 = 기회"},{r:2,f:"초보운전 스티커",t:"장롱면허 연습",n:"보험 경로 부재"},{r:3,f:"아이돌봄서비스",t:"돌봄 비용",n:"가사도우미 연결"}],
comp:"출산준비물(연 696K), 카시트(연 245K) 검색에서 자동차보험 광고 0건.",ckw:"Ad Competition 0",cv:0,
findings:[{i:"🔥",t:"Ad Competition 0",d:"카시트·유모차·아이돌봄 검색에서 보험 광고 0건"},{i:"📊",t:"태아보험 708K/월",d:"태아보험 검색자 중 자동차보험 자녀할인 인지율 극저"},{i:"⚡",t:"+70% 급성장",d:"아이돌봄서비스 검색 급성장 — 지금이 선점 타이밍"}],
assets:[
{name:"자녀할인 최대 32.3%",desc:"2026.05 신규 · 태아~자녀",vol:9417840,top:"태아보험 (708K)",icon:"🍼",grade:"확인"},
{name:"자녀 올케어 특약",desc:"차량 탑승 + 등하교길",vol:2374152,top:"주니어 카시트 (28K)",icon:"🎒",grade:"확인"},
{name:"가사도우미 지원금 (600만)",desc:"사고 시 아이돌봄 비용",vol:1434792,top:"아이돌봄서비스 (119K)",icon:"👶",grade:"확인"},
{name:"핸드백 손해보장 (100만)",desc:"명품 가방 파손 보장",vol:6589464,top:"샤넬 (190K)",icon:"👜",grade:"확인"},
{name:"카시트/유모차 손해보장",desc:"각 50만원 보장",vol:549336,top:"싸이벡스 카시트 (20K)",icon:"🧸",grade:"확인"},
{name:"사고 알림 서비스",desc:"AI 사고감지 → 가족 알림",vol:539088,top:"초보운전 스티커 (12K)",icon:"🚨",grade:"확인"},
{name:"여성 전용 보상",desc:"1:1 전담 · 횟수 무관",vol:5232,top:"초보운전 연습 (436)",icon:"💜",grade:"확인"},
],
opp:[
{a:"자녀할인 32.3%",tag:"NEED",who:"임산부 (여 88%)",sf:"출산준비물에 자동차보험 자녀할인 추가하세요",vol:8505240,path:"태아보험 검색자 중 인지율 극저",kw:"태아보험",kwV:708770},
{a:"자녀 올케어",tag:"LIFE",who:"가족 여행 (여 59%)",sf:"글램핑 가는 길, 아이가 뒷좌석에",vol:1786800,path:"글램핑 14.8만/월",kw:"글램핑",kwV:148900},
{a:"가사도우미 지원금",tag:"PAIN",who:"워킹맘 (여 84%)",sf:"사고 입원하면 아이는? 600만원 지원",vol:1434792,path:"아이돌봄 +70% 급성장",kw:"아이돌봄서비스",kwV:119566},
{a:"사고 알림",tag:"PAIN",who:"초보운전 여성 (여 71%)",sf:"장롱면허 꺼냈는데, 사고 나면 자동 알림",vol:153720,path:"초보운전 → 보험 0",kw:"초보운전 스티커",kwV:12810},
{a:"사고 알림",tag:"INTEREST",who:"1인가구 (여 67%)",sf:"혼자 사는데 사고 나면? AI가 알려줘요",vol:337200,path:"자취 2.8만/월",kw:"자취",kwV:28100},
],
ckws:[
{kw:"태아보험",vol:8505240,t:"↑"},{kw:"글램핑",vol:1786800,t:"↓"},{kw:"아이돌봄서비스",vol:1434792,t:"↑"},
{kw:"출산준비물",vol:696000,t:"→"},{kw:"자취",vol:337200,t:"↑"},{kw:"주니어 카시트",vol:336552,t:"↑"},
{kw:"싸이벡스 카시트",vol:245196,t:"→"},{kw:"초보운전 스티커",vol:153720,t:"↑"},
]},
{id:"tech",nm:"캐롯 테크",em:"🤖",lv:"TECH",str:"Tech-hook",
desc:"커넥티드카 25.8% · 티맵 20% · 캐롯플러그 AI",
def:"업계 유일 IoT + 커넥티드.\n신차 출고 = 보험료 할인이라는 새 공식.",
bv:2020,bva:24240,prof:{f:38,a3:36,a4:32},
jn:[{r:1,f:"셀토스",t:"자동차보험",n:"신차 → 보험 필요"},{r:2,f:"블루링크",t:"커넥티드카",n:"할인 경로 미존재"},{r:3,f:"자율주행",t:"테슬라 FSD",n:"AI 기술 관심"}],
comp:"신차 검색(합산 연 1,500만+)에서 커넥티드카 보험할인 광고 0건.",ckw:"신차 검색 합산",cv:15000000,
findings:[{i:"🔥",t:"신차 = 보험 필요",d:"신차 구매자에게 커넥티드 보험할인을 알리는 경쟁자 0"},{i:"📊",t:"신차를 싸게 사는 효과",d:"3년 보험료 할인 = 옵션 하나 더 넣은 값"},{i:"⚡",t:"AI 관심 연결",d:"자율주행/FSD 관심자에게 '지금 쓸 수 있는 AI' 어필"}],
assets:[
{name:"커넥티드카 특약 25.8~14.2%",desc:"블루링크/기아커넥트/제네시스",vol:12574356,top:"셀토스 (646K)",icon:"🚙",grade:"확인"},
{name:"캐롯플러그 AI 사고감지",desc:"SOS + AI충격감지 + 굿드라이브",vol:1774956,top:"테슬라 FSD (94K)",icon:"🤖",grade:"확인"},
{name:"티맵안전운전 최대 20%",desc:"T맵 점수 연동",vol:1327920,top:"티맵 (109K)",icon:"🗺️",grade:"확인"},
],
opp:[
{a:"커넥티드카",tag:"NEED",who:"신차 구매자 (남 60%)",sf:"투싼 출고 = 블루링크 = 보험료 25%. 150만원 싸게 산 거예요",vol:7757592,path:"신차 → 커넥티드 보험 경로 0",kw:"셀토스",kwV:646466},
{a:"커넥티드카",tag:"INTEREST",who:"중고차 (남 63%)",sf:"중고 투싼 블루링크 살아있으면 25% 할인",vol:792276,path:"중고차 커넥티드 잔존",kw:"중고차 시세",kwV:66023},
{a:"캐롯플러그",tag:"INTEREST",who:"AI/테크 (남 71%)",sf:"자율주행은 아직, AI 사고감지는 지금",vol:1503276,path:"FSD → 현재 기술",kw:"자율주행+FSD",kwV:125273},
],
ckws:[
{kw:"셀토스",vol:7757592,t:"→"},{kw:"GV70",vol:3498396,t:"→"},{kw:"티맵",vol:1317600,t:"→"},
{kw:"테슬라 FSD",vol:1131156,t:"↑"},{kw:"중고차 시세",vol:792276,t:"→"},{kw:"블루링크",vol:302436,t:"→"},
{kw:"블랙박스 추천",vol:272760,t:"↓"},
]},
{id:"service",nm:"보험서비스",em:"🔧",lv:"SERVICE",str:"Trust-hook",
desc:"히어로손해사정 · 스피드메이트 네트워크",
def:"사고 후가 진짜 보험이다.\n공정한 보상과 빠른 수리로 발견.",
bv:0,bva:0,prof:{f:45,a3:33,a4:28},
jn:[{r:1,f:"교통사고 합의금",t:"손해사정사",n:"합의금 불안"},{r:2,f:"판금 도색",t:"스피드메이트",n:"수리처 탐색"},{r:3,f:"교통사고 변호사",t:"보험 보상",n:"법적 분쟁"}],
comp:"교통사고 변호사 CPC $19.82 극한 레드오션. 숏폼 우회 효율.",ckw:"교통사고 변호사",cv:59952,
findings:[{i:"🔥",t:"CPC $19.82",d:"교통사고 변호사 레드오션 → 숏폼 우회 비용 효율"},{i:"📊",t:"스피드메이트 88K/월",d:"브랜드 인지도 높음 → 캐롯 연결 신뢰 포인트"},{i:"⚡",t:"사후 리타겟팅",d:"사고 후 검색 → 다음 보험 갱신 시 캐롯 선택 유도"}],
assets:[
{name:"스피드메이트 네트워크",desc:"전국 SK 정비 · 품질 보증",vol:1108080,top:"스피드메이트 (88K)",icon:"🔧",grade:"확인"},
{name:"히어로손해사정",desc:"고객 편 전속 손해사정법인",vol:215592,top:"교통사고 합의금 (17K)",icon:"⚖️",grade:"확인"},
],
opp:[
{a:"스피드메이트",tag:"INTEREST",who:"수리처 탐색 (남 68%)",sf:"사고 수리 = 전국 스피드메이트 품질 보증",vol:1064520,path:"브랜드 인지도 활용",kw:"스피드메이트",kwV:88710},
{a:"히어로손해사정",tag:"PAIN",who:"합의금 불안 (남 53%)",sf:"보험사가 300만원? 내 편 손해사정사가 다시 봐줘요",vol:215592,path:"합의금 연 21.5만",kw:"교통사고 합의금",kwV:17966},
],
ckws:[
{kw:"스피드메이트",vol:1064520,t:"↓"},{kw:"손해사정사",vol:903672,t:"→"},
{kw:"교통사고 합의금",vol:215592,t:"↓"},{kw:"교통사고 변호사",vol:59952,t:"↓"},{kw:"판금 도색",vol:43560,t:"↓"},
]},
];

const fmt=v=>v?v.toLocaleString():"0";
const oppIcon=(u,a)=>{const m=u.assets.find(x=>a.startsWith(x.name.substring(0,3)));return m?m.icon:u.em;};
const HBar=({r,c})=>(<div style={{width:"100%",height:8,background:"#f0f0ee",borderRadius:4,overflow:"hidden"}}><div style={{width:`${Math.min(r*100,100)}%`,height:"100%",background:c,borderRadius:4,transition:"width .5s"}}/></div>);
const Tag=({t})=>{const s=TC[t]||TC.INTEREST;return <span style={{background:s.bg,color:s.fg,padding:"2px 10px",borderRadius:4,fontSize:11,fontWeight:700}}>{t}</span>};

function USPPage({u}){
const[showAI,setShowAI]=useState(false);
const[aiR,setAiR]=useState(null);
const[aiL,setAiL]=useState(false);
const lv=LvS[u.lv];
const totVol=u.assets.reduce((s,a)=>s+a.vol,0);
const maxA=Math.max(...u.assets.map(a=>a.vol));
const maxK=Math.max(...u.ckws.map(k=>k.vol));
const mult=u.bva>0?Math.round(totVol/u.bva):"∞";
const confirmed=u.assets.filter(a=>a.grade==="확인");
const expanded=u.assets.filter(a=>a.grade==="확장");
const runAI=async()=>{setShowAI(true);if(aiR)return;setAiL(true);try{const r=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:2000,messages:[{role:"user",content:`캐롯 자동차보험 "${u.nm}" USP의 소비자 맥락을 분석하여 AI 추천 맥락 조합 TOP 5를 JSON으로 생성하세요.

USP 자산: ${u.assets.filter(a=>a.grade==="확인").map(a=>a.name+"(~"+a.vol+"회/연)").join(", ")}
확인된 기회: ${u.opp.map(o=>o.tag+": "+o.who+" → "+o.sf).join(" | ")}

반드시 아래 JSON 형식으로만 응답하세요. 설명이나 마크다운 없이 순수 JSON만:
[
{"title":"제목","score":95,"type":"C. 크로스: 절약","ctx":"맥락조합 설명 한 줄","data":"데이터근거 한 줄","hook":"숏폼 후킹 메시지","s1":"씬1","s2":"씬2","s3":"씬3","s4":"씬4","creator":"크리에이터 협업 제안"}
]

5개 생성. "이 USP가 가치 있을 사람의 삶"에서 출발. 보험 광고 아닌 관심사 콘텐츠. 한국어.`}]})});const d=await r.json();const t=d.content?.map(i=>i.text||"").join("")||"[]";try{const p=JSON.parse(t.replace(/```json|```/g,"").trim());setAiR(p);}catch{setAiR(t)}}catch(e){setAiR("오류: "+e.message);}setAiL(false);};

return(
<div style={{display:"flex",flexDirection:"column",gap:14}}>
{/* 헤더 */}
<div style={{background:"#fff",borderRadius:14,padding:20,border:"1px solid #f0f0f0",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
<div style={{display:"flex",gap:14,alignItems:"center"}}>
<span style={{fontSize:36}}>{u.em}</span>
<div>
<div style={{display:"flex",gap:8,alignItems:"center"}}><span style={{fontSize:18,fontWeight:900}}>{u.nm}</span><span style={{fontSize:11,color:"#888"}}>{u.desc}</span></div>
<div style={{display:"flex",gap:6,marginTop:4}}><span style={{background:lv.bg,color:lv.fg,padding:"2px 10px",borderRadius:20,fontSize:11,fontWeight:700}}>{u.str}</span><span style={{background:lv.bg,color:lv.fg,padding:"2px 10px",borderRadius:20,fontSize:11,fontWeight:700}}>{u.lv}</span></div>
</div></div>
<div style={{textAlign:"right"}}><div style={{fontSize:28,fontWeight:900,color:lv.fg}}>{fmt(u.bv)}</div><div style={{fontSize:11,color:"#888"}}>월 검색량</div></div>
</div>

{/* 3열 정보 */}
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10}}>
<div style={{background:"#fff",borderRadius:12,padding:14,border:"1px solid #f0f0f0"}}>
<div style={{fontSize:12,fontWeight:700,marginBottom:10}}>👤 소비자 프로필</div>
{[{l:"여성",v:u.prof.f},{l:"30대",v:u.prof.a3},{l:"40대",v:u.prof.a4}].map((r,i)=>(
<div key={i} style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}>
<span style={{fontSize:11,width:30,color:"#666"}}>{r.l}</span>
<div style={{flex:1,height:12,background:"#f5f5f3",borderRadius:6,overflow:"hidden"}}><div style={{width:`${r.v}%`,height:"100%",background:lv.fg,borderRadius:6,opacity:i===0?1:.6}}/></div>
<span style={{fontSize:12,fontWeight:700,width:36,textAlign:"right"}}>{r.v}%</span>
</div>))}
</div>
<div style={{background:"#fff",borderRadius:12,padding:14,border:"1px solid #f0f0f0"}}>
<div style={{fontSize:12,fontWeight:700,marginBottom:10}}>🔀 검색 여정 TOP3</div>
{u.jn.map((j,i)=>(<div key={i} style={{background:"#fafaf7",borderLeft:`3px solid ${lv.fg}`,padding:"5px 10px",borderRadius:"0 6px 6px 0",marginBottom:6}}><div style={{fontSize:11}}><strong style={{color:lv.fg}}>#{j.r}</strong> '{j.f}' → '{j.t}'</div><div style={{fontSize:10,color:"#999"}}>{j.n}</div></div>))}
</div>
<div style={{background:"#fff",borderRadius:12,padding:14,border:"1px solid #f0f0f0"}}>
<div style={{fontSize:12,fontWeight:700,marginBottom:10}}>⚔️ 경쟁 환경</div>
<div style={{fontSize:11,color:"#666",lineHeight:1.5,marginBottom:10}}>{u.comp}</div>
<div style={{background:"#fafaf7",borderRadius:8,padding:10}}><div style={{fontSize:10,color:lv.fg,fontWeight:700}}>TOP 키워드</div><div style={{fontSize:14,fontWeight:800}}>{u.ckw}</div><div style={{fontSize:10,color:"#888"}}>연 {fmt(u.cv)}회</div></div>
</div></div>

{/* 핵심 발견 3개 */}
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10}}>
{u.findings.map((f,i)=>(
<div key={i} style={{background:"#fff",borderRadius:12,padding:16,border:"1px solid #f0f0f0"}}>
<div style={{fontSize:20,marginBottom:8}}>{f.i}</div>
<div style={{fontSize:13,fontWeight:800,marginBottom:4}}>{f.t}</div>
<div style={{fontSize:11,color:"#666",lineHeight:1.5}}>{f.d}</div>
</div>))}
</div>

{/* 제품 자산 분석 */}
<div style={{background:"#fff",borderRadius:14,padding:20,border:"1px solid #f0f0f0"}}>
<div style={{fontSize:14,fontWeight:800,marginBottom:2}}>🔬 제품 자산분석을 통한 관심 소구 카테고리 기회</div>
<div style={{fontSize:11,color:"#888",marginBottom:14}}>이 제품의 핵심 자산을 분해하고, 각 자산이 연결되는 카테고리 기회를 분석했습니다</div>
{u.assets.filter(a=>a.grade==="확인").map((a,i)=>(<div key={i} style={{background:"#fafaf7",borderRadius:10,padding:14,marginBottom:10,border:"1px solid #eee"}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
<div style={{display:"flex",gap:10,alignItems:"center"}}>
<span style={{fontSize:20}}>{a.icon}</span>
<div><div style={{fontSize:13,fontWeight:700}}>{a.name}</div><div style={{fontSize:10,color:"#888"}}>{a.desc}</div></div>
</div>
<div style={{textAlign:"right"}}><div style={{fontSize:17,fontWeight:900,color:lv.fg}}>~{fmt(a.vol)}<span style={{fontSize:10,color:"#888"}}>회/연</span></div><div style={{fontSize:10,color:"#888"}}>TOP: {a.top}</div></div>
</div>
<div style={{marginTop:8}}><HBar r={a.vol/maxA} c={lv.fg}/></div>
</div>))}
{expanded.length>0&&<div>
<div style={{fontSize:11,color:"#888",marginBottom:8}}>🔍 확장 기회</div>
<div style={{display:"grid",gridTemplateColumns:`repeat(${Math.min(expanded.length,4)},1fr)`,gap:8}}>
{expanded.map((a,i)=>(<div key={i} style={{background:"#fafaf7",borderRadius:8,padding:"10px 12px",border:"1px solid #eee"}}>
<div style={{display:"flex",gap:6,alignItems:"center",marginBottom:4}}><span style={{fontSize:14}}>{a.icon}</span><span style={{fontSize:11,fontWeight:700}}>{a.name}</span></div>
<div style={{fontSize:14,fontWeight:900,color:lv.fg}}>~{fmt(a.vol)}</div>
<div style={{fontSize:9,color:"#888"}}>{a.desc}</div>
</div>))}
</div></div>}
<div style={{background:`linear-gradient(135deg,${lv.bg},#fff)`,borderRadius:10,padding:16,marginTop:6,textAlign:"center"}}>
<span style={{fontSize:12}}>💡 {u.nm} 검색 <strong>{fmt(u.bva)}회</strong> vs 카테고리 합계 <strong>{fmt(totVol)}회</strong> = </span>
<span style={{fontSize:24,fontWeight:900,color:lv.fg}}>{mult}배</span><span style={{fontSize:12}}>의 기회</span>
<div style={{fontSize:10,color:"#888",marginTop:4}}>브랜드를 모르는 소비자가 이미 관련 카테고리를 검색하고 있습니다.</div>
</div></div>

{/* 확인된 기회 */}
<div style={{background:"#fff",borderRadius:14,padding:20,border:"1px solid #f0f0f0"}}>
<div style={{fontSize:14,fontWeight:800,marginBottom:2}}>✅ 확인된 기회</div>
<div style={{fontSize:11,color:"#888",marginBottom:14}}>데이터로 검증된 자산 × 맥락 교차점 — 숏폼 콘텐츠의 출발점</div>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
{u.opp.map((c,i)=>(<div key={i} style={{background:"#fff",borderRadius:10,padding:14,border:"1px solid #eee"}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8}}>
<div style={{display:"flex",gap:8,alignItems:"center"}}><span style={{fontSize:18}}>{oppIcon(u,c.a)}</span><div><div style={{display:"flex",gap:6,alignItems:"center"}}><span style={{fontSize:12,fontWeight:700}}>{c.a}</span><Tag t={c.tag}/></div><div style={{fontSize:10,color:"#888"}}>{c.who}</div></div></div>
<div style={{textAlign:"right"}}><div style={{background:"#E6FFF8",color:"#00B894",padding:"1px 8px",borderRadius:20,fontSize:10,fontWeight:700,display:"inline-block",marginBottom:3}}>✅ 카테고리 기회</div><div style={{fontSize:15,fontWeight:900,color:lv.fg}}>연 {fmt(c.vol)}회</div></div>
</div>
<div style={{fontSize:13,fontWeight:700,margin:"4px 0"}}>💡 "{c.sf}"</div>
{c.path&&<div style={{display:"inline-flex",gap:4,background:"#EFF6FF",padding:"3px 10px",borderRadius:20,fontSize:10,color:"#3b82f6"}}>🔀 {c.path}</div>}
</div>))}
</div></div>

{/* 맥락 발견 CTA */}
<div style={{textAlign:"center",padding:"8px 0"}}><button onClick={()=>{setShowAI(true);if(!aiR)runAI();}} style={{background:`linear-gradient(135deg,${lv.fg},${lv.fg}dd)`,color:"#fff",border:"none",borderRadius:12,padding:"14px 40px",fontSize:14,fontWeight:700,cursor:"pointer",boxShadow:`0 4px 16px ${lv.fg}33`}}>{aiL?"⏳ AI가 소비자 맥락을 분석하고 있습니다":"◈ 이 데이터를 기반으로 맥락을 발견합니다 →"}</button></div>

{showAI&&<>
{/* 맥락 발견 페이지 */}
<div style={{background:"#fff",borderRadius:14,padding:20,border:"1px solid #f0f0f0"}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
<div><div style={{fontSize:16,fontWeight:900}}>◈ 맥락 발견</div><div style={{fontSize:11,color:"#888"}}>{u.em} {u.nm} — AI가 최적의 상황적 맥락 조합을 추천합니다</div></div>
</div>

{/* 제품 헤더 + 태그 + AI 버튼 */}
<div style={{background:"#fafaf7",borderRadius:12,padding:"16px 20px",marginBottom:16,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
<div style={{display:"flex",gap:12,alignItems:"center"}}>
<span style={{fontSize:32}}>{u.em}</span>
<div>
<div style={{fontSize:16,fontWeight:900}}>{u.nm}</div>
<div style={{display:"flex",gap:6,marginTop:6,flexWrap:"wrap"}}>{u.assets.filter(a=>a.grade==="확인").slice(0,5).map((a,i)=>(<span key={i} style={{fontSize:10,padding:"3px 10px",borderRadius:20,border:"1px solid #ddd",color:"#555"}}>{a.name.split(" ")[0]}</span>))}</div>
</div>
</div>
<button onClick={()=>{if(!aiR)runAI();}} style={{background:lv.fg,color:"#fff",border:"none",borderRadius:30,padding:"12px 28px",fontSize:14,fontWeight:700,cursor:"pointer",whiteSpace:"nowrap"}}>◎ AI 맥락 매칭 실행</button>
</div>

{/* 소비자 맥락 그리드 */}
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
<div style={{fontSize:12,color:"#888"}}>소비자 맥락 그리드</div>
<div style={{display:"flex",gap:8}}><span style={{fontSize:10,padding:"4px 10px",borderRadius:20,border:"1px solid #eee",color:"#888"}}>📊 ListeningMind 검증</span><span style={{fontSize:10,padding:"4px 10px",borderRadius:20,border:"1px solid #eee",color:"#888"}}>🔀 PathFinder 경로</span></div>
</div>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10}}>
{[
{ax:"WHO",q:"누가 찾는가?",c:"#22c55e",tags:u.opp.slice(0,3).map(o=>o.who.split("(")[0].trim()),ev:`여성 ${u.prof.f}% | 30대 ${u.prof.a3}% · 40대 ${u.prof.a4}%`},
{ax:"WHEN",q:"언제?",c:"#f59e0b",tags:["보험 만기 1개월 전","육아휴직 시작","재택근무 전환 시"],ev:`'육아휴직' 연 941K회 · 차 안 타는 기간 = 퍼마일 전환 시점`},
{ax:"WHERE",q:"어디서?",c:"#3b82f6",tags:["절약 커뮤니티","맘카페","자동차 포럼"],ev:`SERP 비디오 결과 존재 — 영상 콘텐츠 수요 | 가계부 여 76%`},
{ax:"PAIN",q:"어떤 불만?",c:"#ef4444",tags:["1년치 목돈 보험료","적게 타도 같은 보험료","보험료 비교 피로"],ev:`'자동차보험 비교' 연 937K회 — 가격 비교만 존재, 구조적 대안 부재`},
{ax:"NEED",q:"어떤 욕구?",c:"#22c55e",tags:["탄 만큼만 내고 싶다","월정산으로 관리","고정비 줄이기"],ev:`'고정비 줄이기' 연 62K회 — 절약 욕구와 퍼마일 구조 직결`},
{ax:"INTEREST",q:"관심사?",c:"#a855f7",tags:["넷플릭스 구독","가계부/짠테크","K패스/대중교통"],ev:`PathFinder: '가계부'→'고정비'→'보험료' 경로 확인 | '넷플릭스 추천' 연 2.4M회`},
].map((x,i)=>(<div key={i} style={{background:"#fff",borderRadius:12,padding:16,border:"1px solid #f0f0f0"}}>
<div style={{display:"flex",alignItems:"center",gap:6,marginBottom:8}}><span style={{width:8,height:8,borderRadius:4,background:x.c}}/><span style={{fontSize:14,fontWeight:800,color:x.c}}>{x.ax}</span></div>
<div style={{fontSize:11,color:"#888",marginBottom:8}}>{x.q}</div>
<div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:10}}>{x.tags.map((t,j)=>(<span key={j} style={{fontSize:11,padding:"3px 10px",borderRadius:20,border:"1px solid #eee",color:"#555"}}>{t}</span>))}</div>
<div style={{background:"#fafaf7",borderRadius:8,padding:"8px 10px"}}><div style={{fontSize:9,color:"#888",fontWeight:700,marginBottom:2}}>📊 DATA EVIDENCE</div><div style={{fontSize:10,color:"#555"}}>{x.ev}</div></div>
</div>))}
</div></div>

{/* AI 생성 결과 */}
{aiL&&<div style={{background:"#fff",borderRadius:14,padding:40,border:"1px solid #f0f0f0",textAlign:"center"}}>
<div style={{width:48,height:48,border:`3px solid ${lv.fg}`,borderTop:"3px solid transparent",borderRadius:"50%",margin:"0 auto 16px",animation:"sp .8s linear infinite"}}/>
<div style={{fontSize:16,fontWeight:800,color:G}}>AI가 소비자 맥락을 분석하고 있습니다</div>
<div style={{fontSize:12,color:"#888",marginTop:4}}>Claude AI가 매번 새로운 아이디어를 생성합니다</div>
</div>}

{aiR&&<div style={{background:"#fff",borderRadius:14,padding:20,border:"1px solid #f0f0f0"}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
<div style={{fontSize:16,fontWeight:900}}>● AI 추천 맥락 조합 TOP 5</div>
<button onClick={()=>{setAiR(null);runAI();}} style={{fontSize:11,padding:"6px 14px",borderRadius:20,border:"1px solid #eee",background:"#fff",cursor:"pointer",color:"#888"}}>↻ 다른 관점으로 재생성</button>
</div>
<div style={{display:"flex",gap:8,marginBottom:16}}>
{["AI 자동 추천","A. 소비자 맥락 조합","B. 검색 여정 발견","C. 크로스 카테고리"].map((f,i)=>(<button key={i} style={{fontSize:11,padding:"6px 14px",borderRadius:20,border:"none",background:i===0?lv.fg:"#f5f5f5",color:i===0?"#fff":"#888",fontWeight:i===0?700:500,cursor:"pointer"}}>{f}</button>))}
</div>
{Array.isArray(aiR)?aiR.map((item,i)=>(
<div key={i} style={{background:"#fff",borderRadius:14,padding:0,marginBottom:16,border:"1px solid #eee",overflow:"hidden"}}>
<div style={{display:"flex"}}>
{/* 폰 미리보기 */}
<div style={{width:140,background:"#fafaf7",padding:16,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",borderRight:"1px solid #eee"}}>
<div style={{background:lv.bg,borderRadius:8,padding:"8px 10px",fontSize:10,color:lv.fg,fontWeight:700,marginBottom:8,textAlign:"center"}}>{item.type}</div>
<div style={{fontSize:11,color:"#555",textAlign:"center",lineHeight:1.5,fontWeight:600}}>"{item.hook?.substring(0,30)}..."</div>
<div style={{display:"flex",gap:8,marginTop:8}}><span style={{fontSize:10,color:"#bbb"}}>♡ {Math.floor(Math.random()*300+100)}</span><span style={{fontSize:10,color:"#bbb"}}>💬 {Math.floor(Math.random()*80+20)}</span></div>
</div>
{/* 콘텐츠 */}
<div style={{flex:1,padding:"16px 20px"}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8}}>
<div>
<div style={{display:"flex",gap:8,alignItems:"center",marginBottom:4}}>
<span style={{background:lv.fg,color:"#fff",width:24,height:24,borderRadius:12,display:"inline-flex",alignItems:"center",justifyContent:"center",fontSize:13,fontWeight:800}}>{i+1}</span>
<span style={{fontSize:15,fontWeight:900}}>{item.title}</span>
</div>
<div style={{display:"flex",gap:8,alignItems:"center",marginTop:4}}>
<span style={{fontSize:10,color:lv.fg,fontWeight:700}}>{item.type}</span>
<span style={{fontSize:10,padding:"2px 8px",borderRadius:10,background:"#f5f5f5",color:"#888"}}>{item.ctx}</span>
</div>
</div>
<span style={{fontSize:32,fontWeight:900,color:lv.fg}}>{item.score}</span>
</div>
<div style={{fontSize:10,color:"#888",marginBottom:8}}>📊 📊 {item.data}</div>
<div style={{marginBottom:10}}><span style={{fontSize:11,color:lv.fg,fontWeight:700}}>✦ HOOK</span><div style={{fontSize:14,fontWeight:800,marginTop:2}}>"{item.hook}"</div></div>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:6,marginBottom:10}}>
{[item.s1,item.s2,item.s3,item.s4].map((s,j)=>(<div key={j} style={{background:"#fafaf7",borderRadius:6,padding:"8px 10px"}}><div style={{fontSize:9,color:"#888",marginBottom:2}}>씬{j+1}</div><div style={{fontSize:10,color:"#444"}}>{s}</div></div>))}
</div>
<div style={{fontSize:11,color:"#555"}}>👤 <strong style={{color:lv.fg}}>크리에이터 협업 기회</strong> — {item.creator}</div>
</div></div></div>
)):<div style={{fontSize:12,lineHeight:1.8,color:"#444",whiteSpace:"pre-wrap"}}>{typeof aiR==="string"?aiR:JSON.stringify(aiR)}</div>}
</div>}

<div style={{textAlign:"center",padding:"12px 0"}}><button onClick={()=>setShowAI(false)} style={{background:"none",border:"none",fontSize:12,color:"#888",cursor:"pointer"}}>← 이전 단계</button></div>
</>}
<style>{`@keyframes sp{to{transform:rotate(360deg)}}`}</style>
</div>);}

export default function App(){
const[tab,setTab]=useState("usps");
const[uspId,setUspId]=useState(null);
const selUsp=USP_DATA.find(u=>u.id===uspId);
const subs={permile:"주행거리 연동 보험료",women:"여성·자녀 전용 보장",tech:"IoT·커넥티드·AI",service:"사고 후 차별화"};
return(
<div style={{maxWidth:1200,margin:"0 auto",fontFamily:"'Pretendard',-apple-system,sans-serif",background:"#f2f2f0",minHeight:"100vh"}}>
<link href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css" rel="stylesheet"/>
<div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 24px",background:"#fff",borderBottom:"1px solid #eee"}}>
<div style={{display:"flex",alignItems:"center",gap:10}}><div style={{width:34,height:34,borderRadius:8,background:C,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:17,fontWeight:900}}>C</div><div><span style={{fontSize:16,fontWeight:900,color:G}}>한화캐롯 </span><span style={{fontSize:16,fontWeight:900,color:C,fontStyle:"italic"}}>Brand Discovery</span><span style={{fontSize:16,fontWeight:900,color:G}}> AI Platform</span><div style={{fontSize:9,color:"#bbb",letterSpacing:2.5,marginTop:1}}>HANWHA CARROT · BRAND DISCOVERY AI PLATFORM</div></div></div>
<div style={{fontSize:11,color:"#ccc"}}>Pentacle × AI</div></div>

<div style={{padding:"20px 24px"}}>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginBottom:18}}>
<div style={{background:C,borderRadius:16,padding:"24px 26px",color:"#fff"}}><div style={{fontSize:10,letterSpacing:2.5,marginBottom:10,opacity:.8}}>HANWHA CARROT × PENTACLE</div><div style={{fontSize:22,fontWeight:900,lineHeight:1.3,marginBottom:10}}>Brand Discovery<br/>AI Platform</div><div style={{fontSize:12,opacity:.85,marginBottom:16}}>관심사 기반 브랜드 발견 전략</div>
<div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}><span style={{fontSize:11,padding:"5px 12px",borderRadius:20,background:"rgba(255,255,255,.25)",fontWeight:700}}>🥕 INTEREST</span><span style={{fontSize:14,fontWeight:700}}>×</span><span style={{fontSize:11,padding:"5px 12px",borderRadius:20,background:"rgba(255,255,255,.25)",fontWeight:700}}>📊 DATA</span><span style={{fontSize:14,fontWeight:700}}>=</span><span style={{fontSize:11,padding:"5px 12px",borderRadius:20,background:"rgba(255,255,255,.4)",fontWeight:800}}>🚀 DISCOVERY</span></div></div>
<div style={{background:"#fff",borderRadius:16,padding:"24px 26px",boxShadow:"0 1px 4px rgba(0,0,0,.04)"}}><div style={{fontSize:10,letterSpacing:2.5,color:"#bbb",marginBottom:12}}>BRAND DISCOVERY</div><div style={{fontSize:17,fontWeight:900,color:G,lineHeight:1.6,marginBottom:6}}>캐롯 브랜드자산을 분해하고<br/><span style={{color:C,textDecoration:"underline",textUnderlineOffset:4}}>소비자의 관심사와 연결</span>합니다</div></div>
</div>

<div style={{display:"flex",background:"#fff",borderRadius:14,padding:"6px 8px",marginBottom:18,boxShadow:"0 1px 4px rgba(0,0,0,.04)"}}>
{TABS.map(t=>(<button key={t.id} onClick={()=>{setTab(t.id);setUspId(null);}} style={{flex:1,padding:"12px 8px",border:"none",cursor:"pointer",borderRadius:tab===t.id?10:0,background:tab===t.id?C:"transparent",color:tab===t.id?"#fff":"#999",fontSize:13,fontWeight:tab===t.id?800:500,transition:"all .2s"}}>{t.l}</button>))}
</div>

{tab==="market"&&<div style={{display:"flex",flexDirection:"column",gap:16}}>
<div style={{background:"#FFF8F0",borderRadius:14,padding:20,border:"1px solid #FFE0C0"}}><div style={{fontSize:14,fontWeight:800,marginBottom:4}}>💡 핵심 인사이트</div><div style={{fontSize:12,color:"#666",lineHeight:1.8}}>자동차보험은 <strong>무관여 카테고리</strong>. 가입 시점에만 검색. <strong>고정비(62K+), 출산(55K+), 초보운전(48K+)</strong>은 매달 검색.</div></div>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:10}}>{mC.map((c,i)=>(<div key={i} style={{background:"#fff",borderRadius:12,padding:16,border:"1px solid #f0f0f0"}}><div style={{fontSize:10,color:"#999",marginBottom:4}}>{c.l}</div><div style={{fontSize:24,fontWeight:900,color:i===2?RED:C}}>{c.v}</div><div style={{fontSize:10,color:"#888",marginTop:2}}>{c.s}</div><div style={{fontSize:9,color:"#bbb",marginTop:4}}>{c.r}</div></div>))}</div>
<div style={{background:"#fff",borderRadius:12,padding:16,border:"1px solid #f0f0f0"}}><div style={{fontSize:13,fontWeight:800,marginBottom:12}}>📊 시장 데이터</div>{mD.map((d,i)=>(<div key={i} style={{display:"flex",justifyContent:"space-between",padding:"8px 0",borderBottom:i<3?"1px solid #f5f5f5":"none"}}><div><div style={{fontSize:12,fontWeight:600}}>{d.m}</div><div style={{fontSize:10,color:"#999"}}>{d.d}</div></div><div style={{fontSize:16,fontWeight:900,color:C}}>{d.v}</div></div>))}</div>
<div style={{background:"#fff",borderRadius:12,padding:16,border:"1px solid #f0f0f0"}}><div style={{fontSize:13,fontWeight:800,marginBottom:12}}>📱 숏폼 플랫폼</div>{pf.map((p,i)=>(<div key={i} style={{marginBottom:8}}><div style={{display:"flex",justifyContent:"space-between",fontSize:11,marginBottom:3}}><span style={{fontWeight:600}}>{p.n}</span><span style={{fontWeight:800}}>{p.s}%</span></div><div style={{height:8,background:"#f0f0f0",borderRadius:4}}><div style={{height:"100%",width:`${p.s}%`,background:p.c,borderRadius:4}}/></div></div>))}</div>
</div>}

{tab==="influence"&&<div style={{display:"flex",flexDirection:"column",gap:16}}>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:10}}>{iC.map((c,i)=>(<div key={i} style={{background:"#fff",borderRadius:12,padding:16,border:"1px solid #f0f0f0"}}><div style={{fontSize:10,color:"#999",marginBottom:4}}>{c.l}</div><div style={{fontSize:22,fontWeight:900,color:C}}>{c.v}</div><div style={{fontSize:10,color:"#888",marginTop:2}}>{c.s}</div><div style={{fontSize:9,color:"#bbb",marginTop:4}}>{c.r}</div></div>))}</div>
<div style={{background:"#FFF8F0",borderRadius:14,padding:16,border:"1px solid #FFE0C0"}}><div style={{fontSize:12,fontWeight:700}}>자동차보험은 '무관여 카테고리'. 보험 광고로는 시청이 안 됩니다.</div></div>
<div style={{background:"#fff",borderRadius:12,padding:16,border:"1px solid #f0f0f0"}}><div style={{fontSize:13,fontWeight:800,marginBottom:14}}>🎯 숏폼 유형</div>{sfTypes.map((f,i)=>(<div key={i} style={{background:`${f.c}08`,borderRadius:10,padding:14,marginBottom:10,borderLeft:`3px solid ${f.c}`}}><div style={{display:"flex",alignItems:"center",gap:6,marginBottom:4}}><span>{f.i}</span><span style={{fontSize:13,fontWeight:800,color:f.c}}>{f.n}</span></div><div style={{fontSize:11,color:"#555"}}>{f.d}</div><div style={{fontSize:9,color:C,marginTop:4,fontWeight:600}}>📊 {f.p}</div></div>))}</div>
</div>}

{tab==="strategy"&&<div style={{display:"flex",flexDirection:"column",gap:16}}>
<div style={{background:"#1a1a1a",borderRadius:14,padding:20,color:"#fff"}}><div style={{fontSize:16,fontWeight:900,marginBottom:8}}>🎯 캐롯 콘텐츠 전략</div><div style={{fontSize:12,lineHeight:1.8,color:"#ccc"}}><strong style={{color:C}}>Problem:</strong> 무관여 카테고리. 65.9% 스킵.<br/><strong style={{color:"#3EC6FF"}}>Solution:</strong> 관심사 → 90%+10% Bridge → 캐롯 발견</div></div>
<div style={{background:"#fff",borderRadius:14,padding:20,border:"1px solid #f0f0f0"}}><div style={{fontSize:14,fontWeight:800,marginBottom:16}}>⚡ 콘텐츠 원칙</div>{prin.map((p,i)=>(<div key={i} style={{marginBottom:16,paddingBottom:16,borderBottom:i<3?"1px solid #f5f5f5":"none"}}><div style={{display:"flex",alignItems:"center",gap:6,marginBottom:8}}><span style={{fontSize:18}}>{p.i}</span><span style={{fontSize:13,fontWeight:800}}>{p.t}</span></div><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}><div style={{background:"#FFF0F0",borderRadius:8,padding:10}}><div style={{fontSize:9,color:RED,fontWeight:700,marginBottom:3}}>✗ AS-IS</div><div style={{fontSize:10,color:"#666"}}>{p.b}</div></div><div style={{background:"#E6FFF8",borderRadius:8,padding:10}}><div style={{fontSize:9,color:"#00B894",fontWeight:700,marginBottom:3}}>✓ TO-BE</div><div style={{fontSize:10,color:"#666"}}>{p.g}</div></div></div></div>))}</div>
<div style={{background:`${C}08`,borderRadius:14,padding:20,border:`1px solid ${C}20`}}><div style={{fontSize:14,fontWeight:800,marginBottom:8,color:C}}>📐 90/10 공식</div><div style={{display:"flex",gap:8,alignItems:"stretch"}}><div style={{flex:9,background:"#fff",borderRadius:10,padding:12}}><div style={{fontSize:20,fontWeight:900,color:"#00B894"}}>90%</div><div style={{fontSize:11,fontWeight:700}}>관심사</div></div><div style={{display:"flex",alignItems:"center",color:"#ccc"}}>→</div><div style={{flex:1,background:"#fff",borderRadius:10,padding:12}}><div style={{fontSize:20,fontWeight:900,color:C}}>10%</div><div style={{fontSize:11,fontWeight:700}}>Bridge</div></div></div></div>
</div>}

{tab==="usps"&&!selUsp&&<div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:14}}>
{USP_DATA.map(u=>{const lv=LvS[u.lv];const totV=u.assets.reduce((s,a)=>s+a.vol,0);const mult=u.bva>0?`${Math.round(totV/u.bva)}배`:"∞배";return(
<div key={u.id} onClick={()=>setUspId(u.id)} style={{background:"#fff",borderRadius:16,overflow:"hidden",cursor:"pointer",transition:"all .25s",boxShadow:"0 2px 12px rgba(0,0,0,.06)"}} onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow=`0 8px 28px ${lv.fg}20`}} onMouseLeave={e=>{e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow="0 2px 12px rgba(0,0,0,.06)"}}>
<div style={{height:4,background:lv.fg}}/>
<div style={{padding:"20px 18px 18px"}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:12}}><span style={{fontSize:48}}>{u.em}</span><span style={{fontSize:11,padding:"4px 14px",borderRadius:20,border:`1.5px solid ${lv.fg}`,color:lv.fg,fontWeight:700}}>{u.lv}</span></div>
<div style={{fontSize:20,fontWeight:900,marginBottom:3}}>{u.nm}</div>
<div style={{fontSize:11,color:"#aaa",marginBottom:14,lineHeight:1.5}}>{subs[u.id]}</div>
<div style={{display:"inline-flex",gap:8,padding:"5px 12px",borderRadius:6,background:"#f5f5f5",marginBottom:14}}><span style={{fontSize:12,fontWeight:800,color:lv.fg}}>{u.str}</span></div>
<div style={{fontSize:13,color:"#555",lineHeight:1.8,whiteSpace:"pre-line",marginBottom:16}}>{u.def}</div>
<div style={{display:"flex",gap:8,flexWrap:"wrap"}}><span style={{fontSize:12,padding:"5px 14px",borderRadius:20,background:`${lv.fg}15`,color:lv.fg,fontWeight:800}}>{mult} 관심사 기회</span><span style={{fontSize:12,padding:"5px 14px",borderRadius:20,background:"#f0f0f0",color:"#666",fontWeight:600}}>{u.opp.length}개 확인된 기회</span></div>
</div></div>)})}
</div>}

{tab==="usps"&&selUsp&&<div>
<button onClick={()=>setUspId(null)} style={{background:"none",border:"none",fontSize:13,cursor:"pointer",color:"#999",marginBottom:12}}>← 브랜드자산 목록</button>
<USPPage u={selUsp}/>
</div>}
</div>

<div style={{textAlign:"center",padding:"16px 0 12px"}}><div style={{fontSize:9,color:"#ccc"}}>한화캐롯 Brand Discovery AI Platform v3.0</div><div style={{fontSize:8,color:"#ddd",marginTop:2}}>Powered by ListeningMind × Claude AI · Pentacle Creative</div></div>
<style>{`*{box-sizing:border-box}button:active{transform:scale(.97)!important}`}</style>
</div>);}
