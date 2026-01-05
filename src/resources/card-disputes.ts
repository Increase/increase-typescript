// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class CardDisputes extends APIResource {
  /**
   * Create a Card Dispute
   *
   * @example
   * ```ts
   * const cardDispute = await client.cardDisputes.create({
   *   disputed_transaction_id:
   *     'transaction_uyrp7fld2ium70oa7oi',
   *   network: 'visa',
   * });
   * ```
   */
  create(body: CardDisputeCreateParams, options?: RequestOptions): APIPromise<CardDispute> {
    return this._client.post('/card_disputes', { body, ...options });
  }

  /**
   * Retrieve a Card Dispute
   *
   * @example
   * ```ts
   * const cardDispute = await client.cardDisputes.retrieve(
   *   'card_dispute_h9sc95nbl1cgltpp7men',
   * );
   * ```
   */
  retrieve(cardDisputeID: string, options?: RequestOptions): APIPromise<CardDispute> {
    return this._client.get(path`/card_disputes/${cardDisputeID}`, options);
  }

  /**
   * List Card Disputes
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const cardDispute of client.cardDisputes.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: CardDisputeListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CardDisputesPage, CardDispute> {
    return this._client.getAPIList('/card_disputes', Page<CardDispute>, { query, ...options });
  }

  /**
   * Submit a User Submission for a Card Dispute
   *
   * @example
   * ```ts
   * const cardDispute =
   *   await client.cardDisputes.submitUserSubmission(
   *     'card_dispute_h9sc95nbl1cgltpp7men',
   *     { network: 'visa' },
   *   );
   * ```
   */
  submitUserSubmission(
    cardDisputeID: string,
    body: CardDisputeSubmitUserSubmissionParams,
    options?: RequestOptions,
  ): APIPromise<CardDispute> {
    return this._client.post(path`/card_disputes/${cardDisputeID}/submit_user_submission`, {
      body,
      ...options,
    });
  }

  /**
   * Withdraw a Card Dispute
   *
   * @example
   * ```ts
   * const cardDispute = await client.cardDisputes.withdraw(
   *   'card_dispute_h9sc95nbl1cgltpp7men',
   * );
   * ```
   */
  withdraw(cardDisputeID: string, options?: RequestOptions): APIPromise<CardDispute> {
    return this._client.post(path`/card_disputes/${cardDisputeID}/withdraw`, options);
  }
}

export type CardDisputesPage = Page<CardDispute>;

/**
 * If unauthorized activity occurs on a card, you can create a Card Dispute and
 * we'll work with the card networks to return the funds if appropriate.
 */
export interface CardDispute {
  /**
   * The Card Dispute identifier.
   */
  id: string;

  /**
   * The amount of the dispute.
   */
  amount: number;

  /**
   * The Card that the Card Dispute is associated with.
   */
  card_id: string;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the Card Dispute was created.
   */
  created_at: string;

  /**
   * The identifier of the Transaction that was disputed.
   */
  disputed_transaction_id: string;

  /**
   * The idempotency key you chose for this object. This value is unique across
   * Increase and is used to ensure that a request is only processed once. Learn more
   * about [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key: string | null;

  /**
   * If the Card Dispute's status is `lost`, this will contain details of the lost
   * dispute.
   */
  loss: CardDispute.Loss | null;

  /**
   * The network that the Card Dispute is associated with.
   *
   * - `visa` - Visa: details will be under the `visa` object.
   * - `pulse` - Pulse: details will be under the `pulse` object.
   */
  network: 'visa' | 'pulse';

  /**
   * The status of the Card Dispute.
   *
   * - `user_submission_required` - A User Submission is required to continue with
   *   the Card Dispute.
   * - `pending_user_submission_reviewing` - The most recent User Submission is being
   *   reviewed.
   * - `pending_user_submission_submitting` - The most recent User Submission is
   *   being submitted to the network.
   * - `pending_user_withdrawal_submitting` - The user's withdrawal of the Card
   *   Dispute is being submitted to the network.
   * - `pending_response` - The Card Dispute is pending a response from the network.
   * - `lost` - The Card Dispute has been lost and funds previously credited from the
   *   acceptance have been debited.
   * - `won` - The Card Dispute has been won and no further action can be taken.
   */
  status:
    | 'user_submission_required'
    | 'pending_user_submission_reviewing'
    | 'pending_user_submission_submitting'
    | 'pending_user_withdrawal_submitting'
    | 'pending_response'
    | 'lost'
    | 'won';

  /**
   * A constant representing the object's type. For this resource it will always be
   * `card_dispute`.
   */
  type: 'card_dispute';

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the user submission is required by. Present only if status is
   * `user_submission_required` and a user submission is required by a certain time.
   * Otherwise, this will be `nil`.
   */
  user_submission_required_by: string | null;

  /**
   * Card Dispute information for card payments processed over Visa's network. This
   * field will be present in the JSON response if and only if `network` is equal to
   * `visa`.
   */
  visa: CardDispute.Visa | null;

  /**
   * If the Card Dispute's status is `won`, this will contain details of the won
   * dispute.
   */
  win: CardDispute.Win | null;
}

export namespace CardDispute {
  /**
   * If the Card Dispute's status is `lost`, this will contain details of the lost
   * dispute.
   */
  export interface Loss {
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
     * the Card Dispute was lost.
     */
    lost_at: string;

    /**
     * The reason the Card Dispute was lost.
     *
     * - `user_withdrawn` - The user withdrew the Card Dispute.
     * - `loss` - The Card Dispute was lost according to network rules.
     */
    reason: 'user_withdrawn' | 'loss';
  }

  /**
   * Card Dispute information for card payments processed over Visa's network. This
   * field will be present in the JSON response if and only if `network` is equal to
   * `visa`.
   */
  export interface Visa {
    /**
     * The network events for the Card Dispute.
     */
    network_events: Array<Visa.NetworkEvent>;

    /**
     * The category of the currently required user submission if the user wishes to
     * proceed with the dispute. Present if and only if status is
     * `user_submission_required`. Otherwise, this will be `nil`.
     *
     * - `chargeback` - A Chargeback User Submission is required.
     * - `merchant_prearbitration_decline` - A Merchant Pre Arbitration Decline User
     *   Submission is required.
     * - `user_prearbitration` - A User Initiated Pre Arbitration User Submission is
     *   required.
     */
    required_user_submission_category:
      | 'chargeback'
      | 'merchant_prearbitration_decline'
      | 'user_prearbitration'
      | null;

    /**
     * The user submissions for the Card Dispute.
     */
    user_submissions: Array<Visa.UserSubmission>;
  }

  export namespace Visa {
    export interface NetworkEvent {
      /**
       * The files attached to the Visa Card Dispute User Submission.
       */
      attachment_files: Array<NetworkEvent.AttachmentFile>;

      /**
       * The category of the user submission. We may add additional possible values for
       * this enum over time; your application should be able to handle such additions
       * gracefully.
       *
       * - `chargeback_accepted` - Card Dispute Chargeback Accepted Visa Network Event:
       *   details will be under the `chargeback_accepted` object.
       * - `chargeback_submitted` - Card Dispute Chargeback Submitted Visa Network Event:
       *   details will be under the `chargeback_submitted` object.
       * - `chargeback_timed_out` - Card Dispute Chargeback Timed Out Visa Network Event:
       *   details will be under the `chargeback_timed_out` object.
       * - `merchant_prearbitration_decline_submitted` - Card Dispute Merchant
       *   Pre-Arbitration Decline Submitted Visa Network Event: details will be under
       *   the `merchant_prearbitration_decline_submitted` object.
       * - `merchant_prearbitration_received` - Card Dispute Merchant Pre-Arbitration
       *   Received Visa Network Event: details will be under the
       *   `merchant_prearbitration_received` object.
       * - `merchant_prearbitration_timed_out` - Card Dispute Merchant Pre-Arbitration
       *   Timed Out Visa Network Event: details will be under the
       *   `merchant_prearbitration_timed_out` object.
       * - `represented` - Card Dispute Re-presented Visa Network Event: details will be
       *   under the `represented` object.
       * - `representment_timed_out` - Card Dispute Re-presentment Timed Out Visa Network
       *   Event: details will be under the `representment_timed_out` object.
       * - `user_prearbitration_accepted` - Card Dispute User Pre-Arbitration Accepted
       *   Visa Network Event: details will be under the `user_prearbitration_accepted`
       *   object.
       * - `user_prearbitration_declined` - Card Dispute User Pre-Arbitration Declined
       *   Visa Network Event: details will be under the `user_prearbitration_declined`
       *   object.
       * - `user_prearbitration_submitted` - Card Dispute User Pre-Arbitration Submitted
       *   Visa Network Event: details will be under the `user_prearbitration_submitted`
       *   object.
       * - `user_prearbitration_timed_out` - Card Dispute User Pre-Arbitration Timed Out
       *   Visa Network Event: details will be under the `user_prearbitration_timed_out`
       *   object.
       * - `user_withdrawal_submitted` - Card Dispute User Withdrawal Submitted Visa
       *   Network Event: details will be under the `user_withdrawal_submitted` object.
       */
      category:
        | 'chargeback_accepted'
        | 'chargeback_submitted'
        | 'chargeback_timed_out'
        | 'merchant_prearbitration_decline_submitted'
        | 'merchant_prearbitration_received'
        | 'merchant_prearbitration_timed_out'
        | 'represented'
        | 'representment_timed_out'
        | 'user_prearbitration_accepted'
        | 'user_prearbitration_declined'
        | 'user_prearbitration_submitted'
        | 'user_prearbitration_timed_out'
        | 'user_withdrawal_submitted';

      /**
       * A Card Dispute Chargeback Accepted Visa Network Event object. This field will be
       * present in the JSON response if and only if `category` is equal to
       * `chargeback_accepted`. Contains the details specific to a chargeback accepted
       * Visa Card Dispute Network Event, which represents that a chargeback has been
       * accepted by the merchant.
       */
      chargeback_accepted: NetworkEvent.ChargebackAccepted | null;

      /**
       * A Card Dispute Chargeback Submitted Visa Network Event object. This field will
       * be present in the JSON response if and only if `category` is equal to
       * `chargeback_submitted`. Contains the details specific to a chargeback submitted
       * Visa Card Dispute Network Event, which represents that a chargeback has been
       * submitted to the network.
       */
      chargeback_submitted: NetworkEvent.ChargebackSubmitted | null;

      /**
       * A Card Dispute Chargeback Timed Out Visa Network Event object. This field will
       * be present in the JSON response if and only if `category` is equal to
       * `chargeback_timed_out`. Contains the details specific to a chargeback timed out
       * Visa Card Dispute Network Event, which represents that the chargeback has timed
       * out in the user's favor.
       */
      chargeback_timed_out: NetworkEvent.ChargebackTimedOut | null;

      /**
       * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
       * the Visa Card Dispute Network Event was created.
       */
      created_at: string;

      /**
       * The dispute financial transaction that resulted from the network event, if any.
       */
      dispute_financial_transaction_id: string | null;

      /**
       * A Card Dispute Merchant Pre-Arbitration Decline Submitted Visa Network Event
       * object. This field will be present in the JSON response if and only if
       * `category` is equal to `merchant_prearbitration_decline_submitted`. Contains the
       * details specific to a merchant prearbitration decline submitted Visa Card
       * Dispute Network Event, which represents that the user has declined the
       * merchant's request for a prearbitration request decision in their favor.
       */
      merchant_prearbitration_decline_submitted: NetworkEvent.MerchantPrearbitrationDeclineSubmitted | null;

      /**
       * A Card Dispute Merchant Pre-Arbitration Received Visa Network Event object. This
       * field will be present in the JSON response if and only if `category` is equal to
       * `merchant_prearbitration_received`. Contains the details specific to a merchant
       * prearbitration received Visa Card Dispute Network Event, which represents that
       * the merchant has issued a prearbitration request in the user's favor.
       */
      merchant_prearbitration_received: NetworkEvent.MerchantPrearbitrationReceived | null;

      /**
       * A Card Dispute Merchant Pre-Arbitration Timed Out Visa Network Event object.
       * This field will be present in the JSON response if and only if `category` is
       * equal to `merchant_prearbitration_timed_out`. Contains the details specific to a
       * merchant prearbitration timed out Visa Card Dispute Network Event, which
       * represents that the user has timed out responding to the merchant's
       * prearbitration request.
       */
      merchant_prearbitration_timed_out: NetworkEvent.MerchantPrearbitrationTimedOut | null;

      /**
       * A Card Dispute Re-presented Visa Network Event object. This field will be
       * present in the JSON response if and only if `category` is equal to
       * `represented`. Contains the details specific to a re-presented Visa Card Dispute
       * Network Event, which represents that the merchant has declined the user's
       * chargeback and has re-presented the payment.
       */
      represented: NetworkEvent.Represented | null;

      /**
       * A Card Dispute Re-presentment Timed Out Visa Network Event object. This field
       * will be present in the JSON response if and only if `category` is equal to
       * `representment_timed_out`. Contains the details specific to a re-presentment
       * time-out Visa Card Dispute Network Event, which represents that the user did not
       * respond to the re-presentment by the merchant within the time limit.
       */
      representment_timed_out: NetworkEvent.RepresentmentTimedOut | null;

      /**
       * A Card Dispute User Pre-Arbitration Accepted Visa Network Event object. This
       * field will be present in the JSON response if and only if `category` is equal to
       * `user_prearbitration_accepted`. Contains the details specific to a user
       * prearbitration accepted Visa Card Dispute Network Event, which represents that
       * the merchant has accepted the user's prearbitration request in the user's favor.
       */
      user_prearbitration_accepted: NetworkEvent.UserPrearbitrationAccepted | null;

      /**
       * A Card Dispute User Pre-Arbitration Declined Visa Network Event object. This
       * field will be present in the JSON response if and only if `category` is equal to
       * `user_prearbitration_declined`. Contains the details specific to a user
       * prearbitration declined Visa Card Dispute Network Event, which represents that
       * the merchant has declined the user's prearbitration request.
       */
      user_prearbitration_declined: NetworkEvent.UserPrearbitrationDeclined | null;

      /**
       * A Card Dispute User Pre-Arbitration Submitted Visa Network Event object. This
       * field will be present in the JSON response if and only if `category` is equal to
       * `user_prearbitration_submitted`. Contains the details specific to a user
       * prearbitration submitted Visa Card Dispute Network Event, which represents that
       * the user's request for prearbitration has been submitted to the network.
       */
      user_prearbitration_submitted: NetworkEvent.UserPrearbitrationSubmitted | null;

      /**
       * A Card Dispute User Pre-Arbitration Timed Out Visa Network Event object. This
       * field will be present in the JSON response if and only if `category` is equal to
       * `user_prearbitration_timed_out`. Contains the details specific to a user
       * prearbitration timed out Visa Card Dispute Network Event, which represents that
       * the merchant has timed out responding to the user's prearbitration request.
       */
      user_prearbitration_timed_out: NetworkEvent.UserPrearbitrationTimedOut | null;

      /**
       * A Card Dispute User Withdrawal Submitted Visa Network Event object. This field
       * will be present in the JSON response if and only if `category` is equal to
       * `user_withdrawal_submitted`. Contains the details specific to a user withdrawal
       * submitted Visa Card Dispute Network Event, which represents that the user's
       * request to withdraw the dispute has been submitted to the network.
       */
      user_withdrawal_submitted: NetworkEvent.UserWithdrawalSubmitted | null;
    }

    export namespace NetworkEvent {
      export interface AttachmentFile {
        /**
         * The ID of the file attached to the Card Dispute.
         */
        file_id: string;
      }

      /**
       * A Card Dispute Chargeback Accepted Visa Network Event object. This field will be
       * present in the JSON response if and only if `category` is equal to
       * `chargeback_accepted`. Contains the details specific to a chargeback accepted
       * Visa Card Dispute Network Event, which represents that a chargeback has been
       * accepted by the merchant.
       */
      export interface ChargebackAccepted {}

      /**
       * A Card Dispute Chargeback Submitted Visa Network Event object. This field will
       * be present in the JSON response if and only if `category` is equal to
       * `chargeback_submitted`. Contains the details specific to a chargeback submitted
       * Visa Card Dispute Network Event, which represents that a chargeback has been
       * submitted to the network.
       */
      export interface ChargebackSubmitted {}

      /**
       * A Card Dispute Chargeback Timed Out Visa Network Event object. This field will
       * be present in the JSON response if and only if `category` is equal to
       * `chargeback_timed_out`. Contains the details specific to a chargeback timed out
       * Visa Card Dispute Network Event, which represents that the chargeback has timed
       * out in the user's favor.
       */
      export interface ChargebackTimedOut {}

      /**
       * A Card Dispute Merchant Pre-Arbitration Decline Submitted Visa Network Event
       * object. This field will be present in the JSON response if and only if
       * `category` is equal to `merchant_prearbitration_decline_submitted`. Contains the
       * details specific to a merchant prearbitration decline submitted Visa Card
       * Dispute Network Event, which represents that the user has declined the
       * merchant's request for a prearbitration request decision in their favor.
       */
      export interface MerchantPrearbitrationDeclineSubmitted {}

      /**
       * A Card Dispute Merchant Pre-Arbitration Received Visa Network Event object. This
       * field will be present in the JSON response if and only if `category` is equal to
       * `merchant_prearbitration_received`. Contains the details specific to a merchant
       * prearbitration received Visa Card Dispute Network Event, which represents that
       * the merchant has issued a prearbitration request in the user's favor.
       */
      export interface MerchantPrearbitrationReceived {
        /**
         * Cardholder no longer disputes details. Present if and only if `reason` is
         * `cardholder_no_longer_disputes`.
         */
        cardholder_no_longer_disputes: MerchantPrearbitrationReceived.CardholderNoLongerDisputes | null;

        /**
         * Compelling evidence details. Present if and only if `reason` is
         * `compelling_evidence`.
         */
        compelling_evidence: MerchantPrearbitrationReceived.CompellingEvidence | null;

        /**
         * Credit or reversal processed details. Present if and only if `reason` is
         * `credit_or_reversal_processed`.
         */
        credit_or_reversal_processed: MerchantPrearbitrationReceived.CreditOrReversalProcessed | null;

        /**
         * Delayed charge transaction details. Present if and only if `reason` is
         * `delayed_charge_transaction`.
         */
        delayed_charge_transaction: MerchantPrearbitrationReceived.DelayedChargeTransaction | null;

        /**
         * Evidence of imprint details. Present if and only if `reason` is
         * `evidence_of_imprint`.
         */
        evidence_of_imprint: MerchantPrearbitrationReceived.EvidenceOfImprint | null;

        /**
         * Invalid dispute details. Present if and only if `reason` is `invalid_dispute`.
         */
        invalid_dispute: MerchantPrearbitrationReceived.InvalidDispute | null;

        /**
         * Non-fiat currency or non-fungible token received details. Present if and only if
         * `reason` is `non_fiat_currency_or_non_fungible_token_received`.
         */
        non_fiat_currency_or_non_fungible_token_received: MerchantPrearbitrationReceived.NonFiatCurrencyOrNonFungibleTokenReceived | null;

        /**
         * Prior undisputed non-fraud transactions details. Present if and only if `reason`
         * is `prior_undisputed_non_fraud_transactions`.
         */
        prior_undisputed_non_fraud_transactions: MerchantPrearbitrationReceived.PriorUndisputedNonFraudTransactions | null;

        /**
         * The reason the merchant re-presented the dispute.
         *
         * - `cardholder_no_longer_disputes` - Cardholder no longer disputes the
         *   transaction.
         * - `compelling_evidence` - Compelling evidence.
         * - `credit_or_reversal_processed` - Credit or reversal was processed.
         * - `delayed_charge_transaction` - Delayed charge transaction.
         * - `evidence_of_imprint` - Evidence of imprint.
         * - `invalid_dispute` - Invalid dispute.
         * - `non_fiat_currency_or_non_fungible_token_received` - Non-fiat currency or
         *   non-fungible token was received by the cardholder.
         * - `prior_undisputed_non_fraud_transactions` - Prior undisputed non-fraud
         *   transactions.
         */
        reason:
          | 'cardholder_no_longer_disputes'
          | 'compelling_evidence'
          | 'credit_or_reversal_processed'
          | 'delayed_charge_transaction'
          | 'evidence_of_imprint'
          | 'invalid_dispute'
          | 'non_fiat_currency_or_non_fungible_token_received'
          | 'prior_undisputed_non_fraud_transactions';
      }

      export namespace MerchantPrearbitrationReceived {
        /**
         * Cardholder no longer disputes details. Present if and only if `reason` is
         * `cardholder_no_longer_disputes`.
         */
        export interface CardholderNoLongerDisputes {
          /**
           * Explanation for why the merchant believes the cardholder no longer disputes the
           * transaction.
           */
          explanation: string | null;
        }

        /**
         * Compelling evidence details. Present if and only if `reason` is
         * `compelling_evidence`.
         */
        export interface CompellingEvidence {
          /**
           * The category of compelling evidence provided by the merchant.
           *
           * - `authorized_signer` - Authorized signer known by the cardholder.
           * - `delivery` - Proof of delivery.
           * - `delivery_at_place_of_employment` - Proof of delivery to cardholder at place
           *   of employment.
           * - `digital_goods_download` - Proof of digital goods download.
           * - `dynamic_currency_conversion_actively_chosen` - Dynamic Currency Conversion
           *   actively chosen by cardholder.
           * - `flight_manifest_and_purchase_itinerary` - Flight manifest with corresponding
           *   purchase itinerary record.
           * - `household_member_signer` - Signer is member of cardholder's household.
           * - `legitimate_spend_across_payment_types_for_same_merchandise` - Legitimate
           *   spend across multiple payment types for same merchandise.
           * - `merchandise_use` - Documentation to prove the cardholder is in possession of
           *   and/or using the merchandise.
           * - `passenger_transport_ticket_use` - Passenger transport: proof ticket was
           *   received, scanned at gate or other transaction related to original (for
           *   example, frequent flyer miles.)
           * - `recurring_transaction_with_binding_contract_or_previous_undisputed_transaction` -
           *   Recurring transaction with binding contract or previous undisputed recurring
           *   transactions and proof the cardholder is using the merchandise or service.
           * - `signed_delivery_or_pickup_form` - Signed delivery form, or copy of/details of
           *   identification from cardholder as proof goods were picked up at merchant
           *   location.
           * - `signed_mail_order_phone_order_form` - Signed Mail Order/Phone Order form.
           * - `travel_and_expense_loyalty_transaction` - Travel & Expense: loyalty
           *   transactions related to purchase.
           * - `travel_and_expense_subsequent_purchase` - Travel & Expense: subsequent
           *   purchases made throughout service period.
           */
          category:
            | 'authorized_signer'
            | 'delivery'
            | 'delivery_at_place_of_employment'
            | 'digital_goods_download'
            | 'dynamic_currency_conversion_actively_chosen'
            | 'flight_manifest_and_purchase_itinerary'
            | 'household_member_signer'
            | 'legitimate_spend_across_payment_types_for_same_merchandise'
            | 'merchandise_use'
            | 'passenger_transport_ticket_use'
            | 'recurring_transaction_with_binding_contract_or_previous_undisputed_transaction'
            | 'signed_delivery_or_pickup_form'
            | 'signed_mail_order_phone_order_form'
            | 'travel_and_expense_loyalty_transaction'
            | 'travel_and_expense_subsequent_purchase';

          /**
           * Explanation of the compelling evidence provided by the merchant.
           */
          explanation: string | null;
        }

        /**
         * Credit or reversal processed details. Present if and only if `reason` is
         * `credit_or_reversal_processed`.
         */
        export interface CreditOrReversalProcessed {
          /**
           * The amount of the credit or reversal in the minor unit of its currency. For
           * dollars, for example, this is cents.
           */
          amount: number;

          /**
           * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the credit or
           * reversal's currency.
           */
          currency: string;

          /**
           * Explanation for why the merchant believes the credit or reversal was processed.
           */
          explanation: string | null;

          /**
           * The date the credit or reversal was processed.
           */
          processed_at: string;
        }

        /**
         * Delayed charge transaction details. Present if and only if `reason` is
         * `delayed_charge_transaction`.
         */
        export interface DelayedChargeTransaction {
          /**
           * Additional details about the delayed charge transaction.
           */
          explanation: string | null;
        }

        /**
         * Evidence of imprint details. Present if and only if `reason` is
         * `evidence_of_imprint`.
         */
        export interface EvidenceOfImprint {
          /**
           * Explanation of the evidence of imprint.
           */
          explanation: string | null;
        }

        /**
         * Invalid dispute details. Present if and only if `reason` is `invalid_dispute`.
         */
        export interface InvalidDispute {
          /**
           * Explanation for why the dispute is considered invalid by the merchant.
           */
          explanation: string | null;

          /**
           * The reason a merchant considers the dispute invalid.
           *
           * - `other` - Other.
           * - `special_authorization_procedures_followed` - Special authorization procedures
           *   followed.
           */
          reason: 'other' | 'special_authorization_procedures_followed';
        }

        /**
         * Non-fiat currency or non-fungible token received details. Present if and only if
         * `reason` is `non_fiat_currency_or_non_fungible_token_received`.
         */
        export interface NonFiatCurrencyOrNonFungibleTokenReceived {
          /**
           * Blockchain transaction hash.
           */
          blockchain_transaction_hash: string;

          /**
           * Destination wallet address.
           */
          destination_wallet_address: string;

          /**
           * Prior approved transactions.
           */
          prior_approved_transactions: string | null;
        }

        /**
         * Prior undisputed non-fraud transactions details. Present if and only if `reason`
         * is `prior_undisputed_non_fraud_transactions`.
         */
        export interface PriorUndisputedNonFraudTransactions {
          /**
           * Explanation of the prior undisputed non-fraud transactions provided by the
           * merchant.
           */
          explanation: string | null;
        }
      }

      /**
       * A Card Dispute Merchant Pre-Arbitration Timed Out Visa Network Event object.
       * This field will be present in the JSON response if and only if `category` is
       * equal to `merchant_prearbitration_timed_out`. Contains the details specific to a
       * merchant prearbitration timed out Visa Card Dispute Network Event, which
       * represents that the user has timed out responding to the merchant's
       * prearbitration request.
       */
      export interface MerchantPrearbitrationTimedOut {}

      /**
       * A Card Dispute Re-presented Visa Network Event object. This field will be
       * present in the JSON response if and only if `category` is equal to
       * `represented`. Contains the details specific to a re-presented Visa Card Dispute
       * Network Event, which represents that the merchant has declined the user's
       * chargeback and has re-presented the payment.
       */
      export interface Represented {
        /**
         * Cardholder no longer disputes details. Present if and only if `reason` is
         * `cardholder_no_longer_disputes`.
         */
        cardholder_no_longer_disputes: Represented.CardholderNoLongerDisputes | null;

        /**
         * Credit or reversal processed details. Present if and only if `reason` is
         * `credit_or_reversal_processed`.
         */
        credit_or_reversal_processed: Represented.CreditOrReversalProcessed | null;

        /**
         * Invalid dispute details. Present if and only if `reason` is `invalid_dispute`.
         */
        invalid_dispute: Represented.InvalidDispute | null;

        /**
         * Non-fiat currency or non-fungible token as described details. Present if and
         * only if `reason` is `non_fiat_currency_or_non_fungible_token_as_described`.
         */
        non_fiat_currency_or_non_fungible_token_as_described: Represented.NonFiatCurrencyOrNonFungibleTokenAsDescribed | null;

        /**
         * Non-fiat currency or non-fungible token received details. Present if and only if
         * `reason` is `non_fiat_currency_or_non_fungible_token_received`.
         */
        non_fiat_currency_or_non_fungible_token_received: Represented.NonFiatCurrencyOrNonFungibleTokenReceived | null;

        /**
         * Proof of cash disbursement details. Present if and only if `reason` is
         * `proof_of_cash_disbursement`.
         */
        proof_of_cash_disbursement: Represented.ProofOfCashDisbursement | null;

        /**
         * The reason the merchant re-presented the dispute.
         *
         * - `cardholder_no_longer_disputes` - Cardholder no longer disputes the
         *   transaction.
         * - `credit_or_reversal_processed` - Credit or reversal was processed.
         * - `invalid_dispute` - Invalid dispute.
         * - `non_fiat_currency_or_non_fungible_token_as_described` - Non-fiat currency or
         *   non-fungible token is as described by the merchant.
         * - `non_fiat_currency_or_non_fungible_token_received` - Non-fiat currency or
         *   non-fungible token was received by the cardholder.
         * - `proof_of_cash_disbursement` - Proof of cash disbursement provided.
         * - `reversal_issued` - Reversal issued by merchant.
         */
        reason:
          | 'cardholder_no_longer_disputes'
          | 'credit_or_reversal_processed'
          | 'invalid_dispute'
          | 'non_fiat_currency_or_non_fungible_token_as_described'
          | 'non_fiat_currency_or_non_fungible_token_received'
          | 'proof_of_cash_disbursement'
          | 'reversal_issued';

        /**
         * Reversal issued by merchant details. Present if and only if `reason` is
         * `reversal_issued`.
         */
        reversal_issued: Represented.ReversalIssued | null;
      }

      export namespace Represented {
        /**
         * Cardholder no longer disputes details. Present if and only if `reason` is
         * `cardholder_no_longer_disputes`.
         */
        export interface CardholderNoLongerDisputes {
          /**
           * Explanation for why the merchant believes the cardholder no longer disputes the
           * transaction.
           */
          explanation: string | null;
        }

        /**
         * Credit or reversal processed details. Present if and only if `reason` is
         * `credit_or_reversal_processed`.
         */
        export interface CreditOrReversalProcessed {
          /**
           * The amount of the credit or reversal in the minor unit of its currency. For
           * dollars, for example, this is cents.
           */
          amount: number;

          /**
           * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the credit or
           * reversal's currency.
           */
          currency: string;

          /**
           * Explanation for why the merchant believes the credit or reversal was processed.
           */
          explanation: string | null;

          /**
           * The date the credit or reversal was processed.
           */
          processed_at: string;
        }

        /**
         * Invalid dispute details. Present if and only if `reason` is `invalid_dispute`.
         */
        export interface InvalidDispute {
          /**
           * Explanation for why the dispute is considered invalid by the merchant.
           */
          explanation: string | null;

          /**
           * The reason a merchant considers the dispute invalid.
           *
           * - `automatic_teller_machine_transaction_proof_provided` - Automatic Teller
           *   Machine (ATM) transaction proof provided.
           * - `balance_of_partial_prepayment_not_paid` - Balance of partial prepayment not
           *   paid.
           * - `cardholder_canceled_before_expected_merchandise_receipt_date` - Cardholder
           *   canceled before expected receipt date of the merchandise.
           * - `cardholder_canceled_before_expected_services_receipt_date` - Cardholder
           *   canceled before expected receipt date of the services.
           * - `cardholder_canceled_different_date` - Cardholder canceled on a different date
           *   than claimed.
           * - `cardholder_did_not_cancel_according_to_policy` - Cardholder received did not
           *   cancel according to policy.
           * - `cardholder_received_merchandise` - Cardholder received the merchandise.
           * - `country_code_correct` - Country code is correct.
           * - `credit_processed_correctly` - Credit was processed correctly.
           * - `currency_correct` - Currency is correct.
           * - `dispute_is_for_quality` - Dispute is for quality.
           * - `dispute_is_for_visa_cash_back_transaction_portion` - Dispute is for Visa Cash
           *   Back transaction portion.
           * - `disputed_amount_is_value_added_tax` - Disputed amount is Value Added Tax
           *   (VAT).
           * - `disputed_amount_is_value_added_tax_no_credit_receipt_provided` - Disputed
           *   amount is Value Added Tax (VAT) but no credit receipt was provided by the
           *   cardholder.
           * - `limited_return_or_cancellation_policy_properly_disclosed` - Limited return or
           *   cancellation policy was properly disclosed.
           * - `merchandise_held_at_cardholder_customs_agency` - Merchandise held at
           *   cardholder customs agency.
           * - `merchandise_matches_description` - Merchandise matches the merchant's
           *   description.
           * - `merchandise_not_counterfeit` - Merchandise is not counterfeit.
           * - `merchandise_not_damaged` - Merchandise is not damaged.
           * - `merchandise_not_defective` - Merchandise is not defective.
           * - `merchandise_provided_prior_to_cancellation_date` - Merchandise was provided
           *   prior to the cancellation date.
           * - `merchandise_quality_matches_description` - Merchandise quality matches the
           *   merchant's description.
           * - `merchandise_return_not_attempted` - Merchandise was not attempted returned to
           *   the merchant.
           * - `merchant_not_notified_of_closed_account` - Merchant was not notified of the
           *   closed account.
           * - `name_on_flight_manifest_matches_purchase` - Name on manifest of departed
           *   flight matches name on purchased itinerary.
           * - `no_credit_receipt_provided` - No credit receipt was provided by the
           *   cardholder.
           * - `other` - Other.
           * - `processing_error_incorrect` - The claimed processing error did not occur.
           * - `returned_mechandise_held_at_customs_agency_outside_merchant_country` -
           *   Returned merchandise held at customs agency outside the merchant's country.
           * - `services_match_description` - Services match the merchant's description.
           * - `services_provided_prior_to_cancellation_date` - Services were provided prior
           *   to the cancellation date.
           * - `services_used_after_cancellation_date` - Services were used after the
           *   cancellation date and prior to the dispute submission date.
           * - `terms_of_service_not_misrepresented` - Terms of service were not
           *   misrepresented.
           * - `transaction_code_correct` - Transaction code is correct.
           */
          reason:
            | 'automatic_teller_machine_transaction_proof_provided'
            | 'balance_of_partial_prepayment_not_paid'
            | 'cardholder_canceled_before_expected_merchandise_receipt_date'
            | 'cardholder_canceled_before_expected_services_receipt_date'
            | 'cardholder_canceled_different_date'
            | 'cardholder_did_not_cancel_according_to_policy'
            | 'cardholder_received_merchandise'
            | 'country_code_correct'
            | 'credit_processed_correctly'
            | 'currency_correct'
            | 'dispute_is_for_quality'
            | 'dispute_is_for_visa_cash_back_transaction_portion'
            | 'disputed_amount_is_value_added_tax'
            | 'disputed_amount_is_value_added_tax_no_credit_receipt_provided'
            | 'limited_return_or_cancellation_policy_properly_disclosed'
            | 'merchandise_held_at_cardholder_customs_agency'
            | 'merchandise_matches_description'
            | 'merchandise_not_counterfeit'
            | 'merchandise_not_damaged'
            | 'merchandise_not_defective'
            | 'merchandise_provided_prior_to_cancellation_date'
            | 'merchandise_quality_matches_description'
            | 'merchandise_return_not_attempted'
            | 'merchant_not_notified_of_closed_account'
            | 'name_on_flight_manifest_matches_purchase'
            | 'no_credit_receipt_provided'
            | 'other'
            | 'processing_error_incorrect'
            | 'returned_mechandise_held_at_customs_agency_outside_merchant_country'
            | 'services_match_description'
            | 'services_provided_prior_to_cancellation_date'
            | 'services_used_after_cancellation_date'
            | 'terms_of_service_not_misrepresented'
            | 'transaction_code_correct';
        }

        /**
         * Non-fiat currency or non-fungible token as described details. Present if and
         * only if `reason` is `non_fiat_currency_or_non_fungible_token_as_described`.
         */
        export interface NonFiatCurrencyOrNonFungibleTokenAsDescribed {}

        /**
         * Non-fiat currency or non-fungible token received details. Present if and only if
         * `reason` is `non_fiat_currency_or_non_fungible_token_received`.
         */
        export interface NonFiatCurrencyOrNonFungibleTokenReceived {
          /**
           * Blockchain transaction hash.
           */
          blockchain_transaction_hash: string;

          /**
           * Destination wallet address.
           */
          destination_wallet_address: string;

          /**
           * Prior approved transactions.
           */
          prior_approved_transactions: string | null;
        }

        /**
         * Proof of cash disbursement details. Present if and only if `reason` is
         * `proof_of_cash_disbursement`.
         */
        export interface ProofOfCashDisbursement {
          /**
           * Explanation for why the merchant believes the evidence provides proof of cash
           * disbursement.
           */
          explanation: string | null;
        }

        /**
         * Reversal issued by merchant details. Present if and only if `reason` is
         * `reversal_issued`.
         */
        export interface ReversalIssued {
          /**
           * Explanation of the reversal issued by the merchant.
           */
          explanation: string | null;
        }
      }

      /**
       * A Card Dispute Re-presentment Timed Out Visa Network Event object. This field
       * will be present in the JSON response if and only if `category` is equal to
       * `representment_timed_out`. Contains the details specific to a re-presentment
       * time-out Visa Card Dispute Network Event, which represents that the user did not
       * respond to the re-presentment by the merchant within the time limit.
       */
      export interface RepresentmentTimedOut {}

      /**
       * A Card Dispute User Pre-Arbitration Accepted Visa Network Event object. This
       * field will be present in the JSON response if and only if `category` is equal to
       * `user_prearbitration_accepted`. Contains the details specific to a user
       * prearbitration accepted Visa Card Dispute Network Event, which represents that
       * the merchant has accepted the user's prearbitration request in the user's favor.
       */
      export interface UserPrearbitrationAccepted {}

      /**
       * A Card Dispute User Pre-Arbitration Declined Visa Network Event object. This
       * field will be present in the JSON response if and only if `category` is equal to
       * `user_prearbitration_declined`. Contains the details specific to a user
       * prearbitration declined Visa Card Dispute Network Event, which represents that
       * the merchant has declined the user's prearbitration request.
       */
      export interface UserPrearbitrationDeclined {}

      /**
       * A Card Dispute User Pre-Arbitration Submitted Visa Network Event object. This
       * field will be present in the JSON response if and only if `category` is equal to
       * `user_prearbitration_submitted`. Contains the details specific to a user
       * prearbitration submitted Visa Card Dispute Network Event, which represents that
       * the user's request for prearbitration has been submitted to the network.
       */
      export interface UserPrearbitrationSubmitted {}

      /**
       * A Card Dispute User Pre-Arbitration Timed Out Visa Network Event object. This
       * field will be present in the JSON response if and only if `category` is equal to
       * `user_prearbitration_timed_out`. Contains the details specific to a user
       * prearbitration timed out Visa Card Dispute Network Event, which represents that
       * the merchant has timed out responding to the user's prearbitration request.
       */
      export interface UserPrearbitrationTimedOut {}

      /**
       * A Card Dispute User Withdrawal Submitted Visa Network Event object. This field
       * will be present in the JSON response if and only if `category` is equal to
       * `user_withdrawal_submitted`. Contains the details specific to a user withdrawal
       * submitted Visa Card Dispute Network Event, which represents that the user's
       * request to withdraw the dispute has been submitted to the network.
       */
      export interface UserWithdrawalSubmitted {}
    }

    export interface UserSubmission {
      /**
       * The date and time at which the Visa Card Dispute User Submission was reviewed
       * and accepted.
       */
      accepted_at: string | null;

      /**
       * The amount of the dispute if it is different from the amount of a prior user
       * submission or the disputed transaction.
       */
      amount: number | null;

      /**
       * The files attached to the Visa Card Dispute User Submission.
       */
      attachment_files: Array<UserSubmission.AttachmentFile>;

      /**
       * The category of the user submission. We may add additional possible values for
       * this enum over time; your application should be able to handle such additions
       * gracefully.
       *
       * - `chargeback` - Visa Card Dispute Chargeback User Submission Chargeback
       *   Details: details will be under the `chargeback` object.
       * - `merchant_prearbitration_decline` - Visa Card Dispute Merchant Pre-Arbitration
       *   Decline User Submission: details will be under the
       *   `merchant_prearbitration_decline` object.
       * - `user_prearbitration` - Visa Card Dispute User-Initiated Pre-Arbitration User
       *   Submission: details will be under the `user_prearbitration` object.
       */
      category: 'chargeback' | 'merchant_prearbitration_decline' | 'user_prearbitration';

      /**
       * A Visa Card Dispute Chargeback User Submission Chargeback Details object. This
       * field will be present in the JSON response if and only if `category` is equal to
       * `chargeback`. Contains the details specific to a Visa chargeback User Submission
       * for a Card Dispute.
       */
      chargeback: UserSubmission.Chargeback | null;

      /**
       * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
       * the Visa Card Dispute User Submission was created.
       */
      created_at: string;

      /**
       * The free-form explanation provided to Increase to provide more context for the
       * user submission. This field is not sent directly to the card networks.
       */
      explanation: string | null;

      /**
       * The date and time at which Increase requested further information from the user
       * for the Visa Card Dispute.
       */
      further_information_requested_at: string | null;

      /**
       * The reason for Increase requesting further information from the user for the
       * Visa Card Dispute.
       */
      further_information_requested_reason: string | null;

      /**
       * A Visa Card Dispute Merchant Pre-Arbitration Decline User Submission object.
       * This field will be present in the JSON response if and only if `category` is
       * equal to `merchant_prearbitration_decline`. Contains the details specific to a
       * merchant prearbitration decline Visa Card Dispute User Submission.
       */
      merchant_prearbitration_decline: UserSubmission.MerchantPrearbitrationDecline | null;

      /**
       * The status of the Visa Card Dispute User Submission.
       *
       * - `abandoned` - The User Submission was abandoned.
       * - `accepted` - The User Submission was accepted.
       * - `further_information_requested` - Further information is requested, please
       *   resubmit with the requested information.
       * - `pending_reviewing` - The User Submission is pending review.
       */
      status: 'abandoned' | 'accepted' | 'further_information_requested' | 'pending_reviewing';

      /**
       * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
       * the Visa Card Dispute User Submission was updated.
       */
      updated_at: string;

      /**
       * A Visa Card Dispute User-Initiated Pre-Arbitration User Submission object. This
       * field will be present in the JSON response if and only if `category` is equal to
       * `user_prearbitration`. Contains the details specific to a user-initiated
       * pre-arbitration Visa Card Dispute User Submission.
       */
      user_prearbitration: UserSubmission.UserPrearbitration | null;
    }

    export namespace UserSubmission {
      export interface AttachmentFile {
        /**
         * The ID of the file attached to the Card Dispute.
         */
        file_id: string;
      }

      /**
       * A Visa Card Dispute Chargeback User Submission Chargeback Details object. This
       * field will be present in the JSON response if and only if `category` is equal to
       * `chargeback`. Contains the details specific to a Visa chargeback User Submission
       * for a Card Dispute.
       */
      export interface Chargeback {
        /**
         * Authorization. Present if and only if `category` is `authorization`.
         */
        authorization: Chargeback.Authorization | null;

        /**
         * Category.
         *
         * - `authorization` - Authorization.
         * - `consumer_canceled_merchandise` - Consumer: canceled merchandise.
         * - `consumer_canceled_recurring_transaction` - Consumer: canceled recurring
         *   transaction.
         * - `consumer_canceled_services` - Consumer: canceled services.
         * - `consumer_counterfeit_merchandise` - Consumer: counterfeit merchandise.
         * - `consumer_credit_not_processed` - Consumer: credit not processed.
         * - `consumer_damaged_or_defective_merchandise` - Consumer: damaged or defective
         *   merchandise.
         * - `consumer_merchandise_misrepresentation` - Consumer: merchandise
         *   misrepresentation.
         * - `consumer_merchandise_not_as_described` - Consumer: merchandise not as
         *   described.
         * - `consumer_merchandise_not_received` - Consumer: merchandise not received.
         * - `consumer_non_receipt_of_cash` - Consumer: non-receipt of cash.
         * - `consumer_original_credit_transaction_not_accepted` - Consumer: Original
         *   Credit Transaction (OCT) not accepted.
         * - `consumer_quality_merchandise` - Consumer: merchandise quality issue.
         * - `consumer_quality_services` - Consumer: services quality issue.
         * - `consumer_services_misrepresentation` - Consumer: services misrepresentation.
         * - `consumer_services_not_as_described` - Consumer: services not as described.
         * - `consumer_services_not_received` - Consumer: services not received.
         * - `fraud` - Fraud.
         * - `processing_error` - Processing error.
         */
        category:
          | 'authorization'
          | 'consumer_canceled_merchandise'
          | 'consumer_canceled_recurring_transaction'
          | 'consumer_canceled_services'
          | 'consumer_counterfeit_merchandise'
          | 'consumer_credit_not_processed'
          | 'consumer_damaged_or_defective_merchandise'
          | 'consumer_merchandise_misrepresentation'
          | 'consumer_merchandise_not_as_described'
          | 'consumer_merchandise_not_received'
          | 'consumer_non_receipt_of_cash'
          | 'consumer_original_credit_transaction_not_accepted'
          | 'consumer_quality_merchandise'
          | 'consumer_quality_services'
          | 'consumer_services_misrepresentation'
          | 'consumer_services_not_as_described'
          | 'consumer_services_not_received'
          | 'fraud'
          | 'processing_error';

        /**
         * Canceled merchandise. Present if and only if `category` is
         * `consumer_canceled_merchandise`.
         */
        consumer_canceled_merchandise: Chargeback.ConsumerCanceledMerchandise | null;

        /**
         * Canceled recurring transaction. Present if and only if `category` is
         * `consumer_canceled_recurring_transaction`.
         */
        consumer_canceled_recurring_transaction: Chargeback.ConsumerCanceledRecurringTransaction | null;

        /**
         * Canceled services. Present if and only if `category` is
         * `consumer_canceled_services`.
         */
        consumer_canceled_services: Chargeback.ConsumerCanceledServices | null;

        /**
         * Counterfeit merchandise. Present if and only if `category` is
         * `consumer_counterfeit_merchandise`.
         */
        consumer_counterfeit_merchandise: Chargeback.ConsumerCounterfeitMerchandise | null;

        /**
         * Credit not processed. Present if and only if `category` is
         * `consumer_credit_not_processed`.
         */
        consumer_credit_not_processed: Chargeback.ConsumerCreditNotProcessed | null;

        /**
         * Damaged or defective merchandise. Present if and only if `category` is
         * `consumer_damaged_or_defective_merchandise`.
         */
        consumer_damaged_or_defective_merchandise: Chargeback.ConsumerDamagedOrDefectiveMerchandise | null;

        /**
         * Merchandise misrepresentation. Present if and only if `category` is
         * `consumer_merchandise_misrepresentation`.
         */
        consumer_merchandise_misrepresentation: Chargeback.ConsumerMerchandiseMisrepresentation | null;

        /**
         * Merchandise not as described. Present if and only if `category` is
         * `consumer_merchandise_not_as_described`.
         */
        consumer_merchandise_not_as_described: Chargeback.ConsumerMerchandiseNotAsDescribed | null;

        /**
         * Merchandise not received. Present if and only if `category` is
         * `consumer_merchandise_not_received`.
         */
        consumer_merchandise_not_received: Chargeback.ConsumerMerchandiseNotReceived | null;

        /**
         * Non-receipt of cash. Present if and only if `category` is
         * `consumer_non_receipt_of_cash`.
         */
        consumer_non_receipt_of_cash: Chargeback.ConsumerNonReceiptOfCash | null;

        /**
         * Original Credit Transaction (OCT) not accepted. Present if and only if
         * `category` is `consumer_original_credit_transaction_not_accepted`.
         */
        consumer_original_credit_transaction_not_accepted: Chargeback.ConsumerOriginalCreditTransactionNotAccepted | null;

        /**
         * Merchandise quality issue. Present if and only if `category` is
         * `consumer_quality_merchandise`.
         */
        consumer_quality_merchandise: Chargeback.ConsumerQualityMerchandise | null;

        /**
         * Services quality issue. Present if and only if `category` is
         * `consumer_quality_services`.
         */
        consumer_quality_services: Chargeback.ConsumerQualityServices | null;

        /**
         * Services misrepresentation. Present if and only if `category` is
         * `consumer_services_misrepresentation`.
         */
        consumer_services_misrepresentation: Chargeback.ConsumerServicesMisrepresentation | null;

        /**
         * Services not as described. Present if and only if `category` is
         * `consumer_services_not_as_described`.
         */
        consumer_services_not_as_described: Chargeback.ConsumerServicesNotAsDescribed | null;

        /**
         * Services not received. Present if and only if `category` is
         * `consumer_services_not_received`.
         */
        consumer_services_not_received: Chargeback.ConsumerServicesNotReceived | null;

        /**
         * Fraud. Present if and only if `category` is `fraud`.
         */
        fraud: Chargeback.Fraud | null;

        /**
         * Processing error. Present if and only if `category` is `processing_error`.
         */
        processing_error: Chargeback.ProcessingError | null;
      }

      export namespace Chargeback {
        /**
         * Authorization. Present if and only if `category` is `authorization`.
         */
        export interface Authorization {
          /**
           * Account status.
           *
           * - `account_closed` - Account closed.
           * - `credit_problem` - Credit problem.
           * - `fraud` - Fraud.
           */
          account_status: 'account_closed' | 'credit_problem' | 'fraud';
        }

        /**
         * Canceled merchandise. Present if and only if `category` is
         * `consumer_canceled_merchandise`.
         */
        export interface ConsumerCanceledMerchandise {
          /**
           * Cardholder cancellation.
           */
          cardholder_cancellation: ConsumerCanceledMerchandise.CardholderCancellation | null;

          /**
           * Merchant resolution attempted.
           *
           * - `attempted` - Attempted.
           * - `prohibited_by_local_law` - Prohibited by local law.
           */
          merchant_resolution_attempted: 'attempted' | 'prohibited_by_local_law';

          /**
           * Not returned. Present if and only if `return_outcome` is `not_returned`.
           */
          not_returned: ConsumerCanceledMerchandise.NotReturned | null;

          /**
           * Purchase explanation.
           */
          purchase_explanation: string;

          /**
           * Received or expected at.
           */
          received_or_expected_at: string;

          /**
           * Return attempted. Present if and only if `return_outcome` is `return_attempted`.
           */
          return_attempted: ConsumerCanceledMerchandise.ReturnAttempted | null;

          /**
           * Return outcome.
           *
           * - `not_returned` - Not returned.
           * - `returned` - Returned.
           * - `return_attempted` - Return attempted.
           */
          return_outcome: 'not_returned' | 'returned' | 'return_attempted';

          /**
           * Returned. Present if and only if `return_outcome` is `returned`.
           */
          returned: ConsumerCanceledMerchandise.Returned | null;
        }

        export namespace ConsumerCanceledMerchandise {
          /**
           * Cardholder cancellation.
           */
          export interface CardholderCancellation {
            /**
             * Canceled at.
             */
            canceled_at: string;

            /**
             * Canceled prior to ship date.
             *
             * - `canceled_prior_to_ship_date` - Canceled prior to ship date.
             * - `not_canceled_prior_to_ship_date` - Not canceled prior to ship date.
             */
            canceled_prior_to_ship_date: 'canceled_prior_to_ship_date' | 'not_canceled_prior_to_ship_date';

            /**
             * Cancellation policy provided.
             *
             * - `not_provided` - Not provided.
             * - `provided` - Provided.
             */
            cancellation_policy_provided: 'not_provided' | 'provided';

            /**
             * Reason.
             */
            reason: string;
          }

          /**
           * Not returned. Present if and only if `return_outcome` is `not_returned`.
           */
          export interface NotReturned {}

          /**
           * Return attempted. Present if and only if `return_outcome` is `return_attempted`.
           */
          export interface ReturnAttempted {
            /**
             * Attempt explanation.
             */
            attempt_explanation: string;

            /**
             * Attempt reason.
             *
             * - `merchant_not_responding` - Merchant not responding.
             * - `no_return_authorization_provided` - No return authorization provided.
             * - `no_return_instructions` - No return instructions.
             * - `requested_not_to_return` - Requested not to return.
             * - `return_not_accepted` - Return not accepted.
             */
            attempt_reason:
              | 'merchant_not_responding'
              | 'no_return_authorization_provided'
              | 'no_return_instructions'
              | 'requested_not_to_return'
              | 'return_not_accepted';

            /**
             * Attempted at.
             */
            attempted_at: string;

            /**
             * Merchandise disposition.
             */
            merchandise_disposition: string;
          }

          /**
           * Returned. Present if and only if `return_outcome` is `returned`.
           */
          export interface Returned {
            /**
             * Merchant received return at.
             */
            merchant_received_return_at: string | null;

            /**
             * Other explanation. Required if and only if the return method is `other`.
             */
            other_explanation: string | null;

            /**
             * Return method.
             *
             * - `dhl` - DHL.
             * - `face_to_face` - Face-to-face.
             * - `fedex` - FedEx.
             * - `other` - Other.
             * - `postal_service` - Postal service.
             * - `ups` - UPS.
             */
            return_method: 'dhl' | 'face_to_face' | 'fedex' | 'other' | 'postal_service' | 'ups';

            /**
             * Returned at.
             */
            returned_at: string;

            /**
             * Tracking number.
             */
            tracking_number: string | null;
          }
        }

        /**
         * Canceled recurring transaction. Present if and only if `category` is
         * `consumer_canceled_recurring_transaction`.
         */
        export interface ConsumerCanceledRecurringTransaction {
          /**
           * Cancellation target.
           *
           * - `account` - Account.
           * - `transaction` - Transaction.
           */
          cancellation_target: 'account' | 'transaction';

          /**
           * Merchant contact methods.
           */
          merchant_contact_methods: ConsumerCanceledRecurringTransaction.MerchantContactMethods;

          /**
           * Other form of payment explanation.
           */
          other_form_of_payment_explanation: string | null;

          /**
           * Transaction or account canceled at.
           */
          transaction_or_account_canceled_at: string;
        }

        export namespace ConsumerCanceledRecurringTransaction {
          /**
           * Merchant contact methods.
           */
          export interface MerchantContactMethods {
            /**
             * Application name.
             */
            application_name: string | null;

            /**
             * Call center phone number.
             */
            call_center_phone_number: string | null;

            /**
             * Email address.
             */
            email_address: string | null;

            /**
             * In person address.
             */
            in_person_address: string | null;

            /**
             * Mailing address.
             */
            mailing_address: string | null;

            /**
             * Text phone number.
             */
            text_phone_number: string | null;
          }
        }

        /**
         * Canceled services. Present if and only if `category` is
         * `consumer_canceled_services`.
         */
        export interface ConsumerCanceledServices {
          /**
           * Cardholder cancellation.
           */
          cardholder_cancellation: ConsumerCanceledServices.CardholderCancellation;

          /**
           * Contracted at.
           */
          contracted_at: string;

          /**
           * Guaranteed reservation explanation. Present if and only if `service_type` is
           * `guaranteed_reservation`.
           */
          guaranteed_reservation: ConsumerCanceledServices.GuaranteedReservation | null;

          /**
           * Merchant resolution attempted.
           *
           * - `attempted` - Attempted.
           * - `prohibited_by_local_law` - Prohibited by local law.
           */
          merchant_resolution_attempted: 'attempted' | 'prohibited_by_local_law';

          /**
           * Other service type explanation. Present if and only if `service_type` is
           * `other`.
           */
          other: ConsumerCanceledServices.Other | null;

          /**
           * Purchase explanation.
           */
          purchase_explanation: string;

          /**
           * Service type.
           *
           * - `guaranteed_reservation` - Guaranteed reservation.
           * - `other` - Other.
           * - `timeshare` - Timeshare.
           */
          service_type: 'guaranteed_reservation' | 'other' | 'timeshare';

          /**
           * Timeshare explanation. Present if and only if `service_type` is `timeshare`.
           */
          timeshare: ConsumerCanceledServices.Timeshare | null;
        }

        export namespace ConsumerCanceledServices {
          /**
           * Cardholder cancellation.
           */
          export interface CardholderCancellation {
            /**
             * Canceled at.
             */
            canceled_at: string;

            /**
             * Cancellation policy provided.
             *
             * - `not_provided` - Not provided.
             * - `provided` - Provided.
             */
            cancellation_policy_provided: 'not_provided' | 'provided';

            /**
             * Reason.
             */
            reason: string;
          }

          /**
           * Guaranteed reservation explanation. Present if and only if `service_type` is
           * `guaranteed_reservation`.
           */
          export interface GuaranteedReservation {
            /**
             * Explanation.
             *
             * - `cardholder_canceled_prior_to_service` - Cardholder canceled prior to service.
             * - `cardholder_cancellation_attempt_within_24_hours_of_confirmation` - Cardholder
             *   cancellation attempt within 24 hours of confirmation.
             * - `merchant_billed_no_show` - Merchant billed for no-show.
             */
            explanation:
              | 'cardholder_canceled_prior_to_service'
              | 'cardholder_cancellation_attempt_within_24_hours_of_confirmation'
              | 'merchant_billed_no_show';
          }

          /**
           * Other service type explanation. Present if and only if `service_type` is
           * `other`.
           */
          export interface Other {}

          /**
           * Timeshare explanation. Present if and only if `service_type` is `timeshare`.
           */
          export interface Timeshare {}
        }

        /**
         * Counterfeit merchandise. Present if and only if `category` is
         * `consumer_counterfeit_merchandise`.
         */
        export interface ConsumerCounterfeitMerchandise {
          /**
           * Counterfeit explanation.
           */
          counterfeit_explanation: string;

          /**
           * Disposition explanation.
           */
          disposition_explanation: string;

          /**
           * Order explanation.
           */
          order_explanation: string;

          /**
           * Received at.
           */
          received_at: string;
        }

        /**
         * Credit not processed. Present if and only if `category` is
         * `consumer_credit_not_processed`.
         */
        export interface ConsumerCreditNotProcessed {
          /**
           * Canceled or returned at.
           */
          canceled_or_returned_at: string | null;

          /**
           * Credit expected at.
           */
          credit_expected_at: string | null;
        }

        /**
         * Damaged or defective merchandise. Present if and only if `category` is
         * `consumer_damaged_or_defective_merchandise`.
         */
        export interface ConsumerDamagedOrDefectiveMerchandise {
          /**
           * Merchant resolution attempted.
           *
           * - `attempted` - Attempted.
           * - `prohibited_by_local_law` - Prohibited by local law.
           */
          merchant_resolution_attempted: 'attempted' | 'prohibited_by_local_law';

          /**
           * Not returned. Present if and only if `return_outcome` is `not_returned`.
           */
          not_returned: ConsumerDamagedOrDefectiveMerchandise.NotReturned | null;

          /**
           * Order and issue explanation.
           */
          order_and_issue_explanation: string;

          /**
           * Received at.
           */
          received_at: string;

          /**
           * Return attempted. Present if and only if `return_outcome` is `return_attempted`.
           */
          return_attempted: ConsumerDamagedOrDefectiveMerchandise.ReturnAttempted | null;

          /**
           * Return outcome.
           *
           * - `not_returned` - Not returned.
           * - `returned` - Returned.
           * - `return_attempted` - Return attempted.
           */
          return_outcome: 'not_returned' | 'returned' | 'return_attempted';

          /**
           * Returned. Present if and only if `return_outcome` is `returned`.
           */
          returned: ConsumerDamagedOrDefectiveMerchandise.Returned | null;
        }

        export namespace ConsumerDamagedOrDefectiveMerchandise {
          /**
           * Not returned. Present if and only if `return_outcome` is `not_returned`.
           */
          export interface NotReturned {}

          /**
           * Return attempted. Present if and only if `return_outcome` is `return_attempted`.
           */
          export interface ReturnAttempted {
            /**
             * Attempt explanation.
             */
            attempt_explanation: string;

            /**
             * Attempt reason.
             *
             * - `merchant_not_responding` - Merchant not responding.
             * - `no_return_authorization_provided` - No return authorization provided.
             * - `no_return_instructions` - No return instructions.
             * - `requested_not_to_return` - Requested not to return.
             * - `return_not_accepted` - Return not accepted.
             */
            attempt_reason:
              | 'merchant_not_responding'
              | 'no_return_authorization_provided'
              | 'no_return_instructions'
              | 'requested_not_to_return'
              | 'return_not_accepted';

            /**
             * Attempted at.
             */
            attempted_at: string;

            /**
             * Merchandise disposition.
             */
            merchandise_disposition: string;
          }

          /**
           * Returned. Present if and only if `return_outcome` is `returned`.
           */
          export interface Returned {
            /**
             * Merchant received return at.
             */
            merchant_received_return_at: string | null;

            /**
             * Other explanation. Required if and only if the return method is `other`.
             */
            other_explanation: string | null;

            /**
             * Return method.
             *
             * - `dhl` - DHL.
             * - `face_to_face` - Face-to-face.
             * - `fedex` - FedEx.
             * - `other` - Other.
             * - `postal_service` - Postal service.
             * - `ups` - UPS.
             */
            return_method: 'dhl' | 'face_to_face' | 'fedex' | 'other' | 'postal_service' | 'ups';

            /**
             * Returned at.
             */
            returned_at: string;

            /**
             * Tracking number.
             */
            tracking_number: string | null;
          }
        }

        /**
         * Merchandise misrepresentation. Present if and only if `category` is
         * `consumer_merchandise_misrepresentation`.
         */
        export interface ConsumerMerchandiseMisrepresentation {
          /**
           * Merchant resolution attempted.
           *
           * - `attempted` - Attempted.
           * - `prohibited_by_local_law` - Prohibited by local law.
           */
          merchant_resolution_attempted: 'attempted' | 'prohibited_by_local_law';

          /**
           * Misrepresentation explanation.
           */
          misrepresentation_explanation: string;

          /**
           * Not returned. Present if and only if `return_outcome` is `not_returned`.
           */
          not_returned: ConsumerMerchandiseMisrepresentation.NotReturned | null;

          /**
           * Purchase explanation.
           */
          purchase_explanation: string;

          /**
           * Received at.
           */
          received_at: string;

          /**
           * Return attempted. Present if and only if `return_outcome` is `return_attempted`.
           */
          return_attempted: ConsumerMerchandiseMisrepresentation.ReturnAttempted | null;

          /**
           * Return outcome.
           *
           * - `not_returned` - Not returned.
           * - `returned` - Returned.
           * - `return_attempted` - Return attempted.
           */
          return_outcome: 'not_returned' | 'returned' | 'return_attempted';

          /**
           * Returned. Present if and only if `return_outcome` is `returned`.
           */
          returned: ConsumerMerchandiseMisrepresentation.Returned | null;
        }

        export namespace ConsumerMerchandiseMisrepresentation {
          /**
           * Not returned. Present if and only if `return_outcome` is `not_returned`.
           */
          export interface NotReturned {}

          /**
           * Return attempted. Present if and only if `return_outcome` is `return_attempted`.
           */
          export interface ReturnAttempted {
            /**
             * Attempt explanation.
             */
            attempt_explanation: string;

            /**
             * Attempt reason.
             *
             * - `merchant_not_responding` - Merchant not responding.
             * - `no_return_authorization_provided` - No return authorization provided.
             * - `no_return_instructions` - No return instructions.
             * - `requested_not_to_return` - Requested not to return.
             * - `return_not_accepted` - Return not accepted.
             */
            attempt_reason:
              | 'merchant_not_responding'
              | 'no_return_authorization_provided'
              | 'no_return_instructions'
              | 'requested_not_to_return'
              | 'return_not_accepted';

            /**
             * Attempted at.
             */
            attempted_at: string;

            /**
             * Merchandise disposition.
             */
            merchandise_disposition: string;
          }

          /**
           * Returned. Present if and only if `return_outcome` is `returned`.
           */
          export interface Returned {
            /**
             * Merchant received return at.
             */
            merchant_received_return_at: string | null;

            /**
             * Other explanation. Required if and only if the return method is `other`.
             */
            other_explanation: string | null;

            /**
             * Return method.
             *
             * - `dhl` - DHL.
             * - `face_to_face` - Face-to-face.
             * - `fedex` - FedEx.
             * - `other` - Other.
             * - `postal_service` - Postal service.
             * - `ups` - UPS.
             */
            return_method: 'dhl' | 'face_to_face' | 'fedex' | 'other' | 'postal_service' | 'ups';

            /**
             * Returned at.
             */
            returned_at: string;

            /**
             * Tracking number.
             */
            tracking_number: string | null;
          }
        }

        /**
         * Merchandise not as described. Present if and only if `category` is
         * `consumer_merchandise_not_as_described`.
         */
        export interface ConsumerMerchandiseNotAsDescribed {
          /**
           * Merchant resolution attempted.
           *
           * - `attempted` - Attempted.
           * - `prohibited_by_local_law` - Prohibited by local law.
           */
          merchant_resolution_attempted: 'attempted' | 'prohibited_by_local_law';

          /**
           * Received at.
           */
          received_at: string;

          /**
           * Return attempted. Present if and only if `return_outcome` is `return_attempted`.
           */
          return_attempted: ConsumerMerchandiseNotAsDescribed.ReturnAttempted | null;

          /**
           * Return outcome.
           *
           * - `returned` - Returned.
           * - `return_attempted` - Return attempted.
           */
          return_outcome: 'returned' | 'return_attempted';

          /**
           * Returned. Present if and only if `return_outcome` is `returned`.
           */
          returned: ConsumerMerchandiseNotAsDescribed.Returned | null;
        }

        export namespace ConsumerMerchandiseNotAsDescribed {
          /**
           * Return attempted. Present if and only if `return_outcome` is `return_attempted`.
           */
          export interface ReturnAttempted {
            /**
             * Attempt explanation.
             */
            attempt_explanation: string;

            /**
             * Attempt reason.
             *
             * - `merchant_not_responding` - Merchant not responding.
             * - `no_return_authorization_provided` - No return authorization provided.
             * - `no_return_instructions` - No return instructions.
             * - `requested_not_to_return` - Requested not to return.
             * - `return_not_accepted` - Return not accepted.
             */
            attempt_reason:
              | 'merchant_not_responding'
              | 'no_return_authorization_provided'
              | 'no_return_instructions'
              | 'requested_not_to_return'
              | 'return_not_accepted';

            /**
             * Attempted at.
             */
            attempted_at: string;

            /**
             * Merchandise disposition.
             */
            merchandise_disposition: string;
          }

          /**
           * Returned. Present if and only if `return_outcome` is `returned`.
           */
          export interface Returned {
            /**
             * Merchant received return at.
             */
            merchant_received_return_at: string | null;

            /**
             * Other explanation. Required if and only if the return method is `other`.
             */
            other_explanation: string | null;

            /**
             * Return method.
             *
             * - `dhl` - DHL.
             * - `face_to_face` - Face-to-face.
             * - `fedex` - FedEx.
             * - `other` - Other.
             * - `postal_service` - Postal service.
             * - `ups` - UPS.
             */
            return_method: 'dhl' | 'face_to_face' | 'fedex' | 'other' | 'postal_service' | 'ups';

            /**
             * Returned at.
             */
            returned_at: string;

            /**
             * Tracking number.
             */
            tracking_number: string | null;
          }
        }

        /**
         * Merchandise not received. Present if and only if `category` is
         * `consumer_merchandise_not_received`.
         */
        export interface ConsumerMerchandiseNotReceived {
          /**
           * Cancellation outcome.
           *
           * - `cardholder_cancellation_prior_to_expected_receipt` - Cardholder cancellation
           *   prior to expected receipt.
           * - `merchant_cancellation` - Merchant cancellation.
           * - `no_cancellation` - No cancellation.
           */
          cancellation_outcome:
            | 'cardholder_cancellation_prior_to_expected_receipt'
            | 'merchant_cancellation'
            | 'no_cancellation';

          /**
           * Cardholder cancellation prior to expected receipt. Present if and only if
           * `cancellation_outcome` is `cardholder_cancellation_prior_to_expected_receipt`.
           */
          cardholder_cancellation_prior_to_expected_receipt: ConsumerMerchandiseNotReceived.CardholderCancellationPriorToExpectedReceipt | null;

          /**
           * Delayed. Present if and only if `delivery_issue` is `delayed`.
           */
          delayed: ConsumerMerchandiseNotReceived.Delayed | null;

          /**
           * Delivered to wrong location. Present if and only if `delivery_issue` is
           * `delivered_to_wrong_location`.
           */
          delivered_to_wrong_location: ConsumerMerchandiseNotReceived.DeliveredToWrongLocation | null;

          /**
           * Delivery issue.
           *
           * - `delayed` - Delayed.
           * - `delivered_to_wrong_location` - Delivered to wrong location.
           */
          delivery_issue: 'delayed' | 'delivered_to_wrong_location';

          /**
           * Last expected receipt at.
           */
          last_expected_receipt_at: string;

          /**
           * Merchant cancellation. Present if and only if `cancellation_outcome` is
           * `merchant_cancellation`.
           */
          merchant_cancellation: ConsumerMerchandiseNotReceived.MerchantCancellation | null;

          /**
           * Merchant resolution attempted.
           *
           * - `attempted` - Attempted.
           * - `prohibited_by_local_law` - Prohibited by local law.
           */
          merchant_resolution_attempted: 'attempted' | 'prohibited_by_local_law';

          /**
           * No cancellation. Present if and only if `cancellation_outcome` is
           * `no_cancellation`.
           */
          no_cancellation: ConsumerMerchandiseNotReceived.NoCancellation | null;

          /**
           * Purchase information and explanation.
           */
          purchase_info_and_explanation: string;
        }

        export namespace ConsumerMerchandiseNotReceived {
          /**
           * Cardholder cancellation prior to expected receipt. Present if and only if
           * `cancellation_outcome` is `cardholder_cancellation_prior_to_expected_receipt`.
           */
          export interface CardholderCancellationPriorToExpectedReceipt {
            /**
             * Canceled at.
             */
            canceled_at: string;

            /**
             * Reason.
             */
            reason: string | null;
          }

          /**
           * Delayed. Present if and only if `delivery_issue` is `delayed`.
           */
          export interface Delayed {
            /**
             * Explanation.
             */
            explanation: string;

            /**
             * Not returned. Present if and only if `return_outcome` is `not_returned`.
             */
            not_returned: Delayed.NotReturned | null;

            /**
             * Return attempted. Present if and only if `return_outcome` is `return_attempted`.
             */
            return_attempted: Delayed.ReturnAttempted | null;

            /**
             * Return outcome.
             *
             * - `not_returned` - Not returned.
             * - `returned` - Returned.
             * - `return_attempted` - Return attempted.
             */
            return_outcome: 'not_returned' | 'returned' | 'return_attempted';

            /**
             * Returned. Present if and only if `return_outcome` is `returned`.
             */
            returned: Delayed.Returned | null;
          }

          export namespace Delayed {
            /**
             * Not returned. Present if and only if `return_outcome` is `not_returned`.
             */
            export interface NotReturned {}

            /**
             * Return attempted. Present if and only if `return_outcome` is `return_attempted`.
             */
            export interface ReturnAttempted {
              /**
               * Attempted at.
               */
              attempted_at: string;
            }

            /**
             * Returned. Present if and only if `return_outcome` is `returned`.
             */
            export interface Returned {
              /**
               * Merchant received return at.
               */
              merchant_received_return_at: string;

              /**
               * Returned at.
               */
              returned_at: string;
            }
          }

          /**
           * Delivered to wrong location. Present if and only if `delivery_issue` is
           * `delivered_to_wrong_location`.
           */
          export interface DeliveredToWrongLocation {
            /**
             * Agreed location.
             */
            agreed_location: string;
          }

          /**
           * Merchant cancellation. Present if and only if `cancellation_outcome` is
           * `merchant_cancellation`.
           */
          export interface MerchantCancellation {
            /**
             * Canceled at.
             */
            canceled_at: string;
          }

          /**
           * No cancellation. Present if and only if `cancellation_outcome` is
           * `no_cancellation`.
           */
          export interface NoCancellation {}
        }

        /**
         * Non-receipt of cash. Present if and only if `category` is
         * `consumer_non_receipt_of_cash`.
         */
        export interface ConsumerNonReceiptOfCash {}

        /**
         * Original Credit Transaction (OCT) not accepted. Present if and only if
         * `category` is `consumer_original_credit_transaction_not_accepted`.
         */
        export interface ConsumerOriginalCreditTransactionNotAccepted {
          /**
           * Explanation.
           */
          explanation: string;

          /**
           * Reason.
           *
           * - `prohibited_by_local_laws_or_regulation` - Prohibited by local laws or
           *   regulation.
           * - `recipient_refused` - Recipient refused.
           */
          reason: 'prohibited_by_local_laws_or_regulation' | 'recipient_refused';
        }

        /**
         * Merchandise quality issue. Present if and only if `category` is
         * `consumer_quality_merchandise`.
         */
        export interface ConsumerQualityMerchandise {
          /**
           * Expected at.
           */
          expected_at: string;

          /**
           * Merchant resolution attempted.
           *
           * - `attempted` - Attempted.
           * - `prohibited_by_local_law` - Prohibited by local law.
           */
          merchant_resolution_attempted: 'attempted' | 'prohibited_by_local_law';

          /**
           * Not returned. Present if and only if `return_outcome` is `not_returned`.
           */
          not_returned: ConsumerQualityMerchandise.NotReturned | null;

          /**
           * Ongoing negotiations. Exclude if there is no evidence of ongoing negotiations.
           */
          ongoing_negotiations: ConsumerQualityMerchandise.OngoingNegotiations | null;

          /**
           * Purchase information and quality issue.
           */
          purchase_info_and_quality_issue: string;

          /**
           * Received at.
           */
          received_at: string;

          /**
           * Return attempted. Present if and only if `return_outcome` is `return_attempted`.
           */
          return_attempted: ConsumerQualityMerchandise.ReturnAttempted | null;

          /**
           * Return outcome.
           *
           * - `not_returned` - Not returned.
           * - `returned` - Returned.
           * - `return_attempted` - Return attempted.
           */
          return_outcome: 'not_returned' | 'returned' | 'return_attempted';

          /**
           * Returned. Present if and only if `return_outcome` is `returned`.
           */
          returned: ConsumerQualityMerchandise.Returned | null;
        }

        export namespace ConsumerQualityMerchandise {
          /**
           * Not returned. Present if and only if `return_outcome` is `not_returned`.
           */
          export interface NotReturned {}

          /**
           * Ongoing negotiations. Exclude if there is no evidence of ongoing negotiations.
           */
          export interface OngoingNegotiations {
            /**
             * Explanation of the previous ongoing negotiations between the cardholder and
             * merchant.
             */
            explanation: string;

            /**
             * Date the cardholder first notified the issuer of the dispute.
             */
            issuer_first_notified_at: string;

            /**
             * Started at.
             */
            started_at: string;
          }

          /**
           * Return attempted. Present if and only if `return_outcome` is `return_attempted`.
           */
          export interface ReturnAttempted {
            /**
             * Attempt explanation.
             */
            attempt_explanation: string;

            /**
             * Attempt reason.
             *
             * - `merchant_not_responding` - Merchant not responding.
             * - `no_return_authorization_provided` - No return authorization provided.
             * - `no_return_instructions` - No return instructions.
             * - `requested_not_to_return` - Requested not to return.
             * - `return_not_accepted` - Return not accepted.
             */
            attempt_reason:
              | 'merchant_not_responding'
              | 'no_return_authorization_provided'
              | 'no_return_instructions'
              | 'requested_not_to_return'
              | 'return_not_accepted';

            /**
             * Attempted at.
             */
            attempted_at: string;

            /**
             * Merchandise disposition.
             */
            merchandise_disposition: string;
          }

          /**
           * Returned. Present if and only if `return_outcome` is `returned`.
           */
          export interface Returned {
            /**
             * Merchant received return at.
             */
            merchant_received_return_at: string | null;

            /**
             * Other explanation. Required if and only if the return method is `other`.
             */
            other_explanation: string | null;

            /**
             * Return method.
             *
             * - `dhl` - DHL.
             * - `face_to_face` - Face-to-face.
             * - `fedex` - FedEx.
             * - `other` - Other.
             * - `postal_service` - Postal service.
             * - `ups` - UPS.
             */
            return_method: 'dhl' | 'face_to_face' | 'fedex' | 'other' | 'postal_service' | 'ups';

            /**
             * Returned at.
             */
            returned_at: string;

            /**
             * Tracking number.
             */
            tracking_number: string | null;
          }
        }

        /**
         * Services quality issue. Present if and only if `category` is
         * `consumer_quality_services`.
         */
        export interface ConsumerQualityServices {
          /**
           * Cardholder cancellation.
           */
          cardholder_cancellation: ConsumerQualityServices.CardholderCancellation;

          /**
           * Cardholder paid to have work redone.
           *
           * - `did_not_pay_to_have_work_redone` - Cardholder did not pay to have work
           *   redone.
           * - `paid_to_have_work_redone` - Cardholder paid to have work redone.
           */
          cardholder_paid_to_have_work_redone:
            | 'did_not_pay_to_have_work_redone'
            | 'paid_to_have_work_redone'
            | null;

          /**
           * Non-fiat currency or non-fungible token related and not matching description.
           *
           * - `not_related` - Not related.
           * - `related` - Related.
           */
          non_fiat_currency_or_non_fungible_token_related_and_not_matching_description:
            | 'not_related'
            | 'related';

          /**
           * Ongoing negotiations. Exclude if there is no evidence of ongoing negotiations.
           */
          ongoing_negotiations: ConsumerQualityServices.OngoingNegotiations | null;

          /**
           * Purchase information and quality issue.
           */
          purchase_info_and_quality_issue: string;

          /**
           * Whether the dispute is related to the quality of food from an eating place or
           * restaurant. Must be provided when Merchant Category Code (MCC) is 5812, 5813
           * or 5814.
           *
           * - `not_related` - Not related.
           * - `related` - Related.
           */
          restaurant_food_related: 'not_related' | 'related' | null;

          /**
           * Services received at.
           */
          services_received_at: string;
        }

        export namespace ConsumerQualityServices {
          /**
           * Cardholder cancellation.
           */
          export interface CardholderCancellation {
            /**
             * Accepted by merchant.
             *
             * - `accepted` - Accepted.
             * - `not_accepted` - Not accepted.
             */
            accepted_by_merchant: 'accepted' | 'not_accepted';

            /**
             * Canceled at.
             */
            canceled_at: string;

            /**
             * Reason.
             */
            reason: string;
          }

          /**
           * Ongoing negotiations. Exclude if there is no evidence of ongoing negotiations.
           */
          export interface OngoingNegotiations {
            /**
             * Explanation of the previous ongoing negotiations between the cardholder and
             * merchant.
             */
            explanation: string;

            /**
             * Date the cardholder first notified the issuer of the dispute.
             */
            issuer_first_notified_at: string;

            /**
             * Started at.
             */
            started_at: string;
          }
        }

        /**
         * Services misrepresentation. Present if and only if `category` is
         * `consumer_services_misrepresentation`.
         */
        export interface ConsumerServicesMisrepresentation {
          /**
           * Cardholder cancellation.
           */
          cardholder_cancellation: ConsumerServicesMisrepresentation.CardholderCancellation;

          /**
           * Merchant resolution attempted.
           *
           * - `attempted` - Attempted.
           * - `prohibited_by_local_law` - Prohibited by local law.
           */
          merchant_resolution_attempted: 'attempted' | 'prohibited_by_local_law';

          /**
           * Misrepresentation explanation.
           */
          misrepresentation_explanation: string;

          /**
           * Purchase explanation.
           */
          purchase_explanation: string;

          /**
           * Received at.
           */
          received_at: string;
        }

        export namespace ConsumerServicesMisrepresentation {
          /**
           * Cardholder cancellation.
           */
          export interface CardholderCancellation {
            /**
             * Accepted by merchant.
             *
             * - `accepted` - Accepted.
             * - `not_accepted` - Not accepted.
             */
            accepted_by_merchant: 'accepted' | 'not_accepted';

            /**
             * Canceled at.
             */
            canceled_at: string;

            /**
             * Reason.
             */
            reason: string;
          }
        }

        /**
         * Services not as described. Present if and only if `category` is
         * `consumer_services_not_as_described`.
         */
        export interface ConsumerServicesNotAsDescribed {
          /**
           * Cardholder cancellation.
           */
          cardholder_cancellation: ConsumerServicesNotAsDescribed.CardholderCancellation;

          /**
           * Merchant resolution attempted.
           *
           * - `attempted` - Attempted.
           * - `prohibited_by_local_law` - Prohibited by local law.
           */
          merchant_resolution_attempted: 'attempted' | 'prohibited_by_local_law';

          /**
           * Received at.
           */
          received_at: string;
        }

        export namespace ConsumerServicesNotAsDescribed {
          /**
           * Cardholder cancellation.
           */
          export interface CardholderCancellation {
            /**
             * Accepted by merchant.
             *
             * - `accepted` - Accepted.
             * - `not_accepted` - Not accepted.
             */
            accepted_by_merchant: 'accepted' | 'not_accepted';

            /**
             * Canceled at.
             */
            canceled_at: string;

            /**
             * Reason.
             */
            reason: string;
          }
        }

        /**
         * Services not received. Present if and only if `category` is
         * `consumer_services_not_received`.
         */
        export interface ConsumerServicesNotReceived {
          /**
           * Cancellation outcome.
           *
           * - `cardholder_cancellation_prior_to_expected_receipt` - Cardholder cancellation
           *   prior to expected receipt.
           * - `merchant_cancellation` - Merchant cancellation.
           * - `no_cancellation` - No cancellation.
           */
          cancellation_outcome:
            | 'cardholder_cancellation_prior_to_expected_receipt'
            | 'merchant_cancellation'
            | 'no_cancellation';

          /**
           * Cardholder cancellation prior to expected receipt. Present if and only if
           * `cancellation_outcome` is `cardholder_cancellation_prior_to_expected_receipt`.
           */
          cardholder_cancellation_prior_to_expected_receipt: ConsumerServicesNotReceived.CardholderCancellationPriorToExpectedReceipt | null;

          /**
           * Last expected receipt at.
           */
          last_expected_receipt_at: string;

          /**
           * Merchant cancellation. Present if and only if `cancellation_outcome` is
           * `merchant_cancellation`.
           */
          merchant_cancellation: ConsumerServicesNotReceived.MerchantCancellation | null;

          /**
           * Merchant resolution attempted.
           *
           * - `attempted` - Attempted.
           * - `prohibited_by_local_law` - Prohibited by local law.
           */
          merchant_resolution_attempted: 'attempted' | 'prohibited_by_local_law';

          /**
           * No cancellation. Present if and only if `cancellation_outcome` is
           * `no_cancellation`.
           */
          no_cancellation: ConsumerServicesNotReceived.NoCancellation | null;

          /**
           * Purchase information and explanation.
           */
          purchase_info_and_explanation: string;
        }

        export namespace ConsumerServicesNotReceived {
          /**
           * Cardholder cancellation prior to expected receipt. Present if and only if
           * `cancellation_outcome` is `cardholder_cancellation_prior_to_expected_receipt`.
           */
          export interface CardholderCancellationPriorToExpectedReceipt {
            /**
             * Canceled at.
             */
            canceled_at: string;

            /**
             * Reason.
             */
            reason: string | null;
          }

          /**
           * Merchant cancellation. Present if and only if `cancellation_outcome` is
           * `merchant_cancellation`.
           */
          export interface MerchantCancellation {
            /**
             * Canceled at.
             */
            canceled_at: string;
          }

          /**
           * No cancellation. Present if and only if `cancellation_outcome` is
           * `no_cancellation`.
           */
          export interface NoCancellation {}
        }

        /**
         * Fraud. Present if and only if `category` is `fraud`.
         */
        export interface Fraud {
          /**
           * Fraud type.
           *
           * - `account_or_credentials_takeover` - Account or credentials takeover.
           * - `card_not_received_as_issued` - Card not received as issued.
           * - `fraudulent_application` - Fraudulent application.
           * - `fraudulent_use_of_account_number` - Fraudulent use of account number.
           * - `incorrect_processing` - Incorrect processing.
           * - `issuer_reported_counterfeit` - Issuer reported counterfeit.
           * - `lost` - Lost.
           * - `manipulation_of_account_holder` - Manipulation of account holder.
           * - `merchant_misrepresentation` - Merchant misrepresentation.
           * - `miscellaneous` - Miscellaneous.
           * - `stolen` - Stolen.
           */
          fraud_type:
            | 'account_or_credentials_takeover'
            | 'card_not_received_as_issued'
            | 'fraudulent_application'
            | 'fraudulent_use_of_account_number'
            | 'incorrect_processing'
            | 'issuer_reported_counterfeit'
            | 'lost'
            | 'manipulation_of_account_holder'
            | 'merchant_misrepresentation'
            | 'miscellaneous'
            | 'stolen';
        }

        /**
         * Processing error. Present if and only if `category` is `processing_error`.
         */
        export interface ProcessingError {
          /**
           * Duplicate transaction. Present if and only if `error_reason` is
           * `duplicate_transaction`.
           */
          duplicate_transaction: ProcessingError.DuplicateTransaction | null;

          /**
           * Error reason.
           *
           * - `duplicate_transaction` - Duplicate transaction.
           * - `incorrect_amount` - Incorrect amount.
           * - `paid_by_other_means` - Paid by other means.
           */
          error_reason: 'duplicate_transaction' | 'incorrect_amount' | 'paid_by_other_means';

          /**
           * Incorrect amount. Present if and only if `error_reason` is `incorrect_amount`.
           */
          incorrect_amount: ProcessingError.IncorrectAmount | null;

          /**
           * Merchant resolution attempted.
           *
           * - `attempted` - Attempted.
           * - `prohibited_by_local_law` - Prohibited by local law.
           */
          merchant_resolution_attempted: 'attempted' | 'prohibited_by_local_law';

          /**
           * Paid by other means. Present if and only if `error_reason` is
           * `paid_by_other_means`.
           */
          paid_by_other_means: ProcessingError.PaidByOtherMeans | null;
        }

        export namespace ProcessingError {
          /**
           * Duplicate transaction. Present if and only if `error_reason` is
           * `duplicate_transaction`.
           */
          export interface DuplicateTransaction {
            /**
             * Other transaction ID.
             */
            other_transaction_id: string;
          }

          /**
           * Incorrect amount. Present if and only if `error_reason` is `incorrect_amount`.
           */
          export interface IncorrectAmount {
            /**
             * Expected amount.
             */
            expected_amount: number;
          }

          /**
           * Paid by other means. Present if and only if `error_reason` is
           * `paid_by_other_means`.
           */
          export interface PaidByOtherMeans {
            /**
             * Other form of payment evidence.
             *
             * - `canceled_check` - Canceled check.
             * - `card_transaction` - Card transaction.
             * - `cash_receipt` - Cash receipt.
             * - `other` - Other.
             * - `statement` - Statement.
             * - `voucher` - Voucher.
             */
            other_form_of_payment_evidence:
              | 'canceled_check'
              | 'card_transaction'
              | 'cash_receipt'
              | 'other'
              | 'statement'
              | 'voucher';

            /**
             * Other transaction ID.
             */
            other_transaction_id: string | null;
          }
        }
      }

      /**
       * A Visa Card Dispute Merchant Pre-Arbitration Decline User Submission object.
       * This field will be present in the JSON response if and only if `category` is
       * equal to `merchant_prearbitration_decline`. Contains the details specific to a
       * merchant prearbitration decline Visa Card Dispute User Submission.
       */
      export interface MerchantPrearbitrationDecline {
        /**
         * The reason the user declined the merchant's request for pre-arbitration in their
         * favor.
         */
        reason: string;
      }

      /**
       * A Visa Card Dispute User-Initiated Pre-Arbitration User Submission object. This
       * field will be present in the JSON response if and only if `category` is equal to
       * `user_prearbitration`. Contains the details specific to a user-initiated
       * pre-arbitration Visa Card Dispute User Submission.
       */
      export interface UserPrearbitration {
        /**
         * Category change details for the pre-arbitration request, if requested.
         */
        category_change: UserPrearbitration.CategoryChange | null;

        /**
         * The reason for the pre-arbitration request.
         */
        reason: string;
      }

      export namespace UserPrearbitration {
        /**
         * Category change details for the pre-arbitration request, if requested.
         */
        export interface CategoryChange {
          /**
           * The category the dispute is being changed to.
           *
           * - `authorization` - Authorization.
           * - `consumer_canceled_merchandise` - Consumer: canceled merchandise.
           * - `consumer_canceled_recurring_transaction` - Consumer: canceled recurring
           *   transaction.
           * - `consumer_canceled_services` - Consumer: canceled services.
           * - `consumer_counterfeit_merchandise` - Consumer: counterfeit merchandise.
           * - `consumer_credit_not_processed` - Consumer: credit not processed.
           * - `consumer_damaged_or_defective_merchandise` - Consumer: damaged or defective
           *   merchandise.
           * - `consumer_merchandise_misrepresentation` - Consumer: merchandise
           *   misrepresentation.
           * - `consumer_merchandise_not_as_described` - Consumer: merchandise not as
           *   described.
           * - `consumer_merchandise_not_received` - Consumer: merchandise not received.
           * - `consumer_non_receipt_of_cash` - Consumer: non-receipt of cash.
           * - `consumer_original_credit_transaction_not_accepted` - Consumer: Original
           *   Credit Transaction (OCT) not accepted.
           * - `consumer_quality_merchandise` - Consumer: merchandise quality issue.
           * - `consumer_quality_services` - Consumer: services quality issue.
           * - `consumer_services_misrepresentation` - Consumer: services misrepresentation.
           * - `consumer_services_not_as_described` - Consumer: services not as described.
           * - `consumer_services_not_received` - Consumer: services not received.
           * - `fraud` - Fraud.
           * - `processing_error` - Processing error.
           */
          category:
            | 'authorization'
            | 'consumer_canceled_merchandise'
            | 'consumer_canceled_recurring_transaction'
            | 'consumer_canceled_services'
            | 'consumer_counterfeit_merchandise'
            | 'consumer_credit_not_processed'
            | 'consumer_damaged_or_defective_merchandise'
            | 'consumer_merchandise_misrepresentation'
            | 'consumer_merchandise_not_as_described'
            | 'consumer_merchandise_not_received'
            | 'consumer_non_receipt_of_cash'
            | 'consumer_original_credit_transaction_not_accepted'
            | 'consumer_quality_merchandise'
            | 'consumer_quality_services'
            | 'consumer_services_misrepresentation'
            | 'consumer_services_not_as_described'
            | 'consumer_services_not_received'
            | 'fraud'
            | 'processing_error';

          /**
           * The reason for the pre-arbitration request.
           */
          reason: string;
        }
      }
    }
  }

  /**
   * If the Card Dispute's status is `won`, this will contain details of the won
   * dispute.
   */
  export interface Win {
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
     * the Card Dispute was won.
     */
    won_at: string;
  }
}

export interface CardDisputeCreateParams {
  /**
   * The Transaction you wish to dispute. This Transaction must have a `source_type`
   * of `card_settlement`.
   */
  disputed_transaction_id: string;

  /**
   * The network of the disputed transaction. Details specific to the network are
   * required under the sub-object with the same identifier as the network.
   *
   * - `visa` - Visa
   */
  network: 'visa';

  /**
   * The monetary amount of the part of the transaction that is being disputed. This
   * is optional and will default to the full amount of the transaction if not
   * provided. If provided, the amount must be less than or equal to the amount of
   * the transaction.
   */
  amount?: number;

  /**
   * The files to be attached to the initial dispute submission.
   */
  attachment_files?: Array<CardDisputeCreateParams.AttachmentFile>;

  /**
   * The free-form explanation provided to Increase to provide more context for the
   * user submission. This field is not sent directly to the card networks.
   */
  explanation?: string;

  /**
   * The Visa-specific parameters for the dispute. Required if and only if `network`
   * is `visa`.
   */
  visa?: CardDisputeCreateParams.Visa;

  [k: string]: unknown;
}

export namespace CardDisputeCreateParams {
  export interface AttachmentFile {
    /**
     * The ID of the file to be attached. The file must have a `purpose` of
     * `card_dispute_attachment`.
     */
    file_id: string;
  }

  /**
   * The Visa-specific parameters for the dispute. Required if and only if `network`
   * is `visa`.
   */
  export interface Visa {
    /**
     * Category.
     *
     * - `authorization` - Authorization.
     * - `consumer_canceled_merchandise` - Consumer: canceled merchandise.
     * - `consumer_canceled_recurring_transaction` - Consumer: canceled recurring
     *   transaction.
     * - `consumer_canceled_services` - Consumer: canceled services.
     * - `consumer_counterfeit_merchandise` - Consumer: counterfeit merchandise.
     * - `consumer_credit_not_processed` - Consumer: credit not processed.
     * - `consumer_damaged_or_defective_merchandise` - Consumer: damaged or defective
     *   merchandise.
     * - `consumer_merchandise_misrepresentation` - Consumer: merchandise
     *   misrepresentation.
     * - `consumer_merchandise_not_as_described` - Consumer: merchandise not as
     *   described.
     * - `consumer_merchandise_not_received` - Consumer: merchandise not received.
     * - `consumer_non_receipt_of_cash` - Consumer: non-receipt of cash.
     * - `consumer_original_credit_transaction_not_accepted` - Consumer: Original
     *   Credit Transaction (OCT) not accepted.
     * - `consumer_quality_merchandise` - Consumer: merchandise quality issue.
     * - `consumer_quality_services` - Consumer: services quality issue.
     * - `consumer_services_misrepresentation` - Consumer: services misrepresentation.
     * - `consumer_services_not_as_described` - Consumer: services not as described.
     * - `consumer_services_not_received` - Consumer: services not received.
     * - `fraud` - Fraud.
     * - `processing_error` - Processing error.
     */
    category:
      | 'authorization'
      | 'consumer_canceled_merchandise'
      | 'consumer_canceled_recurring_transaction'
      | 'consumer_canceled_services'
      | 'consumer_counterfeit_merchandise'
      | 'consumer_credit_not_processed'
      | 'consumer_damaged_or_defective_merchandise'
      | 'consumer_merchandise_misrepresentation'
      | 'consumer_merchandise_not_as_described'
      | 'consumer_merchandise_not_received'
      | 'consumer_non_receipt_of_cash'
      | 'consumer_original_credit_transaction_not_accepted'
      | 'consumer_quality_merchandise'
      | 'consumer_quality_services'
      | 'consumer_services_misrepresentation'
      | 'consumer_services_not_as_described'
      | 'consumer_services_not_received'
      | 'fraud'
      | 'processing_error';

    /**
     * Authorization. Required if and only if `category` is `authorization`.
     */
    authorization?: Visa.Authorization;

    /**
     * Canceled merchandise. Required if and only if `category` is
     * `consumer_canceled_merchandise`.
     */
    consumer_canceled_merchandise?: Visa.ConsumerCanceledMerchandise;

    /**
     * Canceled recurring transaction. Required if and only if `category` is
     * `consumer_canceled_recurring_transaction`.
     */
    consumer_canceled_recurring_transaction?: Visa.ConsumerCanceledRecurringTransaction;

    /**
     * Canceled services. Required if and only if `category` is
     * `consumer_canceled_services`.
     */
    consumer_canceled_services?: Visa.ConsumerCanceledServices;

    /**
     * Counterfeit merchandise. Required if and only if `category` is
     * `consumer_counterfeit_merchandise`.
     */
    consumer_counterfeit_merchandise?: Visa.ConsumerCounterfeitMerchandise;

    /**
     * Credit not processed. Required if and only if `category` is
     * `consumer_credit_not_processed`.
     */
    consumer_credit_not_processed?: Visa.ConsumerCreditNotProcessed;

    /**
     * Damaged or defective merchandise. Required if and only if `category` is
     * `consumer_damaged_or_defective_merchandise`.
     */
    consumer_damaged_or_defective_merchandise?: Visa.ConsumerDamagedOrDefectiveMerchandise;

    /**
     * Merchandise misrepresentation. Required if and only if `category` is
     * `consumer_merchandise_misrepresentation`.
     */
    consumer_merchandise_misrepresentation?: Visa.ConsumerMerchandiseMisrepresentation;

    /**
     * Merchandise not as described. Required if and only if `category` is
     * `consumer_merchandise_not_as_described`.
     */
    consumer_merchandise_not_as_described?: Visa.ConsumerMerchandiseNotAsDescribed;

    /**
     * Merchandise not received. Required if and only if `category` is
     * `consumer_merchandise_not_received`.
     */
    consumer_merchandise_not_received?: Visa.ConsumerMerchandiseNotReceived;

    /**
     * Non-receipt of cash. Required if and only if `category` is
     * `consumer_non_receipt_of_cash`.
     */
    consumer_non_receipt_of_cash?: Visa.ConsumerNonReceiptOfCash;

    /**
     * Original Credit Transaction (OCT) not accepted. Required if and only if
     * `category` is `consumer_original_credit_transaction_not_accepted`.
     */
    consumer_original_credit_transaction_not_accepted?: Visa.ConsumerOriginalCreditTransactionNotAccepted;

    /**
     * Merchandise quality issue. Required if and only if `category` is
     * `consumer_quality_merchandise`.
     */
    consumer_quality_merchandise?: Visa.ConsumerQualityMerchandise;

    /**
     * Services quality issue. Required if and only if `category` is
     * `consumer_quality_services`.
     */
    consumer_quality_services?: Visa.ConsumerQualityServices;

    /**
     * Services misrepresentation. Required if and only if `category` is
     * `consumer_services_misrepresentation`.
     */
    consumer_services_misrepresentation?: Visa.ConsumerServicesMisrepresentation;

    /**
     * Services not as described. Required if and only if `category` is
     * `consumer_services_not_as_described`.
     */
    consumer_services_not_as_described?: Visa.ConsumerServicesNotAsDescribed;

    /**
     * Services not received. Required if and only if `category` is
     * `consumer_services_not_received`.
     */
    consumer_services_not_received?: Visa.ConsumerServicesNotReceived;

    /**
     * Fraud. Required if and only if `category` is `fraud`.
     */
    fraud?: Visa.Fraud;

    /**
     * Processing error. Required if and only if `category` is `processing_error`.
     */
    processing_error?: Visa.ProcessingError;
  }

  export namespace Visa {
    /**
     * Authorization. Required if and only if `category` is `authorization`.
     */
    export interface Authorization {
      /**
       * Account status.
       *
       * - `account_closed` - Account closed.
       * - `credit_problem` - Credit problem.
       * - `fraud` - Fraud.
       */
      account_status: 'account_closed' | 'credit_problem' | 'fraud';
    }

    /**
     * Canceled merchandise. Required if and only if `category` is
     * `consumer_canceled_merchandise`.
     */
    export interface ConsumerCanceledMerchandise {
      /**
       * Merchant resolution attempted.
       *
       * - `attempted` - Attempted.
       * - `prohibited_by_local_law` - Prohibited by local law.
       */
      merchant_resolution_attempted: 'attempted' | 'prohibited_by_local_law';

      /**
       * Purchase explanation.
       */
      purchase_explanation: string;

      /**
       * Received or expected at.
       */
      received_or_expected_at: string;

      /**
       * Return outcome.
       *
       * - `not_returned` - Not returned.
       * - `returned` - Returned.
       * - `return_attempted` - Return attempted.
       */
      return_outcome: 'not_returned' | 'returned' | 'return_attempted';

      /**
       * Cardholder cancellation.
       */
      cardholder_cancellation?: ConsumerCanceledMerchandise.CardholderCancellation;

      /**
       * Not returned. Required if and only if `return_outcome` is `not_returned`.
       */
      not_returned?: ConsumerCanceledMerchandise.NotReturned;

      /**
       * Return attempted. Required if and only if `return_outcome` is
       * `return_attempted`.
       */
      return_attempted?: ConsumerCanceledMerchandise.ReturnAttempted;

      /**
       * Returned. Required if and only if `return_outcome` is `returned`.
       */
      returned?: ConsumerCanceledMerchandise.Returned;
    }

    export namespace ConsumerCanceledMerchandise {
      /**
       * Cardholder cancellation.
       */
      export interface CardholderCancellation {
        /**
         * Canceled at.
         */
        canceled_at: string;

        /**
         * Canceled prior to ship date.
         *
         * - `canceled_prior_to_ship_date` - Canceled prior to ship date.
         * - `not_canceled_prior_to_ship_date` - Not canceled prior to ship date.
         */
        canceled_prior_to_ship_date: 'canceled_prior_to_ship_date' | 'not_canceled_prior_to_ship_date';

        /**
         * Cancellation policy provided.
         *
         * - `not_provided` - Not provided.
         * - `provided` - Provided.
         */
        cancellation_policy_provided: 'not_provided' | 'provided';

        /**
         * Reason.
         */
        reason: string;
      }

      /**
       * Not returned. Required if and only if `return_outcome` is `not_returned`.
       */
      export interface NotReturned {}

      /**
       * Return attempted. Required if and only if `return_outcome` is
       * `return_attempted`.
       */
      export interface ReturnAttempted {
        /**
         * Attempt explanation.
         */
        attempt_explanation: string;

        /**
         * Attempt reason.
         *
         * - `merchant_not_responding` - Merchant not responding.
         * - `no_return_authorization_provided` - No return authorization provided.
         * - `no_return_instructions` - No return instructions.
         * - `requested_not_to_return` - Requested not to return.
         * - `return_not_accepted` - Return not accepted.
         */
        attempt_reason:
          | 'merchant_not_responding'
          | 'no_return_authorization_provided'
          | 'no_return_instructions'
          | 'requested_not_to_return'
          | 'return_not_accepted';

        /**
         * Attempted at.
         */
        attempted_at: string;

        /**
         * Merchandise disposition.
         */
        merchandise_disposition: string;
      }

      /**
       * Returned. Required if and only if `return_outcome` is `returned`.
       */
      export interface Returned {
        /**
         * Return method.
         *
         * - `dhl` - DHL.
         * - `face_to_face` - Face-to-face.
         * - `fedex` - FedEx.
         * - `other` - Other.
         * - `postal_service` - Postal service.
         * - `ups` - UPS.
         */
        return_method: 'dhl' | 'face_to_face' | 'fedex' | 'other' | 'postal_service' | 'ups';

        /**
         * Returned at.
         */
        returned_at: string;

        /**
         * Merchant received return at.
         */
        merchant_received_return_at?: string;

        /**
         * Other explanation. Required if and only if the return method is `other`.
         */
        other_explanation?: string;

        /**
         * Tracking number.
         */
        tracking_number?: string;
      }
    }

    /**
     * Canceled recurring transaction. Required if and only if `category` is
     * `consumer_canceled_recurring_transaction`.
     */
    export interface ConsumerCanceledRecurringTransaction {
      /**
       * Cancellation target.
       *
       * - `account` - Account.
       * - `transaction` - Transaction.
       */
      cancellation_target: 'account' | 'transaction';

      /**
       * Merchant contact methods.
       */
      merchant_contact_methods: ConsumerCanceledRecurringTransaction.MerchantContactMethods;

      /**
       * Transaction or account canceled at.
       */
      transaction_or_account_canceled_at: string;

      /**
       * Other form of payment explanation.
       */
      other_form_of_payment_explanation?: string;
    }

    export namespace ConsumerCanceledRecurringTransaction {
      /**
       * Merchant contact methods.
       */
      export interface MerchantContactMethods {
        /**
         * Application name.
         */
        application_name?: string;

        /**
         * Call center phone number.
         */
        call_center_phone_number?: string;

        /**
         * Email address.
         */
        email_address?: string;

        /**
         * In person address.
         */
        in_person_address?: string;

        /**
         * Mailing address.
         */
        mailing_address?: string;

        /**
         * Text phone number.
         */
        text_phone_number?: string;
      }
    }

    /**
     * Canceled services. Required if and only if `category` is
     * `consumer_canceled_services`.
     */
    export interface ConsumerCanceledServices {
      /**
       * Cardholder cancellation.
       */
      cardholder_cancellation: ConsumerCanceledServices.CardholderCancellation;

      /**
       * Contracted at.
       */
      contracted_at: string;

      /**
       * Merchant resolution attempted.
       *
       * - `attempted` - Attempted.
       * - `prohibited_by_local_law` - Prohibited by local law.
       */
      merchant_resolution_attempted: 'attempted' | 'prohibited_by_local_law';

      /**
       * Purchase explanation.
       */
      purchase_explanation: string;

      /**
       * Service type.
       *
       * - `guaranteed_reservation` - Guaranteed reservation.
       * - `other` - Other.
       * - `timeshare` - Timeshare.
       */
      service_type: 'guaranteed_reservation' | 'other' | 'timeshare';

      /**
       * Guaranteed reservation explanation. Required if and only if `service_type` is
       * `guaranteed_reservation`.
       */
      guaranteed_reservation?: ConsumerCanceledServices.GuaranteedReservation;

      /**
       * Other service type explanation. Required if and only if `service_type` is
       * `other`.
       */
      other?: ConsumerCanceledServices.Other;

      /**
       * Timeshare explanation. Required if and only if `service_type` is `timeshare`.
       */
      timeshare?: ConsumerCanceledServices.Timeshare;
    }

    export namespace ConsumerCanceledServices {
      /**
       * Cardholder cancellation.
       */
      export interface CardholderCancellation {
        /**
         * Canceled at.
         */
        canceled_at: string;

        /**
         * Cancellation policy provided.
         *
         * - `not_provided` - Not provided.
         * - `provided` - Provided.
         */
        cancellation_policy_provided: 'not_provided' | 'provided';

        /**
         * Reason.
         */
        reason: string;
      }

      /**
       * Guaranteed reservation explanation. Required if and only if `service_type` is
       * `guaranteed_reservation`.
       */
      export interface GuaranteedReservation {
        /**
         * Explanation.
         *
         * - `cardholder_canceled_prior_to_service` - Cardholder canceled prior to service.
         * - `cardholder_cancellation_attempt_within_24_hours_of_confirmation` - Cardholder
         *   cancellation attempt within 24 hours of confirmation.
         * - `merchant_billed_no_show` - Merchant billed for no-show.
         */
        explanation:
          | 'cardholder_canceled_prior_to_service'
          | 'cardholder_cancellation_attempt_within_24_hours_of_confirmation'
          | 'merchant_billed_no_show';
      }

      /**
       * Other service type explanation. Required if and only if `service_type` is
       * `other`.
       */
      export interface Other {}

      /**
       * Timeshare explanation. Required if and only if `service_type` is `timeshare`.
       */
      export interface Timeshare {}
    }

    /**
     * Counterfeit merchandise. Required if and only if `category` is
     * `consumer_counterfeit_merchandise`.
     */
    export interface ConsumerCounterfeitMerchandise {
      /**
       * Counterfeit explanation.
       */
      counterfeit_explanation: string;

      /**
       * Disposition explanation.
       */
      disposition_explanation: string;

      /**
       * Order explanation.
       */
      order_explanation: string;

      /**
       * Received at.
       */
      received_at: string;
    }

    /**
     * Credit not processed. Required if and only if `category` is
     * `consumer_credit_not_processed`.
     */
    export interface ConsumerCreditNotProcessed {
      /**
       * Canceled or returned at.
       */
      canceled_or_returned_at?: string;

      /**
       * Credit expected at.
       */
      credit_expected_at?: string;
    }

    /**
     * Damaged or defective merchandise. Required if and only if `category` is
     * `consumer_damaged_or_defective_merchandise`.
     */
    export interface ConsumerDamagedOrDefectiveMerchandise {
      /**
       * Merchant resolution attempted.
       *
       * - `attempted` - Attempted.
       * - `prohibited_by_local_law` - Prohibited by local law.
       */
      merchant_resolution_attempted: 'attempted' | 'prohibited_by_local_law';

      /**
       * Order and issue explanation.
       */
      order_and_issue_explanation: string;

      /**
       * Received at.
       */
      received_at: string;

      /**
       * Return outcome.
       *
       * - `not_returned` - Not returned.
       * - `returned` - Returned.
       * - `return_attempted` - Return attempted.
       */
      return_outcome: 'not_returned' | 'returned' | 'return_attempted';

      /**
       * Not returned. Required if and only if `return_outcome` is `not_returned`.
       */
      not_returned?: ConsumerDamagedOrDefectiveMerchandise.NotReturned;

      /**
       * Return attempted. Required if and only if `return_outcome` is
       * `return_attempted`.
       */
      return_attempted?: ConsumerDamagedOrDefectiveMerchandise.ReturnAttempted;

      /**
       * Returned. Required if and only if `return_outcome` is `returned`.
       */
      returned?: ConsumerDamagedOrDefectiveMerchandise.Returned;
    }

    export namespace ConsumerDamagedOrDefectiveMerchandise {
      /**
       * Not returned. Required if and only if `return_outcome` is `not_returned`.
       */
      export interface NotReturned {}

      /**
       * Return attempted. Required if and only if `return_outcome` is
       * `return_attempted`.
       */
      export interface ReturnAttempted {
        /**
         * Attempt explanation.
         */
        attempt_explanation: string;

        /**
         * Attempt reason.
         *
         * - `merchant_not_responding` - Merchant not responding.
         * - `no_return_authorization_provided` - No return authorization provided.
         * - `no_return_instructions` - No return instructions.
         * - `requested_not_to_return` - Requested not to return.
         * - `return_not_accepted` - Return not accepted.
         */
        attempt_reason:
          | 'merchant_not_responding'
          | 'no_return_authorization_provided'
          | 'no_return_instructions'
          | 'requested_not_to_return'
          | 'return_not_accepted';

        /**
         * Attempted at.
         */
        attempted_at: string;

        /**
         * Merchandise disposition.
         */
        merchandise_disposition: string;
      }

      /**
       * Returned. Required if and only if `return_outcome` is `returned`.
       */
      export interface Returned {
        /**
         * Return method.
         *
         * - `dhl` - DHL.
         * - `face_to_face` - Face-to-face.
         * - `fedex` - FedEx.
         * - `other` - Other.
         * - `postal_service` - Postal service.
         * - `ups` - UPS.
         */
        return_method: 'dhl' | 'face_to_face' | 'fedex' | 'other' | 'postal_service' | 'ups';

        /**
         * Returned at.
         */
        returned_at: string;

        /**
         * Merchant received return at.
         */
        merchant_received_return_at?: string;

        /**
         * Other explanation. Required if and only if the return method is `other`.
         */
        other_explanation?: string;

        /**
         * Tracking number.
         */
        tracking_number?: string;
      }
    }

    /**
     * Merchandise misrepresentation. Required if and only if `category` is
     * `consumer_merchandise_misrepresentation`.
     */
    export interface ConsumerMerchandiseMisrepresentation {
      /**
       * Merchant resolution attempted.
       *
       * - `attempted` - Attempted.
       * - `prohibited_by_local_law` - Prohibited by local law.
       */
      merchant_resolution_attempted: 'attempted' | 'prohibited_by_local_law';

      /**
       * Misrepresentation explanation.
       */
      misrepresentation_explanation: string;

      /**
       * Purchase explanation.
       */
      purchase_explanation: string;

      /**
       * Received at.
       */
      received_at: string;

      /**
       * Return outcome.
       *
       * - `not_returned` - Not returned.
       * - `returned` - Returned.
       * - `return_attempted` - Return attempted.
       */
      return_outcome: 'not_returned' | 'returned' | 'return_attempted';

      /**
       * Not returned. Required if and only if `return_outcome` is `not_returned`.
       */
      not_returned?: ConsumerMerchandiseMisrepresentation.NotReturned;

      /**
       * Return attempted. Required if and only if `return_outcome` is
       * `return_attempted`.
       */
      return_attempted?: ConsumerMerchandiseMisrepresentation.ReturnAttempted;

      /**
       * Returned. Required if and only if `return_outcome` is `returned`.
       */
      returned?: ConsumerMerchandiseMisrepresentation.Returned;
    }

    export namespace ConsumerMerchandiseMisrepresentation {
      /**
       * Not returned. Required if and only if `return_outcome` is `not_returned`.
       */
      export interface NotReturned {}

      /**
       * Return attempted. Required if and only if `return_outcome` is
       * `return_attempted`.
       */
      export interface ReturnAttempted {
        /**
         * Attempt explanation.
         */
        attempt_explanation: string;

        /**
         * Attempt reason.
         *
         * - `merchant_not_responding` - Merchant not responding.
         * - `no_return_authorization_provided` - No return authorization provided.
         * - `no_return_instructions` - No return instructions.
         * - `requested_not_to_return` - Requested not to return.
         * - `return_not_accepted` - Return not accepted.
         */
        attempt_reason:
          | 'merchant_not_responding'
          | 'no_return_authorization_provided'
          | 'no_return_instructions'
          | 'requested_not_to_return'
          | 'return_not_accepted';

        /**
         * Attempted at.
         */
        attempted_at: string;

        /**
         * Merchandise disposition.
         */
        merchandise_disposition: string;
      }

      /**
       * Returned. Required if and only if `return_outcome` is `returned`.
       */
      export interface Returned {
        /**
         * Return method.
         *
         * - `dhl` - DHL.
         * - `face_to_face` - Face-to-face.
         * - `fedex` - FedEx.
         * - `other` - Other.
         * - `postal_service` - Postal service.
         * - `ups` - UPS.
         */
        return_method: 'dhl' | 'face_to_face' | 'fedex' | 'other' | 'postal_service' | 'ups';

        /**
         * Returned at.
         */
        returned_at: string;

        /**
         * Merchant received return at.
         */
        merchant_received_return_at?: string;

        /**
         * Other explanation. Required if and only if the return method is `other`.
         */
        other_explanation?: string;

        /**
         * Tracking number.
         */
        tracking_number?: string;
      }
    }

    /**
     * Merchandise not as described. Required if and only if `category` is
     * `consumer_merchandise_not_as_described`.
     */
    export interface ConsumerMerchandiseNotAsDescribed {
      /**
       * Merchant resolution attempted.
       *
       * - `attempted` - Attempted.
       * - `prohibited_by_local_law` - Prohibited by local law.
       */
      merchant_resolution_attempted: 'attempted' | 'prohibited_by_local_law';

      /**
       * Received at.
       */
      received_at: string;

      /**
       * Return outcome.
       *
       * - `returned` - Returned.
       * - `return_attempted` - Return attempted.
       */
      return_outcome: 'returned' | 'return_attempted';

      /**
       * Return attempted. Required if and only if `return_outcome` is
       * `return_attempted`.
       */
      return_attempted?: ConsumerMerchandiseNotAsDescribed.ReturnAttempted;

      /**
       * Returned. Required if and only if `return_outcome` is `returned`.
       */
      returned?: ConsumerMerchandiseNotAsDescribed.Returned;
    }

    export namespace ConsumerMerchandiseNotAsDescribed {
      /**
       * Return attempted. Required if and only if `return_outcome` is
       * `return_attempted`.
       */
      export interface ReturnAttempted {
        /**
         * Attempt explanation.
         */
        attempt_explanation: string;

        /**
         * Attempt reason.
         *
         * - `merchant_not_responding` - Merchant not responding.
         * - `no_return_authorization_provided` - No return authorization provided.
         * - `no_return_instructions` - No return instructions.
         * - `requested_not_to_return` - Requested not to return.
         * - `return_not_accepted` - Return not accepted.
         */
        attempt_reason:
          | 'merchant_not_responding'
          | 'no_return_authorization_provided'
          | 'no_return_instructions'
          | 'requested_not_to_return'
          | 'return_not_accepted';

        /**
         * Attempted at.
         */
        attempted_at: string;

        /**
         * Merchandise disposition.
         */
        merchandise_disposition: string;
      }

      /**
       * Returned. Required if and only if `return_outcome` is `returned`.
       */
      export interface Returned {
        /**
         * Return method.
         *
         * - `dhl` - DHL.
         * - `face_to_face` - Face-to-face.
         * - `fedex` - FedEx.
         * - `other` - Other.
         * - `postal_service` - Postal service.
         * - `ups` - UPS.
         */
        return_method: 'dhl' | 'face_to_face' | 'fedex' | 'other' | 'postal_service' | 'ups';

        /**
         * Returned at.
         */
        returned_at: string;

        /**
         * Merchant received return at.
         */
        merchant_received_return_at?: string;

        /**
         * Other explanation. Required if and only if the return method is `other`.
         */
        other_explanation?: string;

        /**
         * Tracking number.
         */
        tracking_number?: string;
      }
    }

    /**
     * Merchandise not received. Required if and only if `category` is
     * `consumer_merchandise_not_received`.
     */
    export interface ConsumerMerchandiseNotReceived {
      /**
       * Cancellation outcome.
       *
       * - `cardholder_cancellation_prior_to_expected_receipt` - Cardholder cancellation
       *   prior to expected receipt.
       * - `merchant_cancellation` - Merchant cancellation.
       * - `no_cancellation` - No cancellation.
       */
      cancellation_outcome:
        | 'cardholder_cancellation_prior_to_expected_receipt'
        | 'merchant_cancellation'
        | 'no_cancellation';

      /**
       * Delivery issue.
       *
       * - `delayed` - Delayed.
       * - `delivered_to_wrong_location` - Delivered to wrong location.
       */
      delivery_issue: 'delayed' | 'delivered_to_wrong_location';

      /**
       * Last expected receipt at.
       */
      last_expected_receipt_at: string;

      /**
       * Merchant resolution attempted.
       *
       * - `attempted` - Attempted.
       * - `prohibited_by_local_law` - Prohibited by local law.
       */
      merchant_resolution_attempted: 'attempted' | 'prohibited_by_local_law';

      /**
       * Purchase information and explanation.
       */
      purchase_info_and_explanation: string;

      /**
       * Cardholder cancellation prior to expected receipt. Required if and only if
       * `cancellation_outcome` is `cardholder_cancellation_prior_to_expected_receipt`.
       */
      cardholder_cancellation_prior_to_expected_receipt?: ConsumerMerchandiseNotReceived.CardholderCancellationPriorToExpectedReceipt;

      /**
       * Delayed. Required if and only if `delivery_issue` is `delayed`.
       */
      delayed?: ConsumerMerchandiseNotReceived.Delayed;

      /**
       * Delivered to wrong location. Required if and only if `delivery_issue` is
       * `delivered_to_wrong_location`.
       */
      delivered_to_wrong_location?: ConsumerMerchandiseNotReceived.DeliveredToWrongLocation;

      /**
       * Merchant cancellation. Required if and only if `cancellation_outcome` is
       * `merchant_cancellation`.
       */
      merchant_cancellation?: ConsumerMerchandiseNotReceived.MerchantCancellation;

      /**
       * No cancellation. Required if and only if `cancellation_outcome` is
       * `no_cancellation`.
       */
      no_cancellation?: ConsumerMerchandiseNotReceived.NoCancellation;
    }

    export namespace ConsumerMerchandiseNotReceived {
      /**
       * Cardholder cancellation prior to expected receipt. Required if and only if
       * `cancellation_outcome` is `cardholder_cancellation_prior_to_expected_receipt`.
       */
      export interface CardholderCancellationPriorToExpectedReceipt {
        /**
         * Canceled at.
         */
        canceled_at: string;

        /**
         * Reason.
         */
        reason?: string;
      }

      /**
       * Delayed. Required if and only if `delivery_issue` is `delayed`.
       */
      export interface Delayed {
        /**
         * Explanation.
         */
        explanation: string;

        /**
         * Return outcome.
         *
         * - `not_returned` - Not returned.
         * - `returned` - Returned.
         * - `return_attempted` - Return attempted.
         */
        return_outcome: 'not_returned' | 'returned' | 'return_attempted';

        /**
         * Not returned. Required if and only if `return_outcome` is `not_returned`.
         */
        not_returned?: Delayed.NotReturned;

        /**
         * Return attempted. Required if and only if `return_outcome` is
         * `return_attempted`.
         */
        return_attempted?: Delayed.ReturnAttempted;

        /**
         * Returned. Required if and only if `return_outcome` is `returned`.
         */
        returned?: Delayed.Returned;
      }

      export namespace Delayed {
        /**
         * Not returned. Required if and only if `return_outcome` is `not_returned`.
         */
        export interface NotReturned {}

        /**
         * Return attempted. Required if and only if `return_outcome` is
         * `return_attempted`.
         */
        export interface ReturnAttempted {
          /**
           * Attempted at.
           */
          attempted_at: string;
        }

        /**
         * Returned. Required if and only if `return_outcome` is `returned`.
         */
        export interface Returned {
          /**
           * Merchant received return at.
           */
          merchant_received_return_at: string;

          /**
           * Returned at.
           */
          returned_at: string;
        }
      }

      /**
       * Delivered to wrong location. Required if and only if `delivery_issue` is
       * `delivered_to_wrong_location`.
       */
      export interface DeliveredToWrongLocation {
        /**
         * Agreed location.
         */
        agreed_location: string;
      }

      /**
       * Merchant cancellation. Required if and only if `cancellation_outcome` is
       * `merchant_cancellation`.
       */
      export interface MerchantCancellation {
        /**
         * Canceled at.
         */
        canceled_at: string;
      }

      /**
       * No cancellation. Required if and only if `cancellation_outcome` is
       * `no_cancellation`.
       */
      export interface NoCancellation {}
    }

    /**
     * Non-receipt of cash. Required if and only if `category` is
     * `consumer_non_receipt_of_cash`.
     */
    export interface ConsumerNonReceiptOfCash {}

    /**
     * Original Credit Transaction (OCT) not accepted. Required if and only if
     * `category` is `consumer_original_credit_transaction_not_accepted`.
     */
    export interface ConsumerOriginalCreditTransactionNotAccepted {
      /**
       * Explanation.
       */
      explanation: string;

      /**
       * Reason.
       *
       * - `prohibited_by_local_laws_or_regulation` - Prohibited by local laws or
       *   regulation.
       * - `recipient_refused` - Recipient refused.
       */
      reason: 'prohibited_by_local_laws_or_regulation' | 'recipient_refused';
    }

    /**
     * Merchandise quality issue. Required if and only if `category` is
     * `consumer_quality_merchandise`.
     */
    export interface ConsumerQualityMerchandise {
      /**
       * Expected at.
       */
      expected_at: string;

      /**
       * Merchant resolution attempted.
       *
       * - `attempted` - Attempted.
       * - `prohibited_by_local_law` - Prohibited by local law.
       */
      merchant_resolution_attempted: 'attempted' | 'prohibited_by_local_law';

      /**
       * Purchase information and quality issue.
       */
      purchase_info_and_quality_issue: string;

      /**
       * Received at.
       */
      received_at: string;

      /**
       * Return outcome.
       *
       * - `not_returned` - Not returned.
       * - `returned` - Returned.
       * - `return_attempted` - Return attempted.
       */
      return_outcome: 'not_returned' | 'returned' | 'return_attempted';

      /**
       * Not returned. Required if and only if `return_outcome` is `not_returned`.
       */
      not_returned?: ConsumerQualityMerchandise.NotReturned;

      /**
       * Ongoing negotiations. Exclude if there is no evidence of ongoing negotiations.
       */
      ongoing_negotiations?: ConsumerQualityMerchandise.OngoingNegotiations;

      /**
       * Return attempted. Required if and only if `return_outcome` is
       * `return_attempted`.
       */
      return_attempted?: ConsumerQualityMerchandise.ReturnAttempted;

      /**
       * Returned. Required if and only if `return_outcome` is `returned`.
       */
      returned?: ConsumerQualityMerchandise.Returned;
    }

    export namespace ConsumerQualityMerchandise {
      /**
       * Not returned. Required if and only if `return_outcome` is `not_returned`.
       */
      export interface NotReturned {}

      /**
       * Ongoing negotiations. Exclude if there is no evidence of ongoing negotiations.
       */
      export interface OngoingNegotiations {
        /**
         * Explanation of the previous ongoing negotiations between the cardholder and
         * merchant.
         */
        explanation: string;

        /**
         * Date the cardholder first notified the issuer of the dispute.
         */
        issuer_first_notified_at: string;

        /**
         * Started at.
         */
        started_at: string;
      }

      /**
       * Return attempted. Required if and only if `return_outcome` is
       * `return_attempted`.
       */
      export interface ReturnAttempted {
        /**
         * Attempt explanation.
         */
        attempt_explanation: string;

        /**
         * Attempt reason.
         *
         * - `merchant_not_responding` - Merchant not responding.
         * - `no_return_authorization_provided` - No return authorization provided.
         * - `no_return_instructions` - No return instructions.
         * - `requested_not_to_return` - Requested not to return.
         * - `return_not_accepted` - Return not accepted.
         */
        attempt_reason:
          | 'merchant_not_responding'
          | 'no_return_authorization_provided'
          | 'no_return_instructions'
          | 'requested_not_to_return'
          | 'return_not_accepted';

        /**
         * Attempted at.
         */
        attempted_at: string;

        /**
         * Merchandise disposition.
         */
        merchandise_disposition: string;
      }

      /**
       * Returned. Required if and only if `return_outcome` is `returned`.
       */
      export interface Returned {
        /**
         * Return method.
         *
         * - `dhl` - DHL.
         * - `face_to_face` - Face-to-face.
         * - `fedex` - FedEx.
         * - `other` - Other.
         * - `postal_service` - Postal service.
         * - `ups` - UPS.
         */
        return_method: 'dhl' | 'face_to_face' | 'fedex' | 'other' | 'postal_service' | 'ups';

        /**
         * Returned at.
         */
        returned_at: string;

        /**
         * Merchant received return at.
         */
        merchant_received_return_at?: string;

        /**
         * Other explanation. Required if and only if the return method is `other`.
         */
        other_explanation?: string;

        /**
         * Tracking number.
         */
        tracking_number?: string;
      }
    }

    /**
     * Services quality issue. Required if and only if `category` is
     * `consumer_quality_services`.
     */
    export interface ConsumerQualityServices {
      /**
       * Cardholder cancellation.
       */
      cardholder_cancellation: ConsumerQualityServices.CardholderCancellation;

      /**
       * Non-fiat currency or non-fungible token related and not matching description.
       *
       * - `not_related` - Not related.
       * - `related` - Related.
       */
      non_fiat_currency_or_non_fungible_token_related_and_not_matching_description: 'not_related' | 'related';

      /**
       * Purchase information and quality issue.
       */
      purchase_info_and_quality_issue: string;

      /**
       * Services received at.
       */
      services_received_at: string;

      /**
       * Cardholder paid to have work redone.
       *
       * - `did_not_pay_to_have_work_redone` - Cardholder did not pay to have work
       *   redone.
       * - `paid_to_have_work_redone` - Cardholder paid to have work redone.
       */
      cardholder_paid_to_have_work_redone?: 'did_not_pay_to_have_work_redone' | 'paid_to_have_work_redone';

      /**
       * Ongoing negotiations. Exclude if there is no evidence of ongoing negotiations.
       */
      ongoing_negotiations?: ConsumerQualityServices.OngoingNegotiations;

      /**
       * Whether the dispute is related to the quality of food from an eating place or
       * restaurant. Must be provided when Merchant Category Code (MCC) is 5812, 5813
       * or 5814.
       *
       * - `not_related` - Not related.
       * - `related` - Related.
       */
      restaurant_food_related?: 'not_related' | 'related';
    }

    export namespace ConsumerQualityServices {
      /**
       * Cardholder cancellation.
       */
      export interface CardholderCancellation {
        /**
         * Accepted by merchant.
         *
         * - `accepted` - Accepted.
         * - `not_accepted` - Not accepted.
         */
        accepted_by_merchant: 'accepted' | 'not_accepted';

        /**
         * Canceled at.
         */
        canceled_at: string;

        /**
         * Reason.
         */
        reason: string;
      }

      /**
       * Ongoing negotiations. Exclude if there is no evidence of ongoing negotiations.
       */
      export interface OngoingNegotiations {
        /**
         * Explanation of the previous ongoing negotiations between the cardholder and
         * merchant.
         */
        explanation: string;

        /**
         * Date the cardholder first notified the issuer of the dispute.
         */
        issuer_first_notified_at: string;

        /**
         * Started at.
         */
        started_at: string;
      }
    }

    /**
     * Services misrepresentation. Required if and only if `category` is
     * `consumer_services_misrepresentation`.
     */
    export interface ConsumerServicesMisrepresentation {
      /**
       * Cardholder cancellation.
       */
      cardholder_cancellation: ConsumerServicesMisrepresentation.CardholderCancellation;

      /**
       * Merchant resolution attempted.
       *
       * - `attempted` - Attempted.
       * - `prohibited_by_local_law` - Prohibited by local law.
       */
      merchant_resolution_attempted: 'attempted' | 'prohibited_by_local_law';

      /**
       * Misrepresentation explanation.
       */
      misrepresentation_explanation: string;

      /**
       * Purchase explanation.
       */
      purchase_explanation: string;

      /**
       * Received at.
       */
      received_at: string;
    }

    export namespace ConsumerServicesMisrepresentation {
      /**
       * Cardholder cancellation.
       */
      export interface CardholderCancellation {
        /**
         * Accepted by merchant.
         *
         * - `accepted` - Accepted.
         * - `not_accepted` - Not accepted.
         */
        accepted_by_merchant: 'accepted' | 'not_accepted';

        /**
         * Canceled at.
         */
        canceled_at: string;

        /**
         * Reason.
         */
        reason: string;
      }
    }

    /**
     * Services not as described. Required if and only if `category` is
     * `consumer_services_not_as_described`.
     */
    export interface ConsumerServicesNotAsDescribed {
      /**
       * Cardholder cancellation.
       */
      cardholder_cancellation: ConsumerServicesNotAsDescribed.CardholderCancellation;

      /**
       * Merchant resolution attempted.
       *
       * - `attempted` - Attempted.
       * - `prohibited_by_local_law` - Prohibited by local law.
       */
      merchant_resolution_attempted: 'attempted' | 'prohibited_by_local_law';

      /**
       * Received at.
       */
      received_at: string;
    }

    export namespace ConsumerServicesNotAsDescribed {
      /**
       * Cardholder cancellation.
       */
      export interface CardholderCancellation {
        /**
         * Accepted by merchant.
         *
         * - `accepted` - Accepted.
         * - `not_accepted` - Not accepted.
         */
        accepted_by_merchant: 'accepted' | 'not_accepted';

        /**
         * Canceled at.
         */
        canceled_at: string;

        /**
         * Reason.
         */
        reason: string;
      }
    }

    /**
     * Services not received. Required if and only if `category` is
     * `consumer_services_not_received`.
     */
    export interface ConsumerServicesNotReceived {
      /**
       * Cancellation outcome.
       *
       * - `cardholder_cancellation_prior_to_expected_receipt` - Cardholder cancellation
       *   prior to expected receipt.
       * - `merchant_cancellation` - Merchant cancellation.
       * - `no_cancellation` - No cancellation.
       */
      cancellation_outcome:
        | 'cardholder_cancellation_prior_to_expected_receipt'
        | 'merchant_cancellation'
        | 'no_cancellation';

      /**
       * Last expected receipt at.
       */
      last_expected_receipt_at: string;

      /**
       * Merchant resolution attempted.
       *
       * - `attempted` - Attempted.
       * - `prohibited_by_local_law` - Prohibited by local law.
       */
      merchant_resolution_attempted: 'attempted' | 'prohibited_by_local_law';

      /**
       * Purchase information and explanation.
       */
      purchase_info_and_explanation: string;

      /**
       * Cardholder cancellation prior to expected receipt. Required if and only if
       * `cancellation_outcome` is `cardholder_cancellation_prior_to_expected_receipt`.
       */
      cardholder_cancellation_prior_to_expected_receipt?: ConsumerServicesNotReceived.CardholderCancellationPriorToExpectedReceipt;

      /**
       * Merchant cancellation. Required if and only if `cancellation_outcome` is
       * `merchant_cancellation`.
       */
      merchant_cancellation?: ConsumerServicesNotReceived.MerchantCancellation;

      /**
       * No cancellation. Required if and only if `cancellation_outcome` is
       * `no_cancellation`.
       */
      no_cancellation?: ConsumerServicesNotReceived.NoCancellation;
    }

    export namespace ConsumerServicesNotReceived {
      /**
       * Cardholder cancellation prior to expected receipt. Required if and only if
       * `cancellation_outcome` is `cardholder_cancellation_prior_to_expected_receipt`.
       */
      export interface CardholderCancellationPriorToExpectedReceipt {
        /**
         * Canceled at.
         */
        canceled_at: string;

        /**
         * Reason.
         */
        reason?: string;
      }

      /**
       * Merchant cancellation. Required if and only if `cancellation_outcome` is
       * `merchant_cancellation`.
       */
      export interface MerchantCancellation {
        /**
         * Canceled at.
         */
        canceled_at: string;
      }

      /**
       * No cancellation. Required if and only if `cancellation_outcome` is
       * `no_cancellation`.
       */
      export interface NoCancellation {}
    }

    /**
     * Fraud. Required if and only if `category` is `fraud`.
     */
    export interface Fraud {
      /**
       * Fraud type.
       *
       * - `account_or_credentials_takeover` - Account or credentials takeover.
       * - `card_not_received_as_issued` - Card not received as issued.
       * - `fraudulent_application` - Fraudulent application.
       * - `fraudulent_use_of_account_number` - Fraudulent use of account number.
       * - `incorrect_processing` - Incorrect processing.
       * - `issuer_reported_counterfeit` - Issuer reported counterfeit.
       * - `lost` - Lost.
       * - `manipulation_of_account_holder` - Manipulation of account holder.
       * - `merchant_misrepresentation` - Merchant misrepresentation.
       * - `miscellaneous` - Miscellaneous.
       * - `stolen` - Stolen.
       */
      fraud_type:
        | 'account_or_credentials_takeover'
        | 'card_not_received_as_issued'
        | 'fraudulent_application'
        | 'fraudulent_use_of_account_number'
        | 'incorrect_processing'
        | 'issuer_reported_counterfeit'
        | 'lost'
        | 'manipulation_of_account_holder'
        | 'merchant_misrepresentation'
        | 'miscellaneous'
        | 'stolen';
    }

    /**
     * Processing error. Required if and only if `category` is `processing_error`.
     */
    export interface ProcessingError {
      /**
       * Error reason.
       *
       * - `duplicate_transaction` - Duplicate transaction.
       * - `incorrect_amount` - Incorrect amount.
       * - `paid_by_other_means` - Paid by other means.
       */
      error_reason: 'duplicate_transaction' | 'incorrect_amount' | 'paid_by_other_means';

      /**
       * Merchant resolution attempted.
       *
       * - `attempted` - Attempted.
       * - `prohibited_by_local_law` - Prohibited by local law.
       */
      merchant_resolution_attempted: 'attempted' | 'prohibited_by_local_law';

      /**
       * Duplicate transaction. Required if and only if `error_reason` is
       * `duplicate_transaction`.
       */
      duplicate_transaction?: ProcessingError.DuplicateTransaction;

      /**
       * Incorrect amount. Required if and only if `error_reason` is `incorrect_amount`.
       */
      incorrect_amount?: ProcessingError.IncorrectAmount;

      /**
       * Paid by other means. Required if and only if `error_reason` is
       * `paid_by_other_means`.
       */
      paid_by_other_means?: ProcessingError.PaidByOtherMeans;
    }

    export namespace ProcessingError {
      /**
       * Duplicate transaction. Required if and only if `error_reason` is
       * `duplicate_transaction`.
       */
      export interface DuplicateTransaction {
        /**
         * Other transaction ID.
         */
        other_transaction_id: string;
      }

      /**
       * Incorrect amount. Required if and only if `error_reason` is `incorrect_amount`.
       */
      export interface IncorrectAmount {
        /**
         * Expected amount.
         */
        expected_amount: number;
      }

      /**
       * Paid by other means. Required if and only if `error_reason` is
       * `paid_by_other_means`.
       */
      export interface PaidByOtherMeans {
        /**
         * Other form of payment evidence.
         *
         * - `canceled_check` - Canceled check.
         * - `card_transaction` - Card transaction.
         * - `cash_receipt` - Cash receipt.
         * - `other` - Other.
         * - `statement` - Statement.
         * - `voucher` - Voucher.
         */
        other_form_of_payment_evidence:
          | 'canceled_check'
          | 'card_transaction'
          | 'cash_receipt'
          | 'other'
          | 'statement'
          | 'voucher';

        /**
         * Other transaction ID.
         */
        other_transaction_id?: string;
      }
    }
  }
}

export interface CardDisputeListParams extends PageParams {
  created_at?: CardDisputeListParams.CreatedAt;

  /**
   * Filter records to the one with the specified `idempotency_key` you chose for
   * that object. This value is unique across Increase and is used to ensure that a
   * request is only processed once. Learn more about
   * [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key?: string;

  status?: CardDisputeListParams.Status;
}

export namespace CardDisputeListParams {
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
     * Filter Card Disputes for those with the specified status or statuses. For GET
     * requests, this should be encoded as a comma-delimited string, such as
     * `?in=one,two,three`.
     */
    in?: Array<
      | 'user_submission_required'
      | 'pending_user_submission_reviewing'
      | 'pending_user_submission_submitting'
      | 'pending_user_withdrawal_submitting'
      | 'pending_response'
      | 'lost'
      | 'won'
    >;
  }
}

export interface CardDisputeSubmitUserSubmissionParams {
  /**
   * The network of the Card Dispute. Details specific to the network are required
   * under the sub-object with the same identifier as the network.
   *
   * - `visa` - Visa
   */
  network: 'visa';

  /**
   * The adjusted monetary amount of the part of the transaction that is being
   * disputed. This is optional and will default to the most recent amount provided.
   * If provided, the amount must be less than or equal to the amount of the
   * transaction.
   */
  amount?: number;

  /**
   * The files to be attached to the user submission.
   */
  attachment_files?: Array<CardDisputeSubmitUserSubmissionParams.AttachmentFile>;

  /**
   * The free-form explanation provided to Increase to provide more context for the
   * user submission. This field is not sent directly to the card networks.
   */
  explanation?: string;

  /**
   * The Visa-specific parameters for the dispute. Required if and only if `network`
   * is `visa`.
   */
  visa?: CardDisputeSubmitUserSubmissionParams.Visa;

  [k: string]: unknown;
}

export namespace CardDisputeSubmitUserSubmissionParams {
  export interface AttachmentFile {
    /**
     * The ID of the file to be attached. The file must have a `purpose` of
     * `card_dispute_attachment`.
     */
    file_id: string;
  }

  /**
   * The Visa-specific parameters for the dispute. Required if and only if `network`
   * is `visa`.
   */
  export interface Visa {
    /**
     * The category of the user submission. Details specific to the category are
     * required under the sub-object with the same identifier as the category.
     *
     * - `chargeback` - Chargeback.
     * - `merchant_prearbitration_decline` - Merchant pre-arbitration decline.
     * - `user_prearbitration` - User pre-arbitration.
     */
    category: 'chargeback' | 'merchant_prearbitration_decline' | 'user_prearbitration';

    /**
     * The chargeback details for the user submission. Required if and only if
     * `category` is `chargeback`.
     */
    chargeback?: Visa.Chargeback;

    /**
     * The merchant pre-arbitration decline details for the user submission. Required
     * if and only if `category` is `merchant_prearbitration_decline`.
     */
    merchant_prearbitration_decline?: Visa.MerchantPrearbitrationDecline;

    /**
     * The user pre-arbitration details for the user submission. Required if and only
     * if `category` is `user_prearbitration`.
     */
    user_prearbitration?: Visa.UserPrearbitration;
  }

  export namespace Visa {
    /**
     * The chargeback details for the user submission. Required if and only if
     * `category` is `chargeback`.
     */
    export interface Chargeback {
      /**
       * Category.
       *
       * - `authorization` - Authorization.
       * - `consumer_canceled_merchandise` - Consumer: canceled merchandise.
       * - `consumer_canceled_recurring_transaction` - Consumer: canceled recurring
       *   transaction.
       * - `consumer_canceled_services` - Consumer: canceled services.
       * - `consumer_counterfeit_merchandise` - Consumer: counterfeit merchandise.
       * - `consumer_credit_not_processed` - Consumer: credit not processed.
       * - `consumer_damaged_or_defective_merchandise` - Consumer: damaged or defective
       *   merchandise.
       * - `consumer_merchandise_misrepresentation` - Consumer: merchandise
       *   misrepresentation.
       * - `consumer_merchandise_not_as_described` - Consumer: merchandise not as
       *   described.
       * - `consumer_merchandise_not_received` - Consumer: merchandise not received.
       * - `consumer_non_receipt_of_cash` - Consumer: non-receipt of cash.
       * - `consumer_original_credit_transaction_not_accepted` - Consumer: Original
       *   Credit Transaction (OCT) not accepted.
       * - `consumer_quality_merchandise` - Consumer: merchandise quality issue.
       * - `consumer_quality_services` - Consumer: services quality issue.
       * - `consumer_services_misrepresentation` - Consumer: services misrepresentation.
       * - `consumer_services_not_as_described` - Consumer: services not as described.
       * - `consumer_services_not_received` - Consumer: services not received.
       * - `fraud` - Fraud.
       * - `processing_error` - Processing error.
       */
      category:
        | 'authorization'
        | 'consumer_canceled_merchandise'
        | 'consumer_canceled_recurring_transaction'
        | 'consumer_canceled_services'
        | 'consumer_counterfeit_merchandise'
        | 'consumer_credit_not_processed'
        | 'consumer_damaged_or_defective_merchandise'
        | 'consumer_merchandise_misrepresentation'
        | 'consumer_merchandise_not_as_described'
        | 'consumer_merchandise_not_received'
        | 'consumer_non_receipt_of_cash'
        | 'consumer_original_credit_transaction_not_accepted'
        | 'consumer_quality_merchandise'
        | 'consumer_quality_services'
        | 'consumer_services_misrepresentation'
        | 'consumer_services_not_as_described'
        | 'consumer_services_not_received'
        | 'fraud'
        | 'processing_error';

      /**
       * Authorization. Required if and only if `category` is `authorization`.
       */
      authorization?: Chargeback.Authorization;

      /**
       * Canceled merchandise. Required if and only if `category` is
       * `consumer_canceled_merchandise`.
       */
      consumer_canceled_merchandise?: Chargeback.ConsumerCanceledMerchandise;

      /**
       * Canceled recurring transaction. Required if and only if `category` is
       * `consumer_canceled_recurring_transaction`.
       */
      consumer_canceled_recurring_transaction?: Chargeback.ConsumerCanceledRecurringTransaction;

      /**
       * Canceled services. Required if and only if `category` is
       * `consumer_canceled_services`.
       */
      consumer_canceled_services?: Chargeback.ConsumerCanceledServices;

      /**
       * Counterfeit merchandise. Required if and only if `category` is
       * `consumer_counterfeit_merchandise`.
       */
      consumer_counterfeit_merchandise?: Chargeback.ConsumerCounterfeitMerchandise;

      /**
       * Credit not processed. Required if and only if `category` is
       * `consumer_credit_not_processed`.
       */
      consumer_credit_not_processed?: Chargeback.ConsumerCreditNotProcessed;

      /**
       * Damaged or defective merchandise. Required if and only if `category` is
       * `consumer_damaged_or_defective_merchandise`.
       */
      consumer_damaged_or_defective_merchandise?: Chargeback.ConsumerDamagedOrDefectiveMerchandise;

      /**
       * Merchandise misrepresentation. Required if and only if `category` is
       * `consumer_merchandise_misrepresentation`.
       */
      consumer_merchandise_misrepresentation?: Chargeback.ConsumerMerchandiseMisrepresentation;

      /**
       * Merchandise not as described. Required if and only if `category` is
       * `consumer_merchandise_not_as_described`.
       */
      consumer_merchandise_not_as_described?: Chargeback.ConsumerMerchandiseNotAsDescribed;

      /**
       * Merchandise not received. Required if and only if `category` is
       * `consumer_merchandise_not_received`.
       */
      consumer_merchandise_not_received?: Chargeback.ConsumerMerchandiseNotReceived;

      /**
       * Non-receipt of cash. Required if and only if `category` is
       * `consumer_non_receipt_of_cash`.
       */
      consumer_non_receipt_of_cash?: Chargeback.ConsumerNonReceiptOfCash;

      /**
       * Original Credit Transaction (OCT) not accepted. Required if and only if
       * `category` is `consumer_original_credit_transaction_not_accepted`.
       */
      consumer_original_credit_transaction_not_accepted?: Chargeback.ConsumerOriginalCreditTransactionNotAccepted;

      /**
       * Merchandise quality issue. Required if and only if `category` is
       * `consumer_quality_merchandise`.
       */
      consumer_quality_merchandise?: Chargeback.ConsumerQualityMerchandise;

      /**
       * Services quality issue. Required if and only if `category` is
       * `consumer_quality_services`.
       */
      consumer_quality_services?: Chargeback.ConsumerQualityServices;

      /**
       * Services misrepresentation. Required if and only if `category` is
       * `consumer_services_misrepresentation`.
       */
      consumer_services_misrepresentation?: Chargeback.ConsumerServicesMisrepresentation;

      /**
       * Services not as described. Required if and only if `category` is
       * `consumer_services_not_as_described`.
       */
      consumer_services_not_as_described?: Chargeback.ConsumerServicesNotAsDescribed;

      /**
       * Services not received. Required if and only if `category` is
       * `consumer_services_not_received`.
       */
      consumer_services_not_received?: Chargeback.ConsumerServicesNotReceived;

      /**
       * Fraud. Required if and only if `category` is `fraud`.
       */
      fraud?: Chargeback.Fraud;

      /**
       * Processing error. Required if and only if `category` is `processing_error`.
       */
      processing_error?: Chargeback.ProcessingError;
    }

    export namespace Chargeback {
      /**
       * Authorization. Required if and only if `category` is `authorization`.
       */
      export interface Authorization {
        /**
         * Account status.
         *
         * - `account_closed` - Account closed.
         * - `credit_problem` - Credit problem.
         * - `fraud` - Fraud.
         */
        account_status: 'account_closed' | 'credit_problem' | 'fraud';
      }

      /**
       * Canceled merchandise. Required if and only if `category` is
       * `consumer_canceled_merchandise`.
       */
      export interface ConsumerCanceledMerchandise {
        /**
         * Merchant resolution attempted.
         *
         * - `attempted` - Attempted.
         * - `prohibited_by_local_law` - Prohibited by local law.
         */
        merchant_resolution_attempted: 'attempted' | 'prohibited_by_local_law';

        /**
         * Purchase explanation.
         */
        purchase_explanation: string;

        /**
         * Received or expected at.
         */
        received_or_expected_at: string;

        /**
         * Return outcome.
         *
         * - `not_returned` - Not returned.
         * - `returned` - Returned.
         * - `return_attempted` - Return attempted.
         */
        return_outcome: 'not_returned' | 'returned' | 'return_attempted';

        /**
         * Cardholder cancellation.
         */
        cardholder_cancellation?: ConsumerCanceledMerchandise.CardholderCancellation;

        /**
         * Not returned. Required if and only if `return_outcome` is `not_returned`.
         */
        not_returned?: ConsumerCanceledMerchandise.NotReturned;

        /**
         * Return attempted. Required if and only if `return_outcome` is
         * `return_attempted`.
         */
        return_attempted?: ConsumerCanceledMerchandise.ReturnAttempted;

        /**
         * Returned. Required if and only if `return_outcome` is `returned`.
         */
        returned?: ConsumerCanceledMerchandise.Returned;
      }

      export namespace ConsumerCanceledMerchandise {
        /**
         * Cardholder cancellation.
         */
        export interface CardholderCancellation {
          /**
           * Canceled at.
           */
          canceled_at: string;

          /**
           * Canceled prior to ship date.
           *
           * - `canceled_prior_to_ship_date` - Canceled prior to ship date.
           * - `not_canceled_prior_to_ship_date` - Not canceled prior to ship date.
           */
          canceled_prior_to_ship_date: 'canceled_prior_to_ship_date' | 'not_canceled_prior_to_ship_date';

          /**
           * Cancellation policy provided.
           *
           * - `not_provided` - Not provided.
           * - `provided` - Provided.
           */
          cancellation_policy_provided: 'not_provided' | 'provided';

          /**
           * Reason.
           */
          reason: string;
        }

        /**
         * Not returned. Required if and only if `return_outcome` is `not_returned`.
         */
        export interface NotReturned {}

        /**
         * Return attempted. Required if and only if `return_outcome` is
         * `return_attempted`.
         */
        export interface ReturnAttempted {
          /**
           * Attempt explanation.
           */
          attempt_explanation: string;

          /**
           * Attempt reason.
           *
           * - `merchant_not_responding` - Merchant not responding.
           * - `no_return_authorization_provided` - No return authorization provided.
           * - `no_return_instructions` - No return instructions.
           * - `requested_not_to_return` - Requested not to return.
           * - `return_not_accepted` - Return not accepted.
           */
          attempt_reason:
            | 'merchant_not_responding'
            | 'no_return_authorization_provided'
            | 'no_return_instructions'
            | 'requested_not_to_return'
            | 'return_not_accepted';

          /**
           * Attempted at.
           */
          attempted_at: string;

          /**
           * Merchandise disposition.
           */
          merchandise_disposition: string;
        }

        /**
         * Returned. Required if and only if `return_outcome` is `returned`.
         */
        export interface Returned {
          /**
           * Return method.
           *
           * - `dhl` - DHL.
           * - `face_to_face` - Face-to-face.
           * - `fedex` - FedEx.
           * - `other` - Other.
           * - `postal_service` - Postal service.
           * - `ups` - UPS.
           */
          return_method: 'dhl' | 'face_to_face' | 'fedex' | 'other' | 'postal_service' | 'ups';

          /**
           * Returned at.
           */
          returned_at: string;

          /**
           * Merchant received return at.
           */
          merchant_received_return_at?: string;

          /**
           * Other explanation. Required if and only if the return method is `other`.
           */
          other_explanation?: string;

          /**
           * Tracking number.
           */
          tracking_number?: string;
        }
      }

      /**
       * Canceled recurring transaction. Required if and only if `category` is
       * `consumer_canceled_recurring_transaction`.
       */
      export interface ConsumerCanceledRecurringTransaction {
        /**
         * Cancellation target.
         *
         * - `account` - Account.
         * - `transaction` - Transaction.
         */
        cancellation_target: 'account' | 'transaction';

        /**
         * Merchant contact methods.
         */
        merchant_contact_methods: ConsumerCanceledRecurringTransaction.MerchantContactMethods;

        /**
         * Transaction or account canceled at.
         */
        transaction_or_account_canceled_at: string;

        /**
         * Other form of payment explanation.
         */
        other_form_of_payment_explanation?: string;
      }

      export namespace ConsumerCanceledRecurringTransaction {
        /**
         * Merchant contact methods.
         */
        export interface MerchantContactMethods {
          /**
           * Application name.
           */
          application_name?: string;

          /**
           * Call center phone number.
           */
          call_center_phone_number?: string;

          /**
           * Email address.
           */
          email_address?: string;

          /**
           * In person address.
           */
          in_person_address?: string;

          /**
           * Mailing address.
           */
          mailing_address?: string;

          /**
           * Text phone number.
           */
          text_phone_number?: string;
        }
      }

      /**
       * Canceled services. Required if and only if `category` is
       * `consumer_canceled_services`.
       */
      export interface ConsumerCanceledServices {
        /**
         * Cardholder cancellation.
         */
        cardholder_cancellation: ConsumerCanceledServices.CardholderCancellation;

        /**
         * Contracted at.
         */
        contracted_at: string;

        /**
         * Merchant resolution attempted.
         *
         * - `attempted` - Attempted.
         * - `prohibited_by_local_law` - Prohibited by local law.
         */
        merchant_resolution_attempted: 'attempted' | 'prohibited_by_local_law';

        /**
         * Purchase explanation.
         */
        purchase_explanation: string;

        /**
         * Service type.
         *
         * - `guaranteed_reservation` - Guaranteed reservation.
         * - `other` - Other.
         * - `timeshare` - Timeshare.
         */
        service_type: 'guaranteed_reservation' | 'other' | 'timeshare';

        /**
         * Guaranteed reservation explanation. Required if and only if `service_type` is
         * `guaranteed_reservation`.
         */
        guaranteed_reservation?: ConsumerCanceledServices.GuaranteedReservation;

        /**
         * Other service type explanation. Required if and only if `service_type` is
         * `other`.
         */
        other?: ConsumerCanceledServices.Other;

        /**
         * Timeshare explanation. Required if and only if `service_type` is `timeshare`.
         */
        timeshare?: ConsumerCanceledServices.Timeshare;
      }

      export namespace ConsumerCanceledServices {
        /**
         * Cardholder cancellation.
         */
        export interface CardholderCancellation {
          /**
           * Canceled at.
           */
          canceled_at: string;

          /**
           * Cancellation policy provided.
           *
           * - `not_provided` - Not provided.
           * - `provided` - Provided.
           */
          cancellation_policy_provided: 'not_provided' | 'provided';

          /**
           * Reason.
           */
          reason: string;
        }

        /**
         * Guaranteed reservation explanation. Required if and only if `service_type` is
         * `guaranteed_reservation`.
         */
        export interface GuaranteedReservation {
          /**
           * Explanation.
           *
           * - `cardholder_canceled_prior_to_service` - Cardholder canceled prior to service.
           * - `cardholder_cancellation_attempt_within_24_hours_of_confirmation` - Cardholder
           *   cancellation attempt within 24 hours of confirmation.
           * - `merchant_billed_no_show` - Merchant billed for no-show.
           */
          explanation:
            | 'cardholder_canceled_prior_to_service'
            | 'cardholder_cancellation_attempt_within_24_hours_of_confirmation'
            | 'merchant_billed_no_show';
        }

        /**
         * Other service type explanation. Required if and only if `service_type` is
         * `other`.
         */
        export interface Other {}

        /**
         * Timeshare explanation. Required if and only if `service_type` is `timeshare`.
         */
        export interface Timeshare {}
      }

      /**
       * Counterfeit merchandise. Required if and only if `category` is
       * `consumer_counterfeit_merchandise`.
       */
      export interface ConsumerCounterfeitMerchandise {
        /**
         * Counterfeit explanation.
         */
        counterfeit_explanation: string;

        /**
         * Disposition explanation.
         */
        disposition_explanation: string;

        /**
         * Order explanation.
         */
        order_explanation: string;

        /**
         * Received at.
         */
        received_at: string;
      }

      /**
       * Credit not processed. Required if and only if `category` is
       * `consumer_credit_not_processed`.
       */
      export interface ConsumerCreditNotProcessed {
        /**
         * Canceled or returned at.
         */
        canceled_or_returned_at?: string;

        /**
         * Credit expected at.
         */
        credit_expected_at?: string;
      }

      /**
       * Damaged or defective merchandise. Required if and only if `category` is
       * `consumer_damaged_or_defective_merchandise`.
       */
      export interface ConsumerDamagedOrDefectiveMerchandise {
        /**
         * Merchant resolution attempted.
         *
         * - `attempted` - Attempted.
         * - `prohibited_by_local_law` - Prohibited by local law.
         */
        merchant_resolution_attempted: 'attempted' | 'prohibited_by_local_law';

        /**
         * Order and issue explanation.
         */
        order_and_issue_explanation: string;

        /**
         * Received at.
         */
        received_at: string;

        /**
         * Return outcome.
         *
         * - `not_returned` - Not returned.
         * - `returned` - Returned.
         * - `return_attempted` - Return attempted.
         */
        return_outcome: 'not_returned' | 'returned' | 'return_attempted';

        /**
         * Not returned. Required if and only if `return_outcome` is `not_returned`.
         */
        not_returned?: ConsumerDamagedOrDefectiveMerchandise.NotReturned;

        /**
         * Return attempted. Required if and only if `return_outcome` is
         * `return_attempted`.
         */
        return_attempted?: ConsumerDamagedOrDefectiveMerchandise.ReturnAttempted;

        /**
         * Returned. Required if and only if `return_outcome` is `returned`.
         */
        returned?: ConsumerDamagedOrDefectiveMerchandise.Returned;
      }

      export namespace ConsumerDamagedOrDefectiveMerchandise {
        /**
         * Not returned. Required if and only if `return_outcome` is `not_returned`.
         */
        export interface NotReturned {}

        /**
         * Return attempted. Required if and only if `return_outcome` is
         * `return_attempted`.
         */
        export interface ReturnAttempted {
          /**
           * Attempt explanation.
           */
          attempt_explanation: string;

          /**
           * Attempt reason.
           *
           * - `merchant_not_responding` - Merchant not responding.
           * - `no_return_authorization_provided` - No return authorization provided.
           * - `no_return_instructions` - No return instructions.
           * - `requested_not_to_return` - Requested not to return.
           * - `return_not_accepted` - Return not accepted.
           */
          attempt_reason:
            | 'merchant_not_responding'
            | 'no_return_authorization_provided'
            | 'no_return_instructions'
            | 'requested_not_to_return'
            | 'return_not_accepted';

          /**
           * Attempted at.
           */
          attempted_at: string;

          /**
           * Merchandise disposition.
           */
          merchandise_disposition: string;
        }

        /**
         * Returned. Required if and only if `return_outcome` is `returned`.
         */
        export interface Returned {
          /**
           * Return method.
           *
           * - `dhl` - DHL.
           * - `face_to_face` - Face-to-face.
           * - `fedex` - FedEx.
           * - `other` - Other.
           * - `postal_service` - Postal service.
           * - `ups` - UPS.
           */
          return_method: 'dhl' | 'face_to_face' | 'fedex' | 'other' | 'postal_service' | 'ups';

          /**
           * Returned at.
           */
          returned_at: string;

          /**
           * Merchant received return at.
           */
          merchant_received_return_at?: string;

          /**
           * Other explanation. Required if and only if the return method is `other`.
           */
          other_explanation?: string;

          /**
           * Tracking number.
           */
          tracking_number?: string;
        }
      }

      /**
       * Merchandise misrepresentation. Required if and only if `category` is
       * `consumer_merchandise_misrepresentation`.
       */
      export interface ConsumerMerchandiseMisrepresentation {
        /**
         * Merchant resolution attempted.
         *
         * - `attempted` - Attempted.
         * - `prohibited_by_local_law` - Prohibited by local law.
         */
        merchant_resolution_attempted: 'attempted' | 'prohibited_by_local_law';

        /**
         * Misrepresentation explanation.
         */
        misrepresentation_explanation: string;

        /**
         * Purchase explanation.
         */
        purchase_explanation: string;

        /**
         * Received at.
         */
        received_at: string;

        /**
         * Return outcome.
         *
         * - `not_returned` - Not returned.
         * - `returned` - Returned.
         * - `return_attempted` - Return attempted.
         */
        return_outcome: 'not_returned' | 'returned' | 'return_attempted';

        /**
         * Not returned. Required if and only if `return_outcome` is `not_returned`.
         */
        not_returned?: ConsumerMerchandiseMisrepresentation.NotReturned;

        /**
         * Return attempted. Required if and only if `return_outcome` is
         * `return_attempted`.
         */
        return_attempted?: ConsumerMerchandiseMisrepresentation.ReturnAttempted;

        /**
         * Returned. Required if and only if `return_outcome` is `returned`.
         */
        returned?: ConsumerMerchandiseMisrepresentation.Returned;
      }

      export namespace ConsumerMerchandiseMisrepresentation {
        /**
         * Not returned. Required if and only if `return_outcome` is `not_returned`.
         */
        export interface NotReturned {}

        /**
         * Return attempted. Required if and only if `return_outcome` is
         * `return_attempted`.
         */
        export interface ReturnAttempted {
          /**
           * Attempt explanation.
           */
          attempt_explanation: string;

          /**
           * Attempt reason.
           *
           * - `merchant_not_responding` - Merchant not responding.
           * - `no_return_authorization_provided` - No return authorization provided.
           * - `no_return_instructions` - No return instructions.
           * - `requested_not_to_return` - Requested not to return.
           * - `return_not_accepted` - Return not accepted.
           */
          attempt_reason:
            | 'merchant_not_responding'
            | 'no_return_authorization_provided'
            | 'no_return_instructions'
            | 'requested_not_to_return'
            | 'return_not_accepted';

          /**
           * Attempted at.
           */
          attempted_at: string;

          /**
           * Merchandise disposition.
           */
          merchandise_disposition: string;
        }

        /**
         * Returned. Required if and only if `return_outcome` is `returned`.
         */
        export interface Returned {
          /**
           * Return method.
           *
           * - `dhl` - DHL.
           * - `face_to_face` - Face-to-face.
           * - `fedex` - FedEx.
           * - `other` - Other.
           * - `postal_service` - Postal service.
           * - `ups` - UPS.
           */
          return_method: 'dhl' | 'face_to_face' | 'fedex' | 'other' | 'postal_service' | 'ups';

          /**
           * Returned at.
           */
          returned_at: string;

          /**
           * Merchant received return at.
           */
          merchant_received_return_at?: string;

          /**
           * Other explanation. Required if and only if the return method is `other`.
           */
          other_explanation?: string;

          /**
           * Tracking number.
           */
          tracking_number?: string;
        }
      }

      /**
       * Merchandise not as described. Required if and only if `category` is
       * `consumer_merchandise_not_as_described`.
       */
      export interface ConsumerMerchandiseNotAsDescribed {
        /**
         * Merchant resolution attempted.
         *
         * - `attempted` - Attempted.
         * - `prohibited_by_local_law` - Prohibited by local law.
         */
        merchant_resolution_attempted: 'attempted' | 'prohibited_by_local_law';

        /**
         * Received at.
         */
        received_at: string;

        /**
         * Return outcome.
         *
         * - `returned` - Returned.
         * - `return_attempted` - Return attempted.
         */
        return_outcome: 'returned' | 'return_attempted';

        /**
         * Return attempted. Required if and only if `return_outcome` is
         * `return_attempted`.
         */
        return_attempted?: ConsumerMerchandiseNotAsDescribed.ReturnAttempted;

        /**
         * Returned. Required if and only if `return_outcome` is `returned`.
         */
        returned?: ConsumerMerchandiseNotAsDescribed.Returned;
      }

      export namespace ConsumerMerchandiseNotAsDescribed {
        /**
         * Return attempted. Required if and only if `return_outcome` is
         * `return_attempted`.
         */
        export interface ReturnAttempted {
          /**
           * Attempt explanation.
           */
          attempt_explanation: string;

          /**
           * Attempt reason.
           *
           * - `merchant_not_responding` - Merchant not responding.
           * - `no_return_authorization_provided` - No return authorization provided.
           * - `no_return_instructions` - No return instructions.
           * - `requested_not_to_return` - Requested not to return.
           * - `return_not_accepted` - Return not accepted.
           */
          attempt_reason:
            | 'merchant_not_responding'
            | 'no_return_authorization_provided'
            | 'no_return_instructions'
            | 'requested_not_to_return'
            | 'return_not_accepted';

          /**
           * Attempted at.
           */
          attempted_at: string;

          /**
           * Merchandise disposition.
           */
          merchandise_disposition: string;
        }

        /**
         * Returned. Required if and only if `return_outcome` is `returned`.
         */
        export interface Returned {
          /**
           * Return method.
           *
           * - `dhl` - DHL.
           * - `face_to_face` - Face-to-face.
           * - `fedex` - FedEx.
           * - `other` - Other.
           * - `postal_service` - Postal service.
           * - `ups` - UPS.
           */
          return_method: 'dhl' | 'face_to_face' | 'fedex' | 'other' | 'postal_service' | 'ups';

          /**
           * Returned at.
           */
          returned_at: string;

          /**
           * Merchant received return at.
           */
          merchant_received_return_at?: string;

          /**
           * Other explanation. Required if and only if the return method is `other`.
           */
          other_explanation?: string;

          /**
           * Tracking number.
           */
          tracking_number?: string;
        }
      }

      /**
       * Merchandise not received. Required if and only if `category` is
       * `consumer_merchandise_not_received`.
       */
      export interface ConsumerMerchandiseNotReceived {
        /**
         * Cancellation outcome.
         *
         * - `cardholder_cancellation_prior_to_expected_receipt` - Cardholder cancellation
         *   prior to expected receipt.
         * - `merchant_cancellation` - Merchant cancellation.
         * - `no_cancellation` - No cancellation.
         */
        cancellation_outcome:
          | 'cardholder_cancellation_prior_to_expected_receipt'
          | 'merchant_cancellation'
          | 'no_cancellation';

        /**
         * Delivery issue.
         *
         * - `delayed` - Delayed.
         * - `delivered_to_wrong_location` - Delivered to wrong location.
         */
        delivery_issue: 'delayed' | 'delivered_to_wrong_location';

        /**
         * Last expected receipt at.
         */
        last_expected_receipt_at: string;

        /**
         * Merchant resolution attempted.
         *
         * - `attempted` - Attempted.
         * - `prohibited_by_local_law` - Prohibited by local law.
         */
        merchant_resolution_attempted: 'attempted' | 'prohibited_by_local_law';

        /**
         * Purchase information and explanation.
         */
        purchase_info_and_explanation: string;

        /**
         * Cardholder cancellation prior to expected receipt. Required if and only if
         * `cancellation_outcome` is `cardholder_cancellation_prior_to_expected_receipt`.
         */
        cardholder_cancellation_prior_to_expected_receipt?: ConsumerMerchandiseNotReceived.CardholderCancellationPriorToExpectedReceipt;

        /**
         * Delayed. Required if and only if `delivery_issue` is `delayed`.
         */
        delayed?: ConsumerMerchandiseNotReceived.Delayed;

        /**
         * Delivered to wrong location. Required if and only if `delivery_issue` is
         * `delivered_to_wrong_location`.
         */
        delivered_to_wrong_location?: ConsumerMerchandiseNotReceived.DeliveredToWrongLocation;

        /**
         * Merchant cancellation. Required if and only if `cancellation_outcome` is
         * `merchant_cancellation`.
         */
        merchant_cancellation?: ConsumerMerchandiseNotReceived.MerchantCancellation;

        /**
         * No cancellation. Required if and only if `cancellation_outcome` is
         * `no_cancellation`.
         */
        no_cancellation?: ConsumerMerchandiseNotReceived.NoCancellation;
      }

      export namespace ConsumerMerchandiseNotReceived {
        /**
         * Cardholder cancellation prior to expected receipt. Required if and only if
         * `cancellation_outcome` is `cardholder_cancellation_prior_to_expected_receipt`.
         */
        export interface CardholderCancellationPriorToExpectedReceipt {
          /**
           * Canceled at.
           */
          canceled_at: string;

          /**
           * Reason.
           */
          reason?: string;
        }

        /**
         * Delayed. Required if and only if `delivery_issue` is `delayed`.
         */
        export interface Delayed {
          /**
           * Explanation.
           */
          explanation: string;

          /**
           * Return outcome.
           *
           * - `not_returned` - Not returned.
           * - `returned` - Returned.
           * - `return_attempted` - Return attempted.
           */
          return_outcome: 'not_returned' | 'returned' | 'return_attempted';

          /**
           * Not returned. Required if and only if `return_outcome` is `not_returned`.
           */
          not_returned?: Delayed.NotReturned;

          /**
           * Return attempted. Required if and only if `return_outcome` is
           * `return_attempted`.
           */
          return_attempted?: Delayed.ReturnAttempted;

          /**
           * Returned. Required if and only if `return_outcome` is `returned`.
           */
          returned?: Delayed.Returned;
        }

        export namespace Delayed {
          /**
           * Not returned. Required if and only if `return_outcome` is `not_returned`.
           */
          export interface NotReturned {}

          /**
           * Return attempted. Required if and only if `return_outcome` is
           * `return_attempted`.
           */
          export interface ReturnAttempted {
            /**
             * Attempted at.
             */
            attempted_at: string;
          }

          /**
           * Returned. Required if and only if `return_outcome` is `returned`.
           */
          export interface Returned {
            /**
             * Merchant received return at.
             */
            merchant_received_return_at: string;

            /**
             * Returned at.
             */
            returned_at: string;
          }
        }

        /**
         * Delivered to wrong location. Required if and only if `delivery_issue` is
         * `delivered_to_wrong_location`.
         */
        export interface DeliveredToWrongLocation {
          /**
           * Agreed location.
           */
          agreed_location: string;
        }

        /**
         * Merchant cancellation. Required if and only if `cancellation_outcome` is
         * `merchant_cancellation`.
         */
        export interface MerchantCancellation {
          /**
           * Canceled at.
           */
          canceled_at: string;
        }

        /**
         * No cancellation. Required if and only if `cancellation_outcome` is
         * `no_cancellation`.
         */
        export interface NoCancellation {}
      }

      /**
       * Non-receipt of cash. Required if and only if `category` is
       * `consumer_non_receipt_of_cash`.
       */
      export interface ConsumerNonReceiptOfCash {}

      /**
       * Original Credit Transaction (OCT) not accepted. Required if and only if
       * `category` is `consumer_original_credit_transaction_not_accepted`.
       */
      export interface ConsumerOriginalCreditTransactionNotAccepted {
        /**
         * Explanation.
         */
        explanation: string;

        /**
         * Reason.
         *
         * - `prohibited_by_local_laws_or_regulation` - Prohibited by local laws or
         *   regulation.
         * - `recipient_refused` - Recipient refused.
         */
        reason: 'prohibited_by_local_laws_or_regulation' | 'recipient_refused';
      }

      /**
       * Merchandise quality issue. Required if and only if `category` is
       * `consumer_quality_merchandise`.
       */
      export interface ConsumerQualityMerchandise {
        /**
         * Expected at.
         */
        expected_at: string;

        /**
         * Merchant resolution attempted.
         *
         * - `attempted` - Attempted.
         * - `prohibited_by_local_law` - Prohibited by local law.
         */
        merchant_resolution_attempted: 'attempted' | 'prohibited_by_local_law';

        /**
         * Purchase information and quality issue.
         */
        purchase_info_and_quality_issue: string;

        /**
         * Received at.
         */
        received_at: string;

        /**
         * Return outcome.
         *
         * - `not_returned` - Not returned.
         * - `returned` - Returned.
         * - `return_attempted` - Return attempted.
         */
        return_outcome: 'not_returned' | 'returned' | 'return_attempted';

        /**
         * Not returned. Required if and only if `return_outcome` is `not_returned`.
         */
        not_returned?: ConsumerQualityMerchandise.NotReturned;

        /**
         * Ongoing negotiations. Exclude if there is no evidence of ongoing negotiations.
         */
        ongoing_negotiations?: ConsumerQualityMerchandise.OngoingNegotiations;

        /**
         * Return attempted. Required if and only if `return_outcome` is
         * `return_attempted`.
         */
        return_attempted?: ConsumerQualityMerchandise.ReturnAttempted;

        /**
         * Returned. Required if and only if `return_outcome` is `returned`.
         */
        returned?: ConsumerQualityMerchandise.Returned;
      }

      export namespace ConsumerQualityMerchandise {
        /**
         * Not returned. Required if and only if `return_outcome` is `not_returned`.
         */
        export interface NotReturned {}

        /**
         * Ongoing negotiations. Exclude if there is no evidence of ongoing negotiations.
         */
        export interface OngoingNegotiations {
          /**
           * Explanation of the previous ongoing negotiations between the cardholder and
           * merchant.
           */
          explanation: string;

          /**
           * Date the cardholder first notified the issuer of the dispute.
           */
          issuer_first_notified_at: string;

          /**
           * Started at.
           */
          started_at: string;
        }

        /**
         * Return attempted. Required if and only if `return_outcome` is
         * `return_attempted`.
         */
        export interface ReturnAttempted {
          /**
           * Attempt explanation.
           */
          attempt_explanation: string;

          /**
           * Attempt reason.
           *
           * - `merchant_not_responding` - Merchant not responding.
           * - `no_return_authorization_provided` - No return authorization provided.
           * - `no_return_instructions` - No return instructions.
           * - `requested_not_to_return` - Requested not to return.
           * - `return_not_accepted` - Return not accepted.
           */
          attempt_reason:
            | 'merchant_not_responding'
            | 'no_return_authorization_provided'
            | 'no_return_instructions'
            | 'requested_not_to_return'
            | 'return_not_accepted';

          /**
           * Attempted at.
           */
          attempted_at: string;

          /**
           * Merchandise disposition.
           */
          merchandise_disposition: string;
        }

        /**
         * Returned. Required if and only if `return_outcome` is `returned`.
         */
        export interface Returned {
          /**
           * Return method.
           *
           * - `dhl` - DHL.
           * - `face_to_face` - Face-to-face.
           * - `fedex` - FedEx.
           * - `other` - Other.
           * - `postal_service` - Postal service.
           * - `ups` - UPS.
           */
          return_method: 'dhl' | 'face_to_face' | 'fedex' | 'other' | 'postal_service' | 'ups';

          /**
           * Returned at.
           */
          returned_at: string;

          /**
           * Merchant received return at.
           */
          merchant_received_return_at?: string;

          /**
           * Other explanation. Required if and only if the return method is `other`.
           */
          other_explanation?: string;

          /**
           * Tracking number.
           */
          tracking_number?: string;
        }
      }

      /**
       * Services quality issue. Required if and only if `category` is
       * `consumer_quality_services`.
       */
      export interface ConsumerQualityServices {
        /**
         * Cardholder cancellation.
         */
        cardholder_cancellation: ConsumerQualityServices.CardholderCancellation;

        /**
         * Non-fiat currency or non-fungible token related and not matching description.
         *
         * - `not_related` - Not related.
         * - `related` - Related.
         */
        non_fiat_currency_or_non_fungible_token_related_and_not_matching_description:
          | 'not_related'
          | 'related';

        /**
         * Purchase information and quality issue.
         */
        purchase_info_and_quality_issue: string;

        /**
         * Services received at.
         */
        services_received_at: string;

        /**
         * Cardholder paid to have work redone.
         *
         * - `did_not_pay_to_have_work_redone` - Cardholder did not pay to have work
         *   redone.
         * - `paid_to_have_work_redone` - Cardholder paid to have work redone.
         */
        cardholder_paid_to_have_work_redone?: 'did_not_pay_to_have_work_redone' | 'paid_to_have_work_redone';

        /**
         * Ongoing negotiations. Exclude if there is no evidence of ongoing negotiations.
         */
        ongoing_negotiations?: ConsumerQualityServices.OngoingNegotiations;

        /**
         * Whether the dispute is related to the quality of food from an eating place or
         * restaurant. Must be provided when Merchant Category Code (MCC) is 5812, 5813
         * or 5814.
         *
         * - `not_related` - Not related.
         * - `related` - Related.
         */
        restaurant_food_related?: 'not_related' | 'related';
      }

      export namespace ConsumerQualityServices {
        /**
         * Cardholder cancellation.
         */
        export interface CardholderCancellation {
          /**
           * Accepted by merchant.
           *
           * - `accepted` - Accepted.
           * - `not_accepted` - Not accepted.
           */
          accepted_by_merchant: 'accepted' | 'not_accepted';

          /**
           * Canceled at.
           */
          canceled_at: string;

          /**
           * Reason.
           */
          reason: string;
        }

        /**
         * Ongoing negotiations. Exclude if there is no evidence of ongoing negotiations.
         */
        export interface OngoingNegotiations {
          /**
           * Explanation of the previous ongoing negotiations between the cardholder and
           * merchant.
           */
          explanation: string;

          /**
           * Date the cardholder first notified the issuer of the dispute.
           */
          issuer_first_notified_at: string;

          /**
           * Started at.
           */
          started_at: string;
        }
      }

      /**
       * Services misrepresentation. Required if and only if `category` is
       * `consumer_services_misrepresentation`.
       */
      export interface ConsumerServicesMisrepresentation {
        /**
         * Cardholder cancellation.
         */
        cardholder_cancellation: ConsumerServicesMisrepresentation.CardholderCancellation;

        /**
         * Merchant resolution attempted.
         *
         * - `attempted` - Attempted.
         * - `prohibited_by_local_law` - Prohibited by local law.
         */
        merchant_resolution_attempted: 'attempted' | 'prohibited_by_local_law';

        /**
         * Misrepresentation explanation.
         */
        misrepresentation_explanation: string;

        /**
         * Purchase explanation.
         */
        purchase_explanation: string;

        /**
         * Received at.
         */
        received_at: string;
      }

      export namespace ConsumerServicesMisrepresentation {
        /**
         * Cardholder cancellation.
         */
        export interface CardholderCancellation {
          /**
           * Accepted by merchant.
           *
           * - `accepted` - Accepted.
           * - `not_accepted` - Not accepted.
           */
          accepted_by_merchant: 'accepted' | 'not_accepted';

          /**
           * Canceled at.
           */
          canceled_at: string;

          /**
           * Reason.
           */
          reason: string;
        }
      }

      /**
       * Services not as described. Required if and only if `category` is
       * `consumer_services_not_as_described`.
       */
      export interface ConsumerServicesNotAsDescribed {
        /**
         * Cardholder cancellation.
         */
        cardholder_cancellation: ConsumerServicesNotAsDescribed.CardholderCancellation;

        /**
         * Merchant resolution attempted.
         *
         * - `attempted` - Attempted.
         * - `prohibited_by_local_law` - Prohibited by local law.
         */
        merchant_resolution_attempted: 'attempted' | 'prohibited_by_local_law';

        /**
         * Received at.
         */
        received_at: string;
      }

      export namespace ConsumerServicesNotAsDescribed {
        /**
         * Cardholder cancellation.
         */
        export interface CardholderCancellation {
          /**
           * Accepted by merchant.
           *
           * - `accepted` - Accepted.
           * - `not_accepted` - Not accepted.
           */
          accepted_by_merchant: 'accepted' | 'not_accepted';

          /**
           * Canceled at.
           */
          canceled_at: string;

          /**
           * Reason.
           */
          reason: string;
        }
      }

      /**
       * Services not received. Required if and only if `category` is
       * `consumer_services_not_received`.
       */
      export interface ConsumerServicesNotReceived {
        /**
         * Cancellation outcome.
         *
         * - `cardholder_cancellation_prior_to_expected_receipt` - Cardholder cancellation
         *   prior to expected receipt.
         * - `merchant_cancellation` - Merchant cancellation.
         * - `no_cancellation` - No cancellation.
         */
        cancellation_outcome:
          | 'cardholder_cancellation_prior_to_expected_receipt'
          | 'merchant_cancellation'
          | 'no_cancellation';

        /**
         * Last expected receipt at.
         */
        last_expected_receipt_at: string;

        /**
         * Merchant resolution attempted.
         *
         * - `attempted` - Attempted.
         * - `prohibited_by_local_law` - Prohibited by local law.
         */
        merchant_resolution_attempted: 'attempted' | 'prohibited_by_local_law';

        /**
         * Purchase information and explanation.
         */
        purchase_info_and_explanation: string;

        /**
         * Cardholder cancellation prior to expected receipt. Required if and only if
         * `cancellation_outcome` is `cardholder_cancellation_prior_to_expected_receipt`.
         */
        cardholder_cancellation_prior_to_expected_receipt?: ConsumerServicesNotReceived.CardholderCancellationPriorToExpectedReceipt;

        /**
         * Merchant cancellation. Required if and only if `cancellation_outcome` is
         * `merchant_cancellation`.
         */
        merchant_cancellation?: ConsumerServicesNotReceived.MerchantCancellation;

        /**
         * No cancellation. Required if and only if `cancellation_outcome` is
         * `no_cancellation`.
         */
        no_cancellation?: ConsumerServicesNotReceived.NoCancellation;
      }

      export namespace ConsumerServicesNotReceived {
        /**
         * Cardholder cancellation prior to expected receipt. Required if and only if
         * `cancellation_outcome` is `cardholder_cancellation_prior_to_expected_receipt`.
         */
        export interface CardholderCancellationPriorToExpectedReceipt {
          /**
           * Canceled at.
           */
          canceled_at: string;

          /**
           * Reason.
           */
          reason?: string;
        }

        /**
         * Merchant cancellation. Required if and only if `cancellation_outcome` is
         * `merchant_cancellation`.
         */
        export interface MerchantCancellation {
          /**
           * Canceled at.
           */
          canceled_at: string;
        }

        /**
         * No cancellation. Required if and only if `cancellation_outcome` is
         * `no_cancellation`.
         */
        export interface NoCancellation {}
      }

      /**
       * Fraud. Required if and only if `category` is `fraud`.
       */
      export interface Fraud {
        /**
         * Fraud type.
         *
         * - `account_or_credentials_takeover` - Account or credentials takeover.
         * - `card_not_received_as_issued` - Card not received as issued.
         * - `fraudulent_application` - Fraudulent application.
         * - `fraudulent_use_of_account_number` - Fraudulent use of account number.
         * - `incorrect_processing` - Incorrect processing.
         * - `issuer_reported_counterfeit` - Issuer reported counterfeit.
         * - `lost` - Lost.
         * - `manipulation_of_account_holder` - Manipulation of account holder.
         * - `merchant_misrepresentation` - Merchant misrepresentation.
         * - `miscellaneous` - Miscellaneous.
         * - `stolen` - Stolen.
         */
        fraud_type:
          | 'account_or_credentials_takeover'
          | 'card_not_received_as_issued'
          | 'fraudulent_application'
          | 'fraudulent_use_of_account_number'
          | 'incorrect_processing'
          | 'issuer_reported_counterfeit'
          | 'lost'
          | 'manipulation_of_account_holder'
          | 'merchant_misrepresentation'
          | 'miscellaneous'
          | 'stolen';
      }

      /**
       * Processing error. Required if and only if `category` is `processing_error`.
       */
      export interface ProcessingError {
        /**
         * Error reason.
         *
         * - `duplicate_transaction` - Duplicate transaction.
         * - `incorrect_amount` - Incorrect amount.
         * - `paid_by_other_means` - Paid by other means.
         */
        error_reason: 'duplicate_transaction' | 'incorrect_amount' | 'paid_by_other_means';

        /**
         * Merchant resolution attempted.
         *
         * - `attempted` - Attempted.
         * - `prohibited_by_local_law` - Prohibited by local law.
         */
        merchant_resolution_attempted: 'attempted' | 'prohibited_by_local_law';

        /**
         * Duplicate transaction. Required if and only if `error_reason` is
         * `duplicate_transaction`.
         */
        duplicate_transaction?: ProcessingError.DuplicateTransaction;

        /**
         * Incorrect amount. Required if and only if `error_reason` is `incorrect_amount`.
         */
        incorrect_amount?: ProcessingError.IncorrectAmount;

        /**
         * Paid by other means. Required if and only if `error_reason` is
         * `paid_by_other_means`.
         */
        paid_by_other_means?: ProcessingError.PaidByOtherMeans;
      }

      export namespace ProcessingError {
        /**
         * Duplicate transaction. Required if and only if `error_reason` is
         * `duplicate_transaction`.
         */
        export interface DuplicateTransaction {
          /**
           * Other transaction ID.
           */
          other_transaction_id: string;
        }

        /**
         * Incorrect amount. Required if and only if `error_reason` is `incorrect_amount`.
         */
        export interface IncorrectAmount {
          /**
           * Expected amount.
           */
          expected_amount: number;
        }

        /**
         * Paid by other means. Required if and only if `error_reason` is
         * `paid_by_other_means`.
         */
        export interface PaidByOtherMeans {
          /**
           * Other form of payment evidence.
           *
           * - `canceled_check` - Canceled check.
           * - `card_transaction` - Card transaction.
           * - `cash_receipt` - Cash receipt.
           * - `other` - Other.
           * - `statement` - Statement.
           * - `voucher` - Voucher.
           */
          other_form_of_payment_evidence:
            | 'canceled_check'
            | 'card_transaction'
            | 'cash_receipt'
            | 'other'
            | 'statement'
            | 'voucher';

          /**
           * Other transaction ID.
           */
          other_transaction_id?: string;
        }
      }
    }

    /**
     * The merchant pre-arbitration decline details for the user submission. Required
     * if and only if `category` is `merchant_prearbitration_decline`.
     */
    export interface MerchantPrearbitrationDecline {
      /**
       * The reason for declining the merchant's pre-arbitration request.
       */
      reason: string;
    }

    /**
     * The user pre-arbitration details for the user submission. Required if and only
     * if `category` is `user_prearbitration`.
     */
    export interface UserPrearbitration {
      /**
       * The reason for the pre-arbitration request.
       */
      reason: string;

      /**
       * Category change details for the pre-arbitration request. Should only be
       * populated if the category of the dispute is being changed as part of the
       * pre-arbitration request.
       */
      category_change?: UserPrearbitration.CategoryChange;
    }

    export namespace UserPrearbitration {
      /**
       * Category change details for the pre-arbitration request. Should only be
       * populated if the category of the dispute is being changed as part of the
       * pre-arbitration request.
       */
      export interface CategoryChange {
        /**
         * - `authorization` - Authorization.
         * - `consumer_canceled_merchandise` - Consumer: canceled merchandise.
         * - `consumer_canceled_recurring_transaction` - Consumer: canceled recurring
         *   transaction.
         * - `consumer_canceled_services` - Consumer: canceled services.
         * - `consumer_counterfeit_merchandise` - Consumer: counterfeit merchandise.
         * - `consumer_credit_not_processed` - Consumer: credit not processed.
         * - `consumer_damaged_or_defective_merchandise` - Consumer: damaged or defective
         *   merchandise.
         * - `consumer_merchandise_misrepresentation` - Consumer: merchandise
         *   misrepresentation.
         * - `consumer_merchandise_not_as_described` - Consumer: merchandise not as
         *   described.
         * - `consumer_merchandise_not_received` - Consumer: merchandise not received.
         * - `consumer_non_receipt_of_cash` - Consumer: non-receipt of cash.
         * - `consumer_original_credit_transaction_not_accepted` - Consumer: Original
         *   Credit Transaction (OCT) not accepted.
         * - `consumer_quality_merchandise` - Consumer: merchandise quality issue.
         * - `consumer_quality_services` - Consumer: services quality issue.
         * - `consumer_services_misrepresentation` - Consumer: services misrepresentation.
         * - `consumer_services_not_as_described` - Consumer: services not as described.
         * - `consumer_services_not_received` - Consumer: services not received.
         * - `fraud` - Fraud.
         * - `processing_error` - Processing error.
         */
        category:
          | 'authorization'
          | 'consumer_canceled_merchandise'
          | 'consumer_canceled_recurring_transaction'
          | 'consumer_canceled_services'
          | 'consumer_counterfeit_merchandise'
          | 'consumer_credit_not_processed'
          | 'consumer_damaged_or_defective_merchandise'
          | 'consumer_merchandise_misrepresentation'
          | 'consumer_merchandise_not_as_described'
          | 'consumer_merchandise_not_received'
          | 'consumer_non_receipt_of_cash'
          | 'consumer_original_credit_transaction_not_accepted'
          | 'consumer_quality_merchandise'
          | 'consumer_quality_services'
          | 'consumer_services_misrepresentation'
          | 'consumer_services_not_as_described'
          | 'consumer_services_not_received'
          | 'fraud'
          | 'processing_error';

        /**
         * The reason for the category change.
         */
        reason: string;
      }
    }
  }
}

export declare namespace CardDisputes {
  export {
    type CardDispute as CardDispute,
    type CardDisputesPage as CardDisputesPage,
    type CardDisputeCreateParams as CardDisputeCreateParams,
    type CardDisputeListParams as CardDisputeListParams,
    type CardDisputeSubmitUserSubmissionParams as CardDisputeSubmitUserSubmissionParams,
  };
}
