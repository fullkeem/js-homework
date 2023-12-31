/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리
*/

const handleNavClick = (e) => {
  e.preventDefault();
  let li = e.target.closest("li");
  if (!li) return;
  let index = li.dataset.index;
  const ul = e.target.closest("ul");
  const list = [...ul.children];
  toggleClass(list, li, "is-active");
  if (li.classList.contains("is-active")) {
    changeVisual(index);
    changeNickName(index);
    changeBackgroundColor(index);
  }
};

const toggleClass = (arr, el, className) => {
  arr.forEach((el) => removeClass(el, "is-active"));
  addClass(el, className);
};

const changeVisual = (index) => {
  visual.src = `./assets/${data[index - 1].name}.jpeg`;
  visual.alt = `${data[index - 1].alt}`;
};

const changeNickName = (index) => {
  nickName.innerHTML = `${data[index - 1].name}`;
  nickName.style.color = `${data[index - 1].font}`;
};

const changeBackgroundColor = (index) => {
  const body = getNode("body");
  body.style.background = `linear-gradient(to bottom, ${
    data[index - 1].color[0]
  }, ${data[index - 1].color[1]})`;
};

const nav = getNode(".nav");
const visual = getNode(".visual img");
const nickName = getNode(".nickName");

nav.addEventListener("click", handleNavClick);
