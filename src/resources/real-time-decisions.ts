// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class RealTimeDecisions extends APIResource {
  /**
   * Retrieve a Real-Time Decision
   *
   * @example
   * ```ts
   * const realTimeDecision =
   *   await client.realTimeDecisions.retrieve(
   *     'real_time_decision_j76n2e810ezcg3zh5qtn',
   *   );
   * ```
   */
  retrieve(realTimeDecisionID: string, options?: RequestOptions): APIPromise<RealTimeDecision> {
    return this._client.get(path`/real_time_decisions/${realTimeDecisionID}`, options);
  }

  /**
   * Action a Real-Time Decision
   *
   * @example
   * ```ts
   * const realTimeDecision =
   *   await client.realTimeDecisions.action(
   *     'real_time_decision_j76n2e810ezcg3zh5qtn',
   *   );
   * ```
   */
  action(
    realTimeDecisionID: string,
    body: RealTimeDecisionActionParams,
    options?: RequestOptions,
  ): APIPromise<RealTimeDecision> {
    return this._client.post(path`/real_time_decisions/${realTimeDecisionID}/action`, { body, ...options });
  }
}

/**
 * Real Time Decisions are created when your application needs to take action in
 * real-time to some event such as a card authorization. For more information, see
 * our
 * [Real-Time Decisions guide](https://increase.com/documentation/real-time-decisions).
 */
export interface RealTimeDecision {
  /**
   * The Real-Time Decision identifier.
   */
  id: string;

  /**
   * Fields related to a 3DS authentication attempt.
   */
  card_authentication: RealTimeDecision.CardAuthentication | null;

  /**
   * Fields related to a 3DS authentication attempt.
   */
  card_authentication_challenge: RealTimeDecision.CardAuthenticationChallenge | null;

  /**
   * Fields related to a card authorization.
   */
  card_authorization: RealTimeDecision.CardAuthorization | null;

  /**
   * Fields related to a card balance inquiry.
   */
  card_balance_inquiry: RealTimeDecision.CardBalanceInquiry | null;

  /**
   * The category of the Real-Time Decision.
   *
   * - `card_authorization_requested` - A card is being authorized.
   * - `card_balance_inquiry_requested` - A balance inquiry is being made on a card.
   * - `card_authentication_requested` - 3DS authentication is requested.
   * - `card_authentication_challenge_requested` - 3DS authentication challenge
   *   requires cardholder involvement.
   * - `digital_wallet_token_requested` - A card is being loaded into a digital
   *   wallet.
   * - `digital_wallet_authentication_requested` - A card is being loaded into a
   *   digital wallet and requires cardholder authentication.
   */
  category:
    | 'card_authorization_requested'
    | 'card_balance_inquiry_requested'
    | 'card_authentication_requested'
    | 'card_authentication_challenge_requested'
    | 'digital_wallet_token_requested'
    | 'digital_wallet_authentication_requested';

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the Real-Time Decision was created.
   */
  created_at: string;

  /**
   * Fields related to a digital wallet authentication attempt.
   */
  digital_wallet_authentication: RealTimeDecision.DigitalWalletAuthentication | null;

  /**
   * Fields related to a digital wallet token provisioning attempt.
   */
  digital_wallet_token: RealTimeDecision.DigitalWalletToken | null;

  /**
   * The status of the Real-Time Decision.
   *
   * - `pending` - The decision is pending action via real-time webhook.
   * - `responded` - Your webhook actioned the real-time decision.
   * - `timed_out` - Your webhook failed to respond to the authorization in time.
   */
  status: 'pending' | 'responded' | 'timed_out';

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * your application can no longer respond to the Real-Time Decision.
   */
  timeout_at: string;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `real_time_decision`.
   */
  type: 'real_time_decision';
}

export namespace RealTimeDecision {
  /**
   * Fields related to a 3DS authentication attempt.
   */
  export interface CardAuthentication {
    /**
     * The identifier of the Account the card belongs to.
     */
    account_id: string;

    /**
     * The identifier of the Card that is being tokenized.
     */
    card_id: string;

    /**
     * Whether or not the authentication attempt was approved.
     *
     * - `approve` - Approve the authentication attempt without triggering a challenge.
     * - `challenge` - Request further validation before approving the authentication
     *   attempt.
     * - `deny` - Deny the authentication attempt.
     */
    decision: 'approve' | 'challenge' | 'deny' | null;

    /**
     * The identifier of the Card Payment this authentication attempt will belong to.
     * Available in the API once the card authentication has completed.
     */
    upcoming_card_payment_id: string;
  }

  /**
   * Fields related to a 3DS authentication attempt.
   */
  export interface CardAuthenticationChallenge {
    /**
     * The identifier of the Account the card belongs to.
     */
    account_id: string;

    /**
     * The identifier of the Card that is being tokenized.
     */
    card_id: string;

    /**
     * The identifier of the Card Payment this authentication challenge attempt belongs
     * to.
     */
    card_payment_id: string;

    /**
     * The one-time code delivered to the cardholder.
     */
    one_time_code: string;

    /**
     * Whether or not the challenge was delivered to the cardholder.
     *
     * - `success` - Your application successfully delivered the one-time code to the
     *   cardholder.
     * - `failure` - Your application was unable to deliver the one-time code to the
     *   cardholder.
     */
    result: 'success' | 'failure' | null;
  }

  /**
   * Fields related to a card authorization.
   */
  export interface CardAuthorization {
    /**
     * The identifier of the Account the authorization will debit.
     */
    account_id: string;

    /**
     * Additional amounts associated with the card authorization, such as ATM
     * surcharges fees. These are usually a subset of the `amount` field and are used
     * to provide more detailed information about the transaction.
     */
    additional_amounts: CardAuthorization.AdditionalAmounts;

    /**
     * Present if and only if `decision` is `approve`. Contains information related to
     * the approval of the authorization.
     */
    approval: CardAuthorization.Approval | null;

    /**
     * The identifier of the Card that is being authorized.
     */
    card_id: string;

    /**
     * Whether or not the authorization was approved.
     *
     * - `approve` - Approve the authorization.
     * - `decline` - Decline the authorization.
     */
    decision: 'approve' | 'decline' | null;

    /**
     * Present if and only if `decision` is `decline`. Contains information related to
     * the reason the authorization was declined.
     */
    decline: CardAuthorization.Decline | null;

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
     * Whether or not the authorization supports partial approvals.
     *
     * - `supported` - This transaction supports partial approvals.
     * - `not_supported` - This transaction does not support partial approvals.
     */
    partial_approval_capability: 'supported' | 'not_supported';

    /**
     * If the authorization was made in-person with a physical card, the Physical Card
     * that was used.
     */
    physical_card_id: string | null;

    /**
     * The amount of the attempted authorization in the currency the card user sees at
     * the time of purchase, in the minor unit of that currency. For dollars, for
     * example, this is cents.
     */
    presentment_amount: number;

    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the currency the
     * user sees at the time of purchase.
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
     * Fields specific to the type of request, such as an incremental authorization.
     */
    request_details: CardAuthorization.RequestDetails;

    /**
     * The amount of the attempted authorization in the currency it will be settled in.
     * This currency is the same as that of the Account the card belongs to.
     */
    settlement_amount: number;

    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the currency the
     * transaction will be settled in.
     */
    settlement_currency: string;

    /**
     * The terminal identifier (commonly abbreviated as TID) of the terminal the card
     * is transacting with.
     */
    terminal_id: string | null;

    /**
     * The identifier of the Card Payment this authorization will belong to. Available
     * in the API once the card authorization has completed.
     */
    upcoming_card_payment_id: string;

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
     * Present if and only if `decision` is `approve`. Contains information related to
     * the approval of the authorization.
     */
    export interface Approval {
      /**
       * If the authorization was partially approved, this field contains the approved
       * amount in the minor unit of the settlement currency.
       */
      partial_amount: number | null;
    }

    /**
     * Present if and only if `decision` is `decline`. Contains information related to
     * the reason the authorization was declined.
     */
    export interface Decline {
      /**
       * The reason the authorization was declined.
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
      reason:
        | 'insufficient_funds'
        | 'transaction_never_allowed'
        | 'exceeds_approval_limit'
        | 'card_temporarily_disabled'
        | 'suspected_fraud'
        | 'other';
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
     * Fields specific to the type of request, such as an incremental authorization.
     */
    export interface RequestDetails {
      /**
       * The type of this request (e.g., an initial authorization or an incremental
       * authorization).
       *
       * - `initial_authorization` - A regular, standalone authorization.
       * - `incremental_authorization` - An incremental request to increase the amount of
       *   an existing authorization.
       */
      category: 'initial_authorization' | 'incremental_authorization';

      /**
       * Fields specific to the category `incremental_authorization`.
       */
      incremental_authorization: RequestDetails.IncrementalAuthorization | null;

      /**
       * Fields specific to the category `initial_authorization`.
       */
      initial_authorization: RequestDetails.InitialAuthorization | null;
    }

    export namespace RequestDetails {
      /**
       * Fields specific to the category `incremental_authorization`.
       */
      export interface IncrementalAuthorization {
        /**
         * The card payment for this authorization and increment.
         */
        card_payment_id: string;

        /**
         * The identifier of the card authorization this request is attempting to
         * increment.
         */
        original_card_authorization_id: string;
      }

      /**
       * Fields specific to the category `initial_authorization`.
       */
      export interface InitialAuthorization {}
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
    }
  }

  /**
   * Fields related to a card balance inquiry.
   */
  export interface CardBalanceInquiry {
    /**
     * The identifier of the Account the authorization will debit.
     */
    account_id: string;

    /**
     * Additional amounts associated with the card authorization, such as ATM
     * surcharges fees. These are usually a subset of the `amount` field and are used
     * to provide more detailed information about the transaction.
     */
    additional_amounts: CardBalanceInquiry.AdditionalAmounts;

    /**
     * Present if and only if `decision` is `approve`. Contains information related to
     * the approval of the balance inquiry.
     */
    approval: CardBalanceInquiry.Approval | null;

    /**
     * The identifier of the Card that is being authorized.
     */
    card_id: string;

    /**
     * Whether or not the authorization was approved.
     *
     * - `approve` - Approve the authorization.
     * - `decline` - Decline the authorization.
     */
    decision: 'approve' | 'decline' | null;

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
     * The terminal identifier (commonly abbreviated as TID) of the terminal the card
     * is transacting with.
     */
    terminal_id: string | null;

    /**
     * The identifier of the Card Payment this authorization will belong to. Available
     * in the API once the card authorization has completed.
     */
    upcoming_card_payment_id: string;

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
     * Present if and only if `decision` is `approve`. Contains information related to
     * the approval of the balance inquiry.
     */
    export interface Approval {
      /**
       * If the balance inquiry was approved, this field contains the balance in the
       * minor unit of the settlement currency.
       */
      balance: number;
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
    }
  }

  /**
   * Fields related to a digital wallet authentication attempt.
   */
  export interface DigitalWalletAuthentication {
    /**
     * The identifier of the Card that is being tokenized.
     */
    card_id: string;

    /**
     * The channel to send the card user their one-time passcode.
     *
     * - `sms` - Send one-time passcodes over SMS.
     * - `email` - Send one-time passcodes over email.
     */
    channel: 'sms' | 'email';

    /**
     * The digital wallet app being used.
     *
     * - `apple_pay` - Apple Pay
     * - `google_pay` - Google Pay
     * - `samsung_pay` - Samsung Pay
     * - `unknown` - Unknown
     */
    digital_wallet: 'apple_pay' | 'google_pay' | 'samsung_pay' | 'unknown';

    /**
     * The email to send the one-time passcode to if `channel` is equal to `email`.
     */
    email: string | null;

    /**
     * The one-time passcode to send the card user.
     */
    one_time_passcode: string;

    /**
     * The phone number to send the one-time passcode to if `channel` is equal to
     * `sms`.
     */
    phone: string | null;

    /**
     * Whether your application successfully delivered the one-time passcode.
     *
     * - `success` - Your application successfully delivered the one-time passcode to
     *   the cardholder.
     * - `failure` - Your application failed to deliver the one-time passcode to the
     *   cardholder.
     */
    result: 'success' | 'failure' | null;
  }

  /**
   * Fields related to a digital wallet token provisioning attempt.
   */
  export interface DigitalWalletToken {
    /**
     * The identifier of the Card that is being tokenized.
     */
    card_id: string;

    /**
     * Whether or not the provisioning request was approved. This will be null until
     * the real time decision is responded to.
     *
     * - `approve` - Approve the provisioning request.
     * - `decline` - Decline the provisioning request.
     */
    decision: 'approve' | 'decline' | null;

    /**
     * Device that is being used to provision the digital wallet token.
     */
    device: DigitalWalletToken.Device;

    /**
     * The digital wallet app being used.
     *
     * - `apple_pay` - Apple Pay
     * - `google_pay` - Google Pay
     * - `samsung_pay` - Samsung Pay
     * - `unknown` - Unknown
     */
    digital_wallet: 'apple_pay' | 'google_pay' | 'samsung_pay' | 'unknown';
  }

  export namespace DigitalWalletToken {
    /**
     * Device that is being used to provision the digital wallet token.
     */
    export interface Device {
      /**
       * ID assigned to the device by the digital wallet provider.
       */
      identifier: string | null;
    }
  }
}

export interface RealTimeDecisionActionParams {
  /**
   * If the Real-Time Decision relates to a 3DS card authentication attempt, this
   * object contains your response to the authentication.
   */
  card_authentication?: RealTimeDecisionActionParams.CardAuthentication;

  /**
   * If the Real-Time Decision relates to 3DS card authentication challenge delivery,
   * this object contains your response.
   */
  card_authentication_challenge?: RealTimeDecisionActionParams.CardAuthenticationChallenge;

  /**
   * If the Real-Time Decision relates to a card authorization attempt, this object
   * contains your response to the authorization.
   */
  card_authorization?: RealTimeDecisionActionParams.CardAuthorization;

  /**
   * If the Real-Time Decision relates to a card balance inquiry attempt, this object
   * contains your response to the inquiry.
   */
  card_balance_inquiry?: RealTimeDecisionActionParams.CardBalanceInquiry;

  /**
   * If the Real-Time Decision relates to a digital wallet authentication attempt,
   * this object contains your response to the authentication.
   */
  digital_wallet_authentication?: RealTimeDecisionActionParams.DigitalWalletAuthentication;

  /**
   * If the Real-Time Decision relates to a digital wallet token provisioning
   * attempt, this object contains your response to the attempt.
   */
  digital_wallet_token?: RealTimeDecisionActionParams.DigitalWalletToken;
}

export namespace RealTimeDecisionActionParams {
  /**
   * If the Real-Time Decision relates to a 3DS card authentication attempt, this
   * object contains your response to the authentication.
   */
  export interface CardAuthentication {
    /**
     * Whether the card authentication attempt should be approved or declined.
     *
     * - `approve` - Approve the authentication attempt without triggering a challenge.
     * - `challenge` - Request further validation before approving the authentication
     *   attempt.
     * - `deny` - Deny the authentication attempt.
     */
    decision: 'approve' | 'challenge' | 'deny';
  }

  /**
   * If the Real-Time Decision relates to 3DS card authentication challenge delivery,
   * this object contains your response.
   */
  export interface CardAuthenticationChallenge {
    /**
     * Whether the card authentication challenge was successfully delivered to the
     * cardholder.
     *
     * - `success` - Your application successfully delivered the one-time code to the
     *   cardholder.
     * - `failure` - Your application was unable to deliver the one-time code to the
     *   cardholder.
     */
    result: 'success' | 'failure';
  }

  /**
   * If the Real-Time Decision relates to a card authorization attempt, this object
   * contains your response to the authorization.
   */
  export interface CardAuthorization {
    /**
     * Whether the card authorization should be approved or declined.
     *
     * - `approve` - Approve the authorization.
     * - `decline` - Decline the authorization.
     */
    decision: 'approve' | 'decline';

    /**
     * If your application approves the authorization, this contains metadata about
     * your decision to approve. Your response here is advisory to the acquiring bank.
     * The bank may choose to reverse the authorization if you approve the transaction
     * but indicate the address does not match.
     */
    approval?: CardAuthorization.Approval;

    /**
     * If your application declines the authorization, this contains details about the
     * decline.
     */
    decline?: CardAuthorization.Decline;

    [k: string]: unknown;
  }

  export namespace CardAuthorization {
    /**
     * If your application approves the authorization, this contains metadata about
     * your decision to approve. Your response here is advisory to the acquiring bank.
     * The bank may choose to reverse the authorization if you approve the transaction
     * but indicate the address does not match.
     */
    export interface Approval {
      /**
       * Your decisions on whether or not each provided address component is a match.
       * Your response here is evaluated against the customer's provided `postal_code`
       * and `line1`, and an appropriate network response is generated. For more
       * information, see our
       * [Address Verification System Codes and Overrides](https://increase.com/documentation/address-verification-system-codes-and-overrides)
       * guide.
       */
      cardholder_address_verification_result?: Approval.CardholderAddressVerificationResult;

      /**
       * If the transaction supports partial approvals
       * (`partial_approval_capability: supported`) the `partial_amount` can be provided
       * in the transaction's settlement currency to approve a lower amount than was
       * requested.
       */
      partial_amount?: number;
    }

    export namespace Approval {
      /**
       * Your decisions on whether or not each provided address component is a match.
       * Your response here is evaluated against the customer's provided `postal_code`
       * and `line1`, and an appropriate network response is generated. For more
       * information, see our
       * [Address Verification System Codes and Overrides](https://increase.com/documentation/address-verification-system-codes-and-overrides)
       * guide.
       */
      export interface CardholderAddressVerificationResult {
        /**
         * Your decision on the address line of the provided address.
         *
         * - `match` - The cardholder address verification result matches the address
         *   provided by the merchant.
         * - `no_match` - The cardholder address verification result does not match the
         *   address provided by the merchant.
         */
        line1: 'match' | 'no_match';

        /**
         * Your decision on the postal code of the provided address.
         *
         * - `match` - The cardholder address verification result matches the address
         *   provided by the merchant.
         * - `no_match` - The cardholder address verification result does not match the
         *   address provided by the merchant.
         */
        postal_code: 'match' | 'no_match';
      }
    }

    /**
     * If your application declines the authorization, this contains details about the
     * decline.
     */
    export interface Decline {
      /**
       * The reason the card authorization was declined. This translates to a specific
       * decline code that is sent to the card network.
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
      reason:
        | 'insufficient_funds'
        | 'transaction_never_allowed'
        | 'exceeds_approval_limit'
        | 'card_temporarily_disabled'
        | 'suspected_fraud'
        | 'other';
    }
  }

  /**
   * If the Real-Time Decision relates to a card balance inquiry attempt, this object
   * contains your response to the inquiry.
   */
  export interface CardBalanceInquiry {
    /**
     * Whether the card balance inquiry should be approved or declined.
     *
     * - `approve` - Approve the authorization.
     * - `decline` - Decline the authorization.
     */
    decision: 'approve' | 'decline';

    /**
     * If your application approves the balance inquiry, this contains metadata about
     * your decision to approve.
     */
    approval?: CardBalanceInquiry.Approval;
  }

  export namespace CardBalanceInquiry {
    /**
     * If your application approves the balance inquiry, this contains metadata about
     * your decision to approve.
     */
    export interface Approval {
      /**
       * The balance on the card in the settlement currency of the transaction.
       */
      balance: number;
    }
  }

  /**
   * If the Real-Time Decision relates to a digital wallet authentication attempt,
   * this object contains your response to the authentication.
   */
  export interface DigitalWalletAuthentication {
    /**
     * Whether your application was able to deliver the one-time passcode.
     *
     * - `success` - Your application successfully delivered the one-time passcode to
     *   the cardholder.
     * - `failure` - Your application failed to deliver the one-time passcode to the
     *   cardholder.
     */
    result: 'success' | 'failure';

    /**
     * If your application was able to deliver the one-time passcode, this contains
     * metadata about the delivery. Exactly one of `phone` or `email` must be provided.
     */
    success?: DigitalWalletAuthentication.Success;
  }

  export namespace DigitalWalletAuthentication {
    /**
     * If your application was able to deliver the one-time passcode, this contains
     * metadata about the delivery. Exactly one of `phone` or `email` must be provided.
     */
    export interface Success {
      /**
       * The email address that was used to verify the cardholder via one-time passcode.
       */
      email?: string;

      /**
       * The phone number that was used to verify the cardholder via one-time passcode
       * over SMS.
       */
      phone?: string;
    }
  }

  /**
   * If the Real-Time Decision relates to a digital wallet token provisioning
   * attempt, this object contains your response to the attempt.
   */
  export interface DigitalWalletToken {
    /**
     * If your application approves the provisioning attempt, this contains metadata
     * about the digital wallet token that will be generated.
     */
    approval?: DigitalWalletToken.Approval;

    /**
     * If your application declines the provisioning attempt, this contains details
     * about the decline.
     */
    decline?: DigitalWalletToken.Decline;
  }

  export namespace DigitalWalletToken {
    /**
     * If your application approves the provisioning attempt, this contains metadata
     * about the digital wallet token that will be generated.
     */
    export interface Approval {
      /**
       * An email address that can be used to verify the cardholder via one-time
       * passcode.
       */
      email?: string;

      /**
       * A phone number that can be used to verify the cardholder via one-time passcode
       * over SMS.
       */
      phone?: string;
    }

    /**
     * If your application declines the provisioning attempt, this contains details
     * about the decline.
     */
    export interface Decline {
      /**
       * Why the tokenization attempt was declined. This is for logging purposes only and
       * is not displayed to the end-user.
       */
      reason?: string;
    }
  }
}

export declare namespace RealTimeDecisions {
  export {
    type RealTimeDecision as RealTimeDecision,
    type RealTimeDecisionActionParams as RealTimeDecisionActionParams,
  };
}
