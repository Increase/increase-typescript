// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as WireDrawdownRequestsAPI from '../wire-drawdown-requests';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class WireDrawdownRequests extends APIResource {
  /**
   * Simulates a Wire Drawdown Request being refused by the debtor.
   *
   * @example
   * ```ts
   * const wireDrawdownRequest =
   *   await client.simulations.wireDrawdownRequests.refuse(
   *     'wire_drawdown_request_q6lmocus3glo0lr2bfv3',
   *   );
   * ```
   */
  refuse(
    wireDrawdownRequestID: string,
    body: WireDrawdownRequestRefuseParams,
    options?: RequestOptions,
  ): APIPromise<WireDrawdownRequestsAPI.WireDrawdownRequest> {
    return this._client.post(path`/simulations/wire_drawdown_requests/${wireDrawdownRequestID}/refuse`, {
      body,
      ...options,
    });
  }

  /**
   * Simulates a Wire Drawdown Request being submitted to Fedwire.
   *
   * @example
   * ```ts
   * const wireDrawdownRequest =
   *   await client.simulations.wireDrawdownRequests.submit(
   *     'wire_drawdown_request_q6lmocus3glo0lr2bfv3',
   *   );
   * ```
   */
  submit(
    wireDrawdownRequestID: string,
    options?: RequestOptions,
  ): APIPromise<WireDrawdownRequestsAPI.WireDrawdownRequest> {
    return this._client.post(
      path`/simulations/wire_drawdown_requests/${wireDrawdownRequestID}/submit`,
      options,
    );
  }
}

export interface WireDrawdownRequestRefuseParams {
  /**
   * Additional information about the refusal that the simulated refusal will have.
   */
  refusal_reason_additional_information?: string;

  /**
   * The reason code that the simulated refusal will have.
   *
   * - `invalid_debtor_account_number` - The debtor's account number is invalid or
   *   missing. Corresponds to the Fedwire reason code `AC02`.
   * - `transaction_forbidden` - The debtor account does not allow drawdown requests.
   *   Corresponds to the Fedwire reason code `AG01`.
   * - `unsuccessful_direct_debit` - The debtor account cannot be debited for a
   *   generic reason. Corresponds to the Fedwire reason code `AG07`.
   * - `inconsistent_with_end_customer` - The debtor's identification is inconsistent
   *   with the debtor account number. Corresponds to the Fedwire reason code `BE01`.
   * - `narrative` - The reason is provided as narrative information in the
   *   additional information field. Corresponds to the Fedwire reason code `NARR`.
   * - `other` - Some other error or issue has occurred.
   */
  refusal_reason_code?:
    | 'invalid_debtor_account_number'
    | 'transaction_forbidden'
    | 'unsuccessful_direct_debit'
    | 'inconsistent_with_end_customer'
    | 'narrative'
    | 'other';
}

export declare namespace WireDrawdownRequests {
  export { type WireDrawdownRequestRefuseParams as WireDrawdownRequestRefuseParams };
}
