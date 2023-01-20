import { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

import { Skeleton, Button } from 'components/atoms';
import { AccordionItemsDetailOrder } from 'components/organisms';

import { useGetDetailOrder, usePatchChangeOrderState } from 'hooks/endpoints';

import styles from './detail-order.module.css';

export const DetailOrder: FC = () => {
  const navigate = useNavigate();
  let { orderId } = useParams();
  const { data, isLoading } = useGetDetailOrder(orderId ? orderId : '1231');
  const patchChangeState = usePatchChangeOrderState(orderId ? orderId : '123');

  const handleClickChangeState = () => {
    patchChangeState.mutate(orderId ? orderId : '', {
      onSuccess: () => {
        navigate('/');
      },
      onError: e => {
        console.error(e);
      },
    });
  };

  return (
    <div className={styles.container_title}>
      <button onClick={() => navigate('/')}>
        <ArrowLeftIcon width={40} />
      </button>
      <div className={styles.content}>
        <h1 className={styles.title}>Table {data?.data.data.table_num}</h1>
      </div>

      <div className={styles.container_state}>
        <div className={styles.container_circle}>
          <span className={styles.container_loading}>
            <span className={styles.span_spin_loading}></span>
            <span className={styles.span_loading}></span>
          </span>
        </div>
        <p>Cooking</p>
      </div>

      <Skeleton
        isLoading={isLoading}
        items={4}
        boxClasses="flex flex-col mt-4"
        heightItem="medium">
        <AccordionItemsDetailOrder
          data={data?.data ? data?.data.data.order_details : []}
        />
      </Skeleton>

      <Button
        onClick={handleClickChangeState}
        isLoading={patchChangeState.isLoading}>
        Change State Order
      </Button>
    </div>
  );
};
