// валидация логина
export const handleLoginChange = (event, setLoginError, setLoginValue) => {
  const loginValue = event.target.value;
  let errors = [];

  if (!loginValue) {
    errors.push(`Поле "логин" обязательно для заполнения`);
  } else if (loginValue.length < 5) {
    errors.push(`Поле "логин" должно содержать не менее 5 символов`);
  } else {
    const loginPattern = /^[a-zA-Z0-9!@#$%^&*()_+=[\]{};':"\\|,.<>/?]+$/;

    if (!loginPattern.test(loginValue)) {
      errors.push("Должны быть только латинские буквы/цифры");
    }

    if (!loginValue.includes("@") || !loginValue.includes(".")) {
      errors.push("Отсутствуют символы @ и .");
    }
  }

  setLoginError(errors);
  setLoginValue(loginValue);
};

// валидация пароля
export const handlePasswordChange = (
  event,
  repeatPasswordValue,
  setPasswordError,
  setRepeatPasswordError,
  setPasswordValue
) => {
  const passwordValue = event.target.value.trim();
  setPasswordValue(passwordValue);

  let passwordError = "";

  if (!passwordValue) {
    passwordError = `Поле "пароль" обязательно для заполнения`;
  } else if (passwordValue.length < 6) {
    passwordError = "Пароль должен содержать минимум 6 символов (без пробелов)";
  }

  setPasswordError(passwordError);

  if (passwordValue === repeatPasswordValue) {
    setRepeatPasswordError("");
  } else {
    setRepeatPasswordError("Пароли не совпадают");
  }
};

// валидация повторного пароля
export const handleRepeatPasswordChange = (
  event,
  passwordValue,
  setRepeatPasswordError,
  setRepeatPasswordValue
) => {
  const repeatPasswordValue = event.target.value.trim();
  setRepeatPasswordValue(repeatPasswordValue);

  if (repeatPasswordValue !== passwordValue) {
    setRepeatPasswordError("Пароли не совпадают");
  } else {
    setRepeatPasswordError("");
  }
};
