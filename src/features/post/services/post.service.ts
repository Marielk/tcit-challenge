import { simulateDelay } from "@/src/shared/utils/delay";
import { Post } from "../model/post.types";
import { Result } from "../model/postServices.types";
import { MOCK_POSTS } from "../test/mocks/postListMock";

export const getPostsList = async (options?: { forceError?: boolean }): Promise<Result<Post[]>> => {
  await simulateDelay();

  const shouldFail = options?.forceError ?? false;

    if(shouldFail) {
      return ({ success: false, error: 'Error al obtener posts' });
    } else {
      return ({ success: true, data: [...MOCK_POSTS] });
    }
};