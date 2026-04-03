// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Cards extends APIResource {
  /**
   * Create a Card
   *
   * @example
   * ```ts
   * const card = await client.cards.create({
   *   account_id: 'account_in71c4amph0vgo2qllky',
   * });
   * ```
   */
  create(body: CardCreateParams, options?: RequestOptions): APIPromise<Card> {
    return this._client.post('/cards', { body, ...options });
  }

  /**
   * Retrieve a Card
   *
   * @example
   * ```ts
   * const card = await client.cards.retrieve(
   *   'card_oubs0hwk5rn6knuecxg2',
   * );
   * ```
   */
  retrieve(cardID: string, options?: RequestOptions): APIPromise<Card> {
    return this._client.get(path`/cards/${cardID}`, options);
  }

  /**
   * Update a Card
   *
   * @example
   * ```ts
   * const card = await client.cards.update(
   *   'card_oubs0hwk5rn6knuecxg2',
   * );
   * ```
   */
  update(cardID: string, body: CardUpdateParams, options?: RequestOptions): APIPromise<Card> {
    return this._client.patch(path`/cards/${cardID}`, { body, ...options });
  }

  /**
   * List Cards
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const card of client.cards.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: CardListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CardsPage, Card> {
    return this._client.getAPIList('/cards', Page<Card>, { query, ...options });
  }

  /**
   * Create an iframe URL for a Card to display the card details. More details about
   * styling and usage can be found in the
   * [documentation](/documentation/embedded-card-component).
   *
   * @example
   * ```ts
   * const cardIframeURL =
   *   await client.cards.createDetailsIframe(
   *     'card_oubs0hwk5rn6knuecxg2',
   *   );
   * ```
   */
  createDetailsIframe(
    cardID: string,
    body: CardCreateDetailsIframeParams,
    options?: RequestOptions,
  ): APIPromise<CardIframeURL> {
    return this._client.post(path`/cards/${cardID}/create_details_iframe`, { body, ...options });
  }

  /**
   * Sensitive details for a Card include the primary account number, expiry, card
   * verification code, and PIN.
   *
   * @example
   * ```ts
   * const cardDetails = await client.cards.details(
   *   'card_oubs0hwk5rn6knuecxg2',
   * );
   * ```
   */
  details(cardID: string, options?: RequestOptions): APIPromise<CardDetails> {
    return this._client.get(path`/cards/${cardID}/details`, options);
  }

  /**
   * Update a Card's PIN
   *
   * @example
   * ```ts
   * const cardDetails = await client.cards.updatePin(
   *   'card_oubs0hwk5rn6knuecxg2',
   *   { pin: '1234' },
   * );
   * ```
   */
  updatePin(cardID: string, body: CardUpdatePinParams, options?: RequestOptions): APIPromise<CardDetails> {
    return this._client.post(path`/cards/${cardID}/update_pin`, { body, ...options });
  }
}

export type CardsPage = Page<Card>;

/**
 * Cards are commercial credit cards. They'll immediately work for online purchases
 * after you create them. All cards maintain a credit limit of 100% of the
 * Account’s available balance at the time of transaction. Funds are deducted from
 * the Account upon transaction settlement.
 */
export interface Card {
  /**
   * The card identifier.
   */
  id: string;

  /**
   * The identifier for the account this card belongs to.
   */
  account_id: string;

  /**
   * Controls that restrict how this card can be used.
   */
  authorization_controls: Card.AuthorizationControls | null;

  /**
   * The Card's billing address.
   */
  billing_address: Card.BillingAddress;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the Card was created.
   */
  created_at: string;

  /**
   * The card's description for display purposes.
   */
  description: string | null;

  /**
   * The contact information used in the two-factor steps for digital wallet card
   * creation. At least one field must be present to complete the digital wallet
   * steps.
   */
  digital_wallet: Card.DigitalWallet | null;

  /**
   * The identifier for the entity associated with this card.
   */
  entity_id: string | null;

  /**
   * The month the card expires in M format (e.g., August is 8).
   */
  expiration_month: number;

  /**
   * The year the card expires in YYYY format (e.g., 2025).
   */
  expiration_year: number;

  /**
   * The idempotency key you chose for this object. This value is unique across
   * Increase and is used to ensure that a request is only processed once. Learn more
   * about [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key: string | null;

  /**
   * The last 4 digits of the Card's Primary Account Number.
   */
  last4: string;

  /**
   * This indicates if payments can be made with the card.
   *
   * - `active` - The card is active.
   * - `disabled` - The card is temporarily disabled.
   * - `canceled` - The card is permanently canceled.
   */
  status: 'active' | 'disabled' | 'canceled';

  /**
   * A constant representing the object's type. For this resource it will always be
   * `card`.
   */
  type: 'card';

  [k: string]: unknown;
}

export namespace Card {
  /**
   * Controls that restrict how this card can be used.
   */
  export interface AuthorizationControls {
    /**
     * Limits the number of authorizations that can be approved on this card.
     */
    maximum_authorization_count: AuthorizationControls.MaximumAuthorizationCount | null;

    /**
     * Restricts which Merchant Acceptor IDs are allowed or blocked for authorizations
     * on this card.
     */
    merchant_acceptor_identifier: AuthorizationControls.MerchantAcceptorIdentifier | null;

    /**
     * Restricts which Merchant Category Codes are allowed or blocked for
     * authorizations on this card.
     */
    merchant_category_code: AuthorizationControls.MerchantCategoryCode | null;

    /**
     * Restricts which merchant countries are allowed or blocked for authorizations on
     * this card.
     */
    merchant_country: AuthorizationControls.MerchantCountry | null;

    /**
     * Spending limits for this card. The most restrictive limit is applied if multiple
     * limits match.
     */
    spending_limits: Array<AuthorizationControls.SpendingLimit> | null;
  }

  export namespace AuthorizationControls {
    /**
     * Limits the number of authorizations that can be approved on this card.
     */
    export interface MaximumAuthorizationCount {
      /**
       * The maximum number of authorizations that can be approved on this card over its
       * lifetime.
       */
      all_time: number | null;
    }

    /**
     * Restricts which Merchant Acceptor IDs are allowed or blocked for authorizations
     * on this card.
     */
    export interface MerchantAcceptorIdentifier {
      /**
       * The Merchant Acceptor IDs that are allowed for authorizations on this card.
       */
      allowed: Array<MerchantAcceptorIdentifier.Allowed> | null;

      /**
       * The Merchant Acceptor IDs that are blocked for authorizations on this card.
       */
      blocked: Array<MerchantAcceptorIdentifier.Blocked> | null;
    }

    export namespace MerchantAcceptorIdentifier {
      export interface Allowed {
        /**
         * The Merchant Acceptor ID.
         */
        identifier: string;
      }

      export interface Blocked {
        /**
         * The Merchant Acceptor ID.
         */
        identifier: string;
      }
    }

    /**
     * Restricts which Merchant Category Codes are allowed or blocked for
     * authorizations on this card.
     */
    export interface MerchantCategoryCode {
      /**
       * The Merchant Category Codes that are allowed for authorizations on this card.
       */
      allowed: Array<MerchantCategoryCode.Allowed> | null;

      /**
       * The Merchant Category Codes that are blocked for authorizations on this card.
       */
      blocked: Array<MerchantCategoryCode.Blocked> | null;
    }

    export namespace MerchantCategoryCode {
      export interface Allowed {
        /**
         * The Merchant Category Code (MCC).
         */
        code: string;
      }

      export interface Blocked {
        /**
         * The Merchant Category Code (MCC).
         */
        code: string;
      }
    }

    /**
     * Restricts which merchant countries are allowed or blocked for authorizations on
     * this card.
     */
    export interface MerchantCountry {
      /**
       * The merchant countries that are allowed for authorizations on this card.
       */
      allowed: Array<MerchantCountry.Allowed> | null;

      /**
       * The merchant countries that are blocked for authorizations on this card.
       */
      blocked: Array<MerchantCountry.Blocked> | null;
    }

    export namespace MerchantCountry {
      export interface Allowed {
        /**
         * The ISO 3166-1 alpha-2 country code.
         */
        country: string;
      }

      export interface Blocked {
        /**
         * The ISO 3166-1 alpha-2 country code.
         */
        country: string;
      }
    }

    export interface SpendingLimit {
      /**
       * The interval at which the spending limit is enforced.
       *
       * - `all_time` - The spending limit applies over the lifetime of the card.
       * - `per_transaction` - The spending limit applies per transaction.
       * - `per_day` - The spending limit applies per day. Resets nightly at midnight
       *   UTC.
       * - `per_week` - The spending limit applies per week. Resets weekly on Mondays at
       *   midnight UTC.
       * - `per_month` - The spending limit applies per month. Resets on the first of the
       *   month, midnight UTC.
       */
      interval: 'all_time' | 'per_transaction' | 'per_day' | 'per_week' | 'per_month';

      /**
       * The Merchant Category Codes (MCCs) this spending limit applies to. If not set,
       * the limit applies to all transactions.
       */
      merchant_category_codes: Array<SpendingLimit.MerchantCategoryCode> | null;

      /**
       * The maximum settlement amount permitted in the given interval.
       */
      settlement_amount: number;
    }

    export namespace SpendingLimit {
      export interface MerchantCategoryCode {
        /**
         * The Merchant Category Code (MCC).
         */
        code: string;
      }
    }
  }

  /**
   * The Card's billing address.
   */
  export interface BillingAddress {
    /**
     * The city of the billing address.
     */
    city: string | null;

    /**
     * The first line of the billing address.
     */
    line1: string | null;

    /**
     * The second line of the billing address.
     */
    line2: string | null;

    /**
     * The postal code of the billing address.
     */
    postal_code: string | null;

    /**
     * The US state of the billing address.
     */
    state: string | null;
  }

  /**
   * The contact information used in the two-factor steps for digital wallet card
   * creation. At least one field must be present to complete the digital wallet
   * steps.
   */
  export interface DigitalWallet {
    /**
     * The digital card profile assigned to this digital card. Card profiles may also
     * be assigned at the program level.
     */
    digital_card_profile_id: string | null;

    /**
     * An email address that can be used to verify the cardholder via one-time passcode
     * over email.
     */
    email: string | null;

    /**
     * A phone number that can be used to verify the cardholder via one-time passcode
     * over SMS.
     */
    phone: string | null;
  }
}

/**
 * An object containing the sensitive details (card number, CVC, PIN, etc) for a
 * Card. These details are not included in the Card object. If you'd prefer to
 * never access these details directly, you can use the
 * [embedded iframe](/documentation/embedded-card-component) to display the
 * information to your users.
 */
export interface CardDetails {
  /**
   * The identifier for the Card for which sensitive details have been returned.
   */
  card_id: string;

  /**
   * The month the card expires in M format (e.g., August is 8).
   */
  expiration_month: number;

  /**
   * The year the card expires in YYYY format (e.g., 2025).
   */
  expiration_year: number;

  /**
   * The 4-digit PIN for the card, for use with ATMs.
   */
  pin: string;

  /**
   * The card number.
   */
  primary_account_number: string;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `card_details`.
   */
  type: 'card_details';

  /**
   * The three-digit verification code for the card. It's also known as the Card
   * Verification Code (CVC), the Card Verification Value (CVV), or the Card
   * Identification (CID).
   */
  verification_code: string;
}

/**
 * An object containing the iframe URL for a Card.
 */
export interface CardIframeURL {
  /**
   * The time the iframe URL will expire.
   */
  expires_at: string;

  /**
   * The iframe URL for the Card. Treat this as an opaque URL.
   */
  iframe_url: string;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `card_iframe_url`.
   */
  type: 'card_iframe_url';
}

export interface CardCreateParams {
  /**
   * The Account the card should belong to.
   */
  account_id: string;

  /**
   * Controls that restrict how this card can be used.
   */
  authorization_controls?: CardCreateParams.AuthorizationControls;

  /**
   * The card's billing address.
   */
  billing_address?: CardCreateParams.BillingAddress;

  /**
   * The description you choose to give the card.
   */
  description?: string;

  /**
   * The contact information used in the two-factor steps for digital wallet card
   * creation. To add the card to a digital wallet, you may supply an email or phone
   * number with this request. Otherwise, subscribe and then action a Real Time
   * Decision with the category `digital_wallet_token_requested` or
   * `digital_wallet_authentication_requested`.
   */
  digital_wallet?: CardCreateParams.DigitalWallet;

  /**
   * The Entity the card belongs to. You only need to supply this in rare situations
   * when the card is not for the Account holder.
   */
  entity_id?: string;

  [k: string]: unknown;
}

export namespace CardCreateParams {
  /**
   * Controls that restrict how this card can be used.
   */
  export interface AuthorizationControls {
    /**
     * Limits the number of authorizations that can be approved on this card.
     */
    maximum_authorization_count?: AuthorizationControls.MaximumAuthorizationCount;

    /**
     * Restricts which Merchant Acceptor IDs are allowed or blocked for authorizations
     * on this card.
     */
    merchant_acceptor_identifier?: AuthorizationControls.MerchantAcceptorIdentifier;

    /**
     * Restricts which Merchant Category Codes are allowed or blocked for
     * authorizations on this card.
     */
    merchant_category_code?: AuthorizationControls.MerchantCategoryCode;

    /**
     * Restricts which merchant countries are allowed or blocked for authorizations on
     * this card.
     */
    merchant_country?: AuthorizationControls.MerchantCountry;

    /**
     * Spending limits for this card. The most restrictive limit is applied if multiple
     * limits match.
     */
    spending_limits?: Array<AuthorizationControls.SpendingLimit>;
  }

  export namespace AuthorizationControls {
    /**
     * Limits the number of authorizations that can be approved on this card.
     */
    export interface MaximumAuthorizationCount {
      /**
       * The maximum number of authorizations that can be approved on this card over its
       * lifetime.
       */
      all_time: number;
    }

    /**
     * Restricts which Merchant Acceptor IDs are allowed or blocked for authorizations
     * on this card.
     */
    export interface MerchantAcceptorIdentifier {
      /**
       * The Merchant Acceptor IDs that are allowed for authorizations on this card.
       * Authorizations with Merchant Acceptor IDs not in this list will be declined.
       */
      allowed?: Array<MerchantAcceptorIdentifier.Allowed>;

      /**
       * The Merchant Acceptor IDs that are blocked for authorizations on this card.
       * Authorizations with Merchant Acceptor IDs in this list will be declined.
       */
      blocked?: Array<MerchantAcceptorIdentifier.Blocked>;
    }

    export namespace MerchantAcceptorIdentifier {
      export interface Allowed {
        /**
         * The Merchant Acceptor ID.
         */
        identifier: string;
      }

      export interface Blocked {
        /**
         * The Merchant Acceptor ID.
         */
        identifier: string;
      }
    }

    /**
     * Restricts which Merchant Category Codes are allowed or blocked for
     * authorizations on this card.
     */
    export interface MerchantCategoryCode {
      /**
       * The Merchant Category Codes that are allowed for authorizations on this card.
       * Authorizations with Merchant Category Codes not in this list will be declined.
       */
      allowed?: Array<MerchantCategoryCode.Allowed>;

      /**
       * The Merchant Category Codes that are blocked for authorizations on this card.
       * Authorizations with Merchant Category Codes in this list will be declined.
       */
      blocked?: Array<MerchantCategoryCode.Blocked>;
    }

    export namespace MerchantCategoryCode {
      export interface Allowed {
        /**
         * The Merchant Category Code.
         */
        code: string;
      }

      export interface Blocked {
        /**
         * The Merchant Category Code.
         */
        code: string;
      }
    }

    /**
     * Restricts which merchant countries are allowed or blocked for authorizations on
     * this card.
     */
    export interface MerchantCountry {
      /**
       * The merchant countries that are allowed for authorizations on this card.
       * Authorizations with merchant countries not in this list will be declined.
       */
      allowed?: Array<MerchantCountry.Allowed>;

      /**
       * The merchant countries that are blocked for authorizations on this card.
       * Authorizations with merchant countries in this list will be declined.
       */
      blocked?: Array<MerchantCountry.Blocked>;
    }

    export namespace MerchantCountry {
      export interface Allowed {
        /**
         * The ISO 3166-1 alpha-2 country code.
         */
        country: string;
      }

      export interface Blocked {
        /**
         * The ISO 3166-1 alpha-2 country code.
         */
        country: string;
      }
    }

    export interface SpendingLimit {
      /**
       * The interval at which the spending limit is enforced.
       *
       * - `all_time` - The spending limit applies over the lifetime of the card.
       * - `per_transaction` - The spending limit applies per transaction.
       * - `per_day` - The spending limit applies per day. Resets nightly at midnight
       *   UTC.
       * - `per_week` - The spending limit applies per week. Resets weekly on Mondays at
       *   midnight UTC.
       * - `per_month` - The spending limit applies per month. Resets on the first of the
       *   month, midnight UTC.
       */
      interval: 'all_time' | 'per_transaction' | 'per_day' | 'per_week' | 'per_month';

      /**
       * The maximum settlement amount permitted in the given interval.
       */
      settlement_amount: number;

      /**
       * The Merchant Category Codes this spending limit applies to. If not set, the
       * limit applies to all transactions.
       */
      merchant_category_codes?: Array<SpendingLimit.MerchantCategoryCode>;
    }

    export namespace SpendingLimit {
      export interface MerchantCategoryCode {
        /**
         * The Merchant Category Code.
         */
        code: string;
      }
    }
  }

  /**
   * The card's billing address.
   */
  export interface BillingAddress {
    /**
     * The city of the billing address.
     */
    city: string;

    /**
     * The first line of the billing address.
     */
    line1: string;

    /**
     * The postal code of the billing address.
     */
    postal_code: string;

    /**
     * The US state of the billing address.
     */
    state: string;

    /**
     * The second line of the billing address.
     */
    line2?: string;
  }

  /**
   * The contact information used in the two-factor steps for digital wallet card
   * creation. To add the card to a digital wallet, you may supply an email or phone
   * number with this request. Otherwise, subscribe and then action a Real Time
   * Decision with the category `digital_wallet_token_requested` or
   * `digital_wallet_authentication_requested`.
   */
  export interface DigitalWallet {
    /**
     * The digital card profile assigned to this digital card.
     */
    digital_card_profile_id?: string;

    /**
     * An email address that can be used to contact and verify the cardholder via
     * one-time passcode over email.
     */
    email?: string;

    /**
     * A phone number that can be used to contact and verify the cardholder via
     * one-time passcode over SMS.
     */
    phone?: string;
  }
}

export interface CardUpdateParams {
  /**
   * Controls that restrict how this card can be used.
   */
  authorization_controls?: CardUpdateParams.AuthorizationControls;

  /**
   * The card's updated billing address.
   */
  billing_address?: CardUpdateParams.BillingAddress;

  /**
   * The description you choose to give the card.
   */
  description?: string;

  /**
   * The contact information used in the two-factor steps for digital wallet card
   * creation. At least one field must be present to complete the digital wallet
   * steps.
   */
  digital_wallet?: CardUpdateParams.DigitalWallet;

  /**
   * The Entity the card belongs to. You only need to supply this in rare situations
   * when the card is not for the Account holder.
   */
  entity_id?: string;

  /**
   * The status to update the Card with.
   *
   * - `active` - The card is active.
   * - `disabled` - The card is temporarily disabled.
   * - `canceled` - The card is permanently canceled.
   */
  status?: 'active' | 'disabled' | 'canceled';
}

export namespace CardUpdateParams {
  /**
   * Controls that restrict how this card can be used.
   */
  export interface AuthorizationControls {
    /**
     * Limits the number of authorizations that can be approved on this card.
     */
    maximum_authorization_count?: AuthorizationControls.MaximumAuthorizationCount;

    /**
     * Restricts which Merchant Acceptor IDs are allowed or blocked for authorizations
     * on this card.
     */
    merchant_acceptor_identifier?: AuthorizationControls.MerchantAcceptorIdentifier;

    /**
     * Restricts which Merchant Category Codes are allowed or blocked for
     * authorizations on this card.
     */
    merchant_category_code?: AuthorizationControls.MerchantCategoryCode;

    /**
     * Restricts which merchant countries are allowed or blocked for authorizations on
     * this card.
     */
    merchant_country?: AuthorizationControls.MerchantCountry;

    /**
     * Spending limits for this card. The most restrictive limit is applied if multiple
     * limits match.
     */
    spending_limits?: Array<AuthorizationControls.SpendingLimit>;
  }

  export namespace AuthorizationControls {
    /**
     * Limits the number of authorizations that can be approved on this card.
     */
    export interface MaximumAuthorizationCount {
      /**
       * The maximum number of authorizations that can be approved on this card over its
       * lifetime.
       */
      all_time: number;
    }

    /**
     * Restricts which Merchant Acceptor IDs are allowed or blocked for authorizations
     * on this card.
     */
    export interface MerchantAcceptorIdentifier {
      /**
       * The Merchant Acceptor IDs that are allowed for authorizations on this card.
       * Authorizations with Merchant Acceptor IDs not in this list will be declined.
       */
      allowed?: Array<MerchantAcceptorIdentifier.Allowed>;

      /**
       * The Merchant Acceptor IDs that are blocked for authorizations on this card.
       * Authorizations with Merchant Acceptor IDs in this list will be declined.
       */
      blocked?: Array<MerchantAcceptorIdentifier.Blocked>;
    }

    export namespace MerchantAcceptorIdentifier {
      export interface Allowed {
        /**
         * The Merchant Acceptor ID.
         */
        identifier: string;
      }

      export interface Blocked {
        /**
         * The Merchant Acceptor ID.
         */
        identifier: string;
      }
    }

    /**
     * Restricts which Merchant Category Codes are allowed or blocked for
     * authorizations on this card.
     */
    export interface MerchantCategoryCode {
      /**
       * The Merchant Category Codes that are allowed for authorizations on this card.
       * Authorizations with Merchant Category Codes not in this list will be declined.
       */
      allowed?: Array<MerchantCategoryCode.Allowed>;

      /**
       * The Merchant Category Codes that are blocked for authorizations on this card.
       * Authorizations with Merchant Category Codes in this list will be declined.
       */
      blocked?: Array<MerchantCategoryCode.Blocked>;
    }

    export namespace MerchantCategoryCode {
      export interface Allowed {
        /**
         * The Merchant Category Code.
         */
        code: string;
      }

      export interface Blocked {
        /**
         * The Merchant Category Code.
         */
        code: string;
      }
    }

    /**
     * Restricts which merchant countries are allowed or blocked for authorizations on
     * this card.
     */
    export interface MerchantCountry {
      /**
       * The merchant countries that are allowed for authorizations on this card.
       * Authorizations with merchant countries not in this list will be declined.
       */
      allowed?: Array<MerchantCountry.Allowed>;

      /**
       * The merchant countries that are blocked for authorizations on this card.
       * Authorizations with merchant countries in this list will be declined.
       */
      blocked?: Array<MerchantCountry.Blocked>;
    }

    export namespace MerchantCountry {
      export interface Allowed {
        /**
         * The ISO 3166-1 alpha-2 country code.
         */
        country: string;
      }

      export interface Blocked {
        /**
         * The ISO 3166-1 alpha-2 country code.
         */
        country: string;
      }
    }

    export interface SpendingLimit {
      /**
       * The interval at which the spending limit is enforced.
       *
       * - `all_time` - The spending limit applies over the lifetime of the card.
       * - `per_transaction` - The spending limit applies per transaction.
       * - `per_day` - The spending limit applies per day. Resets nightly at midnight
       *   UTC.
       * - `per_week` - The spending limit applies per week. Resets weekly on Mondays at
       *   midnight UTC.
       * - `per_month` - The spending limit applies per month. Resets on the first of the
       *   month, midnight UTC.
       */
      interval: 'all_time' | 'per_transaction' | 'per_day' | 'per_week' | 'per_month';

      /**
       * The maximum settlement amount permitted in the given interval.
       */
      settlement_amount: number;

      /**
       * The Merchant Category Codes this spending limit applies to. If not set, the
       * limit applies to all transactions.
       */
      merchant_category_codes?: Array<SpendingLimit.MerchantCategoryCode>;
    }

    export namespace SpendingLimit {
      export interface MerchantCategoryCode {
        /**
         * The Merchant Category Code.
         */
        code: string;
      }
    }
  }

  /**
   * The card's updated billing address.
   */
  export interface BillingAddress {
    /**
     * The city of the billing address.
     */
    city: string;

    /**
     * The first line of the billing address.
     */
    line1: string;

    /**
     * The postal code of the billing address.
     */
    postal_code: string;

    /**
     * The US state of the billing address.
     */
    state: string;

    /**
     * The second line of the billing address.
     */
    line2?: string;
  }

  /**
   * The contact information used in the two-factor steps for digital wallet card
   * creation. At least one field must be present to complete the digital wallet
   * steps.
   */
  export interface DigitalWallet {
    /**
     * The digital card profile assigned to this digital card.
     */
    digital_card_profile_id?: string;

    /**
     * An email address that can be used to verify the cardholder via one-time passcode
     * over email.
     */
    email?: string;

    /**
     * A phone number that can be used to verify the cardholder via one-time passcode
     * over SMS.
     */
    phone?: string;
  }
}

export interface CardListParams extends PageParams {
  /**
   * Filter Cards to ones belonging to the specified Account.
   */
  account_id?: string;

  created_at?: CardListParams.CreatedAt;

  /**
   * Filter records to the one with the specified `idempotency_key` you chose for
   * that object. This value is unique across Increase and is used to ensure that a
   * request is only processed once. Learn more about
   * [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key?: string;

  status?: CardListParams.Status;
}

export namespace CardListParams {
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
     * Filter Cards by status. For GET requests, this should be encoded as a
     * comma-delimited string, such as `?in=one,two,three`.
     */
    in?: Array<'active' | 'disabled' | 'canceled'>;
  }
}

export interface CardCreateDetailsIframeParams {
  /**
   * The identifier of the Physical Card to create an iframe for. This will inform
   * the appearance of the card rendered in the iframe.
   */
  physical_card_id?: string;
}

export interface CardUpdatePinParams {
  /**
   * The 4-digit PIN for the card, for use with ATMs.
   */
  pin: string;
}

export declare namespace Cards {
  export {
    type Card as Card,
    type CardDetails as CardDetails,
    type CardIframeURL as CardIframeURL,
    type CardsPage as CardsPage,
    type CardCreateParams as CardCreateParams,
    type CardUpdateParams as CardUpdateParams,
    type CardListParams as CardListParams,
    type CardCreateDetailsIframeParams as CardCreateDetailsIframeParams,
    type CardUpdatePinParams as CardUpdatePinParams,
  };
}
