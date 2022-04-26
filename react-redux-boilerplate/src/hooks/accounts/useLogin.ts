import { useActivity } from "hooks/activities/useActivity";
import { OperationResult } from "hooks/types";
import { useDispatch, useSelector } from "hooks";
import {
  ActionTypes,
  getAccountData,
  getAccountDataSelector,
} from "store/accounts";

export function useLogin(): OperationResult<
  string,
  (email: string, password: string) => void
> {
  const dispatch = useDispatch();
  const data = useSelector((state) => getAccountDataSelector(state.myAccount));
  const [{ loading, error }] = useActivity(ActionTypes.GET_ACCOUNT_DATA);

  function handler(email: string, password: string) {
    dispatch(getAccountData(email, password));
  }

  return [{ loading, error, data }, handler];
}
