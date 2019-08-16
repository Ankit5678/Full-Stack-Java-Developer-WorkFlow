var emp = {
	"empName":"sam",
	"empId":"123",
	"empDept":"IT",
	"empDesg":"HR",
	"address":{
		"city":"Banglore",
		"state":"Karnataka"
	},
	"Contact":{
		"Mob":"9861455344",
		"E-mail":"example@ex.com",
	}
}

console.log("employee details:---");
console.log("Employee Name:"+ emp.empName);
console.log("Employee ID:"+ emp.empId);
console.log("Employee Department" + emp.empDept);
console.log("Employee Designation:"+emp.empDesg);
console.log("Employee Address" + emp.address.city + "\n" +emp.address.state); 