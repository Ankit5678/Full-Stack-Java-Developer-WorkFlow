function customer(reg,cName,cType,contact,address) {
    this.reg = reg;
    this.cName = cName;
    this.cType = cType;
    this.contact = contact;
    this.address = address;
}

customer.prototype.getProps = function () {
    console.log("reg No.  " + this.reg);
    console.log("Name  " + this.cName);
    console.log("Customer Type  " + this.cType);
};
function contact(mobNo,email,phNo) {
    this.mobNo = mobNo;
    this.email = email;
    this.phNo = phNo;
}

contact.prototype.getContacts = function () {
    console.log("moile No.  " + this.mobNo);
    console.log("E-mail  " + this.email);
    console.log("Phone No.  " + this.phNo);
};

function address(doorNo,lane,city,state) {
    this.doorNo = doorNo;
    this.lane = lane;
    this.city = city;
    this.state = state;
}

address.prototype.getAddress = function () {
    console.log("Door No.  " + this.doorNo);
    console.log("Lane  " + this.lane);
    console.log("city  " + this.city);
    console.log("Satate  "+this.state);
};

var c1 = new customer("123","sam","p");
var c2 = new customer("124","harish","t");
var con1 = new contact("1234567890","ci@ex.com","0674123456");
var add1 = new address("1","3","delhi","delhi");

c1.getProps();
c2.getProps();