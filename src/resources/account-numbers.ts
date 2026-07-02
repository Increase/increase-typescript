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
   * Properties related to how this Account Number handles inbound ACH transfers.
   */
  inbound_ach: AccountNumber.InboundACH;

  /**
   * Properties related to how this Account Number should handle inbound check
   * withdrawals.
   */
  inbound_checks: AccountNumber.InboundChecks;

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

  [k: string]: unknown;
}

export namespace AccountNumber {
  /**
   * Properties related to how this Account Number handles inbound ACH transfers.
   */
  export interface InboundACH {
    /**
     * Whether ACH debits are allowed against this Account Number. Note that they will
     * still be declined if this is `allowed` if the Account Number is not active.
     *
     * - `allowed` - ACH Debits are allowed.
     * - `blocked` - ACH Debits are blocked.
     */
    debit_status: 'allowed' | 'blocked';
  }

  /**
   * Properties related to how this Account Number should handle inbound check
   * withdrawals.
   */
  export interface InboundChecks {
    /**
     * How Increase should process checks with this account number printed on them.
     *
     * - `allowed` - Checks with this Account Number will be processed even if they are
     *   not associated with a Check Transfer.
     * - `check_transfers_only` - Checks with this Account Number will be processed
     *   only if they can be matched to an existing Check Transfer.
     */
    status: 'allowed' | 'check_transfers_only';
  }
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
   * Options related to how this Account Number should handle inbound ACH transfers.
   */
  inbound_ach?: AccountNumberCreateParams.InboundACH;

  /**
   * Options related to how this Account Number should handle inbound check
   * withdrawals.
   */
  inbound_checks?: AccountNumberCreateParams.InboundChecks;

  [k: string]: unknown;
}

export namespace AccountNumberCreateParams {
  /**
   * Options related to how this Account Number should handle inbound ACH transfers.
   */
  export interface InboundACH {
    /**
     * Whether ACH debits are allowed against this Account Number. Note that ACH debits
     * will be declined if this is `allowed` but the Account Number is not active. If
     * you do not specify this field, the default is `allowed`.
     *
     * - `allowed` - ACH Debits are allowed.
     * - `blocked` - ACH Debits are blocked.
     */
    debit_status: 'allowed' | 'blocked';
  }

  /**
   * Options related to how this Account Number should handle inbound check
   * withdrawals.
   */
  export interface InboundChecks {
    /**
     * How Increase should process checks with this account number printed on them. If
     * you do not specify this field, the default is `check_transfers_only`.
     *
     * - `allowed` - Checks with this Account Number will be processed even if they are
     *   not associated with a Check Transfer.
     * - `check_transfers_only` - Checks with this Account Number will be processed
     *   only if they can be matched to an existing Check Transfer.
     */
    status: 'allowed' | 'check_transfers_only';
  }
}

export interface AccountNumberUpdateParams {
  /**
   * Options related to how this Account Number handles inbound ACH transfers.
   */
  inbound_ach?: AccountNumberUpdateParams.InboundACH;

  /**
   * Options related to how this Account Number should handle inbound check
   * withdrawals.
   */
  inbound_checks?: AccountNumberUpdateParams.InboundChecks;

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
}

export namespace AccountNumberUpdateParams {
  /**
   * Options related to how this Account Number handles inbound ACH transfers.
   */
  export interface InboundACH {
    /**
     * Whether ACH debits are allowed against this Account Number. Note that ACH debits
     * will be declined if this is `allowed` but the Account Number is not active.
     *
     * - `allowed` - ACH Debits are allowed.
     * - `blocked` - ACH Debits are blocked.
     */
    debit_status?: 'allowed' | 'blocked';
  }

  /**
   * Options related to how this Account Number should handle inbound check
   * withdrawals.
   */
  export interface InboundChecks {
    /**
     * How Increase should process checks with this account number printed on them.
     *
     * - `allowed` - Checks with this Account Number will be processed even if they are
     *   not associated with a Check Transfer.
     * - `check_transfers_only` - Checks with this Account Number will be processed
     *   only if they can be matched to an existing Check Transfer.
     */
    status: 'allowed' | 'check_transfers_only';
  }
}

export interface AccountNumberListParams extends PageParams {
  /**
   * Filter Account Numbers to those belonging to the specified Account.
   */
  account_id?: string;

  ach_debit_status?: AccountNumberListParams.ACHDebitStatus;

  created_at?: AccountNumberListParams.CreatedAt;

  /**
   * Filter records to the one with the specified `idempotency_key` you chose for
   * that object. This value is unique across Increase and is used to ensure that a
   * request is only processed once. Learn more about
   * [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key?: string;

  status?: AccountNumberListParams.Status;
}

export namespace AccountNumberListParams {
  export interface ACHDebitStatus {
    /**
     * The ACH Debit status to retrieve Account Numbers for. For GET requests, this
     * should be encoded as a comma-delimited string, such as `?in=one,two,three`.
     */
    in?: Array<'allowed' | 'blocked'>;
  }

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
