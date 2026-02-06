// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class ACHTransfers extends APIResource {
  /**
   * Create an ACH Transfer
   *
   * @example
   * ```ts
   * const achTransfer = await client.achTransfers.create({
   *   account_id: 'account_in71c4amph0vgo2qllky',
   *   amount: 100,
   *   statement_descriptor: 'New ACH transfer',
   * });
   * ```
   */
  create(body: ACHTransferCreateParams, options?: RequestOptions): APIPromise<ACHTransfer> {
    return this._client.post('/ach_transfers', { body, ...options });
  }

  /**
   * Retrieve an ACH Transfer
   *
   * @example
   * ```ts
   * const achTransfer = await client.achTransfers.retrieve(
   *   'ach_transfer_uoxatyh3lt5evrsdvo7q',
   * );
   * ```
   */
  retrieve(achTransferID: string, options?: RequestOptions): APIPromise<ACHTransfer> {
    return this._client.get(path`/ach_transfers/${achTransferID}`, options);
  }

  /**
   * List ACH Transfers
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const achTransfer of client.achTransfers.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: ACHTransferListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ACHTransfersPage, ACHTransfer> {
    return this._client.getAPIList('/ach_transfers', Page<ACHTransfer>, { query, ...options });
  }

  /**
   * Approves an ACH Transfer in a pending_approval state.
   *
   * @example
   * ```ts
   * const achTransfer = await client.achTransfers.approve(
   *   'ach_transfer_uoxatyh3lt5evrsdvo7q',
   * );
   * ```
   */
  approve(achTransferID: string, options?: RequestOptions): APIPromise<ACHTransfer> {
    return this._client.post(path`/ach_transfers/${achTransferID}/approve`, options);
  }

  /**
   * Cancels an ACH Transfer in a pending_approval state.
   *
   * @example
   * ```ts
   * const achTransfer = await client.achTransfers.cancel(
   *   'ach_transfer_uoxatyh3lt5evrsdvo7q',
   * );
   * ```
   */
  cancel(achTransferID: string, options?: RequestOptions): APIPromise<ACHTransfer> {
    return this._client.post(path`/ach_transfers/${achTransferID}/cancel`, options);
  }
}

export type ACHTransfersPage = Page<ACHTransfer>;

/**
 * ACH transfers move funds between your Increase account and any other account
 * accessible by the Automated Clearing House (ACH).
 */
export interface ACHTransfer {
  /**
   * The ACH transfer's identifier.
   */
  id: string;

  /**
   * The Account to which the transfer belongs.
   */
  account_id: string;

  /**
   * The destination account number.
   */
  account_number: string;

  /**
   * After the transfer is acknowledged by FedACH, this will contain supplemental
   * details. The Federal Reserve sends an acknowledgement message for each file that
   * Increase submits.
   */
  acknowledgement: ACHTransfer.Acknowledgement | null;

  /**
   * Additional information that will be sent to the recipient.
   */
  addenda: ACHTransfer.Addenda | null;

  /**
   * The transfer amount in USD cents. A positive amount indicates a credit transfer
   * pushing funds to the receiving account. A negative amount indicates a debit
   * transfer pulling funds from the receiving account.
   */
  amount: number;

  /**
   * If your account requires approvals for transfers and the transfer was approved,
   * this will contain details of the approval.
   */
  approval: ACHTransfer.Approval | null;

  /**
   * If your account requires approvals for transfers and the transfer was not
   * approved, this will contain details of the cancellation.
   */
  cancellation: ACHTransfer.Cancellation | null;

  /**
   * The description of the date of the transfer.
   */
  company_descriptive_date: string | null;

  /**
   * The data you chose to associate with the transfer.
   */
  company_discretionary_data: string | null;

  /**
   * The description of the transfer you set to be shown to the recipient.
   */
  company_entry_description: string | null;

  /**
   * The company ID associated with the transfer.
   */
  company_id: string;

  /**
   * The name by which the recipient knows you.
   */
  company_name: string | null;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the transfer was created.
   */
  created_at: string;

  /**
   * What object created the transfer, either via the API or the dashboard.
   */
  created_by: ACHTransfer.CreatedBy | null;

  /**
   * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transfer's
   * currency. For ACH transfers this is always equal to `usd`.
   *
   * - `USD` - US Dollar (USD)
   */
  currency: 'USD';

  /**
   * The type of entity that owns the account to which the ACH Transfer is being
   * sent.
   *
   * - `business` - The External Account is owned by a business.
   * - `individual` - The External Account is owned by an individual.
   * - `unknown` - It's unknown what kind of entity owns the External Account.
   */
  destination_account_holder: 'business' | 'individual' | 'unknown';

  /**
   * The identifier of the External Account the transfer was made to, if any.
   */
  external_account_id: string | null;

  /**
   * The type of the account to which the transfer will be sent.
   *
   * - `checking` - A checking account.
   * - `savings` - A savings account.
   * - `general_ledger` - A bank's general ledger. Uncommon.
   */
  funding: 'checking' | 'savings' | 'general_ledger';

  /**
   * The idempotency key you chose for this object. This value is unique across
   * Increase and is used to ensure that a request is only processed once. Learn more
   * about [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key: string | null;

  /**
   * Increase will sometimes hold the funds for ACH debit transfers. If funds are
   * held, this sub-object will contain details of the hold.
   */
  inbound_funds_hold: ACHTransfer.InboundFundsHold | null;

  /**
   * Your identifier for the transfer recipient.
   */
  individual_id: string | null;

  /**
   * The name of the transfer recipient. This value is information and not verified
   * by the recipient's bank.
   */
  individual_name: string | null;

  /**
   * The transfer's network.
   */
  network: 'ach';

  /**
   * If the receiving bank accepts the transfer but notifies that future transfers
   * should use different details, this will contain those details.
   */
  notifications_of_change: Array<ACHTransfer.NotificationsOfChange>;

  /**
   * The ID for the pending transaction representing the transfer. A pending
   * transaction is created when the transfer
   * [requires approval](https://increase.com/documentation/transfer-approvals#transfer-approvals)
   * by someone else in your organization.
   */
  pending_transaction_id: string | null;

  /**
   * Configuration for how the effective date of the transfer will be set. This
   * determines same-day vs future-dated settlement timing. If not set, defaults to a
   * `settlement_schedule` of `same_day`. If set, exactly one of the child attributes
   * must be set.
   */
  preferred_effective_date: ACHTransfer.PreferredEffectiveDate;

  /**
   * If your transfer is returned, this will contain details of the return.
   */
  return: ACHTransfer.Return | null;

  /**
   * The American Bankers' Association (ABA) Routing Transit Number (RTN).
   */
  routing_number: string;

  /**
   * A subhash containing information about when and how the transfer settled at the
   * Federal Reserve.
   */
  settlement: ACHTransfer.Settlement | null;

  /**
   * The
   * [Standard Entry Class (SEC) code](/documentation/ach-standard-entry-class-codes)
   * to use for the transfer.
   *
   * - `corporate_credit_or_debit` - Corporate Credit and Debit (CCD) is used for
   *   business-to-business payments.
   * - `corporate_trade_exchange` - Corporate Trade Exchange (CTX) allows for
   *   including extensive remittance information with business-to-business payments.
   * - `prearranged_payments_and_deposit` - Prearranged Payments and Deposits (PPD)
   *   is used for credits or debits originated by an organization to a consumer,
   *   such as payroll direct deposits.
   * - `internet_initiated` - Internet Initiated (WEB) is used for consumer payments
   *   initiated or authorized via the Internet. Debits can only be initiated by
   *   non-consumers to debit a consumer’s account. Credits can only be used for
   *   consumer to consumer transactions.
   */
  standard_entry_class_code:
    | 'corporate_credit_or_debit'
    | 'corporate_trade_exchange'
    | 'prearranged_payments_and_deposit'
    | 'internet_initiated';

  /**
   * The descriptor that will show on the recipient's bank statement.
   */
  statement_descriptor: string;

  /**
   * The lifecycle status of the transfer.
   *
   * - `pending_approval` - The transfer is pending approval.
   * - `pending_transfer_session_confirmation` - The transfer belongs to a Transfer
   *   Session that is pending confirmation.
   * - `canceled` - The transfer has been canceled.
   * - `pending_submission` - The transfer is pending submission to the Federal
   *   Reserve.
   * - `pending_reviewing` - The transfer is pending review by Increase.
   * - `requires_attention` - The transfer requires attention from an Increase
   *   operator.
   * - `rejected` - The transfer has been rejected.
   * - `submitted` - The transfer is complete.
   * - `returned` - The transfer has been returned.
   */
  status:
    | 'pending_approval'
    | 'pending_transfer_session_confirmation'
    | 'canceled'
    | 'pending_submission'
    | 'pending_reviewing'
    | 'requires_attention'
    | 'rejected'
    | 'submitted'
    | 'returned';

  /**
   * After the transfer is submitted to FedACH, this will contain supplemental
   * details. Increase batches transfers and submits a file to the Federal Reserve
   * roughly every 30 minutes. The Federal Reserve processes ACH transfers during
   * weekdays according to their
   * [posted schedule](https://www.frbservices.org/resources/resource-centers/same-day-ach/fedach-processing-schedule.html).
   */
  submission: ACHTransfer.Submission | null;

  /**
   * The ID for the transaction funding the transfer.
   */
  transaction_id: string | null;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `ach_transfer`.
   */
  type: 'ach_transfer';

  [k: string]: unknown;
}

export namespace ACHTransfer {
  /**
   * After the transfer is acknowledged by FedACH, this will contain supplemental
   * details. The Federal Reserve sends an acknowledgement message for each file that
   * Increase submits.
   */
  export interface Acknowledgement {
    /**
     * When the Federal Reserve acknowledged the submitted file containing this
     * transfer.
     */
    acknowledged_at: string;
  }

  /**
   * Additional information that will be sent to the recipient.
   */
  export interface Addenda {
    /**
     * The type of the resource. We may add additional possible values for this enum
     * over time; your application should be able to handle such additions gracefully.
     *
     * - `freeform` - Unstructured `payment_related_information` passed through with
     *   the transfer.
     * - `payment_order_remittance_advice` - Structured ASC X12 820 remittance advice
     *   records. Please reach out to
     *   [support@increase.com](mailto:support@increase.com) for more information.
     * - `other` - Unknown addenda type.
     */
    category: 'freeform' | 'payment_order_remittance_advice' | 'other';

    /**
     * Unstructured `payment_related_information` passed through with the transfer.
     */
    freeform: Addenda.Freeform | null;

    /**
     * Structured ASC X12 820 remittance advice records. Please reach out to
     * [support@increase.com](mailto:support@increase.com) for more information.
     */
    payment_order_remittance_advice: Addenda.PaymentOrderRemittanceAdvice | null;
  }

  export namespace Addenda {
    /**
     * Unstructured `payment_related_information` passed through with the transfer.
     */
    export interface Freeform {
      /**
       * Each entry represents an addendum sent with the transfer.
       */
      entries: Array<Freeform.Entry>;
    }

    export namespace Freeform {
      export interface Entry {
        /**
         * The payment related information passed in the addendum.
         */
        payment_related_information: string;
      }
    }

    /**
     * Structured ASC X12 820 remittance advice records. Please reach out to
     * [support@increase.com](mailto:support@increase.com) for more information.
     */
    export interface PaymentOrderRemittanceAdvice {
      /**
       * ASC X12 RMR records for this specific transfer.
       */
      invoices: Array<PaymentOrderRemittanceAdvice.Invoice>;
    }

    export namespace PaymentOrderRemittanceAdvice {
      export interface Invoice {
        /**
         * The invoice number for this reference, determined in advance with the receiver.
         */
        invoice_number: string;

        /**
         * The amount that was paid for this invoice in the minor unit of its currency. For
         * dollars, for example, this is cents.
         */
        paid_amount: number;
      }
    }
  }

  /**
   * If your account requires approvals for transfers and the transfer was approved,
   * this will contain details of the approval.
   */
  export interface Approval {
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
     * the transfer was approved.
     */
    approved_at: string;

    /**
     * If the Transfer was approved by a user in the dashboard, the email address of
     * that user.
     */
    approved_by: string | null;
  }

  /**
   * If your account requires approvals for transfers and the transfer was not
   * approved, this will contain details of the cancellation.
   */
  export interface Cancellation {
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
     * the Transfer was canceled.
     */
    canceled_at: string;

    /**
     * If the Transfer was canceled by a user in the dashboard, the email address of
     * that user.
     */
    canceled_by: string | null;
  }

  /**
   * What object created the transfer, either via the API or the dashboard.
   */
  export interface CreatedBy {
    /**
     * If present, details about the API key that created the transfer.
     */
    api_key: CreatedBy.APIKey | null;

    /**
     * The type of object that created this transfer.
     *
     * - `api_key` - An API key. Details will be under the `api_key` object.
     * - `oauth_application` - An OAuth application you connected to Increase. Details
     *   will be under the `oauth_application` object.
     * - `user` - A User in the Increase dashboard. Details will be under the `user`
     *   object.
     */
    category: 'api_key' | 'oauth_application' | 'user';

    /**
     * If present, details about the OAuth Application that created the transfer.
     */
    oauth_application: CreatedBy.OAuthApplication | null;

    /**
     * If present, details about the User that created the transfer.
     */
    user: CreatedBy.User | null;
  }

  export namespace CreatedBy {
    /**
     * If present, details about the API key that created the transfer.
     */
    export interface APIKey {
      /**
       * The description set for the API key when it was created.
       */
      description: string | null;
    }

    /**
     * If present, details about the OAuth Application that created the transfer.
     */
    export interface OAuthApplication {
      /**
       * The name of the OAuth Application.
       */
      name: string;
    }

    /**
     * If present, details about the User that created the transfer.
     */
    export interface User {
      /**
       * The email address of the User.
       */
      email: string;
    }
  }

  /**
   * Increase will sometimes hold the funds for ACH debit transfers. If funds are
   * held, this sub-object will contain details of the hold.
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

  export interface NotificationsOfChange {
    /**
     * The required type of change that is being signaled by the receiving financial
     * institution.
     *
     * - `incorrect_account_number` - The account number was incorrect.
     * - `incorrect_routing_number` - The routing number was incorrect.
     * - `incorrect_routing_number_and_account_number` - Both the routing number and
     *   the account number were incorrect.
     * - `incorrect_transaction_code` - The transaction code was incorrect. Try
     *   changing the `funding` parameter from checking to savings or vice-versa.
     * - `incorrect_account_number_and_transaction_code` - The account number and the
     *   transaction code were incorrect.
     * - `incorrect_routing_number_account_number_and_transaction_code` - The routing
     *   number, account number, and transaction code were incorrect.
     * - `incorrect_receiving_depository_financial_institution_identification` - The
     *   receiving depository financial institution identification was incorrect.
     * - `incorrect_individual_identification_number` - The individual identification
     *   number was incorrect.
     * - `addenda_format_error` - The addenda had an incorrect format.
     * - `incorrect_standard_entry_class_code_for_outbound_international_payment` - The
     *   standard entry class code was incorrect for an outbound international payment.
     * - `misrouted_notification_of_change` - The notification of change was misrouted.
     * - `incorrect_trace_number` - The trace number was incorrect.
     * - `incorrect_company_identification_number` - The company identification number
     *   was incorrect.
     * - `incorrect_identification_number` - The individual identification number or
     *   identification number was incorrect.
     * - `incorrectly_formatted_corrected_data` - The corrected data was incorrectly
     *   formatted.
     * - `incorrect_discretionary_data` - The discretionary data was incorrect.
     * - `routing_number_not_from_original_entry_detail_record` - The routing number
     *   was not from the original entry detail record.
     * - `depository_financial_institution_account_number_not_from_original_entry_detail_record` -
     *   The depository financial institution account number was not from the original
     *   entry detail record.
     * - `incorrect_transaction_code_by_originating_depository_financial_institution` -
     *   The transaction code was incorrect, initiated by the originating depository
     *   financial institution.
     */
    change_code:
      | 'incorrect_account_number'
      | 'incorrect_routing_number'
      | 'incorrect_routing_number_and_account_number'
      | 'incorrect_transaction_code'
      | 'incorrect_account_number_and_transaction_code'
      | 'incorrect_routing_number_account_number_and_transaction_code'
      | 'incorrect_receiving_depository_financial_institution_identification'
      | 'incorrect_individual_identification_number'
      | 'addenda_format_error'
      | 'incorrect_standard_entry_class_code_for_outbound_international_payment'
      | 'misrouted_notification_of_change'
      | 'incorrect_trace_number'
      | 'incorrect_company_identification_number'
      | 'incorrect_identification_number'
      | 'incorrectly_formatted_corrected_data'
      | 'incorrect_discretionary_data'
      | 'routing_number_not_from_original_entry_detail_record'
      | 'depository_financial_institution_account_number_not_from_original_entry_detail_record'
      | 'incorrect_transaction_code_by_originating_depository_financial_institution';

    /**
     * The corrected data that should be used in future ACHs to this account. This may
     * contain the suggested new account number or routing number. When the
     * `change_code` is `incorrect_transaction_code`, this field contains an integer.
     * Numbers starting with a 2 encourage changing the `funding` parameter to
     * checking; numbers starting with a 3 encourage changing to savings.
     */
    corrected_data: string;

    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
     * the notification occurred.
     */
    created_at: string;
  }

  /**
   * Configuration for how the effective date of the transfer will be set. This
   * determines same-day vs future-dated settlement timing. If not set, defaults to a
   * `settlement_schedule` of `same_day`. If set, exactly one of the child attributes
   * must be set.
   */
  export interface PreferredEffectiveDate {
    /**
     * A specific date in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format to
     * use as the effective date when submitting this transfer.
     */
    date: string | null;

    /**
     * A schedule by which Increase will choose an effective date for the transfer.
     *
     * - `same_day` - The chosen effective date will be the same as the ACH processing
     *   date on which the transfer is submitted. This is necessary, but not sufficient
     *   for the transfer to be settled same-day: it must also be submitted before the
     *   last same-day cutoff and be less than or equal to $1,000.000.00.
     * - `future_dated` - The chosen effective date will be the business day following
     *   the ACH processing date on which the transfer is submitted. The transfer will
     *   be settled on that future day.
     */
    settlement_schedule: 'same_day' | 'future_dated' | null;
  }

  /**
   * If your transfer is returned, this will contain details of the return.
   */
  export interface Return {
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
     * the transfer was created.
     */
    created_at: string;

    /**
     * The three character ACH return code, in the range R01 to R85.
     */
    raw_return_reason_code: string;

    /**
     * Why the ACH Transfer was returned. This reason code is sent by the receiving
     * bank back to Increase.
     *
     * - `insufficient_fund` - Code R01. Insufficient funds in the receiving account.
     *   Sometimes abbreviated to NSF.
     * - `no_account` - Code R03. The account does not exist or the receiving bank was
     *   unable to locate it.
     * - `account_closed` - Code R02. The account is closed at the receiving bank.
     * - `invalid_account_number_structure` - Code R04. The account number is invalid
     *   at the receiving bank.
     * - `account_frozen_entry_returned_per_ofac_instruction` - Code R16. The account
     *   at the receiving bank was frozen per the Office of Foreign Assets Control.
     * - `credit_entry_refused_by_receiver` - Code R23. The receiving bank account
     *   refused a credit transfer.
     * - `unauthorized_debit_to_consumer_account_using_corporate_sec_code` - Code R05.
     *   The receiving bank rejected because of an incorrect Standard Entry Class code.
     * - `corporate_customer_advised_not_authorized` - Code R29. The corporate customer
     *   at the receiving bank reversed the transfer.
     * - `payment_stopped` - Code R08. The receiving bank stopped payment on this
     *   transfer.
     * - `non_transaction_account` - Code R20. The receiving bank account does not
     *   perform transfers.
     * - `uncollected_funds` - Code R09. The receiving bank account does not have
     *   enough available balance for the transfer.
     * - `routing_number_check_digit_error` - Code R28. The routing number is
     *   incorrect.
     * - `customer_advised_unauthorized_improper_ineligible_or_incomplete` - Code R10.
     *   The customer at the receiving bank reversed the transfer.
     * - `amount_field_error` - Code R19. The amount field is incorrect or too large.
     * - `authorization_revoked_by_customer` - Code R07. The customer at the receiving
     *   institution informed their bank that they have revoked authorization for a
     *   previously authorized transfer.
     * - `invalid_ach_routing_number` - Code R13. The routing number is invalid.
     * - `file_record_edit_criteria` - Code R17. The receiving bank is unable to
     *   process a field in the transfer.
     * - `enr_invalid_individual_name` - Code R45. The individual name field was
     *   invalid.
     * - `returned_per_odfi_request` - Code R06. The originating financial institution
     *   asked for this transfer to be returned. The receiving bank is complying with
     *   the request.
     * - `limited_participation_dfi` - Code R34. The receiving bank's regulatory
     *   supervisor has limited their participation in the ACH network.
     * - `incorrectly_coded_outbound_international_payment` - Code R85. The outbound
     *   international ACH transfer was incorrect.
     * - `account_sold_to_another_dfi` - Code R12. A rare return reason. The account
     *   was sold to another bank.
     * - `addenda_error` - Code R25. The addenda record is incorrect or missing.
     * - `beneficiary_or_account_holder_deceased` - Code R15. A rare return reason. The
     *   account holder is deceased.
     * - `customer_advised_not_within_authorization_terms` - Code R11. A rare return
     *   reason. The customer authorized some payment to the sender, but this payment
     *   was not in error.
     * - `corrected_return` - Code R74. A rare return reason. Sent in response to a
     *   return that was returned with code `field_error`. The latest return should
     *   include the corrected field(s).
     * - `duplicate_entry` - Code R24. A rare return reason. The receiving bank
     *   received an exact duplicate entry with the same trace number and amount.
     * - `duplicate_return` - Code R67. A rare return reason. The return this message
     *   refers to was a duplicate.
     * - `enr_duplicate_enrollment` - Code R47. A rare return reason. Only used for US
     *   Government agency non-monetary automatic enrollment messages.
     * - `enr_invalid_dfi_account_number` - Code R43. A rare return reason. Only used
     *   for US Government agency non-monetary automatic enrollment messages.
     * - `enr_invalid_individual_id_number` - Code R44. A rare return reason. Only used
     *   for US Government agency non-monetary automatic enrollment messages.
     * - `enr_invalid_representative_payee_indicator` - Code R46. A rare return reason.
     *   Only used for US Government agency non-monetary automatic enrollment messages.
     * - `enr_invalid_transaction_code` - Code R41. A rare return reason. Only used for
     *   US Government agency non-monetary automatic enrollment messages.
     * - `enr_return_of_enr_entry` - Code R40. A rare return reason. Only used for US
     *   Government agency non-monetary automatic enrollment messages.
     * - `enr_routing_number_check_digit_error` - Code R42. A rare return reason. Only
     *   used for US Government agency non-monetary automatic enrollment messages.
     * - `entry_not_processed_by_gateway` - Code R84. A rare return reason. The
     *   International ACH Transfer cannot be processed by the gateway.
     * - `field_error` - Code R69. A rare return reason. One or more of the fields in
     *   the ACH were malformed.
     * - `foreign_receiving_dfi_unable_to_settle` - Code R83. A rare return reason. The
     *   Foreign receiving bank was unable to settle this ACH transfer.
     * - `iat_entry_coding_error` - Code R80. A rare return reason. The International
     *   ACH Transfer is malformed.
     * - `improper_effective_entry_date` - Code R18. A rare return reason. The ACH has
     *   an improper effective entry date field.
     * - `improper_source_document_source_document_presented` - Code R39. A rare return
     *   reason. The source document related to this ACH, usually an ACH check
     *   conversion, was presented to the bank.
     * - `invalid_company_id` - Code R21. A rare return reason. The Company ID field of
     *   the ACH was invalid.
     * - `invalid_foreign_receiving_dfi_identification` - Code R82. A rare return
     *   reason. The foreign receiving bank identifier for an International ACH
     *   Transfer was invalid.
     * - `invalid_individual_id_number` - Code R22. A rare return reason. The
     *   Individual ID number field of the ACH was invalid.
     * - `item_and_rck_entry_presented_for_payment` - Code R53. A rare return reason.
     *   Both the Represented Check ("RCK") entry and the original check were presented
     *   to the bank.
     * - `item_related_to_rck_entry_is_ineligible` - Code R51. A rare return reason.
     *   The Represented Check ("RCK") entry is ineligible.
     * - `mandatory_field_error` - Code R26. A rare return reason. The ACH is missing a
     *   required field.
     * - `misrouted_dishonored_return` - Code R71. A rare return reason. The receiving
     *   bank does not recognize the routing number in a dishonored return entry.
     * - `misrouted_return` - Code R61. A rare return reason. The receiving bank does
     *   not recognize the routing number in a return entry.
     * - `no_errors_found` - Code R76. A rare return reason. Sent in response to a
     *   return, the bank does not find the errors alleged by the returning bank.
     * - `non_acceptance_of_r62_dishonored_return` - Code R77. A rare return reason.
     *   The receiving bank does not accept the return of the erroneous debit. The
     *   funds are not available at the receiving bank.
     * - `non_participant_in_iat_program` - Code R81. A rare return reason. The
     *   receiving bank does not accept International ACH Transfers.
     * - `permissible_return_entry` - Code R31. A rare return reason. A return that has
     *   been agreed to be accepted by the receiving bank, despite falling outside of
     *   the usual return timeframe.
     * - `permissible_return_entry_not_accepted` - Code R70. A rare return reason. The
     *   receiving bank had not approved this return.
     * - `rdfi_non_settlement` - Code R32. A rare return reason. The receiving bank
     *   could not settle this transaction.
     * - `rdfi_participant_in_check_truncation_program` - Code R30. A rare return
     *   reason. The receiving bank does not accept Check Truncation ACH transfers.
     * - `representative_payee_deceased_or_unable_to_continue_in_that_capacity` - Code
     *   R14. A rare return reason. The payee is deceased.
     * - `return_not_a_duplicate` - Code R75. A rare return reason. The originating
     *   bank disputes that an earlier `duplicate_entry` return was actually a
     *   duplicate.
     * - `return_of_erroneous_or_reversing_debit` - Code R62. A rare return reason. The
     *   originating financial institution made a mistake and this return corrects it.
     * - `return_of_improper_credit_entry` - Code R36. A rare return reason. Return of
     *   a malformed credit entry.
     * - `return_of_improper_debit_entry` - Code R35. A rare return reason. Return of a
     *   malformed debit entry.
     * - `return_of_xck_entry` - Code R33. A rare return reason. Return of a Destroyed
     *   Check ("XKC") entry.
     * - `source_document_presented_for_payment` - Code R37. A rare return reason. The
     *   source document related to this ACH, usually an ACH check conversion, was
     *   presented to the bank.
     * - `state_law_affecting_rck_acceptance` - Code R50. A rare return reason. State
     *   law prevents the bank from accepting the Represented Check ("RCK") entry.
     * - `stop_payment_on_item_related_to_rck_entry` - Code R52. A rare return reason.
     *   A stop payment was issued on a Represented Check ("RCK") entry.
     * - `stop_payment_on_source_document` - Code R38. A rare return reason. The source
     *   attached to the ACH, usually an ACH check conversion, includes a stop payment.
     * - `timely_original_return` - Code R73. A rare return reason. The bank receiving
     *   an `untimely_return` believes it was on time.
     * - `trace_number_error` - Code R27. A rare return reason. An ACH return's trace
     *   number does not match an originated ACH.
     * - `untimely_dishonored_return` - Code R72. A rare return reason. The dishonored
     *   return was sent too late.
     * - `untimely_return` - Code R68. A rare return reason. The return was sent too
     *   late.
     */
    return_reason_code:
      | 'insufficient_fund'
      | 'no_account'
      | 'account_closed'
      | 'invalid_account_number_structure'
      | 'account_frozen_entry_returned_per_ofac_instruction'
      | 'credit_entry_refused_by_receiver'
      | 'unauthorized_debit_to_consumer_account_using_corporate_sec_code'
      | 'corporate_customer_advised_not_authorized'
      | 'payment_stopped'
      | 'non_transaction_account'
      | 'uncollected_funds'
      | 'routing_number_check_digit_error'
      | 'customer_advised_unauthorized_improper_ineligible_or_incomplete'
      | 'amount_field_error'
      | 'authorization_revoked_by_customer'
      | 'invalid_ach_routing_number'
      | 'file_record_edit_criteria'
      | 'enr_invalid_individual_name'
      | 'returned_per_odfi_request'
      | 'limited_participation_dfi'
      | 'incorrectly_coded_outbound_international_payment'
      | 'account_sold_to_another_dfi'
      | 'addenda_error'
      | 'beneficiary_or_account_holder_deceased'
      | 'customer_advised_not_within_authorization_terms'
      | 'corrected_return'
      | 'duplicate_entry'
      | 'duplicate_return'
      | 'enr_duplicate_enrollment'
      | 'enr_invalid_dfi_account_number'
      | 'enr_invalid_individual_id_number'
      | 'enr_invalid_representative_payee_indicator'
      | 'enr_invalid_transaction_code'
      | 'enr_return_of_enr_entry'
      | 'enr_routing_number_check_digit_error'
      | 'entry_not_processed_by_gateway'
      | 'field_error'
      | 'foreign_receiving_dfi_unable_to_settle'
      | 'iat_entry_coding_error'
      | 'improper_effective_entry_date'
      | 'improper_source_document_source_document_presented'
      | 'invalid_company_id'
      | 'invalid_foreign_receiving_dfi_identification'
      | 'invalid_individual_id_number'
      | 'item_and_rck_entry_presented_for_payment'
      | 'item_related_to_rck_entry_is_ineligible'
      | 'mandatory_field_error'
      | 'misrouted_dishonored_return'
      | 'misrouted_return'
      | 'no_errors_found'
      | 'non_acceptance_of_r62_dishonored_return'
      | 'non_participant_in_iat_program'
      | 'permissible_return_entry'
      | 'permissible_return_entry_not_accepted'
      | 'rdfi_non_settlement'
      | 'rdfi_participant_in_check_truncation_program'
      | 'representative_payee_deceased_or_unable_to_continue_in_that_capacity'
      | 'return_not_a_duplicate'
      | 'return_of_erroneous_or_reversing_debit'
      | 'return_of_improper_credit_entry'
      | 'return_of_improper_debit_entry'
      | 'return_of_xck_entry'
      | 'source_document_presented_for_payment'
      | 'state_law_affecting_rck_acceptance'
      | 'stop_payment_on_item_related_to_rck_entry'
      | 'stop_payment_on_source_document'
      | 'timely_original_return'
      | 'trace_number_error'
      | 'untimely_dishonored_return'
      | 'untimely_return';

    /**
     * A 15 digit number that was generated by the bank that initiated the return. The
     * trace number of the return is different than that of the original transfer. ACH
     * trace numbers are not unique, but along with the amount and date this number can
     * be used to identify the ACH return at the bank that initiated it.
     */
    trace_number: string;

    /**
     * The identifier of the Transaction associated with this return.
     */
    transaction_id: string;

    /**
     * The identifier of the ACH Transfer associated with this return.
     */
    transfer_id: string;

    [k: string]: unknown;
  }

  /**
   * A subhash containing information about when and how the transfer settled at the
   * Federal Reserve.
   */
  export interface Settlement {
    /**
     * When the funds for this transfer have settled at the destination bank at the
     * Federal Reserve.
     */
    settled_at: string;
  }

  /**
   * After the transfer is submitted to FedACH, this will contain supplemental
   * details. Increase batches transfers and submits a file to the Federal Reserve
   * roughly every 30 minutes. The Federal Reserve processes ACH transfers during
   * weekdays according to their
   * [posted schedule](https://www.frbservices.org/resources/resource-centers/same-day-ach/fedach-processing-schedule.html).
   */
  export interface Submission {
    /**
     * The timestamp by which any administrative returns are expected to be received
     * by. This follows the NACHA guidelines for return windows, which are: "In
     * general, return entries must be received by the RDFI’s ACH Operator by its
     * deposit deadline for the return entry to be made available to the ODFI no later
     * than the opening of business on the second banking day following the Settlement
     * Date of the original entry.".
     */
    administrative_returns_expected_by: string;

    /**
     * The ACH transfer's effective date as sent to the Federal Reserve. If a specific
     * date was configured using `preferred_effective_date`, this will match that
     * value. Otherwise, it will be the date selected (following the specified
     * settlement schedule) at the time the transfer was submitted.
     */
    effective_date: string;

    /**
     * When the transfer is expected to settle in the recipient's account. Credits may
     * be available sooner, at the receiving banks discretion. The FedACH schedule is
     * published
     * [here](https://www.frbservices.org/resources/resource-centers/same-day-ach/fedach-processing-schedule.html).
     */
    expected_funds_settlement_at: string;

    /**
     * The settlement schedule the transfer is expected to follow. This expectation
     * takes into account the `effective_date`, `submitted_at`, and the amount of the
     * transfer.
     *
     * - `same_day` - The transfer is expected to settle same-day.
     * - `future_dated` - The transfer is expected to settle on a future date.
     */
    expected_settlement_schedule: 'same_day' | 'future_dated';

    /**
     * When the ACH transfer was sent to FedACH.
     */
    submitted_at: string;

    /**
     * A 15 digit number recorded in the Nacha file and transmitted to the receiving
     * bank. Along with the amount, date, and originating routing number, this can be
     * used to identify the ACH transfer at the receiving bank. ACH trace numbers are
     * not unique, but are
     * [used to correlate returns](https://increase.com/documentation/ach-returns#ach-returns).
     */
    trace_number: string;
  }
}

export interface ACHTransferCreateParams {
  /**
   * The Increase identifier for the account that will send the transfer.
   */
  account_id: string;

  /**
   * The transfer amount in USD cents. A positive amount originates a credit transfer
   * pushing funds to the receiving account. A negative amount originates a debit
   * transfer pulling funds from the receiving account.
   */
  amount: number;

  /**
   * A description you choose to give the transfer. This will be saved with the
   * transfer details, displayed in the dashboard, and returned by the API. If
   * `individual_name` and `company_name` are not explicitly set by this API, the
   * `statement_descriptor` will be sent in those fields to the receiving bank to
   * help the customer recognize the transfer. You are highly encouraged to pass
   * `individual_name` and `company_name` instead of relying on this fallback.
   */
  statement_descriptor: string;

  /**
   * The account number for the destination account.
   */
  account_number?: string;

  /**
   * Additional information that will be sent to the recipient. This is included in
   * the transfer data sent to the receiving bank.
   */
  addenda?: ACHTransferCreateParams.Addenda;

  /**
   * The description of the date of the transfer, usually in the format `YYMMDD`.
   * This is included in the transfer data sent to the receiving bank.
   */
  company_descriptive_date?: string;

  /**
   * The data you choose to associate with the transfer. This is included in the
   * transfer data sent to the receiving bank.
   */
  company_discretionary_data?: string;

  /**
   * A description of the transfer, included in the transfer data sent to the
   * receiving bank. Standardized formatting may be required, for example `PAYROLL`
   * for payroll-related Prearranged Payments and Deposits (PPD) credit transfers.
   */
  company_entry_description?: string;

  /**
   * The name by which the recipient knows you. This is included in the transfer data
   * sent to the receiving bank.
   */
  company_name?: string;

  /**
   * The type of entity that owns the account to which the ACH Transfer is being
   * sent.
   *
   * - `business` - The External Account is owned by a business.
   * - `individual` - The External Account is owned by an individual.
   * - `unknown` - It's unknown what kind of entity owns the External Account.
   */
  destination_account_holder?: 'business' | 'individual' | 'unknown';

  /**
   * The ID of an External Account to initiate a transfer to. If this parameter is
   * provided, `account_number`, `routing_number`, and `funding` must be absent.
   */
  external_account_id?: string;

  /**
   * The type of the account to which the transfer will be sent.
   *
   * - `checking` - A checking account.
   * - `savings` - A savings account.
   * - `general_ledger` - A bank's general ledger. Uncommon.
   */
  funding?: 'checking' | 'savings' | 'general_ledger';

  /**
   * Your identifier for the transfer recipient.
   */
  individual_id?: string;

  /**
   * The name of the transfer recipient. This value is informational and not verified
   * by the recipient's bank.
   */
  individual_name?: string;

  /**
   * Configuration for how the effective date of the transfer will be set. This
   * determines same-day vs future-dated settlement timing. If not set, defaults to a
   * `settlement_schedule` of `same_day`. If set, exactly one of the child attributes
   * must be set.
   */
  preferred_effective_date?: ACHTransferCreateParams.PreferredEffectiveDate;

  /**
   * Whether the transfer requires explicit approval via the dashboard or API.
   */
  require_approval?: boolean;

  /**
   * The American Bankers' Association (ABA) Routing Transit Number (RTN) for the
   * destination account.
   */
  routing_number?: string;

  /**
   * The
   * [Standard Entry Class (SEC) code](/documentation/ach-standard-entry-class-codes)
   * to use for the transfer.
   *
   * - `corporate_credit_or_debit` - Corporate Credit and Debit (CCD) is used for
   *   business-to-business payments.
   * - `corporate_trade_exchange` - Corporate Trade Exchange (CTX) allows for
   *   including extensive remittance information with business-to-business payments.
   * - `prearranged_payments_and_deposit` - Prearranged Payments and Deposits (PPD)
   *   is used for credits or debits originated by an organization to a consumer,
   *   such as payroll direct deposits.
   * - `internet_initiated` - Internet Initiated (WEB) is used for consumer payments
   *   initiated or authorized via the Internet. Debits can only be initiated by
   *   non-consumers to debit a consumer’s account. Credits can only be used for
   *   consumer to consumer transactions.
   */
  standard_entry_class_code?:
    | 'corporate_credit_or_debit'
    | 'corporate_trade_exchange'
    | 'prearranged_payments_and_deposit'
    | 'internet_initiated';

  /**
   * The timing of the transaction.
   *
   * - `synchronous` - A Transaction will be created immediately.
   * - `asynchronous` - A Transaction will be created when the funds settle at the
   *   Federal Reserve.
   */
  transaction_timing?: 'synchronous' | 'asynchronous';

  [k: string]: unknown;
}

export namespace ACHTransferCreateParams {
  /**
   * Additional information that will be sent to the recipient. This is included in
   * the transfer data sent to the receiving bank.
   */
  export interface Addenda {
    /**
     * The type of addenda to pass with the transfer.
     *
     * - `freeform` - Unstructured `payment_related_information` passed through with
     *   the transfer.
     * - `payment_order_remittance_advice` - Structured ASC X12 820 remittance advice
     *   records. Please reach out to
     *   [support@increase.com](mailto:support@increase.com) for more information.
     */
    category: 'freeform' | 'payment_order_remittance_advice';

    /**
     * Unstructured `payment_related_information` passed through with the transfer.
     * Required if and only if `category` is `freeform`.
     */
    freeform?: Addenda.Freeform;

    /**
     * Structured ASC X12 820 remittance advice records. Please reach out to
     * [support@increase.com](mailto:support@increase.com) for more information.
     * Required if and only if `category` is `payment_order_remittance_advice`.
     */
    payment_order_remittance_advice?: Addenda.PaymentOrderRemittanceAdvice;
  }

  export namespace Addenda {
    /**
     * Unstructured `payment_related_information` passed through with the transfer.
     * Required if and only if `category` is `freeform`.
     */
    export interface Freeform {
      /**
       * Each entry represents an addendum sent with the transfer. In general, you should
       * send at most one addendum–most ACH recipients cannot access beyond the first 80
       * characters sent. Please reach out to
       * [support@increase.com](mailto:support@increase.com) to send 2 or more addenda to
       * a recipient expecting a specific addendum format.
       */
      entries: Array<Freeform.Entry>;
    }

    export namespace Freeform {
      export interface Entry {
        /**
         * The payment related information passed in the addendum.
         */
        payment_related_information: string;
      }
    }

    /**
     * Structured ASC X12 820 remittance advice records. Please reach out to
     * [support@increase.com](mailto:support@increase.com) for more information.
     * Required if and only if `category` is `payment_order_remittance_advice`.
     */
    export interface PaymentOrderRemittanceAdvice {
      /**
       * ASC X12 RMR records for this specific transfer.
       */
      invoices: Array<PaymentOrderRemittanceAdvice.Invoice>;
    }

    export namespace PaymentOrderRemittanceAdvice {
      export interface Invoice {
        /**
         * The invoice number for this reference, determined in advance with the receiver.
         */
        invoice_number: string;

        /**
         * The amount that was paid for this invoice in the minor unit of its currency. For
         * dollars, for example, this is cents.
         */
        paid_amount: number;
      }
    }
  }

  /**
   * Configuration for how the effective date of the transfer will be set. This
   * determines same-day vs future-dated settlement timing. If not set, defaults to a
   * `settlement_schedule` of `same_day`. If set, exactly one of the child attributes
   * must be set.
   */
  export interface PreferredEffectiveDate {
    /**
     * A specific date in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format to
     * use as the effective date when submitting this transfer.
     */
    date?: string;

    /**
     * A schedule by which Increase will choose an effective date for the transfer.
     *
     * - `same_day` - The chosen effective date will be the same as the ACH processing
     *   date on which the transfer is submitted. This is necessary, but not sufficient
     *   for the transfer to be settled same-day: it must also be submitted before the
     *   last same-day cutoff and be less than or equal to $1,000.000.00.
     * - `future_dated` - The chosen effective date will be the business day following
     *   the ACH processing date on which the transfer is submitted. The transfer will
     *   be settled on that future day.
     */
    settlement_schedule?: 'same_day' | 'future_dated';
  }
}

export interface ACHTransferListParams extends PageParams {
  /**
   * Filter ACH Transfers to those that originated from the specified Account.
   */
  account_id?: string;

  created_at?: ACHTransferListParams.CreatedAt;

  /**
   * Filter ACH Transfers to those made to the specified External Account.
   */
  external_account_id?: string;

  /**
   * Filter records to the one with the specified `idempotency_key` you chose for
   * that object. This value is unique across Increase and is used to ensure that a
   * request is only processed once. Learn more about
   * [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key?: string;

  status?: ACHTransferListParams.Status;
}

export namespace ACHTransferListParams {
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

  export interface Status {
    /**
     * Return results whose value is in the provided list. For GET requests, this
     * should be encoded as a comma-delimited string, such as `?in=one,two,three`.
     */
    in?: Array<
      | 'pending_approval'
      | 'pending_transfer_session_confirmation'
      | 'canceled'
      | 'pending_submission'
      | 'pending_reviewing'
      | 'requires_attention'
      | 'rejected'
      | 'submitted'
      | 'returned'
    >;
  }
}

export declare namespace ACHTransfers {
  export {
    type ACHTransfer as ACHTransfer,
    type ACHTransfersPage as ACHTransfersPage,
    type ACHTransferCreateParams as ACHTransferCreateParams,
    type ACHTransferListParams as ACHTransferListParams,
  };
}
