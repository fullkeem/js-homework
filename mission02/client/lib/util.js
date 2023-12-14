// 요소 가져오기
const getNode = (node) => {
  if (typeof node !== "string")
    throw new Error("getNode 함수의 인수는 문자 타입이어야 합니다.");
  return document.querySelector(node);
};

const getNodes = (node) => {
  if (typeof node !== "string")
    throw new Error("getNodes 함수의 인수는 문자 타입이어야 합니다.");

  return document.querySelectorAll(node);
};

// class 추가 및 제거
const addClass = (node, className) => {
  if (typeof node === "string") node = getNode(node);
  if (typeof className !== "string")
    throw new TypeError(
      "addClass 함수의 두 번째 인수는 문자 타입이어야 합니다."
    );
  node.classList.add(className);
};

const removeClass = (node, className) => {
  if (typeof node === "string") node = getNode(node);
  if (!className) node.className = "";
  if (typeof className !== "string")
    throw new TypeError(
      "removeClass 함수의 두 번째 인수는 문자 타입이어야 합니다."
    );
  node.classList.remove(className);
};

//요소 속성 추가 및 가져오기
const setAttr = (node, prop, value) => {
  if (typeof node === "string") node = getNode(node);
  if (typeof node !== "string")
    throw new TypeError(
      "setAttr 함수의 두 번째 인수는 문자 타입이어야 합니다."
    );
  if (!node[prop] && prop !== "class" && prop !== "title") {
    node.dataset[prop] = value;
    return;
  }

  node.setAttribute(prop, value);
};

const getAttr = (node, prop) => {
  if (typeof node === "string") node = getNode(node);

  return node.getAttribute(prop);
};

const attr = (node, prop, value) => {
  return !value ? getAttr(node, prop) : setAttr(node, prop, value);
};
