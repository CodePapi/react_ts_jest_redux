import * as types from '../action-types';
import AxiosCall from '../../utils/axios';
import ErrorHandler from '../../utils/error-handler';
import { SearchBooksPayloadtype } from '../../Types.d';

export const searchBooksStart = () => ({
  type: types.SEARCH_BOOKS_START,
});

export const searchBooksSuccess = (payload: any) => ({
  type: types.SEARCH_BOOKS_SUCCESS,
  payload,
});

export const searchBooksFail = (payload: any) => ({
  type: types.SEARCH_BOOKS_FAIL,
  payload,
});

export const searchBooksCleanup = () => ({
  type: types.SEARCH_BOOKS_CLEANUP,
});

export const searchBooks =
  // eslint-disable-next-line
  (payload: SearchBooksPayloadtype) => async (dispatch: ({}) => void) => {
    try {
      dispatch(searchBooksStart());
      const requestObj = {
        path: `/search.json?q=${payload.query}&page=${payload.page}`,
        method: 'GET',
      };
      const data = await AxiosCall(requestObj);
      dispatch(searchBooksSuccess(data));
    } catch (err) {
      const error = ErrorHandler(err);
      dispatch(searchBooksFail(error));
    }
  };
