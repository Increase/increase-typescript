// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DeclinedTransactionsAPI from '../declined-transactions';
import * as PendingTransactionsAPI from '../pending-transactions';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class CardAuthorizations extends APIResource {
  /**
   * Simulates a purchase authorization on a [Card](#cards). Depending on the balance
   * available to the card and the `amount` submitted, the authorization activity
   * will result in a [Pending Transaction](#pending-transactions) of type
   * `card_authorization` or a [Declined Transaction](#declined-transactions) of type
   * `card_decline`. You can pass either a Card id or a
   * [Digital Wallet Token](#digital-wallet-tokens) id to simulate the two different
   * ways purchases can be made.
   *
   * @example
   * ```ts
   * const cardAuthorization =
   *   await client.simulations.cardAuthorizations.create({
   *     amount: 1000,
   *   });
   * ```
   */
  create(
    body: CardAuthorizationCreateParams,
    options?: RequestOptions,
  ): APIPromise<CardAuthorizationCreateResponse> {
    return this._client.post('/simulations/card_authorizations', { body, ...options });
  }
}

/**
 * The results of a Card Authorization simulation.
 */
export interface CardAuthorizationCreateResponse {
  /**
   * If the authorization attempt fails, this will contain the resulting
   * [Declined Transaction](#declined-transactions) object. The Declined
   * Transaction's `source` will be of `category: card_decline`.
   */
  declined_transaction: DeclinedTransactionsAPI.DeclinedTransaction | null;

  /**
   * If the authorization attempt succeeds, this will contain the resulting Pending
   * Transaction object. The Pending Transaction's `source` will be of
   * `category: card_authorization`.
   */
  pending_transaction: PendingTransactionsAPI.PendingTransaction | null;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `inbound_card_authorization_simulation_result`.
   */
  type: 'inbound_card_authorization_simulation_result';
}

export interface CardAuthorizationCreateParams {
  /**
   * The authorization amount in cents.
   */
  amount: number;

  /**
   * The identifier of a Card Payment with a `card_authentication` if you want to
   * simulate an authenticated authorization.
   */
  authenticated_card_payment_id?: string;

  /**
   * The identifier of the Card to be authorized.
   */
  card_id?: string;

  /**
   * Forces a card decline with a specific reason. No real time decision will be
   * sent.
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
   * - `breaches_limit` - The transaction was blocked by a limit or an authorization
   *   control.
   * - `webhook_declined` - Your application declined the transaction via webhook.
   * - `webhook_timed_out` - Your application webhook did not respond without the
   *   required timeout.
   * - `declined_by_stand_in_processing` - Declined by stand-in processing.
   * - `invalid_physical_card` - The card read had an invalid CVV or dCVV.
   * - `missing_original_authorization` - The original card authorization for this
   *   incremental authorization does not exist.
   * - `invalid_cryptogram` - The card's authorization request cryptogram was
   *   invalid. The cryptogram can be from a physical card or a Digital Wallet Token
   *   purchase.
   * - `failed_3ds_authentication` - The transaction was declined because the 3DS
   *   authentication failed.
   * - `suspected_card_testing` - The transaction was suspected to be used by a card
   *   tester to test for valid card numbers.
   * - `suspected_fraud` - The transaction was suspected to be fraudulent. Please
   *   reach out to support@increase.com for more information.
   */
  decline_reason?:
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
    | 'invalid_cryptogram'
    | 'failed_3ds_authentication'
    | 'suspected_card_testing'
    | 'suspected_fraud';

  /**
   * The identifier of the Digital Wallet Token to be authorized.
   */
  digital_wallet_token_id?: string;

  /**
   * The identifier of the Event Subscription to use. If provided, will override the
   * default real time event subscription. Because you can only create one real time
   * decision event subscription, you can use this field to route events to any
   * specified event subscription for testing purposes.
   */
  event_subscription_id?: string;

  /**
   * The merchant identifier (commonly abbreviated as MID) of the merchant the card
   * is transacting with.
   */
  merchant_acceptor_id?: string;

  /**
   * The Merchant Category Code (commonly abbreviated as MCC) of the merchant the
   * card is transacting with.
   */
  merchant_category_code?: string;

  /**
   * The city the merchant resides in.
   */
  merchant_city?: string;

  /**
   * The country the merchant resides in.
   */
  merchant_country?: string;

  /**
   * The merchant descriptor of the merchant the card is transacting with.
   */
  merchant_descriptor?: string;

  /**
   * The state the merchant resides in.
   */
  merchant_state?: string;

  /**
   * Fields specific to a given card network.
   */
  network_details?: CardAuthorizationCreateParams.NetworkDetails;

  /**
   * The risk score generated by the card network. For Visa this is the Visa Advanced
   * Authorization risk score, from 0 to 99, where 99 is the riskiest.
   */
  network_risk_score?: number;

  /**
   * The identifier of the Physical Card to be authorized.
   */
  physical_card_id?: string;

  /**
   * Fields specific to a specific type of authorization, such as Automatic Fuel
   * Dispensers, Refund Authorizations, or Cash Disbursements.
   */
  processing_category?: CardAuthorizationCreateParams.ProcessingCategory;

  /**
   * The terminal identifier (commonly abbreviated as TID) of the terminal the card
   * is transacting with.
   */
  terminal_id?: string;
}

export namespace CardAuthorizationCreateParams {
  /**
   * Fields specific to a given card network.
   */
  export interface NetworkDetails {
    /**
     * Fields specific to the Visa network.
     */
    visa: NetworkDetails.Visa;
  }

  export namespace NetworkDetails {
    /**
     * Fields specific to the Visa network.
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
      electronic_commerce_indicator?:
        | 'mail_phone_order'
        | 'recurring'
        | 'installment'
        | 'unknown_mail_phone_order'
        | 'secure_electronic_commerce'
        | 'non_authenticated_security_transaction_at_3ds_capable_merchant'
        | 'non_authenticated_security_transaction'
        | 'non_secure_transaction';

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
      point_of_service_entry_mode?:
        | 'unknown'
        | 'manual'
        | 'magnetic_stripe_no_cvv'
        | 'optical_code'
        | 'integrated_circuit_card'
        | 'contactless'
        | 'credential_on_file'
        | 'magnetic_stripe'
        | 'contactless_magnetic_stripe'
        | 'integrated_circuit_card_no_cvv';

      /**
       * The reason code for the stand-in processing.
       *
       * - `issuer_error` - Increase failed to process the authorization in a timely
       *   manner.
       * - `invalid_physical_card` - The physical card read had an invalid CVV or dCVV.
       * - `invalid_cryptogram` - The card's authorization request cryptogram was
       *   invalid. The cryptogram can be from a physical card or a Digital Wallet Token
       *   purchase.
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
      stand_in_processing_reason?:
        | 'issuer_error'
        | 'invalid_physical_card'
        | 'invalid_cryptogram'
        | 'invalid_cardholder_authentication_verification_value'
        | 'internal_visa_error'
        | 'merchant_transaction_advisory_service_authentication_required'
        | 'payment_fraud_disruption_acquirer_block'
        | 'other';

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
      terminal_entry_capability?:
        | 'unknown'
        | 'terminal_not_used'
        | 'magnetic_stripe'
        | 'barcode'
        | 'optical_character_recognition'
        | 'chip_or_contactless'
        | 'contactless_only'
        | 'no_capability';
    }
  }

  /**
   * Fields specific to a specific type of authorization, such as Automatic Fuel
   * Dispensers, Refund Authorizations, or Cash Disbursements.
   */
  export interface ProcessingCategory {
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
     * - `cash_deposit` - Cash deposit transactions are used to deposit cash at an ATM
     *   or a point of sale.
     * - `balance_inquiry` - A balance inquiry transaction is used to check the balance
     *   of an account associated with a card.
     */
    category:
      | 'account_funding'
      | 'automatic_fuel_dispenser'
      | 'bill_payment'
      | 'original_credit'
      | 'purchase'
      | 'quasi_cash'
      | 'refund'
      | 'cash_disbursement'
      | 'cash_deposit'
      | 'balance_inquiry';

    /**
     * Details related to refund authorizations.
     */
    refund?: ProcessingCategory.Refund;
  }

  export namespace ProcessingCategory {
    /**
     * Details related to refund authorizations.
     */
    export interface Refund {
      /**
       * The card payment to link this refund to.
       */
      original_card_payment_id?: string;
    }
  }
}

export declare namespace CardAuthorizations {
  export {
    type CardAuthorizationCreateResponse as CardAuthorizationCreateResponse,
    type CardAuthorizationCreateParams as CardAuthorizationCreateParams,
  };
}
