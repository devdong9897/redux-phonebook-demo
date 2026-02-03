## 📒 연락처 관리 프로젝트

- 📱 React와 Redux를 사용하여 간단한 연락처 관리 기능을 구현한 프로젝트입니다.
이름과 전화번호를 입력해 연락처를 추가하고, 추가된 목록을 바로 확인할 수 있습니다.

## ✨ 프로젝트 기능

- 📝 이름과 전화번호 입력
- 🚫 입력값이 비어 있을 경우 연락처 추가 방지
- ➕ 연락처 목록에 새 연락처 추가
- 📋 추가된 연락처 리스트 출력

## 🛠 사용 기술

- ⚛️ React
- 🧰 Redux (react-redux)
- 🎨 React-Bootstrap

## 🔑 주요 구현 내용

### 📌 연락처 추가

- ContactForm 컴포넌트에서 이름과 전화번호 입력
- 추가 버튼 클릭 시 ADD_CONTACT 액션 dispatch
- Redux store에 새로운 연락처 객체 추가

### 📌 연락처 목록 출력

- ContactList 컴포넌트에서 useSelector로 전역 상태 조회
- 연락처 목록을 순회하며 ContactItem 컴포넌트로 출력
- 각 연락처는 이름과 전화번호를 포함

### 📌 상태 관리

- 📦 연락처 목록을 Redux 전역 상태(contactList)로 관리
- 🧩 새 연락처는 객체 형태 { name, phoneNumber }로 저장
- 🔄 기존 연락처는 유지한 채 새로운 연락처만 추가

## 💭 느낀 점

- 🔗 Redux를 사용해 컴포넌트 간 상태 공유가 쉬워졌다
- 🧠 dispatch와 useSelector를 통해 상태 흐름을 이해할 수 있었다
- 📈 작은 프로젝트를 통해 Redux 기본 구조를 익힐 수 있었다