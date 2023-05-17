import { DescItem } from '/@/components/Description/index';

export const invrOrderInfoData = {
  orderNo: '115516001303',
  orderDate: 'Thu, Mar 10,2016, 14:37',
  deptCode: '11',
};
export const invrOrderInfoSchema: DescItem[] = [
  { field: 'orderNo', label: 'Nomor Order' },
  { field: 'orderDate', label: 'Tanggal Order' },
  { field: 'deptCode', label: 'Kode Departemen' },
];

export const supplierData = {
  code: '4135',
  companyName: 'PT. KURNIA ANEKA GEMILANG',
  companyAddress: 'Jl. Medan - Tg. Morawa km.14 11730, Medan IDN',
};
export const supplierSchema: DescItem[] = [
  { field: 'code', label: 'Kode' },
  { field: 'companyName', label: 'Nama Perusahaan' },
  { field: 'companyAddress', label: 'Alamat Perusahaan' },
];

// Tanggal Penerimaan Invoice:	Tue, May 10,2016, 14:19
// Nomor Invoice Supplier:	TRI1603288850484
// Jumlah Dibayarkan:	5,269,880.00
// Tanggal Pembayaran:	According to terms of payment

export const invoiceReceptionData = {
  invReceptionDate: 'Tue, May 10,2016, 14:19',
  supplierInvNo: 'TRI1603288850484',
  amountPaid: 5269880.0,
  paymentDate: 'According to terms of payment',
};
export const invoiceReceptionSchema: DescItem[] = [
  { field: 'invReceptionDate', label: 'Tanggal Penerimaan Invoice' },
  { field: 'supplierInvNo', label: 'Nomor Invoice Supplier' },
  { field: 'amountPaid', label: 'Jumlah Dibayarkan' },
  { field: 'paymentDate', label: 'Tanggal Pembayaran' },
];

interface Document {
  docKey: string;
  reference: string;
  status: string;
  date: string;
  accepted?: string;
}

export const documents: Document[] = [
  {
    docKey: 'po',
    reference: 'TRI1603238761026',
    status: 'Invoice Ditolak',
    date: 'Fri, Apr 01, 2016, 00:00',
  },
  {
    docKey: 'pfi',
    reference: '9161679',
    status: 'Disahkan',
    date: 'Fri, Apr 01, 2016, 00:00',
  },
  {
    docKey: 'pfi',
    reference: '',
    status: 'Disahkan',
    date: 'Sat, Apr 02, 2016, 00:49',
  },
  {
    docKey: 'inv0',
    reference: '',
    status: 'Ditolak',
    date: 'Fri, Apr 08, 2016, 17:02',
    accepted: '',
  },
  {
    docKey: 'invr',
    reference: '',
    status: 'Dikirim',
    date: 'Mon, Oct 23, 2017, 13:11',
  },
  {
    docKey: 'ir',
    reference: '',
    status: 'Revisi sudah dibuat',
    date: 'Sat, Sep 29, 2018, 10:31',
  },
  {
    docKey: 'inv1',
    reference: '',
    status: 'Draft',
    date: 'Sat, Sep 29, 2018, 10:45',
    accepted: '',
  },
];

export const otherInvrData = {
  cdt: 'TRI1603238761026',
  additionalInfo: 'This document is valid only when the invoice status is accepted.',
};
