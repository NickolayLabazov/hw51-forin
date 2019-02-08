/* export const sorting = (array, obj) => {
  const propertyForAZ = [];
  for (const prop in obj) {
    propertyForAZ.push(prop);
  }

  function compare(a, b) {
    if (a > b) {
      return 1;
    }

    return -1;
  }

  let propertyAZ = propertyForAZ.sort(compare);

    for (const element of array){
      propertyAZ = propertyAZ.filter(elem => elem != element);
    }
    array =array.concat(propertyAZ);

    let property=[];

  for (const elem of array){
    const newobj = {
      key: elem,
      value: obj[elem],
    };
    property.push(newobj);
  }

  return property;
}; */

export const sorting = (array, obj) => {
  const propertyForAZ = [];
  for (const prop in obj) {
    propertyForAZ.push(prop);
  }

  function compare(a, b) {
    if (a > b) {
      return 1;
    }

    return -1;
  }

  const propertyAZ = propertyForAZ.sort(compare);

  for (const element of propertyAZ) {
    if (array.indexOf(element) < 0) {
      array.push(element);
    }
  }

  const property = [];

  for (const elem of array) {
    const newobj = {
      key: elem,
      value: obj[elem],
    };
    property.push(newobj);
  }

  return property;
};
