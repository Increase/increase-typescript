// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class PendingTransactions extends APIResource {
  /**
   * Creates a pending transaction on an account. This can be useful to hold funds
   * for an external payment or known future transaction outside of Increase (only
   * negative amounts are supported). The resulting Pending Transaction will have a
   * `category` of `user_initiated_hold` and can be released via the API to unlock
   * the held funds.
   *
   * @example
   * ```ts
   * const pendingTransaction =
   *   await client.pendingTransactions.create({
   *     account_id: 'account_in71c4amph0vgo2qllky',
   *     amount: -1000,
   *   });
   * ```
   */
  create(body: PendingTransactionCreateParams, options?: RequestOptions): APIPromise<PendingTransaction> {
    return this._client.post('/pending_transactions', { body, ...options });
  }

  /**
   * Retrieve a Pending Transaction
   *
   * @example
   * ```ts
   * const pendingTransaction =
   *   await client.pendingTransactions.retrieve(
   *     'pending_transaction_k1sfetcau2qbvjbzgju4',
   *   );
   * ```
   */
  retrieve(pendingTransactionID: string, options?: RequestOptions): APIPromise<PendingTransaction> {
    return this._client.get(path`/pending_transactions/${pendingTransactionID}`, options);
  }

  /**
   * List Pending Transactions
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const pendingTransaction of client.pendingTransactions.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: PendingTransactionListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PendingTransactionsPage, PendingTransaction> {
    return this._client.getAPIList('/pending_transactions', Page<PendingTransaction>, { query, ...options });
  }

  /**
   * Release a Pending Transaction you had previously created. The Pending
   * Transaction must have a `category` of `user_initiated_hold` and a `status` of
   * `pending`. This will unlock the held funds and mark the Pending Transaction as
   * complete.
   *
   * @example
   * ```ts
   * const pendingTransaction =
   *   await client.pendingTransactions.release(
   *     'pending_transaction_k1sfetcau2qbvjbzgju4',
   *   );
   * ```
   */
  release(pendingTransactionID: string, options?: RequestOptions): APIPromise<PendingTransaction> {
    return this._client.post(path`/pending_transactions/${pendingTransactionID}/release`, options);
  }
}

export type PendingTransactionsPage = Page<PendingTransaction>;

/**
 * Pending Transactions are potential future additions and removals of money from
 * your bank account. They impact your available balance, but not your current
 * balance. To learn more, see
 * [Transactions and Transfers](/documentation/transactions-transfers).
 */
export interface PendingTransaction {
  /**
   * The Pending Transaction identifier.
   */
  id: string;

  /**
   * The identifier for the account this Pending Transaction belongs to.
   */
  account_id: string;

  /**
   * The Pending Transaction amount in the minor unit of its currency. For dollars,
   * for example, this is cents.
   */
  amount: number;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date on which the Pending
   * Transaction was completed.
   */
  completed_at: string | null;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date on which the Pending
   * Transaction occurred.
   */
  created_at: string;

  /**
   * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the Pending
   * Transaction's currency. This will match the currency on the Pending
   * Transaction's Account.
   *
   * - `USD` - US Dollar (USD)
   */
  currency: 'USD';

  /**
   * For a Pending Transaction related to a transfer, this is the description you
   * provide. For a Pending Transaction related to a payment, this is the description
   * the vendor provides.
   */
  description: string;

  /**
   * The amount that this Pending Transaction decrements the available balance of its
   * Account. This is usually the same as `amount`, but will differ if the amount is
   * positive.
   */
  held_amount: number;

  /**
   * The identifier for the route this Pending Transaction came through. Routes are
   * things like cards and ACH details.
   */
  route_id: string | null;

  /**
   * The type of the route this Pending Transaction came through.
   *
   * - `account_number` - An Account Number.
   * - `card` - A Card.
   * - `lockbox` - A Lockbox.
   */
  route_type: 'account_number' | 'card' | 'lockbox' | null;

  /**
   * This is an object giving more details on the network-level event that caused the
   * Pending Transaction. For example, for a card transaction this lists the
   * merchant's industry and location.
   */
  source: PendingTransaction.Source;

  /**
   * Whether the Pending Transaction has been confirmed and has an associated
   * Transaction.
   *
   * - `pending` - The Pending Transaction is still awaiting confirmation.
   * - `complete` - The Pending Transaction is confirmed. An associated Transaction
   *   exists for this object. The Pending Transaction will no longer count against
   *   your balance and can generally be hidden from UIs, etc.
   */
  status: 'pending' | 'complete';

  /**
   * A constant representing the object's type. For this resource it will always be
   * `pending_transaction`.
   */
  type: 'pending_transaction';

  [k: string]: unknown;
}

export namespace PendingTransaction {
  /**
   * This is an object giving more details on the network-level event that caused the
   * Pending Transaction. For example, for a card transaction this lists the
   * merchant's industry and location.
   */
  export interface Source {
    /**
     * An Account Transfer Instruction object. This field will be present in the JSON
     * response if and only if `category` is equal to `account_transfer_instruction`.
     */
    account_transfer_instruction: Source.AccountTransferInstruction | null;

    /**
     * An ACH Transfer Instruction object. This field will be present in the JSON
     * response if and only if `category` is equal to `ach_transfer_instruction`.
     */
    ach_transfer_instruction: Source.ACHTransferInstruction | null;

    /**
     * A Card Authorization object. This field will be present in the JSON response if
     * and only if `category` is equal to `card_authorization`. Card Authorizations are
     * temporary holds placed on a customers funds with the intent to later clear a
     * transaction.
     */
    card_authorization: Source.CardAuthorization | null;

    /**
     * A Card Push Transfer Instruction object. This field will be present in the JSON
     * response if and only if `category` is equal to `card_push_transfer_instruction`.
     */
    card_push_transfer_instruction: Source.CardPushTransferInstruction | null;

    /**
     * The type of the resource. We may add additional possible values for this enum
     * over time; your application should be able to handle such additions gracefully.
     *
     * - `account_transfer_instruction` - Account Transfer Instruction: details will be
     *   under the `account_transfer_instruction` object.
     * - `ach_transfer_instruction` - ACH Transfer Instruction: details will be under
     *   the `ach_transfer_instruction` object.
     * - `card_authorization` - Card Authorization: details will be under the
     *   `card_authorization` object.
     * - `check_deposit_instruction` - Check Deposit Instruction: details will be under
     *   the `check_deposit_instruction` object.
     * - `check_transfer_instruction` - Check Transfer Instruction: details will be
     *   under the `check_transfer_instruction` object.
     * - `fednow_transfer_instruction` - FedNow Transfer Instruction: details will be
     *   under the `fednow_transfer_instruction` object.
     * - `inbound_funds_hold` - Inbound Funds Hold: details will be under the
     *   `inbound_funds_hold` object.
     * - `user_initiated_hold` - User Initiated Hold: details will be under the
     *   `user_initiated_hold` object.
     * - `real_time_payments_transfer_instruction` - Real-Time Payments Transfer
     *   Instruction: details will be under the
     *   `real_time_payments_transfer_instruction` object.
     * - `wire_transfer_instruction` - Wire Transfer Instruction: details will be under
     *   the `wire_transfer_instruction` object.
     * - `inbound_wire_transfer_reversal` - Inbound Wire Transfer Reversal: details
     *   will be under the `inbound_wire_transfer_reversal` object.
     * - `swift_transfer_instruction` - Swift Transfer Instruction: details will be
     *   under the `swift_transfer_instruction` object.
     * - `card_push_transfer_instruction` - Card Push Transfer Instruction: details
     *   will be under the `card_push_transfer_instruction` object.
     * - `other` - The Pending Transaction was made for an undocumented or deprecated
     *   reason.
     */
    category:
      | 'account_transfer_instruction'
      | 'ach_transfer_instruction'
      | 'card_authorization'
      | 'check_deposit_instruction'
      | 'check_transfer_instruction'
      | 'fednow_transfer_instruction'
      | 'inbound_funds_hold'
      | 'user_initiated_hold'
      | 'real_time_payments_transfer_instruction'
      | 'wire_transfer_instruction'
      | 'inbound_wire_transfer_reversal'
      | 'swift_transfer_instruction'
      | 'card_push_transfer_instruction'
      | 'other';

    /**
     * A Check Deposit Instruction object. This field will be present in the JSON
     * response if and only if `category` is equal to `check_deposit_instruction`.
     */
    check_deposit_instruction: Source.CheckDepositInstruction | null;

    /**
     * A Check Transfer Instruction object. This field will be present in the JSON
     * response if and only if `category` is equal to `check_transfer_instruction`.
     */
    check_transfer_instruction: Source.CheckTransferInstruction | null;

    /**
     * A FedNow Transfer Instruction object. This field will be present in the JSON
     * response if and only if `category` is equal to `fednow_transfer_instruction`.
     */
    fednow_transfer_instruction: Source.FednowTransferInstruction | null;

    /**
     * An Inbound Funds Hold object. This field will be present in the JSON response if
     * and only if `category` is equal to `inbound_funds_hold`. We hold funds for
     * certain transaction types to account for return windows where funds might still
     * be clawed back by the sending institution.
     */
    inbound_funds_hold: Source.InboundFundsHold | null;

    /**
     * An Inbound Wire Transfer Reversal object. This field will be present in the JSON
     * response if and only if `category` is equal to `inbound_wire_transfer_reversal`.
     * An Inbound Wire Transfer Reversal is created when Increase has received a wire
     * and the User requests that it be reversed.
     */
    inbound_wire_transfer_reversal: Source.InboundWireTransferReversal | null;

    /**
     * If the category of this Transaction source is equal to `other`, this field will
     * contain an empty object, otherwise it will contain null.
     */
    other: Source.Other | null;

    /**
     * A Real-Time Payments Transfer Instruction object. This field will be present in
     * the JSON response if and only if `category` is equal to
     * `real_time_payments_transfer_instruction`.
     */
    real_time_payments_transfer_instruction: Source.RealTimePaymentsTransferInstruction | null;

    /**
     * A Swift Transfer Instruction object. This field will be present in the JSON
     * response if and only if `category` is equal to `swift_transfer_instruction`.
     */
    swift_transfer_instruction: Source.SwiftTransferInstruction | null;

    /**
     * An User Initiated Hold object. This field will be present in the JSON response
     * if and only if `category` is equal to `user_initiated_hold`. Created when a user
     * initiates a hold on funds in their account.
     */
    user_initiated_hold: { [key: string]: unknown } | null;

    /**
     * A Wire Transfer Instruction object. This field will be present in the JSON
     * response if and only if `category` is equal to `wire_transfer_instruction`.
     */
    wire_transfer_instruction: Source.WireTransferInstruction | null;

    [k: string]: unknown;
  }

  export namespace Source {
    /**
     * An Account Transfer Instruction object. This field will be present in the JSON
     * response if and only if `category` is equal to `account_transfer_instruction`.
     */
    export interface AccountTransferInstruction {
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
       * The identifier of the Account Transfer that led to this Pending Transaction.
       */
      transfer_id: string;

      [k: string]: unknown;
    }

    /**
     * An ACH Transfer Instruction object. This field will be present in the JSON
     * response if and only if `category` is equal to `ach_transfer_instruction`.
     */
    export interface ACHTransferInstruction {
      /**
       * The pending amount in USD cents.
       */
      amount: number;

      /**
       * The identifier of the ACH Transfer that led to this Pending Transaction.
       */
      transfer_id: string;

      [k: string]: unknown;
    }

    /**
     * A Card Authorization object. This field will be present in the JSON response if
     * and only if `category` is equal to `card_authorization`. Card Authorizations are
     * temporary holds placed on a customers funds with the intent to later clear a
     * transaction.
     */
    export interface CardAuthorization {
      /**
       * The Card Authorization identifier.
       */
      id: string;

      /**
       * Whether this authorization was approved by Increase, the card network through
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
      additional_amounts: CardAuthorization.AdditionalAmounts;

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
       * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) when this authorization
       * will expire and the pending transaction will be released.
       */
      expires_at: string;

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
      network_details: CardAuthorization.NetworkDetails;

      /**
       * Network-specific identifiers for a specific request or transaction.
       */
      network_identifiers: CardAuthorization.NetworkIdentifiers;

      /**
       * The risk score generated by the card network. For Visa this is the Visa Advanced
       * Authorization risk score, from 0 to 99, where 99 is the riskiest. For Pulse the
       * score is from 0 to 999, where 999 is the riskiest.
       */
      network_risk_score: number | null;

      /**
       * The identifier of the Pending Transaction associated with this Transaction.
       */
      pending_transaction_id: string | null;

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
       * The processing category describes the intent behind the authorization, such as
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
       * A constant representing the object's type. For this resource it will always be
       * `card_authorization`.
       */
      type: 'card_authorization';

      /**
       * Fields related to verification of cardholder-provided values.
       */
      verification: CardAuthorization.Verification;

      [k: string]: unknown;
    }

    export namespace CardAuthorization {
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
     * A Card Push Transfer Instruction object. This field will be present in the JSON
     * response if and only if `category` is equal to `card_push_transfer_instruction`.
     */
    export interface CardPushTransferInstruction {
      /**
       * The transfer amount in USD cents.
       */
      amount: number;

      /**
       * The identifier of the Card Push Transfer that led to this Pending Transaction.
       */
      transfer_id: string;
    }

    /**
     * A Check Deposit Instruction object. This field will be present in the JSON
     * response if and only if `category` is equal to `check_deposit_instruction`.
     */
    export interface CheckDepositInstruction {
      /**
       * The pending amount in USD cents.
       */
      amount: number;

      /**
       * The identifier of the File containing the image of the back of the check that
       * was deposited.
       */
      back_image_file_id: string | null;

      /**
       * The identifier of the Check Deposit.
       */
      check_deposit_id: string | null;

      /**
       * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the
       * transaction's currency.
       *
       * - `USD` - US Dollar (USD)
       */
      currency: 'USD';

      /**
       * The identifier of the File containing the image of the front of the check that
       * was deposited.
       */
      front_image_file_id: string;

      [k: string]: unknown;
    }

    /**
     * A Check Transfer Instruction object. This field will be present in the JSON
     * response if and only if `category` is equal to `check_transfer_instruction`.
     */
    export interface CheckTransferInstruction {
      /**
       * The transfer amount in USD cents.
       */
      amount: number;

      /**
       * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the check's
       * currency.
       *
       * - `USD` - US Dollar (USD)
       */
      currency: 'USD';

      /**
       * The identifier of the Check Transfer that led to this Pending Transaction.
       */
      transfer_id: string;

      [k: string]: unknown;
    }

    /**
     * A FedNow Transfer Instruction object. This field will be present in the JSON
     * response if and only if `category` is equal to `fednow_transfer_instruction`.
     */
    export interface FednowTransferInstruction {
      /**
       * The identifier of the FedNow Transfer that led to this Pending Transaction.
       */
      transfer_id: string;

      [k: string]: unknown;
    }

    /**
     * An Inbound Funds Hold object. This field will be present in the JSON response if
     * and only if `category` is equal to `inbound_funds_hold`. We hold funds for
     * certain transaction types to account for return windows where funds might still
     * be clawed back by the sending institution.
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

    /**
     * An Inbound Wire Transfer Reversal object. This field will be present in the JSON
     * response if and only if `category` is equal to `inbound_wire_transfer_reversal`.
     * An Inbound Wire Transfer Reversal is created when Increase has received a wire
     * and the User requests that it be reversed.
     */
    export interface InboundWireTransferReversal {
      /**
       * The ID of the Inbound Wire Transfer that is being reversed.
       */
      inbound_wire_transfer_id: string;

      [k: string]: unknown;
    }

    /**
     * If the category of this Transaction source is equal to `other`, this field will
     * contain an empty object, otherwise it will contain null.
     */
    export interface Other {}

    /**
     * A Real-Time Payments Transfer Instruction object. This field will be present in
     * the JSON response if and only if `category` is equal to
     * `real_time_payments_transfer_instruction`.
     */
    export interface RealTimePaymentsTransferInstruction {
      /**
       * The transfer amount in USD cents.
       */
      amount: number;

      /**
       * The identifier of the Real-Time Payments Transfer that led to this Pending
       * Transaction.
       */
      transfer_id: string;
    }

    /**
     * A Swift Transfer Instruction object. This field will be present in the JSON
     * response if and only if `category` is equal to `swift_transfer_instruction`.
     */
    export interface SwiftTransferInstruction {
      /**
       * The identifier of the Swift Transfer that led to this Pending Transaction.
       */
      transfer_id: string;

      [k: string]: unknown;
    }

    /**
     * A Wire Transfer Instruction object. This field will be present in the JSON
     * response if and only if `category` is equal to `wire_transfer_instruction`.
     */
    export interface WireTransferInstruction {
      /**
       * The account number for the destination account.
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
       * The American Bankers' Association (ABA) Routing Transit Number (RTN) for the
       * destination account.
       */
      routing_number: string;

      /**
       * The identifier of the Wire Transfer that led to this Pending Transaction.
       */
      transfer_id: string;

      [k: string]: unknown;
    }
  }
}

export interface PendingTransactionCreateParams {
  /**
   * The Account to place the hold on.
   */
  account_id: string;

  /**
   * The amount to hold in the minor unit of the account's currency. For dollars, for
   * example, this is cents. This should be a negative amount - to hold $1.00 from
   * the account, you would pass -100.
   */
  amount: number;

  /**
   * The description you choose to give the hold.
   */
  description?: string;

  [k: string]: unknown;
}

export interface PendingTransactionListParams extends PageParams {
  /**
   * Filter pending transactions to those belonging to the specified Account.
   */
  account_id?: string;

  category?: PendingTransactionListParams.Category;

  created_at?: PendingTransactionListParams.CreatedAt;

  /**
   * Filter pending transactions to those belonging to the specified Route.
   */
  route_id?: string;

  status?: PendingTransactionListParams.Status;
}

export namespace PendingTransactionListParams {
  export interface Category {
    /**
     * Return results whose value is in the provided list. For GET requests, this
     * should be encoded as a comma-delimited string, such as `?in=one,two,three`.
     */
    in?: Array<
      | 'account_transfer_instruction'
      | 'ach_transfer_instruction'
      | 'card_authorization'
      | 'check_deposit_instruction'
      | 'check_transfer_instruction'
      | 'fednow_transfer_instruction'
      | 'inbound_funds_hold'
      | 'user_initiated_hold'
      | 'real_time_payments_transfer_instruction'
      | 'wire_transfer_instruction'
      | 'inbound_wire_transfer_reversal'
      | 'swift_transfer_instruction'
      | 'card_push_transfer_instruction'
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

  export interface Status {
    /**
     * Filter Pending Transactions for those with the specified status. By default only
     * Pending Transactions in with status `pending` will be returned. For GET
     * requests, this should be encoded as a comma-delimited string, such as
     * `?in=one,two,three`.
     */
    in?: Array<'pending' | 'complete'>;
  }
}

export declare namespace PendingTransactions {
  export {
    type PendingTransaction as PendingTransaction,
    type PendingTransactionsPage as PendingTransactionsPage,
    type PendingTransactionCreateParams as PendingTransactionCreateParams,
    type PendingTransactionListParams as PendingTransactionListParams,
  };
}
