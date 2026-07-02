// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccountStatementsAPI from '../account-statements';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class AccountStatements extends APIResource {
  /**
   * Simulates an [Account Statement](#account-statements) being created for an
   * account. In production, Account Statements are generated once per month.
   *
   * @example
   * ```ts
   * const accountStatement =
   *   await client.simulations.accountStatements.create({
   *     account_id: 'account_in71c4amph0vgo2qllky',
   *   });
   * ```
   */
  create(
    body: AccountStatementCreateParams,
    options?: RequestOptions,
  ): APIPromise<AccountStatementsAPI.AccountStatement> {
    return this._client.post('/simulations/account_statements', { body, ...options });
  }
}

export interface AccountStatementCreateParams {
  /**
   * The identifier of the Account the statement is for.
   */
  account_id: string;
}

export declare namespace AccountStatements {
  export { type AccountStatementCreateParams as AccountStatementCreateParams };
}
