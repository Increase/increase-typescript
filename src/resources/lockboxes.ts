// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Lockboxes extends APIResource {
  /**
   * Create a Lockbox
   *
   * @example
   * ```ts
   * const lockbox = await client.lockboxes.create({
   *   account_id: 'account_in71c4amph0vgo2qllky',
   * });
   * ```
   */
  create(body: LockboxCreateParams, options?: RequestOptions): APIPromise<Lockbox> {
    return this._client.post('/lockboxes', { body, ...options });
  }

  /**
   * Retrieve a Lockbox
   *
   * @example
   * ```ts
   * const lockbox = await client.lockboxes.retrieve(
   *   'lockbox_3xt21ok13q19advds4t5',
   * );
   * ```
   */
  retrieve(lockboxID: string, options?: RequestOptions): APIPromise<Lockbox> {
    return this._client.get(path`/lockboxes/${lockboxID}`, options);
  }

  /**
   * Update a Lockbox
   *
   * @example
   * ```ts
   * const lockbox = await client.lockboxes.update(
   *   'lockbox_3xt21ok13q19advds4t5',
   * );
   * ```
   */
  update(lockboxID: string, body: LockboxUpdateParams, options?: RequestOptions): APIPromise<Lockbox> {
    return this._client.patch(path`/lockboxes/${lockboxID}`, { body, ...options });
  }

  /**
   * List Lockboxes
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const lockbox of client.lockboxes.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: LockboxListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<LockboxesPage, Lockbox> {
    return this._client.getAPIList('/lockboxes', Page<Lockbox>, { query, ...options });
  }
}

export type LockboxesPage = Page<Lockbox>;

/**
 * Lockboxes are physical locations that can receive mail containing paper checks.
 * Increase will automatically create a Check Deposit for checks received this way.
 */
export interface Lockbox {
  /**
   * The Lockbox identifier.
   */
  id: string;

  /**
   * The identifier for the Account checks sent to this lockbox will be deposited
   * into.
   */
  account_id: string;

  /**
   * The mailing address for the Lockbox.
   */
  address: Lockbox.Address;

  /**
   * Indicates if checks mailed to this lockbox will be deposited.
   *
   * - `enabled` - Checks mailed to this Lockbox will be deposited.
   * - `disabled` - Checks mailed to this Lockbox will not be deposited.
   * - `pend_for_processing` - Checks mailed to this Lockbox will be pending until
   *   actioned.
   */
  check_deposit_behavior: 'enabled' | 'disabled' | 'pend_for_processing';

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the Lockbox
   * was created.
   */
  created_at: string;

  /**
   * The description you choose for the Lockbox.
   */
  description: string | null;

  /**
   * The idempotency key you chose for this object. This value is unique across
   * Increase and is used to ensure that a request is only processed once. Learn more
   * about [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key: string | null;

  /**
   * The recipient name you choose for the Lockbox.
   */
  recipient_name: string | null;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `lockbox`.
   */
  type: 'lockbox';

  [k: string]: unknown;
}

export namespace Lockbox {
  /**
   * The mailing address for the Lockbox.
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
     * The recipient line of the address. This will include the recipient name you
     * provide when creating the address, as well as an ATTN suffix to help route the
     * mail to your lockbox. Mail senders must include this ATTN line to receive mail
     * at this Lockbox.
     */
    recipient: string | null;

    /**
     * The two-letter United States Postal Service (USPS) abbreviation for the state of
     * the address.
     */
    state: string;
  }
}

export interface LockboxCreateParams {
  /**
   * The Account checks sent to this Lockbox should be deposited into.
   */
  account_id: string;

  /**
   * The description you choose for the Lockbox, for display purposes.
   */
  description?: string;

  /**
   * The name of the recipient that will receive mail at this location.
   */
  recipient_name?: string;

  [k: string]: unknown;
}

export interface LockboxUpdateParams {
  /**
   * This indicates if checks mailed to this lockbox will be deposited.
   *
   * - `enabled` - Checks mailed to this Lockbox will be deposited.
   * - `disabled` - Checks mailed to this Lockbox will not be deposited.
   * - `pend_for_processing` - Checks mailed to this Lockbox will be pending until
   *   actioned.
   */
  check_deposit_behavior?: 'enabled' | 'disabled' | 'pend_for_processing';

  /**
   * The description you choose for the Lockbox.
   */
  description?: string;

  /**
   * The recipient name you choose for the Lockbox.
   */
  recipient_name?: string;

  [k: string]: unknown;
}

export interface LockboxListParams extends PageParams {
  /**
   * Filter Lockboxes to those associated with the provided Account.
   */
  account_id?: string;

  created_at?: LockboxListParams.CreatedAt;

  /**
   * Filter records to the one with the specified `idempotency_key` you chose for
   * that object. This value is unique across Increase and is used to ensure that a
   * request is only processed once. Learn more about
   * [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key?: string;
}

export namespace LockboxListParams {
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

export declare namespace Lockboxes {
  export {
    type Lockbox as Lockbox,
    type LockboxesPage as LockboxesPage,
    type LockboxCreateParams as LockboxCreateParams,
    type LockboxUpdateParams as LockboxUpdateParams,
    type LockboxListParams as LockboxListParams,
  };
}
