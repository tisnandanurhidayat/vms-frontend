import { getPurchaseOrder, getPurchaseOrderParams } from '../services/purchaseOrderService';
import { useInfiniteQuery } from 'vue-query';

// export const useGetPurchaseOrder = (params: getPurchaseOrderParams, handler?: any) => {
//   return useQuery(['get_purchase_order', params], () => getPurchaseOrder(params), handler);
// };
export function useGetPurchaseOrder(params: Omit<getPurchaseOrderParams, 'limit' | 'page'>) {
  return useInfiniteQuery(
    ['get_query_places', params],
    ({ pageParam }) => {
      return getPurchaseOrder({
        limit: 1000,
        page: pageParam,
      });
    },
    {
      getNextPageParam: (currentPage) => {
        if (currentPage.data.places.length === 0) {
          return undefined;
        } else {
          return currentPage.data.pagination.page + 1;
        }
      },
    },
  );
}
