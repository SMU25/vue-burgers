export const getArrayNumbers = (length = 4): number[] =>
  Array.from({ length }).map((_, index) => index + 1);
