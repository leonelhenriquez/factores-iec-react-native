import { OptionsFactors } from "./OptionsFactors";

const ColorsFactor = {
  [OptionsFactors.F_P]: "#36b4fc",
  [OptionsFactors.P_F]: "#35d693",
  [OptionsFactors.F_A]: "#8960ff",
  [OptionsFactors.A_F]: "#fd6086",
  [OptionsFactors.P_A]: "#fea056",
  [OptionsFactors.A_P]: "#43bcc8",
  [OptionsFactors.A_G]: "#d4304e",
};

export default class ColorFactor {
  static getColor = (key) => {
    return ColorsFactor[key];
  };
}
