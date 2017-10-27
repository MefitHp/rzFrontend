export function selectProject(list, id){
    console.log("lista: ", list);
    console.log("id: ", id);
    if(list.length === 0 || id === null || id === undefined) return {};
    return list.filter(i=>i.id === id)[0];
}