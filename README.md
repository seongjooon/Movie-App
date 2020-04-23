> # Blended FrontEnd Test

![main-logo](main-logo.png)

> ## Contents

- [Introduction](#Introduction)
- [Installation](#Installation)
- [Requirement](#Requirement)
- [Features](#Features)
- [Approach](#Approach)

> ### Introduction

최신 개봉된 영화를 한 눈에 볼 수 있는 웹 어플리케이션.

- Infinite scroll feature
  ![simulation-screenshot](<movie-app-simulation(infinite-scroll).gif>)

- Detail page
  ![simulation-screenshot](<movie-app-simulation(detail-page).gif>)

> ### Installation

#### - Client

```
git clone https://github.com/MrKamake/Movie-App.git
cd Movie-App
yarn install
yarn start
```

> ### Requirement

- Create Api Key in client environment

```
.env
REACT_APP_API_KEY=844dba0bfd8f3a4f3799f6130ef9e335
```

> ### Features

- 최신 영화를 모두 한 페이지에서 볼 수 있습니다.
- 아래로 스크롤하면 개봉일에 따라 다른 영화를 볼 수 있습니다.
- 영화를 클릭해서 상세 페이지로 이동할 수 있습니다.
- 각 영화의 상세 페이지에서 평점, 배우 등과 같은 정보를 확인할 수 있습니다.

> ### Approach

1. 최신 영화를 한 페이지에 넣기 위해 최신 영화리스트를 Api 문서에서 확인하고 Axios를 사용해서 데이터를 불러오고 저장해서 랜더링했습니다.
2. 무한 스크롤을 만들기 위해서 React의 Lifecycle(componentDidMount, componentWillUnmount)를 사용해서 페이지(document)에 스크롤 이벤트를 추가했습니다. 그리고 사용자가 보는 페이지의 높이에 따라서 페이지 전체의 길이에 반응해서 다음 페이지의 영화목록 데이터를 받아와서 랜더링하도록 했습니다.
3. 상세페이지 이동은 React-Router를 통해서 이동했습니다. 선택된 영화의 상세페이지로 이동할 주소값에 영화의 고유한 아이디를 params로 추가해서 상세페이지를 보여주도록 했습니다.
4. 영화의 상세페이지에서 Api를 통해서 필요한 데이터를 받아서 랜더링했습니다.
