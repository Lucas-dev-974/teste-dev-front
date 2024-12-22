export default class FetcherService {
  static host = "http://localhost:8000";
  static token = "";

  static async get(url: string) {
    const response = await this.fetcher(url, { method: "GET" });
    return await response;
  }

  static async post(url: string, data: object) {
    const response = await this.fetcher(url, {
      method: "POST",
      body: JSON.stringify(data),
    });
    return await response;
  }

  static async patch(url: string, data: object) {
    const response = await this.fetcher(url, {
      method: "PATCH",
      body: JSON.stringify(data),
    });
    return await response;
  }

  static async delete(url: string) {
    const response = await this.fetcher(url, {
      method: "DELETE",
    });
    return await response;
  }

  static async fetcher(input: string, init?: RequestInit) {
    const response = await fetch(this.host + input, {
      ...init,
      headers: {
        Authorization: "Bearer " + this.token,
        "Content-Type": "application/json",
      },
    });

    const responseJson = await response.json();

    if (response.status != 200) {
      console.log("error ");
    }

    return responseJson;
  }
}
