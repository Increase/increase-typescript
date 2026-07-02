// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CardPaymentsAPI from '../card-payments';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class CardReversals extends APIResource {
  /**
   * Simulates the reversal of an authorization by a card acquirer. An authorization
   * can be partially reversed multiple times, up until the total authorized amount.
   * Marks the pending transaction as complete if the authorization is fully
   * reversed.
   *
   * @example
   * ```ts
   * const cardPayment =
   *   await client.simulations.cardReversals.create({
   *     card_payment_id: 'card_payment_nd3k2kacrqjli8482ave',
   *   });
   * ```
   */
  create(body: CardReversalCreateParams, options?: RequestOptions): APIPromise<CardPaymentsAPI.CardPayment> {
    return this._client.post('/simulations/card_reversals', { body, ...options });
  }
}

export interface CardReversalCreateParams {
  /**
   * The identifier of the Card Payment to create a reversal on.
   */
  card_payment_id: string;

  /**
   * The amount of the reversal in minor units in the card authorization's currency.
   * This defaults to the authorization amount.
   */
  amount?: number;
}

export declare namespace CardReversals {
  export { type CardReversalCreateParams as CardReversalCreateParams };
}
