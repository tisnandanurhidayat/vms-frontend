// Base URL based on environment variable
// export const baseUrl = `${process.env.NEXT_PUBLIC_API_URL!}/newvms`;
export const baseUrlMock = `${import.meta.env.NEXT_PUBLIC_API_URL_MOCK!}`;
// export const localURL = `${process.env.NEXT_PUBLIC_API_URL_LOCAL!}/api/v1`;

const endpoint = {
  // Add more URL endpoints to request here
  purchaseOrder: `${baseUrlMock}/po`,
};

export default endpoint;
