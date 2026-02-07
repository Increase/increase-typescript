// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class CardPayments extends APIResource {
  /**
   * Retrieve a Card Payment
   *
   * @example
   * ```ts
   * const cardPayment = await client.cardPayments.retrieve(
   *   'card_payment_nd3k2kacrqjli8482ave',
   * );
   * ```
   */
  retrieve(cardPaymentID: string, options?: RequestOptions): APIPromise<CardPayment> {
    return this._client.get(path`/card_payments/${cardPaymentID}`, options);
  }

  /**
   * List Card Payments
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const cardPayment of client.cardPayments.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: CardPaymentListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CardPaymentsPage, CardPayment> {
    return this._client.getAPIList('/card_payments', Page<CardPayment>, { query, ...options });
  }
}

export type CardPaymentsPage = Page<CardPayment>;

/**
 * Card Payments group together interactions related to a single card payment, such
 * as an authorization and its corresponding settlement.
 */
export interface CardPayment {
  /**
   * The Card Payment identifier.
   */
  id: string;

  /**
   * The identifier for the Account the Transaction belongs to.
   */
  account_id: string;

  /**
   * The Card identifier for this payment.
   */
  card_id: string;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the Card
   * Payment was created.
   */
  created_at: string;

  /**
   * The Digital Wallet Token identifier for this payment.
   */
  digital_wallet_token_id: string | null;

  /**
   * The interactions related to this card payment.
   */
  elements: Array<CardPayment.Element>;

  /**
   * The Physical Card identifier for this payment.
   */
  physical_card_id: string | null;

  /**
   * The summarized state of this card payment.
   */
  state: CardPayment.State;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `card_payment`.
   */
  type: 'card_payment';
}

export namespace CardPayment {
  export interface Element {
    /**
     * The type of the resource. We may add additional possible values for this enum
     * over time; your application should be able to handle such additions gracefully.
     *
     * - `card_authorization` - Card Authorization: details will be under the
     *   `card_authorization` object.
     * - `card_authentication` - Card Authentication: details will be under the
     *   `card_authentication` object.
     * - `card_balance_inquiry` - Card Balance Inquiry: details will be under the
     *   `card_balance_inquiry` object.
     * - `card_validation` - Inbound Card Validation: details will be under the
     *   `card_validation` object.
     * - `card_decline` - Card Decline: details will be under the `card_decline`
     *   object.
     * - `card_reversal` - Card Reversal: details will be under the `card_reversal`
     *   object.
     * - `card_authorization_expiration` - Card Authorization Expiration: details will
     *   be under the `card_authorization_expiration` object.
     * - `card_increment` - Card Increment: details will be under the `card_increment`
     *   object.
     * - `card_settlement` - Card Settlement: details will be under the
     *   `card_settlement` object.
     * - `card_refund` - Card Refund: details will be under the `card_refund` object.
     * - `card_fuel_confirmation` - Card Fuel Confirmation: details will be under the
     *   `card_fuel_confirmation` object.
     * - `card_financial` - Card Financial: details will be under the `card_financial`
     *   object.
     * - `other` - Unknown card payment element.
     */
    category:
      | 'card_authorization'
      | 'card_authentication'
      | 'card_balance_inquiry'
      | 'card_validation'
      | 'card_decline'
      | 'card_reversal'
      | 'card_authorization_expiration'
      | 'card_increment'
      | 'card_settlement'
      | 'card_refund'
      | 'card_fuel_confirmation'
      | 'card_financial'
      | 'other';

    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
     * the card payment element was created.
     */
    created_at: string;

    /**
     * A Card Authentication object. This field will be present in the JSON response if
     * and only if `category` is equal to `card_authentication`. Card Authentications
     * are attempts to authenticate a transaction or a card with 3DS.
     */
    card_authentication?: Element.CardAuthentication | null;

    /**
     * A Card Authorization object. This field will be present in the JSON response if
     * and only if `category` is equal to `card_authorization`. Card Authorizations are
     * temporary holds placed on a customers funds with the intent to later clear a
     * transaction.
     */
    card_authorization?: Element.CardAuthorization | null;

    /**
     * A Card Authorization Expiration object. This field will be present in the JSON
     * response if and only if `category` is equal to `card_authorization_expiration`.
     * Card Authorization Expirations are cancellations of authorizations that were
     * never settled by the acquirer.
     */
    card_authorization_expiration?: Element.CardAuthorizationExpiration | null;

    /**
     * A Card Balance Inquiry object. This field will be present in the JSON response
     * if and only if `category` is equal to `card_balance_inquiry`. Card Balance
     * Inquiries are transactions that allow merchants to check the available balance
     * on a card without placing a hold on funds, commonly used when a customer
     * requests their balance at an ATM.
     */
    card_balance_inquiry?: Element.CardBalanceInquiry | null;

    /**
     * A Card Decline object. This field will be present in the JSON response if and
     * only if `category` is equal to `card_decline`.
     */
    card_decline?: Element.CardDecline | null;

    /**
     * A Card Financial object. This field will be present in the JSON response if and
     * only if `category` is equal to `card_financial`. Card Financials are temporary
     * holds placed on a customers funds with the intent to later clear a transaction.
     */
    card_financial?: Element.CardFinancial | null;

    /**
     * A Card Fuel Confirmation object. This field will be present in the JSON response
     * if and only if `category` is equal to `card_fuel_confirmation`. Card Fuel
     * Confirmations update the amount of a Card Authorization after a fuel pump
     * transaction is completed.
     */
    card_fuel_confirmation?: Element.CardFuelConfirmation | null;

    /**
     * A Card Increment object. This field will be present in the JSON response if and
     * only if `category` is equal to `card_increment`. Card Increments increase the
     * pending amount of an authorized transaction.
     */
    card_increment?: Element.CardIncrement | null;

    /**
     * A Card Refund object. This field will be present in the JSON response if and
     * only if `category` is equal to `card_refund`. Card Refunds move money back to
     * the cardholder. While they are usually connected to a Card Settlement an
     * acquirer can also refund money directly to a card without relation to a
     * transaction.
     */
    card_refund?: Element.CardRefund | null;

    /**
     * A Card Reversal object. This field will be present in the JSON response if and
     * only if `category` is equal to `card_reversal`. Card Reversals cancel parts of
     * or the entirety of an existing Card Authorization.
     */
    card_reversal?: Element.CardReversal | null;

    /**
     * A Card Settlement object. This field will be present in the JSON response if and
     * only if `category` is equal to `card_settlement`. Card Settlements are card
     * transactions that have cleared and settled. While a settlement is usually
     * preceded by an authorization, an acquirer can also directly clear a transaction
     * without first authorizing it.
     */
    card_settlement?: Element.CardSettlement | null;

    /**
     * An Inbound Card Validation object. This field will be present in the JSON
     * response if and only if `category` is equal to `card_validation`. Inbound Card
     * Validations are requests from a merchant to verify that a card number and
     * optionally its address and/or Card Verification Value are valid.
     */
    card_validation?: Element.CardValidation | null;

    /**
     * If the category of this Transaction source is equal to `other`, this field will
     * contain an empty object, otherwise it will contain null.
     */
    other?: Element.Other | null;
  }

  export namespace Element {
    /**
     * A Card Authentication object. This field will be present in the JSON response if
     * and only if `category` is equal to `card_authentication`. Card Authentications
     * are attempts to authenticate a transaction or a card with 3DS.
     */
    export interface CardAuthentication {
      /**
       * The Card Authentication identifier.
       */
      id: string;

      /**
       * The identifier of the Card.
       */
      card_id: string;

      /**
       * The ID of the Card Payment this transaction belongs to.
       */
      card_payment_id: string;

      /**
       * The category of the card authentication attempt.
       *
       * - `payment_authentication` - The authentication attempt is for a payment.
       * - `non_payment_authentication` - The authentication attempt is not for a
       *   payment.
       */
      category: 'payment_authentication' | 'non_payment_authentication' | null;

      /**
       * Details about the challenge, if one was requested.
       */
      challenge: CardAuthentication.Challenge | null;

      /**
       * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the Card
       * Authentication was attempted.
       */
      created_at: string;

      /**
       * The reason why this authentication attempt was denied, if it was.
       *
       * - `group_locked` - The group was locked.
       * - `card_not_active` - The card was not active.
       * - `entity_not_active` - The entity was not active.
       * - `transaction_not_allowed` - The transaction was not allowed.
       * - `webhook_denied` - The webhook was denied.
       * - `webhook_timed_out` - The webhook timed out.
       */
      deny_reason:
        | 'group_locked'
        | 'card_not_active'
        | 'entity_not_active'
        | 'transaction_not_allowed'
        | 'webhook_denied'
        | 'webhook_timed_out'
        | null;

      /**
       * The device channel of the card authentication attempt.
       *
       * - `app` - The authentication attempt was made from an app.
       * - `browser` - The authentication attempt was made from a browser.
       * - `three_ds_requestor_initiated` - The authentication attempt was initiated by
       *   the 3DS Requestor.
       */
      device_channel: 'app' | 'browser' | 'three_ds_requestor_initiated' | null;

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
       * The country the merchant resides in.
       */
      merchant_country: string;

      /**
       * The name of the merchant.
       */
      merchant_name: string;

      /**
       * The purchase amount in minor units.
       */
      purchase_amount: number | null;

      /**
       * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the
       * authentication attempt's purchase currency.
       */
      purchase_currency: string | null;

      /**
       * The identifier of the Real-Time Decision sent to approve or decline this
       * authentication attempt.
       */
      real_time_decision_id: string | null;

      /**
       * The status of the card authentication.
       *
       * - `denied` - The authentication attempt was denied.
       * - `authenticated_with_challenge` - The authentication attempt was authenticated
       *   with a challenge.
       * - `authenticated_without_challenge` - The authentication attempt was
       *   authenticated without a challenge.
       * - `awaiting_challenge` - The authentication attempt is awaiting a challenge.
       * - `validating_challenge` - The authentication attempt is validating a challenge.
       * - `canceled` - The authentication attempt was canceled.
       * - `timed_out_awaiting_challenge` - The authentication attempt timed out while
       *   awaiting a challenge.
       * - `errored` - The authentication attempt errored.
       * - `exceeded_attempt_threshold` - The authentication attempt exceeded the attempt
       *   threshold.
       */
      status:
        | 'denied'
        | 'authenticated_with_challenge'
        | 'authenticated_without_challenge'
        | 'awaiting_challenge'
        | 'validating_challenge'
        | 'canceled'
        | 'timed_out_awaiting_challenge'
        | 'errored'
        | 'exceeded_attempt_threshold';

      /**
       * A constant representing the object's type. For this resource it will always be
       * `card_authentication`.
       */
      type: 'card_authentication';

      [k: string]: unknown;
    }

    export namespace CardAuthentication {
      /**
       * Details about the challenge, if one was requested.
       */
      export interface Challenge {
        /**
         * Details about the challenge verification attempts, if any happened.
         */
        attempts: Array<Challenge.Attempt>;

        /**
         * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the Card
         * Authentication Challenge was started.
         */
        created_at: string;

        /**
         * The one-time code used for the Card Authentication Challenge.
         */
        one_time_code: string;

        /**
         * The method used to verify the Card Authentication Challenge.
         *
         * - `text_message` - The one-time code was sent via text message.
         * - `email` - The one-time code was sent via email.
         * - `none_available` - The one-time code was not successfully delivered.
         */
        verification_method: 'text_message' | 'email' | 'none_available';

        /**
         * E.g., the email address or phone number used for the Card Authentication
         * Challenge.
         */
        verification_value: string | null;
      }

      export namespace Challenge {
        export interface Attempt {
          /**
           * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time of the Card
           * Authentication Challenge Attempt.
           */
          created_at: string;

          /**
           * The outcome of the Card Authentication Challenge Attempt.
           *
           * - `successful` - The attempt was successful.
           * - `failed` - The attempt was unsuccessful.
           */
          outcome: 'successful' | 'failed';
        }
      }
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
     * A Card Authorization Expiration object. This field will be present in the JSON
     * response if and only if `category` is equal to `card_authorization_expiration`.
     * Card Authorization Expirations are cancellations of authorizations that were
     * never settled by the acquirer.
     */
    export interface CardAuthorizationExpiration {
      /**
       * The Card Authorization Expiration identifier.
       */
      id: string;

      /**
       * The identifier for the Card Authorization this reverses.
       */
      card_authorization_id: string;

      /**
       * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the reversal's
       * currency.
       *
       * - `USD` - US Dollar (USD)
       */
      currency: 'USD';

      /**
       * The amount of this authorization expiration in the minor unit of the
       * transaction's currency. For dollars, for example, this is cents.
       */
      expired_amount: number;

      /**
       * The card network used to process this card authorization.
       *
       * - `visa` - Visa
       * - `pulse` - Pulse
       */
      network: 'visa' | 'pulse';

      /**
       * A constant representing the object's type. For this resource it will always be
       * `card_authorization_expiration`.
       */
      type: 'card_authorization_expiration';

      [k: string]: unknown;
    }

    /**
     * A Card Balance Inquiry object. This field will be present in the JSON response
     * if and only if `category` is equal to `card_balance_inquiry`. Card Balance
     * Inquiries are transactions that allow merchants to check the available balance
     * on a card without placing a hold on funds, commonly used when a customer
     * requests their balance at an ATM.
     */
    export interface CardBalanceInquiry {
      /**
       * The Card Balance Inquiry identifier.
       */
      id: string;

      /**
       * Additional amounts associated with the card authorization, such as ATM
       * surcharges fees. These are usually a subset of the `amount` field and are used
       * to provide more detailed information about the transaction.
       */
      additional_amounts: CardBalanceInquiry.AdditionalAmounts;

      /**
       * The balance amount in the minor unit of the account's currency. For dollars, for
       * example, this is cents.
       */
      balance: number;

      /**
       * The ID of the Card Payment this transaction belongs to.
       */
      card_payment_id: string;

      /**
       * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the account's
       * currency.
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
      network_details: CardBalanceInquiry.NetworkDetails;

      /**
       * Network-specific identifiers for a specific request or transaction.
       */
      network_identifiers: CardBalanceInquiry.NetworkIdentifiers;

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
       * `card_balance_inquiry`.
       */
      type: 'card_balance_inquiry';

      /**
       * Fields related to verification of cardholder-provided values.
       */
      verification: CardBalanceInquiry.Verification;

      [k: string]: unknown;
    }

    export namespace CardBalanceInquiry {
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
     * A Card Financial object. This field will be present in the JSON response if and
     * only if `category` is equal to `card_financial`. Card Financials are temporary
     * holds placed on a customers funds with the intent to later clear a transaction.
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
     * A Card Fuel Confirmation object. This field will be present in the JSON response
     * if and only if `category` is equal to `card_fuel_confirmation`. Card Fuel
     * Confirmations update the amount of a Card Authorization after a fuel pump
     * transaction is completed.
     */
    export interface CardFuelConfirmation {
      /**
       * The Card Fuel Confirmation identifier.
       */
      id: string;

      /**
       * The identifier for the Card Authorization this updates.
       */
      card_authorization_id: string;

      /**
       * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the increment's
       * currency.
       *
       * - `USD` - US Dollar (USD)
       */
      currency: 'USD';

      /**
       * The card network used to process this card authorization.
       *
       * - `visa` - Visa
       * - `pulse` - Pulse
       */
      network: 'visa' | 'pulse';

      /**
       * Network-specific identifiers for a specific request or transaction.
       */
      network_identifiers: CardFuelConfirmation.NetworkIdentifiers;

      /**
       * The identifier of the Pending Transaction associated with this Card Fuel
       * Confirmation.
       */
      pending_transaction_id: string | null;

      /**
       * A constant representing the object's type. For this resource it will always be
       * `card_fuel_confirmation`.
       */
      type: 'card_fuel_confirmation';

      /**
       * The updated authorization amount after this fuel confirmation, in the minor unit
       * of the transaction's currency. For dollars, for example, this is cents.
       */
      updated_authorization_amount: number;

      [k: string]: unknown;
    }

    export namespace CardFuelConfirmation {
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
    }

    /**
     * A Card Increment object. This field will be present in the JSON response if and
     * only if `category` is equal to `card_increment`. Card Increments increase the
     * pending amount of an authorized transaction.
     */
    export interface CardIncrement {
      /**
       * The Card Increment identifier.
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
      additional_amounts: CardIncrement.AdditionalAmounts;

      /**
       * The amount of this increment in the minor unit of the transaction's currency.
       * For dollars, for example, this is cents.
       */
      amount: number;

      /**
       * The identifier for the Card Authorization this increments.
       */
      card_authorization_id: string;

      /**
       * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the increment's
       * currency.
       *
       * - `USD` - US Dollar (USD)
       */
      currency: 'USD';

      /**
       * The card network used to process this card authorization.
       *
       * - `visa` - Visa
       * - `pulse` - Pulse
       */
      network: 'visa' | 'pulse';

      /**
       * Network-specific identifiers for a specific request or transaction.
       */
      network_identifiers: CardIncrement.NetworkIdentifiers;

      /**
       * The risk score generated by the card network. For Visa this is the Visa Advanced
       * Authorization risk score, from 0 to 99, where 99 is the riskiest.
       */
      network_risk_score: number | null;

      /**
       * The identifier of the Pending Transaction associated with this Card Increment.
       */
      pending_transaction_id: string | null;

      /**
       * The amount of this increment in the minor unit of the transaction's presentment
       * currency.
       */
      presentment_amount: number;

      /**
       * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the
       * transaction's presentment currency.
       */
      presentment_currency: string;

      /**
       * The identifier of the Real-Time Decision sent to approve or decline this
       * incremental authorization.
       */
      real_time_decision_id: string | null;

      /**
       * A constant representing the object's type. For this resource it will always be
       * `card_increment`.
       */
      type: 'card_increment';

      /**
       * The updated authorization amount after this increment, in the minor unit of the
       * transaction's currency. For dollars, for example, this is cents.
       */
      updated_authorization_amount: number;

      [k: string]: unknown;
    }

    export namespace CardIncrement {
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
    }

    /**
     * A Card Refund object. This field will be present in the JSON response if and
     * only if `category` is equal to `card_refund`. Card Refunds move money back to
     * the cardholder. While they are usually connected to a Card Settlement an
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
       * Interchange assessed as a part of this transaciton.
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
       * Interchange assessed as a part of this transaciton.
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
     * A Card Reversal object. This field will be present in the JSON response if and
     * only if `category` is equal to `card_reversal`. Card Reversals cancel parts of
     * or the entirety of an existing Card Authorization.
     */
    export interface CardReversal {
      /**
       * The Card Reversal identifier.
       */
      id: string;

      /**
       * The identifier for the Card Authorization this reverses.
       */
      card_authorization_id: string;

      /**
       * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the reversal's
       * currency.
       *
       * - `USD` - US Dollar (USD)
       */
      currency: 'USD';

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
      merchant_country: string | null;

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
       * The card network used to process this card authorization.
       *
       * - `visa` - Visa
       * - `pulse` - Pulse
       */
      network: 'visa' | 'pulse';

      /**
       * Network-specific identifiers for a specific request or transaction.
       */
      network_identifiers: CardReversal.NetworkIdentifiers;

      /**
       * The identifier of the Pending Transaction associated with this Card Reversal.
       */
      pending_transaction_id: string | null;

      /**
       * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the reversal's
       * presentment currency.
       */
      presentment_currency: string;

      /**
       * The amount of this reversal in the minor unit of the transaction's currency. For
       * dollars, for example, this is cents.
       */
      reversal_amount: number;

      /**
       * The amount of this reversal in the minor unit of the transaction's presentment
       * currency. For dollars, for example, this is cents.
       */
      reversal_presentment_amount: number;

      /**
       * Why this reversal was initiated.
       *
       * - `reversed_by_customer` - The Card Reversal was initiated at the customer's
       *   request.
       * - `reversed_by_network_or_acquirer` - The Card Reversal was initiated by the
       *   network or acquirer.
       * - `reversed_by_point_of_sale` - The Card Reversal was initiated by the point of
       *   sale device.
       * - `partial_reversal` - The Card Reversal was a partial reversal, for any reason.
       */
      reversal_reason:
        | 'reversed_by_customer'
        | 'reversed_by_network_or_acquirer'
        | 'reversed_by_point_of_sale'
        | 'partial_reversal'
        | null;

      /**
       * The terminal identifier (commonly abbreviated as TID) of the terminal the card
       * is transacting with.
       */
      terminal_id: string | null;

      /**
       * A constant representing the object's type. For this resource it will always be
       * `card_reversal`.
       */
      type: 'card_reversal';

      /**
       * The amount left pending on the Card Authorization in the minor unit of the
       * transaction's currency. For dollars, for example, this is cents.
       */
      updated_authorization_amount: number;

      /**
       * The amount left pending on the Card Authorization in the minor unit of the
       * transaction's presentment currency. For dollars, for example, this is cents.
       */
      updated_authorization_presentment_amount: number;

      [k: string]: unknown;
    }

    export namespace CardReversal {
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
       * is added to to the overall transaction amount (surcharge), and negative if the
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
       * is added to to the overall transaction amount (surcharge), and negative if the
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
     * An Inbound Card Validation object. This field will be present in the JSON
     * response if and only if `category` is equal to `card_validation`. Inbound Card
     * Validations are requests from a merchant to verify that a card number and
     * optionally its address and/or Card Verification Value are valid.
     */
    export interface CardValidation {
      /**
       * The Card Validation identifier.
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
      additional_amounts: CardValidation.AdditionalAmounts;

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
      network_details: CardValidation.NetworkDetails;

      /**
       * Network-specific identifiers for a specific request or transaction.
       */
      network_identifiers: CardValidation.NetworkIdentifiers;

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
       * `inbound_card_validation`.
       */
      type: 'inbound_card_validation';

      /**
       * Fields related to verification of cardholder-provided values.
       */
      verification: CardValidation.Verification;

      [k: string]: unknown;
    }

    export namespace CardValidation {
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
     * If the category of this Transaction source is equal to `other`, this field will
     * contain an empty object, otherwise it will contain null.
     */
    export interface Other {}
  }

  /**
   * The summarized state of this card payment.
   */
  export interface State {
    /**
     * The total authorized amount in the minor unit of the transaction's currency. For
     * dollars, for example, this is cents.
     */
    authorized_amount: number;

    /**
     * The total amount from fuel confirmations in the minor unit of the transaction's
     * currency. For dollars, for example, this is cents.
     */
    fuel_confirmed_amount: number;

    /**
     * The total incrementally updated authorized amount in the minor unit of the
     * transaction's currency. For dollars, for example, this is cents.
     */
    incremented_amount: number;

    /**
     * The total refund authorized amount in the minor unit of the transaction's
     * currency. For dollars, for example, this is cents.
     */
    refund_authorized_amount: number;

    /**
     * The total refunded amount in the minor unit of the transaction's currency. For
     * dollars, for example, this is cents.
     */
    refunded_amount: number;

    /**
     * The total reversed amount in the minor unit of the transaction's currency. For
     * dollars, for example, this is cents.
     */
    reversed_amount: number;

    /**
     * The total settled amount in the minor unit of the transaction's currency. For
     * dollars, for example, this is cents.
     */
    settled_amount: number;
  }
}

export interface CardPaymentListParams extends PageParams {
  /**
   * Filter Card Payments to ones belonging to the specified Account.
   */
  account_id?: string;

  /**
   * Filter Card Payments to ones belonging to the specified Card.
   */
  card_id?: string;

  created_at?: CardPaymentListParams.CreatedAt;
}

export namespace CardPaymentListParams {
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

export declare namespace CardPayments {
  export {
    type CardPayment as CardPayment,
    type CardPaymentsPage as CardPaymentsPage,
    type CardPaymentListParams as CardPaymentListParams,
  };
}
