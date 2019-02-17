export default function sorting(array, obj) {
  const propertyForAZ = Object.keys(obj); // создаю массив свойств входного объекта

  for (const elem of array) { // перебираю элементы массива приоритетных свойств(array), для отсеивания их из общего массива propertyForAZ
    const number = propertyForAZ.indexOf(elem); // определяю номера number приоритетных свойства в propertyForAZ
    propertyForAZ.splice(number, 1); // Удаляю из propertyForAZ элементы массива array
  }

  const propertyAZ = propertyForAZ.sort(); // cортировки по алфавиту массива свойств
  array = array.concat(propertyAZ); // объединяю массив приоритетных свойств с массивом остальных свойств, выстроенных по алфавиту

  const property = [];

  for (const elem of array) { // формирую итоговый массив из обьектов, выстроенных в порядке, определенном array
    const newobj = {
      key: elem,
      value: obj[elem],
    };
    property.push(newobj);
  }

  return property;
}
