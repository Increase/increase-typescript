// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class CardPushTransfers extends APIResource {
  /**
   * Create a Card Push Transfer
   *
   * @example
   * ```ts
   * const cardPushTransfer =
   *   await client.cardPushTransfers.create({
   *     business_application_identifier: 'funds_disbursement',
   *     card_token_id:
   *       'outbound_card_token_zlt0ml6youq3q7vcdlg0',
   *     merchant_category_code: '1234',
   *     merchant_city_name: 'New York',
   *     merchant_name: 'Acme Corp',
   *     merchant_name_prefix: 'Acme',
   *     merchant_postal_code: '10045',
   *     merchant_state: 'NY',
   *     presentment_amount: {
   *       currency: 'USD',
   *       value: '1234.56',
   *     },
   *     recipient_name: 'Ian Crease',
   *     sender_address_city: 'New York',
   *     sender_address_line1: '33 Liberty Street',
   *     sender_address_postal_code: '10045',
   *     sender_address_state: 'NY',
   *     sender_name: 'Ian Crease',
   *     source_account_number_id:
   *       'account_number_v18nkfqm6afpsrvy82b2',
   *   });
   * ```
   */
  create(body: CardPushTransferCreateParams, options?: RequestOptions): APIPromise<CardPushTransfer> {
    return this._client.post('/card_push_transfers', { body, ...options });
  }

  /**
   * Retrieve a Card Push Transfer
   *
   * @example
   * ```ts
   * const cardPushTransfer =
   *   await client.cardPushTransfers.retrieve(
   *     'outbound_card_push_transfer_e0z9rdpamraczh4tvwye',
   *   );
   * ```
   */
  retrieve(cardPushTransferID: string, options?: RequestOptions): APIPromise<CardPushTransfer> {
    return this._client.get(path`/card_push_transfers/${cardPushTransferID}`, options);
  }

  /**
   * List Card Push Transfers
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const cardPushTransfer of client.cardPushTransfers.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: CardPushTransferListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CardPushTransfersPage, CardPushTransfer> {
    return this._client.getAPIList('/card_push_transfers', Page<CardPushTransfer>, { query, ...options });
  }

  /**
   * Approves a Card Push Transfer in a pending_approval state.
   *
   * @example
   * ```ts
   * const cardPushTransfer =
   *   await client.cardPushTransfers.approve(
   *     'outbound_card_push_transfer_e0z9rdpamraczh4tvwye',
   *   );
   * ```
   */
  approve(cardPushTransferID: string, options?: RequestOptions): APIPromise<CardPushTransfer> {
    return this._client.post(path`/card_push_transfers/${cardPushTransferID}/approve`, options);
  }

  /**
   * Cancels a Card Push Transfer in a pending_approval state.
   *
   * @example
   * ```ts
   * const cardPushTransfer =
   *   await client.cardPushTransfers.cancel(
   *     'outbound_card_push_transfer_e0z9rdpamraczh4tvwye',
   *   );
   * ```
   */
  cancel(cardPushTransferID: string, options?: RequestOptions): APIPromise<CardPushTransfer> {
    return this._client.post(path`/card_push_transfers/${cardPushTransferID}/cancel`, options);
  }
}

export type CardPushTransfersPage = Page<CardPushTransfer>;

/**
 * Card Push Transfers send funds to a recipient's payment card in real-time.
 */
export interface CardPushTransfer {
  /**
   * The Card Push Transfer's identifier.
   */
  id: string;

  /**
   * If the transfer is accepted by the recipient bank, this will contain
   * supplemental details.
   */
  acceptance: CardPushTransfer.Acceptance | null;

  /**
   * The Account from which the transfer was sent.
   */
  account_id: string;

  /**
   * If your account requires approvals for transfers and the transfer was approved,
   * this will contain details of the approval.
   */
  approval: CardPushTransfer.Approval | null;

  /**
   * The Business Application Identifier describes the type of transaction being
   * performed. Your program must be approved for the specified Business Application
   * Identifier in order to use it.
   *
   * - `account_to_account` - Account to Account
   * - `business_to_business` - Business to Business
   * - `money_transfer_bank_initiated` - Money Transfer Bank Initiated
   * - `non_card_bill_payment` - Non-Card Bill Payment
   * - `consumer_bill_payment` - Consumer Bill Payment
   * - `card_bill_payment` - Card Bill Payment
   * - `funds_disbursement` - Funds Disbursement
   * - `funds_transfer` - Funds Transfer
   * - `loyalty_and_offers` - Loyalty and Offers
   * - `merchant_disbursement` - Merchant Disbursement
   * - `merchant_payment` - Merchant Payment
   * - `person_to_person` - Person to Person
   * - `top_up` - Top Up
   * - `wallet_transfer` - Wallet Transfer
   */
  business_application_identifier:
    | 'account_to_account'
    | 'business_to_business'
    | 'money_transfer_bank_initiated'
    | 'non_card_bill_payment'
    | 'consumer_bill_payment'
    | 'card_bill_payment'
    | 'funds_disbursement'
    | 'funds_transfer'
    | 'loyalty_and_offers'
    | 'merchant_disbursement'
    | 'merchant_payment'
    | 'person_to_person'
    | 'top_up'
    | 'wallet_transfer';

  /**
   * If your account requires approvals for transfers and the transfer was not
   * approved, this will contain details of the cancellation.
   */
  cancellation: CardPushTransfer.Cancellation | null;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the transfer was created.
   */
  created_at: string;

  /**
   * What object created the transfer, either via the API or the dashboard.
   */
  created_by: CardPushTransfer.CreatedBy | null;

  /**
   * If the transfer is rejected by the card network or the destination financial
   * institution, this will contain supplemental details.
   */
  decline: CardPushTransfer.Decline | null;

  /**
   * The idempotency key you chose for this object. This value is unique across
   * Increase and is used to ensure that a request is only processed once. Learn more
   * about [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key: string | null;

  /**
   * The merchant category code (MCC) of the merchant (generally your business)
   * sending the transfer. This is a four-digit code that describes the type of
   * business or service provided by the merchant. Your program must be approved for
   * the specified MCC in order to use it.
   */
  merchant_category_code: string;

  /**
   * The city name of the merchant (generally your business) sending the transfer.
   */
  merchant_city_name: string;

  /**
   * The merchant name shows up as the statement descriptor for the transfer. This is
   * typically the name of your business or organization.
   */
  merchant_name: string;

  /**
   * For certain Business Application Identifiers, the statement descriptor is
   * `merchant_name_prefix*sender_name`, where the `merchant_name_prefix` is a one to
   * four character prefix that identifies the merchant.
   */
  merchant_name_prefix: string;

  /**
   * The postal code of the merchant (generally your business) sending the transfer.
   */
  merchant_postal_code: string;

  /**
   * The state of the merchant (generally your business) sending the transfer.
   */
  merchant_state: string;

  /**
   * The amount that was transferred. The receiving bank will have converted this to
   * the cardholder's currency. The amount that is applied to your Increase account
   * matches the currency of your account.
   */
  presentment_amount: CardPushTransfer.PresentmentAmount;

  /**
   * The name of the funds recipient.
   */
  recipient_name: string;

  /**
   * The city of the sender.
   */
  sender_address_city: string;

  /**
   * The address line 1 of the sender.
   */
  sender_address_line1: string;

  /**
   * The postal code of the sender.
   */
  sender_address_postal_code: string;

  /**
   * The state of the sender.
   */
  sender_address_state: string;

  /**
   * The name of the funds originator.
   */
  sender_name: string;

  /**
   * The Account Number the recipient will see as having sent the transfer.
   */
  source_account_number_id: string;

  /**
   * The lifecycle status of the transfer.
   *
   * - `pending_approval` - The transfer is pending approval.
   * - `canceled` - The transfer has been canceled.
   * - `pending_reviewing` - The transfer is pending review by Increase.
   * - `requires_attention` - The transfer requires attention from an Increase
   *   operator.
   * - `pending_submission` - The transfer is queued to be submitted to the card
   *   network.
   * - `submitted` - The transfer has been submitted and is pending a response from
   *   the card network.
   * - `complete` - The transfer has been sent successfully and is complete.
   * - `declined` - The transfer was declined by the network or the recipient's bank.
   */
  status:
    | 'pending_approval'
    | 'canceled'
    | 'pending_reviewing'
    | 'requires_attention'
    | 'pending_submission'
    | 'submitted'
    | 'complete'
    | 'declined';

  /**
   * After the transfer is submitted to the card network, this will contain
   * supplemental details.
   */
  submission: CardPushTransfer.Submission | null;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `card_push_transfer`.
   */
  type: 'card_push_transfer';

  [k: string]: unknown;
}

export namespace CardPushTransfer {
  /**
   * If the transfer is accepted by the recipient bank, this will contain
   * supplemental details.
   */
  export interface Acceptance {
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
     * the transfer was accepted by the issuing bank.
     */
    accepted_at: string;

    /**
     * The authorization identification response from the issuing bank.
     */
    authorization_identification_response: string;

    /**
     * The result of the Card Verification Value 2 match.
     *
     * - `match` - The Card Verification Value 2 (CVV2) matches the expected value.
     * - `no_match` - The Card Verification Value 2 (CVV2) does not match the expected
     *   value.
     */
    card_verification_value2_result: 'match' | 'no_match' | null;

    /**
     * A unique identifier for the transaction on the card network.
     */
    network_transaction_identifier: string | null;

    /**
     * The transfer amount in USD cents.
     */
    settlement_amount: number;
  }

  /**
   * If your account requires approvals for transfers and the transfer was approved,
   * this will contain details of the approval.
   */
  export interface Approval {
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
     * the transfer was approved.
     */
    approved_at: string;

    /**
     * If the Transfer was approved by a user in the dashboard, the email address of
     * that user.
     */
    approved_by: string | null;
  }

  /**
   * If your account requires approvals for transfers and the transfer was not
   * approved, this will contain details of the cancellation.
   */
  export interface Cancellation {
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
     * the Transfer was canceled.
     */
    canceled_at: string;

    /**
     * If the Transfer was canceled by a user in the dashboard, the email address of
     * that user.
     */
    canceled_by: string | null;
  }

  /**
   * What object created the transfer, either via the API or the dashboard.
   */
  export interface CreatedBy {
    /**
     * The type of object that created this transfer.
     *
     * - `api_key` - An API key. Details will be under the `api_key` object.
     * - `oauth_application` - An OAuth application you connected to Increase. Details
     *   will be under the `oauth_application` object.
     * - `user` - A User in the Increase dashboard. Details will be under the `user`
     *   object.
     */
    category: 'api_key' | 'oauth_application' | 'user';

    /**
     * If present, details about the API key that created the transfer.
     */
    api_key?: CreatedBy.APIKey | null;

    /**
     * If present, details about the OAuth Application that created the transfer.
     */
    oauth_application?: CreatedBy.OAuthApplication | null;

    /**
     * If present, details about the User that created the transfer.
     */
    user?: CreatedBy.User | null;
  }

  export namespace CreatedBy {
    /**
     * If present, details about the API key that created the transfer.
     */
    export interface APIKey {
      /**
       * The description set for the API key when it was created.
       */
      description: string | null;
    }

    /**
     * If present, details about the OAuth Application that created the transfer.
     */
    export interface OAuthApplication {
      /**
       * The name of the OAuth Application.
       */
      name: string;
    }

    /**
     * If present, details about the User that created the transfer.
     */
    export interface User {
      /**
       * The email address of the User.
       */
      email: string;
    }
  }

  /**
   * If the transfer is rejected by the card network or the destination financial
   * institution, this will contain supplemental details.
   */
  export interface Decline {
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
     * the transfer declined.
     */
    declined_at: string;

    /**
     * A unique identifier for the transaction on the card network.
     */
    network_transaction_identifier: string | null;

    /**
     * The reason why the transfer was declined.
     *
     * - `do_not_honor` - The card issuer has declined the transaction without
     *   providing a specific reason.
     * - `activity_count_limit_exceeded` - The number of transactions for the card has
     *   exceeded the limit set by the issuer.
     * - `refer_to_card_issuer` - The card issuer requires the cardholder to contact
     *   them for further information regarding the transaction.
     * - `refer_to_card_issuer_special_condition` - The card issuer requires the
     *   cardholder to contact them due to a special condition related to the
     *   transaction.
     * - `invalid_merchant` - The merchant is not valid for this transaction.
     * - `pick_up_card` - The card should be retained by the terminal.
     * - `error` - An error occurred during processing of the transaction.
     * - `pick_up_card_special` - The card should be retained by the terminal due to a
     *   special condition.
     * - `invalid_transaction` - The transaction is invalid and cannot be processed.
     * - `invalid_amount` - The amount of the transaction is invalid.
     * - `invalid_account_number` - The account number provided is invalid.
     * - `no_such_issuer` - The issuer of the card could not be found.
     * - `re_enter_transaction` - The transaction should be re-entered for processing.
     * - `no_credit_account` - There is no credit account associated with the card.
     * - `pick_up_card_lost` - The card should be retained by the terminal because it
     *   has been reported lost.
     * - `pick_up_card_stolen` - The card should be retained by the terminal because it
     *   has been reported stolen.
     * - `closed_account` - The account associated with the card has been closed.
     * - `insufficient_funds` - There are insufficient funds in the account to complete
     *   the transaction.
     * - `no_checking_account` - There is no checking account associated with the card.
     * - `no_savings_account` - There is no savings account associated with the card.
     * - `expired_card` - The card has expired and cannot be used for transactions.
     * - `transaction_not_permitted_to_cardholder` - The transaction is not permitted
     *   for this cardholder.
     * - `transaction_not_allowed_at_terminal` - The transaction is not allowed at this
     *   terminal.
     * - `suspected_fraud` - The transaction has been flagged as suspected fraud and
     *   cannot be processed.
     * - `activity_amount_limit_exceeded` - The amount of activity on the card has
     *   exceeded the limit set by the issuer.
     * - `restricted_card` - The card has restrictions that prevent it from being used
     *   for this transaction.
     * - `security_violation` - A security violation has occurred, preventing the
     *   transaction from being processed.
     * - `transaction_does_not_fulfill_anti_money_laundering_requirement` - The
     *   transaction does not meet the anti-money laundering requirements set by the
     *   issuer.
     * - `blocked_first_use` - The first use of the card has been blocked by the
     *   issuer.
     * - `credit_issuer_unavailable` - The credit issuer is currently unavailable to
     *   process the transaction.
     * - `negative_card_verification_value_results` - The card verification value (CVV)
     *   results were negative, indicating a potential issue with the card.
     * - `issuer_unavailable` - The issuer of the card is currently unavailable to
     *   process the transaction.
     * - `financial_institution_cannot_be_found` - The financial institution associated
     *   with the card could not be found.
     * - `transaction_cannot_be_completed` - The transaction cannot be completed due to
     *   an unspecified reason.
     * - `duplicate_transaction` - The transaction is a duplicate of a previous
     *   transaction and cannot be processed again.
     * - `system_malfunction` - A system malfunction occurred, preventing the
     *   transaction from being processed.
     * - `additional_customer_authentication_required` - Additional customer
     *   authentication is required to complete the transaction.
     * - `surcharge_amount_not_permitted` - The surcharge amount applied to the
     *   transaction is not permitted by the issuer.
     * - `decline_for_cvv2_failure` - The transaction was declined due to a failure in
     *   verifying the CVV2 code.
     * - `stop_payment_order` - A stop payment order has been placed on this
     *   transaction.
     * - `revocation_of_authorization_order` - An order has been placed to revoke
     *   authorization for this transaction.
     * - `revocation_of_all_authorizations_order` - An order has been placed to revoke
     *   all authorizations for this cardholder.
     */
    reason:
      | 'do_not_honor'
      | 'activity_count_limit_exceeded'
      | 'refer_to_card_issuer'
      | 'refer_to_card_issuer_special_condition'
      | 'invalid_merchant'
      | 'pick_up_card'
      | 'error'
      | 'pick_up_card_special'
      | 'invalid_transaction'
      | 'invalid_amount'
      | 'invalid_account_number'
      | 'no_such_issuer'
      | 're_enter_transaction'
      | 'no_credit_account'
      | 'pick_up_card_lost'
      | 'pick_up_card_stolen'
      | 'closed_account'
      | 'insufficient_funds'
      | 'no_checking_account'
      | 'no_savings_account'
      | 'expired_card'
      | 'transaction_not_permitted_to_cardholder'
      | 'transaction_not_allowed_at_terminal'
      | 'suspected_fraud'
      | 'activity_amount_limit_exceeded'
      | 'restricted_card'
      | 'security_violation'
      | 'transaction_does_not_fulfill_anti_money_laundering_requirement'
      | 'blocked_first_use'
      | 'credit_issuer_unavailable'
      | 'negative_card_verification_value_results'
      | 'issuer_unavailable'
      | 'financial_institution_cannot_be_found'
      | 'transaction_cannot_be_completed'
      | 'duplicate_transaction'
      | 'system_malfunction'
      | 'additional_customer_authentication_required'
      | 'surcharge_amount_not_permitted'
      | 'decline_for_cvv2_failure'
      | 'stop_payment_order'
      | 'revocation_of_authorization_order'
      | 'revocation_of_all_authorizations_order';
  }

  /**
   * The amount that was transferred. The receiving bank will have converted this to
   * the cardholder's currency. The amount that is applied to your Increase account
   * matches the currency of your account.
   */
  export interface PresentmentAmount {
    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code.
     *
     * - `AFN` - AFN
     * - `EUR` - EUR
     * - `ALL` - ALL
     * - `DZD` - DZD
     * - `USD` - USD
     * - `AOA` - AOA
     * - `ARS` - ARS
     * - `AMD` - AMD
     * - `AWG` - AWG
     * - `AUD` - AUD
     * - `AZN` - AZN
     * - `BSD` - BSD
     * - `BHD` - BHD
     * - `BDT` - BDT
     * - `BBD` - BBD
     * - `BYN` - BYN
     * - `BZD` - BZD
     * - `BMD` - BMD
     * - `INR` - INR
     * - `BTN` - BTN
     * - `BOB` - BOB
     * - `BOV` - BOV
     * - `BAM` - BAM
     * - `BWP` - BWP
     * - `NOK` - NOK
     * - `BRL` - BRL
     * - `BND` - BND
     * - `BGN` - BGN
     * - `BIF` - BIF
     * - `CVE` - CVE
     * - `KHR` - KHR
     * - `CAD` - CAD
     * - `KYD` - KYD
     * - `CLP` - CLP
     * - `CLF` - CLF
     * - `CNY` - CNY
     * - `COP` - COP
     * - `COU` - COU
     * - `KMF` - KMF
     * - `CDF` - CDF
     * - `NZD` - NZD
     * - `CRC` - CRC
     * - `CUP` - CUP
     * - `CZK` - CZK
     * - `DKK` - DKK
     * - `DJF` - DJF
     * - `DOP` - DOP
     * - `EGP` - EGP
     * - `SVC` - SVC
     * - `ERN` - ERN
     * - `SZL` - SZL
     * - `ETB` - ETB
     * - `FKP` - FKP
     * - `FJD` - FJD
     * - `GMD` - GMD
     * - `GEL` - GEL
     * - `GHS` - GHS
     * - `GIP` - GIP
     * - `GTQ` - GTQ
     * - `GBP` - GBP
     * - `GNF` - GNF
     * - `GYD` - GYD
     * - `HTG` - HTG
     * - `HNL` - HNL
     * - `HKD` - HKD
     * - `HUF` - HUF
     * - `ISK` - ISK
     * - `IDR` - IDR
     * - `IRR` - IRR
     * - `IQD` - IQD
     * - `ILS` - ILS
     * - `JMD` - JMD
     * - `JPY` - JPY
     * - `JOD` - JOD
     * - `KZT` - KZT
     * - `KES` - KES
     * - `KPW` - KPW
     * - `KRW` - KRW
     * - `KWD` - KWD
     * - `KGS` - KGS
     * - `LAK` - LAK
     * - `LBP` - LBP
     * - `LSL` - LSL
     * - `ZAR` - ZAR
     * - `LRD` - LRD
     * - `LYD` - LYD
     * - `CHF` - CHF
     * - `MOP` - MOP
     * - `MKD` - MKD
     * - `MGA` - MGA
     * - `MWK` - MWK
     * - `MYR` - MYR
     * - `MVR` - MVR
     * - `MRU` - MRU
     * - `MUR` - MUR
     * - `MXN` - MXN
     * - `MXV` - MXV
     * - `MDL` - MDL
     * - `MNT` - MNT
     * - `MAD` - MAD
     * - `MZN` - MZN
     * - `MMK` - MMK
     * - `NAD` - NAD
     * - `NPR` - NPR
     * - `NIO` - NIO
     * - `NGN` - NGN
     * - `OMR` - OMR
     * - `PKR` - PKR
     * - `PAB` - PAB
     * - `PGK` - PGK
     * - `PYG` - PYG
     * - `PEN` - PEN
     * - `PHP` - PHP
     * - `PLN` - PLN
     * - `QAR` - QAR
     * - `RON` - RON
     * - `RUB` - RUB
     * - `RWF` - RWF
     * - `SHP` - SHP
     * - `WST` - WST
     * - `STN` - STN
     * - `SAR` - SAR
     * - `RSD` - RSD
     * - `SCR` - SCR
     * - `SLE` - SLE
     * - `SGD` - SGD
     * - `SBD` - SBD
     * - `SOS` - SOS
     * - `SSP` - SSP
     * - `LKR` - LKR
     * - `SDG` - SDG
     * - `SRD` - SRD
     * - `SEK` - SEK
     * - `CHE` - CHE
     * - `CHW` - CHW
     * - `SYP` - SYP
     * - `TWD` - TWD
     * - `TJS` - TJS
     * - `TZS` - TZS
     * - `THB` - THB
     * - `TOP` - TOP
     * - `TTD` - TTD
     * - `TND` - TND
     * - `TRY` - TRY
     * - `TMT` - TMT
     * - `UGX` - UGX
     * - `UAH` - UAH
     * - `AED` - AED
     * - `USN` - USN
     * - `UYU` - UYU
     * - `UYI` - UYI
     * - `UYW` - UYW
     * - `UZS` - UZS
     * - `VUV` - VUV
     * - `VES` - VES
     * - `VED` - VED
     * - `VND` - VND
     * - `YER` - YER
     * - `ZMW` - ZMW
     * - `ZWG` - ZWG
     */
    currency:
      | 'AFN'
      | 'EUR'
      | 'ALL'
      | 'DZD'
      | 'USD'
      | 'AOA'
      | 'ARS'
      | 'AMD'
      | 'AWG'
      | 'AUD'
      | 'AZN'
      | 'BSD'
      | 'BHD'
      | 'BDT'
      | 'BBD'
      | 'BYN'
      | 'BZD'
      | 'BMD'
      | 'INR'
      | 'BTN'
      | 'BOB'
      | 'BOV'
      | 'BAM'
      | 'BWP'
      | 'NOK'
      | 'BRL'
      | 'BND'
      | 'BGN'
      | 'BIF'
      | 'CVE'
      | 'KHR'
      | 'CAD'
      | 'KYD'
      | 'CLP'
      | 'CLF'
      | 'CNY'
      | 'COP'
      | 'COU'
      | 'KMF'
      | 'CDF'
      | 'NZD'
      | 'CRC'
      | 'CUP'
      | 'CZK'
      | 'DKK'
      | 'DJF'
      | 'DOP'
      | 'EGP'
      | 'SVC'
      | 'ERN'
      | 'SZL'
      | 'ETB'
      | 'FKP'
      | 'FJD'
      | 'GMD'
      | 'GEL'
      | 'GHS'
      | 'GIP'
      | 'GTQ'
      | 'GBP'
      | 'GNF'
      | 'GYD'
      | 'HTG'
      | 'HNL'
      | 'HKD'
      | 'HUF'
      | 'ISK'
      | 'IDR'
      | 'IRR'
      | 'IQD'
      | 'ILS'
      | 'JMD'
      | 'JPY'
      | 'JOD'
      | 'KZT'
      | 'KES'
      | 'KPW'
      | 'KRW'
      | 'KWD'
      | 'KGS'
      | 'LAK'
      | 'LBP'
      | 'LSL'
      | 'ZAR'
      | 'LRD'
      | 'LYD'
      | 'CHF'
      | 'MOP'
      | 'MKD'
      | 'MGA'
      | 'MWK'
      | 'MYR'
      | 'MVR'
      | 'MRU'
      | 'MUR'
      | 'MXN'
      | 'MXV'
      | 'MDL'
      | 'MNT'
      | 'MAD'
      | 'MZN'
      | 'MMK'
      | 'NAD'
      | 'NPR'
      | 'NIO'
      | 'NGN'
      | 'OMR'
      | 'PKR'
      | 'PAB'
      | 'PGK'
      | 'PYG'
      | 'PEN'
      | 'PHP'
      | 'PLN'
      | 'QAR'
      | 'RON'
      | 'RUB'
      | 'RWF'
      | 'SHP'
      | 'WST'
      | 'STN'
      | 'SAR'
      | 'RSD'
      | 'SCR'
      | 'SLE'
      | 'SGD'
      | 'SBD'
      | 'SOS'
      | 'SSP'
      | 'LKR'
      | 'SDG'
      | 'SRD'
      | 'SEK'
      | 'CHE'
      | 'CHW'
      | 'SYP'
      | 'TWD'
      | 'TJS'
      | 'TZS'
      | 'THB'
      | 'TOP'
      | 'TTD'
      | 'TND'
      | 'TRY'
      | 'TMT'
      | 'UGX'
      | 'UAH'
      | 'AED'
      | 'USN'
      | 'UYU'
      | 'UYI'
      | 'UYW'
      | 'UZS'
      | 'VUV'
      | 'VES'
      | 'VED'
      | 'VND'
      | 'YER'
      | 'ZMW'
      | 'ZWG';

    /**
     * The amount value represented as a string containing a decimal number in major
     * units (so e.g., "12.34" for $12.34).
     */
    value: string;
  }

  /**
   * After the transfer is submitted to the card network, this will contain
   * supplemental details.
   */
  export interface Submission {
    /**
     * A 12-digit retrieval reference number that identifies the transfer. Usually a
     * combination of a timestamp and the trace number.
     */
    retrieval_reference_number: string;

    /**
     * A unique reference for the transfer.
     */
    sender_reference: string;

    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
     * the transfer was submitted to card network.
     */
    submitted_at: string;

    /**
     * A 6-digit trace number that identifies the transfer within a small window of
     * time.
     */
    trace_number: string;
  }
}

export interface CardPushTransferCreateParams {
  /**
   * The Business Application Identifier describes the type of transaction being
   * performed. Your program must be approved for the specified Business Application
   * Identifier in order to use it.
   *
   * - `account_to_account` - Account to Account
   * - `business_to_business` - Business to Business
   * - `money_transfer_bank_initiated` - Money Transfer Bank Initiated
   * - `non_card_bill_payment` - Non-Card Bill Payment
   * - `consumer_bill_payment` - Consumer Bill Payment
   * - `card_bill_payment` - Card Bill Payment
   * - `funds_disbursement` - Funds Disbursement
   * - `funds_transfer` - Funds Transfer
   * - `loyalty_and_offers` - Loyalty and Offers
   * - `merchant_disbursement` - Merchant Disbursement
   * - `merchant_payment` - Merchant Payment
   * - `person_to_person` - Person to Person
   * - `top_up` - Top Up
   * - `wallet_transfer` - Wallet Transfer
   */
  business_application_identifier:
    | 'account_to_account'
    | 'business_to_business'
    | 'money_transfer_bank_initiated'
    | 'non_card_bill_payment'
    | 'consumer_bill_payment'
    | 'card_bill_payment'
    | 'funds_disbursement'
    | 'funds_transfer'
    | 'loyalty_and_offers'
    | 'merchant_disbursement'
    | 'merchant_payment'
    | 'person_to_person'
    | 'top_up'
    | 'wallet_transfer';

  /**
   * The Increase identifier for the Card Token that represents the card number
   * you're pushing funds to.
   */
  card_token_id: string;

  /**
   * The merchant category code (MCC) of the merchant (generally your business)
   * sending the transfer. This is a four-digit code that describes the type of
   * business or service provided by the merchant. Your program must be approved for
   * the specified MCC in order to use it.
   */
  merchant_category_code: string;

  /**
   * The city name of the merchant (generally your business) sending the transfer.
   */
  merchant_city_name: string;

  /**
   * The merchant name shows up as the statement descriptor for the transfer. This is
   * typically the name of your business or organization.
   */
  merchant_name: string;

  /**
   * For certain Business Application Identifiers, the statement descriptor is
   * `merchant_name_prefix*sender_name`, where the `merchant_name_prefix` is a one to
   * four character prefix that identifies the merchant.
   */
  merchant_name_prefix: string;

  /**
   * The postal code of the merchant (generally your business) sending the transfer.
   */
  merchant_postal_code: string;

  /**
   * The state of the merchant (generally your business) sending the transfer.
   */
  merchant_state: string;

  /**
   * The amount to transfer. The receiving bank will convert this to the cardholder's
   * currency. The amount that is applied to your Increase account matches the
   * currency of your account.
   */
  presentment_amount: CardPushTransferCreateParams.PresentmentAmount;

  /**
   * The name of the funds recipient.
   */
  recipient_name: string;

  /**
   * The city of the sender.
   */
  sender_address_city: string;

  /**
   * The address line 1 of the sender.
   */
  sender_address_line1: string;

  /**
   * The postal code of the sender.
   */
  sender_address_postal_code: string;

  /**
   * The state of the sender.
   */
  sender_address_state: string;

  /**
   * The name of the funds originator.
   */
  sender_name: string;

  /**
   * The identifier of the Account Number from which to send the transfer.
   */
  source_account_number_id: string;

  /**
   * Whether the transfer requires explicit approval via the dashboard or API.
   */
  require_approval?: boolean;

  [k: string]: unknown;
}

export namespace CardPushTransferCreateParams {
  /**
   * The amount to transfer. The receiving bank will convert this to the cardholder's
   * currency. The amount that is applied to your Increase account matches the
   * currency of your account.
   */
  export interface PresentmentAmount {
    /**
     * The ISO 4217 currency code representing the currency of the amount.
     *
     * - `AFN` - AFN
     * - `EUR` - EUR
     * - `ALL` - ALL
     * - `DZD` - DZD
     * - `USD` - USD
     * - `AOA` - AOA
     * - `ARS` - ARS
     * - `AMD` - AMD
     * - `AWG` - AWG
     * - `AUD` - AUD
     * - `AZN` - AZN
     * - `BSD` - BSD
     * - `BHD` - BHD
     * - `BDT` - BDT
     * - `BBD` - BBD
     * - `BYN` - BYN
     * - `BZD` - BZD
     * - `BMD` - BMD
     * - `INR` - INR
     * - `BTN` - BTN
     * - `BOB` - BOB
     * - `BOV` - BOV
     * - `BAM` - BAM
     * - `BWP` - BWP
     * - `NOK` - NOK
     * - `BRL` - BRL
     * - `BND` - BND
     * - `BGN` - BGN
     * - `BIF` - BIF
     * - `CVE` - CVE
     * - `KHR` - KHR
     * - `CAD` - CAD
     * - `KYD` - KYD
     * - `CLP` - CLP
     * - `CLF` - CLF
     * - `CNY` - CNY
     * - `COP` - COP
     * - `COU` - COU
     * - `KMF` - KMF
     * - `CDF` - CDF
     * - `NZD` - NZD
     * - `CRC` - CRC
     * - `CUP` - CUP
     * - `CZK` - CZK
     * - `DKK` - DKK
     * - `DJF` - DJF
     * - `DOP` - DOP
     * - `EGP` - EGP
     * - `SVC` - SVC
     * - `ERN` - ERN
     * - `SZL` - SZL
     * - `ETB` - ETB
     * - `FKP` - FKP
     * - `FJD` - FJD
     * - `GMD` - GMD
     * - `GEL` - GEL
     * - `GHS` - GHS
     * - `GIP` - GIP
     * - `GTQ` - GTQ
     * - `GBP` - GBP
     * - `GNF` - GNF
     * - `GYD` - GYD
     * - `HTG` - HTG
     * - `HNL` - HNL
     * - `HKD` - HKD
     * - `HUF` - HUF
     * - `ISK` - ISK
     * - `IDR` - IDR
     * - `IRR` - IRR
     * - `IQD` - IQD
     * - `ILS` - ILS
     * - `JMD` - JMD
     * - `JPY` - JPY
     * - `JOD` - JOD
     * - `KZT` - KZT
     * - `KES` - KES
     * - `KPW` - KPW
     * - `KRW` - KRW
     * - `KWD` - KWD
     * - `KGS` - KGS
     * - `LAK` - LAK
     * - `LBP` - LBP
     * - `LSL` - LSL
     * - `ZAR` - ZAR
     * - `LRD` - LRD
     * - `LYD` - LYD
     * - `CHF` - CHF
     * - `MOP` - MOP
     * - `MKD` - MKD
     * - `MGA` - MGA
     * - `MWK` - MWK
     * - `MYR` - MYR
     * - `MVR` - MVR
     * - `MRU` - MRU
     * - `MUR` - MUR
     * - `MXN` - MXN
     * - `MXV` - MXV
     * - `MDL` - MDL
     * - `MNT` - MNT
     * - `MAD` - MAD
     * - `MZN` - MZN
     * - `MMK` - MMK
     * - `NAD` - NAD
     * - `NPR` - NPR
     * - `NIO` - NIO
     * - `NGN` - NGN
     * - `OMR` - OMR
     * - `PKR` - PKR
     * - `PAB` - PAB
     * - `PGK` - PGK
     * - `PYG` - PYG
     * - `PEN` - PEN
     * - `PHP` - PHP
     * - `PLN` - PLN
     * - `QAR` - QAR
     * - `RON` - RON
     * - `RUB` - RUB
     * - `RWF` - RWF
     * - `SHP` - SHP
     * - `WST` - WST
     * - `STN` - STN
     * - `SAR` - SAR
     * - `RSD` - RSD
     * - `SCR` - SCR
     * - `SLE` - SLE
     * - `SGD` - SGD
     * - `SBD` - SBD
     * - `SOS` - SOS
     * - `SSP` - SSP
     * - `LKR` - LKR
     * - `SDG` - SDG
     * - `SRD` - SRD
     * - `SEK` - SEK
     * - `CHE` - CHE
     * - `CHW` - CHW
     * - `SYP` - SYP
     * - `TWD` - TWD
     * - `TJS` - TJS
     * - `TZS` - TZS
     * - `THB` - THB
     * - `TOP` - TOP
     * - `TTD` - TTD
     * - `TND` - TND
     * - `TRY` - TRY
     * - `TMT` - TMT
     * - `UGX` - UGX
     * - `UAH` - UAH
     * - `AED` - AED
     * - `USN` - USN
     * - `UYU` - UYU
     * - `UYI` - UYI
     * - `UYW` - UYW
     * - `UZS` - UZS
     * - `VUV` - VUV
     * - `VES` - VES
     * - `VED` - VED
     * - `VND` - VND
     * - `YER` - YER
     * - `ZMW` - ZMW
     * - `ZWG` - ZWG
     */
    currency:
      | 'AFN'
      | 'EUR'
      | 'ALL'
      | 'DZD'
      | 'USD'
      | 'AOA'
      | 'ARS'
      | 'AMD'
      | 'AWG'
      | 'AUD'
      | 'AZN'
      | 'BSD'
      | 'BHD'
      | 'BDT'
      | 'BBD'
      | 'BYN'
      | 'BZD'
      | 'BMD'
      | 'INR'
      | 'BTN'
      | 'BOB'
      | 'BOV'
      | 'BAM'
      | 'BWP'
      | 'NOK'
      | 'BRL'
      | 'BND'
      | 'BGN'
      | 'BIF'
      | 'CVE'
      | 'KHR'
      | 'CAD'
      | 'KYD'
      | 'CLP'
      | 'CLF'
      | 'CNY'
      | 'COP'
      | 'COU'
      | 'KMF'
      | 'CDF'
      | 'NZD'
      | 'CRC'
      | 'CUP'
      | 'CZK'
      | 'DKK'
      | 'DJF'
      | 'DOP'
      | 'EGP'
      | 'SVC'
      | 'ERN'
      | 'SZL'
      | 'ETB'
      | 'FKP'
      | 'FJD'
      | 'GMD'
      | 'GEL'
      | 'GHS'
      | 'GIP'
      | 'GTQ'
      | 'GBP'
      | 'GNF'
      | 'GYD'
      | 'HTG'
      | 'HNL'
      | 'HKD'
      | 'HUF'
      | 'ISK'
      | 'IDR'
      | 'IRR'
      | 'IQD'
      | 'ILS'
      | 'JMD'
      | 'JPY'
      | 'JOD'
      | 'KZT'
      | 'KES'
      | 'KPW'
      | 'KRW'
      | 'KWD'
      | 'KGS'
      | 'LAK'
      | 'LBP'
      | 'LSL'
      | 'ZAR'
      | 'LRD'
      | 'LYD'
      | 'CHF'
      | 'MOP'
      | 'MKD'
      | 'MGA'
      | 'MWK'
      | 'MYR'
      | 'MVR'
      | 'MRU'
      | 'MUR'
      | 'MXN'
      | 'MXV'
      | 'MDL'
      | 'MNT'
      | 'MAD'
      | 'MZN'
      | 'MMK'
      | 'NAD'
      | 'NPR'
      | 'NIO'
      | 'NGN'
      | 'OMR'
      | 'PKR'
      | 'PAB'
      | 'PGK'
      | 'PYG'
      | 'PEN'
      | 'PHP'
      | 'PLN'
      | 'QAR'
      | 'RON'
      | 'RUB'
      | 'RWF'
      | 'SHP'
      | 'WST'
      | 'STN'
      | 'SAR'
      | 'RSD'
      | 'SCR'
      | 'SLE'
      | 'SGD'
      | 'SBD'
      | 'SOS'
      | 'SSP'
      | 'LKR'
      | 'SDG'
      | 'SRD'
      | 'SEK'
      | 'CHE'
      | 'CHW'
      | 'SYP'
      | 'TWD'
      | 'TJS'
      | 'TZS'
      | 'THB'
      | 'TOP'
      | 'TTD'
      | 'TND'
      | 'TRY'
      | 'TMT'
      | 'UGX'
      | 'UAH'
      | 'AED'
      | 'USN'
      | 'UYU'
      | 'UYI'
      | 'UYW'
      | 'UZS'
      | 'VUV'
      | 'VES'
      | 'VED'
      | 'VND'
      | 'YER'
      | 'ZMW'
      | 'ZWG';

    /**
     * The amount value as a decimal string in the currency's major unit. For example,
     * for USD, '1234.56' represents 1234 dollars and 56 cents. For JPY, '1234'
     * represents 1234 yen. A currency with minor units requires at least one decimal
     * place and supports up to the number of decimal places defined by the currency's
     * minor units. A currency without minor units does not support any decimal places.
     */
    value: string;
  }
}

export interface CardPushTransferListParams extends PageParams {
  /**
   * Filter Card Push Transfers to ones belonging to the specified Account.
   */
  account_id?: string;

  created_at?: CardPushTransferListParams.CreatedAt;

  /**
   * Filter records to the one with the specified `idempotency_key` you chose for
   * that object. This value is unique across Increase and is used to ensure that a
   * request is only processed once. Learn more about
   * [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key?: string;

  status?: CardPushTransferListParams.Status;
}

export namespace CardPushTransferListParams {
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
     * Filter Card Push Transfers by status. For GET requests, this should be encoded
     * as a comma-delimited string, such as `?in=one,two,three`.
     */
    in?: Array<
      | 'pending_approval'
      | 'canceled'
      | 'pending_reviewing'
      | 'requires_attention'
      | 'pending_submission'
      | 'submitted'
      | 'complete'
      | 'declined'
    >;
  }
}

export declare namespace CardPushTransfers {
  export {
    type CardPushTransfer as CardPushTransfer,
    type CardPushTransfersPage as CardPushTransfersPage,
    type CardPushTransferCreateParams as CardPushTransferCreateParams,
    type CardPushTransferListParams as CardPushTransferListParams,
  };
}
