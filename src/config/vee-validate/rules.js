import { defineRule } from "vee-validate";
import { required, email, min } from "@vee-validate/rules";

defineRule("required", required);
defineRule("email", email);
defineRule("min", min);

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
    return false;
  }

  return true;
});
