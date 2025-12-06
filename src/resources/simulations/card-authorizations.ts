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
       * The reason code for the stand-in processing.
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
      stand_in_processing_reason?:
        | 'issuer_error'
        | 'invalid_physical_card'
        | 'invalid_cardholder_authentication_verification_value'
        | 'internal_visa_error'
        | 'merchant_transaction_advisory_service_authentication_required'
        | 'payment_fraud_disruption_acquirer_block'
        | 'other';
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
