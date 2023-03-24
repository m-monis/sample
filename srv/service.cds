using { db } from '../db/schema';

@path: '/CatalogService'
service CatalogService {

    entity SalesOrders as projection on db.SalesOrders;
}