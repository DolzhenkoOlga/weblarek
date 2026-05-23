import { IApi } from "../../types";
import { IOrder } from "../../types";
import { IProductResponse } from "../../types";
import { IOrderResult } from "../../types";


export class LarekApi {
    protected api: IApi;

    constructor(api:IApi) {
        this.api = api;
    }

    getProducts(): Promise<IProductResponse> {
        return this.api.get<IProductResponse>("/product/");
    }

    postOrder(order: IOrder): Promise<IOrderResult> {
        return this.api.post<IOrderResult> ("/order/",order);
    }
}
