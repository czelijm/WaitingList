import IMember from "../models/member";

const getIMembersFromResponse = (response: {members?: {startingDay?:string}[]}): IMember[] =>{

    if(!response || !(response?.members)) return [];

    //casting
    const result = response.members.map(m=>(
        {
            ...m,
            startingDay: new Date(m.startingDay!),
        } as IMember ))

    return result;
}

export default getIMembersFromResponse;