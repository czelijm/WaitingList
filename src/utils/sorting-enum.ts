import IMember from "../models/member";

export enum SortingEnum {
    NewestAdded = 1,
    ByName,
    ByPriority,
}

export class SortingDescription{
    
    description:string;
    value:SortingEnum;
    action:(a:IMember,b:IMember)=>number;

    constructor(description:string,value:SortingEnum,action:(a:IMember,b:IMember)=>number){
        this.description=description;
        this.value = value;
        this.action = action;
    }
}

export class SortingContainer{
    dictionary :Map<SortingEnum,SortingDescription>;

    constructor(){
        this.dictionary = new Map<SortingEnum,SortingDescription>();
        this.dictionary.set(SortingEnum.NewestAdded, new SortingDescription("Newest added",SortingEnum.NewestAdded,(a:IMember,b:IMember)=>{
            if(b.name!>a!.name!) return 1;
            if(b.name!<a.name!) return -1;
            return 0;
        }))
        this.dictionary.set(SortingEnum.ByName, new SortingDescription("by Name",SortingEnum.ByName,(a:IMember,b:IMember)=>{
            if(b.name!>a!.name!) return 1;
            if(b.name!<a.name!) return -1;
            return 0;
        }))
        this.dictionary.set(SortingEnum.ByPriority, new SortingDescription("by priority ascending",SortingEnum.NewestAdded,(a:IMember,b:IMember)=>{
            if(b.name!>a!.name!) return 1;
            if(b.name!<a.name!) return -1;
            return 0;
        }))
        this.dictionary.set(SortingEnum.ByPriority, new SortingDescription("by priority descending",SortingEnum.NewestAdded,(a:IMember,b:IMember)=>{
            if(b.name!>a!.name!) return 1;
            if(b.name!<a.name!) return -1;
            return 0;
        }))

    }
    
}
