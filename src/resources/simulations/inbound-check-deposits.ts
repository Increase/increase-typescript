// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as InboundCheckDepositsAPI from '../inbound-check-deposits';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

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
  create(body: InboundCheckDepositCreateParams, options?: RequestOptions): APIPromise<InboundCheckDepositsAPI.InboundCheckDeposit> {
    return this._client.post('/simulations/inbound_check_deposits', { body, ...options });
  }

  /**
   * Simulates an adjustment on an Inbound Check Deposit. The Inbound Check Deposit
   * must have a `status` of `accepted`.
   *
   * @example
   * ```ts
   * const inboundCheckDeposit =
   *   await client.simulations.inboundCheckDeposits.adjustment(
   *     'inbound_check_deposit_zoshvqybq0cjjm31mra',
   *   );
   * ```
   */
  adjustment(inboundCheckDepositID: string, body: InboundCheckDepositAdjustmentParams, options?: RequestOptions): APIPromise<InboundCheckDepositsAPI.InboundCheckDeposit> {
    return this._client.post(path`/simulations/inbound_check_deposits/${inboundCheckDepositID}/adjustment`, { body, ...options });
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

export interface InboundCheckDepositAdjustmentParams {
  /**
   * The adjustment amount in cents. Defaults to the amount of the Inbound Check
   * Deposit.
   */
  amount?: number;

  /**
   * The reason for the adjustment. Defaults to `wrong_payee_credit`.
   *
   * - `late_return` - The return was initiated too late and the receiving
   *   institution has responded with a Late Return Claim.
   * - `wrong_payee_credit` - The check was deposited to the wrong payee and the
   *   depositing institution has reimbursed the funds with a Wrong Payee Credit.
   * - `adjusted_amount` - The check was deposited with a different amount than what
   *   was written on the check.
   * - `non_conforming_item` - The recipient was not able to process the check. This
   *   usually happens for e.g., low quality images.
   * - `paid` - The check has already been deposited elsewhere and so this is a
   *   duplicate.
   */
  reason?: 'late_return' | 'wrong_payee_credit' | 'adjusted_amount' | 'non_conforming_item' | 'paid';
}

export declare namespace InboundCheckDeposits {
  export {
    type InboundCheckDepositCreateParams as InboundCheckDepositCreateParams,
    type InboundCheckDepositAdjustmentParams as InboundCheckDepositAdjustmentParams
  };
}
