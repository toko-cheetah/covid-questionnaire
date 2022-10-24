import { configure } from "vee-validate";
import { localize } from "@vee-validate/i18n";

configure({
  generateMessage: localize("ka", {
    messages: {
      required: "ეს ველი სავალდებულოა",
      email: "თქვენ მიერ შეყვანილი მეილი არასწორია",
      min: "უნდა შედგებოდეს მინიმუმ 0:{min} სიმბოლოსგან",
      redberry_email:
        "გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)",
    },
  }),
});
