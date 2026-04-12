export const developmentLogs: Data.Development[] = [
  {
    id: 99,
    linkedTo: "career",
    linkedId: 1,
    title: "Cloud Platform 서비스 개발",
    description:
      "보안 장비 통합 Cloud Platform Web 서비스 Dashboard, AI Search, Access Device 기능 개발",
    period: "2025.06 ~",
    tags: ["Spatial Object Placement", "WASM", "2D Rendering"],
    techStacks: [
      "React",
      "TypeScript",
      "Zustand",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    tasks: [
      "2차원 공간 객체 배치 시스템 개발",
      "Web Cross-Platform 반응형 디자인 시스템 구현",
      "클라이언트 WebSocket & WASM Load 최적화",
      "PostgreSQL, OpenSearch 기반 검색 DB 최적화",
    ],
  },

  {
    id: 1,
    linkedTo: "activity",
    linkedId: 0,
    title: "Test-based 운동 카운팅 App 알고리즘 개발",
    description:
      "Unit Test 환경 구축 & 데이터 시각화를 통해 압력 센서값 기반 운동 카운팅 알고리즘 개발 및 검증",
    period: "2024.12 ~ 2025.03",
    tags: ["Unit Test", "데이터 시각화", "적분 기반 알고리즘"],
    techStacks: ["Next.js", "Python", "React Native"],
    link: "detail/23248a0856d480c094d6de520c708f2d",
    tasks: [
      "펌웨어 의존 알고리즘 → App 기반 알고리즘 전환",
      "데이터 시각화 기반 넓이 기반 운동 판단 알고리즘 개발",
      "Unit Test 환경 구축 및 영점 보정 및 노이즈 제거 로직 구현",
    ],
  },
  {
    id: 0,
    linkedTo: "activity",
    linkedId: 0,
    title: "스마트 홈트레이닝 IoT App 서비스 개발",
    description:
      "스마트 홈트레이닝 IoT 서비스 App 개발 및 유지보수 & App 스토어 등록 및 관리",
    period: "2024.11 ~ 2025.04",
    tags: [
      "iOS & AOS",
      "TypeScript & FSD Migration",
      "BLE",
      "App Store Management",
    ],
    techStacks: ["React Native", "TypeScript"],
    link: "detail/23248a0856d480aeadf7e397b2582b86",
    tasks: [
      "실시간 데이터 처리 구조 설계 및 최적화",
      "App 내부 튜토리얼 UI 개발",
      "홈트레이닝 자극 UI 구현",
      "iOS & AOS App 스토어 등록 및 버전 관리",
    ],
  },

  {
    id: 2,
    linkedTo: "activity",
    linkedId: 1,
    title: "코딩 문제 생성 Web 인터페이스 개발",
    description:
      "마크다운 문법 기반으로 코딩 문제를 생성하고 편집할 수 있는 Web 인터페이스 개발",
    period: "2024.11 ~ 2025.04",
    tags: ["WYS | WYG MD Editor", "Pre-signed URL", "MD Export & Import"],
    techStacks: ["Next.js", "TypeScript", "Zustand", "Tailwind CSS"],
    link: "detail/23248a0856d48058a94bcaec414175df",
    tasks: [
      "코딩 문제 생성 인터페이스 개발",
      "Next.js CSR/SSR 환경 렌더링 개선",
    ],
  },

  {
    id: 8,
    linkedTo: "activity",
    linkedId: 2,
    title: "Front-end 팀 운영",
    description:
      "중앙대학교 소프트웨어학부 ICT 위원회 Front-end 팀장 활동 및 팀 운영",
    period: "2023.12 ~ 2024.12",
    tags: ["Agile 방법론", "Scrum"],
    techStacks: [],
    tasks: [
      "Agile 방법론 기반 Sprint 운영",
      "기능 별 역할 분배",
      "Next.js, 인증/인가 구조 관련 교육 진행",
      "서비스 홍보 Web 페이지 구현 & SEO 최적화",
    ],
  },

  {
    id: 3,
    linkedTo: "activity",
    linkedId: 2,
    title: "Next.js Setting & 인증/인가 구조 구축",
    description:
      "Next.js 기반 SSR & CSR 개발환경 구축 & Refrash Token 기반 인증/인가 시스템 구현",
    period: "2024.07 ~ 2024.10",
    tags: ["SSR & CSR", "Refrash Token"],
    techStacks: [
      "Next.js",
      "TypeScript",
      "Zustand",
      "React Query",
      "Tailwind CSS",
    ],
    link: "detail/23248a0856d480b2aa44c113e1a8acde",
    tasks: [
      "App Structure 및 Layout 설계",
      "SSR/CSR 통합 인증/인가 시스템 구축",
    ],
  },

  {
    id: 9,
    linkedTo: "activity",
    linkedId: 3,
    title: "Grid Library 개발",
    description:
      "지하철 내부 부품 Tree 구조 List 전시 및 관리 Grid Web Library 개발",
    period: "2023.09 ~ 2023.11",
    tags: ["Grid Wab Library", "Tree 구조 시각화 & 관리 Tool"],
    techStacks: ["React", "TypeScript", "Redux"],
    tasks: [
      "Grid 내부 검색, 정렬, Cell 병합 기능 구현",
      "Drag & Drop 기반 Tree 구조 관리 기능 구현",
    ],
  },

  /* {
    id: 4,
    linkedTo: "activity",
    linkedId: 2,
    title: "네트워킹 서비스 & 팀 홍보 Web 구현",
    description: "SEO 최적화 기반 서비스 & 팀 홍보 Web 구현",
    period: "2025.07 ~ 2025.08",
    tags: ["SSR-based SEO", "RWD"],
    techStacks: ["Next.js", "TypeScript", "Shadcn"],
    link: "detail/26848a0856d480a483f5d0091e191f46",
  }, */
];
