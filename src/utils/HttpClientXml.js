import { reactLocalStorage } from "reactjs-localstorage";
const BASE_URL = "http://167.71.227.73:6020/v1/appOwner/";
const ALLOW_ORIGIN = "http://167.71.227.73:6020";
const USER_TYPE = "Appowner";

async function requestData(url, method = "GET", data = {}) {
  let xhr = new XMLHttpRequest();
  xhr.open(method, BASE_URL + url);
  if (checkingAuth()) xhr.setRequestHeader("authorization", checkingAuth());
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Access-Control-Allow-Origin", ALLOW_ORIGIN);
  xhr.setRequestHeader("userType", USER_TYPE);

  return new Promise((resolve, reject) => {
    xhr.send({});
    xhr.onload = () => {
      let response = JSON.parse(xhr.response);
      console.log(response);
      resolve(response);
    };
  });
}

async function audioUpload(url, file,callback) {
  var xhr = new XMLHttpRequest();
  xhr.upload.onprogress = function (event) {
    console.log(`Uploaded ${event.loaded} of ${event.total}`);
    let percent = (event.loaded*100)/event.total
    // callback(percent)
  };

  xhr.onloadend = function () {
    if (xhr.status == 200) {
      console.log("Success");
    } else {
      console.log("error");
    }
  };

  xhr.open("post", BASE_URL + url);
  if (checkingAuth()) xhr.setRequestHeader("Authorization", checkingAuth());
  // xhr.setRequestHeader("Content-Type", "multipart/form-data");
  xhr.setRequestHeader("Access-Control-Allow-Origin", ALLOW_ORIGIN);
  xhr.setRequestHeader("userType", USER_TYPE);
  return new Promise((resolve, reject) => {
    xhr.send(file);
    xhr.onload = () => {
      let response = JSON.parse(xhr.response);
      console.log(response);
      resolve(response);
    };
  });
}

function checkingAuth() {
  let token = reactLocalStorage.get("token");
  if (token) {
    return token;
  }
  return false;
}

export default {
  requestData,
  audioUpload,
};
