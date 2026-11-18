# KBSIA 공식 홈페이지

강남뷰티서비스산업협회(KBSIA) 공식 홈페이지 저장소입니다.

## 브랜드 방향

**GANGNAM BEAUTY, CONNECTED.**  
강남의 뷰티를 연결하고, 산업의 성장을 만듭니다.

초기 사이트는 협회 행정자료보다 강남 지역성, 뷰티서비스 사업자, 경영성장, AI·디지털, 인재·일자리, K-뷰티 네트워크를 중심으로 구성합니다.

## 현재 구성

- HOME
- 협회소개
- 강남뷰티
- KBSIA 4대 주요사업
- 회원·네트워크
- 소식·참여
- 광고·제휴
- 회원가입/제휴 문의 CTA

정관, 창립총회 회의록, 발기인명부 등 내부 행정자료는 공개 메뉴에서 제외합니다.

## Cloudflare Workers 배포

이 프로젝트는 Workers Static Assets 구조입니다.

### 로컬 실행

```bash
npm install
npm run dev
```

### 배포

```bash
npm run deploy
```

정적 파일은 `public/` 폴더에 있습니다.

## Cloudflare Git 연결 권장값

- Repository: `userface76/kbsia-web`
- Production branch: `main`
- Deploy command: `npx wrangler deploy`
- Build command: 없음
- Worker name: `kbsia-web`

## 향후 2단계

- D1: members, businesses, posts, events, partners, inquiries
- 회원가입 관리자 승인
- 광고·제휴 접수
- 행사 신청
- 강남뷰티맵
- 회원사 상세페이지
- Turnstile 스팸 방지
- KBSIA.org 사용자 도메인 연결

## 아직 입력이 필요한 정보

- 협회 대표자명
- 사무실 주소
- 공식 전화번호
- 공식 이메일
- 실제 로고/CI
- 협회 및 회원사 사진
- KBSIA.org 도메인 확정
