// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Accounts extends APIResource {
  /**
   * Create an Account
   *
   * @example
   * ```ts
   * const account = await client.accounts.create({
   *   name: 'New Account!',
   * });
   * ```
   */
  create(body: AccountCreateParams, options?: RequestOptions): APIPromise<Account> {
    return this._client.post('/accounts', { body, ...options });
  }

  /**
   * Retrieve an Account
   *
   * @example
   * ```ts
   * const account = await client.accounts.retrieve(
   *   'account_in71c4amph0vgo2qllky',
   * );
   * ```
   */
  retrieve(accountID: string, options?: RequestOptions): APIPromise<Account> {
    return this._client.get(path`/accounts/${accountID}`, options);
  }

  /**
   * Update an Account
   *
   * @example
   * ```ts
   * const account = await client.accounts.update(
   *   'account_in71c4amph0vgo2qllky',
   * );
   * ```
   */
  update(accountID: string, body: AccountUpdateParams, options?: RequestOptions): APIPromise<Account> {
    return this._client.patch(path`/accounts/${accountID}`, { body, ...options });
  }

  /**
   * List Accounts
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const account of client.accounts.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: AccountListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AccountsPage, Account> {
    return this._client.getAPIList('/accounts', Page<Account>, { query, ...options });
  }

  /**
   * Retrieve the current and available balances for an account in minor units of the
   * account's currency. Learn more about [account balances](/documentation/balance).
   *
   * @example
   * ```ts
   * const balanceLookup = await client.accounts.balance(
   *   'account_in71c4amph0vgo2qllky',
   * );
   * ```
   */
  balance(
    accountID: string,
    query: AccountBalanceParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BalanceLookup> {
    return this._client.get(path`/accounts/${accountID}/balance`, { query, ...options });
  }

  /**
   * Close an Account
   *
   * @example
   * ```ts
   * const account = await client.accounts.close(
   *   'account_in71c4amph0vgo2qllky',
   * );
   * ```
   */
  close(accountID: string, options?: RequestOptions): APIPromise<Account> {
    return this._client.post(path`/accounts/${accountID}/close`, options);
  }
}

export type AccountsPage = Page<Account>;

/**
 * Accounts are your bank accounts with Increase. They store money, receive
 * transfers, and send payments. They earn interest and have depository insurance.
 */
export interface Account {
  /**
   * The Account identifier.
   */
  id: string;

  /**
   * The account revenue rate currently being earned on the account, as a string
   * containing a decimal number. For example, a 1% account revenue rate would be
   * represented as "0.01". Account revenue is a type of non-interest income accrued
   * on the account.
   */
  account_revenue_rate: string | null;

  /**
   * The bank the Account is with.
   *
   * - `core_bank` - Core Bank
   * - `first_internet_bank` - First Internet Bank of Indiana
   * - `grasshopper_bank` - Grasshopper Bank
   */
  bank: 'core_bank' | 'first_internet_bank' | 'grasshopper_bank';

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the Account
   * was closed.
   */
  closed_at: string | null;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the Account
   * was created.
   */
  created_at: string;

  /**
   * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the Account
   * currency.
   *
   * - `USD` - US Dollar (USD)
   */
  currency: 'USD';

  /**
   * The identifier for the Entity the Account belongs to.
   */
  entity_id: string;

  /**
   * The idempotency key you chose for this object. This value is unique across
   * Increase and is used to ensure that a request is only processed once. Learn more
   * about [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key: string | null;

  /**
   * The identifier of an Entity that, while not owning the Account, is associated
   * with its activity.
   */
  informational_entity_id: string | null;

  /**
   * The interest accrued but not yet paid, expressed as a string containing a
   * floating-point value.
   */
  interest_accrued: string;

  /**
   * The latest [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date on which
   * interest was accrued.
   */
  interest_accrued_at: string | null;

  /**
   * The interest rate currently being earned on the account, as a string containing
   * a decimal number. For example, a 1% interest rate would be represented as
   * "0.01".
   */
  interest_rate: string;

  /**
   * The name you choose for the Account.
   */
  name: string;

  /**
   * The identifier of the Program determining the compliance and commercial terms of
   * this Account.
   */
  program_id: string;

  /**
   * The status of the Account.
   *
   * - `closed` - Closed Accounts on which no new activity can occur.
   * - `open` - Open Accounts that are ready to use.
   */
  status: 'closed' | 'open';

  /**
   * A constant representing the object's type. For this resource it will always be
   * `account`.
   */
  type: 'account';

  [k: string]: unknown;
}

/**
 * Represents a request to lookup the balance of an Account at a given point in
 * time.
 */
export interface BalanceLookup {
  /**
   * The identifier for the account for which the balance was queried.
   */
  account_id: string;

  /**
   * The Account's available balance, representing the current balance less any open
   * Pending Transactions on the Account.
   */
  available_balance: number;

  /**
   * The Account's current balance, representing the sum of all posted Transactions
   * on the Account.
   */
  current_balance: number;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `balance_lookup`.
   */
  type: 'balance_lookup';

  [k: string]: unknown;
}

export interface AccountCreateParams {
  /**
   * The name you choose for the Account.
   */
  name: string;

  /**
   * The identifier for the Entity that will own the Account.
   */
  entity_id?: string;

  /**
   * The identifier of an Entity that, while not owning the Account, is associated
   * with its activity. This is generally the beneficiary of the funds.
   */
  informational_entity_id?: string;

  /**
   * The identifier for the Program that this Account falls under. Required if you
   * operate more than one Program.
   */
  program_id?: string;

  [k: string]: unknown;
}

export interface AccountUpdateParams {
  /**
   * The new credit limit of the Account, if and only if the Account is a loan
   * account.
   */
  credit_limit?: number;

  /**
   * The new name of the Account.
   */
  name?: string;

  [k: string]: unknown;
}

export interface AccountListParams extends PageParams {
  created_at?: AccountListParams.CreatedAt;

  /**
   * Filter Accounts for those belonging to the specified Entity.
   */
  entity_id?: string;

  /**
   * Filter records to the one with the specified `idempotency_key` you chose for
   * that object. This value is unique across Increase and is used to ensure that a
   * request is only processed once. Learn more about
   * [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key?: string;

  /**
   * Filter Accounts for those belonging to the specified Entity as informational.
   */
  informational_entity_id?: string;

  /**
   * Filter Accounts for those in a specific Program.
   */
  program_id?: string;

  status?: AccountListParams.Status;
}

export namespace AccountListParams {
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
     * Filter Accounts for those with the specified status. For GET requests, this
     * should be encoded as a comma-delimited string, such as `?in=one,two,three`.
     */
    in?: Array<'closed' | 'open'>;
  }
}

export interface AccountBalanceParams {
  /**
   * The moment to query the balance at. If not set, returns the current balances.
   */
  at_time?: string;
}

export declare namespace Accounts {
  export {
    type Account as Account,
    type BalanceLookup as BalanceLookup,
    type AccountsPage as AccountsPage,
    type AccountCreateParams as AccountCreateParams,
    type AccountUpdateParams as AccountUpdateParams,
    type AccountListParams as AccountListParams,
    type AccountBalanceParams as AccountBalanceParams,
  };
}
