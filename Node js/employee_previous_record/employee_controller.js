const emps = require('./data').employees;
const Service = require('./employee_service').EmpService;
const EventEmitter = require('events').EventEmitter;
// define objects
const emitter = new EventEmitter();

const empService = new Service(emps);

// console.log('FETCH ALL EMPS ---');
// // fetch all employees
// empService._all().forEach(e => {
//     console.log(e);
// });
console.log('FIND EMP BY ID ---');
// search employee by its Id
const empFound = empService._by_pre_org(process.argv[2]);
console.log(empFound);
//emitter.emit('getAllEmps',emps);