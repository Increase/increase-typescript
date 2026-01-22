// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as InboundCheckDepositsAPI from '../inbound-check-deposits';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class InboundCheckDeposits extends APIResource {
  /**
   * Simulates an Inbound Check Deposit against your account. This imitates someone
   * depositing a check at their bank that was issued from your account. It may or
   * may not be associated with a Check Transfer. Increase will evaluate the Inbound
   * Check Deposit as we would in production and either create a Transaction or a
   * Declined Transaction as a result. You can inspect the resulting Inbound Check
   * Deposit object to see the result.
   *
   * @example
   * ```ts
   * const inboundCheckDeposit =
   *   await client.simulations.inboundCheckDeposits.create({
   *     account_number_id:
   *       'account_number_v18nkfqm6afpsrvy82b2',
   *     amount: 1000,
   *     check_number: '1234567890',
   *   });
   * ```
   */
  create(
    body: InboundCheckDepositCreateParams,
    options?: RequestOptions,
  ): APIPromise<InboundCheckDepositsAPI.InboundCheckDeposit> {
    return this._client.post('/simulations/inbound_check_deposits', { body, ...options });
  }
}

export interface InboundCheckDepositCreateParams {
  /**
   * The identifier of the Account Number the Inbound Check Deposit will be against.
   */
  account_number_id: string;

  /**
   * The check amount in cents.
   */
  amount: number;

  /**
   * The check number on the check to be deposited.
   */
  check_number: string;

  /**
   * Simulate the outcome of
   * [payee name checking](https://increase.com/documentation/positive-pay#payee-name-mismatches).
   * Defaults to `not_evaluated`.
   *
   * - `name_matches` - The details on the check match the recipient name of the
   *   check transfer.
   * - `does_not_match` - The details on the check do not match the recipient name of
   *   the check transfer.
   * - `not_evaluated` - The payee name analysis was not evaluated.
   */
  payee_name_analysis?: 'name_matches' | 'does_not_match' | 'not_evaluated';
}

export declare namespace InboundCheckDeposits {
  export { type InboundCheckDepositCreateParams as InboundCheckDepositCreateParams };
}
