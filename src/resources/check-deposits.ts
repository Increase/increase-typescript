// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class CheckDeposits extends APIResource {
  /**
   * Create a Check Deposit
   *
   * @example
   * ```ts
   * const checkDeposit = await client.checkDeposits.create({
   *   account_id: 'account_in71c4amph0vgo2qllky',
   *   amount: 1000,
   *   back_image_file_id: 'file_26khfk98mzfz90a11oqx',
   *   front_image_file_id: 'file_hkv175ovmc2tb2v2zbrm',
   * });
   * ```
   */
  create(body: CheckDepositCreateParams, options?: RequestOptions): APIPromise<CheckDeposit> {
    return this._client.post('/check_deposits', { body, ...options });
  }

  /**
   * Retrieve a Check Deposit
   *
   * @example
   * ```ts
   * const checkDeposit = await client.checkDeposits.retrieve(
   *   'check_deposit_f06n9gpg7sxn8t19lfc1',
   * );
   * ```
   */
  retrieve(checkDepositID: string, options?: RequestOptions): APIPromise<CheckDeposit> {
    return this._client.get(path`/check_deposits/${checkDepositID}`, options);
  }

  /**
   * List Check Deposits
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const checkDeposit of client.checkDeposits.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: CheckDepositListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CheckDepositsPage, CheckDeposit> {
    return this._client.getAPIList('/check_deposits', Page<CheckDeposit>, { query, ...options });
  }
}

export type CheckDepositsPage = Page<CheckDeposit>;

/**
 * Check Deposits allow you to deposit images of paper checks into your account.
 */
export interface CheckDeposit {
  /**
   * The deposit's identifier.
   */
  id: string;

  /**
   * The Account the check was deposited into.
   */
  account_id: string;

  /**
   * The deposited amount in USD cents.
   */
  amount: number;

  /**
   * The ID for the File containing the image of the back of the check.
   */
  back_image_file_id: string | null;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the transfer was created.
   */
  created_at: string;

  /**
   * Once your deposit is successfully parsed and accepted by Increase, this will
   * contain details of the parsed check.
   */
  deposit_acceptance: CheckDeposit.DepositAcceptance | null;

  /**
   * If your deposit is rejected by Increase, this will contain details as to why it
   * was rejected.
   */
  deposit_rejection: CheckDeposit.DepositRejection | null;

  /**
   * If your deposit is returned, this will contain details as to why it was
   * returned.
   */
  deposit_return: CheckDeposit.DepositReturn | null;

  /**
   * After the check is parsed, it is submitted to the Check21 network for
   * processing. This will contain details of the submission.
   */
  deposit_submission: CheckDeposit.DepositSubmission | null;

  /**
   * The description of the Check Deposit, for display purposes only.
   */
  description: string | null;

  /**
   * The ID for the File containing the image of the front of the check.
   */
  front_image_file_id: string;

  /**
   * The idempotency key you chose for this object. This value is unique across
   * Increase and is used to ensure that a request is only processed once. Learn more
   * about [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key: string | null;

  /**
   * Increase will sometimes hold the funds for Check Deposits. If funds are held,
   * this sub-object will contain details of the hold.
   */
  inbound_funds_hold: CheckDeposit.InboundFundsHold | null;

  /**
   * If the Check Deposit was the result of an Inbound Mail Item, this will contain
   * the identifier of the Inbound Mail Item.
   */
  inbound_mail_item_id: string | null;

  /**
   * If the Check Deposit was the result of an Inbound Mail Item, this will contain
   * the identifier of the Lockbox that received it.
   */
  lockbox_id: string | null;

  /**
   * The status of the Check Deposit.
   *
   * - `pending` - The Check Deposit is pending review.
   * - `submitted` - The Check Deposit has been deposited.
   * - `rejected` - The Check Deposit has been rejected.
   * - `returned` - The Check Deposit has been returned.
   */
  status: 'pending' | 'submitted' | 'rejected' | 'returned';

  /**
   * The ID for the Transaction created by the deposit.
   */
  transaction_id: string | null;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `check_deposit`.
   */
  type: 'check_deposit';

  [k: string]: unknown;
}

export namespace CheckDeposit {
  /**
   * Once your deposit is successfully parsed and accepted by Increase, this will
   * contain details of the parsed check.
   */
  export interface DepositAcceptance {
    /**
     * The account number printed on the check. This is an account at the bank that
     * issued the check.
     */
    account_number: string;

    /**
     * The amount to be deposited in the minor unit of the transaction's currency. For
     * dollars, for example, this is cents.
     */
    amount: number;

    /**
     * An additional line of metadata printed on the check. This typically includes the
     * check number for business checks.
     */
    auxiliary_on_us: string | null;

    /**
     * The ID of the Check Deposit that was accepted.
     */
    check_deposit_id: string;

    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the
     * transaction's currency.
     *
     * - `USD` - US Dollar (USD)
     */
    currency: 'USD';

    /**
     * The routing number printed on the check. This is a routing number for the bank
     * that issued the check.
     */
    routing_number: string;

    /**
     * The check serial number, if present, for consumer checks. For business checks,
     * the serial number is usually in the `auxiliary_on_us` field.
     */
    serial_number: string | null;

    [k: string]: unknown;
  }

  /**
   * If your deposit is rejected by Increase, this will contain details as to why it
   * was rejected.
   */
  export interface DepositRejection {
    /**
     * The rejected amount in the minor unit of check's currency. For dollars, for
     * example, this is cents.
     */
    amount: number;

    /**
     * The identifier of the Check Deposit that was rejected.
     */
    check_deposit_id: string;

    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the check's
     * currency.
     *
     * - `USD` - US Dollar (USD)
     */
    currency: 'USD';

    /**
     * The identifier of the associated declined transaction.
     */
    declined_transaction_id: string;

    /**
     * Why the check deposit was rejected.
     *
     * - `incomplete_image` - The check's image is incomplete.
     * - `duplicate` - This is a duplicate check submission.
     * - `poor_image_quality` - This check has poor image quality.
     * - `incorrect_amount` - The check was deposited with the incorrect amount.
     * - `incorrect_recipient` - The check is made out to someone other than the
     *   account holder.
     * - `not_eligible_for_mobile_deposit` - This check was not eligible for mobile
     *   deposit.
     * - `missing_required_data_elements` - This check is missing at least one required
     *   field.
     * - `suspected_fraud` - This check is suspected to be fraudulent.
     * - `deposit_window_expired` - This check's deposit window has expired.
     * - `requested_by_user` - The check was rejected at the user's request.
     * - `international` - The check is not a U.S. domestic check and cannot be
     *   processed.
     * - `unknown` - The check was rejected for an unknown reason.
     */
    reason:
      | 'incomplete_image'
      | 'duplicate'
      | 'poor_image_quality'
      | 'incorrect_amount'
      | 'incorrect_recipient'
      | 'not_eligible_for_mobile_deposit'
      | 'missing_required_data_elements'
      | 'suspected_fraud'
      | 'deposit_window_expired'
      | 'requested_by_user'
      | 'international'
      | 'unknown';

    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
     * the check deposit was rejected.
     */
    rejected_at: string;

    [k: string]: unknown;
  }

  /**
   * If your deposit is returned, this will contain details as to why it was
   * returned.
   */
  export interface DepositReturn {
    /**
     * The returned amount in USD cents.
     */
    amount: number;

    /**
     * The identifier of the Check Deposit that was returned.
     */
    check_deposit_id: string;

    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the
     * transaction's currency.
     *
     * - `USD` - US Dollar (USD)
     */
    currency: 'USD';

    /**
     * Why this check was returned by the bank holding the account it was drawn
     * against.
     *
     * - `ach_conversion_not_supported` - The check doesn't allow ACH conversion.
     * - `closed_account` - The account is closed. (Check21 return code `D`)
     * - `duplicate_submission` - The check has already been deposited. (Check21 return
     *   code `Y`)
     * - `insufficient_funds` - Insufficient funds (Check21 return code `A`)
     * - `no_account` - No account was found matching the check details. (Check21
     *   return code `E`)
     * - `not_authorized` - The check was not authorized. (Check21 return code `Q`)
     * - `stale_dated` - The check is too old. (Check21 return code `G`)
     * - `stop_payment` - The payment has been stopped by the account holder. (Check21
     *   return code `C`)
     * - `unknown_reason` - The reason for the return is unknown.
     * - `unmatched_details` - The image doesn't match the details submitted.
     * - `unreadable_image` - The image could not be read. (Check21 return code `U`)
     * - `endorsement_irregular` - The check endorsement was irregular. (Check21 return
     *   code `J`)
     * - `altered_or_fictitious_item` - The check present was either altered or fake.
     *   (Check21 return code `N`)
     * - `frozen_or_blocked_account` - The account this check is drawn on is frozen.
     *   (Check21 return code `F`)
     * - `post_dated` - The check is post dated. (Check21 return code `H`)
     * - `endorsement_missing` - The endorsement was missing. (Check21 return code `I`)
     * - `signature_missing` - The check signature was missing. (Check21 return code
     *   `K`)
     * - `stop_payment_suspect` - The bank suspects a stop payment will be placed.
     *   (Check21 return code `T`)
     * - `unusable_image` - The bank cannot read the image. (Check21 return code `U`)
     * - `image_fails_security_check` - The check image fails the bank's security
     *   check. (Check21 return code `V`)
     * - `cannot_determine_amount` - The bank cannot determine the amount. (Check21
     *   return code `W`)
     * - `signature_irregular` - The signature is inconsistent with prior signatures.
     *   (Check21 return code `L`)
     * - `non_cash_item` - The check is a non-cash item and cannot be drawn against the
     *   account. (Check21 return code `M`)
     * - `unable_to_process` - The bank is unable to process this check. (Check21
     *   return code `O`)
     * - `item_exceeds_dollar_limit` - The check exceeds the bank or customer's limit.
     *   (Check21 return code `P`)
     * - `branch_or_account_sold` - The bank sold this account and no longer services
     *   this customer. (Check21 return code `R`)
     */
    return_reason:
      | 'ach_conversion_not_supported'
      | 'closed_account'
      | 'duplicate_submission'
      | 'insufficient_funds'
      | 'no_account'
      | 'not_authorized'
      | 'stale_dated'
      | 'stop_payment'
      | 'unknown_reason'
      | 'unmatched_details'
      | 'unreadable_image'
      | 'endorsement_irregular'
      | 'altered_or_fictitious_item'
      | 'frozen_or_blocked_account'
      | 'post_dated'
      | 'endorsement_missing'
      | 'signature_missing'
      | 'stop_payment_suspect'
      | 'unusable_image'
      | 'image_fails_security_check'
      | 'cannot_determine_amount'
      | 'signature_irregular'
      | 'non_cash_item'
      | 'unable_to_process'
      | 'item_exceeds_dollar_limit'
      | 'branch_or_account_sold';

    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
     * the check deposit was returned.
     */
    returned_at: string;

    /**
     * The identifier of the transaction that reversed the original check deposit
     * transaction.
     */
    transaction_id: string;

    [k: string]: unknown;
  }

  /**
   * After the check is parsed, it is submitted to the Check21 network for
   * processing. This will contain details of the submission.
   */
  export interface DepositSubmission {
    /**
     * The ID for the File containing the check back image that was submitted to the
     * Check21 network.
     */
    back_file_id: string;

    /**
     * The ID for the File containing the check front image that was submitted to the
     * Check21 network.
     */
    front_file_id: string;

    /**
     * When the check deposit was submitted to the Check21 network for processing.
     * During business days, this happens within a few hours of the check being
     * accepted by Increase.
     */
    submitted_at: string;
  }

  /**
   * Increase will sometimes hold the funds for Check Deposits. If funds are held,
   * this sub-object will contain details of the hold.
   */
  export interface InboundFundsHold {
    /**
     * The held amount in the minor unit of the account's currency. For dollars, for
     * example, this is cents.
     */
    amount: number;

    /**
     * When the hold will be released automatically. Certain conditions may cause it to
     * be released before this time.
     */
    automatically_releases_at: string;

    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the hold
     * was created.
     */
    created_at: string;

    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the hold's
     * currency.
     *
     * - `USD` - US Dollar (USD)
     */
    currency: 'USD';

    /**
     * The ID of the Transaction for which funds were held.
     */
    held_transaction_id: string | null;

    /**
     * The ID of the Pending Transaction representing the held funds.
     */
    pending_transaction_id: string | null;

    /**
     * When the hold was released (if it has been released).
     */
    released_at: string | null;

    /**
     * The status of the hold.
     *
     * - `held` - Funds are still being held.
     * - `complete` - Funds have been released.
     */
    status: 'held' | 'complete';

    /**
     * A constant representing the object's type. For this resource it will always be
     * `inbound_funds_hold`.
     */
    type: 'inbound_funds_hold';

    [k: string]: unknown;
  }
}

export interface CheckDepositCreateParams {
  /**
   * The identifier for the Account to deposit the check in.
   */
  account_id: string;

  /**
   * The deposit amount in USD cents.
   */
  amount: number;

  /**
   * The File containing the check's back image.
   */
  back_image_file_id: string;

  /**
   * The File containing the check's front image.
   */
  front_image_file_id: string;

  /**
   * The description you choose to give the Check Deposit, for display purposes only.
   */
  description?: string;

  [k: string]: unknown;
}

export interface CheckDepositListParams extends PageParams {
  /**
   * Filter Check Deposits to those belonging to the specified Account.
   */
  account_id?: string;

  created_at?: CheckDepositListParams.CreatedAt;

  /**
   * Filter records to the one with the specified `idempotency_key` you chose for
   * that object. This value is unique across Increase and is used to ensure that a
   * request is only processed once. Learn more about
   * [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key?: string;
}

export namespace CheckDepositListParams {
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

export declare namespace CheckDeposits {
  export {
    type CheckDeposit as CheckDeposit,
    type CheckDepositsPage as CheckDepositsPage,
    type CheckDepositCreateParams as CheckDepositCreateParams,
    type CheckDepositListParams as CheckDepositListParams,
  };
}
