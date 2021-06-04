// import data from './data/data.js';
// import { getObjectsOfEveryDay, merdgeObjects } from './task';
// console.log(merdgeObjects(getObjectsOfEveryDay(data)))

// Task 21-1
// import { personFirst, personSecond, isCustomerVerified } from './task-21-1';

// isCustomerVerified(personFirst)
//     .then(status => console.log(status))
//     .catch(error => console.log(error))

// isCustomerVerified(personSecond)
//     .then(status => console.log(status))
//     .catch(error => console.log(error))

// Task 21-2
// import { customers, countries, getCustomers } from './task-21-2';

// getCustomers(customers, countries)
//     .then((customers) => console.log(customers))
//     .catch((error) => console.log(error))

//  Task 21-3
// import { get, url, send } from './task-21-3';

// До рефакторинга

// get(url, (error, meta, body) => {
//     const  data  = JSON.parse(body);
// 	console.log(data);
// });

// После рефакторинга

// send(url)
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log(error);
//     })

// Task 21-4
// import { countries } from './task-21-4';

// (async () => {
//     try {
//         const data = await countries.send(2);
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// })();