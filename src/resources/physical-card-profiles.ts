// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class PhysicalCardProfiles extends APIResource {
  /**
   * Create a Physical Card Profile
   *
   * @example
   * ```ts
   * const physicalCardProfile =
   *   await client.physicalCardProfiles.create({
   *     carrier_image_file_id: 'file_h6v7mtipe119os47ehlu',
   *     contact_phone: '+16505046304',
   *     description: 'My Card Profile',
   *     front_image_file_id: 'file_o6aex13wm1jcc36sgcj1',
   *     program_id: 'program_i2v2os4mwza1oetokh9i',
   *   });
   * ```
   */
  create(body: PhysicalCardProfileCreateParams, options?: RequestOptions): APIPromise<PhysicalCardProfile> {
    return this._client.post('/physical_card_profiles', { body, ...options });
  }

  /**
   * Retrieve a Card Profile
   *
   * @example
   * ```ts
   * const physicalCardProfile =
   *   await client.physicalCardProfiles.retrieve(
   *     'physical_card_profile_m534d5rn9qyy9ufqxoec',
   *   );
   * ```
   */
  retrieve(physicalCardProfileID: string, options?: RequestOptions): APIPromise<PhysicalCardProfile> {
    return this._client.get(path`/physical_card_profiles/${physicalCardProfileID}`, options);
  }

  /**
   * List Physical Card Profiles
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const physicalCardProfile of client.physicalCardProfiles.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: PhysicalCardProfileListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PhysicalCardProfilesPage, PhysicalCardProfile> {
    return this._client.getAPIList('/physical_card_profiles', Page<PhysicalCardProfile>, {
      query,
      ...options,
    });
  }

  /**
   * Archive a Physical Card Profile
   *
   * @example
   * ```ts
   * const physicalCardProfile =
   *   await client.physicalCardProfiles.archive(
   *     'physical_card_profile_m534d5rn9qyy9ufqxoec',
   *   );
   * ```
   */
  archive(physicalCardProfileID: string, options?: RequestOptions): APIPromise<PhysicalCardProfile> {
    return this._client.post(path`/physical_card_profiles/${physicalCardProfileID}/archive`, options);
  }

  /**
   * Clone a Physical Card Profile
   *
   * @example
   * ```ts
   * const physicalCardProfile =
   *   await client.physicalCardProfiles.clone(
   *     'physical_card_profile_m534d5rn9qyy9ufqxoec',
   *   );
   * ```
   */
  clone(
    physicalCardProfileID: string,
    body: PhysicalCardProfileCloneParams,
    options?: RequestOptions,
  ): APIPromise<PhysicalCardProfile> {
    return this._client.post(path`/physical_card_profiles/${physicalCardProfileID}/clone`, {
      body,
      ...options,
    });
  }
}

export type PhysicalCardProfilesPage = Page<PhysicalCardProfile>;

/**
 * This contains artwork and metadata relating to a Physical Card's appearance. For
 * more information, see our guide on
 * [physical card artwork](https://increase.com/documentation/card-art-physical-cards).
 */
export interface PhysicalCardProfile {
  /**
   * The Card Profile identifier.
   */
  id: string;

  /**
   * The identifier of the File containing the physical card's back image. This will
   * be missing until the image has been post-processed.
   */
  back_image_file_id: string | null;

  /**
   * The identifier of the File containing the physical card's carrier image. This
   * will be missing until the image has been post-processed.
   */
  carrier_image_file_id: string | null;

  /**
   * A phone number the user can contact to receive support for their card.
   */
  contact_phone: string | null;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the Physical Card Profile was created.
   */
  created_at: string;

  /**
   * The creator of this Physical Card Profile.
   *
   * - `increase` - This Physical Card Profile was created by Increase.
   * - `user` - This Physical Card Profile was created by you.
   */
  creator: 'increase' | 'user';

  /**
   * A description you can use to identify the Physical Card Profile.
   */
  description: string;

  /**
   * The identifier of the File containing the physical card's front image. This will
   * be missing until the image has been post-processed.
   */
  front_image_file_id: string | null;

  /**
   * The idempotency key you chose for this object. This value is unique across
   * Increase and is used to ensure that a request is only processed once. Learn more
   * about [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key: string | null;

  /**
   * Whether this Physical Card Profile is the default for all cards in its Increase
   * group.
   */
  is_default: boolean;

  /**
   * The identifier for the Program this Physical Card Profile belongs to.
   */
  program_id: string;

  /**
   * The status of the Physical Card Profile.
   *
   * - `pending_creating` - The Card Profile has not yet been processed by Increase.
   * - `pending_reviewing` - The card profile is awaiting review by Increase.
   * - `rejected` - There is an issue with the Physical Card Profile preventing it
   *   from use.
   * - `pending_submitting` - The card profile is awaiting submission to the
   *   fulfillment provider.
   * - `active` - The Physical Card Profile has been submitted to the fulfillment
   *   provider and is ready to use.
   * - `archived` - The Physical Card Profile has been archived.
   */
  status:
    | 'pending_creating'
    | 'pending_reviewing'
    | 'rejected'
    | 'pending_submitting'
    | 'active'
    | 'archived';

  /**
   * A constant representing the object's type. For this resource it will always be
   * `physical_card_profile`.
   */
  type: 'physical_card_profile';

  [k: string]: unknown;
}

export interface PhysicalCardProfileCreateParams {
  /**
   * The identifier of the File containing the physical card's carrier image.
   */
  carrier_image_file_id: string;

  /**
   * A phone number the user can contact to receive support for their card.
   */
  contact_phone: string;

  /**
   * A description you can use to identify the Card Profile.
   */
  description: string;

  /**
   * The identifier of the File containing the physical card's front image.
   */
  front_image_file_id: string;

  /**
   * The identifier for the Program that this Physical Card Profile falls under.
   */
  program_id: string;

  /**
   * Text printed on the front of the card. Reach out to
   * [support@increase.com](mailto:support@increase.com) for more information.
   */
  front_text?: PhysicalCardProfileCreateParams.FrontText;

  [k: string]: unknown;
}

export namespace PhysicalCardProfileCreateParams {
  /**
   * Text printed on the front of the card. Reach out to
   * [support@increase.com](mailto:support@increase.com) for more information.
   */
  export interface FrontText {
    /**
     * The first line of text on the front of the card.
     */
    line1: string;

    /**
     * The second line of text on the front of the card. Providing a second line moves
     * the first line slightly higher and prints the second line in the spot where the
     * first line would have otherwise been printed.
     */
    line2?: string;
  }
}

export interface PhysicalCardProfileListParams extends PageParams {
  /**
   * Filter records to the one with the specified `idempotency_key` you chose for
   * that object. This value is unique across Increase and is used to ensure that a
   * request is only processed once. Learn more about
   * [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key?: string;

  status?: PhysicalCardProfileListParams.Status;
}

export namespace PhysicalCardProfileListParams {
  export interface Status {
    /**
     * Filter Physical Card Profiles for those with the specified statuses. For GET
     * requests, this should be encoded as a comma-delimited string, such as
     * `?in=one,two,three`.
     */
    in?: Array<
      'pending_creating' | 'pending_reviewing' | 'rejected' | 'pending_submitting' | 'active' | 'archived'
    >;
  }
}

export interface PhysicalCardProfileCloneParams {
  /**
   * The identifier of the File containing the physical card's carrier image.
   */
  carrier_image_file_id?: string;

  /**
   * A phone number the user can contact to receive support for their card.
   */
  contact_phone?: string;

  /**
   * A description you can use to identify the Card Profile.
   */
  description?: string;

  /**
   * The identifier of the File containing the physical card's front image.
   */
  front_image_file_id?: string;

  /**
   * Text printed on the front of the card. Reach out to
   * [support@increase.com](mailto:support@increase.com) for more information.
   */
  front_text?: PhysicalCardProfileCloneParams.FrontText;

  /**
   * The identifier of the Program to use for the cloned Physical Card Profile.
   */
  program_id?: string;

  [k: string]: unknown;
}

export namespace PhysicalCardProfileCloneParams {
  /**
   * Text printed on the front of the card. Reach out to
   * [support@increase.com](mailto:support@increase.com) for more information.
   */
  export interface FrontText {
    /**
     * The first line of text on the front of the card.
     */
    line1: string;

    /**
     * The second line of text on the front of the card. Providing a second line moves
     * the first line slightly higher and prints the second line in the spot where the
     * first line would have otherwise been printed.
     */
    line2?: string;
  }
}

export declare namespace PhysicalCardProfiles {
  export {
    type PhysicalCardProfile as PhysicalCardProfile,
    type PhysicalCardProfilesPage as PhysicalCardProfilesPage,
    type PhysicalCardProfileCreateParams as PhysicalCardProfileCreateParams,
    type PhysicalCardProfileListParams as PhysicalCardProfileListParams,
    type PhysicalCardProfileCloneParams as PhysicalCardProfileCloneParams,
  };
}
