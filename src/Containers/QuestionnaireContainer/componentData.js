export const ArrtoObj = (RangeFrom: int, RangeTo: int, unit: boolean) => {
    var returnArray = [];
    if (unit) {
      for (let i = RangeFrom; i <= RangeTo; i++) {
        returnArray.push({value: i, label: i + " kg"})
      };
    } else {
      for (let i = RangeFrom; i <= RangeTo; i++) {
        returnArray.push({value: i, label: i})
      };
    }
    return returnArray;
  }