export class courses
{

courseId:number=0;
coursename:string="";   
duration:string="";
amount:number=0;
ngoId:number=0;

constructor(courseId:number,coursename:string,duration:string,amount:number,ngoId:number)
{
    this.courseId=courseId;
    this.coursename=coursename;
    this.duration=duration;
    this.amount=amount;
    this.ngoId=ngoId;
}

}