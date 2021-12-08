import IMember from "../models/member";

const getIMembersFromResponse = (response: {members?: {startingDay?:string}[]}): IMember[] =>{
//{members?:{startingDate?:string}[]}
    if(!response || !(response?.members)) return [];

    console.log(response.members)
    console.log(response.members[0]?.startingDay)

    //casting
    const result = response.members.map(m=>(
        {
            ...m,
            startingDay: new Date(m.startingDay!),
        } as IMember ))

    console.log(result);
    return result;
}

export default getIMembersFromResponse;