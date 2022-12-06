# Yarn berry workspace를 이용한 monorepo 실습

## Monorepo란 무엇인가

- "여러 개의 개별 프로젝트를, 잘 정의된 관계를 통해서 하나의 Repo에 담은 것"
- Monorepo ≠ Monolith

## 왜 해야할까 ?

- 기존의 Polyrepo(여러개의 Repo를 사용하던 방식)를 선택한 이유는 "팀 자율성(team autonomy)" 때문이었음
  - 팀들이 각자 원하는 라이브러리를 선택하고, 누가 코드에 기여하고 사용하는 지를 결정하는게 가능
- **PolyRepo**는
  - 코드 공유가 번거로움
  - 코드 중복이 많음
  - 공유 라이브러리의 크리티컬 버그 및 큰 변경시 비용이 많이 듬
  - 프로젝트별 일관되지 않은 개발도구 사용
- **Monorepo**는
  - 새로운 프로젝트를 생성하는 오버헤드가 없음
  - 전체 프로젝트에 걸침 아토믹 커밋
  - 모든 것을 버전 번호 하나로 관리
  - 개발자 모빌리티(프로젝트간 이동)

## Monorepo 툴들이 제공하는 기능들과 각 도구간 비교

→ Bazel, Gradle, Lage, Lerna, Nx, Rush, Turborepo

- 로컬 캐슁
- 로컬 태스크 오케스트레이션
- 분산 캐슁
- 분산 태스크 실행
- 투명한 리모트 실행
- 영향받는 프로젝트/패키지 감지
- 워크스페이스 분석
- 종속성 그래프 시각화
- 코드 공유
- 일관적인 툴링
- 코드 생성
- 프로젝트 제약 및 가시성

## 인식의 전환

> 모노레포는 여러분의 "조직과 코드에 대해 생각하는 방식"을 바꿉니다

- 일관성을 추가하고,
- 새 프로젝트 생성할 때나 대규모 리팩토링을 수행할 때 마찰을 줄이며,
- 코드 공유 및 팀간 협업을 촉진함으로써
- 조직이 보다 효율적으로 작업할 수 있음

## 다양한 솔루션들이 있지만, 각자 목표가 다름

- **Bazel** (by Google) : “A fast, scalable, multi-language and extensible build system.”
- **Gradle** (by Gradle, Inc) : “A fast, flexible polyglot build system designed for multi-project builds.”
- **Lage** (by Microsoft) : “Task runner in JS monorepos”
- **Lerna** : “A tool for managing JavaScript projects with multiple packages.”
- **Nx** (by Nrwl) : “Next generation build system with first class monorepo support and powerful integrations.”
- **Rush** (by Microsoft) : “Geared for large monorepos with lots of teams and projects. Part of the Rush Stack family of projects.”
- **Turborepo** (by Vercel) : “The high-performance build system for JavaScript & TypeScript codebases.”

## Case 분리

### Case 1: 의존성 문제를 해결하기 위해

- 각 서비스마다 공통으로 사용하는 의존성은 상위에 올려 모두 공유할 수 있도록
- 공용 컴포넌트와 같은 라이브러리만을 모아놓는 레포를 만들고 이를 공유하는 방식을 사용하기 위해
  - apps (projects, services 등)
  - packages (libraries 등)
- ...

### Case 2: 모놀리식 서비스를 마이크로 서비스로 분리하기 위해

- 오래 걸리는 배포 시간
- 하나의 패키지에서 다른 패키지로의 영향력을 최대한 줄이기 위해
- 하나의 서비스에서 사용할 라이브러리를 해당 라이브러리를 사용하지도 않는 서비스에서 하나의 패키지 안에 있다는 이유만으로 커져버린 번들 사이즈를 공유하게 된다.
- ...
