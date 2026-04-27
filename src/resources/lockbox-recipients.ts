// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class LockboxRecipients extends APIResource {
  /**
   * Create a Lockbox Recipient
   *
   * @example
   * ```ts
   * const lockboxRecipient =
   *   await client.lockboxRecipients.create({
   *     account_id: 'account_in71c4amph0vgo2qllky',
   *     lockbox_address_id:
   *       'lockbox_address_lw6sbzl9ol5dfd8hdml6',
   *   });
   * ```
   */
  create(body: LockboxRecipientCreateParams, options?: RequestOptions): APIPromise<LockboxRecipient> {
    return this._client.post('/lockbox_recipients', { body, ...options });
  }

  /**
   * Retrieve a Lockbox Recipient
   *
   * @example
   * ```ts
   * const lockboxRecipient =
   *   await client.lockboxRecipients.retrieve(
   *     'lockbox_3xt21ok13q19advds4t5',
   *   );
   * ```
   */
  retrieve(lockboxRecipientID: string, options?: RequestOptions): APIPromise<LockboxRecipient> {
    return this._client.get(path`/lockbox_recipients/${lockboxRecipientID}`, options);
  }

  /**
   * Update a Lockbox Recipient
   *
   * @example
   * ```ts
   * const lockboxRecipient =
   *   await client.lockboxRecipients.update(
   *     'lockbox_3xt21ok13q19advds4t5',
   *   );
   * ```
   */
  update(lockboxRecipientID: string, body: LockboxRecipientUpdateParams, options?: RequestOptions): APIPromise<LockboxRecipient> {
    return this._client.patch(path`/lockbox_recipients/${lockboxRecipientID}`, { body, ...options });
  }

  /**
   * List Lockbox Recipients
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const lockboxRecipient of client.lockboxRecipients.list()) {
   *   // ...
   * }
   * ```
   */
  list(query: LockboxRecipientListParams | null | undefined = {}, options?: RequestOptions): PagePromise<LockboxRecipientsPage, LockboxRecipient> {
    return this._client.getAPIList('/lockbox_recipients', Page<LockboxRecipient>, { query, ...options });
  }
}

export type LockboxRecipientsPage = Page<LockboxRecipient>

/**
 * Lockbox Recipients represent an inbox at a Lockbox Address. Checks received for
 * a Lockbox Recipient are deposited into its associated Account.
 */
export interface LockboxRecipient {
  /**
   * The Lockbox Recipient identifier.
   */
  id: string;

  /**
   * The identifier for the Account that checks sent to this Lockbox Recipient will
   * be deposited into.
   */
  account_id: string;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the Lockbox
   * Recipient was created.
   */
  created_at: string;

  /**
   * The description of the Lockbox Recipient.
   */
  description: string | null;

  /**
   * The idempotency key you chose for this object. This value is unique across
   * Increase and is used to ensure that a request is only processed once. Learn more
   * about [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key: string | null;

  /**
   * The identifier for the Lockbox Address where this Lockbox Recipient may receive
   * physical mail.
   */
  lockbox_address_id: string;

  /**
   * The mail stop code uniquely identifying this Lockbox Recipient at its Lockbox
   * Address. It should be included in the mailing address intended for this Lockbox
   * Recipient.
   */
  mail_stop_code: string;

  /**
   * The name of the Lockbox Recipient.
   */
  recipient_name: string | null;

  /**
   * The status of the Lockbox Recipient.
   *
   * - `active` - This Lockbox Recipient is active.
   * - `disabled` - This Lockbox Recipient is disabled. Checks mailed to this Lockbox
   *   Recipient will be rejected.
   * - `canceled` - This Lockbox Recipient is canceled and cannot be modified. Checks
   *   mailed to this Lockbox Recipient will be rejected.
   */
  status: 'active' | 'disabled' | 'canceled' | null;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `lockbox_recipient`.
   */
  type: 'lockbox_recipient';
}

export interface LockboxRecipientCreateParams {
  /**
   * The Account that checks sent to this Lockbox Recipient should be deposited into.
   */
  account_id: string;

  /**
   * The Lockbox Address where this Lockbox Recipient may receive mail.
   */
  lockbox_address_id: string;

  /**
   * The description you choose for the Lockbox Recipient.
   */
  description?: string;

  /**
   * The name of the Lockbox Recipient
   */
  recipient_name?: string;

[k: string]: unknown
}

export interface LockboxRecipientUpdateParams {
  /**
   * The description you choose for the Lockbox Recipient.
   */
  description?: string;

  /**
   * The name of the Lockbox Recipient.
   */
  recipient_name?: string;

  /**
   * The status of the Lockbox Recipient.
   *
   * - `active` - This Lockbox Recipient is active.
   * - `disabled` - This Lockbox Recipient is disabled. Checks mailed to this Lockbox
   *   Recipient will be rejected.
   * - `canceled` - This Lockbox Recipient is canceled and cannot be modified. Checks
   *   mailed to this Lockbox Recipient will be rejected.
   */
  status?: 'active' | 'disabled' | 'canceled';
}

export interface LockboxRecipientListParams extends PageParams {
  /**
   * Filter Lockbox Recipients to those associated with the provided Account.
   */
  account_id?: string;

  created_at?: LockboxRecipientListParams.CreatedAt;

  /**
   * Filter records to the one with the specified `idempotency_key` you chose for
   * that object. This value is unique across Increase and is used to ensure that a
   * request is only processed once. Learn more about
   * [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key?: string;

  /**
   * Filter Lockbox Recipients to those associated with the provided Lockbox Address.
   */
  lockbox_address_id?: string;
}

export namespace LockboxRecipientListParams {
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

export declare namespace LockboxRecipients {
  export {
    type LockboxRecipient as LockboxRecipient,
    type LockboxRecipientsPage as LockboxRecipientsPage,
    type LockboxRecipientCreateParams as LockboxRecipientCreateParams,
    type LockboxRecipientUpdateParams as LockboxRecipientUpdateParams,
    type LockboxRecipientListParams as LockboxRecipientListParams
  };
}
