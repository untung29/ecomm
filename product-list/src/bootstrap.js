import faker from "faker";

const mount = el => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }
  el.innerHTML = products;
};

/**
 * Context/Situation #1
 * dev-products is used for development purposes, because we can make sure that
 * this id exists in the index.html, we want to directly render the app into the element
 */

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products-dev-only");
  // Assuming the container does not have dev-products-dev-only element
  if (el) {
    // Probably running in isolation (not in container)
    mount(el);
  }
}

/**
 * Context/Situation #2
 * running this app in the container, "#dev-products" might not exists in the container
 * so we don't want to directly render this.
 */

export { mount };
