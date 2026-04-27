// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CardPaymentsAPI from '../card-payments';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class CardAuthorizationExpirations extends APIResource {
  /**
   * Simulates expiring a Card Authorization immediately.
   *
   * @example
   * ```ts
   * const cardPayment =
   *   await client.simulations.cardAuthorizationExpirations.create(
   *     {
   *       card_payment_id: 'card_payment_nd3k2kacrqjli8482ave',
   *     },
   *   );
   * ```
   */
  create(
    body: CardAuthorizationExpirationCreateParams,
    options?: RequestOptions,
  ): APIPromise<CardPaymentsAPI.CardPayment> {
    return this._client.post('/simulations/card_authorization_expirations', { body, ...options });
  }
}

export interface CardAuthorizationExpirationCreateParams {
  /**
   * The identifier of the Card Payment to expire.
   */
  card_payment_id: string;
}

export declare namespace CardAuthorizationExpirations {
  export { type CardAuthorizationExpirationCreateParams as CardAuthorizationExpirationCreateParams };
}
