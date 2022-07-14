import http from "./http-common";

class Request {
  getAll(page = 0) {
    return http.get(`yellowspace?page=${page}`);
  }

  get(id) {
    return http.get(`/yellowspace?id=${id}`);
  }

  find(query, by = "name", page = 0) {
    return http.get(`yellowspace?${by}=${query}&page=${page}`);
  }

  login(data) {
    return http.post("user/login", data);
  }

  signup(data) {
    return http.post("user/signup", data);
  }

  payment(data) {
    return http.post("user/payment", data);
  }

  updateReview(data) {
    return http.put("/review-edit", data);
  }

  deleteReview(id, userId) {
    return http.delete(`/review-delete?id=${id}`, {
      data: { user_id: userId },
    });
  }
}

export default new Request();
