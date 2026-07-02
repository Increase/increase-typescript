// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class ExternalAccounts extends APIResource {
  /**
   * Create an External Account
   *
   * @example
   * ```ts
   * const externalAccount =
   *   await client.externalAccounts.create({
   *     account_number: '987654321',
   *     description: 'Landlord',
   *     routing_number: '101050001',
   *   });
   * ```
   */
  create(body: ExternalAccountCreateParams, options?: RequestOptions): APIPromise<ExternalAccount> {
    return this._client.post('/external_accounts', { body, ...options });
  }

  /**
   * Retrieve an External Account
   *
   * @example
   * ```ts
   * const externalAccount =
   *   await client.externalAccounts.retrieve(
   *     'external_account_ukk55lr923a3ac0pp7iv',
   *   );
   * ```
   */
  retrieve(externalAccountID: string, options?: RequestOptions): APIPromise<ExternalAccount> {
    return this._client.get(path`/external_accounts/${externalAccountID}`, options);
  }

  /**
   * Update an External Account
   *
   * @example
   * ```ts
   * const externalAccount =
   *   await client.externalAccounts.update(
   *     'external_account_ukk55lr923a3ac0pp7iv',
   *   );
   * ```
   */
  update(
    externalAccountID: string,
    body: ExternalAccountUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ExternalAccount> {
    return this._client.patch(path`/external_accounts/${externalAccountID}`, { body, ...options });
  }

  /**
   * List External Accounts
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const externalAccount of client.externalAccounts.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: ExternalAccountListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ExternalAccountsPage, ExternalAccount> {
    return this._client.getAPIList('/external_accounts', Page<ExternalAccount>, { query, ...options });
  }
}

export type ExternalAccountsPage = Page<ExternalAccount>;

/**
 * External Accounts represent accounts at financial institutions other than
 * Increase. You can use this API to store their details for reuse.
 */
export interface ExternalAccount {
  /**
   * The External Account's identifier.
   */
  id: string;

  /**
   * The type of entity that owns the External Account.
   *
   * - `business` - The External Account is owned by a business.
   * - `individual` - The External Account is owned by an individual.
   * - `unknown` - It's unknown what kind of entity owns the External Account.
   */
  account_holder: 'business' | 'individual' | 'unknown';

  /**
   * The destination account number.
   */
  account_number: string;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the External Account was created.
   */
  created_at: string;

  /**
   * The External Account's description for display purposes.
   */
  description: string;

  /**
   * The type of the account to which the transfer will be sent.
   *
   * - `checking` - A checking account.
   * - `savings` - A savings account.
   * - `general_ledger` - A general ledger account.
   * - `other` - A different type of account.
   */
  funding: 'checking' | 'savings' | 'general_ledger' | 'other';

  /**
   * The idempotency key you chose for this object. This value is unique across
   * Increase and is used to ensure that a request is only processed once. Learn more
   * about [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key: string | null;

  /**
   * The American Bankers' Association (ABA) Routing Transit Number (RTN).
   */
  routing_number: string;

  /**
   * The External Account's status.
   *
   * - `active` - The External Account is active.
   * - `archived` - The External Account is archived and won't appear in the
   *   dashboard.
   */
  status: 'active' | 'archived';

  /**
   * A constant representing the object's type. For this resource it will always be
   * `external_account`.
   */
  type: 'external_account';

  [k: string]: unknown;
}

export interface ExternalAccountCreateParams {
  /**
   * The account number for the destination account.
   */
  account_number: string;

  /**
   * The name you choose for the Account.
   */
  description: string;

  /**
   * The American Bankers' Association (ABA) Routing Transit Number (RTN) for the
   * destination account.
   */
  routing_number: string;

  /**
   * The type of entity that owns the External Account.
   *
   * - `business` - The External Account is owned by a business.
   * - `individual` - The External Account is owned by an individual.
   * - `unknown` - It's unknown what kind of entity owns the External Account.
   */
  account_holder?: 'business' | 'individual' | 'unknown';

  /**
   * The type of the destination account. Defaults to `checking`.
   *
   * - `checking` - A checking account.
   * - `savings` - A savings account.
   * - `general_ledger` - A general ledger account.
   * - `other` - A different type of account.
   */
  funding?: 'checking' | 'savings' | 'general_ledger' | 'other';

  [k: string]: unknown;
}

export interface ExternalAccountUpdateParams {
  /**
   * The type of entity that owns the External Account.
   *
   * - `business` - The External Account is owned by a business.
   * - `individual` - The External Account is owned by an individual.
   */
  account_holder?: 'business' | 'individual';

  /**
   * The description you choose to give the external account.
   */
  description?: string;

  /**
   * The funding type of the External Account.
   *
   * - `checking` - A checking account.
   * - `savings` - A savings account.
   * - `general_ledger` - A general ledger account.
   * - `other` - A different type of account.
   */
  funding?: 'checking' | 'savings' | 'general_ledger' | 'other';

  /**
   * The status of the External Account.
   *
   * - `active` - The External Account is active.
   * - `archived` - The External Account is archived and won't appear in the
   *   dashboard.
   */
  status?: 'active' | 'archived';
}

export interface ExternalAccountListParams extends PageParams {
  /**
   * Filter records to the one with the specified `idempotency_key` you chose for
   * that object. This value is unique across Increase and is used to ensure that a
   * request is only processed once. Learn more about
   * [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key?: string;

  /**
   * Filter External Accounts to those with the specified Routing Number.
   */
  routing_number?: string;

  status?: ExternalAccountListParams.Status;
}

export namespace ExternalAccountListParams {
  export interface Status {
    /**
     * Filter External Accounts for those with the specified status or statuses. For
     * GET requests, this should be encoded as a comma-delimited string, such as
     * `?in=one,two,three`.
     */
    in?: Array<'active' | 'archived'>;
  }
}

export declare namespace ExternalAccounts {
  export {
    type ExternalAccount as ExternalAccount,
    type ExternalAccountsPage as ExternalAccountsPage,
    type ExternalAccountCreateParams as ExternalAccountCreateParams,
    type ExternalAccountUpdateParams as ExternalAccountUpdateParams,
    type ExternalAccountListParams as ExternalAccountListParams,
  };
}
