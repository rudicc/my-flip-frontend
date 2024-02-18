import { UrlServer } from "../services";
let apiDomain = UrlServer
 
class UrlService {

  static loginUrl() {
    return apiDomain + "/auth/signin/";
  }

  static VerifyUrl() {
    return apiDomain + "/auth/validate/";
  }
  static UrlClient() {
    return "http://127.0.0.1:5173/";
  }

  static UrlAPI() {
    return apiDomain;
  }

  static UploadFile() {
    return apiDomain + "uploadFile";
  }

  // static currentUserProfileUrl() {
  //   return apiDomain + "api/user";
  // }
  // static saveUserProfileUrl() {
  //   return apiDomain + "api/user";
  // }
  // static getCurrentUserAcitiviesUrl() {
  //   return apiDomain + "api/activities";
  // }
  // static getTodoUrl() {
  //   return apiDomain + "api/todos";
  // }
  // static markTodoCompleteUrl(id) {
  //   return apiDomain + "api/todo/complete/" + id;
  // }
  // static changeTodoOrderUrl() {
  //   return apiDomain + "api/todo/reorder";
  // }
  // static saveTodoUrl() {
  //   return apiDomain + "api/todo/save";
  // }
  // static removeTodoUrl() {
  //   return apiDomain + "api/todo/remove";
  // }
}

export default UrlService;
