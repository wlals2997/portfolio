
### HTML,CSS,JS로 만든 포트폴리오 사이트입니다. 
👉🏼[웹페이지 링크]( https://wlals2997.github.io/portfolio/)

#### 목차
1. [구현목록](#1-%EA%B5%AC%ED%98%84%EB%AA%A9%EB%A1%9D)
2. [화면](#2-화면)


## 1. 구현목록
##### 스크롤시 navbar 색상 진함.
* 스크롤시 window의 scrollY 가 navbar의 높이보다 클 경우 navbar에 클래스를 추가하여 색상 진하기를 나타내었습니다.

#### 메뉴 클릭시 해당하는 section 이동, contact 버튼
- navbar에 있는 메뉴 클릭시 해당하는 section 으로 이동할 수 있도록 구현하였습니다
- navbar menu 에 data-link라는 속성을 부여하여 데이터를 저장하였습니다.
-클릭한 target에 scrollIntoView 메소드를 사용하여 스크롤이 되도록 구현하였습니다.
- contact btn 또한 위와 같습니다.

#### 프로젝트 필터링
- fillter 함수를 이용하여 새로운 배열로 반환하여 클릭한 버튼마다 필터링 되도록 하였습니다
- setTimeout 메서드를 사용하여 버튼클릭시 0.3초 뒤에 필터링 된 데이터들을 보일 수 있도록 하였다.

#### 토글버튼
- 모바일 화면시 navbar메뉴가 toggle버튼으로 바뀌도록 구현하였습니다.
- toggle 함수를 이용하여 구현하였습니다.

#### 스크롤시 이전 섹션 흐릿하게 하기
- 스크롤을 할 경우 밑으로 내려갈수록 이전 섹션을 흐릿하게 하도록 구현하였습니다.
- 해당하는 섹션마다 getBoudingClientRect함수를 이용하여 각각의 height을 구하였습니다.
- ex) home.style.opacity = 1 - window.scrollY / homeHeight; 식으로 구현하였습니다.

#### arrow up 버튼
- 스크롤을 내리면 arrow up 버튼이 뜨도록 구현하였습니다.
- 그리고 arrow up 버튼 클릭시 맨 위 상단으로 이동하도록 scrollIntoView 함수를 이용하여 구현하였습니다.

#### 문자 타이핑 구현
- 화면에 움직임을 나타내고자 실시간으로 문자를 타이핑 하는듯한 기능을 구현하였습니다.


👉🏼[자세한 기록](https://www.notion.so/96003ad72ef54d47bbfcef991ecbde3c)

## 2. 화면
#### 데스크탑 화면
<img src="https://postfiles.pstatic.net/MjAyMjAzMTFfMjgy/MDAxNjQ2OTI2OTc0ODQ2.kVaeN6DJRHmmYDVYAyJaORnWBdgervAHwjlEDRZfFB0g.xfvu2NpZu6atrVQdU_yQLovvAmQWOC-K4t7UC_cDUQEg.GIF.wlals2997/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A41.gif?type=w966">

#### 모바일 화면
<img src="https://postfiles.pstatic.net/MjAyMjAzMTFfMTky/MDAxNjQ2OTI2OTgwMTI0.8H33aGLT0CqCWV-J0WBxZr0wwx9_cdHVHuwEMY68mn4g.4-apThWL5miU3iaFWV2-TuydljF9sojCqLyX1VOxE30g.GIF.wlals2997/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A42.gif?type=w966">

