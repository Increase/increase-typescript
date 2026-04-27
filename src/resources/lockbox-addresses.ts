// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class LockboxAddresses extends APIResource {
  /**
   * Create a Lockbox Address
   *
   * @example
   * ```ts
   * const lockboxAddress =
   *   await client.lockboxAddresses.create();
   * ```
   */
  create(body: LockboxAddressCreateParams, options?: RequestOptions): APIPromise<LockboxAddress> {
    return this._client.post('/lockbox_addresses', { body, ...options });
  }

  /**
   * Retrieve a Lockbox Address
   *
   * @example
   * ```ts
   * const lockboxAddress =
   *   await client.lockboxAddresses.retrieve(
   *     'lockbox_address_lw6sbzl9ol5dfd8hdml6',
   *   );
   * ```
   */
  retrieve(lockboxAddressID: string, options?: RequestOptions): APIPromise<LockboxAddress> {
    return this._client.get(path`/lockbox_addresses/${lockboxAddressID}`, options);
  }

  /**
   * Update a Lockbox Address
   *
   * @example
   * ```ts
   * const lockboxAddress = await client.lockboxAddresses.update(
   *   'lockbox_address_lw6sbzl9ol5dfd8hdml6',
   * );
   * ```
   */
  update(
    lockboxAddressID: string,
    body: LockboxAddressUpdateParams,
    options?: RequestOptions,
  ): APIPromise<LockboxAddress> {
    return this._client.patch(path`/lockbox_addresses/${lockboxAddressID}`, { body, ...options });
  }

  /**
   * List Lockbox Addresses
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const lockboxAddress of client.lockboxAddresses.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: LockboxAddressListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<LockboxAddressesPage, LockboxAddress> {
    return this._client.getAPIList('/lockbox_addresses', Page<LockboxAddress>, { query, ...options });
  }
}

export type LockboxAddressesPage = Page<LockboxAddress>;

/**
 * Lockbox Addresses are physical locations that can receive mail containing paper
 * checks.
 */
export interface LockboxAddress {
  /**
   * The Lockbox Address identifier.
   */
  id: string;

  /**
   * The mailing address for the Lockbox Address. It will be present after Increase
   * generates it.
   */
  address: LockboxAddress.Address | null;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the Lockbox
   * Address was created.
   */
  created_at: string;

  /**
   * The description you choose for the Lockbox Address.
   */
  description: string | null;

  /**
   * The idempotency key you chose for this object. This value is unique across
   * Increase and is used to ensure that a request is only processed once. Learn more
   * about [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key: string | null;

  /**
   * The status of the Lockbox Address.
   *
   * - `pending` - Increase is generating this Lockbox Address.
   * - `active` - This Lockbox Address is active.
   * - `disabled` - This Lockbox Address is disabled.
   * - `canceled` - This Lockbox Address is permanently disabled.
   */
  status: 'pending' | 'active' | 'disabled' | 'canceled';

  /**
   * A constant representing the object's type. For this resource it will always be
   * `lockbox_address`.
   */
  type: 'lockbox_address';
}

export namespace LockboxAddress {
  /**
   * The mailing address for the Lockbox Address. It will be present after Increase
   * generates it.
   */
  export interface Address {
    /**
     * The city of the address.
     */
    city: string;

    /**
     * The first line of the address.
     */
    line1: string;

    /**
     * The second line of the address.
     */
    line2: string;

    /**
     * The postal code of the address.
     */
    postal_code: string;

    /**
     * The two-letter United States Postal Service (USPS) abbreviation for the state of
     * the address.
     */
    state: string;
  }
}

export interface LockboxAddressCreateParams {
  /**
   * The description you choose for the Lockbox Address.
   */
  description?: string;

  [k: string]: unknown;
}

export interface LockboxAddressUpdateParams {
  /**
   * The description you choose for the Lockbox Address.
   */
  description?: string;

  /**
   * The status of the Lockbox Address.
   *
   * - `active` - This Lockbox Address is active.
   * - `disabled` - This Lockbox Address is disabled.
   * - `canceled` - This Lockbox Address is permanently disabled.
   */
  status?: 'active' | 'disabled' | 'canceled';
}

export interface LockboxAddressListParams extends PageParams {
  created_at?: LockboxAddressListParams.CreatedAt;

  /**
   * Filter records to the one with the specified `idempotency_key` you chose for
   * that object. This value is unique across Increase and is used to ensure that a
   * request is only processed once. Learn more about
   * [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key?: string;
}

export namespace LockboxAddressListParams {
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

export declare namespace LockboxAddresses {
  export {
    type LockboxAddress as LockboxAddress,
    type LockboxAddressesPage as LockboxAddressesPage,
    type LockboxAddressCreateParams as LockboxAddressCreateParams,
    type LockboxAddressUpdateParams as LockboxAddressUpdateParams,
    type LockboxAddressListParams as LockboxAddressListParams,
  };
}
