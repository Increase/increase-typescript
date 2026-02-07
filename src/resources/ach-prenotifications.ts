// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class ACHPrenotifications extends APIResource {
  /**
   * Create an ACH Prenotification
   *
   * @example
   * ```ts
   * const achPrenotification =
   *   await client.achPrenotifications.create({
   *     account_id: 'account_in71c4amph0vgo2qllky',
   *     account_number: '987654321',
   *     routing_number: '101050001',
   *   });
   * ```
   */
  create(body: ACHPrenotificationCreateParams, options?: RequestOptions): APIPromise<ACHPrenotification> {
    return this._client.post('/ach_prenotifications', { body, ...options });
  }

  /**
   * Retrieve an ACH Prenotification
   *
   * @example
   * ```ts
   * const achPrenotification =
   *   await client.achPrenotifications.retrieve(
   *     'ach_prenotification_ubjf9qqsxl3obbcn1u34',
   *   );
   * ```
   */
  retrieve(achPrenotificationID: string, options?: RequestOptions): APIPromise<ACHPrenotification> {
    return this._client.get(path`/ach_prenotifications/${achPrenotificationID}`, options);
  }

  /**
   * List ACH Prenotifications
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const achPrenotification of client.achPrenotifications.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: ACHPrenotificationListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ACHPrenotificationsPage, ACHPrenotification> {
    return this._client.getAPIList('/ach_prenotifications', Page<ACHPrenotification>, { query, ...options });
  }
}

export type ACHPrenotificationsPage = Page<ACHPrenotification>;

/**
 * ACH Prenotifications are one way you can verify account and routing numbers by
 * Automated Clearing House (ACH).
 */
export interface ACHPrenotification {
  /**
   * The ACH Prenotification's identifier.
   */
  id: string;

  /**
   * The account that sent the ACH Prenotification.
   */
  account_id: string | null;

  /**
   * The destination account number.
   */
  account_number: string;

  /**
   * Additional information for the recipient.
   */
  addendum: string | null;

  /**
   * The description of the date of the notification.
   */
  company_descriptive_date: string | null;

  /**
   * Optional data associated with the notification.
   */
  company_discretionary_data: string | null;

  /**
   * The description of the notification.
   */
  company_entry_description: string | null;

  /**
   * The name by which you know the company.
   */
  company_name: string | null;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the prenotification was created.
   */
  created_at: string;

  /**
   * If the notification is for a future credit or debit.
   *
   * - `credit` - The Prenotification is for an anticipated credit.
   * - `debit` - The Prenotification is for an anticipated debit.
   */
  credit_debit_indicator: 'credit' | 'debit' | null;

  /**
   * The effective date in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  effective_date: string | null;

  /**
   * The idempotency key you chose for this object. This value is unique across
   * Increase and is used to ensure that a request is only processed once. Learn more
   * about [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key: string | null;

  /**
   * Your identifier for the recipient.
   */
  individual_id: string | null;

  /**
   * The name of the recipient. This value is informational and not verified by the
   * recipient's bank.
   */
  individual_name: string | null;

  /**
   * If the receiving bank notifies that future transfers should use different
   * details, this will contain those details.
   */
  notifications_of_change: Array<ACHPrenotification.NotificationsOfChange>;

  /**
   * If your prenotification is returned, this will contain details of the return.
   */
  prenotification_return: ACHPrenotification.PrenotificationReturn | null;

  /**
   * The American Bankers' Association (ABA) Routing Transit Number (RTN).
   */
  routing_number: string;

  /**
   * The
   * [Standard Entry Class (SEC) code](/documentation/ach-standard-entry-class-codes)
   * to use for the ACH Prenotification.
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
    | 'internet_initiated'
    | null;

  /**
   * The lifecycle status of the ACH Prenotification.
   *
   * - `pending_submitting` - The Prenotification is pending submission.
   * - `requires_attention` - The Prenotification requires attention.
   * - `returned` - The Prenotification has been returned.
   * - `submitted` - The Prenotification is complete.
   */
  status: 'pending_submitting' | 'requires_attention' | 'returned' | 'submitted';

  /**
   * A constant representing the object's type. For this resource it will always be
   * `ach_prenotification`.
   */
  type: 'ach_prenotification';
}

export namespace ACHPrenotification {
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
   * If your prenotification is returned, this will contain details of the return.
   */
  export interface PrenotificationReturn {
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
     * the Prenotification was returned.
     */
    created_at: string;

    /**
     * Why the Prenotification was returned.
     *
     * - `insufficient_fund` - Code R01. Insufficient funds in the receiving account.
     *   Sometimes abbreviated to "NSF."
     * - `no_account` - Code R03. The account does not exist or the receiving bank was
     *   unable to locate it.
     * - `account_closed` - Code R02. The account is closed at the receiving bank.
     * - `invalid_account_number_structure` - Code R04. The account number is invalid
     *   at the receiving bank.
     * - `account_frozen_entry_returned_per_ofac_instruction` - Code R16. This return
     *   code has two separate meanings. (1) The receiving bank froze the account or
     *   (2) the Office of Foreign Assets Control (OFAC) instructed the receiving bank
     *   to return the entry.
     * - `credit_entry_refused_by_receiver` - Code R23. The receiving bank refused the
     *   credit transfer.
     * - `unauthorized_debit_to_consumer_account_using_corporate_sec_code` - Code R05.
     *   The receiving bank rejected because of an incorrect Standard Entry Class code.
     *   Consumer accounts cannot be debited as `corporate_credit_or_debit` or
     *   `corporate_trade_exchange`.
     * - `corporate_customer_advised_not_authorized` - Code R29. The corporate customer
     *   at the receiving bank reversed the transfer.
     * - `payment_stopped` - Code R08. The receiving bank stopped payment on this
     *   transfer.
     * - `non_transaction_account` - Code R20. The account is not eligible for ACH,
     *   such as a savings account with transaction limits.
     * - `uncollected_funds` - Code R09. The receiving bank account does not have
     *   enough available balance for the transfer.
     * - `routing_number_check_digit_error` - Code R28. The routing number is
     *   incorrect.
     * - `customer_advised_unauthorized_improper_ineligible_or_incomplete` - Code R10.
     *   The customer at the receiving bank reversed the transfer.
     * - `amount_field_error` - Code R19. The amount field is incorrect or too large.
     * - `authorization_revoked_by_customer` - Code R07. The customer revoked their
     *   authorization for a previously authorized transfer.
     * - `invalid_ach_routing_number` - Code R13. The routing number is invalid.
     * - `file_record_edit_criteria` - Code R17. The receiving bank is unable to
     *   process a field in the transfer.
     * - `enr_invalid_individual_name` - Code R45. A rare return reason. The individual
     *   name field was invalid.
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
     * - `return_of_xck_entry` - Code R33. A rare return reason. Return of a destroyed
     *   check ("XCK") entry.
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
  }
}

export interface ACHPrenotificationCreateParams {
  /**
   * The Increase identifier for the account that will send the ACH Prenotification.
   */
  account_id: string;

  /**
   * The account number for the destination account.
   */
  account_number: string;

  /**
   * The American Bankers' Association (ABA) Routing Transit Number (RTN) for the
   * destination account.
   */
  routing_number: string;

  /**
   * Additional information that will be sent to the recipient.
   */
  addendum?: string;

  /**
   * The description of the date of the ACH Prenotification.
   */
  company_descriptive_date?: string;

  /**
   * The data you choose to associate with the ACH Prenotification.
   */
  company_discretionary_data?: string;

  /**
   * The description you wish to be shown to the recipient.
   */
  company_entry_description?: string;

  /**
   * The name by which the recipient knows you.
   */
  company_name?: string;

  /**
   * Whether the Prenotification is for a future debit or credit.
   *
   * - `credit` - The Prenotification is for an anticipated credit.
   * - `debit` - The Prenotification is for an anticipated debit.
   */
  credit_debit_indicator?: 'credit' | 'debit';

  /**
   * The ACH Prenotification effective date in
   * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  effective_date?: string;

  /**
   * Your identifier for the recipient.
   */
  individual_id?: string;

  /**
   * The name of therecipient. This value is informational and not verified by the
   * recipient's bank.
   */
  individual_name?: string;

  /**
   * The
   * [Standard Entry Class (SEC) code](/documentation/ach-standard-entry-class-codes)
   * to use for the ACH Prenotification.
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

  [k: string]: unknown;
}

export interface ACHPrenotificationListParams extends PageParams {
  created_at?: ACHPrenotificationListParams.CreatedAt;

  /**
   * Filter records to the one with the specified `idempotency_key` you chose for
   * that object. This value is unique across Increase and is used to ensure that a
   * request is only processed once. Learn more about
   * [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key?: string;
}

export namespace ACHPrenotificationListParams {
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

export declare namespace ACHPrenotifications {
  export {
    type ACHPrenotification as ACHPrenotification,
    type ACHPrenotificationsPage as ACHPrenotificationsPage,
    type ACHPrenotificationCreateParams as ACHPrenotificationCreateParams,
    type ACHPrenotificationListParams as ACHPrenotificationListParams,
  };
}
