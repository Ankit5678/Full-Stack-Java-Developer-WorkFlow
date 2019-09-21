class EmpService{
    constructor(emps){
        this.emps = emps;
    }
    _all(){
        return this.emps;
    }
    _by_pre_org(org){
        let pre_org = []
        console.log(this.emps.length)
        for(let i=0;i<=this.emps.length;i++){
            let _index=-1;
            this.emps.find((e,index) => {
                if(e.pre_organisation == org){
                    _index=index;
                    pre_org.push(e);
                    return e
                }
            });
            if(_index!= -1)
                this.emps.splice(_index,1)
        }
        //return this.emps.find(e=>{ return e.id == _id});
        return pre_org;
    }
}

module.exports = {
    EmpService
}