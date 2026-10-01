// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class DigitalWalletTokenRequests extends APIResource {
  /**
   * Retrieve a Digital Wallet Token Request
   *
   * @example
   * ```ts
   * const digitalWalletTokenRequest =
   *   await client.digitalWalletTokenRequests.retrieve(
   *     'digital_wallet_token_request_dlsq0yabf7ev4xvke6ek',
   *   );
   * ```
   */
  retrieve(
    digitalWalletTokenRequestID: string,
    options?: RequestOptions,
  ): APIPromise<DigitalWalletTokenRequest> {
    return this._client.get(path`/digital_wallet_token_requests/${digitalWalletTokenRequestID}`, options);
  }

  /**
   * List Digital Wallet Token Requests
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const digitalWalletTokenRequest of client.digitalWalletTokenRequests.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: DigitalWalletTokenRequestListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<DigitalWalletTokenRequestsPage, DigitalWalletTokenRequest> {
    return this._client.getAPIList('/digital_wallet_token_requests', Page<DigitalWalletTokenRequest>, {
      query,
      ...options,
    });
  }
}

export type DigitalWalletTokenRequestsPage = Page<DigitalWalletTokenRequest>;

/**
 * A Digital Wallet Token Request is created each time a digital wallet app, such
 * as Apple Pay or Google Pay, requests to tokenize a Card.
 */
export interface DigitalWalletTokenRequest {
  /**
   * The Digital Wallet Token Request identifier.
   */
  id: string;

  /**
   * The identifier of the Card the tokenization was requested for.
   */
  card_id: string;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the Digital Wallet Token Request was created.
   */
  created_at: string;

  /**
   * Details of the decline. Present if and only if `outcome` is `declined`.
   */
  declined: DigitalWalletTokenRequest.Declined | null;

  /**
   * The device that requested the tokenization.
   */
  device: DigitalWalletTokenRequest.Device;

  /**
   * The outcome of the tokenization request.
   *
   * - `provisioned` - The tokenization request was approved and a Digital Wallet
   *   Token was provisioned.
   * - `declined` - The tokenization request was declined.
   */
  outcome: 'provisioned' | 'declined';

  /**
   * Details of the provisioned Digital Wallet Token. Present if and only if
   * `outcome` is `provisioned`.
   */
  provisioned: DigitalWalletTokenRequest.Provisioned | null;

  /**
   * The reference identifier assigned by the card network to the token.
   */
  token_reference_identifier: string;

  /**
   * The digital wallet app being used.
   *
   * - `apple_pay` - Apple Pay
   * - `google_pay` - Google Pay
   * - `samsung_pay` - Samsung Pay
   * - `garmin_pay` - Garmin Pay
   * - `unknown` - Unknown
   */
  token_requestor: 'apple_pay' | 'google_pay' | 'samsung_pay' | 'garmin_pay' | 'unknown';

  /**
   * A constant representing the object's type. For this resource it will always be
   * `digital_wallet_token_request`.
   */
  type: 'digital_wallet_token_request';
}

export namespace DigitalWalletTokenRequest {
  /**
   * Details of the decline. Present if and only if `outcome` is `declined`.
   */
  export interface Declined {
    /**
     * The reason the tokenization was declined.
     *
     * - `card_not_active` - The card is not active.
     * - `no_verification_method` - The card does not have a two-factor authentication
     *   method.
     * - `webhook_timed_out` - Your webhook timed out when evaluating the token
     *   provisioning attempt.
     * - `webhook_declined` - Your webhook declined the token provisioning attempt.
     * - `incorrect_card_verification_code` - The tokenization attempt failed because
     *   the Card Verification Code (CVC) was incorrect.
     * - `declined_by_token_requestor` - The tokenization attempt was declined by the
     *   token requestor.
     * - `group_locked` - The group was locked.
     * - `account_closed` - The account has been closed.
     * - `entity_not_active` - The account's entity was not active.
     */
    reason:
      | 'card_not_active'
      | 'no_verification_method'
      | 'webhook_timed_out'
      | 'webhook_declined'
      | 'incorrect_card_verification_code'
      | 'declined_by_token_requestor'
      | 'group_locked'
      | 'account_closed'
      | 'entity_not_active';
  }

  /**
   * The device that requested the tokenization.
   */
  export interface Device {
    /**
     * Device type.
     *
     * - `unknown` - Unknown
     * - `mobile_phone` - Mobile Phone
     * - `tablet` - Tablet
     * - `watch` - Watch
     * - `mobilephone_or_tablet` - Mobile Phone or Tablet
     * - `pc` - PC
     * - `household_device` - Household Device
     * - `wearable_device` - Wearable Device
     * - `automobile_device` - Automobile Device
     */
    device_type:
      | 'unknown'
      | 'mobile_phone'
      | 'tablet'
      | 'watch'
      | 'mobilephone_or_tablet'
      | 'pc'
      | 'household_device'
      | 'wearable_device'
      | 'automobile_device'
      | null;

    /**
     * ID assigned to the device by the digital wallet provider.
     */
    identifier: string | null;

    /**
     * IP address of the device.
     */
    ip_address: string | null;

    /**
     * Name of the device, for example "My Work Phone".
     */
    name: string | null;
  }

  /**
   * Details of the provisioned Digital Wallet Token. Present if and only if
   * `outcome` is `provisioned`.
   */
  export interface Provisioned {
    /**
     * The identifier of the Digital Wallet Token that was provisioned.
     */
    digital_wallet_token_id: string;
  }
}

export interface DigitalWalletTokenRequestListParams extends PageParams {
  /**
   * Filter Digital Wallet Token Requests to ones for the specified Card.
   */
  card_id?: string;

  created_at?: DigitalWalletTokenRequestListParams.CreatedAt;
}

export namespace DigitalWalletTokenRequestListParams {
  export interface CreatedAt {
    /**
     * Return results after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
     * timestamp.
     */
    after?: string;

    /**
     * Return results before this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
     * timestamp.
     */
    before?: string;

    /**
     * Return results on or after this
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp.
     */
    on_or_after?: string;

    /**
     * Return results on or before this
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp.
     */
    on_or_before?: string;
  }
}

export declare namespace DigitalWalletTokenRequests {
  export {
    type DigitalWalletTokenRequest as DigitalWalletTokenRequest,
    type DigitalWalletTokenRequestsPage as DigitalWalletTokenRequestsPage,
    type DigitalWalletTokenRequestListParams as DigitalWalletTokenRequestListParams,
  };
}
