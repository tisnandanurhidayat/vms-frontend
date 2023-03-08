// Base URL based on environment variable
export const baseUrl = `${process.env.NEXT_PUBLIC_API_URL!}/newvms`;
// export const baseUrlMock = `${process.env.NEXT_PUBLIC_API_URL_MOCK!}/api/v1`;
// export const localURL = `${process.env.NEXT_PUBLIC_API_URL_LOCAL!}/api/v1`;

const endpoint = {
  // Add more URL endpoints to request here
  purchaseOrder: `${baseUrl}/po`,
};

export default endpoint;
