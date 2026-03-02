// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CardPaymentsAPI from '../card-payments';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class CardAuthentications extends APIResource {
  /**
   * Simulates a Card Authentication attempt on a [Card](#cards). The attempt always
   * results in a [Card Payment](#card_payments) being created, either with a status
   * that allows further action or a terminal failed status.
   *
   * @example
   * ```ts
   * const cardPayment =
   *   await client.simulations.cardAuthentications.create({
   *     card_id: 'card_oubs0hwk5rn6knuecxg2',
   *   });
   * ```
   */
  create(
    body: CardAuthenticationCreateParams,
    options?: RequestOptions,
  ): APIPromise<CardPaymentsAPI.CardPayment> {
    return this._client.post('/simulations/card_authentications', { body, ...options });
  }

  /**
   * Simulates an attempt at a Card Authentication Challenge. This updates the
   * `card_authentications` object under the [Card Payment](#card_payments). You can
   * also attempt the challenge by navigating to
   * https://dashboard.increase.com/card_authentication_simulation/:card_payment_id.
   *
   * @example
   * ```ts
   * const cardPayment =
   *   await client.simulations.cardAuthentications.challengeAttempts(
   *     'card_payment_nd3k2kacrqjli8482ave',
   *     { one_time_code: '123456' },
   *   );
   * ```
   */
  challengeAttempts(
    cardPaymentID: string,
    body: CardAuthenticationChallengeAttemptsParams,
    options?: RequestOptions,
  ): APIPromise<CardPaymentsAPI.CardPayment> {
    return this._client.post(path`/simulations/card_authentications/${cardPaymentID}/challenge_attempts`, {
      body,
      ...options,
    });
  }

  /**
   * Simulates starting a Card Authentication Challenge for an existing Card
   * Authentication. This updates the `card_authentications` object under the
   * [Card Payment](#card_payments). To attempt the challenge, use the
   * `/simulations/card_authentications/:card_payment_id/challenge_attempts` endpoint
   * or navigate to
   * https://dashboard.increase.com/card_authentication_simulation/:card_payment_id.
   *
   * @example
   * ```ts
   * const cardPayment =
   *   await client.simulations.cardAuthentications.challenges(
   *     'card_payment_nd3k2kacrqjli8482ave',
   *   );
   * ```
   */
  challenges(cardPaymentID: string, options?: RequestOptions): APIPromise<CardPaymentsAPI.CardPayment> {
    return this._client.post(path`/simulations/card_authentications/${cardPaymentID}/challenges`, options);
  }
}

export interface CardAuthenticationCreateParams {
  /**
   * The identifier of the Card to be authorized.
   */
  card_id: string;

  /**
   * The category of the card authentication attempt.
   *
   * - `payment_authentication` - The authentication attempt is for a payment.
   * - `non_payment_authentication` - The authentication attempt is not for a
   *   payment.
   */
  category?: 'payment_authentication' | 'non_payment_authentication';

  /**
   * The device channel of the card authentication attempt.
   *
   * - `app` - The authentication attempt was made from an app.
   * - `browser` - The authentication attempt was made from a browser.
   * - `three_ds_requestor_initiated` - The authentication attempt was initiated by
   *   the 3DS Requestor.
   */
  device_channel?: 'app' | 'browser' | 'three_ds_requestor_initiated';

  /**
   * The merchant identifier (commonly abbreviated as MID) of the merchant the card
   * is transacting with.
   */
  merchant_acceptor_id?: string;

  /**
   * The Merchant Category Code (commonly abbreviated as MCC) of the merchant the
   * card is transacting with.
   */
  merchant_category_code?: string;

  /**
   * The country the merchant resides in.
   */
  merchant_country?: string;

  /**
   * The name of the merchant
   */
  merchant_name?: string;

  /**
   * The purchase amount in cents.
   */
  purchase_amount?: number;
}

export interface CardAuthenticationChallengeAttemptsParams {
  /**
   * The one-time code to be validated.
   */
  one_time_code: string;
}

export declare namespace CardAuthentications {
  export {
    type CardAuthenticationCreateParams as CardAuthenticationCreateParams,
    type CardAuthenticationChallengeAttemptsParams as CardAuthenticationChallengeAttemptsParams,
  };
}
