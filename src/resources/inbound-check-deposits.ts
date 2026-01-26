// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class InboundCheckDeposits extends APIResource {
  /**
   * Retrieve an Inbound Check Deposit
   *
   * @example
   * ```ts
   * const inboundCheckDeposit =
   *   await client.inboundCheckDeposits.retrieve(
   *     'inbound_check_deposit_zoshvqybq0cjjm31mra',
   *   );
   * ```
   */
  retrieve(inboundCheckDepositID: string, options?: RequestOptions): APIPromise<InboundCheckDeposit> {
    return this._client.get(path`/inbound_check_deposits/${inboundCheckDepositID}`, options);
  }

  /**
   * List Inbound Check Deposits
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const inboundCheckDeposit of client.inboundCheckDeposits.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: InboundCheckDepositListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<InboundCheckDepositsPage, InboundCheckDeposit> {
    return this._client.getAPIList('/inbound_check_deposits', Page<InboundCheckDeposit>, {
      query,
      ...options,
    });
  }

  /**
   * Decline an Inbound Check Deposit
   *
   * @example
   * ```ts
   * const inboundCheckDeposit =
   *   await client.inboundCheckDeposits.decline(
   *     'inbound_check_deposit_zoshvqybq0cjjm31mra',
   *   );
   * ```
   */
  decline(inboundCheckDepositID: string, options?: RequestOptions): APIPromise<InboundCheckDeposit> {
    return this._client.post(path`/inbound_check_deposits/${inboundCheckDepositID}/decline`, options);
  }

  /**
   * Return an Inbound Check Deposit
   *
   * @example
   * ```ts
   * const inboundCheckDeposit =
   *   await client.inboundCheckDeposits.return(
   *     'inbound_check_deposit_zoshvqybq0cjjm31mra',
   *     { reason: 'altered_or_fictitious' },
   *   );
   * ```
   */
  return(
    inboundCheckDepositID: string,
    body: InboundCheckDepositReturnParams,
    options?: RequestOptions,
  ): APIPromise<InboundCheckDeposit> {
    return this._client.post(path`/inbound_check_deposits/${inboundCheckDepositID}/return`, {
      body,
      ...options,
    });
  }
}

export type InboundCheckDepositsPage = Page<InboundCheckDeposit>;

/**
 * Inbound Check Deposits are records of third-parties attempting to deposit checks
 * against your account.
 */
export interface InboundCheckDeposit {
  /**
   * The deposit's identifier.
   */
  id: string;

  /**
   * If the Inbound Check Deposit was accepted, the
   * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which this
   * took place.
   */
  accepted_at: string | null;

  /**
   * The Account the check is being deposited against.
   */
  account_id: string;

  /**
   * The Account Number the check is being deposited against.
   */
  account_number_id: string | null;

  /**
   * If the deposit or the return was adjusted by the sending institution, this will
   * contain details of the adjustments.
   */
  adjustments: Array<InboundCheckDeposit.Adjustment>;

  /**
   * The deposited amount in USD cents.
   */
  amount: number;

  /**
   * The ID for the File containing the image of the back of the check.
   */
  back_image_file_id: string | null;

  /**
   * The American Bankers' Association (ABA) Routing Transit Number (RTN) for the
   * bank depositing this check. In some rare cases, this is not transmitted via
   * Check21 and the value will be null.
   */
  bank_of_first_deposit_routing_number: string | null;

  /**
   * The check number printed on the check being deposited.
   */
  check_number: string | null;

  /**
   * If this deposit is for an existing Check Transfer, the identifier of that Check
   * Transfer.
   */
  check_transfer_id: string | null;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the deposit was attempted.
   */
  created_at: string;

  /**
   * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the deposit.
   *
   * - `USD` - US Dollar (USD)
   */
  currency: 'USD';

  /**
   * If the Inbound Check Deposit was declined, the
   * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which this
   * took place.
   */
  declined_at: string | null;

  /**
   * If the deposit attempt has been rejected, the identifier of the Declined
   * Transaction object created as a result of the failed deposit.
   */
  declined_transaction_id: string | null;

  /**
   * If you requested a return of this deposit, this will contain details of the
   * return.
   */
  deposit_return: InboundCheckDeposit.DepositReturn | null;

  /**
   * The ID for the File containing the image of the front of the check.
   */
  front_image_file_id: string | null;

  /**
   * Whether the details on the check match the recipient name of the check transfer.
   * This is an optional feature, contact sales to enable.
   *
   * - `name_matches` - The details on the check match the recipient name of the
   *   check transfer.
   * - `does_not_match` - The details on the check do not match the recipient name of
   *   the check transfer.
   * - `not_evaluated` - The payee name analysis was not evaluated.
   */
  payee_name_analysis: 'name_matches' | 'does_not_match' | 'not_evaluated';

  /**
   * The status of the Inbound Check Deposit.
   *
   * - `pending` - The Inbound Check Deposit is pending.
   * - `accepted` - The Inbound Check Deposit was accepted.
   * - `declined` - The Inbound Check Deposit was rejected.
   * - `returned` - The Inbound Check Deposit was returned.
   * - `requires_attention` - The Inbound Check Deposit requires attention from an
   *   Increase operator.
   */
  status: 'pending' | 'accepted' | 'declined' | 'returned' | 'requires_attention';

  /**
   * If the deposit attempt has been accepted, the identifier of the Transaction
   * object created as a result of the successful deposit.
   */
  transaction_id: string | null;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `inbound_check_deposit`.
   */
  type: 'inbound_check_deposit';
}

export namespace InboundCheckDeposit {
  export interface Adjustment {
    /**
     * The time at which the return adjustment was received.
     */
    adjusted_at: string;

    /**
     * The amount of the adjustment.
     */
    amount: number;

    /**
     * The reason for the adjustment.
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
    reason: 'late_return' | 'wrong_payee_credit' | 'adjusted_amount' | 'non_conforming_item' | 'paid';

    /**
     * The id of the transaction for the adjustment.
     */
    transaction_id: string;
  }

  /**
   * If you requested a return of this deposit, this will contain details of the
   * return.
   */
  export interface DepositReturn {
    /**
     * The reason the deposit was returned.
     *
     * - `altered_or_fictitious` - The check was altered or fictitious.
     * - `not_authorized` - The check was not authorized.
     * - `duplicate_presentment` - The check was a duplicate presentment.
     * - `endorsement_missing` - The check was not endorsed.
     * - `endorsement_irregular` - The check was not endorsed by the payee.
     * - `refer_to_maker` - The maker of the check requested its return.
     */
    reason:
      | 'altered_or_fictitious'
      | 'not_authorized'
      | 'duplicate_presentment'
      | 'endorsement_missing'
      | 'endorsement_irregular'
      | 'refer_to_maker';

    /**
     * The time at which the deposit was returned.
     */
    returned_at: string;

    /**
     * The id of the transaction for the returned deposit.
     */
    transaction_id: string;
  }
}

export interface InboundCheckDepositListParams extends PageParams {
  /**
   * Filter Inbound Check Deposits to those belonging to the specified Account.
   */
  account_id?: string;

  /**
   * Filter Inbound Check Deposits to those belonging to the specified Check
   * Transfer.
   */
  check_transfer_id?: string;

  created_at?: InboundCheckDepositListParams.CreatedAt;
}

export namespace InboundCheckDepositListParams {
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
}

export interface InboundCheckDepositReturnParams {
  /**
   * The reason to return the Inbound Check Deposit.
   *
   * - `altered_or_fictitious` - The check was altered or fictitious.
   * - `not_authorized` - The check was not authorized.
   * - `duplicate_presentment` - The check was a duplicate presentment.
   * - `endorsement_missing` - The check was not endorsed.
   * - `endorsement_irregular` - The check was not endorsed by the payee.
   * - `refer_to_maker` - The maker of the check requested its return.
   */
  reason:
    | 'altered_or_fictitious'
    | 'not_authorized'
    | 'duplicate_presentment'
    | 'endorsement_missing'
    | 'endorsement_irregular'
    | 'refer_to_maker';
}

export declare namespace InboundCheckDeposits {
  export {
    type InboundCheckDeposit as InboundCheckDeposit,
    type InboundCheckDepositsPage as InboundCheckDepositsPage,
    type InboundCheckDepositListParams as InboundCheckDepositListParams,
    type InboundCheckDepositReturnParams as InboundCheckDepositReturnParams,
  };
}
