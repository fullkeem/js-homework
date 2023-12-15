/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

const nav = getNode(".nav");
const visual = getNode(".visual img");
const nickName = getNode(".nickName");

const handleClick = (e) => {
  e.preventDefault();

  let li = e.target.closest("li");
  // const isActive = getNode(".is-active");

  if (!li) return;

  let index = li.dataset.index;
  const ul = e.target.closest("ul");
  const list = [...ul.children];
  // const btn = e.target.closest("button");
  const body = getNode("body");

  list.forEach((li) => removeClass(li, "is-active"));
  addClass(li, "is-active");

  if (li.classList.contains("is-active")) {
    visual.src = `./assets/${data[index - 1].name}.jpeg`;
    visual.alt = `${data[index - 1].alt}`;
    nickName.innerHTML = `${data[index - 1].name}`;
    body.style.background = `linear-gradient(to bottom, ${
      data[index - 1].color[0]
    }, ${data[index - 1].color[1]})`;
  }
};

nav.addEventListener("click", handleClick);
