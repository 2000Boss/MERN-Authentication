import http from "./http-common";

class Request {
  savePayment() {
    return http.post("payment/crud-payment-method");
  }

  paymentMethods() {
    return http.get(`payment/crud-payment-method`);
  }

  createPayment(data) {
    return http.post("payment/create-payment-intent", data);
  }
  updatePayment(data) {
    return http.put("payment/crud-payment-method", data);
  }

  login(data) {
    return http.post("user/login", data);
  }
  logout() {
    return http.get("user/logout");
  }

  signup(data) {
    return http.post("user/signup", data);
  }
  createBlog(data) {
    return http.post("blog", data);
  }

  updateProfile(data, _id) {
    return http.patch(`user/update/${_id}`, data);
  }

  async payment(data) {
    return await http.post("payment", data);
  }

  AWS_Link() {
    return http.get("user/upload");
  }
}

export default new Request();
