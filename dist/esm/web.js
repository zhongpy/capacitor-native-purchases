import { WebPlugin } from "@capacitor/core";
export class NativePurchasesWeb extends WebPlugin {
  async restorePurchases() {
    console.error("restorePurchases only mocked in web");
  }
  async getProducts(options) {
    console.error("getProducts only mocked in web " + options);
    return { products: [] };
  }
  async getProduct(options) {
    console.error("getProduct only mocked in web " + options);
    return { product: {} };
  }
  async purchaseProduct(options) {
    console.error("purchaseProduct only mocked in web" + options);
    return { transactionId: "transactionId" };
  }
  async isBillingSupported() {
    console.error("isBillingSupported only mocked in web");
    return { isBillingSupported: false };
  }
  async getPluginVersion() {
    console.warn("Cannot get plugin version in web");
    return { version: "default" };
  }
}
//# sourceMappingURL=web.js.map
