// import { CSSProperties } from 'vue';
import { DescItem } from '/@/components/Description/index';

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
    field: 'deliveryTo',
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
  reference: string;
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
