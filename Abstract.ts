//Abstract classes
abstract class Department{
    //public name:string;
    constructor(public name:string){}
    printname():void{
     // Name  = this.name;
      console.log(`Depart Name::${this.name}`);
    }
    abstract printmeeting(): void;
}
//Extended class
class AccountingDepartment extends Department{

    constructor(){
        super("Accounting Department.");
    }
    printmeeting(): void{
        console.log(`${this.name} assemble for  monthend meeting tomorrow 10.AM.`)
    }
    mom(): void{
        console.log(`MOM this hsould be prepaired by Mr.Tom.`);
    }
}
class ITDepartment extends Department{
    constructor(){
        super(`IT Department`)
    }
    printmeeting(): void{
        console.log(`${this.name} assemble for  monthend meeting tomorrow 10.AM.`)
    }
    mom(): void{
        console.log(`MOM this hsould be prepaired by Mr.James.`);
    }
}

//Instance
let departmenta = new AccountingDepartment();
departmenta.printname();
departmenta.printmeeting();
departmenta.mom();

let departmentb = new ITDepartment();
departmentb.printname();
departmentb.printmeeting();
departmentb.mom();