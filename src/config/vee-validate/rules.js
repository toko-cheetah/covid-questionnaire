import { defineRule } from "vee-validate";

defineRule("required", (value) => {
  if (!value || !value.length) {
    return "ეს ველი სავალდებულოა";
  }
  return true;
});

defineRule("min", (value, [limit]) => {
  if (!value || !value.length) {
    return true;
  }

  if (value.length < limit) {
    return `უნდა შედგებოდეს მინიმუმ ${limit} სიმბოლოსგან`;
  }

  return true;
});

defineRule("email", (value) => {
  if (!value || !value.length) {
    return true;
  }

  if (!value.includes("@")) {
    return "თქვენ მიერ შეყვანილი მეილი არასწორია";
  }

  return true;
});

defineRule("redberry_email", (value) => {
  if (!value || !value.length) {
    return true;
  }

  if (!value.includes("@")) {
    return true;
  }

  if (
    !(
      value.slice(-"@redberry.ge".length) === "@redberry.ge" &&
      value.length > "@redberry.ge".length
    )
  ) {
    return "გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)";
  }

  return true;
});
