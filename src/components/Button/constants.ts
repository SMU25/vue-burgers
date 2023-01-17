import { ButtonVariants } from "./types";

export const BUTTON_VARIANTS_STYLE = {
  [ButtonVariants.PRIMARY]: "bg-orange-primary hover:shadow-light-outer",
  [ButtonVariants.SECONDARY]: "bg-green-primary hover:shadow-light-outer",
  [ButtonVariants.BORDERED_SECONDARY]:
    "!py-1.75 !text-green-primary border border-green-primary hover:bg-green-primary hover:!text-white",
  [ButtonVariants.GRAY]: "bg-gray-lightest !text-gray-hardtest",
  [ButtonVariants.DEFAULT]:
    "bg-inherit !py-0 !px-0 !text-inherit rounded-none active:!shadow-none",
};
