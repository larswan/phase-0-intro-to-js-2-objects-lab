const employee = {
    name: "Larson",
    streetAddress: "12 Third St.",
    }

function updateEmployeeWithKeyAndValue(obj, key, value){
    const newObj = {...obj}
    newObj[key] = value;
    return newObj
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key]=value;
    return obj;
}
function deleteFromEmployeeByKey(object, key){
    const newObj = {...object};
    delete newObj[key]
    return newObj;
}
function destructivelyDeleteFromEmployeeByKey(object, key){
    delete object[key]
    return object;
}






//console.log("employee: ", employee) 