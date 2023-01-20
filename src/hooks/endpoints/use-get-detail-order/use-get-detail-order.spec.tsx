import { renderHook, waitFor } from '@testing-library/react';

import { createProviderWrapper } from 'infrastructure/tests/create-provider-wrapper';
import { DETAIL_ORDER_RESPONSE_DATA } from 'mock_services';

import { useGetDetailOrder } from './use-get-detail-order';

describe('useGetDetailOrder hook', () => {
  it('should set data', async () => {
    const { result } = renderHook(() => useGetDetailOrder('12453'), {
      wrapper: createProviderWrapper(),
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBeTruthy();
    });

    expect(result.current.data?.data).toEqual(DETAIL_ORDER_RESPONSE_DATA);
  });
});
