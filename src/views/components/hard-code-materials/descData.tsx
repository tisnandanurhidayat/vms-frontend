// import { CSSProperties } from 'vue';
import { DescItem } from '/@/components/Description/index';

export const orderInfoData = {
  store: 'Transmart Gresik Icon',
  senderInfo: '8999080000112',
  deptCode: '10 Beverage',
  deliveryNo: 'Transmart Gresik Icon',
  orderNo: '923000646',
  orderDate: 'Wed, Jan 18,2023, 09:39',
  arrivalDate: 'Tue, Jan 24,2023, 15:00',
  companyName: 'PT. TRANS RETAIL INDONESIA',
  taxNo: '01.711.062.8-092.000',
  companyAddress: 'Jl. Dr. Wahidin Sudiro Husodo Gresik, Jawa Timur 61124',
};

export const supplierData = {
  supplier: 'SBY (POKKA) ESHAM DIMA MANDIRI PT',
  code: 'I559',
  telephone: '031-7493537',
  fax: '031-7491592',
};

// interface OrderInfoSchemaInstance {
//   field: String;
//   label: String;
//   labelStyle: CSSProperties;
// }

export const orderInfoSchema: DescItem[] = [
  {
    field: 'senderInfo',
    label: 'Informasi Pengirim',
  },
  {
    field: 'deptCode',
    label: 'Kode Departemen',
  },
  {
    field: 'deliveryNo',
    label: 'Pengiriman Ke',
  },
  {
    field: 'orderNo',
    label: 'Nomor Order',
  },
  {
    field: 'orderDate',
    label: 'Tanggal Order',
  },
  {
    field: 'arrivalDate',
    label: 'Tanggal Penerimaan',
  },
  {
    field: 'companyName',
    label: 'Nama Perusahaan',
  },
  {
    field: 'taxNo',
    label: 'NPWP',
  },
  {
    field: 'companyAddress',
    label: 'Alamat Perusahaan',
  },
];

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
  status: string;
  date: string;
  accepted?: string;
}

const totalPrice = 34567890.12;
export const totalPriceData = totalPrice.toLocaleString('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const additionalInfoData: String = `- Selalu sertakan dokumen ini saat melakukan pengiriman barang.
- Pemasok harus menagih TRI/ARI/TGI sesuai harga satuan yang tercantum dalam PO. Dalam hal Pemasok menagih TRI/ARI/TGI dengan harga satuan yang lebih tinggi dari harga satuan yang tercantum dalam PO, maka TRI/ARI/TGI hanya wajib membayar Pemasok sesuai harga satuan tersebut dalam PO.
- Jika harga yang tertera pada PO kami tidak sesuai dengan kesepakatan, anda bisa menghubungi bagian commercial/buyer yang bersangkutan sebelum melakukan pengiriman.`;

export const documents: Document[] = [
  { docKey: 'po', status: 'Invoice Ditolak', date: 'Fri, Apr 01, 2016, 00:00' },
  { docKey: 'ra', status: 'Disahkan', date: 'Fri, Apr 01, 2016, 00:00' },
  { docKey: 'pfi', status: 'Disahkan', date: 'Sat, Apr 02, 2016, 00:49' },
  { docKey: 'inv0', status: 'Ditolak', date: 'Fri, Apr 08, 2016, 17:02', accepted: '' },
  { docKey: 'invr', status: 'Dikirim', date: 'Mon, Oct 23, 2017, 13:11' },
  { docKey: 'ir', status: 'Revisi sudah dibuat', date: 'Sat, Sep 29, 2018, 10:31' },
  { docKey: 'inv1', status: 'Draft', date: 'Sat, Sep 29, 2018, 10:45', accepted: '' },
];
