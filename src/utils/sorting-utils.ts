import IMember from "../models/member";

export enum SortingEnum {
    NewestAdded = 1,
    Oldest,
    ByNameAtoZ,
    ByNameZtoA,
    ByPriorityAscending,
    ByPriorityDescending,
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

        this.dictionary.set(SortingEnum.NewestAdded, new SortingDescription("Newest",SortingEnum.NewestAdded,(a:IMember,b:IMember)=>{
            return b.id!-a.id!;
        }))
        this.dictionary.set(SortingEnum.Oldest, new SortingDescription("Oldest",SortingEnum.Oldest,(a:IMember,b:IMember)=>{
            return a.id!-b.id!;
        }))
        this.dictionary.set(SortingEnum.ByNameZtoA, new SortingDescription("by Name from Z to A",SortingEnum.ByNameZtoA,(a:IMember,b:IMember)=>{
            if(b.name!>a!.name!) return 1;
            if(b.name!<a.name!) return -1;
            return 0;
        }))
        this.dictionary.set(SortingEnum.ByNameAtoZ, new SortingDescription("by Name from A to Z",SortingEnum.ByNameAtoZ,(a:IMember,b:IMember)=>{
            if(b.name!>a!.name!) return -1;
            if(b.name!<a.name!) return 1;
            return 0;
        }))
        this.dictionary.set(SortingEnum.ByPriorityAscending, new SortingDescription("by priority ascending",SortingEnum.ByPriorityAscending,(a:IMember,b:IMember)=>{
            return a.priority!-b.priority!;
        }))
        this.dictionary.set(SortingEnum.ByPriorityDescending, new SortingDescription("by priority descending",SortingEnum.ByPriorityDescending,(a:IMember,b:IMember)=>{
            return b.priority!-a.priority!;
        }))

    }
    
}
