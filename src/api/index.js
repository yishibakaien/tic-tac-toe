// import { ADD_TO_CART } from '../store/actionTypes/index';

function request(product) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let flag = Math.random() < 0.5;
      if (flag) {
        // 原封不动返回
        resolve(product);
      } else {
        reject('add product fail');
      }
    }, 500);
  });
}
export function addProduct(product) {
  return request(product);
}
