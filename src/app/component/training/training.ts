export class training
{
regMstId:number=0;    
ngoId:number=0;
courseId:number=0;
userId:number=0;

constructor(regMstId:number,ngoId:number,courseId:number,userId:number)
{
    this.regMstId=regMstId;
    this.ngoId=ngoId;
    this.courseId=courseId;
    this.userId=userId;
}

}

//add after strict:true 
// "strictPropertyInitialization":false,