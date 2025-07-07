import { WebPlugin } from "@capacitor/core";
import type { NativePurchasesPlugin, Product } from "./definitions";
export declare class NativePurchasesWeb extends WebPlugin implements NativePurchasesPlugin {
    restorePurchases(): Promise<void>;
    getProducts(options: {
        productIdentifiers: string[];
    }): Promise<{
        products: Product[];
    }>;
    getProduct(options: {
        productIdentifier: string;
    }): Promise<{
        product: Product;
    }>;
    purchaseProduct(options: {
        productIdentifier: string;
        planIdentifier: string;
        quantity: number;
        userId: string;
    }): Promise<{
        transactionId: string;
    }>;
    isBillingSupported(): Promise<{
        isBillingSupported: boolean;
    }>;
    getPluginVersion(): Promise<{
        version: string;
    }>;
}
