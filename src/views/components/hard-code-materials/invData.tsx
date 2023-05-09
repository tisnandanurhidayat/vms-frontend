import { DescItem } from '/@/components/Description/index';

export const invOrderInfoData = {
  recipientCode: '8990080000000 008 - Logistic',
  deptCode: '11',
  orderNo: '115516001303',
  orderDate: 'Thu, Mar 10,2016, 14:37',
  store: '008 - Logistic',
  companyName: 'PT. TRANS RETAIL INDONESIA',
  companyAddress: 'JL RAYA CIKARANG CIBARUSAH KM32 KEC CIKARANG SELATAN - LEMAH ABANG',
  taxNo: '01.711.062.8-092.000',
};
export const invOrderInfoSchema: DescItem[] = [
  { field: 'orderNo', label: 'Nomor Order' },
  { field: 'orderDate', label: 'Tanggal Order' },
  { field: 'deptCode', label: 'Kode Departemen' },
  { field: 'recipientCode', label: 'Kode Penerima' },
  { field: 'store', label: 'Toko' },
  { field: 'companyName', label: 'Nama Perusahaan' },
  { field: 'companyAddress', label: 'Alamat Perusahaan' },
  { field: 'taxNo', label: 'NPWP' },
];

export const supplierData = {
  supplierName: '104135 KURNIA ANEKAGEMILANG (SYRUP)',
  code: '4135',
  companyName: 'PT. KURNIA ANEKA GEMILANG',
  companyAddress: 'Jl. Medan - Tg. Morawa km.14 11730, Medan IDN',
  postCode: '11730',
  city: 'Medan',
  country: 'Indonesia',
  name: 'Ami',
  telephone: '0215592505',
  fax: '0215592504',
  taxNo: '01.516.474.2-125.000',
  email: 'kurniasyrup@yahoo.com',
};
export const supplierSchema: DescItem[] = [
  { field: 'code', label: 'Kode' },
  { field: 'companyName', label: 'Nama Perusahaan' },
  { field: 'companyAddress', label: 'Alamat Perusahaan' },
  { field: 'postCode', label: 'Kode Pos' },
  { field: 'city', label: 'Kota' },
  { field: 'country', label: 'Negara' },
  { field: 'name', label: 'Nama' },
  { field: 'telephone', label: 'Telepon' },
  { field: 'fax', label: 'Fax' },
  { field: 'taxNo', label: 'NPWP' },
  { field: 'email', label: 'E-Mail' },
];

export const invDetailData = {
  taxNo: '***.***-**.********',
  confirmedTaxNo: '010.000-16.72147088',
  taxInvoiceDate: null,
  taxInvoiceDateSubstitute: '10/02/2016',
  isTaxInvoiceExpired: 'Y' || 'N',
  latestEtax: null,
  supplierInvoiceNo: 'TRI1602038106167',
  supplierInvoiceDate: '27/03/2016',
  revision: 1,
};
export const invDetailSchema: DescItem[] = [
  { field: 'taxNo', label: 'Nomor Seri Pajak' },
  { field: 'confirmedTaxNo', label: 'Konfirmasi Nomor Seri Pajak' },
  { field: 'taxInvoiceDate', label: 'Tanggal Faktur Pajak' },
  { field: 'taxInvoiceDateSubstitute', label: 'Tanggal Faktur Pajak Pengganti' },
  { field: 'isTaxInvoiceExpired', label: 'Faktur Pajak Expired' },
  { field: 'latestEtax', label: 'Etax Terbaru' },
  { field: 'supplierInvoiceNo', label: 'Nomor Invoice Supplier' },
  { field: 'supplierInvoiceDate', label: 'Tanggal Invoice Supplier' },
  { field: 'revision', label: 'Revisi' },
];

export const invTaxInvoiceData: Recordable[] = [
  {
    seq: '[SEQ]',
    type: '[Tipe]',
    file: '[File]',
    order: '[Order]',
  },
];

export const invSupportingDocumentData: Recordable[] = [
  // {
  //   deliveryOrder: '[Link download surat jalan]',
  //   invoice: '[Link download surat invoice]',
  //   receipt: '[Link download surat kwitansi]',
  // },
  // {
  //   deliveryOrder: '',
  //   invoice: '',
  //   receipt: '',
  // },
  {
    deliveryOrder: '[Link download surat jalan]',
    invoice: '',
    receipt: '[Link download surat kwitansi]',
  },
];

export const invPriceSchema: DescItem[] = [
  { field: 'subtotal', label: 'Sub Total' },
  { field: 'purchasePriceCorrection', label: 'Koreksi Harga Beli' },
  { field: 'taxCorrection', label: 'Koreksi PPN' },
  { field: 'tax', label: 'PPN' },
  { field: 'luxuryTax', label: 'Pajak Barang Mewah' },
  { field: 'total', label: 'Total Harga' },
];

export const invPriceData = {
  subtotal: '994562.8',
  purchasePriceCorrection: 0.2,
  taxCorrection: -0.3,
  tax: 99456.0,
  luxuryTax: 0.0,
  total: 1094019.0,
};

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
