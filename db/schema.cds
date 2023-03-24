namespace db;

entity SalesOrders {
    key soNumber: String   @title : 'Sales Order Number';
    orderDate: Date    @title : 'Order Date';
    customerName: String   @title : 'Customer Name';
    customerNumber: String  @title : 'Customer Number';
    poNumber: String   @title : 'PO Number';
    inquiryNumber: String  @title : 'Inquiry Number';
    totalOrderItems: Integer   @title : 'Total Sales Order';
}

