import * as FontWeight from "../constants/Fonts";

export const generate_font = params => {
  let { weight, size, family } = params;
  if (weight == null) weight = FontWeight.Regular;
  if (size == null) size = 1.4;
  if (family == null) family = "Nunito";

  return `${weight} ${size}rem ${family}`;
};
