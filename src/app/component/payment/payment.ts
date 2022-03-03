export class payment
{
paymentTrnId:number=0;    
amount:number=0;
paymentDate:Date;
//paymentDate:string="";
userId:number=0;
ngoId:number=0;
courseId:number=0;
coursename:string="";

constructor(paymentTrnId:number,amount:number,paymentDate:Date,userId:number,ngoId:number,courseId:number,coursename:string)
{
    this.paymentTrnId=paymentTrnId;
    this.amount=amount;
    this.paymentDate=paymentDate;
    this.userId=userId;
    this.ngoId=ngoId;
    this.courseId=courseId;
    this.coursename=coursename;
}

}