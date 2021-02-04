/**
 * @autor Leonel Henriquez
 */

import ListHistory from "./History/ListHistory";
import Settings from "../Settings";
import History from "./History/History";
import BreakException from "./BreakException";

const RNFS = require("react-native-fs");
const pathSettings = RNFS.DocumentDirectoryPath + "/settings.json";
const pathListHistory = RNFS.DocumentDirectoryPath + "/hystory.json";

const loadSettins = () => {
  RNFS.exists(pathSettings).then((exists) => {
    if (exists) {
      readFile(pathSettings, (data) => {
        setSettings(JSON.parse(data));
      });
    } else {
      saveSettings();
    }
  });
};

const loadHistory = () => {
  RNFS.exists(pathListHistory).then((exists) => {
    if (exists) {
      Utils.readFile(Utils.pathListHistory, (data) => {
        let listHistory = JSON.parse(data);

        if (typeof listHistory != "undefined") {
          ListHistory.splice(0, ListHistory.length);
          let i = 0;
          try {
            listHistory.forEach((element) => {
              ListHistory.push(
                new History(
                  element.factor,
                  element.period,
                  element.interestRate,
                  element.result,
                  element.date,
                  element.id
                )
              );
              i++;
              if (i >= Settings.maxHistory) throw BreakException;
            });
          } catch (e) {
            if (e !== BreakException) throw e;
            saveHistory();
          }
        }
      });
    } else {
      RNFS.writeFile(pathListHistory, JSON.stringify([]), "utf8");
    }
  });
};

const readFile = (path, event) => {
  RNFS.readFile(path, "utf8").then((data) => event(data));
};
const setSettings = (settings) => {
  if (typeof settings?.decimal_precision != "undefined") {
    Settings.decimal_precision = settings.decimal_precision;
  }
};
const saveSettings = () => {
  RNFS.writeFile(pathSettings, JSON.stringify(Settings), "utf8");
};

const saveHistory = () => {
  RNFS.writeFile(pathListHistory, JSON.stringify(ListHistory), "utf8");
};

const addHistory = (factor) => {
  let date = new Date();
  ListHistory.unshift(
    new History(
      factor.getFactor(),
      factor.getPeriod(),
      factor.getInterestRate(),
      factor.getResult(),
      {
        day: date.getDay(),
        month: date.getMonth(),
        year: date.getFullYear(),
      }
    )
  );
  if (ListHistory.length > Settings.maxHistory) {
    ListHistory.pop();
  }
  saveHistory();
};

const removeHistory = (history) => {
  let indexRemove = ListHistory.indexOf(history);
  if (indexRemove >= 0) {
    ListHistory.splice(indexRemove, 1);
  }
  saveHistory();
};

const removeAllHistory = () => {
  ListHistory.splice(0, ListHistory.length);
  saveHistory();
};

const Utils = {
  loadSettins,
  readFile,
  setSettings,
  saveSettings,
  loadHistory,
  addHistory,
  removeHistory,
  removeAllHistory,
  saveHistory,
  pathListHistory,
};
export default Utils;
