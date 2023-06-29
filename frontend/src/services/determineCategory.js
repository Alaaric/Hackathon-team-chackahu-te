export default function determineCategory(
  modelsId,
  RAMid,
  storageId,
  stateId,
  modelList,
  ramList,
  storageList,
  stateList
) {
  const RAMvalue = ramList[RAMid - 1]["calculator_value"];
  const storagevalue = storageList[storageId - 1]["calculator_value"];
  const modelvalue = modelList[modelsId - 1]["calculator_value"];
  console.log(stateList[stateId - 1]);
  const statevalue = stateList[stateId - 1]["ponderation"];

  const totalPoints = (RAMvalue + storagevalue + modelvalue) * statevalue;
  let category = "";
  let price = 0;

  switch (true) {
    case totalPoints < 90:
      category = "HC";
      price = 30;
      break;
    case totalPoints < 165 && totalPoints >= 90:
      category = "C";
      price = 40;
      break;
    case totalPoints < 255 && totalPoints >= 165:
      category = "B";
      price = 50;
      break;
    case totalPoints < 375 && totalPoints >= 255:
      category = "A";
      price = 65;
      break;
    case totalPoints >= 375:
      category = "Premium";
      price = 80;
      break;
  }
  return [category, price];
}
