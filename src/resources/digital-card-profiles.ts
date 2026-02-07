// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class DigitalCardProfiles extends APIResource {
  /**
   * Create a Digital Card Profile
   *
   * @example
   * ```ts
   * const digitalCardProfile =
   *   await client.digitalCardProfiles.create({
   *     app_icon_file_id: 'file_8zxqkwlh43wo144u8yec',
   *     background_image_file_id: 'file_1ai913suu1zfn1pdetru',
   *     card_description: 'MyBank Signature Card',
   *     description: 'My Card Profile',
   *     issuer_name: 'MyBank',
   *   });
   * ```
   */
  create(body: DigitalCardProfileCreateParams, options?: RequestOptions): APIPromise<DigitalCardProfile> {
    return this._client.post('/digital_card_profiles', { body, ...options });
  }

  /**
   * Retrieve a Digital Card Profile
   *
   * @example
   * ```ts
   * const digitalCardProfile =
   *   await client.digitalCardProfiles.retrieve(
   *     'digital_card_profile_s3puplu90f04xhcwkiga',
   *   );
   * ```
   */
  retrieve(digitalCardProfileID: string, options?: RequestOptions): APIPromise<DigitalCardProfile> {
    return this._client.get(path`/digital_card_profiles/${digitalCardProfileID}`, options);
  }

  /**
   * List Card Profiles
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const digitalCardProfile of client.digitalCardProfiles.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: DigitalCardProfileListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<DigitalCardProfilesPage, DigitalCardProfile> {
    return this._client.getAPIList('/digital_card_profiles', Page<DigitalCardProfile>, { query, ...options });
  }

  /**
   * Archive a Digital Card Profile
   *
   * @example
   * ```ts
   * const digitalCardProfile =
   *   await client.digitalCardProfiles.archive(
   *     'digital_card_profile_s3puplu90f04xhcwkiga',
   *   );
   * ```
   */
  archive(digitalCardProfileID: string, options?: RequestOptions): APIPromise<DigitalCardProfile> {
    return this._client.post(path`/digital_card_profiles/${digitalCardProfileID}/archive`, options);
  }

  /**
   * Clones a Digital Card Profile
   *
   * @example
   * ```ts
   * const digitalCardProfile =
   *   await client.digitalCardProfiles.clone(
   *     'digital_card_profile_s3puplu90f04xhcwkiga',
   *   );
   * ```
   */
  clone(
    digitalCardProfileID: string,
    body: DigitalCardProfileCloneParams,
    options?: RequestOptions,
  ): APIPromise<DigitalCardProfile> {
    return this._client.post(path`/digital_card_profiles/${digitalCardProfileID}/clone`, {
      body,
      ...options,
    });
  }
}

export type DigitalCardProfilesPage = Page<DigitalCardProfile>;

/**
 * This contains artwork and metadata relating to a Card's appearance in digital
 * wallet apps like Apple Pay and Google Pay. For more information, see our guide
 * on [digital card artwork](https://increase.com/documentation/card-art).
 */
export interface DigitalCardProfile {
  /**
   * The Card Profile identifier.
   */
  id: string;

  /**
   * The identifier of the File containing the card's icon image.
   */
  app_icon_file_id: string;

  /**
   * The identifier of the File containing the card's front image.
   */
  background_image_file_id: string;

  /**
   * A user-facing description for the card itself.
   */
  card_description: string;

  /**
   * An email address the user can contact to receive support for their card.
   */
  contact_email: string | null;

  /**
   * A phone number the user can contact to receive support for their card.
   */
  contact_phone: string | null;

  /**
   * A website the user can visit to view and receive support for their card.
   */
  contact_website: string | null;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the Card Dispute was created.
   */
  created_at: string;

  /**
   * A description you can use to identify the Card Profile.
   */
  description: string;

  /**
   * The idempotency key you chose for this object. This value is unique across
   * Increase and is used to ensure that a request is only processed once. Learn more
   * about [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key: string | null;

  /**
   * A user-facing description for whoever is issuing the card.
   */
  issuer_name: string;

  /**
   * The status of the Card Profile.
   *
   * - `pending` - The Card Profile is awaiting review from Increase and/or
   *   processing by card networks.
   * - `rejected` - There is an issue with the Card Profile preventing it from use.
   * - `active` - The Card Profile can be assigned to Cards.
   * - `archived` - The Card Profile is no longer in use.
   */
  status: 'pending' | 'rejected' | 'active' | 'archived';

  /**
   * The Card's text color, specified as an RGB triple.
   */
  text_color: DigitalCardProfile.TextColor;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `digital_card_profile`.
   */
  type: 'digital_card_profile';

  [k: string]: unknown;
}

export namespace DigitalCardProfile {
  /**
   * The Card's text color, specified as an RGB triple.
   */
  export interface TextColor {
    /**
     * The value of the blue channel in the RGB color.
     */
    blue: number;

    /**
     * The value of the green channel in the RGB color.
     */
    green: number;

    /**
     * The value of the red channel in the RGB color.
     */
    red: number;
  }
}

export interface DigitalCardProfileCreateParams {
  /**
   * The identifier of the File containing the card's icon image.
   */
  app_icon_file_id: string;

  /**
   * The identifier of the File containing the card's front image.
   */
  background_image_file_id: string;

  /**
   * A user-facing description for the card itself.
   */
  card_description: string;

  /**
   * A description you can use to identify the Card Profile.
   */
  description: string;

  /**
   * A user-facing description for whoever is issuing the card.
   */
  issuer_name: string;

  /**
   * An email address the user can contact to receive support for their card.
   */
  contact_email?: string;

  /**
   * A phone number the user can contact to receive support for their card.
   */
  contact_phone?: string;

  /**
   * A website the user can visit to view and receive support for their card.
   */
  contact_website?: string;

  /**
   * The Card's text color, specified as an RGB triple. The default is white.
   */
  text_color?: DigitalCardProfileCreateParams.TextColor;

  [k: string]: unknown;
}

export namespace DigitalCardProfileCreateParams {
  /**
   * The Card's text color, specified as an RGB triple. The default is white.
   */
  export interface TextColor {
    /**
     * The value of the blue channel in the RGB color.
     */
    blue: number;

    /**
     * The value of the green channel in the RGB color.
     */
    green: number;

    /**
     * The value of the red channel in the RGB color.
     */
    red: number;
  }
}

export interface DigitalCardProfileListParams extends PageParams {
  /**
   * Filter records to the one with the specified `idempotency_key` you chose for
   * that object. This value is unique across Increase and is used to ensure that a
   * request is only processed once. Learn more about
   * [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key?: string;

  status?: DigitalCardProfileListParams.Status;
}

export namespace DigitalCardProfileListParams {
  export interface Status {
    /**
     * Filter Digital Card Profiles for those with the specified digital wallet status
     * or statuses. For GET requests, this should be encoded as a comma-delimited
     * string, such as `?in=one,two,three`.
     */
    in?: Array<'pending' | 'rejected' | 'active' | 'archived'>;
  }
}

export interface DigitalCardProfileCloneParams {
  /**
   * The identifier of the File containing the card's icon image.
   */
  app_icon_file_id?: string;

  /**
   * The identifier of the File containing the card's front image.
   */
  background_image_file_id?: string;

  /**
   * A user-facing description for the card itself.
   */
  card_description?: string;

  /**
   * An email address the user can contact to receive support for their card.
   */
  contact_email?: string;

  /**
   * A phone number the user can contact to receive support for their card.
   */
  contact_phone?: string;

  /**
   * A website the user can visit to view and receive support for their card.
   */
  contact_website?: string;

  /**
   * A description you can use to identify the Card Profile.
   */
  description?: string;

  /**
   * A user-facing description for whoever is issuing the card.
   */
  issuer_name?: string;

  /**
   * The Card's text color, specified as an RGB triple. The default is white.
   */
  text_color?: DigitalCardProfileCloneParams.TextColor;

  [k: string]: unknown;
}

export namespace DigitalCardProfileCloneParams {
  /**
   * The Card's text color, specified as an RGB triple. The default is white.
   */
  export interface TextColor {
    /**
     * The value of the blue channel in the RGB color.
     */
    blue: number;

    /**
     * The value of the green channel in the RGB color.
     */
    green: number;

    /**
     * The value of the red channel in the RGB color.
     */
    red: number;
  }
}

export declare namespace DigitalCardProfiles {
  export {
    type DigitalCardProfile as DigitalCardProfile,
    type DigitalCardProfilesPage as DigitalCardProfilesPage,
    type DigitalCardProfileCreateParams as DigitalCardProfileCreateParams,
    type DigitalCardProfileListParams as DigitalCardProfileListParams,
    type DigitalCardProfileCloneParams as DigitalCardProfileCloneParams,
  };
}
