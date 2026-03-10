// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CardTokensAPI from '../card-tokens';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class CardTokens extends APIResource {
  /**
   * Simulates tokenizing a card in the sandbox environment.
   *
   * @example
   * ```ts
   * const cardToken =
   *   await client.simulations.cardTokens.create();
   * ```
   */
  create(body: CardTokenCreateParams, options?: RequestOptions): APIPromise<CardTokensAPI.CardToken> {
    return this._client.post('/simulations/card_tokens', { body, ...options });
  }
}

export interface CardTokenCreateParams {
  /**
   * The capabilities of the outbound card token.
   */
  capabilities?: Array<CardTokenCreateParams.Capability>;

  /**
   * The expiration date of the card.
   */
  expiration?: string;

  /**
   * The last 4 digits of the card number.
   */
  last4?: string;

  /**
   * The outcome to simulate for card push transfers using this token.
   */
  outcome?: CardTokenCreateParams.Outcome;

  /**
   * The prefix of the card number, usually the first 8 digits.
   */
  prefix?: string;

  /**
   * The total length of the card number, including prefix and last4.
   */
  primary_account_number_length?: number;
}

export namespace CardTokenCreateParams {
  export interface Capability {
    /**
     * The cross-border push transfers capability.
     *
     * - `supported` - The capability is supported.
     * - `not_supported` - The capability is not supported.
     */
    cross_border_push_transfers: 'supported' | 'not_supported';

    /**
     * The domestic push transfers capability.
     *
     * - `supported` - The capability is supported.
     * - `not_supported` - The capability is not supported.
     */
    domestic_push_transfers: 'supported' | 'not_supported';

    /**
     * The route of the capability.
     *
     * - `visa` - Visa and Interlink
     * - `mastercard` - Mastercard and Maestro
     */
    route: 'visa' | 'mastercard';
  }

  /**
   * The outcome to simulate for card push transfers using this token.
   */
  export interface Outcome {
    /**
     * Whether card push transfers or validations will be approved or declined.
     *
     * - `approve` - Any card push transfers or validations will be approved.
     * - `decline` - Any card push transfers or validations will be declined.
     */
    result: 'approve' | 'decline';

    /**
     * If the result is declined, the details of the decline.
     */
    decline?: Outcome.Decline;
  }

  export namespace Outcome {
    /**
     * If the result is declined, the details of the decline.
     */
    export interface Decline {
      /**
       * The reason for the decline.
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
      reason?:
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
  }
}

export declare namespace CardTokens {
  export { type CardTokenCreateParams as CardTokenCreateParams };
}
