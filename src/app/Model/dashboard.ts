export class dashboard
{
regMstId:number=0;    
userId:number=0;
userName:string="";
ngoId:number=0;
ngoName:string="";
courseId:number=0;
courseName:string="";
amount:number=0;

constructor(regMstId:number,userId:number,userName:string,ngoId:number,ngoName:string,courseId:number,courseName:string,amount:number)
{
    this.regMstId=regMstId;
    this.userId=userId;
    this.userName=userName;
    this.ngoId=ngoId;
    this.ngoName=ngoName;
    this.courseId=courseId;
    this.courseName=courseName;
    this.amount=this.amount;
}
}
