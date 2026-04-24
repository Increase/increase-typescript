// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class CardValidations extends APIResource {
  /**
   * Create a Card Validation
   *
   * @example
   * ```ts
   * const cardValidation = await client.cardValidations.create({
   *   account_id: 'account_in71c4amph0vgo2qllky',
   *   card_token_id: 'outbound_card_token_zlt0ml6youq3q7vcdlg0',
   *   merchant_category_code: '1234',
   *   merchant_city_name: 'New York',
   *   merchant_name: 'Acme Corp',
   *   merchant_postal_code: '10045',
   *   merchant_state: 'NY',
   * });
   * ```
   */
  create(body: CardValidationCreateParams, options?: RequestOptions): APIPromise<CardValidation> {
    return this._client.post('/card_validations', { body, ...options });
  }

  /**
   * Retrieve a Card Validation
   *
   * @example
   * ```ts
   * const cardValidation =
   *   await client.cardValidations.retrieve(
   *     'outbound_card_validation_qqlzagpc6v1x2gcdhe24',
   *   );
   * ```
   */
  retrieve(cardValidationID: string, options?: RequestOptions): APIPromise<CardValidation> {
    return this._client.get(path`/card_validations/${cardValidationID}`, options);
  }

  /**
   * List Card Validations
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const cardValidation of client.cardValidations.list()) {
   *   // ...
   * }
   * ```
   */
  list(query: CardValidationListParams | null | undefined = {}, options?: RequestOptions): PagePromise<CardValidationsPage, CardValidation> {
    return this._client.getAPIList('/card_validations', Page<CardValidation>, { query, ...options });
  }
}

export type CardValidationsPage = Page<CardValidation>

/**
 * Card Validations are used to validate a card and its cardholder before sending
 * funds to or pulling funds from a card.
 */
export interface CardValidation {
  /**
   * The Card Validation's identifier.
   */
  id: string;

  /**
   * If the validation is accepted by the recipient bank, this will contain
   * supplemental details.
   */
  acceptance: CardValidation.Acceptance | null;

  /**
   * The identifier of the Account from which to send the validation.
   */
  account_id: string;

  /**
   * The ID of the Card Token that was used to validate the card.
   */
  card_token_id: string;

  /**
   * The cardholder's first name.
   */
  cardholder_first_name: string | null;

  /**
   * The cardholder's last name.
   */
  cardholder_last_name: string | null;

  /**
   * The cardholder's middle name.
   */
  cardholder_middle_name: string | null;

  /**
   * The postal code of the cardholder's address.
   */
  cardholder_postal_code: string | null;

  /**
   * The cardholder's street address.
   */
  cardholder_street_address: string | null;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the validation was created.
   */
  created_at: string;

  /**
   * What object created the validation, either via the API or the dashboard.
   */
  created_by: CardValidation.CreatedBy | null;

  /**
   * If the validation is rejected by the card network or the destination financial
   * institution, this will contain supplemental details.
   */
  decline: CardValidation.Decline | null;

  /**
   * The idempotency key you chose for this object. This value is unique across
   * Increase and is used to ensure that a request is only processed once. Learn more
   * about [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key: string | null;

  /**
   * A four-digit code (MCC) identifying the type of business or service provided by
   * the merchant.
   */
  merchant_category_code: string;

  /**
   * The city where the merchant (typically your business) is located.
   */
  merchant_city_name: string;

  /**
   * The merchant name that will appear in the cardholder’s statement descriptor.
   * Typically your business name.
   */
  merchant_name: string;

  /**
   * The postal code for the merchant’s (typically your business’s) location.
   */
  merchant_postal_code: string;

  /**
   * The U.S. state where the merchant (typically your business) is located.
   */
  merchant_state: string;

  /**
   * The card network route used for the validation.
   *
   * - `visa` - Visa and Interlink
   * - `mastercard` - Mastercard and Maestro
   */
  route: 'visa' | 'mastercard';

  /**
   * The lifecycle status of the validation.
   *
   * - `requires_attention` - The validation requires attention from an Increase
   *   operator.
   * - `pending_submission` - The validation is queued to be submitted to the card
   *   network.
   * - `submitted` - The validation has been submitted and is pending a response from
   *   the card network.
   * - `complete` - The validation has been sent successfully and is complete.
   * - `declined` - The validation was declined by the network or the recipient's
   *   bank.
   */
  status: 'requires_attention' | 'pending_submission' | 'submitted' | 'complete' | 'declined';

  /**
   * After the validation is submitted to the card network, this will contain
   * supplemental details.
   */
  submission: CardValidation.Submission | null;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `card_validation`.
   */
  type: 'card_validation';

[k: string]: unknown
}

export namespace CardValidation {
  /**
   * If the validation is accepted by the recipient bank, this will contain
   * supplemental details.
   */
  export interface Acceptance {
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
     * the validation was accepted by the issuing bank.
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
     * The result of the cardholder first name match.
     *
     * - `match` - The cardholder name component matches the expected value.
     * - `no_match` - The cardholder name component does not match the expected value.
     * - `partial_match` - The cardholder name component partially matches the expected
     *   value.
     */
    cardholder_first_name_result: 'match' | 'no_match' | 'partial_match' | null;

    /**
     * The result of the cardholder full name match.
     *
     * - `match` - The cardholder name component matches the expected value.
     * - `no_match` - The cardholder name component does not match the expected value.
     * - `partial_match` - The cardholder name component partially matches the expected
     *   value.
     */
    cardholder_full_name_result: 'match' | 'no_match' | 'partial_match' | null;

    /**
     * The result of the cardholder last name match.
     *
     * - `match` - The cardholder name component matches the expected value.
     * - `no_match` - The cardholder name component does not match the expected value.
     * - `partial_match` - The cardholder name component partially matches the expected
     *   value.
     */
    cardholder_last_name_result: 'match' | 'no_match' | 'partial_match' | null;

    /**
     * The result of the cardholder middle name match.
     *
     * - `match` - The cardholder name component matches the expected value.
     * - `no_match` - The cardholder name component does not match the expected value.
     * - `partial_match` - The cardholder name component partially matches the expected
     *   value.
     */
    cardholder_middle_name_result: 'match' | 'no_match' | 'partial_match' | null;

    /**
     * The result of the cardholder postal code match.
     *
     * - `match` - The cardholder address component matches the expected value.
     * - `no_match` - The cardholder address component does not match the expected
     *   value.
     */
    cardholder_postal_code_result: 'match' | 'no_match' | null;

    /**
     * The result of the cardholder street address match.
     *
     * - `match` - The cardholder address component matches the expected value.
     * - `no_match` - The cardholder address component does not match the expected
     *   value.
     */
    cardholder_street_address_result: 'match' | 'no_match' | null;

    /**
     * A unique identifier for the transaction on the card network.
     */
    network_transaction_identifier: string | null;
  }

  /**
   * What object created the validation, either via the API or the dashboard.
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
   * If the validation is rejected by the card network or the destination financial
   * institution, this will contain supplemental details.
   */
  export interface Decline {
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
     * the validation was declined.
     */
    declined_at: string;

    /**
     * A unique identifier for the transaction on the card network.
     */
    network_transaction_identifier: string | null;

    /**
     * The reason why the validation was declined.
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
     * - `transaction_not_supported_or_blocked_by_issuer` - The transaction is not
     *   supported or has been blocked by the issuer.
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
     * - `blocked_by_cardholder` - The transaction was blocked by the cardholder.
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
     * - `unable_to_locate_record` - The record associated with the transaction could
     *   not be located.
     * - `file_is_temporarily_unavailable` - The file needed for the transaction is
     *   temporarily unavailable.
     * - `incorrect_pin` - The PIN entered for the transaction is incorrect.
     * - `allowable_number_of_pin_entry_tries_exceeded` - The allowable number of PIN
     *   entry tries has been exceeded.
     * - `unable_to_locate_previous_message` - The previous message associated with the
     *   transaction could not be located.
     * - `pin_error_found` - An error was found with the PIN associated with the
     *   transaction.
     * - `cannot_verify_pin` - The PIN associated with the transaction could not be
     *   verified.
     * - `verification_data_failed` - The verification data associated with the
     *   transaction has failed.
     * - `surcharge_amount_not_supported_by_debit_network_issuer` - The surcharge
     *   amount is not supported by the debit network issuer.
     * - `cash_service_not_available` - Cash service is not available for this
     *   transaction.
     * - `cashback_request_exceeds_issuer_limit` - The cashback request exceeds the
     *   issuer limit.
     * - `transaction_amount_exceeds_pre_authorized_approval_amount` - The transaction
     *   amount exceeds the pre-authorized approval amount.
     * - `transaction_does_not_qualify_for_visa_pin` - The transaction does not qualify
     *   for Visa PIN processing.
     * - `offline_declined` - The transaction was declined offline.
     * - `unable_to_go_online` - The terminal was unable to go online to process the
     *   transaction.
     * - `valid_account_but_amount_not_supported` - The account is valid but the
     *   transaction amount is not supported.
     * - `invalid_use_of_merchant_category_code_correct_and_reattempt` - The merchant
     *   category code was used incorrectly; correct it and reattempt the transaction.
     * - `card_authentication_failed` - The card authentication process has failed.
     */
    reason: 'do_not_honor' | 'activity_count_limit_exceeded' | 'refer_to_card_issuer' | 'refer_to_card_issuer_special_condition' | 'invalid_merchant' | 'pick_up_card' | 'error' | 'pick_up_card_special' | 'invalid_transaction' | 'invalid_amount' | 'invalid_account_number' | 'no_such_issuer' | 're_enter_transaction' | 'no_credit_account' | 'pick_up_card_lost' | 'pick_up_card_stolen' | 'closed_account' | 'insufficient_funds' | 'no_checking_account' | 'no_savings_account' | 'expired_card' | 'transaction_not_permitted_to_cardholder' | 'transaction_not_allowed_at_terminal' | 'transaction_not_supported_or_blocked_by_issuer' | 'suspected_fraud' | 'activity_amount_limit_exceeded' | 'restricted_card' | 'security_violation' | 'transaction_does_not_fulfill_anti_money_laundering_requirement' | 'blocked_by_cardholder' | 'blocked_first_use' | 'credit_issuer_unavailable' | 'negative_card_verification_value_results' | 'issuer_unavailable' | 'financial_institution_cannot_be_found' | 'transaction_cannot_be_completed' | 'duplicate_transaction' | 'system_malfunction' | 'additional_customer_authentication_required' | 'surcharge_amount_not_permitted' | 'decline_for_cvv2_failure' | 'stop_payment_order' | 'revocation_of_authorization_order' | 'revocation_of_all_authorizations_order' | 'unable_to_locate_record' | 'file_is_temporarily_unavailable' | 'incorrect_pin' | 'allowable_number_of_pin_entry_tries_exceeded' | 'unable_to_locate_previous_message' | 'pin_error_found' | 'cannot_verify_pin' | 'verification_data_failed' | 'surcharge_amount_not_supported_by_debit_network_issuer' | 'cash_service_not_available' | 'cashback_request_exceeds_issuer_limit' | 'transaction_amount_exceeds_pre_authorized_approval_amount' | 'transaction_does_not_qualify_for_visa_pin' | 'offline_declined' | 'unable_to_go_online' | 'valid_account_but_amount_not_supported' | 'invalid_use_of_merchant_category_code_correct_and_reattempt' | 'card_authentication_failed';
  }

  /**
   * After the validation is submitted to the card network, this will contain
   * supplemental details.
   */
  export interface Submission {
    /**
     * A 12-digit retrieval reference number that identifies the validation. Usually a
     * combination of a timestamp and the trace number.
     */
    retrieval_reference_number: string;

    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
     * the validation was submitted to the card network.
     */
    submitted_at: string;

    /**
     * A 6-digit trace number that identifies the validation within a short time
     * window.
     */
    trace_number: string;
  }
}

export interface CardValidationCreateParams {
  /**
   * The identifier of the Account from which to send the validation.
   */
  account_id: string;

  /**
   * The Increase identifier for the Card Token that represents the card number
   * you're validating.
   */
  card_token_id: string;

  /**
   * A four-digit code (MCC) identifying the type of business or service provided by
   * the merchant.
   */
  merchant_category_code: string;

  /**
   * The city where the merchant (typically your business) is located.
   */
  merchant_city_name: string;

  /**
   * The merchant name that will appear in the cardholder’s statement descriptor.
   * Typically your business name.
   */
  merchant_name: string;

  /**
   * The postal code for the merchant’s (typically your business’s) location.
   */
  merchant_postal_code: string;

  /**
   * The U.S. state where the merchant (typically your business) is located.
   */
  merchant_state: string;

  /**
   * The cardholder's first name.
   */
  cardholder_first_name?: string;

  /**
   * The cardholder's last name.
   */
  cardholder_last_name?: string;

  /**
   * The cardholder's middle name.
   */
  cardholder_middle_name?: string;

  /**
   * The postal code of the cardholder's address.
   */
  cardholder_postal_code?: string;

  /**
   * The cardholder's street address.
   */
  cardholder_street_address?: string;

[k: string]: unknown
}

export interface CardValidationListParams extends PageParams {
  /**
   * Filter Card Validations to ones belonging to the specified Account.
   */
  account_id?: string;

  created_at?: CardValidationListParams.CreatedAt;

  /**
   * Filter records to the one with the specified `idempotency_key` you chose for
   * that object. This value is unique across Increase and is used to ensure that a
   * request is only processed once. Learn more about
   * [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key?: string;

  status?: CardValidationListParams.Status;
}

export namespace CardValidationListParams {
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
     * Filter Card Validations by status. For GET requests, this should be encoded as a
     * comma-delimited string, such as `?in=one,two,three`.
     */
    in?: Array<'requires_attention' | 'pending_submission' | 'submitted' | 'complete' | 'declined'>;
  }
}

export declare namespace CardValidations {
  export {
    type CardValidation as CardValidation,
    type CardValidationsPage as CardValidationsPage,
    type CardValidationCreateParams as CardValidationCreateParams,
    type CardValidationListParams as CardValidationListParams
  };
}
