import HttpClient from "../utils/HttpClient";

export async function getLogin (data){
    let result = await HttpClient.requestData("login","POST",data)
    return result
}
export async function getRegister (data){
    let result = await HttpClient.requestData("register", "POST", data);
    return result
}
export async function getUser (){
    let result = await HttpClient.requestData("viewuserdetails", "GET");
    return result
}
export async function updateUserDetail (data){
    let result = await HttpClient.requestData("updateprofile", "PUT",data);
    return result
}