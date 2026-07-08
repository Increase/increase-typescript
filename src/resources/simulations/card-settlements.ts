// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CardSettlementsAPI from './card-settlements';
import * as TransactionsAPI from '../transactions';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class CardSettlements extends APIResource {
  /**
   * Simulates the settlement of an authorization by a card acquirer. After a card
   * authorization is created, the merchant will eventually send a settlement. This
   * simulates that event, which may occur many days after the purchase in
   * production. The amount settled can be different from the amount originally
   * authorized, for example, when adding a tip to a restaurant bill.
   *
   * @example
   * ```ts
   * const transaction =
   *   await client.simulations.cardSettlements.create({
   *     card_id: 'card_oubs0hwk5rn6knuecxg2',
   *   });
   * ```
   */
  create(body: CardSettlementCreateParams, options?: RequestOptions): APIPromise<TransactionsAPI.Transaction> {
    return this._client.post('/simulations/card_settlements', { body, ...options });
  }
}

export interface CardSettlementCreateParams {
  /**
   * The identifier of the Card to create a settlement on.
   */
  card_id: string;

  /**
   * The amount to be settled. This defaults to the amount of the Pending Transaction
   * being settled, or a random amount if `pending_transaction_id` is not provided.
   */
  amount?: number;

  /**
   * The identifier of the Pending Transaction for the Card Authorization you wish to
   * settle. If not provided, the settlement will be force posted without a Card
   * Authorization.
   */
  pending_transaction_id?: string;
}

export declare namespace CardSettlements {
  export {
    type CardSettlementCreateParams as CardSettlementCreateParams
  };
}
