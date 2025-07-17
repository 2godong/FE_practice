export const isLoggedIn = () => {
  return localStorage.getItem("isLoggedIn") === "true";
};

// env파일에 있는 변수 꺼내오기
export const login = (id, password) => {
  if (
    id === `${import.meta.env.VITE_ID}` &&
    password === `${import.meta.env.VITE_PW}`
  ) {
    localStorage.setItem("isLoggedIn", "true");
    return true;
  }
  return false;
};

export const logout = () => {
  localStorage.removeItem("isLoggedIn");
};
