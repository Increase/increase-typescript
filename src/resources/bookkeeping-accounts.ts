// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class BookkeepingAccounts extends APIResource {
  /**
   * Create a Bookkeeping Account
   *
   * @example
   * ```ts
   * const bookkeepingAccount =
   *   await client.bookkeepingAccounts.create({
   *     name: 'New Account!',
   *   });
   * ```
   */
  create(body: BookkeepingAccountCreateParams, options?: RequestOptions): APIPromise<BookkeepingAccount> {
    return this._client.post('/bookkeeping_accounts', { body, ...options });
  }

  /**
   * Update a Bookkeeping Account
   *
   * @example
   * ```ts
   * const bookkeepingAccount =
   *   await client.bookkeepingAccounts.update(
   *     'bookkeeping_account_e37p1f1iuocw5intf35v',
   *     { name: 'Deprecated Account' },
   *   );
   * ```
   */
  update(
    bookkeepingAccountID: string,
    body: BookkeepingAccountUpdateParams,
    options?: RequestOptions,
  ): APIPromise<BookkeepingAccount> {
    return this._client.patch(path`/bookkeeping_accounts/${bookkeepingAccountID}`, { body, ...options });
  }

  /**
   * List Bookkeeping Accounts
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const bookkeepingAccount of client.bookkeepingAccounts.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: BookkeepingAccountListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<BookkeepingAccountsPage, BookkeepingAccount> {
    return this._client.getAPIList('/bookkeeping_accounts', Page<BookkeepingAccount>, { query, ...options });
  }

  /**
   * Retrieve a Bookkeeping Account Balance
   *
   * @example
   * ```ts
   * const bookkeepingBalanceLookup =
   *   await client.bookkeepingAccounts.balance(
   *     'bookkeeping_account_e37p1f1iuocw5intf35v',
   *   );
   * ```
   */
  balance(
    bookkeepingAccountID: string,
    query: BookkeepingAccountBalanceParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BookkeepingBalanceLookup> {
    return this._client.get(path`/bookkeeping_accounts/${bookkeepingAccountID}/balance`, {
      query,
      ...options,
    });
  }
}

export type BookkeepingAccountsPage = Page<BookkeepingAccount>;

/**
 * Accounts are T-accounts. They can store accounting entries. Your compliance
 * setup might require annotating money movements using this API. Learn more in our
 * [guide to Bookkeeping](https://increase.com/documentation/bookkeeping#bookkeeping).
 */
export interface BookkeepingAccount {
  /**
   * The account identifier.
   */
  id: string;

  /**
   * The API Account associated with this bookkeeping account.
   */
  account_id: string | null;

  /**
   * The compliance category of the account.
   *
   * - `commingled_cash` - A cash in an commingled Increase Account.
   * - `customer_balance` - A customer balance.
   */
  compliance_category: 'commingled_cash' | 'customer_balance' | null;

  /**
   * The Entity associated with this bookkeeping account.
   */
  entity_id: string | null;

  /**
   * The idempotency key you chose for this object. This value is unique across
   * Increase and is used to ensure that a request is only processed once. Learn more
   * about [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key: string | null;

  /**
   * The name you choose for the account.
   */
  name: string;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `bookkeeping_account`.
   */
  type: 'bookkeeping_account';
}

/**
 * Represents a request to lookup the balance of a Bookkeeping Account at a given
 * point in time.
 */
export interface BookkeepingBalanceLookup {
  /**
   * The Bookkeeping Account's current balance, representing the sum of all
   * Bookkeeping Entries on the Bookkeeping Account.
   */
  balance: number;

  /**
   * The identifier for the account for which the balance was queried.
   */
  bookkeeping_account_id: string;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `bookkeeping_balance_lookup`.
   */
  type: 'bookkeeping_balance_lookup';
}

export interface BookkeepingAccountCreateParams {
  /**
   * The name you choose for the account.
   */
  name: string;

  /**
   * The account, if `compliance_category` is `commingled_cash`.
   */
  account_id?: string;

  /**
   * The account compliance category.
   *
   * - `commingled_cash` - A cash in an commingled Increase Account.
   * - `customer_balance` - A customer balance.
   */
  compliance_category?: 'commingled_cash' | 'customer_balance';

  /**
   * The entity, if `compliance_category` is `customer_balance`.
   */
  entity_id?: string;

  [k: string]: unknown;
}

export interface BookkeepingAccountUpdateParams {
  /**
   * The name you choose for the account.
   */
  name: string;
}

export interface BookkeepingAccountListParams extends PageParams {
  /**
   * Filter records to the one with the specified `idempotency_key` you chose for
   * that object. This value is unique across Increase and is used to ensure that a
   * request is only processed once. Learn more about
   * [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key?: string;
}

export interface BookkeepingAccountBalanceParams {
  /**
   * The moment to query the balance at. If not set, returns the current balances.
   */
  at_time?: string;
}

export declare namespace BookkeepingAccounts {
  export {
    type BookkeepingAccount as BookkeepingAccount,
    type BookkeepingBalanceLookup as BookkeepingBalanceLookup,
    type BookkeepingAccountsPage as BookkeepingAccountsPage,
    type BookkeepingAccountCreateParams as BookkeepingAccountCreateParams,
    type BookkeepingAccountUpdateParams as BookkeepingAccountUpdateParams,
    type BookkeepingAccountListParams as BookkeepingAccountListParams,
    type BookkeepingAccountBalanceParams as BookkeepingAccountBalanceParams,
  };
}
