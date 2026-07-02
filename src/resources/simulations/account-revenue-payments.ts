// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TransactionsAPI from '../transactions';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class AccountRevenuePayments extends APIResource {
  /**
   * Simulates an account revenue payment to your account. In production, this
   * happens automatically on the first of each month.
   *
   * @example
   * ```ts
   * const transaction =
   *   await client.simulations.accountRevenuePayments.create({
   *     account_id: 'account_in71c4amph0vgo2qllky',
   *     amount: 1000,
   *   });
   * ```
   */
  create(
    body: AccountRevenuePaymentCreateParams,
    options?: RequestOptions,
  ): APIPromise<TransactionsAPI.Transaction> {
    return this._client.post('/simulations/account_revenue_payments', { body, ...options });
  }
}

export interface AccountRevenuePaymentCreateParams {
  /**
   * The identifier of the Account the Account Revenue Payment should be paid to.
   */
  account_id: string;

  /**
   * The account revenue amount in cents. Must be positive.
   */
  amount: number;

  /**
   * The identifier of the Account the account revenue accrued on. Defaults to
   * `account_id`.
   */
  accrued_on_account_id?: string;

  /**
   * The end of the account revenue period. If not provided, defaults to the current
   * time.
   */
  period_end?: string;

  /**
   * The start of the account revenue period. If not provided, defaults to the
   * current time.
   */
  period_start?: string;
}

export declare namespace AccountRevenuePayments {
  export { type AccountRevenuePaymentCreateParams as AccountRevenuePaymentCreateParams };
}
