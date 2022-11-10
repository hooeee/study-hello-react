## 선택자

#### selectors
- html의 어떤 태그들을 고를건지 규정하는 문법
- universal : `*`
- type : `Tag (div)` 
- ID : `#id`
- Class : `.class`
- State : `:`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./test.css" type="text/css">
</head>
<body>
    <ol>
        <li id="special">First</li>
        <li>second</li>
    </ol>
    <button>Button 1</button>
    <button>Button 2</button>
    <div class="red">
        <button>
            hi
        </button>
    </div>
    <div class="blue"></div>
    <a href="naver.com">Naver</a>
    <a href="goolenaver.com">Google</a>
    <a>Empty</a>
</body>
</html>
```

```css
* {
    color: green;
}

li {
    color: blue;
}

#special {
    color: pink;
}

.red {
    width: 100px;
    height: 100px;
    background-color: yellow;
}

button:hover {
    color: red;
    background-color: beige;
}

a[href] {
    color: purple;
}
```

<br>

## display | position
- <div> 는 block 레벨이라 내려가면서 출력
- <span> 은 inline 레벨이라 한 줄에 계속 출력

#### **`display`**
- <div> 속성에 `display : inline-block` 주면 한 줄에 계속 출력
- <span> 속성에 `display : block` 주면 내려가면서 출력 
  - `inline` : 컨텐츠 자체만 꾸며주는 역할로, width, hight 등의 설정들은 무시하고 컨텐츠 내용 자체에만 적용 (내용이 있어야 보임 - 내용 없으면 안보임)
  - `inline-block` : 한 줄에 다 넣는데 block 단위로 width, height 설정 맞춰서 보임
  - `block` : 한 줄에 한개씩 block 단위

#### **`position`**
- `static` : html에 정의된 순서대로 브라우저에 보여줌 (**기본값**)
  - left, top, bottom, right 설정해도 이동 안함????? 이동하려면 무조건 다른 설정??
- `relative` : 원래 있어야 하는 자리에서 설정한 값 만큼 이동
- `absolute` : 내 아이템이 담겨있는 가장 가까운 코드, 태그, 아이템 안에서 위치 이동
  - absolute 설정한 아이템이 자기를 감싸고 있는 아이템의 첫 번째이면 설정대로 움직이겠지만, 중간 순서에 있으면 이상한 곳으로 이동한 것처럼 보인다.
- `fixed` : window (웹 페이지) 자체를 기준으로 움직임
- `sticky` : 원래 있던 자리에 있는 대신, 스크롤해도 없어지지 않는다.

![image](https://github.com/jang75967/hello-react/blob/jdg_w01/1_htmlStudy/jdg/HomeWork/W02/%EC%9D%B4%EB%AF%B8%EC%A7%80%201.png)

#### float
- 이미지와 텍스트 배치하는 용도로만 사용하자

<br>

## flexBox
- box에 지정하는 속성값들이 있고, box 안에 들어가는 속성값이 있다.

#### container의 속성
- display
- flex-direction
  - `row` : 왼쪽 정렬 (기본값)
  - `row-reverse` : 오른쪽 정렬
  - `column` : 위에서 아래로
  - `column-reverse` : 아래에서 위로
- flex-wrap
  - `nowrap` : 브라우저가 아무리 작아져도 아이템들이 계속 붙어있는 상태 (기본값)
  - `wrap` : 브라우저 작아지면 자동으로 다음 라인으로 내려감
  - `wrap-reverse` : 위에서 아래로 래핑됨
- flex-flow
  - flex-direction | flex-wrap 한번에 표현
- justify-content : 아이템 배치 방법
  - `flex-start` : 왼쪽 정렬 | 위에서 아래로 (기본값)
  - `flex-end` : 오른쪽 정렬 | 아래에서 위로
  - `center` : 가운데 정렬
  - `space-around` : 아이템 사이사이에 스페이스(간격) 넣어준다. - 중간 아이템은 중복되므로 두 칸 띄어짐 / 첫 칸 마지막 칸은 한칸만 띄어짐
  - `space-evenly` : 전부 동일한 간격으로 띄어줌
  - `sapce-between` : 첫칸 마지막칸은 안띄고 중간만 띈다.
- align-items
  - `center` : body (container) 의 가운데 정렬
  - `baseline` : 아이템들 사이즈가 균일하지 않을 때, 아이템 안에 텍스트가 모두 동일한 높이에 보이도록 
- align-content : justify-content 속성 이름이랑 동일한 이름 지원
  - `space-between` : row가 여러개일 때 처음, 마지막은 여백 없이 붙어있고 그 사이 row들이 균일하게 정렬됨

![image](https://github.com/jang75967/hello-react/blob/jdg_w01/1_htmlStudy/jdg/HomeWork/W02/%EC%9D%B4%EB%AF%B8%EC%A7%80%202.png)

#### item의 속성
- order : 숫자 줘서 순서대로 정렬 (거의 안씀)
- flex-grow : 기본값 0. `1` 지정하면 브라우저 늘릴 때 같이 늘어남 (2 입력하면 다른거보다 2배 늘어남)
- flex-shrink : 컨테이너 작아졌을 때 행동 (grow 반대)
- flex-basis : 아이템들이 공간을 얼마나 차지해야 하는지 세부적으로 명시
  - `auto` : 기본값
  - 퍼센트로 지정
- **flex** :  grow, shrink, basis 한번에 적용
- align-self : 아이템 별로 하나하나 정렬 가능

![image](https://github.com/jang75967/hello-react/blob/jdg_w01/1_htmlStudy/jdg/HomeWork/W02/%EC%9D%B4%EB%AF%B8%EC%A7%80%203.png)

