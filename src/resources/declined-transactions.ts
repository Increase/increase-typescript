// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class DeclinedTransactions extends APIResource {
  /**
   * Retrieve a Declined Transaction
   *
   * @example
   * ```ts
   * const declinedTransaction =
   *   await client.declinedTransactions.retrieve(
   *     'declined_transaction_17jbn0yyhvkt4v4ooym8',
   *   );
   * ```
   */
  retrieve(declinedTransactionID: string, options?: RequestOptions): APIPromise<DeclinedTransaction> {
    return this._client.get(path`/declined_transactions/${declinedTransactionID}`, options);
  }

  /**
   * List Declined Transactions
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const declinedTransaction of client.declinedTransactions.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: DeclinedTransactionListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<DeclinedTransactionsPage, DeclinedTransaction> {
    return this._client.getAPIList('/declined_transactions', Page<DeclinedTransaction>, {
      query,
      ...options,
    });
  }
}

export type DeclinedTransactionsPage = Page<DeclinedTransaction>;

/**
 * Declined Transactions are refused additions and removals of money from your bank
 * account. For example, Declined Transactions are caused when your Account has an
 * insufficient balance or your Limits are triggered.
 */
export interface DeclinedTransaction {
  /**
   * The Declined Transaction identifier.
   */
  id: string;

  /**
   * The identifier for the Account the Declined Transaction belongs to.
   */
  account_id: string;

  /**
   * The Declined Transaction amount in the minor unit of its currency. For dollars,
   * for example, this is cents.
   */
  amount: number;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date on which the
   * Transaction occurred.
   */
  created_at: string;

  /**
   * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the Declined
   * Transaction's currency. This will match the currency on the Declined
   * Transaction's Account.
   *
   * - `USD` - US Dollar (USD)
   */
  currency: 'USD';

  /**
   * This is the description the vendor provides.
   */
  description: string;

  /**
   * The identifier for the route this Declined Transaction came through. Routes are
   * things like cards and ACH details.
   */
  route_id: string | null;

  /**
   * The type of the route this Declined Transaction came through.
   *
   * - `account_number` - An Account Number.
   * - `card` - A Card.
   * - `lockbox` - A Lockbox.
   */
  route_type: 'account_number' | 'card' | 'lockbox' | null;

  /**
   * This is an object giving more details on the network-level event that caused the
   * Declined Transaction. For example, for a card transaction this lists the
   * merchant's industry and location. Note that for backwards compatibility reasons,
   * additional undocumented keys may appear in this object. These should be treated
   * as deprecated and will be removed in the future.
   */
  source: DeclinedTransaction.Source;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `declined_transaction`.
   */
  type: 'declined_transaction';

  [k: string]: unknown;
}

export namespace DeclinedTransaction {
  /**
   * This is an object giving more details on the network-level event that caused the
   * Declined Transaction. For example, for a card transaction this lists the
   * merchant's industry and location. Note that for backwards compatibility reasons,
   * additional undocumented keys may appear in this object. These should be treated
   * as deprecated and will be removed in the future.
   */
  export interface Source {
    /**
     * The type of the resource. We may add additional possible values for this enum
     * over time; your application should be able to handle such additions gracefully.
     *
     * - `ach_decline` - ACH Decline: details will be under the `ach_decline` object.
     * - `card_decline` - Card Decline: details will be under the `card_decline`
     *   object.
     * - `check_decline` - Check Decline: details will be under the `check_decline`
     *   object.
     * - `inbound_real_time_payments_transfer_decline` - Inbound Real-Time Payments
     *   Transfer Decline: details will be under the
     *   `inbound_real_time_payments_transfer_decline` object.
     * - `inbound_fednow_transfer_decline` - Inbound FedNow Transfer Decline: details
     *   will be under the `inbound_fednow_transfer_decline` object.
     * - `wire_decline` - Wire Decline: details will be under the `wire_decline`
     *   object.
     * - `check_deposit_rejection` - Check Deposit Rejection: details will be under the
     *   `check_deposit_rejection` object.
     * - `other` - The Declined Transaction was made for an undocumented or deprecated
     *   reason.
     */
    category:
      | 'ach_decline'
      | 'card_decline'
      | 'check_decline'
      | 'inbound_real_time_payments_transfer_decline'
      | 'inbound_fednow_transfer_decline'
      | 'wire_decline'
      | 'check_deposit_rejection'
      | 'other';

    /**
     * An ACH Decline object. This field will be present in the JSON response if and
     * only if `category` is equal to `ach_decline`.
     */
    ach_decline?: Source.ACHDecline | null;

    /**
     * A Card Decline object. This field will be present in the JSON response if and
     * only if `category` is equal to `card_decline`.
     */
    card_decline?: Source.CardDecline | null;

    /**
     * A Check Decline object. This field will be present in the JSON response if and
     * only if `category` is equal to `check_decline`.
     */
    check_decline?: Source.CheckDecline | null;

    /**
     * A Check Deposit Rejection object. This field will be present in the JSON
     * response if and only if `category` is equal to `check_deposit_rejection`.
     */
    check_deposit_rejection?: Source.CheckDepositRejection | null;

    /**
     * An Inbound FedNow Transfer Decline object. This field will be present in the
     * JSON response if and only if `category` is equal to
     * `inbound_fednow_transfer_decline`.
     */
    inbound_fednow_transfer_decline?: Source.InboundFednowTransferDecline | null;

    /**
     * An Inbound Real-Time Payments Transfer Decline object. This field will be
     * present in the JSON response if and only if `category` is equal to
     * `inbound_real_time_payments_transfer_decline`.
     */
    inbound_real_time_payments_transfer_decline?: Source.InboundRealTimePaymentsTransferDecline | null;

    /**
     * If the category of this Transaction source is equal to `other`, this field will
     * contain an empty object, otherwise it will contain null.
     */
    other?: Source.Other | null;

    /**
     * A Wire Decline object. This field will be present in the JSON response if and
     * only if `category` is equal to `wire_decline`.
     */
    wire_decline?: Source.WireDecline | null;

    [k: string]: unknown;
  }

  export namespace Source {
    /**
     * An ACH Decline object. This field will be present in the JSON response if and
     * only if `category` is equal to `ach_decline`.
     */
    export interface ACHDecline {
      /**
       * The ACH Decline's identifier.
       */
      id: string;

      /**
       * The declined amount in USD cents.
       */
      amount: number;

      /**
       * The identifier of the Inbound ACH Transfer object associated with this decline.
       */
      inbound_ach_transfer_id: string;

      /**
       * The descriptive date of the transfer.
       */
      originator_company_descriptive_date: string | null;

      /**
       * The additional information included with the transfer.
       */
      originator_company_discretionary_data: string | null;

      /**
       * The identifier of the company that initiated the transfer.
       */
      originator_company_id: string;

      /**
       * The name of the company that initiated the transfer.
       */
      originator_company_name: string;

      /**
       * Why the ACH transfer was declined.
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

      /**
       * The id of the receiver of the transfer.
       */
      receiver_id_number: string | null;

      /**
       * The name of the receiver of the transfer.
       */
      receiver_name: string | null;

      /**
       * The trace number of the transfer.
       */
      trace_number: string;

      /**
       * A constant representing the object's type. For this resource it will always be
       * `ach_decline`.
       */
      type: 'ach_decline';

      [k: string]: unknown;
    }

    /**
     * A Card Decline object. This field will be present in the JSON response if and
     * only if `category` is equal to `card_decline`.
     */
    export interface CardDecline {
      /**
       * The Card Decline identifier.
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
      additional_amounts: CardDecline.AdditionalAmounts;

      /**
       * The declined amount in the minor unit of the destination account currency. For
       * dollars, for example, this is cents.
       */
      amount: number;

      /**
       * The ID of the Card Payment this transaction belongs to.
       */
      card_payment_id: string;

      /**
       * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the destination
       * account currency.
       *
       * - `USD` - US Dollar (USD)
       */
      currency: 'USD';

      /**
       * The identifier of the declined transaction created for this Card Decline.
       */
      declined_transaction_id: string;

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
       * The identifier of the card authorization this request attempted to incrementally
       * authorize.
       */
      incremented_card_authorization_id: string | null;

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
      network_details: CardDecline.NetworkDetails;

      /**
       * Network-specific identifiers for a specific request or transaction.
       */
      network_identifiers: CardDecline.NetworkIdentifiers;

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
       * The declined amount in the minor unit of the transaction's presentment currency.
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
       * This is present if a specific decline reason was given in the real-time
       * decision.
       *
       * - `insufficient_funds` - The cardholder does not have sufficient funds to cover
       *   the transaction. The merchant may attempt to process the transaction again.
       * - `transaction_never_allowed` - This type of transaction is not allowed for this
       *   card. This transaction should not be retried.
       * - `exceeds_approval_limit` - The transaction amount exceeds the cardholder's
       *   approval limit. The merchant may attempt to process the transaction again.
       * - `card_temporarily_disabled` - The card has been temporarily disabled or not
       *   yet activated. The merchant may attempt to process the transaction again.
       * - `suspected_fraud` - The transaction is suspected to be fraudulent. The
       *   merchant may attempt to process the transaction again.
       * - `other` - The transaction was declined for another reason. The merchant may
       *   attempt to process the transaction again. This should be used sparingly.
       */
      real_time_decision_reason:
        | 'insufficient_funds'
        | 'transaction_never_allowed'
        | 'exceeds_approval_limit'
        | 'card_temporarily_disabled'
        | 'suspected_fraud'
        | 'other'
        | null;

      /**
       * Why the transaction was declined.
       *
       * - `account_closed` - The account has been closed.
       * - `card_not_active` - The Card was not active.
       * - `card_canceled` - The Card has been canceled.
       * - `physical_card_not_active` - The Physical Card was not active.
       * - `entity_not_active` - The account's entity was not active.
       * - `group_locked` - The account was inactive.
       * - `insufficient_funds` - The Card's Account did not have a sufficient available
       *   balance.
       * - `cvv2_mismatch` - The given CVV2 did not match the card's value.
       * - `pin_mismatch` - The given PIN did not match the card's value.
       * - `card_expiration_mismatch` - The given expiration date did not match the
       *   card's value. Only applies when a CVV2 is present.
       * - `transaction_not_allowed` - The attempted card transaction is not allowed per
       *   Increase's terms.
       * - `breaches_limit` - The transaction was blocked by a Limit.
       * - `webhook_declined` - Your application declined the transaction via webhook.
       * - `webhook_timed_out` - Your application webhook did not respond without the
       *   required timeout.
       * - `declined_by_stand_in_processing` - Declined by stand-in processing.
       * - `invalid_physical_card` - The card read had an invalid CVV, dCVV, or
       *   authorization request cryptogram.
       * - `missing_original_authorization` - The original card authorization for this
       *   incremental authorization does not exist.
       * - `failed_3ds_authentication` - The transaction was declined because the 3DS
       *   authentication failed.
       * - `suspected_card_testing` - The transaction was suspected to be used by a card
       *   tester to test for valid card numbers.
       * - `suspected_fraud` - The transaction was suspected to be fraudulent. Please
       *   reach out to support@increase.com for more information.
       */
      reason:
        | 'account_closed'
        | 'card_not_active'
        | 'card_canceled'
        | 'physical_card_not_active'
        | 'entity_not_active'
        | 'group_locked'
        | 'insufficient_funds'
        | 'cvv2_mismatch'
        | 'pin_mismatch'
        | 'card_expiration_mismatch'
        | 'transaction_not_allowed'
        | 'breaches_limit'
        | 'webhook_declined'
        | 'webhook_timed_out'
        | 'declined_by_stand_in_processing'
        | 'invalid_physical_card'
        | 'missing_original_authorization'
        | 'failed_3ds_authentication'
        | 'suspected_card_testing'
        | 'suspected_fraud';

      /**
       * The terminal identifier (commonly abbreviated as TID) of the terminal the card
       * is transacting with.
       */
      terminal_id: string | null;

      /**
       * Fields related to verification of cardholder-provided values.
       */
      verification: CardDecline.Verification;

      [k: string]: unknown;
    }

    export namespace CardDecline {
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
     * A Check Decline object. This field will be present in the JSON response if and
     * only if `category` is equal to `check_decline`.
     */
    export interface CheckDecline {
      /**
       * The declined amount in USD cents.
       */
      amount: number;

      /**
       * A computer-readable number printed on the MICR line of business checks, usually
       * the check number. This is useful for positive pay checks, but can be unreliably
       * transmitted by the bank of first deposit.
       */
      auxiliary_on_us: string | null;

      /**
       * The identifier of the API File object containing an image of the back of the
       * declined check.
       */
      back_image_file_id: string | null;

      /**
       * The identifier of the Check Transfer object associated with this decline.
       */
      check_transfer_id: string | null;

      /**
       * The identifier of the API File object containing an image of the front of the
       * declined check.
       */
      front_image_file_id: string | null;

      /**
       * The identifier of the Inbound Check Deposit object associated with this decline.
       */
      inbound_check_deposit_id: string | null;

      /**
       * Why the check was declined.
       *
       * - `ach_route_disabled` - The account number is disabled.
       * - `ach_route_canceled` - The account number is canceled.
       * - `altered_or_fictitious` - The deposited check was altered or fictitious.
       * - `breaches_limit` - The transaction would cause a limit to be exceeded.
       * - `endorsement_irregular` - The check was not endorsed by the payee.
       * - `entity_not_active` - The account's entity is not active.
       * - `group_locked` - Your account is inactive.
       * - `insufficient_funds` - Your account contains insufficient funds.
       * - `stop_payment_requested` - Stop payment requested for this check.
       * - `duplicate_presentment` - The check was a duplicate deposit.
       * - `not_authorized` - The check was not authorized.
       * - `amount_mismatch` - The amount the receiving bank is attempting to deposit
       *   does not match the amount on the check.
       * - `not_our_item` - The check attempting to be deposited does not belong to
       *   Increase.
       * - `no_account_number_found` - The account number on the check does not exist at
       *   Increase.
       * - `refer_to_image` - The check is not readable. Please refer to the image.
       * - `unable_to_process` - The check cannot be processed. This is rare: please
       *   contact support.
       * - `unusable_image` - The check image is unusable.
       * - `user_initiated` - Your integration declined this check via the API.
       */
      reason:
        | 'ach_route_disabled'
        | 'ach_route_canceled'
        | 'altered_or_fictitious'
        | 'breaches_limit'
        | 'endorsement_irregular'
        | 'entity_not_active'
        | 'group_locked'
        | 'insufficient_funds'
        | 'stop_payment_requested'
        | 'duplicate_presentment'
        | 'not_authorized'
        | 'amount_mismatch'
        | 'not_our_item'
        | 'no_account_number_found'
        | 'refer_to_image'
        | 'unable_to_process'
        | 'unusable_image'
        | 'user_initiated';

      [k: string]: unknown;
    }

    /**
     * A Check Deposit Rejection object. This field will be present in the JSON
     * response if and only if `category` is equal to `check_deposit_rejection`.
     */
    export interface CheckDepositRejection {
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
        | 'unknown';

      /**
       * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
       * the check deposit was rejected.
       */
      rejected_at: string;

      [k: string]: unknown;
    }

    /**
     * An Inbound FedNow Transfer Decline object. This field will be present in the
     * JSON response if and only if `category` is equal to
     * `inbound_fednow_transfer_decline`.
     */
    export interface InboundFednowTransferDecline {
      /**
       * Why the transfer was declined.
       *
       * - `account_number_canceled` - The account number is canceled.
       * - `account_number_disabled` - The account number is disabled.
       * - `account_restricted` - Your account is restricted.
       * - `group_locked` - Your account is inactive.
       * - `entity_not_active` - The account's entity is not active.
       * - `fednow_not_enabled` - Your account is not enabled to receive FedNow
       *   transfers.
       */
      reason:
        | 'account_number_canceled'
        | 'account_number_disabled'
        | 'account_restricted'
        | 'group_locked'
        | 'entity_not_active'
        | 'fednow_not_enabled';

      /**
       * The identifier of the FedNow Transfer that led to this declined transaction.
       */
      transfer_id: string;

      [k: string]: unknown;
    }

    /**
     * An Inbound Real-Time Payments Transfer Decline object. This field will be
     * present in the JSON response if and only if `category` is equal to
     * `inbound_real_time_payments_transfer_decline`.
     */
    export interface InboundRealTimePaymentsTransferDecline {
      /**
       * The declined amount in the minor unit of the destination account currency. For
       * dollars, for example, this is cents.
       */
      amount: number;

      /**
       * The name the sender of the transfer specified as the recipient of the transfer.
       */
      creditor_name: string;

      /**
       * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code of the declined
       * transfer's currency. This will always be "USD" for a Real-Time Payments
       * transfer.
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
       * Why the transfer was declined.
       *
       * - `account_number_canceled` - The account number is canceled.
       * - `account_number_disabled` - The account number is disabled.
       * - `account_restricted` - Your account is restricted.
       * - `group_locked` - Your account is inactive.
       * - `entity_not_active` - The account's entity is not active.
       * - `real_time_payments_not_enabled` - Your account is not enabled to receive
       *   Real-Time Payments transfers.
       */
      reason:
        | 'account_number_canceled'
        | 'account_number_disabled'
        | 'account_restricted'
        | 'group_locked'
        | 'entity_not_active'
        | 'real_time_payments_not_enabled';

      /**
       * Additional information included with the transfer.
       */
      remittance_information: string | null;

      /**
       * The Real-Time Payments network identification of the declined transfer.
       */
      transaction_identification: string;

      /**
       * The identifier of the Real-Time Payments Transfer that led to this Transaction.
       */
      transfer_id: string;
    }

    /**
     * If the category of this Transaction source is equal to `other`, this field will
     * contain an empty object, otherwise it will contain null.
     */
    export interface Other {}

    /**
     * A Wire Decline object. This field will be present in the JSON response if and
     * only if `category` is equal to `wire_decline`.
     */
    export interface WireDecline {
      /**
       * The identifier of the Inbound Wire Transfer that was declined.
       */
      inbound_wire_transfer_id: string;

      /**
       * Why the wire transfer was declined.
       *
       * - `account_number_canceled` - The account number is canceled.
       * - `account_number_disabled` - The account number is disabled.
       * - `entity_not_active` - The account's entity is not active.
       * - `group_locked` - Your account is inactive.
       * - `no_account_number` - The beneficiary account number does not exist.
       * - `transaction_not_allowed` - The transaction is not allowed per Increase's
       *   terms.
       */
      reason:
        | 'account_number_canceled'
        | 'account_number_disabled'
        | 'entity_not_active'
        | 'group_locked'
        | 'no_account_number'
        | 'transaction_not_allowed';

      [k: string]: unknown;
    }
  }
}

export interface DeclinedTransactionListParams extends PageParams {
  /**
   * Filter Declined Transactions to ones belonging to the specified Account.
   */
  account_id?: string;

  category?: DeclinedTransactionListParams.Category;

  created_at?: DeclinedTransactionListParams.CreatedAt;

  /**
   * Filter Declined Transactions to those belonging to the specified route.
   */
  route_id?: string;
}

export namespace DeclinedTransactionListParams {
  export interface Category {
    /**
     * Return results whose value is in the provided list. For GET requests, this
     * should be encoded as a comma-delimited string, such as `?in=one,two,three`.
     */
    in?: Array<
      | 'ach_decline'
      | 'card_decline'
      | 'check_decline'
      | 'inbound_real_time_payments_transfer_decline'
      | 'inbound_fednow_transfer_decline'
      | 'wire_decline'
      | 'check_deposit_rejection'
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

export declare namespace DeclinedTransactions {
  export {
    type DeclinedTransaction as DeclinedTransaction,
    type DeclinedTransactionsPage as DeclinedTransactionsPage,
    type DeclinedTransactionListParams as DeclinedTransactionListParams,
  };
}
