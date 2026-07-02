// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PendingTransactionsAPI from '../pending-transactions';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class PendingTransactions extends APIResource {
  /**
   * This endpoint simulates immediately releasing an Inbound Funds Hold, which might
   * be created as a result of, for example, an ACH debit.
   *
   * @example
   * ```ts
   * const pendingTransaction =
   *   await client.simulations.pendingTransactions.releaseInboundFundsHold(
   *     'pending_transaction_k1sfetcau2qbvjbzgju4',
   *   );
   * ```
   */
  releaseInboundFundsHold(
    pendingTransactionID: string,
    options?: RequestOptions,
  ): APIPromise<PendingTransactionsAPI.PendingTransaction> {
    return this._client.post(
      path`/simulations/pending_transactions/${pendingTransactionID}/release_inbound_funds_hold`,
      options,
    );
  }
}
