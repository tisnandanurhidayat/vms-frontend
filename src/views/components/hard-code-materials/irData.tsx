import { DescItem } from '/@/components/Description/index';

export const supplierData = {
  supplierName: '104135 KURNIA ANEKAGEMILANG (SYRUP)',
  code: '4135',
  companyName: 'PT. KURNIA ANEKA GEMILANG',
  companyAddress: 'Jl. Medan - Tg. Morawa km.14 11730, Medan IDN',
  postCode: '11730',
  city: 'Medan',
  country: 'Indonesia',
};
export const supplierSchema: DescItem[] = [
  { field: 'code', label: 'Kode' },
  { field: 'companyName', label: 'Nama Perusahaan' },
  { field: 'companyAddress', label: 'Alamat Perusahaan' },
  { field: 'postCode', label: 'Kode Pos' },
  { field: 'city', label: 'Kota' },
  { field: 'country', label: 'Negara' },
];

export const supplierInvoiceData = {
  supplierInvNo: 'TRI1603288850484',
  status: 'Ditolak',
  reason: '2 :Faktur Pajak Bermasalah',
};
export const supplierInvoiceSchema: DescItem[] = [
  { field: 'supplierInvNo', label: 'Nomor Invoice Supplier' },
  { field: 'status', label: 'Status' },
  { field: 'reason', label: 'Alasan Status' },
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

export const otherInvData = {
  cdt: 'TRI1603238761026',
  totalPrice: '179,618.40',
  additionalInfo: `Always bring this document when delivering goods.
  Mulai tanggal 1 January 2014, PT. Trans Retail Indonesia hanya akan menerima invoice yang dilengkapi dengan barcode. OTP VMS harus digunakan untuk proses invoice barcode. Informasi tambahan dan petunjuk penggunaan dapat menghubungi VMS Support melalui email vms_support@transretail.co.id`,
  callCenterInfo: '-',
};
