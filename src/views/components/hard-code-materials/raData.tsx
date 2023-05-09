import { DescItem } from '/@/components/Description/index';

export const raOrderInfoData = {
  orderNo: '916021719',
  orderDate: 'Wed, Mar 23,2016, 15:27',
  deptCode: '22',
  requesterGroup: '021',
  deliveryTo: 'Ambassador',
  recipientCode: '1116016047',
};
export const raOrderInfoSchema: DescItem[] = [
  { field: 'orderNo', label: 'Nomor Order' },
  { field: 'orderDate', label: 'Tanggal Order' },
  { field: 'deptCode', label: 'Kode Departemen' },
  { field: 'requesterGroup', label: 'Kelompok Pemesan' },
  { field: 'deliveryTo', label: 'Pengiriman Ke' },
  { field: 'recipientCode', label: 'Kode Penerima' },
];

export const raInfoData = {
  raNo: '1116016047',
  raDate: 'Thu, Mar 24,2016, 00:00',
};
export const raInfoSchema: DescItem[] = [
  { field: 'raNo', label: 'Nomor RA' },
  { field: 'raDate', label: 'Tanggal RA' },
];

export const supplierData = {
  supplier: 'DOMBA KECIL, CV',
  code: 'N972',
  telephone: '0819-06543268',
  fax: '021-43931145',
};
export const supplierSchema: DescItem[] = [
  {
    field: 'code',
    label: 'Kode',
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
    docKey: 'ra',
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

export const otherRaData = {
  supplierDest: 'Domba Kecil, CV',
  cdt: 'TRI1603238761026',
};
