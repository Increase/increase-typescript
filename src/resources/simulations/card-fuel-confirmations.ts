// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CardPaymentsAPI from '../card-payments';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class CardFuelConfirmations extends APIResource {
  /**
   * Simulates the fuel confirmation of an authorization by a card acquirer. This
   * happens asynchronously right after a fuel pump transaction is completed. A fuel
   * confirmation can only happen once per authorization.
   *
   * @example
   * ```ts
   * const cardPayment =
   *   await client.simulations.cardFuelConfirmations.create({
   *     amount: 5000,
   *     card_payment_id: 'card_payment_nd3k2kacrqjli8482ave',
   *   });
   * ```
   */
  create(
    body: CardFuelConfirmationCreateParams,
    options?: RequestOptions,
  ): APIPromise<CardPaymentsAPI.CardPayment> {
    return this._client.post('/simulations/card_fuel_confirmations', { body, ...options });
  }
}

export interface CardFuelConfirmationCreateParams {
  /**
   * The amount of the fuel_confirmation in minor units in the card authorization's
   * currency.
   */
  amount: number;

  /**
   * The identifier of the Card Payment to create a fuel_confirmation on.
   */
  card_payment_id: string;
}

export declare namespace CardFuelConfirmations {
  export { type CardFuelConfirmationCreateParams as CardFuelConfirmationCreateParams };
}
