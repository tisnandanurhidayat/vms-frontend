import { DescItem } from '/@/components/Description/index';

export const pfiOrderInfoData = {
  recipientCode: '8990080000000 008 - Logistic',
  deptCode: '11',
  orderNo: '115516001303',
  orderDate: 'Thu, Mar 10,2016, 14:37',
};
export const pfiOrderInfoSchema: DescItem[] = [
  { field: 'recipientCode', label: 'Kode Penerima' },
  { field: 'deptCode', label: 'Kode Departemen' },
  { field: 'orderNo', label: 'Nomor Order' },
  { field: 'orderDate', label: 'Tanggal Order' },
];

export const pfiInfoData = {
  pfiDate: 'Tue, Mar 15,2016, 12:38',
  pfiRevision: 0,
};
export const pfiInfoSchema: DescItem[] = [
  { field: 'pfiDate', label: 'Tanggal PFI' },
  { field: 'pfiRevision', label: 'Revisi' },
];

export const supplierData = {
  supplierName: '115516 DWIMITRA MULTIPRATAMA',
  code: '5516',
  telephone: '021-58303642',
  fax: '021-5830342',
};
export const supplierSchema: DescItem[] = [
  {
    field: 'code',
    label: 'Kode Supplier',
  },
  {
    field: 'telephone',
    label: 'Telepon',
  },
  {
    field: 'fax',
    label: 'Fax',
  },
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

export const otherPfiData = {
  cdt: 'TRI1603238761026',
  totalPrice: '179,618.40',
  additionalInfo: 'Always bring this document when delivering goods.',
};
