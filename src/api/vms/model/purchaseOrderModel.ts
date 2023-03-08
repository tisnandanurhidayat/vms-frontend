export interface PurchaseOrder {
  id: string;
  supplier_name_local: string;
  po_no: string;
  order_date: string;
  status: string;
  date_updated: string;
  store_code: string;
  delivery_to_local: string;
}

export interface PurchaseOrderParams {
  id: string;
}
