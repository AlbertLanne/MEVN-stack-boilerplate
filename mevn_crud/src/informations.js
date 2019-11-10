import axios from "axios";

const url = "http://localhost:4000/api/products";

class ProductsService {


  static getProducts() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        const data = res.data;
        resolve(
          data.map(post => ({
            ...post,
            createdAt: new Date(post.createdAt)
          }))
        );
      } catch (err) {
        reject(err);
      }
    });
  }

  // create prod

  static insertProducts(text) {
    return axios.post(url, {
      text
    });
  }

  // delete prod

  static deleteProducts(id) {
    return axios.delete("${url}${id}");
  }
}
export default ProductsService;
