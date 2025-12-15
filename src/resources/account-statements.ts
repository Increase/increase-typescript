// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AccountStatements extends APIResource {
  /**
   * Retrieve an Account Statement
   *
   * @example
   * ```ts
   * const accountStatement =
   *   await client.accountStatements.retrieve(
   *     'account_statement_lkc03a4skm2k7f38vj15',
   *   );
   * ```
   */
  retrieve(accountStatementID: string, options?: RequestOptions): APIPromise<AccountStatement> {
    return this._client.get(path`/account_statements/${accountStatementID}`, options);
  }

  /**
   * List Account Statements
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const accountStatement of client.accountStatements.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: AccountStatementListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AccountStatementsPage, AccountStatement> {
    return this._client.getAPIList('/account_statements', Page<AccountStatement>, { query, ...options });
  }
}

export type AccountStatementsPage = Page<AccountStatement>;

/**
 * Account Statements are generated monthly for every active Account. You can
 * access the statement's data via the API or retrieve a PDF with its details via
 * its associated File.
 */
export interface AccountStatement {
  /**
   * The Account Statement identifier.
   */
  id: string;

  /**
   * The identifier for the Account this Account Statement belongs to.
   */
  account_id: string;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the Account
   * Statement was created.
   */
  created_at: string;

  /**
   * The Account's balance at the start of its statement period.
   */
  ending_balance: number;

  /**
   * The identifier of the File containing a PDF of the statement.
   */
  file_id: string;

  /**
   * The Account's balance at the start of its statement period.
   */
  starting_balance: number;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time representing the end
   * of the period the Account Statement covers.
   */
  statement_period_end: string;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time representing the
   * start of the period the Account Statement covers.
   */
  statement_period_start: string;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `account_statement`.
   */
  type: 'account_statement';

  [k: string]: unknown;
}

export interface AccountStatementListParams extends PageParams {
  /**
   * Filter Account Statements to those belonging to the specified Account.
   */
  account_id?: string;

  statement_period_start?: AccountStatementListParams.StatementPeriodStart;
}

export namespace AccountStatementListParams {
  export interface StatementPeriodStart {
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

export declare namespace AccountStatements {
  export {
    type AccountStatement as AccountStatement,
    type AccountStatementsPage as AccountStatementsPage,
    type AccountStatementListParams as AccountStatementListParams,
  };
}
