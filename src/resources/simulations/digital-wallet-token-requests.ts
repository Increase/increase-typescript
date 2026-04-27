// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class DigitalWalletTokenRequests extends APIResource {
  /**
   * Simulates a user attempting to add a [Card](#cards) to a digital wallet such as
   * Apple Pay.
   *
   * @example
   * ```ts
   * const digitalWalletTokenRequest =
   *   await client.simulations.digitalWalletTokenRequests.create(
   *     { card_id: 'card_oubs0hwk5rn6knuecxg2' },
   *   );
   * ```
   */
  create(
    body: DigitalWalletTokenRequestCreateParams,
    options?: RequestOptions,
  ): APIPromise<DigitalWalletTokenRequestCreateResponse> {
    return this._client.post('/simulations/digital_wallet_token_requests', { body, ...options });
  }
}

/**
 * The results of a Digital Wallet Token simulation.
 */
export interface DigitalWalletTokenRequestCreateResponse {
  /**
   * If the simulated tokenization attempt was declined, this field contains details
   * as to why.
   *
   * - `card_not_active` - The card is not active.
   * - `no_verification_method` - The card does not have a two-factor authentication
   *   method.
   * - `webhook_timed_out` - Your webhook timed out when evaluating the token
   *   provisioning attempt.
   * - `webhook_declined` - Your webhook declined the token provisioning attempt.
   */
  decline_reason:
    | 'card_not_active'
    | 'no_verification_method'
    | 'webhook_timed_out'
    | 'webhook_declined'
    | null;

  /**
   * If the simulated tokenization attempt was accepted, this field contains the id
   * of the Digital Wallet Token that was created.
   */
  digital_wallet_token_id: string | null;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `inbound_digital_wallet_token_request_simulation_result`.
   */
  type: 'inbound_digital_wallet_token_request_simulation_result';
}

export interface DigitalWalletTokenRequestCreateParams {
  /**
   * The identifier of the Card to be authorized.
   */
  card_id: string;
}

export declare namespace DigitalWalletTokenRequests {
  export {
    type DigitalWalletTokenRequestCreateResponse as DigitalWalletTokenRequestCreateResponse,
    type DigitalWalletTokenRequestCreateParams as DigitalWalletTokenRequestCreateParams,
  };
}
