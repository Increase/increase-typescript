// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CheckDepositsAPI from '../check-deposits';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class CheckDeposits extends APIResource {
  /**
   * Simulates the creation of a
   * [Check Deposit Adjustment](#check-deposit-adjustments) on a
   * [Check Deposit](#check-deposits). This Check Deposit must first have a `status`
   * of `submitted`.
   *
   * @example
   * ```ts
   * const checkDeposit =
   *   await client.simulations.checkDeposits.adjustment(
   *     'check_deposit_f06n9gpg7sxn8t19lfc1',
   *   );
   * ```
   */
  adjustment(checkDepositID: string, body: CheckDepositAdjustmentParams, options?: RequestOptions): APIPromise<CheckDepositsAPI.CheckDeposit> {
    return this._client.post(path`/simulations/check_deposits/${checkDepositID}/adjustment`, { body, ...options });
  }

  /**
   * Simulates the rejection of a [Check Deposit](#check-deposits) by Increase due to
   * factors like poor image quality. This Check Deposit must first have a `status`
   * of `pending`.
   *
   * @example
   * ```ts
   * const checkDeposit =
   *   await client.simulations.checkDeposits.reject(
   *     'check_deposit_f06n9gpg7sxn8t19lfc1',
   *   );
   * ```
   */
  reject(checkDepositID: string, options?: RequestOptions): APIPromise<CheckDepositsAPI.CheckDeposit> {
    return this._client.post(path`/simulations/check_deposits/${checkDepositID}/reject`, options);
  }

  /**
   * Simulates the return of a [Check Deposit](#check-deposits). This Check Deposit
   * must first have a `status` of `submitted`.
   *
   * @example
   * ```ts
   * const checkDeposit =
   *   await client.simulations.checkDeposits.return(
   *     'check_deposit_f06n9gpg7sxn8t19lfc1',
   *   );
   * ```
   */
  return(checkDepositID: string, options?: RequestOptions): APIPromise<CheckDepositsAPI.CheckDeposit> {
    return this._client.post(path`/simulations/check_deposits/${checkDepositID}/return`, options);
  }

  /**
   * Simulates the submission of a [Check Deposit](#check-deposits) to the Federal
   * Reserve. This Check Deposit must first have a `status` of `pending`.
   *
   * @example
   * ```ts
   * const checkDeposit =
   *   await client.simulations.checkDeposits.submit(
   *     'check_deposit_f06n9gpg7sxn8t19lfc1',
   *   );
   * ```
   */
  submit(checkDepositID: string, body: CheckDepositSubmitParams, options?: RequestOptions): APIPromise<CheckDepositsAPI.CheckDeposit> {
    return this._client.post(path`/simulations/check_deposits/${checkDepositID}/submit`, { body, ...options });
  }
}

export interface CheckDepositAdjustmentParams {
  /**
   * The adjustment amount in the minor unit of the Check Deposit's currency (e.g.,
   * cents). A negative amount means that the funds are being clawed back by the
   * other bank and is a debit to your account. Defaults to the negative of the Check
   * Deposit amount.
   */
  amount?: number;

  /**
   * The reason for the adjustment. Defaults to `non_conforming_item`, which is often
   * used for a low quality image that the recipient wasn't able to handle.
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

export interface CheckDepositSubmitParams {
  /**
   * If set, the simulation will use these values for the check's scanned MICR data.
   */
  scan?: CheckDepositSubmitParams.Scan;
}

export namespace CheckDepositSubmitParams {
  /**
   * If set, the simulation will use these values for the check's scanned MICR data.
   */
  export interface Scan {
    /**
     * The account number to be returned in the check deposit's scan data.
     */
    account_number: string;

    /**
     * The routing number to be returned in the check deposit's scan data.
     */
    routing_number: string;

    /**
     * The auxiliary on-us data to be returned in the check deposit's scan data.
     */
    auxiliary_on_us?: string;
  }
}

export declare namespace CheckDeposits {
  export {
    type CheckDepositAdjustmentParams as CheckDepositAdjustmentParams,
    type CheckDepositSubmitParams as CheckDepositSubmitParams
  };
}
