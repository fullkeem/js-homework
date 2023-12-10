# 네이버 로그인 페이지 구현

---
- [x] 아이디과 비밀번호를 정규표현식으로 유효성 검사 => 에러 메세지 추가 및 제거.
- [x] 유저의 아이디와 비밀번호가 틀렸을 시 에러 메세지 띄우고 아이디와 비밀번호 입력칸 비우기. 
- [x] 아이디와 비밀번호를 정확히 입력했을 때 welcome 페이지로 넘어갈 수 있도록 코드 로직을 작성.


---
| 로그인 성공 | 로그인 실패 |
|------|------|
| ![네이버-로그인-성공](https://github.com/kimchoongman/rwd/assets/103557910/f1c71e79-bedb-468a-9cbd-fe28a9261799) | ![네이버-로그인-실패](https://github.com/kimchoongman/rwd/assets/103557910/960f5613-d2d5-433f-bc7a-63bd47000e0b) |
---
## 🤔 Code Description

```javascript
const checkLogin = (() => {
  emailInput.focus();

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

  loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (emailInput.value === user.id && pwInput.value === user.pw)
      window.location.href = "welcome.html";
    else alert("아이디 또는 비밀번호가 틀렸습니다. 다시 입력해주세요.");
    emailInput.value = null;
    pwInput.value = null;
    emailInput.classList.remove("is--invalid");
    pwInput.classList.remove("is--invalid");
    emailInput.focus();
  });
})();
```
1. 화면이 랜더링 되었을 때 이메일 입력 칸에 focus가 될 수 있도록 했습니다.
2. 이메일과 비밀번호가 정규 표현식에 맞게 작성 되었는지 조건문으로 검수하고 그 결과에 따라 에러 메시지를 추가, 제거 했습니다.
3. 입력한 이메일과 비밀번호가 user의 이메일과 비밀번호와 일치하다면 wecolme 페이지로 이동합니다.
4. 불일치하면 에러 메세지와 함께 이메일과 비밀번호 입력칸을 초기화했습니다.



---
## 회고
- 무엇부터 진행해야 할 지 바로 떠오르지 못해 막막했지만, 문제를 해결해야 할 순서를 차례대로 작성하면서 정리하니 과제 진행을 할 수 있었습니다.(+ 주말 야무 쌤의 Flow chart 수업을 듣고나니 어떻게 작성하면 좋을지 배울 수 있어서 좋았습니다) 
- 이메일과 비밀번호의 유효성 검사 코드가 중복되니 하나로 합칠 수 있도록 리팩토링할 계획입니다.
- 사용자 입장에서 아이디와 비밀번호 입력 값이 틀렸을 시 이메일과 비밀번호 중 어떤 값이 틀렸는지 알려주는 코드가 더 바람직할 것 같다.(이 부분도 가능한(?) 수정할 계획입니다.)
- 만약 중복되는 코드를 합친다면, "아이디와 비밀번호의 input 요소를 배열로 받아온 뒤 반복문으로 배열의 요소에 접근해 조건문을 작성" 이 맞을까요..?



