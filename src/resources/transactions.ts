// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Transactions extends APIResource {
  /**
   * Retrieve a Transaction
   *
   * @example
   * ```ts
   * const transaction = await client.transactions.retrieve(
   *   'transaction_uyrp7fld2ium70oa7oi',
   * );
   * ```
   */
  retrieve(transactionID: string, options?: RequestOptions): APIPromise<Transaction> {
    return this._client.get(path`/transactions/${transactionID}`, options);
  }

  /**
   * List Transactions
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const transaction of client.transactions.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: TransactionListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<TransactionsPage, Transaction> {
    return this._client.getAPIList('/transactions', Page<Transaction>, { query, ...options });
  }
}

export type TransactionsPage = Page<Transaction>;

/**
 * Transactions are the immutable additions and removals of money from your bank
 * account. They're the equivalent of line items on your bank statement. To learn
 * more, see [Transactions and Transfers](/documentation/transactions-transfers).
 */
export interface Transaction {
  /**
   * The Transaction identifier.
   */
  id: string;

  /**
   * The identifier for the Account the Transaction belongs to.
   */
  account_id: string;

  /**
   * The Transaction amount in the minor unit of its currency. For dollars, for
   * example, this is cents.
   */
  amount: number;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date on which the
   * Transaction occurred.
   */
  created_at: string;

  /**
   * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the
   * Transaction's currency. This will match the currency on the Transaction's
   * Account.
   *
   * - `USD` - US Dollar (USD)
   */
  currency: 'USD';

  /**
   * An informational message describing this transaction. Use the fields in `source`
   * to get more detailed information. This field appears as the line-item on the
   * statement.
   */
  description: string;

  /**
   * The identifier for the route this Transaction came through. Routes are things
   * like cards and ACH details.
   */
  route_id: string | null;

  /**
   * The type of the route this Transaction came through.
   *
   * - `account_number` - An Account Number.
   * - `card` - A Card.
   * - `lockbox` - A Lockbox.
   */
  route_type: 'account_number' | 'card' | 'lockbox' | null;

  /**
   * This is an object giving more details on the network-level event that caused the
   * Transaction. Note that for backwards compatibility reasons, additional
   * undocumented keys may appear in this object. These should be treated as
   * deprecated and will be removed in the future.
   */
  source: Transaction.Source;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `transaction`.
   */
  type: 'transaction';

  [k: string]: unknown;
}

export namespace Transaction {
  /**
   * This is an object giving more details on the network-level event that caused the
   * Transaction. Note that for backwards compatibility reasons, additional
   * undocumented keys may appear in this object. These should be treated as
   * deprecated and will be removed in the future.
   */
  export interface Source {
    /**
     * The type of the resource. We may add additional possible values for this enum
     * over time; your application should be able to handle such additions gracefully.
     *
     * - `account_transfer_intention` - Account Transfer Intention: details will be
     *   under the `account_transfer_intention` object.
     * - `ach_transfer_intention` - ACH Transfer Intention: details will be under the
     *   `ach_transfer_intention` object.
     * - `ach_transfer_rejection` - ACH Transfer Rejection: details will be under the
     *   `ach_transfer_rejection` object.
     * - `ach_transfer_return` - ACH Transfer Return: details will be under the
     *   `ach_transfer_return` object.
     * - `cashback_payment` - Cashback Payment: details will be under the
     *   `cashback_payment` object.
     * - `card_dispute_acceptance` - Legacy Card Dispute Acceptance: details will be
     *   under the `card_dispute_acceptance` object.
     * - `card_dispute_financial` - Card Dispute Financial: details will be under the
     *   `card_dispute_financial` object.
     * - `card_dispute_loss` - Legacy Card Dispute Loss: details will be under the
     *   `card_dispute_loss` object.
     * - `card_refund` - Card Refund: details will be under the `card_refund` object.
     * - `card_settlement` - Card Settlement: details will be under the
     *   `card_settlement` object.
     * - `card_financial` - Card Financial: details will be under the `card_financial`
     *   object.
     * - `card_revenue_payment` - Card Revenue Payment: details will be under the
     *   `card_revenue_payment` object.
     * - `check_deposit_acceptance` - Check Deposit Acceptance: details will be under
     *   the `check_deposit_acceptance` object.
     * - `check_deposit_return` - Check Deposit Return: details will be under the
     *   `check_deposit_return` object.
     * - `fednow_transfer_acknowledgement` - FedNow Transfer Acknowledgement: details
     *   will be under the `fednow_transfer_acknowledgement` object.
     * - `check_transfer_deposit` - Check Transfer Deposit: details will be under the
     *   `check_transfer_deposit` object.
     * - `fee_payment` - Fee Payment: details will be under the `fee_payment` object.
     * - `inbound_ach_transfer` - Inbound ACH Transfer Intention: details will be under
     *   the `inbound_ach_transfer` object.
     * - `inbound_ach_transfer_return_intention` - Inbound ACH Transfer Return
     *   Intention: details will be under the `inbound_ach_transfer_return_intention`
     *   object.
     * - `inbound_check_deposit_return_intention` - Inbound Check Deposit Return
     *   Intention: details will be under the `inbound_check_deposit_return_intention`
     *   object.
     * - `inbound_check_adjustment` - Inbound Check Adjustment: details will be under
     *   the `inbound_check_adjustment` object.
     * - `inbound_fednow_transfer_confirmation` - Inbound FedNow Transfer Confirmation:
     *   details will be under the `inbound_fednow_transfer_confirmation` object.
     * - `inbound_real_time_payments_transfer_confirmation` - Inbound Real-Time
     *   Payments Transfer Confirmation: details will be under the
     *   `inbound_real_time_payments_transfer_confirmation` object.
     * - `inbound_wire_reversal` - Inbound Wire Reversal: details will be under the
     *   `inbound_wire_reversal` object.
     * - `inbound_wire_transfer` - Inbound Wire Transfer Intention: details will be
     *   under the `inbound_wire_transfer` object.
     * - `inbound_wire_transfer_reversal` - Inbound Wire Transfer Reversal Intention:
     *   details will be under the `inbound_wire_transfer_reversal` object.
     * - `interest_payment` - Interest Payment: details will be under the
     *   `interest_payment` object.
     * - `internal_source` - Internal Source: details will be under the
     *   `internal_source` object.
     * - `real_time_payments_transfer_acknowledgement` - Real-Time Payments Transfer
     *   Acknowledgement: details will be under the
     *   `real_time_payments_transfer_acknowledgement` object.
     * - `sample_funds` - Sample Funds: details will be under the `sample_funds`
     *   object.
     * - `wire_transfer_intention` - Wire Transfer Intention: details will be under the
     *   `wire_transfer_intention` object.
     * - `swift_transfer_intention` - Swift Transfer Intention: details will be under
     *   the `swift_transfer_intention` object.
     * - `swift_transfer_return` - Swift Transfer Return: details will be under the
     *   `swift_transfer_return` object.
     * - `card_push_transfer_acceptance` - Card Push Transfer Acceptance: details will
     *   be under the `card_push_transfer_acceptance` object.
     * - `account_revenue_payment` - Account Revenue Payment: details will be under the
     *   `account_revenue_payment` object.
     * - `blockchain_onramp_transfer_intention` - Blockchain On-Ramp Transfer
     *   Intention: details will be under the `blockchain_onramp_transfer_intention`
     *   object.
     * - `blockchain_offramp_transfer_settlement` - Blockchain Off-Ramp Transfer
     *   Settlement: details will be under the `blockchain_offramp_transfer_settlement`
     *   object.
     * - `other` - The Transaction was made for an undocumented or deprecated reason.
     */
    category:
      | 'account_transfer_intention'
      | 'ach_transfer_intention'
      | 'ach_transfer_rejection'
      | 'ach_transfer_return'
      | 'cashback_payment'
      | 'card_dispute_acceptance'
      | 'card_dispute_financial'
      | 'card_dispute_loss'
      | 'card_refund'
      | 'card_settlement'
      | 'card_financial'
      | 'card_revenue_payment'
      | 'check_deposit_acceptance'
      | 'check_deposit_return'
      | 'fednow_transfer_acknowledgement'
      | 'check_transfer_deposit'
      | 'fee_payment'
      | 'inbound_ach_transfer'
      | 'inbound_ach_transfer_return_intention'
      | 'inbound_check_deposit_return_intention'
      | 'inbound_check_adjustment'
      | 'inbound_fednow_transfer_confirmation'
      | 'inbound_real_time_payments_transfer_confirmation'
      | 'inbound_wire_reversal'
      | 'inbound_wire_transfer'
      | 'inbound_wire_transfer_reversal'
      | 'interest_payment'
      | 'internal_source'
      | 'real_time_payments_transfer_acknowledgement'
      | 'sample_funds'
      | 'wire_transfer_intention'
      | 'swift_transfer_intention'
      | 'swift_transfer_return'
      | 'card_push_transfer_acceptance'
      | 'account_revenue_payment'
      | 'blockchain_onramp_transfer_intention'
      | 'blockchain_offramp_transfer_settlement'
      | 'other';

    /**
     * An Account Revenue Payment object. This field will be present in the JSON
     * response if and only if `category` is equal to `account_revenue_payment`. An
     * Account Revenue Payment represents a payment made to an account from the bank.
     * Account revenue is a type of non-interest income.
     */
    account_revenue_payment?: Source.AccountRevenuePayment | null;

    /**
     * An Account Transfer Intention object. This field will be present in the JSON
     * response if and only if `category` is equal to `account_transfer_intention`. Two
     * Account Transfer Intentions are created from each Account Transfer. One
     * decrements the source account, and the other increments the destination account.
     */
    account_transfer_intention?: Source.AccountTransferIntention | null;

    /**
     * An ACH Transfer Intention object. This field will be present in the JSON
     * response if and only if `category` is equal to `ach_transfer_intention`. An ACH
     * Transfer Intention is created from an ACH Transfer. It reflects the intention to
     * move money into or out of an Increase account via the ACH network.
     */
    ach_transfer_intention?: Source.ACHTransferIntention | null;

    /**
     * An ACH Transfer Rejection object. This field will be present in the JSON
     * response if and only if `category` is equal to `ach_transfer_rejection`. An ACH
     * Transfer Rejection is created when an ACH Transfer is rejected by Increase. It
     * offsets the ACH Transfer Intention. These rejections are rare.
     */
    ach_transfer_rejection?: Source.ACHTransferRejection | null;

    /**
     * An ACH Transfer Return object. This field will be present in the JSON response
     * if and only if `category` is equal to `ach_transfer_return`. An ACH Transfer
     * Return is created when an ACH Transfer is returned by the receiving bank. It
     * offsets the ACH Transfer Intention. ACH Transfer Returns usually occur within
     * the first two business days after the transfer is initiated, but can occur much
     * later.
     */
    ach_transfer_return?: Source.ACHTransferReturn | null;

    /**
     * A Blockchain Off-Ramp Transfer Settlement object. This field will be present in
     * the JSON response if and only if `category` is equal to
     * `blockchain_offramp_transfer_settlement`.
     */
    blockchain_offramp_transfer_settlement?: Source.BlockchainOfframpTransferSettlement | null;

    /**
     * A Blockchain On-Ramp Transfer Intention object. This field will be present in
     * the JSON response if and only if `category` is equal to
     * `blockchain_onramp_transfer_intention`.
     */
    blockchain_onramp_transfer_intention?: Source.BlockchainOnrampTransferIntention | null;

    /**
     * A Legacy Card Dispute Acceptance object. This field will be present in the JSON
     * response if and only if `category` is equal to `card_dispute_acceptance`.
     * Contains the details of a successful Card Dispute.
     */
    card_dispute_acceptance?: Source.CardDisputeAcceptance | null;

    /**
     * A Card Dispute Financial object. This field will be present in the JSON response
     * if and only if `category` is equal to `card_dispute_financial`. Financial event
     * related to a Card Dispute.
     */
    card_dispute_financial?: Source.CardDisputeFinancial | null;

    /**
     * A Legacy Card Dispute Loss object. This field will be present in the JSON
     * response if and only if `category` is equal to `card_dispute_loss`. Contains the
     * details of a lost Card Dispute.
     */
    card_dispute_loss?: Source.CardDisputeLoss | null;

    /**
     * A Card Financial object. This field will be present in the JSON response if and
     * only if `category` is equal to `card_financial`. Card Financials are temporary
     * holds placed on a customer's funds with the intent to later clear a transaction.
     */
    card_financial?: Source.CardFinancial | null;

    /**
     * A Card Push Transfer Acceptance object. This field will be present in the JSON
     * response if and only if `category` is equal to `card_push_transfer_acceptance`.
     * A Card Push Transfer Acceptance is created when an Outbound Card Push Transfer
     * sent from Increase is accepted by the receiving bank.
     */
    card_push_transfer_acceptance?: Source.CardPushTransferAcceptance | null;

    /**
     * A Card Refund object. This field will be present in the JSON response if and
     * only if `category` is equal to `card_refund`. Card Refunds move money back to
     * the cardholder. While they are usually connected to a Card Settlement, an
     * acquirer can also refund money directly to a card without relation to a
     * transaction.
     */
    card_refund?: Source.CardRefund | null;

    /**
     * A Card Revenue Payment object. This field will be present in the JSON response
     * if and only if `category` is equal to `card_revenue_payment`. Card Revenue
     * Payments reflect earnings from fees on card transactions.
     */
    card_revenue_payment?: Source.CardRevenuePayment | null;

    /**
     * A Card Settlement object. This field will be present in the JSON response if and
     * only if `category` is equal to `card_settlement`. Card Settlements are card
     * transactions that have cleared and settled. While a settlement is usually
     * preceded by an authorization, an acquirer can also directly clear a transaction
     * without first authorizing it.
     */
    card_settlement?: Source.CardSettlement | null;

    /**
     * A Cashback Payment object. This field will be present in the JSON response if
     * and only if `category` is equal to `cashback_payment`. A Cashback Payment
     * represents the cashback paid to a cardholder for a given period. Cashback is
     * usually paid monthly for the prior month's transactions.
     */
    cashback_payment?: Source.CashbackPayment | null;

    /**
     * A Check Deposit Acceptance object. This field will be present in the JSON
     * response if and only if `category` is equal to `check_deposit_acceptance`. A
     * Check Deposit Acceptance is created when a Check Deposit is processed and its
     * details confirmed. Check Deposits may be returned by the receiving bank, which
     * will appear as a Check Deposit Return.
     */
    check_deposit_acceptance?: Source.CheckDepositAcceptance | null;

    /**
     * A Check Deposit Return object. This field will be present in the JSON response
     * if and only if `category` is equal to `check_deposit_return`. A Check Deposit
     * Return is created when a Check Deposit is returned by the bank holding the
     * account it was drawn against. Check Deposits may be returned for a variety of
     * reasons, including insufficient funds or a mismatched account number. Usually,
     * checks are returned within the first 7 days after the deposit is made.
     */
    check_deposit_return?: Source.CheckDepositReturn | null;

    /**
     * A Check Transfer Deposit object. This field will be present in the JSON response
     * if and only if `category` is equal to `check_transfer_deposit`. An Inbound Check
     * is a check drawn on an Increase account that has been deposited by an external
     * bank account. These types of checks are not pre-registered.
     */
    check_transfer_deposit?: Source.CheckTransferDeposit | null;

    /**
     * A FedNow Transfer Acknowledgement object. This field will be present in the JSON
     * response if and only if `category` is equal to
     * `fednow_transfer_acknowledgement`. A FedNow Transfer Acknowledgement is created
     * when a FedNow Transfer sent from Increase is acknowledged by the receiving bank.
     */
    fednow_transfer_acknowledgement?: Source.FednowTransferAcknowledgement | null;

    /**
     * A Fee Payment object. This field will be present in the JSON response if and
     * only if `category` is equal to `fee_payment`. A Fee Payment represents a payment
     * made to Increase.
     */
    fee_payment?: Source.FeePayment | null;

    /**
     * An Inbound ACH Transfer Intention object. This field will be present in the JSON
     * response if and only if `category` is equal to `inbound_ach_transfer`. An
     * Inbound ACH Transfer Intention is created when an ACH transfer is initiated at
     * another bank and received by Increase.
     */
    inbound_ach_transfer?: Source.InboundACHTransfer | null;

    /**
     * An Inbound ACH Transfer Return Intention object. This field will be present in
     * the JSON response if and only if `category` is equal to
     * `inbound_ach_transfer_return_intention`. An Inbound ACH Transfer Return
     * Intention is created when an ACH transfer is initiated at another bank and
     * returned by Increase.
     */
    inbound_ach_transfer_return_intention?: Source.InboundACHTransferReturnIntention | null;

    /**
     * An Inbound Check Adjustment object. This field will be present in the JSON
     * response if and only if `category` is equal to `inbound_check_adjustment`. An
     * Inbound Check Adjustment is created when Increase receives an adjustment for a
     * check or return deposited through Check21.
     */
    inbound_check_adjustment?: Source.InboundCheckAdjustment | null;

    /**
     * An Inbound Check Deposit Return Intention object. This field will be present in
     * the JSON response if and only if `category` is equal to
     * `inbound_check_deposit_return_intention`. An Inbound Check Deposit Return
     * Intention is created when Increase receives an Inbound Check and the User
     * requests that it be returned.
     */
    inbound_check_deposit_return_intention?: Source.InboundCheckDepositReturnIntention | null;

    /**
     * An Inbound FedNow Transfer Confirmation object. This field will be present in
     * the JSON response if and only if `category` is equal to
     * `inbound_fednow_transfer_confirmation`. An Inbound FedNow Transfer Confirmation
     * is created when a FedNow transfer is initiated at another bank and received by
     * Increase.
     */
    inbound_fednow_transfer_confirmation?: Source.InboundFednowTransferConfirmation | null;

    /**
     * An Inbound Real-Time Payments Transfer Confirmation object. This field will be
     * present in the JSON response if and only if `category` is equal to
     * `inbound_real_time_payments_transfer_confirmation`. An Inbound Real-Time
     * Payments Transfer Confirmation is created when a Real-Time Payments transfer is
     * initiated at another bank and received by Increase.
     */
    inbound_real_time_payments_transfer_confirmation?: Source.InboundRealTimePaymentsTransferConfirmation | null;

    /**
     * An Inbound Wire Reversal object. This field will be present in the JSON response
     * if and only if `category` is equal to `inbound_wire_reversal`. An Inbound Wire
     * Reversal represents a reversal of a wire transfer that was initiated via
     * Increase. The other bank is sending the money back. This most often happens when
     * the original destination account details were incorrect.
     */
    inbound_wire_reversal?: Source.InboundWireReversal | null;

    /**
     * An Inbound Wire Transfer Intention object. This field will be present in the
     * JSON response if and only if `category` is equal to `inbound_wire_transfer`. An
     * Inbound Wire Transfer Intention is created when a wire transfer is initiated at
     * another bank and received by Increase.
     */
    inbound_wire_transfer?: Source.InboundWireTransfer | null;

    /**
     * An Inbound Wire Transfer Reversal Intention object. This field will be present
     * in the JSON response if and only if `category` is equal to
     * `inbound_wire_transfer_reversal`. An Inbound Wire Transfer Reversal Intention is
     * created when Increase has received a wire and the User requests that it be
     * reversed.
     */
    inbound_wire_transfer_reversal?: Source.InboundWireTransferReversal | null;

    /**
     * An Interest Payment object. This field will be present in the JSON response if
     * and only if `category` is equal to `interest_payment`. An Interest Payment
     * represents a payment of interest on an account. Interest is usually paid
     * monthly.
     */
    interest_payment?: Source.InterestPayment | null;

    /**
     * An Internal Source object. This field will be present in the JSON response if
     * and only if `category` is equal to `internal_source`. A transaction between the
     * user and Increase. See the `reason` attribute for more information.
     */
    internal_source?: Source.InternalSource | null;

    /**
     * If the category of this Transaction source is equal to `other`, this field will
     * contain an empty object, otherwise it will contain null.
     */
    other?: Source.Other | null;

    /**
     * A Real-Time Payments Transfer Acknowledgement object. This field will be present
     * in the JSON response if and only if `category` is equal to
     * `real_time_payments_transfer_acknowledgement`. A Real-Time Payments Transfer
     * Acknowledgement is created when a Real-Time Payments Transfer sent from Increase
     * is acknowledged by the receiving bank.
     */
    real_time_payments_transfer_acknowledgement?: Source.RealTimePaymentsTransferAcknowledgement | null;

    /**
     * A Sample Funds object. This field will be present in the JSON response if and
     * only if `category` is equal to `sample_funds`. Sample funds for testing
     * purposes.
     */
    sample_funds?: Source.SampleFunds | null;

    /**
     * A Swift Transfer Intention object. This field will be present in the JSON
     * response if and only if `category` is equal to `swift_transfer_intention`. A
     * Swift Transfer initiated via Increase.
     */
    swift_transfer_intention?: Source.SwiftTransferIntention | null;

    /**
     * A Swift Transfer Return object. This field will be present in the JSON response
     * if and only if `category` is equal to `swift_transfer_return`. A Swift Transfer
     * Return is created when a Swift Transfer is returned by the receiving bank.
     */
    swift_transfer_return?: Source.SwiftTransferReturn | null;

    /**
     * A Wire Transfer Intention object. This field will be present in the JSON
     * response if and only if `category` is equal to `wire_transfer_intention`. A Wire
     * Transfer initiated via Increase and sent to a different bank.
     */
    wire_transfer_intention?: Source.WireTransferIntention | null;

    [k: string]: unknown;
  }

  export namespace Source {
    /**
     * An Account Revenue Payment object. This field will be present in the JSON
     * response if and only if `category` is equal to `account_revenue_payment`. An
     * Account Revenue Payment represents a payment made to an account from the bank.
     * Account revenue is a type of non-interest income.
     */
    export interface AccountRevenuePayment {
      /**
       * The account on which the account revenue was accrued.
       */
      accrued_on_account_id: string;

      /**
       * The end of the period for which this transaction paid account revenue.
       */
      period_end: string;

      /**
       * The start of the period for which this transaction paid account revenue.
       */
      period_start: string;

      [k: string]: unknown;
    }

    /**
     * An Account Transfer Intention object. This field will be present in the JSON
     * response if and only if `category` is equal to `account_transfer_intention`. Two
     * Account Transfer Intentions are created from each Account Transfer. One
     * decrements the source account, and the other increments the destination account.
     */
    export interface AccountTransferIntention {
      /**
       * The pending amount in the minor unit of the transaction's currency. For dollars,
       * for example, this is cents.
       */
      amount: number;

      /**
       * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the destination
       * account currency.
       *
       * - `USD` - US Dollar (USD)
       */
      currency: 'USD';

      /**
       * The description you chose to give the transfer.
       */
      description: string;

      /**
       * The identifier of the Account to where the Account Transfer was sent.
       */
      destination_account_id: string;

      /**
       * The identifier of the Account from where the Account Transfer was sent.
       */
      source_account_id: string;

      /**
       * The identifier of the Account Transfer that led to this Pending Transaction.
       */
      transfer_id: string;

      [k: string]: unknown;
    }

    /**
     * An ACH Transfer Intention object. This field will be present in the JSON
     * response if and only if `category` is equal to `ach_transfer_intention`. An ACH
     * Transfer Intention is created from an ACH Transfer. It reflects the intention to
     * move money into or out of an Increase account via the ACH network.
     */
    export interface ACHTransferIntention {
      /**
       * The account number for the destination account.
       */
      account_number: string;

      /**
       * The amount in the minor unit of the transaction's currency. For dollars, for
       * example, this is cents.
       */
      amount: number;

      /**
       * The American Bankers' Association (ABA) Routing Transit Number (RTN) for the
       * destination account.
       */
      routing_number: string;

      /**
       * A description set when the ACH Transfer was created.
       */
      statement_descriptor: string;

      /**
       * The identifier of the ACH Transfer that led to this Transaction.
       */
      transfer_id: string;

      [k: string]: unknown;
    }

    /**
     * An ACH Transfer Rejection object. This field will be present in the JSON
     * response if and only if `category` is equal to `ach_transfer_rejection`. An ACH
     * Transfer Rejection is created when an ACH Transfer is rejected by Increase. It
     * offsets the ACH Transfer Intention. These rejections are rare.
     */
    export interface ACHTransferRejection {
      /**
       * The identifier of the ACH Transfer that led to this Transaction.
       */
      transfer_id: string;

      [k: string]: unknown;
    }

    /**
     * An ACH Transfer Return object. This field will be present in the JSON response
     * if and only if `category` is equal to `ach_transfer_return`. An ACH Transfer
     * Return is created when an ACH Transfer is returned by the receiving bank. It
     * offsets the ACH Transfer Intention. ACH Transfer Returns usually occur within
     * the first two business days after the transfer is initiated, but can occur much
     * later.
     */
    export interface ACHTransferReturn {
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
     * A Blockchain Off-Ramp Transfer Settlement object. This field will be present in
     * the JSON response if and only if `category` is equal to
     * `blockchain_offramp_transfer_settlement`.
     */
    export interface BlockchainOfframpTransferSettlement {
      /**
       * The identifier of the Blockchain Address the funds were received at.
       */
      source_blockchain_address_id: string;

      /**
       * The identifier of the Blockchain Off-Ramp Transfer that led to this Transaction.
       */
      transfer_id: string;

      [k: string]: unknown;
    }

    /**
     * A Blockchain On-Ramp Transfer Intention object. This field will be present in
     * the JSON response if and only if `category` is equal to
     * `blockchain_onramp_transfer_intention`.
     */
    export interface BlockchainOnrampTransferIntention {
      /**
       * The blockchain address the funds were sent to.
       */
      destination_blockchain_address: string;

      /**
       * The identifier of the Blockchain On-Ramp Transfer that led to this Transaction.
       */
      transfer_id: string;

      [k: string]: unknown;
    }

    /**
     * A Legacy Card Dispute Acceptance object. This field will be present in the JSON
     * response if and only if `category` is equal to `card_dispute_acceptance`.
     * Contains the details of a successful Card Dispute.
     */
    export interface CardDisputeAcceptance {
      /**
       * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
       * the Card Dispute was accepted.
       */
      accepted_at: string;

      /**
       * The identifier of the Transaction that was created to return the disputed funds
       * to your account.
       */
      transaction_id: string;

      [k: string]: unknown;
    }

    /**
     * A Card Dispute Financial object. This field will be present in the JSON response
     * if and only if `category` is equal to `card_dispute_financial`. Financial event
     * related to a Card Dispute.
     */
    export interface CardDisputeFinancial {
      /**
       * The amount of the financial event.
       */
      amount: number;

      /**
       * The network that the Card Dispute is associated with.
       *
       * - `visa` - Visa: details will be under the `visa` object.
       * - `pulse` - Pulse: details will be under the `pulse` object.
       */
      network: 'visa' | 'pulse';

      /**
       * The identifier of the Transaction that was created to credit or debit the
       * disputed funds to or from your account.
       */
      transaction_id: string;

      /**
       * Information for events related to card dispute for card payments processed over
       * Visa's network. This field will be present in the JSON response if and only if
       * `network` is equal to `visa`.
       */
      visa: CardDisputeFinancial.Visa | null;

      [k: string]: unknown;
    }

    export namespace CardDisputeFinancial {
      /**
       * Information for events related to card dispute for card payments processed over
       * Visa's network. This field will be present in the JSON response if and only if
       * `network` is equal to `visa`.
       */
      export interface Visa {
        /**
         * The type of card dispute financial event.
         *
         * - `chargeback_submitted` - The user's chargeback was submitted.
         * - `merchant_prearbitration_decline_submitted` - The user declined the merchant's
         *   pre-arbitration submission.
         * - `merchant_prearbitration_received` - The merchant's pre-arbitration submission
         *   was received.
         * - `represented` - The transaction was re-presented by the merchant.
         * - `user_prearbitration_decline_received` - The user's pre-arbitration was
         *   declined by the merchant.
         * - `user_prearbitration_submitted` - The user's pre-arbitration was submitted.
         * - `user_withdrawal_submitted` - The user withdrew from the dispute.
         */
        event_type:
          | 'chargeback_submitted'
          | 'merchant_prearbitration_decline_submitted'
          | 'merchant_prearbitration_received'
          | 'represented'
          | 'user_prearbitration_decline_received'
          | 'user_prearbitration_submitted'
          | 'user_withdrawal_submitted';
      }
    }

    /**
     * A Legacy Card Dispute Loss object. This field will be present in the JSON
     * response if and only if `category` is equal to `card_dispute_loss`. Contains the
     * details of a lost Card Dispute.
     */
    export interface CardDisputeLoss {
      /**
       * Why the Card Dispute was lost.
       */
      explanation: string;

      /**
       * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
       * the Card Dispute was lost.
       */
      lost_at: string;

      /**
       * The identifier of the Transaction that was created to debit the disputed funds
       * from your account.
       */
      transaction_id: string;

      [k: string]: unknown;
    }

    /**
     * A Card Financial object. This field will be present in the JSON response if and
     * only if `category` is equal to `card_financial`. Card Financials are temporary
     * holds placed on a customer's funds with the intent to later clear a transaction.
     */
    export interface CardFinancial {
      /**
       * The Card Financial identifier.
       */
      id: string;

      /**
       * Whether this financial was approved by Increase, the card network through
       * stand-in processing, or the user through a real-time decision.
       *
       * - `user` - This object was actioned by the user through a real-time decision.
       * - `increase` - This object was actioned by Increase without user intervention.
       * - `network` - This object was actioned by the network, through stand-in
       *   processing.
       */
      actioner: 'user' | 'increase' | 'network';

      /**
       * Additional amounts associated with the card authorization, such as ATM
       * surcharges fees. These are usually a subset of the `amount` field and are used
       * to provide more detailed information about the transaction.
       */
      additional_amounts: CardFinancial.AdditionalAmounts;

      /**
       * The pending amount in the minor unit of the transaction's currency. For dollars,
       * for example, this is cents.
       */
      amount: number;

      /**
       * The ID of the Card Payment this transaction belongs to.
       */
      card_payment_id: string;

      /**
       * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the
       * transaction's currency.
       *
       * - `USD` - US Dollar (USD)
       */
      currency: 'USD';

      /**
       * If the authorization was made via a Digital Wallet Token (such as an Apple Pay
       * purchase), the identifier of the token that was used.
       */
      digital_wallet_token_id: string | null;

      /**
       * The direction describes the direction the funds will move, either from the
       * cardholder to the merchant or from the merchant to the cardholder.
       *
       * - `settlement` - A regular card authorization where funds are debited from the
       *   cardholder.
       * - `refund` - A refund card authorization, sometimes referred to as a credit
       *   voucher authorization, where funds are credited to the cardholder.
       */
      direction: 'settlement' | 'refund';

      /**
       * The merchant identifier (commonly abbreviated as MID) of the merchant the card
       * is transacting with.
       */
      merchant_acceptor_id: string;

      /**
       * The Merchant Category Code (commonly abbreviated as MCC) of the merchant the
       * card is transacting with.
       */
      merchant_category_code: string;

      /**
       * The city the merchant resides in.
       */
      merchant_city: string | null;

      /**
       * The country the merchant resides in.
       */
      merchant_country: string;

      /**
       * The merchant descriptor of the merchant the card is transacting with.
       */
      merchant_descriptor: string;

      /**
       * The merchant's postal code. For US merchants this is either a 5-digit or 9-digit
       * ZIP code, where the first 5 and last 4 are separated by a dash.
       */
      merchant_postal_code: string | null;

      /**
       * The state the merchant resides in.
       */
      merchant_state: string | null;

      /**
       * Fields specific to the `network`.
       */
      network_details: CardFinancial.NetworkDetails;

      /**
       * Network-specific identifiers for a specific request or transaction.
       */
      network_identifiers: CardFinancial.NetworkIdentifiers;

      /**
       * The risk score generated by the card network. For Visa this is the Visa Advanced
       * Authorization risk score, from 0 to 99, where 99 is the riskiest. For Pulse the
       * score is from 0 to 999, where 999 is the riskiest.
       */
      network_risk_score: number | null;

      /**
       * If the authorization was made in-person with a physical card, the Physical Card
       * that was used.
       */
      physical_card_id: string | null;

      /**
       * The pending amount in the minor unit of the transaction's presentment currency.
       */
      presentment_amount: number;

      /**
       * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the
       * transaction's presentment currency.
       */
      presentment_currency: string;

      /**
       * The processing category describes the intent behind the financial, such as
       * whether it was used for bill payments or an automatic fuel dispenser.
       *
       * - `account_funding` - Account funding transactions are transactions used to
       *   e.g., fund an account or transfer funds between accounts.
       * - `automatic_fuel_dispenser` - Automatic fuel dispenser authorizations occur
       *   when a card is used at a gas pump, prior to the actual transaction amount
       *   being known. They are followed by an advice message that updates the amount of
       *   the pending transaction.
       * - `bill_payment` - A transaction used to pay a bill.
       * - `original_credit` - Original credit transactions are used to send money to a
       *   cardholder.
       * - `purchase` - A regular purchase.
       * - `quasi_cash` - Quasi-cash transactions represent purchases of items which may
       *   be convertible to cash.
       * - `refund` - A refund card authorization, sometimes referred to as a credit
       *   voucher authorization, where funds are credited to the cardholder.
       * - `cash_disbursement` - Cash disbursement transactions are used to withdraw cash
       *   from an ATM or a point of sale.
       * - `balance_inquiry` - A balance inquiry transaction is used to check the balance
       *   of an account associated with a card.
       * - `unknown` - The processing category is unknown.
       */
      processing_category:
        | 'account_funding'
        | 'automatic_fuel_dispenser'
        | 'bill_payment'
        | 'original_credit'
        | 'purchase'
        | 'quasi_cash'
        | 'refund'
        | 'cash_disbursement'
        | 'balance_inquiry'
        | 'unknown';

      /**
       * The identifier of the Real-Time Decision sent to approve or decline this
       * transaction.
       */
      real_time_decision_id: string | null;

      /**
       * The terminal identifier (commonly abbreviated as TID) of the terminal the card
       * is transacting with.
       */
      terminal_id: string | null;

      /**
       * The identifier of the Transaction associated with this Transaction.
       */
      transaction_id: string;

      /**
       * A constant representing the object's type. For this resource it will always be
       * `card_financial`.
       */
      type: 'card_financial';

      /**
       * Fields related to verification of cardholder-provided values.
       */
      verification: CardFinancial.Verification;

      [k: string]: unknown;
    }

    export namespace CardFinancial {
      /**
       * Additional amounts associated with the card authorization, such as ATM
       * surcharges fees. These are usually a subset of the `amount` field and are used
       * to provide more detailed information about the transaction.
       */
      export interface AdditionalAmounts {
        /**
         * The part of this transaction amount that was for clinic-related services.
         */
        clinic: AdditionalAmounts.Clinic | null;

        /**
         * The part of this transaction amount that was for dental-related services.
         */
        dental: AdditionalAmounts.Dental | null;

        /**
         * The original pre-authorized amount.
         */
        original: AdditionalAmounts.Original | null;

        /**
         * The part of this transaction amount that was for healthcare prescriptions.
         */
        prescription: AdditionalAmounts.Prescription | null;

        /**
         * The surcharge amount charged for this transaction by the merchant.
         */
        surcharge: AdditionalAmounts.Surcharge | null;

        /**
         * The total amount of a series of incremental authorizations, optionally provided.
         */
        total_cumulative: AdditionalAmounts.TotalCumulative | null;

        /**
         * The total amount of healthcare-related additional amounts.
         */
        total_healthcare: AdditionalAmounts.TotalHealthcare | null;

        /**
         * The part of this transaction amount that was for transit-related services.
         */
        transit: AdditionalAmounts.Transit | null;

        /**
         * An unknown additional amount.
         */
        unknown: AdditionalAmounts.Unknown | null;

        /**
         * The part of this transaction amount that was for vision-related services.
         */
        vision: AdditionalAmounts.Vision | null;
      }

      export namespace AdditionalAmounts {
        /**
         * The part of this transaction amount that was for clinic-related services.
         */
        export interface Clinic {
          /**
           * The amount in minor units of the `currency` field. The amount is positive if it
           * is added to the amount (such as an ATM surcharge fee) and negative if it is
           * subtracted from the amount (such as a discount).
           */
          amount: number;

          /**
           * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the additional
           * amount's currency.
           */
          currency: string;
        }

        /**
         * The part of this transaction amount that was for dental-related services.
         */
        export interface Dental {
          /**
           * The amount in minor units of the `currency` field. The amount is positive if it
           * is added to the amount (such as an ATM surcharge fee) and negative if it is
           * subtracted from the amount (such as a discount).
           */
          amount: number;

          /**
           * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the additional
           * amount's currency.
           */
          currency: string;
        }

        /**
         * The original pre-authorized amount.
         */
        export interface Original {
          /**
           * The amount in minor units of the `currency` field. The amount is positive if it
           * is added to the amount (such as an ATM surcharge fee) and negative if it is
           * subtracted from the amount (such as a discount).
           */
          amount: number;

          /**
           * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the additional
           * amount's currency.
           */
          currency: string;
        }

        /**
         * The part of this transaction amount that was for healthcare prescriptions.
         */
        export interface Prescription {
          /**
           * The amount in minor units of the `currency` field. The amount is positive if it
           * is added to the amount (such as an ATM surcharge fee) and negative if it is
           * subtracted from the amount (such as a discount).
           */
          amount: number;

          /**
           * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the additional
           * amount's currency.
           */
          currency: string;
        }

        /**
         * The surcharge amount charged for this transaction by the merchant.
         */
        export interface Surcharge {
          /**
           * The amount in minor units of the `currency` field. The amount is positive if it
           * is added to the amount (such as an ATM surcharge fee) and negative if it is
           * subtracted from the amount (such as a discount).
           */
          amount: number;

          /**
           * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the additional
           * amount's currency.
           */
          currency: string;
        }

        /**
         * The total amount of a series of incremental authorizations, optionally provided.
         */
        export interface TotalCumulative {
          /**
           * The amount in minor units of the `currency` field. The amount is positive if it
           * is added to the amount (such as an ATM surcharge fee) and negative if it is
           * subtracted from the amount (such as a discount).
           */
          amount: number;

          /**
           * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the additional
           * amount's currency.
           */
          currency: string;
        }

        /**
         * The total amount of healthcare-related additional amounts.
         */
        export interface TotalHealthcare {
          /**
           * The amount in minor units of the `currency` field. The amount is positive if it
           * is added to the amount (such as an ATM surcharge fee) and negative if it is
           * subtracted from the amount (such as a discount).
           */
          amount: number;

          /**
           * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the additional
           * amount's currency.
           */
          currency: string;
        }

        /**
         * The part of this transaction amount that was for transit-related services.
         */
        export interface Transit {
          /**
           * The amount in minor units of the `currency` field. The amount is positive if it
           * is added to the amount (such as an ATM surcharge fee) and negative if it is
           * subtracted from the amount (such as a discount).
           */
          amount: number;

          /**
           * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the additional
           * amount's currency.
           */
          currency: string;
        }

        /**
         * An unknown additional amount.
         */
        export interface Unknown {
          /**
           * The amount in minor units of the `currency` field. The amount is positive if it
           * is added to the amount (such as an ATM surcharge fee) and negative if it is
           * subtracted from the amount (such as a discount).
           */
          amount: number;

          /**
           * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the additional
           * amount's currency.
           */
          currency: string;
        }

        /**
         * The part of this transaction amount that was for vision-related services.
         */
        export interface Vision {
          /**
           * The amount in minor units of the `currency` field. The amount is positive if it
           * is added to the amount (such as an ATM surcharge fee) and negative if it is
           * subtracted from the amount (such as a discount).
           */
          amount: number;

          /**
           * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the additional
           * amount's currency.
           */
          currency: string;
        }
      }

      /**
       * Fields specific to the `network`.
       */
      export interface NetworkDetails {
        /**
         * The payment network used to process this card authorization.
         *
         * - `visa` - Visa
         * - `pulse` - Pulse
         */
        category: 'visa' | 'pulse';

        /**
         * Fields specific to the `pulse` network.
         */
        pulse: NetworkDetails.Pulse | null;

        /**
         * Fields specific to the `visa` network.
         */
        visa: NetworkDetails.Visa | null;
      }

      export namespace NetworkDetails {
        /**
         * Fields specific to the `pulse` network.
         */
        export interface Pulse {}

        /**
         * Fields specific to the `visa` network.
         */
        export interface Visa {
          /**
           * For electronic commerce transactions, this identifies the level of security used
           * in obtaining the customer's payment credential. For mail or telephone order
           * transactions, identifies the type of mail or telephone order.
           *
           * - `mail_phone_order` - Single transaction of a mail/phone order: Use to indicate
           *   that the transaction is a mail/phone order purchase, not a recurring
           *   transaction or installment payment. For domestic transactions in the US
           *   region, this value may also indicate one bill payment transaction in the
           *   card-present or card-absent environments.
           * - `recurring` - Recurring transaction: Payment indicator used to indicate a
           *   recurring transaction that originates from an acquirer in the US region.
           * - `installment` - Installment payment: Payment indicator used to indicate one
           *   purchase of goods or services that is billed to the account in multiple
           *   charges over a period of time agreed upon by the cardholder and merchant from
           *   transactions that originate from an acquirer in the US region.
           * - `unknown_mail_phone_order` - Unknown classification: other mail order: Use to
           *   indicate that the type of mail/telephone order is unknown.
           * - `secure_electronic_commerce` - Secure electronic commerce transaction: Use to
           *   indicate that the electronic commerce transaction has been authenticated using
           *   e.g., 3-D Secure
           * - `non_authenticated_security_transaction_at_3ds_capable_merchant` -
           *   Non-authenticated security transaction at a 3-D Secure-capable merchant, and
           *   merchant attempted to authenticate the cardholder using 3-D Secure: Use to
           *   identify an electronic commerce transaction where the merchant attempted to
           *   authenticate the cardholder using 3-D Secure, but was unable to complete the
           *   authentication because the issuer or cardholder does not participate in the
           *   3-D Secure program.
           * - `non_authenticated_security_transaction` - Non-authenticated security
           *   transaction: Use to identify an electronic commerce transaction that uses data
           *   encryption for security however, cardholder authentication is not performed
           *   using 3-D Secure.
           * - `non_secure_transaction` - Non-secure transaction: Use to identify an
           *   electronic commerce transaction that has no data protection.
           */
          electronic_commerce_indicator:
            | 'mail_phone_order'
            | 'recurring'
            | 'installment'
            | 'unknown_mail_phone_order'
            | 'secure_electronic_commerce'
            | 'non_authenticated_security_transaction_at_3ds_capable_merchant'
            | 'non_authenticated_security_transaction'
            | 'non_secure_transaction'
            | null;

          /**
           * The method used to enter the cardholder's primary account number and card
           * expiration date.
           *
           * - `unknown` - Unknown
           * - `manual` - Manual key entry
           * - `magnetic_stripe_no_cvv` - Magnetic stripe read, without card verification
           *   value
           * - `optical_code` - Optical code
           * - `integrated_circuit_card` - Contact chip card
           * - `contactless` - Contactless read of chip card
           * - `credential_on_file` - Transaction initiated using a credential that has
           *   previously been stored on file
           * - `magnetic_stripe` - Magnetic stripe read
           * - `contactless_magnetic_stripe` - Contactless read of magnetic stripe data
           * - `integrated_circuit_card_no_cvv` - Contact chip card, without card
           *   verification value
           */
          point_of_service_entry_mode:
            | 'unknown'
            | 'manual'
            | 'magnetic_stripe_no_cvv'
            | 'optical_code'
            | 'integrated_circuit_card'
            | 'contactless'
            | 'credential_on_file'
            | 'magnetic_stripe'
            | 'contactless_magnetic_stripe'
            | 'integrated_circuit_card_no_cvv'
            | null;

          /**
           * Only present when `actioner: network`. Describes why a card authorization was
           * approved or declined by Visa through stand-in processing.
           *
           * - `issuer_error` - Increase failed to process the authorization in a timely
           *   manner.
           * - `invalid_physical_card` - The physical card read had an invalid CVV, dCVV, or
           *   authorization request cryptogram.
           * - `invalid_cardholder_authentication_verification_value` - The 3DS cardholder
           *   authentication verification value was invalid.
           * - `internal_visa_error` - An internal Visa error occurred. Visa uses this reason
           *   code for certain expected occurrences as well, such as Application Transaction
           *   Counter (ATC) replays.
           * - `merchant_transaction_advisory_service_authentication_required` - The merchant
           *   has enabled Visa's Transaction Advisory Service and requires further
           *   authentication to perform the transaction. In practice this is often utilized
           *   at fuel pumps to tell the cardholder to see the cashier.
           * - `payment_fraud_disruption_acquirer_block` - The transaction was blocked by
           *   Visa's Payment Fraud Disruption service due to fraudulent Acquirer behavior,
           *   such as card testing.
           * - `other` - An unspecific reason for stand-in processing.
           */
          stand_in_processing_reason:
            | 'issuer_error'
            | 'invalid_physical_card'
            | 'invalid_cardholder_authentication_verification_value'
            | 'internal_visa_error'
            | 'merchant_transaction_advisory_service_authentication_required'
            | 'payment_fraud_disruption_acquirer_block'
            | 'other'
            | null;

          /**
           * The capability of the terminal being used to read the card. Shows whether a
           * terminal can e.g., accept chip cards or if it only supports magnetic stripe
           * reads. This reflects the highest capability of the terminal — for example, a
           * terminal that supports both chip and magnetic stripe will be identified as
           * chip-capable.
           *
           * - `unknown` - Unknown
           * - `terminal_not_used` - No terminal was used for this transaction.
           * - `magnetic_stripe` - The terminal can only read magnetic stripes and does not
           *   have chip or contactless reading capability.
           * - `barcode` - The terminal can only read barcodes.
           * - `optical_character_recognition` - The terminal can only read cards via Optical
           *   Character Recognition.
           * - `chip_or_contactless` - The terminal supports contact chip cards and can also
           *   read the magnetic stripe. If contact chip is supported, this value is used
           *   regardless of whether contactless is also supported.
           * - `contactless_only` - The terminal supports contactless reads but does not
           *   support contact chip. Only used when the terminal lacks contact chip
           *   capability.
           * - `no_capability` - The terminal has no card reading capability.
           */
          terminal_entry_capability:
            | 'unknown'
            | 'terminal_not_used'
            | 'magnetic_stripe'
            | 'barcode'
            | 'optical_character_recognition'
            | 'chip_or_contactless'
            | 'contactless_only'
            | 'no_capability'
            | null;
        }
      }

      /**
       * Network-specific identifiers for a specific request or transaction.
       */
      export interface NetworkIdentifiers {
        /**
         * The randomly generated 6-character Authorization Identification Response code
         * sent back to the acquirer in an approved response.
         */
        authorization_identification_response: string | null;

        /**
         * A life-cycle identifier used across e.g., an authorization and a reversal.
         * Expected to be unique per acquirer within a window of time. For some card
         * networks the retrieval reference number includes the trace counter.
         */
        retrieval_reference_number: string | null;

        /**
         * A counter used to verify an individual authorization. Expected to be unique per
         * acquirer within a window of time.
         */
        trace_number: string | null;

        /**
         * A globally unique transaction identifier provided by the card network, used
         * across multiple life-cycle requests.
         */
        transaction_id: string | null;
      }

      /**
       * Fields related to verification of cardholder-provided values.
       */
      export interface Verification {
        /**
         * Fields related to verification of the Card Verification Code, a 3-digit code on
         * the back of the card.
         */
        card_verification_code: Verification.CardVerificationCode;

        /**
         * Cardholder address provided in the authorization request and the address on file
         * we verified it against.
         */
        cardholder_address: Verification.CardholderAddress;

        /**
         * Cardholder name provided in the authorization request.
         */
        cardholder_name: Verification.CardholderName | null;
      }

      export namespace Verification {
        /**
         * Fields related to verification of the Card Verification Code, a 3-digit code on
         * the back of the card.
         */
        export interface CardVerificationCode {
          /**
           * The result of verifying the Card Verification Code.
           *
           * - `not_checked` - No card verification code was provided in the authorization
           *   request.
           * - `match` - The card verification code matched the one on file.
           * - `no_match` - The card verification code did not match the one on file.
           */
          result: 'not_checked' | 'match' | 'no_match';
        }

        /**
         * Cardholder address provided in the authorization request and the address on file
         * we verified it against.
         */
        export interface CardholderAddress {
          /**
           * Line 1 of the address on file for the cardholder.
           */
          actual_line1: string | null;

          /**
           * The postal code of the address on file for the cardholder.
           */
          actual_postal_code: string | null;

          /**
           * The cardholder address line 1 provided for verification in the authorization
           * request.
           */
          provided_line1: string | null;

          /**
           * The postal code provided for verification in the authorization request.
           */
          provided_postal_code: string | null;

          /**
           * The address verification result returned to the card network.
           *
           * - `not_checked` - No address information was provided in the authorization
           *   request.
           * - `postal_code_match_address_no_match` - Postal code matches, but the street
           *   address does not match or was not provided.
           * - `postal_code_no_match_address_match` - Postal code does not match, but the
           *   street address matches or was not provided.
           * - `match` - Postal code and street address match.
           * - `no_match` - Postal code and street address do not match.
           * - `postal_code_match_address_not_checked` - Postal code matches, but the street
           *   address was not verified. (deprecated)
           */
          result:
            | 'not_checked'
            | 'postal_code_match_address_no_match'
            | 'postal_code_no_match_address_match'
            | 'match'
            | 'no_match'
            | 'postal_code_match_address_not_checked';
        }

        /**
         * Cardholder name provided in the authorization request.
         */
        export interface CardholderName {
          /**
           * The first name provided for verification in the authorization request.
           */
          provided_first_name: string | null;

          /**
           * The last name provided for verification in the authorization request.
           */
          provided_last_name: string | null;

          /**
           * The middle name provided for verification in the authorization request.
           */
          provided_middle_name: string | null;
        }
      }
    }

    /**
     * A Card Push Transfer Acceptance object. This field will be present in the JSON
     * response if and only if `category` is equal to `card_push_transfer_acceptance`.
     * A Card Push Transfer Acceptance is created when an Outbound Card Push Transfer
     * sent from Increase is accepted by the receiving bank.
     */
    export interface CardPushTransferAcceptance {
      /**
       * The transfer amount in USD cents.
       */
      settlement_amount: number;

      /**
       * The identifier of the Card Push Transfer that led to this Transaction.
       */
      transfer_id: string;

      [k: string]: unknown;
    }

    /**
     * A Card Refund object. This field will be present in the JSON response if and
     * only if `category` is equal to `card_refund`. Card Refunds move money back to
     * the cardholder. While they are usually connected to a Card Settlement, an
     * acquirer can also refund money directly to a card without relation to a
     * transaction.
     */
    export interface CardRefund {
      /**
       * The Card Refund identifier.
       */
      id: string;

      /**
       * The amount in the minor unit of the transaction's settlement currency. For
       * dollars, for example, this is cents.
       */
      amount: number;

      /**
       * The ID of the Card Payment this transaction belongs to.
       */
      card_payment_id: string;

      /**
       * Cashback debited for this transaction, if eligible. Cashback is paid out in
       * aggregate, monthly.
       */
      cashback: CardRefund.Cashback | null;

      /**
       * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the
       * transaction's settlement currency.
       *
       * - `USD` - US Dollar (USD)
       */
      currency: 'USD';

      /**
       * Interchange assessed as a part of this transaction.
       */
      interchange: CardRefund.Interchange | null;

      /**
       * The merchant identifier (commonly abbreviated as MID) of the merchant the card
       * is transacting with.
       */
      merchant_acceptor_id: string;

      /**
       * The 4-digit MCC describing the merchant's business.
       */
      merchant_category_code: string;

      /**
       * The city the merchant resides in.
       */
      merchant_city: string;

      /**
       * The country the merchant resides in.
       */
      merchant_country: string;

      /**
       * The name of the merchant.
       */
      merchant_name: string;

      /**
       * The merchant's postal code. For US merchants this is always a 5-digit ZIP code.
       */
      merchant_postal_code: string | null;

      /**
       * The state the merchant resides in.
       */
      merchant_state: string | null;

      /**
       * Network-specific identifiers for this refund.
       */
      network_identifiers: CardRefund.NetworkIdentifiers;

      /**
       * The amount in the minor unit of the transaction's presentment currency.
       */
      presentment_amount: number;

      /**
       * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the
       * transaction's presentment currency.
       */
      presentment_currency: string;

      /**
       * Additional details about the card purchase, such as tax and industry-specific
       * fields.
       */
      purchase_details: CardRefund.PurchaseDetails | null;

      /**
       * The identifier of the Transaction associated with this Transaction.
       */
      transaction_id: string;

      /**
       * A constant representing the object's type. For this resource it will always be
       * `card_refund`.
       */
      type: 'card_refund';

      [k: string]: unknown;
    }

    export namespace CardRefund {
      /**
       * Cashback debited for this transaction, if eligible. Cashback is paid out in
       * aggregate, monthly.
       */
      export interface Cashback {
        /**
         * The cashback amount given as a string containing a decimal number. The amount is
         * a positive number if it will be credited to you (e.g., settlements) and a
         * negative number if it will be debited (e.g., refunds).
         */
        amount: string;

        /**
         * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the cashback.
         *
         * - `USD` - US Dollar (USD)
         */
        currency: 'USD';
      }

      /**
       * Interchange assessed as a part of this transaction.
       */
      export interface Interchange {
        /**
         * The interchange amount given as a string containing a decimal number in major
         * units (so e.g., "3.14" for $3.14). The amount is a positive number if it is
         * credited to Increase (e.g., settlements) and a negative number if it is debited
         * (e.g., refunds).
         */
        amount: string;

        /**
         * The card network specific interchange code.
         */
        code: string | null;

        /**
         * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the interchange
         * reimbursement.
         *
         * - `USD` - US Dollar (USD)
         */
        currency: 'USD';
      }

      /**
       * Network-specific identifiers for this refund.
       */
      export interface NetworkIdentifiers {
        /**
         * A network assigned business ID that identifies the acquirer that processed this
         * transaction.
         */
        acquirer_business_id: string;

        /**
         * A globally unique identifier for this settlement.
         */
        acquirer_reference_number: string;

        /**
         * The randomly generated 6-character Authorization Identification Response code
         * sent back to the acquirer in an approved response.
         */
        authorization_identification_response: string | null;

        /**
         * A globally unique transaction identifier provided by the card network, used
         * across multiple life-cycle requests.
         */
        transaction_id: string | null;
      }

      /**
       * Additional details about the card purchase, such as tax and industry-specific
       * fields.
       */
      export interface PurchaseDetails {
        /**
         * Fields specific to car rentals.
         */
        car_rental: PurchaseDetails.CarRental | null;

        /**
         * An identifier from the merchant for the customer or consumer.
         */
        customer_reference_identifier: string | null;

        /**
         * The state or provincial tax amount in minor units.
         */
        local_tax_amount: number | null;

        /**
         * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the local tax
         * assessed.
         */
        local_tax_currency: string | null;

        /**
         * Fields specific to lodging.
         */
        lodging: PurchaseDetails.Lodging | null;

        /**
         * The national tax amount in minor units.
         */
        national_tax_amount: number | null;

        /**
         * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the local tax
         * assessed.
         */
        national_tax_currency: string | null;

        /**
         * An identifier from the merchant for the purchase to the issuer and cardholder.
         */
        purchase_identifier: string | null;

        /**
         * The format of the purchase identifier.
         *
         * - `free_text` - Free text
         * - `order_number` - Order number
         * - `rental_agreement_number` - Rental agreement number
         * - `hotel_folio_number` - Hotel folio number
         * - `invoice_number` - Invoice number
         */
        purchase_identifier_format:
          | 'free_text'
          | 'order_number'
          | 'rental_agreement_number'
          | 'hotel_folio_number'
          | 'invoice_number'
          | null;

        /**
         * Fields specific to travel.
         */
        travel: PurchaseDetails.Travel | null;
      }

      export namespace PurchaseDetails {
        /**
         * Fields specific to car rentals.
         */
        export interface CarRental {
          /**
           * Code indicating the vehicle's class.
           */
          car_class_code: string | null;

          /**
           * Date the customer picked up the car or, in the case of a no-show or pre-pay
           * transaction, the scheduled pick up date.
           */
          checkout_date: string | null;

          /**
           * Daily rate being charged for the vehicle.
           */
          daily_rental_rate_amount: number | null;

          /**
           * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the daily rental
           * rate.
           */
          daily_rental_rate_currency: string | null;

          /**
           * Number of days the vehicle was rented.
           */
          days_rented: number | null;

          /**
           * Additional charges (gas, late fee, etc.) being billed.
           *
           * - `no_extra_charge` - No extra charge
           * - `gas` - Gas
           * - `extra_mileage` - Extra mileage
           * - `late_return` - Late return
           * - `one_way_service_fee` - One way service fee
           * - `parking_violation` - Parking violation
           */
          extra_charges:
            | 'no_extra_charge'
            | 'gas'
            | 'extra_mileage'
            | 'late_return'
            | 'one_way_service_fee'
            | 'parking_violation'
            | null;

          /**
           * Fuel charges for the vehicle.
           */
          fuel_charges_amount: number | null;

          /**
           * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the fuel charges
           * assessed.
           */
          fuel_charges_currency: string | null;

          /**
           * Any insurance being charged for the vehicle.
           */
          insurance_charges_amount: number | null;

          /**
           * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the insurance
           * charges assessed.
           */
          insurance_charges_currency: string | null;

          /**
           * An indicator that the cardholder is being billed for a reserved vehicle that was
           * not actually rented (that is, a "no-show" charge).
           *
           * - `not_applicable` - Not applicable
           * - `no_show_for_specialized_vehicle` - No show for specialized vehicle
           */
          no_show_indicator: 'not_applicable' | 'no_show_for_specialized_vehicle' | null;

          /**
           * Charges for returning the vehicle at a different location than where it was
           * picked up.
           */
          one_way_drop_off_charges_amount: number | null;

          /**
           * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the one-way
           * drop-off charges assessed.
           */
          one_way_drop_off_charges_currency: string | null;

          /**
           * Name of the person renting the vehicle.
           */
          renter_name: string | null;

          /**
           * Weekly rate being charged for the vehicle.
           */
          weekly_rental_rate_amount: number | null;

          /**
           * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the weekly
           * rental rate.
           */
          weekly_rental_rate_currency: string | null;
        }

        /**
         * Fields specific to lodging.
         */
        export interface Lodging {
          /**
           * Date the customer checked in.
           */
          check_in_date: string | null;

          /**
           * Daily rate being charged for the room.
           */
          daily_room_rate_amount: number | null;

          /**
           * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the daily room
           * rate.
           */
          daily_room_rate_currency: string | null;

          /**
           * Additional charges (phone, late check-out, etc.) being billed.
           *
           * - `no_extra_charge` - No extra charge
           * - `restaurant` - Restaurant
           * - `gift_shop` - Gift shop
           * - `mini_bar` - Mini bar
           * - `telephone` - Telephone
           * - `other` - Other
           * - `laundry` - Laundry
           */
          extra_charges:
            | 'no_extra_charge'
            | 'restaurant'
            | 'gift_shop'
            | 'mini_bar'
            | 'telephone'
            | 'other'
            | 'laundry'
            | null;

          /**
           * Folio cash advances for the room.
           */
          folio_cash_advances_amount: number | null;

          /**
           * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the folio cash
           * advances.
           */
          folio_cash_advances_currency: string | null;

          /**
           * Food and beverage charges for the room.
           */
          food_beverage_charges_amount: number | null;

          /**
           * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the food and
           * beverage charges.
           */
          food_beverage_charges_currency: string | null;

          /**
           * Indicator that the cardholder is being billed for a reserved room that was not
           * actually used.
           *
           * - `not_applicable` - Not applicable
           * - `no_show` - No show
           */
          no_show_indicator: 'not_applicable' | 'no_show' | null;

          /**
           * Prepaid expenses being charged for the room.
           */
          prepaid_expenses_amount: number | null;

          /**
           * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the prepaid
           * expenses.
           */
          prepaid_expenses_currency: string | null;

          /**
           * Number of nights the room was rented.
           */
          room_nights: number | null;

          /**
           * Total room tax being charged.
           */
          total_room_tax_amount: number | null;

          /**
           * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the total room
           * tax.
           */
          total_room_tax_currency: string | null;

          /**
           * Total tax being charged for the room.
           */
          total_tax_amount: number | null;

          /**
           * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the total tax
           * assessed.
           */
          total_tax_currency: string | null;
        }

        /**
         * Fields specific to travel.
         */
        export interface Travel {
          /**
           * Ancillary purchases in addition to the airfare.
           */
          ancillary: Travel.Ancillary | null;

          /**
           * Indicates the computerized reservation system used to book the ticket.
           */
          computerized_reservation_system: string | null;

          /**
           * Indicates the reason for a credit to the cardholder.
           *
           * - `no_credit` - No credit
           * - `passenger_transport_ancillary_purchase_cancellation` - Passenger transport
           *   ancillary purchase cancellation
           * - `airline_ticket_and_passenger_transport_ancillary_purchase_cancellation` -
           *   Airline ticket and passenger transport ancillary purchase cancellation
           * - `airline_ticket_cancellation` - Airline ticket cancellation
           * - `other` - Other
           * - `partial_refund_of_airline_ticket` - Partial refund of airline ticket
           */
          credit_reason_indicator:
            | 'no_credit'
            | 'passenger_transport_ancillary_purchase_cancellation'
            | 'airline_ticket_and_passenger_transport_ancillary_purchase_cancellation'
            | 'airline_ticket_cancellation'
            | 'other'
            | 'partial_refund_of_airline_ticket'
            | null;

          /**
           * Date of departure.
           */
          departure_date: string | null;

          /**
           * Code for the originating city or airport.
           */
          origination_city_airport_code: string | null;

          /**
           * Name of the passenger.
           */
          passenger_name: string | null;

          /**
           * Indicates whether this ticket is non-refundable.
           *
           * - `no_restrictions` - No restrictions
           * - `restricted_non_refundable_ticket` - Restricted non-refundable ticket
           */
          restricted_ticket_indicator: 'no_restrictions' | 'restricted_non_refundable_ticket' | null;

          /**
           * Indicates why a ticket was changed.
           *
           * - `none` - None
           * - `change_to_existing_ticket` - Change to existing ticket
           * - `new_ticket` - New ticket
           */
          ticket_change_indicator: 'none' | 'change_to_existing_ticket' | 'new_ticket' | null;

          /**
           * Ticket number.
           */
          ticket_number: string | null;

          /**
           * Code for the travel agency if the ticket was issued by a travel agency.
           */
          travel_agency_code: string | null;

          /**
           * Name of the travel agency if the ticket was issued by a travel agency.
           */
          travel_agency_name: string | null;

          /**
           * Fields specific to each leg of the journey.
           */
          trip_legs: Array<Travel.TripLeg> | null;
        }

        export namespace Travel {
          /**
           * Ancillary purchases in addition to the airfare.
           */
          export interface Ancillary {
            /**
             * If this purchase has a connection or relationship to another purchase, such as a
             * baggage fee for a passenger transport ticket, this field should contain the
             * ticket document number for the other purchase.
             */
            connected_ticket_document_number: string | null;

            /**
             * Indicates the reason for a credit to the cardholder.
             *
             * - `no_credit` - No credit
             * - `passenger_transport_ancillary_purchase_cancellation` - Passenger transport
             *   ancillary purchase cancellation
             * - `airline_ticket_and_passenger_transport_ancillary_purchase_cancellation` -
             *   Airline ticket and passenger transport ancillary purchase cancellation
             * - `other` - Other
             */
            credit_reason_indicator:
              | 'no_credit'
              | 'passenger_transport_ancillary_purchase_cancellation'
              | 'airline_ticket_and_passenger_transport_ancillary_purchase_cancellation'
              | 'other'
              | null;

            /**
             * Name of the passenger or description of the ancillary purchase.
             */
            passenger_name_or_description: string | null;

            /**
             * Additional travel charges, such as baggage fees.
             */
            services: Array<Ancillary.Service>;

            /**
             * Ticket document number.
             */
            ticket_document_number: string | null;
          }

          export namespace Ancillary {
            export interface Service {
              /**
               * Category of the ancillary service.
               *
               * - `none` - None
               * - `bundled_service` - Bundled service
               * - `baggage_fee` - Baggage fee
               * - `change_fee` - Change fee
               * - `cargo` - Cargo
               * - `carbon_offset` - Carbon offset
               * - `frequent_flyer` - Frequent flyer
               * - `gift_card` - Gift card
               * - `ground_transport` - Ground transport
               * - `in_flight_entertainment` - In-flight entertainment
               * - `lounge` - Lounge
               * - `medical` - Medical
               * - `meal_beverage` - Meal beverage
               * - `other` - Other
               * - `passenger_assist_fee` - Passenger assist fee
               * - `pets` - Pets
               * - `seat_fees` - Seat fees
               * - `standby` - Standby
               * - `service_fee` - Service fee
               * - `store` - Store
               * - `travel_service` - Travel service
               * - `unaccompanied_travel` - Unaccompanied travel
               * - `upgrades` - Upgrades
               * - `wifi` - Wi-fi
               */
              category:
                | 'none'
                | 'bundled_service'
                | 'baggage_fee'
                | 'change_fee'
                | 'cargo'
                | 'carbon_offset'
                | 'frequent_flyer'
                | 'gift_card'
                | 'ground_transport'
                | 'in_flight_entertainment'
                | 'lounge'
                | 'medical'
                | 'meal_beverage'
                | 'other'
                | 'passenger_assist_fee'
                | 'pets'
                | 'seat_fees'
                | 'standby'
                | 'service_fee'
                | 'store'
                | 'travel_service'
                | 'unaccompanied_travel'
                | 'upgrades'
                | 'wifi'
                | null;

              /**
               * Sub-category of the ancillary service, free-form.
               */
              sub_category: string | null;
            }
          }

          export interface TripLeg {
            /**
             * Carrier code (e.g., United Airlines, Jet Blue, etc.).
             */
            carrier_code: string | null;

            /**
             * Code for the destination city or airport.
             */
            destination_city_airport_code: string | null;

            /**
             * Fare basis code.
             */
            fare_basis_code: string | null;

            /**
             * Flight number.
             */
            flight_number: string | null;

            /**
             * Service class (e.g., first class, business class, etc.).
             */
            service_class: string | null;

            /**
             * Indicates whether a stopover is allowed on this ticket.
             *
             * - `none` - None
             * - `stop_over_allowed` - Stop over allowed
             * - `stop_over_not_allowed` - Stop over not allowed
             */
            stop_over_code: 'none' | 'stop_over_allowed' | 'stop_over_not_allowed' | null;
          }
        }
      }
    }

    /**
     * A Card Revenue Payment object. This field will be present in the JSON response
     * if and only if `category` is equal to `card_revenue_payment`. Card Revenue
     * Payments reflect earnings from fees on card transactions.
     */
    export interface CardRevenuePayment {
      /**
       * The amount in the minor unit of the transaction's currency. For dollars, for
       * example, this is cents.
       */
      amount: number;

      /**
       * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transaction
       * currency.
       *
       * - `USD` - US Dollar (USD)
       */
      currency: 'USD';

      /**
       * The end of the period for which this transaction paid interest.
       */
      period_end: string;

      /**
       * The start of the period for which this transaction paid interest.
       */
      period_start: string;

      /**
       * The account the card belonged to.
       */
      transacted_on_account_id: string | null;

      [k: string]: unknown;
    }

    /**
     * A Card Settlement object. This field will be present in the JSON response if and
     * only if `category` is equal to `card_settlement`. Card Settlements are card
     * transactions that have cleared and settled. While a settlement is usually
     * preceded by an authorization, an acquirer can also directly clear a transaction
     * without first authorizing it.
     */
    export interface CardSettlement {
      /**
       * The Card Settlement identifier.
       */
      id: string;

      /**
       * The amount in the minor unit of the transaction's settlement currency. For
       * dollars, for example, this is cents.
       */
      amount: number;

      /**
       * The Card Authorization that was created prior to this Card Settlement, if one
       * exists.
       */
      card_authorization: string | null;

      /**
       * The ID of the Card Payment this transaction belongs to.
       */
      card_payment_id: string;

      /**
       * Cashback earned on this transaction, if eligible. Cashback is paid out in
       * aggregate, monthly.
       */
      cashback: CardSettlement.Cashback | null;

      /**
       * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the
       * transaction's settlement currency.
       *
       * - `USD` - US Dollar (USD)
       */
      currency: 'USD';

      /**
       * Interchange assessed as a part of this transaction.
       */
      interchange: CardSettlement.Interchange | null;

      /**
       * The merchant identifier (commonly abbreviated as MID) of the merchant the card
       * is transacting with.
       */
      merchant_acceptor_id: string;

      /**
       * The 4-digit MCC describing the merchant's business.
       */
      merchant_category_code: string;

      /**
       * The city the merchant resides in.
       */
      merchant_city: string;

      /**
       * The country the merchant resides in.
       */
      merchant_country: string;

      /**
       * The name of the merchant.
       */
      merchant_name: string;

      /**
       * The merchant's postal code. For US merchants this is always a 5-digit ZIP code.
       */
      merchant_postal_code: string | null;

      /**
       * The state the merchant resides in.
       */
      merchant_state: string | null;

      /**
       * The card network on which this transaction was processed.
       *
       * - `visa` - Visa
       * - `pulse` - Pulse
       */
      network: 'visa' | 'pulse';

      /**
       * Network-specific identifiers for this refund.
       */
      network_identifiers: CardSettlement.NetworkIdentifiers;

      /**
       * The identifier of the Pending Transaction associated with this Transaction.
       */
      pending_transaction_id: string | null;

      /**
       * The amount in the minor unit of the transaction's presentment currency.
       */
      presentment_amount: number;

      /**
       * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the
       * transaction's presentment currency.
       */
      presentment_currency: string;

      /**
       * Additional details about the card purchase, such as tax and industry-specific
       * fields.
       */
      purchase_details: CardSettlement.PurchaseDetails | null;

      /**
       * Surcharge amount details, if applicable. The amount is positive if the surcharge
       * is added to the overall transaction amount (surcharge), and negative if the
       * surcharge is deducted from the overall transaction amount (discount).
       */
      surcharge: CardSettlement.Surcharge | null;

      /**
       * The identifier of the Transaction associated with this Transaction.
       */
      transaction_id: string;

      /**
       * A constant representing the object's type. For this resource it will always be
       * `card_settlement`.
       */
      type: 'card_settlement';

      [k: string]: unknown;
    }

    export namespace CardSettlement {
      /**
       * Cashback earned on this transaction, if eligible. Cashback is paid out in
       * aggregate, monthly.
       */
      export interface Cashback {
        /**
         * The cashback amount given as a string containing a decimal number. The amount is
         * a positive number if it will be credited to you (e.g., settlements) and a
         * negative number if it will be debited (e.g., refunds).
         */
        amount: string;

        /**
         * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the cashback.
         *
         * - `USD` - US Dollar (USD)
         */
        currency: 'USD';
      }

      /**
       * Interchange assessed as a part of this transaction.
       */
      export interface Interchange {
        /**
         * The interchange amount given as a string containing a decimal number in major
         * units (so e.g., "3.14" for $3.14). The amount is a positive number if it is
         * credited to Increase (e.g., settlements) and a negative number if it is debited
         * (e.g., refunds).
         */
        amount: string;

        /**
         * The card network specific interchange code.
         */
        code: string | null;

        /**
         * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the interchange
         * reimbursement.
         *
         * - `USD` - US Dollar (USD)
         */
        currency: 'USD';
      }

      /**
       * Network-specific identifiers for this refund.
       */
      export interface NetworkIdentifiers {
        /**
         * A network assigned business ID that identifies the acquirer that processed this
         * transaction.
         */
        acquirer_business_id: string;

        /**
         * A globally unique identifier for this settlement.
         */
        acquirer_reference_number: string;

        /**
         * The randomly generated 6-character Authorization Identification Response code
         * sent back to the acquirer in an approved response.
         */
        authorization_identification_response: string | null;

        /**
         * A globally unique transaction identifier provided by the card network, used
         * across multiple life-cycle requests.
         */
        transaction_id: string | null;
      }

      /**
       * Additional details about the card purchase, such as tax and industry-specific
       * fields.
       */
      export interface PurchaseDetails {
        /**
         * Fields specific to car rentals.
         */
        car_rental: PurchaseDetails.CarRental | null;

        /**
         * An identifier from the merchant for the customer or consumer.
         */
        customer_reference_identifier: string | null;

        /**
         * The state or provincial tax amount in minor units.
         */
        local_tax_amount: number | null;

        /**
         * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the local tax
         * assessed.
         */
        local_tax_currency: string | null;

        /**
         * Fields specific to lodging.
         */
        lodging: PurchaseDetails.Lodging | null;

        /**
         * The national tax amount in minor units.
         */
        national_tax_amount: number | null;

        /**
         * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the local tax
         * assessed.
         */
        national_tax_currency: string | null;

        /**
         * An identifier from the merchant for the purchase to the issuer and cardholder.
         */
        purchase_identifier: string | null;

        /**
         * The format of the purchase identifier.
         *
         * - `free_text` - Free text
         * - `order_number` - Order number
         * - `rental_agreement_number` - Rental agreement number
         * - `hotel_folio_number` - Hotel folio number
         * - `invoice_number` - Invoice number
         */
        purchase_identifier_format:
          | 'free_text'
          | 'order_number'
          | 'rental_agreement_number'
          | 'hotel_folio_number'
          | 'invoice_number'
          | null;

        /**
         * Fields specific to travel.
         */
        travel: PurchaseDetails.Travel | null;
      }

      export namespace PurchaseDetails {
        /**
         * Fields specific to car rentals.
         */
        export interface CarRental {
          /**
           * Code indicating the vehicle's class.
           */
          car_class_code: string | null;

          /**
           * Date the customer picked up the car or, in the case of a no-show or pre-pay
           * transaction, the scheduled pick up date.
           */
          checkout_date: string | null;

          /**
           * Daily rate being charged for the vehicle.
           */
          daily_rental_rate_amount: number | null;

          /**
           * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the daily rental
           * rate.
           */
          daily_rental_rate_currency: string | null;

          /**
           * Number of days the vehicle was rented.
           */
          days_rented: number | null;

          /**
           * Additional charges (gas, late fee, etc.) being billed.
           *
           * - `no_extra_charge` - No extra charge
           * - `gas` - Gas
           * - `extra_mileage` - Extra mileage
           * - `late_return` - Late return
           * - `one_way_service_fee` - One way service fee
           * - `parking_violation` - Parking violation
           */
          extra_charges:
            | 'no_extra_charge'
            | 'gas'
            | 'extra_mileage'
            | 'late_return'
            | 'one_way_service_fee'
            | 'parking_violation'
            | null;

          /**
           * Fuel charges for the vehicle.
           */
          fuel_charges_amount: number | null;

          /**
           * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the fuel charges
           * assessed.
           */
          fuel_charges_currency: string | null;

          /**
           * Any insurance being charged for the vehicle.
           */
          insurance_charges_amount: number | null;

          /**
           * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the insurance
           * charges assessed.
           */
          insurance_charges_currency: string | null;

          /**
           * An indicator that the cardholder is being billed for a reserved vehicle that was
           * not actually rented (that is, a "no-show" charge).
           *
           * - `not_applicable` - Not applicable
           * - `no_show_for_specialized_vehicle` - No show for specialized vehicle
           */
          no_show_indicator: 'not_applicable' | 'no_show_for_specialized_vehicle' | null;

          /**
           * Charges for returning the vehicle at a different location than where it was
           * picked up.
           */
          one_way_drop_off_charges_amount: number | null;

          /**
           * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the one-way
           * drop-off charges assessed.
           */
          one_way_drop_off_charges_currency: string | null;

          /**
           * Name of the person renting the vehicle.
           */
          renter_name: string | null;

          /**
           * Weekly rate being charged for the vehicle.
           */
          weekly_rental_rate_amount: number | null;

          /**
           * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the weekly
           * rental rate.
           */
          weekly_rental_rate_currency: string | null;
        }

        /**
         * Fields specific to lodging.
         */
        export interface Lodging {
          /**
           * Date the customer checked in.
           */
          check_in_date: string | null;

          /**
           * Daily rate being charged for the room.
           */
          daily_room_rate_amount: number | null;

          /**
           * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the daily room
           * rate.
           */
          daily_room_rate_currency: string | null;

          /**
           * Additional charges (phone, late check-out, etc.) being billed.
           *
           * - `no_extra_charge` - No extra charge
           * - `restaurant` - Restaurant
           * - `gift_shop` - Gift shop
           * - `mini_bar` - Mini bar
           * - `telephone` - Telephone
           * - `other` - Other
           * - `laundry` - Laundry
           */
          extra_charges:
            | 'no_extra_charge'
            | 'restaurant'
            | 'gift_shop'
            | 'mini_bar'
            | 'telephone'
            | 'other'
            | 'laundry'
            | null;

          /**
           * Folio cash advances for the room.
           */
          folio_cash_advances_amount: number | null;

          /**
           * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the folio cash
           * advances.
           */
          folio_cash_advances_currency: string | null;

          /**
           * Food and beverage charges for the room.
           */
          food_beverage_charges_amount: number | null;

          /**
           * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the food and
           * beverage charges.
           */
          food_beverage_charges_currency: string | null;

          /**
           * Indicator that the cardholder is being billed for a reserved room that was not
           * actually used.
           *
           * - `not_applicable` - Not applicable
           * - `no_show` - No show
           */
          no_show_indicator: 'not_applicable' | 'no_show' | null;

          /**
           * Prepaid expenses being charged for the room.
           */
          prepaid_expenses_amount: number | null;

          /**
           * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the prepaid
           * expenses.
           */
          prepaid_expenses_currency: string | null;

          /**
           * Number of nights the room was rented.
           */
          room_nights: number | null;

          /**
           * Total room tax being charged.
           */
          total_room_tax_amount: number | null;

          /**
           * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the total room
           * tax.
           */
          total_room_tax_currency: string | null;

          /**
           * Total tax being charged for the room.
           */
          total_tax_amount: number | null;

          /**
           * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the total tax
           * assessed.
           */
          total_tax_currency: string | null;
        }

        /**
         * Fields specific to travel.
         */
        export interface Travel {
          /**
           * Ancillary purchases in addition to the airfare.
           */
          ancillary: Travel.Ancillary | null;

          /**
           * Indicates the computerized reservation system used to book the ticket.
           */
          computerized_reservation_system: string | null;

          /**
           * Indicates the reason for a credit to the cardholder.
           *
           * - `no_credit` - No credit
           * - `passenger_transport_ancillary_purchase_cancellation` - Passenger transport
           *   ancillary purchase cancellation
           * - `airline_ticket_and_passenger_transport_ancillary_purchase_cancellation` -
           *   Airline ticket and passenger transport ancillary purchase cancellation
           * - `airline_ticket_cancellation` - Airline ticket cancellation
           * - `other` - Other
           * - `partial_refund_of_airline_ticket` - Partial refund of airline ticket
           */
          credit_reason_indicator:
            | 'no_credit'
            | 'passenger_transport_ancillary_purchase_cancellation'
            | 'airline_ticket_and_passenger_transport_ancillary_purchase_cancellation'
            | 'airline_ticket_cancellation'
            | 'other'
            | 'partial_refund_of_airline_ticket'
            | null;

          /**
           * Date of departure.
           */
          departure_date: string | null;

          /**
           * Code for the originating city or airport.
           */
          origination_city_airport_code: string | null;

          /**
           * Name of the passenger.
           */
          passenger_name: string | null;

          /**
           * Indicates whether this ticket is non-refundable.
           *
           * - `no_restrictions` - No restrictions
           * - `restricted_non_refundable_ticket` - Restricted non-refundable ticket
           */
          restricted_ticket_indicator: 'no_restrictions' | 'restricted_non_refundable_ticket' | null;

          /**
           * Indicates why a ticket was changed.
           *
           * - `none` - None
           * - `change_to_existing_ticket` - Change to existing ticket
           * - `new_ticket` - New ticket
           */
          ticket_change_indicator: 'none' | 'change_to_existing_ticket' | 'new_ticket' | null;

          /**
           * Ticket number.
           */
          ticket_number: string | null;

          /**
           * Code for the travel agency if the ticket was issued by a travel agency.
           */
          travel_agency_code: string | null;

          /**
           * Name of the travel agency if the ticket was issued by a travel agency.
           */
          travel_agency_name: string | null;

          /**
           * Fields specific to each leg of the journey.
           */
          trip_legs: Array<Travel.TripLeg> | null;
        }

        export namespace Travel {
          /**
           * Ancillary purchases in addition to the airfare.
           */
          export interface Ancillary {
            /**
             * If this purchase has a connection or relationship to another purchase, such as a
             * baggage fee for a passenger transport ticket, this field should contain the
             * ticket document number for the other purchase.
             */
            connected_ticket_document_number: string | null;

            /**
             * Indicates the reason for a credit to the cardholder.
             *
             * - `no_credit` - No credit
             * - `passenger_transport_ancillary_purchase_cancellation` - Passenger transport
             *   ancillary purchase cancellation
             * - `airline_ticket_and_passenger_transport_ancillary_purchase_cancellation` -
             *   Airline ticket and passenger transport ancillary purchase cancellation
             * - `other` - Other
             */
            credit_reason_indicator:
              | 'no_credit'
              | 'passenger_transport_ancillary_purchase_cancellation'
              | 'airline_ticket_and_passenger_transport_ancillary_purchase_cancellation'
              | 'other'
              | null;

            /**
             * Name of the passenger or description of the ancillary purchase.
             */
            passenger_name_or_description: string | null;

            /**
             * Additional travel charges, such as baggage fees.
             */
            services: Array<Ancillary.Service>;

            /**
             * Ticket document number.
             */
            ticket_document_number: string | null;
          }

          export namespace Ancillary {
            export interface Service {
              /**
               * Category of the ancillary service.
               *
               * - `none` - None
               * - `bundled_service` - Bundled service
               * - `baggage_fee` - Baggage fee
               * - `change_fee` - Change fee
               * - `cargo` - Cargo
               * - `carbon_offset` - Carbon offset
               * - `frequent_flyer` - Frequent flyer
               * - `gift_card` - Gift card
               * - `ground_transport` - Ground transport
               * - `in_flight_entertainment` - In-flight entertainment
               * - `lounge` - Lounge
               * - `medical` - Medical
               * - `meal_beverage` - Meal beverage
               * - `other` - Other
               * - `passenger_assist_fee` - Passenger assist fee
               * - `pets` - Pets
               * - `seat_fees` - Seat fees
               * - `standby` - Standby
               * - `service_fee` - Service fee
               * - `store` - Store
               * - `travel_service` - Travel service
               * - `unaccompanied_travel` - Unaccompanied travel
               * - `upgrades` - Upgrades
               * - `wifi` - Wi-fi
               */
              category:
                | 'none'
                | 'bundled_service'
                | 'baggage_fee'
                | 'change_fee'
                | 'cargo'
                | 'carbon_offset'
                | 'frequent_flyer'
                | 'gift_card'
                | 'ground_transport'
                | 'in_flight_entertainment'
                | 'lounge'
                | 'medical'
                | 'meal_beverage'
                | 'other'
                | 'passenger_assist_fee'
                | 'pets'
                | 'seat_fees'
                | 'standby'
                | 'service_fee'
                | 'store'
                | 'travel_service'
                | 'unaccompanied_travel'
                | 'upgrades'
                | 'wifi'
                | null;

              /**
               * Sub-category of the ancillary service, free-form.
               */
              sub_category: string | null;
            }
          }

          export interface TripLeg {
            /**
             * Carrier code (e.g., United Airlines, Jet Blue, etc.).
             */
            carrier_code: string | null;

            /**
             * Code for the destination city or airport.
             */
            destination_city_airport_code: string | null;

            /**
             * Fare basis code.
             */
            fare_basis_code: string | null;

            /**
             * Flight number.
             */
            flight_number: string | null;

            /**
             * Service class (e.g., first class, business class, etc.).
             */
            service_class: string | null;

            /**
             * Indicates whether a stopover is allowed on this ticket.
             *
             * - `none` - None
             * - `stop_over_allowed` - Stop over allowed
             * - `stop_over_not_allowed` - Stop over not allowed
             */
            stop_over_code: 'none' | 'stop_over_allowed' | 'stop_over_not_allowed' | null;
          }
        }
      }

      /**
       * Surcharge amount details, if applicable. The amount is positive if the surcharge
       * is added to the overall transaction amount (surcharge), and negative if the
       * surcharge is deducted from the overall transaction amount (discount).
       */
      export interface Surcharge {
        /**
         * The surcharge amount in the minor unit of the transaction's settlement currency.
         */
        amount: number;

        /**
         * The surcharge amount in the minor unit of the transaction's presentment
         * currency.
         */
        presentment_amount: number;
      }
    }

    /**
     * A Cashback Payment object. This field will be present in the JSON response if
     * and only if `category` is equal to `cashback_payment`. A Cashback Payment
     * represents the cashback paid to a cardholder for a given period. Cashback is
     * usually paid monthly for the prior month's transactions.
     */
    export interface CashbackPayment {
      /**
       * The card on which the cashback was accrued.
       */
      accrued_on_card_id: string | null;

      /**
       * The amount in the minor unit of the transaction's currency. For dollars, for
       * example, this is cents.
       */
      amount: number;

      /**
       * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transaction
       * currency.
       *
       * - `USD` - US Dollar (USD)
       */
      currency: 'USD';

      /**
       * The end of the period for which this transaction paid cashback.
       */
      period_end: string;

      /**
       * The start of the period for which this transaction paid cashback.
       */
      period_start: string;

      [k: string]: unknown;
    }

    /**
     * A Check Deposit Acceptance object. This field will be present in the JSON
     * response if and only if `category` is equal to `check_deposit_acceptance`. A
     * Check Deposit Acceptance is created when a Check Deposit is processed and its
     * details confirmed. Check Deposits may be returned by the receiving bank, which
     * will appear as a Check Deposit Return.
     */
    export interface CheckDepositAcceptance {
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
     * A Check Deposit Return object. This field will be present in the JSON response
     * if and only if `category` is equal to `check_deposit_return`. A Check Deposit
     * Return is created when a Check Deposit is returned by the bank holding the
     * account it was drawn against. Check Deposits may be returned for a variety of
     * reasons, including insufficient funds or a mismatched account number. Usually,
     * checks are returned within the first 7 days after the deposit is made.
     */
    export interface CheckDepositReturn {
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
     * A Check Transfer Deposit object. This field will be present in the JSON response
     * if and only if `category` is equal to `check_transfer_deposit`. An Inbound Check
     * is a check drawn on an Increase account that has been deposited by an external
     * bank account. These types of checks are not pre-registered.
     */
    export interface CheckTransferDeposit {
      /**
       * The identifier of the API File object containing an image of the back of the
       * deposited check.
       */
      back_image_file_id: string | null;

      /**
       * The American Bankers' Association (ABA) Routing Transit Number (RTN) for the
       * bank depositing this check. In some rare cases, this is not transmitted via
       * Check21 and the value will be null.
       */
      bank_of_first_deposit_routing_number: string | null;

      /**
       * When the check was deposited.
       */
      deposited_at: string;

      /**
       * The identifier of the API File object containing an image of the front of the
       * deposited check.
       */
      front_image_file_id: string | null;

      /**
       * The identifier of the Inbound Check Deposit object associated with this
       * transaction.
       */
      inbound_check_deposit_id: string | null;

      /**
       * The identifier of the Transaction object created when the check was deposited.
       */
      transaction_id: string | null;

      /**
       * The identifier of the Check Transfer object that was deposited.
       */
      transfer_id: string | null;

      /**
       * A constant representing the object's type. For this resource it will always be
       * `check_transfer_deposit`.
       */
      type: 'check_transfer_deposit';

      [k: string]: unknown;
    }

    /**
     * A FedNow Transfer Acknowledgement object. This field will be present in the JSON
     * response if and only if `category` is equal to
     * `fednow_transfer_acknowledgement`. A FedNow Transfer Acknowledgement is created
     * when a FedNow Transfer sent from Increase is acknowledged by the receiving bank.
     */
    export interface FednowTransferAcknowledgement {
      /**
       * The identifier of the FedNow Transfer that led to this Transaction.
       */
      transfer_id: string;

      [k: string]: unknown;
    }

    /**
     * A Fee Payment object. This field will be present in the JSON response if and
     * only if `category` is equal to `fee_payment`. A Fee Payment represents a payment
     * made to Increase.
     */
    export interface FeePayment {
      /**
       * The amount in the minor unit of the transaction's currency. For dollars, for
       * example, this is cents.
       */
      amount: number;

      /**
       * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transaction
       * currency.
       *
       * - `USD` - US Dollar (USD)
       */
      currency: 'USD';

      /**
       * The start of this payment's fee period, usually the first day of a month.
       */
      fee_period_start: string;

      /**
       * The Program for which this fee was incurred.
       */
      program_id: string | null;

      [k: string]: unknown;
    }

    /**
     * An Inbound ACH Transfer Intention object. This field will be present in the JSON
     * response if and only if `category` is equal to `inbound_ach_transfer`. An
     * Inbound ACH Transfer Intention is created when an ACH transfer is initiated at
     * another bank and received by Increase.
     */
    export interface InboundACHTransfer {
      /**
       * Additional information sent from the originator.
       */
      addenda: InboundACHTransfer.Addenda | null;

      /**
       * The transfer amount in USD cents.
       */
      amount: number;

      /**
       * The description of the date of the transfer, usually in the format `YYMMDD`.
       */
      originator_company_descriptive_date: string | null;

      /**
       * Data set by the originator.
       */
      originator_company_discretionary_data: string | null;

      /**
       * An informational description of the transfer.
       */
      originator_company_entry_description: string;

      /**
       * An identifier for the originating company. This is generally, but not always, a
       * stable identifier across multiple transfers.
       */
      originator_company_id: string;

      /**
       * A name set by the originator to identify themselves.
       */
      originator_company_name: string;

      /**
       * The originator's identifier for the transfer recipient.
       */
      receiver_id_number: string | null;

      /**
       * The name of the transfer recipient. This value is informational and not verified
       * by Increase.
       */
      receiver_name: string | null;

      /**
       * A 15 digit number recorded in the Nacha file and available to both the
       * originating and receiving bank. Along with the amount, date, and originating
       * routing number, this can be used to identify the ACH transfer at either bank.
       * ACH trace numbers are not unique, but are
       * [used to correlate returns](https://increase.com/documentation/ach-returns#ach-returns).
       */
      trace_number: string;

      /**
       * The Inbound ACH Transfer's identifier.
       */
      transfer_id: string;

      [k: string]: unknown;
    }

    export namespace InboundACHTransfer {
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
    }

    /**
     * An Inbound ACH Transfer Return Intention object. This field will be present in
     * the JSON response if and only if `category` is equal to
     * `inbound_ach_transfer_return_intention`. An Inbound ACH Transfer Return
     * Intention is created when an ACH transfer is initiated at another bank and
     * returned by Increase.
     */
    export interface InboundACHTransferReturnIntention {
      /**
       * The ID of the Inbound ACH Transfer that is being returned.
       */
      inbound_ach_transfer_id: string;

      [k: string]: unknown;
    }

    /**
     * An Inbound Check Adjustment object. This field will be present in the JSON
     * response if and only if `category` is equal to `inbound_check_adjustment`. An
     * Inbound Check Adjustment is created when Increase receives an adjustment for a
     * check or return deposited through Check21.
     */
    export interface InboundCheckAdjustment {
      /**
       * The ID of the transaction that was adjusted.
       */
      adjusted_transaction_id: string;

      /**
       * The amount of the check adjustment.
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

      [k: string]: unknown;
    }

    /**
     * An Inbound Check Deposit Return Intention object. This field will be present in
     * the JSON response if and only if `category` is equal to
     * `inbound_check_deposit_return_intention`. An Inbound Check Deposit Return
     * Intention is created when Increase receives an Inbound Check and the User
     * requests that it be returned.
     */
    export interface InboundCheckDepositReturnIntention {
      /**
       * The ID of the Inbound Check Deposit that is being returned.
       */
      inbound_check_deposit_id: string;

      /**
       * The identifier of the Check Transfer object that was deposited.
       */
      transfer_id: string | null;

      [k: string]: unknown;
    }

    /**
     * An Inbound FedNow Transfer Confirmation object. This field will be present in
     * the JSON response if and only if `category` is equal to
     * `inbound_fednow_transfer_confirmation`. An Inbound FedNow Transfer Confirmation
     * is created when a FedNow transfer is initiated at another bank and received by
     * Increase.
     */
    export interface InboundFednowTransferConfirmation {
      /**
       * The identifier of the FedNow Transfer that led to this Transaction.
       */
      transfer_id: string;

      [k: string]: unknown;
    }

    /**
     * An Inbound Real-Time Payments Transfer Confirmation object. This field will be
     * present in the JSON response if and only if `category` is equal to
     * `inbound_real_time_payments_transfer_confirmation`. An Inbound Real-Time
     * Payments Transfer Confirmation is created when a Real-Time Payments transfer is
     * initiated at another bank and received by Increase.
     */
    export interface InboundRealTimePaymentsTransferConfirmation {
      /**
       * The amount in the minor unit of the transfer's currency. For dollars, for
       * example, this is cents.
       */
      amount: number;

      /**
       * The name the sender of the transfer specified as the recipient of the transfer.
       */
      creditor_name: string;

      /**
       * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code of the transfer's
       * currency. This will always be "USD" for a Real-Time Payments transfer.
       *
       * - `USD` - US Dollar (USD)
       */
      currency: 'USD';

      /**
       * The account number of the account that sent the transfer.
       */
      debtor_account_number: string;

      /**
       * The name provided by the sender of the transfer.
       */
      debtor_name: string;

      /**
       * The routing number of the account that sent the transfer.
       */
      debtor_routing_number: string;

      /**
       * Additional information included with the transfer.
       */
      remittance_information: string | null;

      /**
       * The Real-Time Payments network identification of the transfer.
       */
      transaction_identification: string;

      /**
       * The identifier of the Real-Time Payments Transfer that led to this Transaction.
       */
      transfer_id: string;

      [k: string]: unknown;
    }

    /**
     * An Inbound Wire Reversal object. This field will be present in the JSON response
     * if and only if `category` is equal to `inbound_wire_reversal`. An Inbound Wire
     * Reversal represents a reversal of a wire transfer that was initiated via
     * Increase. The other bank is sending the money back. This most often happens when
     * the original destination account details were incorrect.
     */
    export interface InboundWireReversal {
      /**
       * The amount that was reversed in USD cents.
       */
      amount: number;

      /**
       * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
       * the reversal was created.
       */
      created_at: string;

      /**
       * The debtor's routing number.
       */
      debtor_routing_number: string | null;

      /**
       * The description on the reversal message from Fedwire, set by the reversing bank.
       */
      description: string;

      /**
       * The Fedwire cycle date for the wire reversal. The "Fedwire day" begins at 9:00
       * PM Eastern Time on the evening before the `cycle date`.
       */
      input_cycle_date: string;

      /**
       * The Fedwire transaction identifier.
       */
      input_message_accountability_data: string;

      /**
       * The Fedwire sequence number.
       */
      input_sequence_number: string;

      /**
       * The Fedwire input source identifier.
       */
      input_source: string;

      /**
       * The sending bank's identifier for the reversal.
       */
      instruction_identification: string | null;

      /**
       * Additional information about the reason for the reversal.
       */
      return_reason_additional_information: string | null;

      /**
       * A code provided by the sending bank giving a reason for the reversal. The common
       * return reason codes are
       * [documented here](/documentation/wire-reversals#reversal-reason-codes).
       */
      return_reason_code: string | null;

      /**
       * An Increase-generated description of the `return_reason_code`.
       */
      return_reason_code_description: string | null;

      /**
       * The ID for the Transaction associated with the transfer reversal.
       */
      transaction_id: string;

      /**
       * The ID for the Wire Transfer that is being reversed.
       */
      wire_transfer_id: string;

      [k: string]: unknown;
    }

    /**
     * An Inbound Wire Transfer Intention object. This field will be present in the
     * JSON response if and only if `category` is equal to `inbound_wire_transfer`. An
     * Inbound Wire Transfer Intention is created when a wire transfer is initiated at
     * another bank and received by Increase.
     */
    export interface InboundWireTransfer {
      /**
       * The amount in USD cents.
       */
      amount: number;

      /**
       * A free-form address field set by the sender.
       */
      creditor_address_line1: string | null;

      /**
       * A free-form address field set by the sender.
       */
      creditor_address_line2: string | null;

      /**
       * A free-form address field set by the sender.
       */
      creditor_address_line3: string | null;

      /**
       * A name set by the sender.
       */
      creditor_name: string | null;

      /**
       * A free-form address field set by the sender.
       */
      debtor_address_line1: string | null;

      /**
       * A free-form address field set by the sender.
       */
      debtor_address_line2: string | null;

      /**
       * A free-form address field set by the sender.
       */
      debtor_address_line3: string | null;

      /**
       * A name set by the sender.
       */
      debtor_name: string | null;

      /**
       * An Increase-constructed description of the transfer.
       */
      description: string;

      /**
       * A free-form reference string set by the sender, to help identify the transfer.
       */
      end_to_end_identification: string | null;

      /**
       * A unique identifier available to the originating and receiving banks, commonly
       * abbreviated as IMAD. It is created when the wire is submitted to the Fedwire
       * service and is helpful when debugging wires with the originating bank.
       */
      input_message_accountability_data: string | null;

      /**
       * The American Banking Association (ABA) routing number of the bank that sent the
       * wire.
       */
      instructing_agent_routing_number: string | null;

      /**
       * The sending bank's identifier for the wire transfer.
       */
      instruction_identification: string | null;

      /**
       * The ID of the Inbound Wire Transfer object that resulted in this Transaction.
       */
      transfer_id: string;

      /**
       * The Unique End-to-end Transaction Reference
       * ([UETR](https://www.swift.com/payments/what-unique-end-end-transaction-reference-uetr))
       * of the transfer.
       */
      unique_end_to_end_transaction_reference: string | null;

      /**
       * A free-form message set by the sender.
       */
      unstructured_remittance_information: string | null;

      [k: string]: unknown;
    }

    /**
     * An Inbound Wire Transfer Reversal Intention object. This field will be present
     * in the JSON response if and only if `category` is equal to
     * `inbound_wire_transfer_reversal`. An Inbound Wire Transfer Reversal Intention is
     * created when Increase has received a wire and the User requests that it be
     * reversed.
     */
    export interface InboundWireTransferReversal {
      /**
       * The ID of the Inbound Wire Transfer that is being reversed.
       */
      inbound_wire_transfer_id: string;

      [k: string]: unknown;
    }

    /**
     * An Interest Payment object. This field will be present in the JSON response if
     * and only if `category` is equal to `interest_payment`. An Interest Payment
     * represents a payment of interest on an account. Interest is usually paid
     * monthly.
     */
    export interface InterestPayment {
      /**
       * The account on which the interest was accrued.
       */
      accrued_on_account_id: string;

      /**
       * The amount in the minor unit of the transaction's currency. For dollars, for
       * example, this is cents.
       */
      amount: number;

      /**
       * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transaction
       * currency.
       *
       * - `USD` - US Dollar (USD)
       */
      currency: 'USD';

      /**
       * The end of the period for which this transaction paid interest.
       */
      period_end: string;

      /**
       * The start of the period for which this transaction paid interest.
       */
      period_start: string;

      [k: string]: unknown;
    }

    /**
     * An Internal Source object. This field will be present in the JSON response if
     * and only if `category` is equal to `internal_source`. A transaction between the
     * user and Increase. See the `reason` attribute for more information.
     */
    export interface InternalSource {
      /**
       * The amount in the minor unit of the transaction's currency. For dollars, for
       * example, this is cents.
       */
      amount: number;

      /**
       * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transaction
       * currency.
       *
       * - `USD` - US Dollar (USD)
       */
      currency: 'USD';

      /**
       * An Internal Source is a transaction between you and Increase. This describes the
       * reason for the transaction.
       *
       * - `account_closure` - Account closure
       * - `account_revenue_payment_distribution` - Account revenue payment distribution
       * - `bank_drawn_check` - Bank-drawn check
       * - `bank_drawn_check_credit` - Bank-drawn check credit
       * - `bank_migration` - Bank migration
       * - `check_adjustment` - Check adjustment
       * - `collection_payment` - Collection payment
       * - `collection_receivable` - Collection receivable
       * - `dishonored_ach_return` - Dishonored ACH return
       * - `empyreal_adjustment` - Empyreal adjustment
       * - `error` - Error
       * - `error_correction` - Error correction
       * - `fees` - Fees
       * - `general_ledger_transfer` - General ledger transfer
       * - `interest` - Interest
       * - `negative_balance_forgiveness` - Negative balance forgiveness
       * - `sample_funds` - Sample funds
       * - `sample_funds_return` - Sample funds return
       */
      reason:
        | 'account_closure'
        | 'account_revenue_payment_distribution'
        | 'bank_drawn_check'
        | 'bank_drawn_check_credit'
        | 'bank_migration'
        | 'check_adjustment'
        | 'collection_payment'
        | 'collection_receivable'
        | 'dishonored_ach_return'
        | 'empyreal_adjustment'
        | 'error'
        | 'error_correction'
        | 'fees'
        | 'general_ledger_transfer'
        | 'interest'
        | 'negative_balance_forgiveness'
        | 'sample_funds'
        | 'sample_funds_return';

      [k: string]: unknown;
    }

    /**
     * If the category of this Transaction source is equal to `other`, this field will
     * contain an empty object, otherwise it will contain null.
     */
    export interface Other {}

    /**
     * A Real-Time Payments Transfer Acknowledgement object. This field will be present
     * in the JSON response if and only if `category` is equal to
     * `real_time_payments_transfer_acknowledgement`. A Real-Time Payments Transfer
     * Acknowledgement is created when a Real-Time Payments Transfer sent from Increase
     * is acknowledged by the receiving bank.
     */
    export interface RealTimePaymentsTransferAcknowledgement {
      /**
       * The transfer amount in USD cents.
       */
      amount: number;

      /**
       * The destination account number.
       */
      destination_account_number: string;

      /**
       * The American Bankers' Association (ABA) Routing Transit Number (RTN).
       */
      destination_routing_number: string;

      /**
       * Unstructured information that will show on the recipient's bank statement.
       */
      remittance_information: string;

      /**
       * The identifier of the Real-Time Payments Transfer that led to this Transaction.
       */
      transfer_id: string;

      [k: string]: unknown;
    }

    /**
     * A Sample Funds object. This field will be present in the JSON response if and
     * only if `category` is equal to `sample_funds`. Sample funds for testing
     * purposes.
     */
    export interface SampleFunds {
      /**
       * Where the sample funds came from.
       */
      originator: string;

      [k: string]: unknown;
    }

    /**
     * A Swift Transfer Intention object. This field will be present in the JSON
     * response if and only if `category` is equal to `swift_transfer_intention`. A
     * Swift Transfer initiated via Increase.
     */
    export interface SwiftTransferIntention {
      /**
       * The identifier of the Swift Transfer that led to this Transaction.
       */
      transfer_id: string;

      [k: string]: unknown;
    }

    /**
     * A Swift Transfer Return object. This field will be present in the JSON response
     * if and only if `category` is equal to `swift_transfer_return`. A Swift Transfer
     * Return is created when a Swift Transfer is returned by the receiving bank.
     */
    export interface SwiftTransferReturn {
      /**
       * The identifier of the Swift Transfer that led to this Transaction.
       */
      transfer_id: string;

      [k: string]: unknown;
    }

    /**
     * A Wire Transfer Intention object. This field will be present in the JSON
     * response if and only if `category` is equal to `wire_transfer_intention`. A Wire
     * Transfer initiated via Increase and sent to a different bank.
     */
    export interface WireTransferIntention {
      /**
       * The destination account number.
       */
      account_number: string;

      /**
       * The transfer amount in USD cents.
       */
      amount: number;

      /**
       * The message that will show on the recipient's bank statement.
       */
      message_to_recipient: string;

      /**
       * The American Bankers' Association (ABA) Routing Transit Number (RTN).
       */
      routing_number: string;

      /**
       * The identifier of the Wire Transfer that led to this Transaction.
       */
      transfer_id: string;

      [k: string]: unknown;
    }
  }
}

export interface TransactionListParams extends PageParams {
  /**
   * Filter Transactions for those belonging to the specified Account.
   */
  account_id?: string;

  category?: TransactionListParams.Category;

  created_at?: TransactionListParams.CreatedAt;

  /**
   * Filter Transactions for those belonging to the specified route. This could be a
   * Card ID or an Account Number ID.
   */
  route_id?: string;
}

export namespace TransactionListParams {
  export interface Category {
    /**
     * Return results whose value is in the provided list. For GET requests, this
     * should be encoded as a comma-delimited string, such as `?in=one,two,three`.
     */
    in?: Array<
      | 'account_transfer_intention'
      | 'ach_transfer_intention'
      | 'ach_transfer_rejection'
      | 'ach_transfer_return'
      | 'cashback_payment'
      | 'card_dispute_acceptance'
      | 'card_dispute_financial'
      | 'card_dispute_loss'
      | 'card_refund'
      | 'card_settlement'
      | 'card_financial'
      | 'card_revenue_payment'
      | 'check_deposit_acceptance'
      | 'check_deposit_return'
      | 'fednow_transfer_acknowledgement'
      | 'check_transfer_deposit'
      | 'fee_payment'
      | 'inbound_ach_transfer'
      | 'inbound_ach_transfer_return_intention'
      | 'inbound_check_deposit_return_intention'
      | 'inbound_check_adjustment'
      | 'inbound_fednow_transfer_confirmation'
      | 'inbound_real_time_payments_transfer_confirmation'
      | 'inbound_wire_reversal'
      | 'inbound_wire_transfer'
      | 'inbound_wire_transfer_reversal'
      | 'interest_payment'
      | 'internal_source'
      | 'real_time_payments_transfer_acknowledgement'
      | 'sample_funds'
      | 'wire_transfer_intention'
      | 'swift_transfer_intention'
      | 'swift_transfer_return'
      | 'card_push_transfer_acceptance'
      | 'account_revenue_payment'
      | 'blockchain_onramp_transfer_intention'
      | 'blockchain_offramp_transfer_settlement'
      | 'other'
    >;
  }

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

export declare namespace Transactions {
  export {
    type Transaction as Transaction,
    type TransactionsPage as TransactionsPage,
    type TransactionListParams as TransactionListParams,
  };
}
