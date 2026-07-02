// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TransactionsAPI from '../transactions';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class CardRefunds extends APIResource {
  /**
   * Simulates refunding a card transaction. The full value of the original sandbox
   * transaction is refunded.
   *
   * @example
   * ```ts
   * const transaction =
   *   await client.simulations.cardRefunds.create();
   * ```
   */
  create(body: CardRefundCreateParams, options?: RequestOptions): APIPromise<TransactionsAPI.Transaction> {
    return this._client.post('/simulations/card_refunds', { body, ...options });
  }
}

export interface CardRefundCreateParams {
  /**
   * The refund amount in cents. Pulled off the `pending_transaction` or the
   * `transaction` if not provided.
   */
  amount?: number;

  /**
   * The identifier of the Pending Transaction for the refund authorization. If this
   * is provided, `transaction` must not be provided as a refund with a refund
   * authorized can not be linked to a regular transaction.
   */
  pending_transaction_id?: string;

  /**
   * The identifier for the Transaction to refund. The Transaction's source must have
   * a category of card_settlement.
   */
  transaction_id?: string;
}

export declare namespace CardRefunds {
  export { type CardRefundCreateParams as CardRefundCreateParams };
}
