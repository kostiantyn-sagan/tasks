import data from './data/data.js';

export function getObjectsOfEveryDay(data) {
  return data.reduce((objectsOfEveryDay, obj) => [...objectsOfEveryDay, ...splitObjForEveryDay(obj)], [])
}

function splitObjForEveryDay({ startDate, endDate, tonns, weekend, ...othProps }) {
  const [startDay, startMonth, startYear] = startDate.split('/');
  const [endDay] = endDate.split('/');
  const objects = [];
  let day = '';
  let period = 0;
   
  weekend ? period = Number(endDay) - Number(startDay) + 1 : period = (Number(endDay) - Number(startDay) + 1) - calcNumberWeekends(startDate, endDate);
  
  const numberTonsOfDay = tonns / period;
  
  for (let i = Number(startDay); i <= Number(endDay); i += 1) {
    const date = new Date(Number(startYear), Number(startMonth) - 1, i);
    if ((date.getDay() === 6 || date.getDay() === 0) && !weekend) continue

      i < 10 ? day = `0${i}` : day = `${i}`;
      
      const updtDate = `${day}/${startMonth}/${startYear}`;
      const objOfEveryDay = {
        ...othProps, startDate: updtDate, endDate: updtDate, tonns: numberTonsOfDay
      }
      
      objects.push(objOfEveryDay)
}
    
  return objects;
}

function calcNumberWeekends(startDate, endDate) {
  const [startDay, startMonth, startYear] = startDate.split('/');
  const [endDay] = endDate.split('/');
  let numberWeekends = 0;

  for (let i = Number(startDay); i <= Number(endDay); i += 1) {
    const date = new Date(Number(startYear), Number(startMonth) - 1, i);
    
    if (date.getDay() === 6 || date.getDay() === 0) numberWeekends += 1;

  }

  return numberWeekends;
}

export function merdgeObjects(data) {
  const objectsList = {};

  data.forEach((obj) => {
    const objId = `${obj.resourceId}${obj.startDate}`;

    if (objectsList.hasOwnProperty(objId)) 
      obj.tonns += objectsList[objId].tonns;
    
    objectsList[objId] = obj;
  })

  return Object.values(objectsList);
}


