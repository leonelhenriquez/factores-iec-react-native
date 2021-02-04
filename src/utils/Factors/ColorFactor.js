import OptionsFactors from "./OptionsFactors";

const ColorsFactor = new Map([
  [OptionsFactors[0], "#36b4fc"],
  [OptionsFactors[1], "#35d693"],
  [OptionsFactors[2], "#8960ff"],
  [OptionsFactors[3], "#fd6086"],
  [OptionsFactors[4], "#fea056"],
  [OptionsFactors[5], "#43bcc8"],
  [OptionsFactors[6], "#d4304e"],
]);

export default class ColorFactor {
  static getColor = (key) => {
    return ColorsFactor.get(key);
  };
}
