
import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch } from '../../../store/hooks';
import { ServiceStatus } from '../model/postServices.types';
import { getPostsList } from '../services/post.service';
import { postsLoaded } from '../store/postSlice';

export const useSetPostsHook = () => {
  const [status, setStatus] = useState<ServiceStatus>('idle');
  const [error, setError] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  const loadData = useCallback(async () => {
    setStatus('loading');
    setError(null);

    const result = await getPostsList();

    if (result.success) {
      dispatch(postsLoaded(result.data));
      setStatus('success');
    } else {
      setStatus('error');
      setError(result.error);
    }
  }, [dispatch]);


  useEffect(() => {
    void loadData();
  }, [loadData]);

  return { status, error };

}

