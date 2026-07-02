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
    options?: RequestOptions,
  ): APIPromise<WireDrawdownRequestsAPI.WireDrawdownRequest> {
    return this._client.post(
      path`/simulations/wire_drawdown_requests/${wireDrawdownRequestID}/refuse`,
      options,
    );
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
