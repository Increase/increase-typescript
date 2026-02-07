// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class InboundACHTransfers extends APIResource {
  /**
   * Retrieve an Inbound ACH Transfer
   *
   * @example
   * ```ts
   * const inboundACHTransfer =
   *   await client.inboundACHTransfers.retrieve(
   *     'inbound_ach_transfer_tdrwqr3fq9gnnq49odev',
   *   );
   * ```
   */
  retrieve(inboundACHTransferID: string, options?: RequestOptions): APIPromise<InboundACHTransfer> {
    return this._client.get(path`/inbound_ach_transfers/${inboundACHTransferID}`, options);
  }

  /**
   * List Inbound ACH Transfers
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const inboundACHTransfer of client.inboundACHTransfers.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: InboundACHTransferListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<InboundACHTransfersPage, InboundACHTransfer> {
    return this._client.getAPIList('/inbound_ach_transfers', Page<InboundACHTransfer>, { query, ...options });
  }

  /**
   * Create a notification of change for an Inbound ACH Transfer
   *
   * @example
   * ```ts
   * const inboundACHTransfer =
   *   await client.inboundACHTransfers.createNotificationOfChange(
   *     'inbound_ach_transfer_tdrwqr3fq9gnnq49odev',
   *   );
   * ```
   */
  createNotificationOfChange(
    inboundACHTransferID: string,
    body: InboundACHTransferCreateNotificationOfChangeParams,
    options?: RequestOptions,
  ): APIPromise<InboundACHTransfer> {
    return this._client.post(
      path`/inbound_ach_transfers/${inboundACHTransferID}/create_notification_of_change`,
      { body, ...options },
    );
  }

  /**
   * Decline an Inbound ACH Transfer
   *
   * @example
   * ```ts
   * const inboundACHTransfer =
   *   await client.inboundACHTransfers.decline(
   *     'inbound_ach_transfer_tdrwqr3fq9gnnq49odev',
   *   );
   * ```
   */
  decline(
    inboundACHTransferID: string,
    body: InboundACHTransferDeclineParams,
    options?: RequestOptions,
  ): APIPromise<InboundACHTransfer> {
    return this._client.post(path`/inbound_ach_transfers/${inboundACHTransferID}/decline`, {
      body,
      ...options,
    });
  }

  /**
   * Return an Inbound ACH Transfer
   *
   * @example
   * ```ts
   * const inboundACHTransfer =
   *   await client.inboundACHTransfers.transferReturn(
   *     'inbound_ach_transfer_tdrwqr3fq9gnnq49odev',
   *     { reason: 'payment_stopped' },
   *   );
   * ```
   */
  transferReturn(
    inboundACHTransferID: string,
    body: InboundACHTransferTransferReturnParams,
    options?: RequestOptions,
  ): APIPromise<InboundACHTransfer> {
    return this._client.post(path`/inbound_ach_transfers/${inboundACHTransferID}/transfer_return`, {
      body,
      ...options,
    });
  }
}

export type InboundACHTransfersPage = Page<InboundACHTransfer>;

/**
 * An Inbound ACH Transfer is an ACH transfer initiated outside of Increase to your
 * account.
 */
export interface InboundACHTransfer {
  /**
   * The inbound ACH transfer's identifier.
   */
  id: string;

  /**
   * If your transfer is accepted, this will contain details of the acceptance.
   */
  acceptance: InboundACHTransfer.Acceptance | null;

  /**
   * The Account to which the transfer belongs.
   */
  account_id: string;

  /**
   * The identifier of the Account Number to which this transfer was sent.
   */
  account_number_id: string;

  /**
   * Additional information sent from the originator.
   */
  addenda: InboundACHTransfer.Addenda | null;

  /**
   * The transfer amount in USD cents.
   */
  amount: number;

  /**
   * The time at which the transfer will be automatically resolved.
   */
  automatically_resolves_at: string;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the inbound ACH transfer was created.
   */
  created_at: string;

  /**
   * If your transfer is declined, this will contain details of the decline.
   */
  decline: InboundACHTransfer.Decline | null;

  /**
   * The direction of the transfer.
   *
   * - `credit` - Credit
   * - `debit` - Debit
   */
  direction: 'credit' | 'debit';

  /**
   * The effective date of the transfer. This is sent by the sending bank and is a
   * factor in determining funds availability.
   */
  effective_date: string;

  /**
   * If the Inbound ACH Transfer has a Standard Entry Class Code of IAT, this will
   * contain fields pertaining to the International ACH Transaction.
   */
  international_addenda: InboundACHTransfer.InternationalAddenda | null;

  /**
   * If you initiate a notification of change in response to the transfer, this will
   * contain its details.
   */
  notification_of_change: InboundACHTransfer.NotificationOfChange | null;

  /**
   * The descriptive date of the transfer.
   */
  originator_company_descriptive_date: string | null;

  /**
   * The additional information included with the transfer.
   */
  originator_company_discretionary_data: string | null;

  /**
   * The description of the transfer.
   */
  originator_company_entry_description: string;

  /**
   * The id of the company that initiated the transfer.
   */
  originator_company_id: string;

  /**
   * The name of the company that initiated the transfer.
   */
  originator_company_name: string;

  /**
   * The American Banking Association (ABA) routing number of the bank originating
   * the transfer.
   */
  originator_routing_number: string;

  /**
   * The id of the receiver of the transfer.
   */
  receiver_id_number: string | null;

  /**
   * The name of the receiver of the transfer.
   */
  receiver_name: string | null;

  /**
   * A subhash containing information about when and how the transfer settled at the
   * Federal Reserve.
   */
  settlement: InboundACHTransfer.Settlement;

  /**
   * The Standard Entry Class (SEC) code of the transfer.
   *
   * - `corporate_credit_or_debit` - Corporate Credit and Debit (CCD).
   * - `corporate_trade_exchange` - Corporate Trade Exchange (CTX).
   * - `prearranged_payments_and_deposit` - Prearranged Payments and Deposits (PPD).
   * - `internet_initiated` - Internet Initiated (WEB).
   * - `point_of_sale` - Point of Sale (POS).
   * - `telephone_initiated` - Telephone Initiated (TEL).
   * - `customer_initiated` - Customer Initiated (CIE).
   * - `accounts_receivable` - Accounts Receivable (ARC).
   * - `machine_transfer` - Machine Transfer (MTE).
   * - `shared_network_transaction` - Shared Network Transaction (SHR).
   * - `represented_check` - Represented Check (RCK).
   * - `back_office_conversion` - Back Office Conversion (BOC).
   * - `point_of_purchase` - Point of Purchase (POP).
   * - `check_truncation` - Check Truncation (TRC).
   * - `destroyed_check` - Destroyed Check (XCK).
   * - `international_ach_transaction` - International ACH Transaction (IAT).
   */
  standard_entry_class_code:
    | 'corporate_credit_or_debit'
    | 'corporate_trade_exchange'
    | 'prearranged_payments_and_deposit'
    | 'internet_initiated'
    | 'point_of_sale'
    | 'telephone_initiated'
    | 'customer_initiated'
    | 'accounts_receivable'
    | 'machine_transfer'
    | 'shared_network_transaction'
    | 'represented_check'
    | 'back_office_conversion'
    | 'point_of_purchase'
    | 'check_truncation'
    | 'destroyed_check'
    | 'international_ach_transaction';

  /**
   * The status of the transfer.
   *
   * - `pending` - The Inbound ACH Transfer is awaiting action, will transition
   *   automatically if no action is taken.
   * - `declined` - The Inbound ACH Transfer has been declined.
   * - `accepted` - The Inbound ACH Transfer is accepted.
   * - `returned` - The Inbound ACH Transfer has been returned.
   */
  status: 'pending' | 'declined' | 'accepted' | 'returned';

  /**
   * A 15 digit number set by the sending bank and transmitted to the receiving bank.
   * Along with the amount, date, and originating routing number, this can be used to
   * identify the ACH transfer. ACH trace numbers are not unique, but are
   * [used to correlate returns](https://increase.com/documentation/ach-returns#ach-returns).
   */
  trace_number: string;

  /**
   * If your transfer is returned, this will contain details of the return.
   */
  transfer_return: InboundACHTransfer.TransferReturn | null;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `inbound_ach_transfer`.
   */
  type: 'inbound_ach_transfer';

  [k: string]: unknown;
}

export namespace InboundACHTransfer {
  /**
   * If your transfer is accepted, this will contain details of the acceptance.
   */
  export interface Acceptance {
    /**
     * The time at which the transfer was accepted.
     */
    accepted_at: string;

    /**
     * The id of the transaction for the accepted transfer.
     */
    transaction_id: string;
  }

  /**
   * Additional information sent from the originator.
   */
  export interface Addenda {
    /**
     * The type of addendum.
     *
     * - `freeform` - Unstructured addendum.
     */
    category: 'freeform';

    /**
     * Unstructured `payment_related_information` passed through by the originator.
     */
    freeform: Addenda.Freeform | null;
  }

  export namespace Addenda {
    /**
     * Unstructured `payment_related_information` passed through by the originator.
     */
    export interface Freeform {
      /**
       * Each entry represents an addendum received from the originator.
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
  }

  /**
   * If your transfer is declined, this will contain details of the decline.
   */
  export interface Decline {
    /**
     * The time at which the transfer was declined.
     */
    declined_at: string;

    /**
     * The id of the transaction for the declined transfer.
     */
    declined_transaction_id: string;

    /**
     * The reason for the transfer decline.
     *
     * - `ach_route_canceled` - The account number is canceled.
     * - `ach_route_disabled` - The account number is disabled.
     * - `breaches_limit` - The transaction would cause an Increase limit to be
     *   exceeded.
     * - `entity_not_active` - The account's entity is not active.
     * - `group_locked` - Your account is inactive.
     * - `transaction_not_allowed` - The transaction is not allowed per Increase's
     *   terms.
     * - `user_initiated` - Your integration declined this transfer via the API.
     * - `insufficient_funds` - Your account contains insufficient funds.
     * - `returned_per_odfi_request` - The originating financial institution asked for
     *   this transfer to be returned. The receiving bank is complying with the
     *   request.
     * - `authorization_revoked_by_customer` - The customer no longer authorizes this
     *   transaction.
     * - `payment_stopped` - The customer asked for the payment to be stopped.
     * - `customer_advised_unauthorized_improper_ineligible_or_incomplete` - The
     *   customer advises that the debit was unauthorized.
     * - `representative_payee_deceased_or_unable_to_continue_in_that_capacity` - The
     *   payee is deceased.
     * - `beneficiary_or_account_holder_deceased` - The account holder is deceased.
     * - `credit_entry_refused_by_receiver` - The customer refused a credit entry.
     * - `duplicate_entry` - The account holder identified this transaction as a
     *   duplicate.
     * - `corporate_customer_advised_not_authorized` - The corporate customer no longer
     *   authorizes this transaction.
     */
    reason:
      | 'ach_route_canceled'
      | 'ach_route_disabled'
      | 'breaches_limit'
      | 'entity_not_active'
      | 'group_locked'
      | 'transaction_not_allowed'
      | 'user_initiated'
      | 'insufficient_funds'
      | 'returned_per_odfi_request'
      | 'authorization_revoked_by_customer'
      | 'payment_stopped'
      | 'customer_advised_unauthorized_improper_ineligible_or_incomplete'
      | 'representative_payee_deceased_or_unable_to_continue_in_that_capacity'
      | 'beneficiary_or_account_holder_deceased'
      | 'credit_entry_refused_by_receiver'
      | 'duplicate_entry'
      | 'corporate_customer_advised_not_authorized';
  }

  /**
   * If the Inbound ACH Transfer has a Standard Entry Class Code of IAT, this will
   * contain fields pertaining to the International ACH Transaction.
   */
  export interface InternationalAddenda {
    /**
     * The [ISO 3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2), Alpha-2
     * country code of the destination country.
     */
    destination_country_code: string;

    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code for the
     * destination bank account.
     */
    destination_currency_code: string;

    /**
     * A description of how the foreign exchange rate was calculated.
     *
     * - `fixed_to_variable` - The originator chose an amount in their own currency.
     *   The settled amount in USD was converted using the exchange rate.
     * - `variable_to_fixed` - The originator chose an amount to settle in USD. The
     *   originator's amount was variable; known only after the foreign exchange
     *   conversion.
     * - `fixed_to_fixed` - The amount was originated and settled as a fixed amount in
     *   USD. There is no foreign exchange conversion.
     */
    foreign_exchange_indicator: 'fixed_to_variable' | 'variable_to_fixed' | 'fixed_to_fixed';

    /**
     * Depending on the `foreign_exchange_reference_indicator`, an exchange rate or a
     * reference to a well-known rate.
     */
    foreign_exchange_reference: string | null;

    /**
     * An instruction of how to interpret the `foreign_exchange_reference` field for
     * this Transaction.
     *
     * - `foreign_exchange_rate` - The ACH file contains a foreign exchange rate.
     * - `foreign_exchange_reference_number` - The ACH file contains a reference to a
     *   well-known foreign exchange rate.
     * - `blank` - There is no foreign exchange for this transfer, so the
     *   `foreign_exchange_reference` field is blank.
     */
    foreign_exchange_reference_indicator:
      | 'foreign_exchange_rate'
      | 'foreign_exchange_reference_number'
      | 'blank';

    /**
     * The amount in the minor unit of the foreign payment currency. For dollars, for
     * example, this is cents.
     */
    foreign_payment_amount: number;

    /**
     * A reference number in the foreign banking infrastructure.
     */
    foreign_trace_number: string | null;

    /**
     * The type of transfer. Set by the originator.
     *
     * - `annuity` - Sent as `ANN` in the Nacha file.
     * - `business_or_commercial` - Sent as `BUS` in the Nacha file.
     * - `deposit` - Sent as `DEP` in the Nacha file.
     * - `loan` - Sent as `LOA` in the Nacha file.
     * - `miscellaneous` - Sent as `MIS` in the Nacha file.
     * - `mortgage` - Sent as `MOR` in the Nacha file.
     * - `pension` - Sent as `PEN` in the Nacha file.
     * - `remittance` - Sent as `REM` in the Nacha file.
     * - `rent_or_lease` - Sent as `RLS` in the Nacha file.
     * - `salary_or_payroll` - Sent as `SAL` in the Nacha file.
     * - `tax` - Sent as `TAX` in the Nacha file.
     * - `accounts_receivable` - Sent as `ARC` in the Nacha file.
     * - `back_office_conversion` - Sent as `BOC` in the Nacha file.
     * - `machine_transfer` - Sent as `MTE` in the Nacha file.
     * - `point_of_purchase` - Sent as `POP` in the Nacha file.
     * - `point_of_sale` - Sent as `POS` in the Nacha file.
     * - `represented_check` - Sent as `RCK` in the Nacha file.
     * - `shared_network_transaction` - Sent as `SHR` in the Nacha file.
     * - `telphone_initiated` - Sent as `TEL` in the Nacha file.
     * - `internet_initiated` - Sent as `WEB` in the Nacha file.
     */
    international_transaction_type_code:
      | 'annuity'
      | 'business_or_commercial'
      | 'deposit'
      | 'loan'
      | 'miscellaneous'
      | 'mortgage'
      | 'pension'
      | 'remittance'
      | 'rent_or_lease'
      | 'salary_or_payroll'
      | 'tax'
      | 'accounts_receivable'
      | 'back_office_conversion'
      | 'machine_transfer'
      | 'point_of_purchase'
      | 'point_of_sale'
      | 'represented_check'
      | 'shared_network_transaction'
      | 'telphone_initiated'
      | 'internet_initiated';

    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code for the
     * originating bank account.
     */
    originating_currency_code: string;

    /**
     * The [ISO 3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2), Alpha-2
     * country code of the originating branch country.
     */
    originating_depository_financial_institution_branch_country: string;

    /**
     * An identifier for the originating bank. One of an International Bank Account
     * Number (IBAN) bank identifier, SWIFT Bank Identification Code (BIC), or a
     * domestic identifier like a US Routing Number.
     */
    originating_depository_financial_institution_id: string;

    /**
     * An instruction of how to interpret the
     * `originating_depository_financial_institution_id` field for this Transaction.
     *
     * - `national_clearing_system_number` - A domestic clearing system number. In the
     *   US, for example, this is the American Banking Association (ABA) routing
     *   number.
     * - `bic_code` - The SWIFT Bank Identifier Code (BIC) of the bank.
     * - `iban` - An International Bank Account Number.
     */
    originating_depository_financial_institution_id_qualifier:
      | 'national_clearing_system_number'
      | 'bic_code'
      | 'iban';

    /**
     * The name of the originating bank. Sometimes this will refer to an American bank
     * and obscure the correspondent foreign bank.
     */
    originating_depository_financial_institution_name: string;

    /**
     * A portion of the originator address. This may be incomplete.
     */
    originator_city: string;

    /**
     * A portion of the originator address. The
     * [ISO 3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2), Alpha-2 country
     * code of the originator country.
     */
    originator_country: string;

    /**
     * An identifier for the originating company. This is generally stable across
     * multiple ACH transfers.
     */
    originator_identification: string;

    /**
     * Either the name of the originator or an intermediary money transmitter.
     */
    originator_name: string;

    /**
     * A portion of the originator address. This may be incomplete.
     */
    originator_postal_code: string | null;

    /**
     * A portion of the originator address. This may be incomplete.
     */
    originator_state_or_province: string | null;

    /**
     * A portion of the originator address. This may be incomplete.
     */
    originator_street_address: string;

    /**
     * A description field set by the originator.
     */
    payment_related_information: string | null;

    /**
     * A description field set by the originator.
     */
    payment_related_information2: string | null;

    /**
     * A portion of the receiver address. This may be incomplete.
     */
    receiver_city: string;

    /**
     * A portion of the receiver address. The
     * [ISO 3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2), Alpha-2 country
     * code of the receiver country.
     */
    receiver_country: string;

    /**
     * An identification number the originator uses for the receiver.
     */
    receiver_identification_number: string | null;

    /**
     * A portion of the receiver address. This may be incomplete.
     */
    receiver_postal_code: string | null;

    /**
     * A portion of the receiver address. This may be incomplete.
     */
    receiver_state_or_province: string | null;

    /**
     * A portion of the receiver address. This may be incomplete.
     */
    receiver_street_address: string;

    /**
     * The name of the receiver of the transfer. This is not verified by Increase.
     */
    receiving_company_or_individual_name: string;

    /**
     * The [ISO 3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2), Alpha-2
     * country code of the receiving bank country.
     */
    receiving_depository_financial_institution_country: string;

    /**
     * An identifier for the receiving bank. One of an International Bank Account
     * Number (IBAN) bank identifier, SWIFT Bank Identification Code (BIC), or a
     * domestic identifier like a US Routing Number.
     */
    receiving_depository_financial_institution_id: string;

    /**
     * An instruction of how to interpret the
     * `receiving_depository_financial_institution_id` field for this Transaction.
     *
     * - `national_clearing_system_number` - A domestic clearing system number. In the
     *   US, for example, this is the American Banking Association (ABA) routing
     *   number.
     * - `bic_code` - The SWIFT Bank Identifier Code (BIC) of the bank.
     * - `iban` - An International Bank Account Number.
     */
    receiving_depository_financial_institution_id_qualifier:
      | 'national_clearing_system_number'
      | 'bic_code'
      | 'iban';

    /**
     * The name of the receiving bank, as set by the sending financial institution.
     */
    receiving_depository_financial_institution_name: string;
  }

  /**
   * If you initiate a notification of change in response to the transfer, this will
   * contain its details.
   */
  export interface NotificationOfChange {
    /**
     * The new account number provided in the notification of change.
     */
    updated_account_number: string | null;

    /**
     * The new account number provided in the notification of change.
     */
    updated_routing_number: string | null;
  }

  /**
   * A subhash containing information about when and how the transfer settled at the
   * Federal Reserve.
   */
  export interface Settlement {
    /**
     * When the funds for this transfer settle at the recipient bank at the Federal
     * Reserve.
     */
    settled_at: string;

    /**
     * The settlement schedule this transfer follows.
     *
     * - `same_day` - The transfer is expected to settle same-day.
     * - `future_dated` - The transfer is expected to settle on a future date.
     */
    settlement_schedule: 'same_day' | 'future_dated';
  }

  /**
   * If your transfer is returned, this will contain details of the return.
   */
  export interface TransferReturn {
    /**
     * The reason for the transfer return.
     *
     * - `insufficient_funds` - The customer's account has insufficient funds. This
     *   reason is only allowed for debits. The Nacha return code is R01.
     * - `returned_per_odfi_request` - The originating financial institution asked for
     *   this transfer to be returned. The receiving bank is complying with the
     *   request. The Nacha return code is R06.
     * - `authorization_revoked_by_customer` - The customer no longer authorizes this
     *   transaction. The Nacha return code is R07.
     * - `payment_stopped` - The customer asked for the payment to be stopped. This
     *   reason is only allowed for debits. The Nacha return code is R08.
     * - `customer_advised_unauthorized_improper_ineligible_or_incomplete` - The
     *   customer advises that the debit was unauthorized. The Nacha return code is
     *   R10.
     * - `representative_payee_deceased_or_unable_to_continue_in_that_capacity` - The
     *   payee is deceased. The Nacha return code is R14.
     * - `beneficiary_or_account_holder_deceased` - The account holder is deceased. The
     *   Nacha return code is R15.
     * - `credit_entry_refused_by_receiver` - The customer refused a credit entry. This
     *   reason is only allowed for credits. The Nacha return code is R23.
     * - `duplicate_entry` - The account holder identified this transaction as a
     *   duplicate. The Nacha return code is R24.
     * - `corporate_customer_advised_not_authorized` - The corporate customer no longer
     *   authorizes this transaction. The Nacha return code is R29.
     */
    reason:
      | 'insufficient_funds'
      | 'returned_per_odfi_request'
      | 'authorization_revoked_by_customer'
      | 'payment_stopped'
      | 'customer_advised_unauthorized_improper_ineligible_or_incomplete'
      | 'representative_payee_deceased_or_unable_to_continue_in_that_capacity'
      | 'beneficiary_or_account_holder_deceased'
      | 'credit_entry_refused_by_receiver'
      | 'duplicate_entry'
      | 'corporate_customer_advised_not_authorized';

    /**
     * The time at which the transfer was returned.
     */
    returned_at: string;

    /**
     * The id of the transaction for the returned transfer.
     */
    transaction_id: string;
  }
}

export interface InboundACHTransferListParams extends PageParams {
  /**
   * Filter Inbound ACH Transfers to ones belonging to the specified Account.
   */
  account_id?: string;

  /**
   * Filter Inbound ACH Transfers to ones belonging to the specified Account Number.
   */
  account_number_id?: string;

  created_at?: InboundACHTransferListParams.CreatedAt;

  status?: InboundACHTransferListParams.Status;
}

export namespace InboundACHTransferListParams {
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
     * Filter Inbound ACH Transfers to those with the specified status. For GET
     * requests, this should be encoded as a comma-delimited string, such as
     * `?in=one,two,three`.
     */
    in?: Array<'pending' | 'declined' | 'accepted' | 'returned'>;
  }
}

export interface InboundACHTransferCreateNotificationOfChangeParams {
  /**
   * The updated account number to send in the notification of change.
   */
  updated_account_number?: string;

  /**
   * The updated routing number to send in the notification of change.
   */
  updated_routing_number?: string;
}

export interface InboundACHTransferDeclineParams {
  /**
   * The reason why this transfer will be returned. If this parameter is unset, the
   * return codes will be `payment_stopped` for debits and
   * `credit_entry_refused_by_receiver` for credits.
   *
   * - `insufficient_funds` - The customer's account has insufficient funds. This
   *   reason is only allowed for debits. The Nacha return code is R01.
   * - `returned_per_odfi_request` - The originating financial institution asked for
   *   this transfer to be returned. The receiving bank is complying with the
   *   request. The Nacha return code is R06.
   * - `authorization_revoked_by_customer` - The customer no longer authorizes this
   *   transaction. The Nacha return code is R07.
   * - `payment_stopped` - The customer asked for the payment to be stopped. This
   *   reason is only allowed for debits. The Nacha return code is R08.
   * - `customer_advised_unauthorized_improper_ineligible_or_incomplete` - The
   *   customer advises that the debit was unauthorized. The Nacha return code is
   *   R10.
   * - `representative_payee_deceased_or_unable_to_continue_in_that_capacity` - The
   *   payee is deceased. The Nacha return code is R14.
   * - `beneficiary_or_account_holder_deceased` - The account holder is deceased. The
   *   Nacha return code is R15.
   * - `credit_entry_refused_by_receiver` - The customer refused a credit entry. This
   *   reason is only allowed for credits. The Nacha return code is R23.
   * - `duplicate_entry` - The account holder identified this transaction as a
   *   duplicate. The Nacha return code is R24.
   * - `corporate_customer_advised_not_authorized` - The corporate customer no longer
   *   authorizes this transaction. The Nacha return code is R29.
   */
  reason?:
    | 'insufficient_funds'
    | 'returned_per_odfi_request'
    | 'authorization_revoked_by_customer'
    | 'payment_stopped'
    | 'customer_advised_unauthorized_improper_ineligible_or_incomplete'
    | 'representative_payee_deceased_or_unable_to_continue_in_that_capacity'
    | 'beneficiary_or_account_holder_deceased'
    | 'credit_entry_refused_by_receiver'
    | 'duplicate_entry'
    | 'corporate_customer_advised_not_authorized';
}

export interface InboundACHTransferTransferReturnParams {
  /**
   * The reason why this transfer will be returned. The most usual return codes are
   * `payment_stopped` for debits and `credit_entry_refused_by_receiver` for credits.
   *
   * - `insufficient_funds` - The customer's account has insufficient funds. This
   *   reason is only allowed for debits. The Nacha return code is R01.
   * - `authorization_revoked_by_customer` - The customer no longer authorizes this
   *   transaction. The Nacha return code is R07.
   * - `payment_stopped` - The customer asked for the payment to be stopped. This
   *   reason is only allowed for debits. The Nacha return code is R08.
   * - `customer_advised_unauthorized_improper_ineligible_or_incomplete` - The
   *   customer advises that the debit was unauthorized. The Nacha return code is
   *   R10.
   * - `representative_payee_deceased_or_unable_to_continue_in_that_capacity` - The
   *   payee is deceased. The Nacha return code is R14.
   * - `beneficiary_or_account_holder_deceased` - The account holder is deceased. The
   *   Nacha return code is R15.
   * - `credit_entry_refused_by_receiver` - The customer refused a credit entry. This
   *   reason is only allowed for credits. The Nacha return code is R23.
   * - `duplicate_entry` - The account holder identified this transaction as a
   *   duplicate. The Nacha return code is R24.
   * - `corporate_customer_advised_not_authorized` - The corporate customer no longer
   *   authorizes this transaction. The Nacha return code is R29.
   */
  reason:
    | 'insufficient_funds'
    | 'authorization_revoked_by_customer'
    | 'payment_stopped'
    | 'customer_advised_unauthorized_improper_ineligible_or_incomplete'
    | 'representative_payee_deceased_or_unable_to_continue_in_that_capacity'
    | 'beneficiary_or_account_holder_deceased'
    | 'credit_entry_refused_by_receiver'
    | 'duplicate_entry'
    | 'corporate_customer_advised_not_authorized';
}

export declare namespace InboundACHTransfers {
  export {
    type InboundACHTransfer as InboundACHTransfer,
    type InboundACHTransfersPage as InboundACHTransfersPage,
    type InboundACHTransferListParams as InboundACHTransferListParams,
    type InboundACHTransferCreateNotificationOfChangeParams as InboundACHTransferCreateNotificationOfChangeParams,
    type InboundACHTransferDeclineParams as InboundACHTransferDeclineParams,
    type InboundACHTransferTransferReturnParams as InboundACHTransferTransferReturnParams,
  };
}
