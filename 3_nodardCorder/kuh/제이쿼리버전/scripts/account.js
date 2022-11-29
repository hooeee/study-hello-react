$("#login-button").on("click", () => {
  localStorage.removeItem(STORAGE_USER_NAME_KEY);
  logout();
});
