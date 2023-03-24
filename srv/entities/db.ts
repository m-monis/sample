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
    SalesOrders = "db.SalesOrders"
}

export enum SanitizedEntity {
    SalesOrders = "SalesOrders"
}
