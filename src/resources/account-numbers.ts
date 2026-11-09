// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AccountNumbers extends APIResource {
  /**
   * Create an Account Number
   *
   * @example
   * ```ts
   * const accountNumber = await client.accountNumbers.create({
   *   account_id: 'account_in71c4amph0vgo2qllky',
   *   name: 'Rent payments',
   * });
   * ```
   */
  create(body: AccountNumberCreateParams, options?: RequestOptions): APIPromise<AccountNumber> {
    return this._client.post('/account_numbers', { body, ...options });
  }

  /**
   * Retrieve an Account Number
   *
   * @example
   * ```ts
   * const accountNumber = await client.accountNumbers.retrieve(
   *   'account_number_v18nkfqm6afpsrvy82b2',
   * );
   * ```
   */
  retrieve(accountNumberID: string, options?: RequestOptions): APIPromise<AccountNumber> {
    return this._client.get(path`/account_numbers/${accountNumberID}`, options);
  }

  /**
   * Update an Account Number
   *
   * @example
   * ```ts
   * const accountNumber = await client.accountNumbers.update(
   *   'account_number_v18nkfqm6afpsrvy82b2',
   * );
   * ```
   */
  update(
    accountNumberID: string,
    body: AccountNumberUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AccountNumber> {
    return this._client.patch(path`/account_numbers/${accountNumberID}`, { body, ...options });
  }

  /**
   * List Account Numbers
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const accountNumber of client.accountNumbers.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: AccountNumberListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AccountNumbersPage, AccountNumber> {
    return this._client.getAPIList('/account_numbers', Page<AccountNumber>, { query, ...options });
  }
}

export type AccountNumbersPage = Page<AccountNumber>;

/**
 * Each account can have multiple account and routing numbers. We recommend that
 * you use a set per vendor. This is similar to how you use different passwords for
 * different websites. Account numbers can also be used to seamlessly reconcile
 * inbound payments. Generating a unique account number per vendor ensures you
 * always know the originator of an incoming payment.
 */
export interface AccountNumber {
  /**
   * The Account Number identifier.
   */
  id: string;

  /**
   * The identifier for the account this Account Number belongs to.
   */
  account_id: string;

  /**
   * The account number.
   */
  account_number: string;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the Account
   * Number was created.
   */
  created_at: string;

  /**
   * The idempotency key you chose for this object. This value is unique across
   * Increase and is used to ensure that a request is only processed once. Learn more
   * about [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key: string | null;

  /**
   * Whether inbound ACH debits are allowed against this Account Number. Note that
   * they will still be declined if this is `allowed` but the Account Number is not
   * active.
   *
   * - `allowed` - ACH Debits are allowed.
   * - `blocked` - ACH Debits are blocked. Received debits will be declined and
   *   returned with code `R20` (non-transaction account).
   */
  inbound_ach_debits: 'allowed' | 'blocked';

  /**
   * The name you choose for the Account Number.
   */
  name: string;

  /**
   * The American Bankers' Association (ABA) Routing Transit Number (RTN).
   */
  routing_number: string;

  /**
   * This indicates if payments can be made to the Account Number.
   *
   * - `active` - The account number is active.
   * - `disabled` - The account number is temporarily disabled.
   * - `canceled` - The account number is permanently disabled.
   */
  status: 'active' | 'disabled' | 'canceled';

  /**
   * A constant representing the object's type. For this resource it will always be
   * `account_number`.
   */
  type: 'account_number';

  /**
   * Whether unregistered inbound checks for this Account Number can be deposited.
   *
   * - `allowed` - Accept all Inbound Check Deposits, even if they are not associated
   *   with a Check Transfer or Checkbook Check.
   * - `blocked` - Only accept Inbound Check Deposits if they can be matched to a
   *   Check Transfer or Checkbook Check.
   */
  unregistered_inbound_checks: 'allowed' | 'blocked';

  [k: string]: unknown;
}

export interface AccountNumberCreateParams {
  /**
   * The Account the Account Number should belong to.
   */
  account_id: string;

  /**
   * The name you choose for the Account Number.
   */
  name: string;

  /**
   * Whether inbound ACH debits are allowed against this Account Number. Note that
   * ACH debits will be declined if this is `allowed` but the Account Number is not
   * active. If you do not specify this field, the default is `allowed`.
   *
   * - `allowed` - ACH Debits are allowed.
   * - `blocked` - ACH Debits are blocked. Received debits will be declined and
   *   returned with code `R20` (non-transaction account).
   */
  inbound_ach_debits?: 'allowed' | 'blocked';

  /**
   * Whether unregistered inbound checks for this Account Number can be deposited. If
   * you do not specify this field, the default is `blocked`.
   *
   * - `allowed` - Accept all Inbound Check Deposits, even if they are not associated
   *   with a Check Transfer or Checkbook Check.
   * - `blocked` - Only accept Inbound Check Deposits if they can be matched to a
   *   Check Transfer or Checkbook Check.
   */
  unregistered_inbound_checks?: 'allowed' | 'blocked';

  [k: string]: unknown;
}

export interface AccountNumberUpdateParams {
  /**
   * Whether inbound ACH debits are allowed against this Account Number. Note that
   * ACH debits will be declined if this is `allowed` but the Account Number is not
   * active.
   *
   * - `allowed` - ACH Debits are allowed.
   * - `blocked` - ACH Debits are blocked. Received debits will be declined and
   *   returned with code `R20` (non-transaction account).
   */
  inbound_ach_debits?: 'allowed' | 'blocked';

  /**
   * The name you choose for the Account Number.
   */
  name?: string;

  /**
   * This indicates if transfers can be made to the Account Number.
   *
   * - `active` - The account number is active.
   * - `disabled` - The account number is temporarily disabled.
   * - `canceled` - The account number is permanently disabled.
   */
  status?: 'active' | 'disabled' | 'canceled';

  /**
   * Whether unregistered inbound checks for this Account Number can be deposited.
   *
   * - `allowed` - Accept all Inbound Check Deposits, even if they are not associated
   *   with a Check Transfer or Checkbook Check.
   * - `blocked` - Only accept Inbound Check Deposits if they can be matched to a
   *   Check Transfer or Checkbook Check.
   */
  unregistered_inbound_checks?: 'allowed' | 'blocked';

  [k: string]: unknown;
}

export interface AccountNumberListParams extends PageParams {
  /**
   * Filter Account Numbers to those belonging to the specified Account.
   */
  account_id?: string;

  created_at?: AccountNumberListParams.CreatedAt;

  /**
   * Filter records to the one with the specified `idempotency_key` you chose for
   * that object. This value is unique across Increase and is used to ensure that a
   * request is only processed once. Learn more about
   * [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key?: string;

  inbound_ach_debits?: AccountNumberListParams.InboundACHDebits;

  status?: AccountNumberListParams.Status;
}

export namespace AccountNumberListParams {
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

  export interface InboundACHDebits {
    /**
     * The inbound ACH debits status to retrieve Account Numbers for. For GET requests,
     * this should be encoded as a comma-delimited string, such as `?in=one,two,three`.
     */
    in?: Array<'allowed' | 'blocked'>;
  }

  export interface Status {
    /**
     * The status to retrieve Account Numbers for. For GET requests, this should be
     * encoded as a comma-delimited string, such as `?in=one,two,three`.
     */
    in?: Array<'active' | 'disabled' | 'canceled'>;
  }
}

export declare namespace AccountNumbers {
  export {
    type AccountNumber as AccountNumber,
    type AccountNumbersPage as AccountNumbersPage,
    type AccountNumberCreateParams as AccountNumberCreateParams,
    type AccountNumberUpdateParams as AccountNumberUpdateParams,
    type AccountNumberListParams as AccountNumberListParams,
  };
}
