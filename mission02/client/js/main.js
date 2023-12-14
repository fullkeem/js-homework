/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

const ul = getNode("ul");

const visual = getNode(".visual img");
console.log(data[0].color[0]);

const handleClick = (e) => {
  e.preventDefault();

  let li = e.target.closest("li");
  const isActive = getNode(".is-active");
  if (!li) return;

  let index = li.dataset.index;

  const list = [...ul.children];
  const btn = e.target.closest("button");
  const body = getNode("body");

  // 만약 li를 클릭했을 때 is-active가 생기고 원래 is-active가 있는 li에는 클래스 제거
  // for (let i = 0; i < list.length; i++) {
  //   // console.log(list[i]);
  //   if (list[i].classList.contain("is-active")) removeClass("is-active");
  //   addClass(list[i], "is-active");
  // }

  list.forEach((li) => removeClass(li, "is-active"));

  addClass(li, "is-active");

  if (li.classList.contains("is-active")) {
    visual.src = `./assets/${data[index - 1].name}.jpeg`;
    visual.alt = `${data[index - 1].alt}`;
    body.style.background = `linear-gradient(to bottom,${
      data[index - 1].color[0]
    },${data[index - 1].color[1]});`;
  }
};

ul.addEventListener("click", handleClick);
