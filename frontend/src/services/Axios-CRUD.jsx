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

  async signup(data) {
    return await http.post("user/signup", data);
  }

  async payment(data) {
    return await http.post("payment", data);
  }
}

export default new Request();
