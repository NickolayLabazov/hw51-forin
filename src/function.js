export const sorting = (array, obj) => {
  const propertyForAZ = [];

  for (const prop in obj) {
    let f = 0;
    for (const elem of array) {
      if (prop == elem) {
        f++;
      }
    }
    if (f == 0) {
      propertyForAZ.push(prop);
    }
  }
  function compare(a, b) {
    if (a > b) {
      return 1;
    }

    return -1;
  }
  const propertyAZ = propertyForAZ.sort(compare);
  const property = [];
  for (const elem of array) {
    const newobj = {
      key: elem,
      value: obj[elem],
    };
    property.push(newobj);
  }
  for (const elem of propertyAZ) {
    const newobj = {
      key: elem,
      value: obj[elem],
    };
    property.push(newobj);
  }
  return property;
};
