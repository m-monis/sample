export interface ISalesOrders {
    soNumber: string;
    orderDate: Date;
    customerName: string;
    customerNumber: string;
    poNumber: string;
    inquiryNumber: string;
    totalOrderItems: number;
}

export enum Entity {
    SalesOrders = "CatalogService.SalesOrders"
}

export enum SanitizedEntity {
    SalesOrders = "SalesOrders"
}
