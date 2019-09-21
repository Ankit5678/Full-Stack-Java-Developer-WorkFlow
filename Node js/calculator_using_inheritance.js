let action = process.argv[2];

class Calculator{
    constructor(first,next){
        this.first = first; //parseInt(process.argv[3]);
        this.second = next; //parseInt(process.argv[4]);
    }
    calculate(){}
}

class Add extends Calculator{
    constructor(first,next){
        super(first,next);
    }
    calculate(){
        // console.log(this.first)
        // console.log(this.second)
        return this.first+this.second;
    }
}

class Sub extends Calculator{
    constructor(first,second){
        super(first,second);
    }
    calculate(){
        return this.first-this.second;
    }
}

class Mul extends Calculator{
    constructor(first,second){
        super(first,second);
    }
    calculate(){
        return this.first*this.second;
    }
}

class Div extends Calculator{
    constructor(first,second){
        super(first,second);
    }
    calculate(){
        return this.first/this.second;
    }
}

switch(action){
    case 'add': 
            obj = new Add(parseInt(process.argv[3]),parseInt(process.argv[4]));
            console.log(obj.calculate());
            break;
    case 'sub': 
            obj = new Sub(parseInt(process.argv[3]),parseInt(process.argv[4]));
            console.log(obj.calculate());
            break;
    case 'mul': 
            obj = new Mul(parseInt(process.argv[3]),parseInt(process.argv[4]));
            console.log(obj.calculate());
            break;
    case 'div': 
            obj = new Div(parseInt(process.argv[3]),parseInt(process.argv[4]));
            console.log(obj.calculate());
            break;
}