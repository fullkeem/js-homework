const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

/*
1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리
*/

const emailInput = document.querySelector(".user-email-input");
const pwInput = document.querySelector(".user-password-input");
const loginBtn = document.querySelector(".btn-login");

const handleValid = (() => {
  emailInput.addEventListener("input", (e) => {
    e.preventDefault();

    if (emailReg(emailInput.value) || !emailInput.value)
      emailInput.classList.remove("is--invalid");
    else return emailInput.classList.add("is--invalid");
  });

  pwInput.addEventListener("input", (e) => {
    e.preventDefault();
    if (pwReg(pwInput.value) || !pwInput.value)
      pwInput.classList.remove("is--invalid");
    else pwInput.classList.add("is--invalid");
  });

  const emailReg = (text) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(String(text).toLowerCase());
  };

  const pwReg = (text) => {
    const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
    return re.test(String(text).toLowerCase());
  };

  loginBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (emailInput.value === user.id && pwInput.value === user.pw)
      window.location.href = "welcome.html";
    else alert("아이디 또는 비밀번호가 틀렸습니다. 다시 입력해주세요.");
    emailInput.value = "";
    pwInput.value = "";
    emailInput.classList.remove("is--invalid");
    pwInput.classList.remove("is--invalid");
  });
})();
