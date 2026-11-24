# MY SPACE 시작 파일

이 파일은 완성·배포된 앱이 아니라, Supabase와 연결해 실행할 수 있는 React 시작 프로젝트입니다.

## 포함 기능
- 이메일 회원가입 / 로그인
- 수입·지출 기록 목록 및 추가·삭제
- 할 일 목록 추가·완료·삭제
- 링크 보관함 추가·삭제
- 모바일 화면에 맞춘 대시보드

## Supabase 연결
1. 프로젝트의 Project URL과 publishable key를 준비합니다.
2. 이 폴더를 개발 환경에서 엽니다.
3. `.env.example`을 복사해 `.env`로 이름을 바꿉니다.
4. `.env`의 값을 본인의 Supabase URL과 publishable key로 바꿉니다.
5. Supabase SQL Editor에서 `supabase/schema.sql` 내용을 실행합니다. 이미 테이블과 정책을 만든 경우 이 단계는 생략해도 됩니다.

`.env` 예시:
VITE_SUPABASE_URL=https://YOUR_PROJECT_ID.supabase.co
VITE_SUPABASE_ANON_KEY=YOUR_PUBLISHABLE_KEY

**중요:** `secret` 또는 `service_role` 키는 브라우저 앱에 절대 넣지 마세요.

## 실행
Node.js가 설치된 개발 컴퓨터에서:
```bash
npm install
npm run dev
```
화면에 표시되는 로컬 주소로 앱을 확인합니다.

## 배포
웹 호스팅 서비스에 프로젝트를 배포하고 환경 변수 `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`를 설정해야 iPhone에서 접속할 수 있습니다. 배포 후 iPhone Safari에서 공유 버튼 → 홈 화면에 추가를 선택하면 앱처럼 실행할 수 있습니다.

## 현재 제한
- 아직 인터넷 주소로 배포되지 않았습니다.
- 이 압축 파일만 아이폰에서 열어서는 앱이 실행되지 않습니다.
- 배포 과정에는 컴퓨터 또는 지원되는 개발 환경이 필요할 수 있습니다.
