export class ngo
{
    ngoId:number=0;
    ngoName:string="";
    ngoAdd:string="";
    ngoContact:number=0;
    ngoEmail:string="";

    constructor(ngoId:number,ngoName:string,ngoAdd:string,ngoContact:number,ngoEmail:string)
    {
        this.ngoId=ngoId;
        this.ngoName=ngoName;
        this.ngoAdd=ngoAdd;
        this.ngoContact=ngoContact;
        this.ngoEmail=ngoEmail;
    }
}