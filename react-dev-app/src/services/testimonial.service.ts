import FetcherService from "./fetcher";

export default class TestimonialService {
  static async top3() {
    // return [
    //   //! This is a mock data
    //   {
    //     id: 1,
    //     personName: "Jane Roe",
    //     personCompany: "InnovateX",
    //     personPicture: "https://picsum.photos/200/200?random=" + 1,
    //     title: "Highly Recommend",
    //     body: "I had an excellent experience working with this team.",
    //     rating: 4,
    //   },
    //   {
    //     id: 2,
    //     personName: "Alice Smith",
    //     personCompany: "EcoFuture",
    //     personPicture: "https://picsum.photos/200/200?random=" + 2,
    //     title: "Great Service!",
    //     body: "The service provided was outstanding and exceeded my expectations.",
    //     rating: 5,
    //   },
    //   {
    //     id: 3,
    //     personName: "Alice Smith",
    //     personCompany: "EcoFuture",
    //     personPicture: "https://picsum.photos/200/200?random=" + 3,
    //     title: "Great Service!",
    //     body: "Their professionalism and dedication truly stand out.",
    //     rating: 3,
    //   },
    // ];
    const response = await FetcherService.get("/testimonials/top");
    console.log("response", response);

    return response;
  }
}
