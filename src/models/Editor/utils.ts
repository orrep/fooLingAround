

let id = 0;
export const GenerateId = function(){
    var newId = id;
    id ++;
    return newId; 
}


export const MoveObjectInArray = (object:any, arr : any[], new_index : number) => {
    arr.splice(new_index, 0, arr.splice(arr.indexOf(object), 1)[0]);
    return arr;
}

export const TakeObjectFromArray = (object:any, arr:any[]) => {
    return arr.splice(arr.indexOf(object), 1)[0];
}

export const TakeObjectWithIdFromArray = (id:number, arr:any[]) => {
    let index = 0;
    arr.forEach(ob => {
        if(ob.id === index){
            return;
        }
        index++;
    });

    return arr.splice(index, 1)[0];
}

export const InsertObjectInArray = (insertAtIndex:number, object:any, arr:any[]) => {
    arr.splice(insertAtIndex, 0, object);
    return arr;
}