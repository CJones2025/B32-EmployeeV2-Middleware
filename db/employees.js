const employees = [
  { id: 1, name: "Carolynn McGinlay" },
  { id: 2, name: "Lodovico Filon" },
  { id: 3, name: "Jefferey Wahlberg" },
  { id: 4, name: "Kayley Tures" },
  { id: 5, name: "Rickard Carver" },
  { id: 6, name: "Michael Stryde" },
  { id: 7, name: "Averell Santino" },
  { id: 8, name: "Constantina Connue" },
  { id: 9, name: "Verile Bondesen" },
  { id: 10, name: "Gwen Grollmann" },
];

function getAll() {
  return employees;
}

function add(name) {
  const newId =
    employees.length > 0 ? employees[employees.length - 1].id + 1 : 1;
  const newEmployee = { id: newId, name };
  employees.push(newEmployee);
  return newEmployee;
}

export { getAll, add, employees };
export default employees;
