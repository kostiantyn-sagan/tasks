export default [
  {
    resourceId: "DOR",
    startDate: "01/01/2021",
    endDate: "10/01/2021",
    tonns: 110,
    weekend: false,
  },
  {
    resourceId: "DOR",
    startDate: "05/01/2021",
    endDate: "10/01/2021",
    tonns: 60,
    weekend: false,
  },
  {
    resourceId: "DOR",
    startDate: "15/01/2021",
    endDate: "20/01/2021",
    tonns: 60,
    weekend: false,
  },
  {
    resourceId: "VAN",
    startDate: "01/01/2021",
    endDate: "10/01/2021",
    tonns: 110,
    weekend: true,
  },
  {
    resourceId: "VAN",
    startDate: "05/01/2021",
    endDate: "10/01/2021",
    tonns: 60,
    weekend: true,
  },
  {
    resourceId: "VAN",
    startDate: "15/01/2021",
    endDate: "20/01/2021",
    tonns: 60,
    weekend: true,
  },
];

// ТЗ

//--нужно получить из каждо обьекта в масиве обект на каждую дату тоесть если в обьекте
//с датами с 1 по 10е должно получится 10 обьектов их startdate и enddate будут одинаковы
//(с 1 по 1е, с 2 по 2е итд) и средним кол-вом тонн на каждый день

//--далее в обьектах с полем weekend false нужно выяснить сколько выходных за период вычесть их из масива
//и раскинуть их среднее кол-во тонн на остальные дни

//--далее смерджить все обьекты с одинаковой датой и полем resourceId