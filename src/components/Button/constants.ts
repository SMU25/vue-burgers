import { ButtonVariants } from "./types";

export const BUTTON_VARIANTS_STYLE = {
  [ButtonVariants.DEFAULT]:
    "bg-inherit !py-0 !px-0 !text-inherit rounded-none hover:!shadow-none active:!shadow-none",
  [ButtonVariants.PRIMARY]: "bg-orange-primary shadow-orange-primary",
  [ButtonVariants.SECONDARY]: "bg-green-primary shadow-green-primary",
  [ButtonVariants.BORDERED_SECONDARY]: "",
  [ButtonVariants.GRAY]:
    "bg-gray-lightest !text-gray-hardtest shadow-gray-lightest",
};
