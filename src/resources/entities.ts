// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as SupplementalDocumentsAPI from './supplemental-documents';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Entities extends APIResource {
  /**
   * Create an Entity
   *
   * @example
   * ```ts
   * const entity = await client.entities.create({
   *   structure: 'corporation',
   * });
   * ```
   */
  create(body: EntityCreateParams, options?: RequestOptions): APIPromise<Entity> {
    return this._client.post('/entities', { body, ...options });
  }

  /**
   * Retrieve an Entity
   *
   * @example
   * ```ts
   * const entity = await client.entities.retrieve(
   *   'entity_n8y8tnk2p9339ti393yi',
   * );
   * ```
   */
  retrieve(entityID: string, options?: RequestOptions): APIPromise<Entity> {
    return this._client.get(path`/entities/${entityID}`, options);
  }

  /**
   * Update an Entity
   *
   * @example
   * ```ts
   * const entity = await client.entities.update(
   *   'entity_n8y8tnk2p9339ti393yi',
   * );
   * ```
   */
  update(entityID: string, body: EntityUpdateParams, options?: RequestOptions): APIPromise<Entity> {
    return this._client.patch(path`/entities/${entityID}`, { body, ...options });
  }

  /**
   * List Entities
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const entity of client.entities.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: EntityListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<EntitiesPage, Entity> {
    return this._client.getAPIList('/entities', Page<Entity>, { query, ...options });
  }

  /**
   * Archive an Entity
   *
   * @example
   * ```ts
   * const entity = await client.entities.archive(
   *   'entity_n8y8tnk2p9339ti393yi',
   * );
   * ```
   */
  archive(entityID: string, options?: RequestOptions): APIPromise<Entity> {
    return this._client.post(path`/entities/${entityID}/archive`, options);
  }
}

export type EntitiesPage = Page<Entity>;

/**
 * Entities are the legal entities that own accounts. They can be people,
 * corporations, partnerships, government authorities, or trusts. To learn more,
 * see [Entities](/documentation/entities).
 */
export interface Entity {
  /**
   * The entity's identifier.
   */
  id: string;

  /**
   * Details of the corporation entity. Will be present if `structure` is equal to
   * `corporation`.
   */
  corporation: Entity.Corporation | null;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the Entity
   * was created.
   */
  created_at: string;

  /**
   * The identifier of the Entity Onboarding Session that was used to create this
   * Entity, if any.
   */
  creating_entity_onboarding_session_id: string | null;

  /**
   * The entity's description for display purposes.
   */
  description: string | null;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the
   * Entity's details were most recently confirmed.
   */
  details_confirmed_at: string | null;

  /**
   * Details of the government authority entity. Will be present if `structure` is
   * equal to `government_authority`.
   */
  government_authority: Entity.GovernmentAuthority | null;

  /**
   * The idempotency key you chose for this object. This value is unique across
   * Increase and is used to ensure that a request is only processed once. Learn more
   * about [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key: string | null;

  /**
   * Details of the joint entity. Will be present if `structure` is equal to `joint`.
   */
  joint: Entity.Joint | null;

  /**
   * Details of the natural person entity. Will be present if `structure` is equal to
   * `natural_person`.
   */
  natural_person: Entity.NaturalPerson | null;

  /**
   * An assessment of the entity’s potential risk of involvement in financial crimes,
   * such as money laundering.
   */
  risk_rating: Entity.RiskRating | null;

  /**
   * The status of the entity.
   *
   * - `active` - The entity is active.
   * - `archived` - The entity is archived, and can no longer be used to create
   *   accounts.
   * - `disabled` - The entity is temporarily disabled and cannot be used for
   *   financial activity.
   */
  status: 'active' | 'archived' | 'disabled';

  /**
   * The entity's legal structure.
   *
   * - `corporation` - A corporation.
   * - `natural_person` - An individual person.
   * - `joint` - Multiple individual people.
   * - `trust` - A trust.
   * - `government_authority` - A government authority.
   */
  structure: 'corporation' | 'natural_person' | 'joint' | 'trust' | 'government_authority';

  /**
   * Additional documentation associated with the entity. This is limited to the
   * first 10 documents for an entity. If an entity has more than 10 documents, use
   * the GET /entity_supplemental_documents list endpoint to retrieve them.
   */
  supplemental_documents: Array<SupplementalDocumentsAPI.EntitySupplementalDocument>;

  /**
   * The terms that the Entity agreed to. Not all programs are required to submit
   * this data.
   */
  terms_agreements: Array<Entity.TermsAgreement>;

  /**
   * If you are using a third-party service for identity verification, you can use
   * this field to associate this Entity with the identifier that represents them in
   * that service.
   */
  third_party_verification: Entity.ThirdPartyVerification | null;

  /**
   * Details of the trust entity. Will be present if `structure` is equal to `trust`.
   */
  trust: Entity.Trust | null;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `entity`.
   */
  type: 'entity';

  /**
   * The validation results for the entity. Learn more about
   * [validations](/documentation/entity-validation).
   */
  validation: Entity.Validation | null;

  [k: string]: unknown;
}

export namespace Entity {
  /**
   * Details of the corporation entity. Will be present if `structure` is equal to
   * `corporation`.
   */
  export interface Corporation {
    /**
     * The corporation's address.
     */
    address: Corporation.Address;

    /**
     * The identifying details of anyone controlling or owning 25% or more of the
     * corporation.
     */
    beneficial_owners: Array<Corporation.BeneficialOwner>;

    /**
     * An email address for the business.
     */
    email: string | null;

    /**
     * The two-letter United States Postal Service (USPS) abbreviation for the
     * corporation's state of incorporation.
     */
    incorporation_state: string | null;

    /**
     * The numeric North American Industry Classification System (NAICS) code submitted
     * for the corporation.
     */
    industry_code: string | null;

    /**
     * The legal identifier of the corporation.
     */
    legal_identifier: Corporation.LegalIdentifier | null;

    /**
     * The legal name of the corporation.
     */
    name: string;

    /**
     * The website of the corporation.
     */
    website: string | null;

    [k: string]: unknown;
  }

  export namespace Corporation {
    /**
     * The corporation's address.
     */
    export interface Address {
      /**
       * The city, district, town, or village of the address.
       */
      city: string | null;

      /**
       * The two-letter ISO 3166-1 alpha-2 code for the country of the address.
       */
      country: string;

      /**
       * The first line of the address.
       */
      line1: string;

      /**
       * The second line of the address.
       */
      line2: string | null;

      /**
       * The two-letter United States Postal Service (USPS) abbreviation for the US
       * state, province, or region of the address.
       */
      state: string | null;

      /**
       * The ZIP or postal code of the address.
       */
      zip: string | null;
    }

    export interface BeneficialOwner {
      /**
       * The identifier of this beneficial owner.
       */
      id: string;

      /**
       * This person's role or title within the entity.
       */
      company_title: string | null;

      /**
       * Personal details for the beneficial owner.
       */
      individual: BeneficialOwner.Individual;

      /**
       * Why this person is considered a beneficial owner of the entity.
       */
      prongs: Array<'ownership' | 'control'>;

      [k: string]: unknown;
    }

    export namespace BeneficialOwner {
      /**
       * Personal details for the beneficial owner.
       */
      export interface Individual {
        /**
         * The person's address.
         */
        address: Individual.Address;

        /**
         * The person's date of birth in YYYY-MM-DD format.
         */
        date_of_birth: string;

        /**
         * A means of verifying the person's identity.
         */
        identification: Individual.Identification | null;

        /**
         * The person's legal name.
         */
        name: string;
      }

      export namespace Individual {
        /**
         * The person's address.
         */
        export interface Address {
          /**
           * The city, district, town, or village of the address.
           */
          city: string | null;

          /**
           * The two-letter ISO 3166-1 alpha-2 code for the country of the address.
           */
          country: string;

          /**
           * The first line of the address.
           */
          line1: string;

          /**
           * The second line of the address.
           */
          line2: string | null;

          /**
           * The two-letter United States Postal Service (USPS) abbreviation for the US
           * state, province, or region of the address.
           */
          state: string | null;

          /**
           * The ZIP or postal code of the address.
           */
          zip: string | null;
        }

        /**
         * A means of verifying the person's identity.
         */
        export interface Identification {
          /**
           * A method that can be used to verify the individual's identity.
           *
           * - `social_security_number` - A social security number.
           * - `individual_taxpayer_identification_number` - An individual taxpayer
           *   identification number (ITIN).
           * - `passport` - A passport number.
           * - `drivers_license` - A driver's license number.
           * - `other` - Another identifying document.
           */
          method:
            | 'social_security_number'
            | 'individual_taxpayer_identification_number'
            | 'passport'
            | 'drivers_license'
            | 'other';

          /**
           * The last 4 digits of the identification number that can be used to verify the
           * individual's identity.
           */
          number_last4: string;

          [k: string]: unknown;
        }
      }
    }

    /**
     * The legal identifier of the corporation.
     */
    export interface LegalIdentifier {
      /**
       * The category of the legal identifier.
       *
       * - `us_employer_identification_number` - The Employer Identification Number (EIN)
       *   for the company. The EIN is a 9-digit number assigned by the IRS; submit it as
       *   nine digits with no dashes or other separators.
       * - `other` - A legal identifier issued by a foreign government, like a tax
       *   identification number or registration number.
       */
      category: 'us_employer_identification_number' | 'other';

      /**
       * The identifier of the legal identifier.
       */
      value: string;
    }
  }

  /**
   * Details of the government authority entity. Will be present if `structure` is
   * equal to `government_authority`.
   */
  export interface GovernmentAuthority {
    /**
     * The government authority's address.
     */
    address: GovernmentAuthority.Address;

    /**
     * The identifying details of authorized persons of the government authority.
     */
    authorized_persons: Array<GovernmentAuthority.AuthorizedPerson>;

    /**
     * The category of the government authority.
     *
     * - `municipality` - A municipality.
     * - `state_agency` - A state agency.
     * - `state_government` - A state government.
     * - `federal_agency` - A federal agency.
     */
    category: 'municipality' | 'state_agency' | 'state_government' | 'federal_agency';

    /**
     * The government authority's name.
     */
    name: string;

    /**
     * The Employer Identification Number (EIN) of the government authority.
     */
    tax_identifier: string | null;

    /**
     * The government authority's website.
     */
    website: string | null;
  }

  export namespace GovernmentAuthority {
    /**
     * The government authority's address.
     */
    export interface Address {
      /**
       * The city, district, town, or village of the address.
       */
      city: string | null;

      /**
       * The two-letter ISO 3166-1 alpha-2 code for the country of the address.
       */
      country: string;

      /**
       * The first line of the address.
       */
      line1: string;

      /**
       * The second line of the address.
       */
      line2: string | null;

      /**
       * The two-letter United States Postal Service (USPS) abbreviation for the US
       * state, province, or region of the address.
       */
      state: string | null;

      /**
       * The ZIP or postal code of the address.
       */
      zip: string | null;
    }

    export interface AuthorizedPerson {
      /**
       * The identifier of this authorized person.
       */
      authorized_person_id: string;

      /**
       * The person's legal name.
       */
      name: string;
    }
  }

  /**
   * Details of the joint entity. Will be present if `structure` is equal to `joint`.
   */
  export interface Joint {
    /**
     * The two individuals that share control of the entity.
     */
    individuals: Array<Joint.Individual>;

    /**
     * The entity's name.
     */
    name: string;
  }

  export namespace Joint {
    export interface Individual {
      /**
       * The person's address.
       */
      address: Individual.Address;

      /**
       * The person's date of birth in YYYY-MM-DD format.
       */
      date_of_birth: string;

      /**
       * A means of verifying the person's identity.
       */
      identification: Individual.Identification | null;

      /**
       * The person's legal name.
       */
      name: string;
    }

    export namespace Individual {
      /**
       * The person's address.
       */
      export interface Address {
        /**
         * The city, district, town, or village of the address.
         */
        city: string | null;

        /**
         * The two-letter ISO 3166-1 alpha-2 code for the country of the address.
         */
        country: string;

        /**
         * The first line of the address.
         */
        line1: string;

        /**
         * The second line of the address.
         */
        line2: string | null;

        /**
         * The two-letter United States Postal Service (USPS) abbreviation for the US
         * state, province, or region of the address.
         */
        state: string | null;

        /**
         * The ZIP or postal code of the address.
         */
        zip: string | null;
      }

      /**
       * A means of verifying the person's identity.
       */
      export interface Identification {
        /**
         * A method that can be used to verify the individual's identity.
         *
         * - `social_security_number` - A social security number.
         * - `individual_taxpayer_identification_number` - An individual taxpayer
         *   identification number (ITIN).
         * - `passport` - A passport number.
         * - `drivers_license` - A driver's license number.
         * - `other` - Another identifying document.
         */
        method:
          | 'social_security_number'
          | 'individual_taxpayer_identification_number'
          | 'passport'
          | 'drivers_license'
          | 'other';

        /**
         * The last 4 digits of the identification number that can be used to verify the
         * individual's identity.
         */
        number_last4: string;

        [k: string]: unknown;
      }
    }
  }

  /**
   * Details of the natural person entity. Will be present if `structure` is equal to
   * `natural_person`.
   */
  export interface NaturalPerson {
    /**
     * The person's address.
     */
    address: NaturalPerson.Address;

    /**
     * The person's date of birth in YYYY-MM-DD format.
     */
    date_of_birth: string;

    /**
     * A means of verifying the person's identity.
     */
    identification: NaturalPerson.Identification | null;

    /**
     * The person's legal name.
     */
    name: string;
  }

  export namespace NaturalPerson {
    /**
     * The person's address.
     */
    export interface Address {
      /**
       * The city, district, town, or village of the address.
       */
      city: string | null;

      /**
       * The two-letter ISO 3166-1 alpha-2 code for the country of the address.
       */
      country: string;

      /**
       * The first line of the address.
       */
      line1: string;

      /**
       * The second line of the address.
       */
      line2: string | null;

      /**
       * The two-letter United States Postal Service (USPS) abbreviation for the US
       * state, province, or region of the address.
       */
      state: string | null;

      /**
       * The ZIP or postal code of the address.
       */
      zip: string | null;
    }

    /**
     * A means of verifying the person's identity.
     */
    export interface Identification {
      /**
       * A method that can be used to verify the individual's identity.
       *
       * - `social_security_number` - A social security number.
       * - `individual_taxpayer_identification_number` - An individual taxpayer
       *   identification number (ITIN).
       * - `passport` - A passport number.
       * - `drivers_license` - A driver's license number.
       * - `other` - Another identifying document.
       */
      method:
        | 'social_security_number'
        | 'individual_taxpayer_identification_number'
        | 'passport'
        | 'drivers_license'
        | 'other';

      /**
       * The last 4 digits of the identification number that can be used to verify the
       * individual's identity.
       */
      number_last4: string;

      [k: string]: unknown;
    }
  }

  /**
   * An assessment of the entity’s potential risk of involvement in financial crimes,
   * such as money laundering.
   */
  export interface RiskRating {
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the risk
     * rating was performed.
     */
    rated_at: string;

    /**
     * The rating given to this entity.
     *
     * - `low` - Minimal risk of involvement in financial crime.
     * - `medium` - Moderate risk of involvement in financial crime.
     * - `high` - Elevated risk of involvement in financial crime.
     */
    rating: 'low' | 'medium' | 'high';
  }

  export interface TermsAgreement {
    /**
     * The timestamp of when the Entity agreed to the terms.
     */
    agreed_at: string;

    /**
     * The IP address the Entity accessed reviewed the terms from.
     */
    ip_address: string;

    /**
     * The URL of the terms agreement. This link will be provided by your bank partner.
     */
    terms_url: string;
  }

  /**
   * If you are using a third-party service for identity verification, you can use
   * this field to associate this Entity with the identifier that represents them in
   * that service.
   */
  export interface ThirdPartyVerification {
    /**
     * The reference identifier for the third party verification.
     */
    reference: string;

    /**
     * The vendor that was used to perform the verification.
     *
     * - `alloy` - Alloy. See https://alloy.com for more information.
     * - `middesk` - Middesk. See https://middesk.com for more information.
     * - `oscilar` - Oscilar. See https://oscilar.com for more information.
     * - `persona` - Persona. See https://withpersona.com for more information.
     * - `taktile` - Taktile. See https://taktile.com for more information.
     */
    vendor: 'alloy' | 'middesk' | 'oscilar' | 'persona' | 'taktile';
  }

  /**
   * Details of the trust entity. Will be present if `structure` is equal to `trust`.
   */
  export interface Trust {
    /**
     * The trust's address.
     */
    address: Trust.Address;

    /**
     * Whether the trust is `revocable` or `irrevocable`.
     *
     * - `revocable` - The trust is revocable by the grantor.
     * - `irrevocable` - The trust cannot be revoked.
     */
    category: 'revocable' | 'irrevocable';

    /**
     * The ID for the File containing the formation document of the trust.
     */
    formation_document_file_id: string | null;

    /**
     * The two-letter United States Postal Service (USPS) abbreviation for the state in
     * which the trust was formed.
     */
    formation_state: string | null;

    /**
     * The grantor of the trust. Will be present if the `category` is `revocable`.
     */
    grantor: Trust.Grantor | null;

    /**
     * The trust's name.
     */
    name: string;

    /**
     * The Employer Identification Number (EIN) of the trust itself.
     */
    tax_identifier: string | null;

    /**
     * The trustees of the trust.
     */
    trustees: Array<Trust.Trustee>;
  }

  export namespace Trust {
    /**
     * The trust's address.
     */
    export interface Address {
      /**
       * The city, district, town, or village of the address.
       */
      city: string | null;

      /**
       * The two-letter ISO 3166-1 alpha-2 code for the country of the address.
       */
      country: string;

      /**
       * The first line of the address.
       */
      line1: string;

      /**
       * The second line of the address.
       */
      line2: string | null;

      /**
       * The two-letter United States Postal Service (USPS) abbreviation for the US
       * state, province, or region of the address.
       */
      state: string | null;

      /**
       * The ZIP or postal code of the address.
       */
      zip: string | null;
    }

    /**
     * The grantor of the trust. Will be present if the `category` is `revocable`.
     */
    export interface Grantor {
      /**
       * The person's address.
       */
      address: Grantor.Address;

      /**
       * The person's date of birth in YYYY-MM-DD format.
       */
      date_of_birth: string;

      /**
       * A means of verifying the person's identity.
       */
      identification: Grantor.Identification | null;

      /**
       * The person's legal name.
       */
      name: string;
    }

    export namespace Grantor {
      /**
       * The person's address.
       */
      export interface Address {
        /**
         * The city, district, town, or village of the address.
         */
        city: string | null;

        /**
         * The two-letter ISO 3166-1 alpha-2 code for the country of the address.
         */
        country: string;

        /**
         * The first line of the address.
         */
        line1: string;

        /**
         * The second line of the address.
         */
        line2: string | null;

        /**
         * The two-letter United States Postal Service (USPS) abbreviation for the US
         * state, province, or region of the address.
         */
        state: string | null;

        /**
         * The ZIP or postal code of the address.
         */
        zip: string | null;
      }

      /**
       * A means of verifying the person's identity.
       */
      export interface Identification {
        /**
         * A method that can be used to verify the individual's identity.
         *
         * - `social_security_number` - A social security number.
         * - `individual_taxpayer_identification_number` - An individual taxpayer
         *   identification number (ITIN).
         * - `passport` - A passport number.
         * - `drivers_license` - A driver's license number.
         * - `other` - Another identifying document.
         */
        method:
          | 'social_security_number'
          | 'individual_taxpayer_identification_number'
          | 'passport'
          | 'drivers_license'
          | 'other';

        /**
         * The last 4 digits of the identification number that can be used to verify the
         * individual's identity.
         */
        number_last4: string;

        [k: string]: unknown;
      }
    }

    export interface Trustee {
      /**
       * The individual trustee of the trust. Will be present if the trustee's
       * `structure` is equal to `individual`.
       */
      individual: Trustee.Individual | null;

      /**
       * The structure of the trustee. Will always be equal to `individual`.
       *
       * - `individual` - The trustee is an individual.
       */
      structure: 'individual';
    }

    export namespace Trustee {
      /**
       * The individual trustee of the trust. Will be present if the trustee's
       * `structure` is equal to `individual`.
       */
      export interface Individual {
        /**
         * The person's address.
         */
        address: Individual.Address;

        /**
         * The person's date of birth in YYYY-MM-DD format.
         */
        date_of_birth: string;

        /**
         * A means of verifying the person's identity.
         */
        identification: Individual.Identification | null;

        /**
         * The person's legal name.
         */
        name: string;
      }

      export namespace Individual {
        /**
         * The person's address.
         */
        export interface Address {
          /**
           * The city, district, town, or village of the address.
           */
          city: string | null;

          /**
           * The two-letter ISO 3166-1 alpha-2 code for the country of the address.
           */
          country: string;

          /**
           * The first line of the address.
           */
          line1: string;

          /**
           * The second line of the address.
           */
          line2: string | null;

          /**
           * The two-letter United States Postal Service (USPS) abbreviation for the US
           * state, province, or region of the address.
           */
          state: string | null;

          /**
           * The ZIP or postal code of the address.
           */
          zip: string | null;
        }

        /**
         * A means of verifying the person's identity.
         */
        export interface Identification {
          /**
           * A method that can be used to verify the individual's identity.
           *
           * - `social_security_number` - A social security number.
           * - `individual_taxpayer_identification_number` - An individual taxpayer
           *   identification number (ITIN).
           * - `passport` - A passport number.
           * - `drivers_license` - A driver's license number.
           * - `other` - Another identifying document.
           */
          method:
            | 'social_security_number'
            | 'individual_taxpayer_identification_number'
            | 'passport'
            | 'drivers_license'
            | 'other';

          /**
           * The last 4 digits of the identification number that can be used to verify the
           * individual's identity.
           */
          number_last4: string;

          [k: string]: unknown;
        }
      }
    }
  }

  /**
   * The validation results for the entity. Learn more about
   * [validations](/documentation/entity-validation).
   */
  export interface Validation {
    /**
     * The list of issues that need to be addressed.
     */
    issues: Array<Validation.Issue>;

    /**
     * The validation status for the entity. If the status is `invalid`, the `issues`
     * array will be populated.
     *
     * - `pending` - The submitted data is being validated.
     * - `valid` - The submitted data is valid.
     * - `invalid` - Additional information is required to validate the data.
     */
    status: 'pending' | 'valid' | 'invalid';
  }

  export namespace Validation {
    export interface Issue {
      /**
       * Details when the issue is with a beneficial owner's address.
       */
      beneficial_owner_address: Issue.BeneficialOwnerAddress | null;

      /**
       * Details when the issue is with a beneficial owner's identity verification.
       */
      beneficial_owner_identity: Issue.BeneficialOwnerIdentity | null;

      /**
       * The type of issue. We may add additional possible values for this enum over
       * time; your application should be able to handle such additions gracefully.
       *
       * - `entity_tax_identifier` - The entity's tax identifier could not be validated.
       *   Update the tax ID with the
       *   [update an entity API](/documentation/api/entities#update-an-entity.corporation.legal_identifier).
       * - `entity_address` - The entity's address could not be validated. Update the
       *   address with the
       *   [update an entity API](/documentation/api/entities#update-an-entity.corporation.address).
       * - `beneficial_owner_identity` - A beneficial owner's identity could not be
       *   verified. Update the identification with the
       *   [update a beneficial owner API](/documentation/api/beneficial-owners#update-a-beneficial-owner).
       * - `beneficial_owner_address` - A beneficial owner's address could not be
       *   validated. Update the address with the
       *   [update a beneficial owner API](/documentation/api/beneficial-owners#update-a-beneficial-owner).
       */
      category:
        | 'entity_tax_identifier'
        | 'entity_address'
        | 'beneficial_owner_identity'
        | 'beneficial_owner_address';

      /**
       * Details when the issue is with the entity's address.
       */
      entity_address: Issue.EntityAddress | null;

      /**
       * Details when the issue is with the entity's tax ID.
       */
      entity_tax_identifier: Issue.EntityTaxIdentifier | null;
    }

    export namespace Issue {
      /**
       * Details when the issue is with a beneficial owner's address.
       */
      export interface BeneficialOwnerAddress {
        /**
         * The ID of the beneficial owner.
         */
        beneficial_owner_id: string;

        /**
         * The reason the address is invalid.
         *
         * - `mailbox_address` - The address is a mailbox or other non-physical address.
         */
        reason: 'mailbox_address';
      }

      /**
       * Details when the issue is with a beneficial owner's identity verification.
       */
      export interface BeneficialOwnerIdentity {
        /**
         * The ID of the beneficial owner.
         */
        beneficial_owner_id: string;
      }

      /**
       * Details when the issue is with the entity's address.
       */
      export interface EntityAddress {
        /**
         * The reason the address is invalid.
         *
         * - `mailbox_address` - The address is a mailbox or other non-physical address.
         */
        reason: 'mailbox_address';
      }

      /**
       * Details when the issue is with the entity's tax ID.
       */
      export interface EntityTaxIdentifier {}
    }
  }
}

export interface EntityCreateParams {
  /**
   * The type of Entity to create.
   *
   * - `corporation` - A corporation.
   * - `natural_person` - An individual person.
   * - `joint` - Multiple individual people.
   * - `trust` - A trust.
   * - `government_authority` - A government authority.
   */
  structure: 'corporation' | 'natural_person' | 'joint' | 'trust' | 'government_authority';

  /**
   * Details of the corporation entity to create. Required if `structure` is equal to
   * `corporation`.
   */
  corporation?: EntityCreateParams.Corporation;

  /**
   * The description you choose to give the entity.
   */
  description?: string;

  /**
   * Details of the Government Authority entity to create. Required if `structure` is
   * equal to `government_authority`.
   */
  government_authority?: EntityCreateParams.GovernmentAuthority;

  /**
   * Details of the joint entity to create. Required if `structure` is equal to
   * `joint`.
   */
  joint?: EntityCreateParams.Joint;

  /**
   * Details of the natural person entity to create. Required if `structure` is equal
   * to `natural_person`. Natural people entities should be submitted with
   * `social_security_number` or `individual_taxpayer_identification_number`
   * identification methods.
   */
  natural_person?: EntityCreateParams.NaturalPerson;

  /**
   * An assessment of the entity's potential risk of involvement in financial crimes,
   * such as money laundering.
   */
  risk_rating?: EntityCreateParams.RiskRating;

  /**
   * Additional documentation associated with the entity.
   */
  supplemental_documents?: Array<EntityCreateParams.SupplementalDocument>;

  /**
   * The terms that the Entity agreed to. Not all programs are required to submit
   * this data.
   */
  terms_agreements?: Array<EntityCreateParams.TermsAgreement>;

  /**
   * If you are using a third-party service for identity verification, you can use
   * this field to associate this Entity with the identifier that represents them in
   * that service.
   */
  third_party_verification?: EntityCreateParams.ThirdPartyVerification;

  /**
   * Details of the trust entity to create. Required if `structure` is equal to
   * `trust`.
   */
  trust?: EntityCreateParams.Trust;

  [k: string]: unknown;
}

export namespace EntityCreateParams {
  /**
   * Details of the corporation entity to create. Required if `structure` is equal to
   * `corporation`.
   */
  export interface Corporation {
    /**
     * The entity's physical address. Mail receiving locations like PO Boxes and PMB's
     * are disallowed.
     */
    address: Corporation.Address;

    /**
     * The identifying details of each person who owns 25% or more of the business and
     * one control person, like the CEO, CFO, or other executive. You can submit
     * between 1 and 5 people to this list.
     */
    beneficial_owners: Array<Corporation.BeneficialOwner>;

    /**
     * The legal identifier of the corporation. This is usually the Employer
     * Identification Number (EIN).
     */
    legal_identifier: Corporation.LegalIdentifier;

    /**
     * The legal name of the corporation.
     */
    name: string;

    /**
     * If the entity is exempt from the requirement to submit beneficial owners,
     * provide the justification. If a reason is provided, you do not need to submit a
     * list of beneficial owners.
     *
     * - `regulated_financial_institution` - A regulated financial institution.
     * - `publicly_traded_company` - A publicly traded company.
     * - `public_entity` - A public entity acting on behalf of the federal or a state
     *   government.
     * - `other` - Any other reason why this entity is exempt from the requirement to
     *   submit beneficial owners. You can only use this exemption after approval from
     *   your bank partner.
     */
    beneficial_ownership_exemption_reason?:
      | 'regulated_financial_institution'
      | 'publicly_traded_company'
      | 'public_entity'
      | 'other';

    /**
     * An email address for the business. Not every program requires an email for
     * submitted Entities.
     */
    email?: string;

    /**
     * The two-letter United States Postal Service (USPS) abbreviation for the
     * corporation's state of incorporation.
     */
    incorporation_state?: string;

    /**
     * The North American Industry Classification System (NAICS) code for the
     * corporation's primary line of business. This is a number, like `5132` for
     * `Software Publishers`. A full list of classification codes is available
     * [here](https://increase.com/documentation/data-dictionary#north-american-industry-classification-system-codes).
     */
    industry_code?: string;

    /**
     * A website for the business. Not every program requires a website for submitted
     * Entities.
     */
    website?: string;

    [k: string]: unknown;
  }

  export namespace Corporation {
    /**
     * The entity's physical address. Mail receiving locations like PO Boxes and PMB's
     * are disallowed.
     */
    export interface Address {
      /**
       * The city, district, town, or village of the address.
       */
      city: string;

      /**
       * The two-letter ISO 3166-1 alpha-2 code for the country of the address.
       */
      country: string;

      /**
       * The first line of the address. This is usually the street number and street.
       */
      line1: string;

      /**
       * The second line of the address. This might be the floor or room number.
       */
      line2?: string;

      /**
       * The two-letter United States Postal Service (USPS) abbreviation for the US
       * state, province, or region of the address. Required in certain countries.
       */
      state?: string;

      /**
       * The ZIP or postal code of the address. Required in certain countries.
       */
      zip?: string;
    }

    export interface BeneficialOwner {
      /**
       * Personal details for the beneficial owner.
       */
      individual: BeneficialOwner.Individual;

      /**
       * Why this person is considered a beneficial owner of the entity. At least one
       * option is required, if a person is both a control person and owner, submit an
       * array containing both.
       */
      prongs: Array<'ownership' | 'control'>;

      /**
       * This person's role or title within the entity.
       */
      company_title?: string;

      [k: string]: unknown;
    }

    export namespace BeneficialOwner {
      /**
       * Personal details for the beneficial owner.
       */
      export interface Individual {
        /**
         * The individual's physical address. Mail receiving locations like PO Boxes and
         * PMB's are disallowed.
         */
        address: Individual.Address;

        /**
         * The person's date of birth in YYYY-MM-DD format.
         */
        date_of_birth: string;

        /**
         * A means of verifying the person's identity.
         */
        identification: Individual.Identification;

        /**
         * The person's legal name.
         */
        name: string;

        /**
         * The identification method for an individual can only be a passport, driver's
         * license, or other document if you've confirmed the individual does not have a US
         * tax id (either a Social Security Number or Individual Taxpayer Identification
         * Number).
         */
        confirmed_no_us_tax_id?: boolean;
      }

      export namespace Individual {
        /**
         * The individual's physical address. Mail receiving locations like PO Boxes and
         * PMB's are disallowed.
         */
        export interface Address {
          /**
           * The city, district, town, or village of the address.
           */
          city: string;

          /**
           * The two-letter ISO 3166-1 alpha-2 code for the country of the address.
           */
          country: string;

          /**
           * The first line of the address. This is usually the street number and street.
           */
          line1: string;

          /**
           * The second line of the address. This might be the floor or room number.
           */
          line2?: string;

          /**
           * The two-letter United States Postal Service (USPS) abbreviation for the US
           * state, province, or region of the address. Required in certain countries.
           */
          state?: string;

          /**
           * The ZIP or postal code of the address. Required in certain countries.
           */
          zip?: string;
        }

        /**
         * A means of verifying the person's identity.
         */
        export interface Identification {
          /**
           * A method that can be used to verify the individual's identity.
           *
           * - `social_security_number` - A social security number.
           * - `individual_taxpayer_identification_number` - An individual taxpayer
           *   identification number (ITIN).
           * - `passport` - A passport number.
           * - `drivers_license` - A driver's license number.
           * - `other` - Another identifying document.
           */
          method:
            | 'social_security_number'
            | 'individual_taxpayer_identification_number'
            | 'passport'
            | 'drivers_license'
            | 'other';

          /**
           * An identification number that can be used to verify the individual's identity,
           * such as a social security number. For Social Security Numbers and Individual
           * Taxpayer Identification Numbers, submit nine digits with no dashes or other
           * separators.
           */
          number: string;

          /**
           * Information about the United States driver's license used for identification.
           * Required if `method` is equal to `drivers_license`.
           */
          drivers_license?: Identification.DriversLicense;

          /**
           * Information about the identification document provided. Required if `method` is
           * equal to `other`.
           */
          other?: Identification.Other;

          /**
           * Information about the passport used for identification. Required if `method` is
           * equal to `passport`.
           */
          passport?: Identification.Passport;

          [k: string]: unknown;
        }

        export namespace Identification {
          /**
           * Information about the United States driver's license used for identification.
           * Required if `method` is equal to `drivers_license`.
           */
          export interface DriversLicense {
            /**
             * The driver's license's expiration date in YYYY-MM-DD format.
             */
            expiration_date: string;

            /**
             * The identifier of the File containing the front of the driver's license.
             */
            file_id: string;

            /**
             * The state that issued the provided driver's license.
             */
            state: string;

            /**
             * The identifier of the File containing the back of the driver's license.
             */
            back_file_id?: string;
          }

          /**
           * Information about the identification document provided. Required if `method` is
           * equal to `other`.
           */
          export interface Other {
            /**
             * The two-character ISO 3166-1 code representing the country that issued the
             * document (e.g., `US`).
             */
            country: string;

            /**
             * A description of the document submitted.
             */
            description: string;

            /**
             * The identifier of the File containing the front of the document.
             */
            file_id: string;

            /**
             * The identifier of the File containing the back of the document. Not every
             * document has a reverse side.
             */
            back_file_id?: string;

            /**
             * The document's expiration date in YYYY-MM-DD format.
             */
            expiration_date?: string;
          }

          /**
           * Information about the passport used for identification. Required if `method` is
           * equal to `passport`.
           */
          export interface Passport {
            /**
             * The two-character ISO 3166-1 code representing the country that issued the
             * document (e.g., `US`).
             */
            country: string;

            /**
             * The passport's expiration date in YYYY-MM-DD format.
             */
            expiration_date: string;

            /**
             * The identifier of the File containing the passport.
             */
            file_id: string;
          }
        }
      }
    }

    /**
     * The legal identifier of the corporation. This is usually the Employer
     * Identification Number (EIN).
     */
    export interface LegalIdentifier {
      /**
       * The legal identifier. For US Employer Identification Numbers, submit nine digits
       * with no dashes or other separators.
       */
      value: string;

      /**
       * The category of the legal identifier. If not provided, the default is
       * `us_employer_identification_number`.
       *
       * - `us_employer_identification_number` - The Employer Identification Number (EIN)
       *   for the company. The EIN is a 9-digit number assigned by the IRS; submit it as
       *   nine digits with no dashes or other separators.
       * - `other` - A legal identifier issued by a foreign government, like a tax
       *   identification number or registration number.
       */
      category?: 'us_employer_identification_number' | 'other';
    }
  }

  /**
   * Details of the Government Authority entity to create. Required if `structure` is
   * equal to `government_authority`.
   */
  export interface GovernmentAuthority {
    /**
     * The entity's physical address. Mail receiving locations like PO Boxes and PMB's
     * are disallowed.
     */
    address: GovernmentAuthority.Address;

    /**
     * The identifying details of authorized officials acting on the entity's behalf.
     */
    authorized_persons: Array<GovernmentAuthority.AuthorizedPerson>;

    /**
     * The category of the government authority.
     *
     * - `municipality` - A municipality.
     * - `state_agency` - A state agency.
     * - `state_government` - A state government.
     * - `federal_agency` - A federal agency.
     */
    category: 'municipality' | 'state_agency' | 'state_government' | 'federal_agency';

    /**
     * The legal name of the government authority.
     */
    name: string;

    /**
     * The Employer Identification Number (EIN) for the government authority. Submit
     * nine digits with no dashes or other separators.
     */
    tax_identifier: string;

    /**
     * A website for the government authority. Not every program requires a website for
     * submitted Entities.
     */
    website?: string;
  }

  export namespace GovernmentAuthority {
    /**
     * The entity's physical address. Mail receiving locations like PO Boxes and PMB's
     * are disallowed.
     */
    export interface Address {
      /**
       * The city of the address.
       */
      city: string;

      /**
       * The first line of the address. This is usually the street number and street.
       */
      line1: string;

      /**
       * The two-letter United States Postal Service (USPS) abbreviation for the state of
       * the address.
       */
      state: string;

      /**
       * The ZIP code of the address.
       */
      zip: string;

      /**
       * The second line of the address. This might be the floor or room number.
       */
      line2?: string;
    }

    export interface AuthorizedPerson {
      /**
       * The person's legal name.
       */
      name: string;
    }
  }

  /**
   * Details of the joint entity to create. Required if `structure` is equal to
   * `joint`.
   */
  export interface Joint {
    /**
     * The two individuals that share control of the entity.
     */
    individuals: Array<Joint.Individual>;
  }

  export namespace Joint {
    export interface Individual {
      /**
       * The individual's physical address. Mail receiving locations like PO Boxes and
       * PMB's are disallowed.
       */
      address: Individual.Address;

      /**
       * The person's date of birth in YYYY-MM-DD format.
       */
      date_of_birth: string;

      /**
       * A means of verifying the person's identity.
       */
      identification: Individual.Identification;

      /**
       * The person's legal name.
       */
      name: string;

      /**
       * The identification method for an individual can only be a passport, driver's
       * license, or other document if you've confirmed the individual does not have a US
       * tax id (either a Social Security Number or Individual Taxpayer Identification
       * Number).
       */
      confirmed_no_us_tax_id?: boolean;
    }

    export namespace Individual {
      /**
       * The individual's physical address. Mail receiving locations like PO Boxes and
       * PMB's are disallowed.
       */
      export interface Address {
        /**
         * The city, district, town, or village of the address.
         */
        city: string;

        /**
         * The two-letter ISO 3166-1 alpha-2 code for the country of the address.
         */
        country: string;

        /**
         * The first line of the address. This is usually the street number and street.
         */
        line1: string;

        /**
         * The second line of the address. This might be the floor or room number.
         */
        line2?: string;

        /**
         * The two-letter United States Postal Service (USPS) abbreviation for the US
         * state, province, or region of the address. Required in certain countries.
         */
        state?: string;

        /**
         * The ZIP or postal code of the address. Required in certain countries.
         */
        zip?: string;
      }

      /**
       * A means of verifying the person's identity.
       */
      export interface Identification {
        /**
         * A method that can be used to verify the individual's identity.
         *
         * - `social_security_number` - A social security number.
         * - `individual_taxpayer_identification_number` - An individual taxpayer
         *   identification number (ITIN).
         * - `passport` - A passport number.
         * - `drivers_license` - A driver's license number.
         * - `other` - Another identifying document.
         */
        method:
          | 'social_security_number'
          | 'individual_taxpayer_identification_number'
          | 'passport'
          | 'drivers_license'
          | 'other';

        /**
         * An identification number that can be used to verify the individual's identity,
         * such as a social security number. For Social Security Numbers and Individual
         * Taxpayer Identification Numbers, submit nine digits with no dashes or other
         * separators.
         */
        number: string;

        /**
         * Information about the United States driver's license used for identification.
         * Required if `method` is equal to `drivers_license`.
         */
        drivers_license?: Identification.DriversLicense;

        /**
         * Information about the identification document provided. Required if `method` is
         * equal to `other`.
         */
        other?: Identification.Other;

        /**
         * Information about the passport used for identification. Required if `method` is
         * equal to `passport`.
         */
        passport?: Identification.Passport;

        [k: string]: unknown;
      }

      export namespace Identification {
        /**
         * Information about the United States driver's license used for identification.
         * Required if `method` is equal to `drivers_license`.
         */
        export interface DriversLicense {
          /**
           * The driver's license's expiration date in YYYY-MM-DD format.
           */
          expiration_date: string;

          /**
           * The identifier of the File containing the front of the driver's license.
           */
          file_id: string;

          /**
           * The state that issued the provided driver's license.
           */
          state: string;

          /**
           * The identifier of the File containing the back of the driver's license.
           */
          back_file_id?: string;
        }

        /**
         * Information about the identification document provided. Required if `method` is
         * equal to `other`.
         */
        export interface Other {
          /**
           * The two-character ISO 3166-1 code representing the country that issued the
           * document (e.g., `US`).
           */
          country: string;

          /**
           * A description of the document submitted.
           */
          description: string;

          /**
           * The identifier of the File containing the front of the document.
           */
          file_id: string;

          /**
           * The identifier of the File containing the back of the document. Not every
           * document has a reverse side.
           */
          back_file_id?: string;

          /**
           * The document's expiration date in YYYY-MM-DD format.
           */
          expiration_date?: string;
        }

        /**
         * Information about the passport used for identification. Required if `method` is
         * equal to `passport`.
         */
        export interface Passport {
          /**
           * The two-character ISO 3166-1 code representing the country that issued the
           * document (e.g., `US`).
           */
          country: string;

          /**
           * The passport's expiration date in YYYY-MM-DD format.
           */
          expiration_date: string;

          /**
           * The identifier of the File containing the passport.
           */
          file_id: string;
        }
      }
    }
  }

  /**
   * Details of the natural person entity to create. Required if `structure` is equal
   * to `natural_person`. Natural people entities should be submitted with
   * `social_security_number` or `individual_taxpayer_identification_number`
   * identification methods.
   */
  export interface NaturalPerson {
    /**
     * The individual's physical address. Mail receiving locations like PO Boxes and
     * PMB's are disallowed.
     */
    address: NaturalPerson.Address;

    /**
     * The person's date of birth in YYYY-MM-DD format.
     */
    date_of_birth: string;

    /**
     * A means of verifying the person's identity.
     */
    identification: NaturalPerson.Identification;

    /**
     * The person's legal name.
     */
    name: string;

    /**
     * The identification method for an individual can only be a passport, driver's
     * license, or other document if you've confirmed the individual does not have a US
     * tax id (either a Social Security Number or Individual Taxpayer Identification
     * Number).
     */
    confirmed_no_us_tax_id?: boolean;
  }

  export namespace NaturalPerson {
    /**
     * The individual's physical address. Mail receiving locations like PO Boxes and
     * PMB's are disallowed.
     */
    export interface Address {
      /**
       * The city, district, town, or village of the address.
       */
      city: string;

      /**
       * The two-letter ISO 3166-1 alpha-2 code for the country of the address.
       */
      country: string;

      /**
       * The first line of the address. This is usually the street number and street.
       */
      line1: string;

      /**
       * The second line of the address. This might be the floor or room number.
       */
      line2?: string;

      /**
       * The two-letter United States Postal Service (USPS) abbreviation for the US
       * state, province, or region of the address. Required in certain countries.
       */
      state?: string;

      /**
       * The ZIP or postal code of the address. Required in certain countries.
       */
      zip?: string;
    }

    /**
     * A means of verifying the person's identity.
     */
    export interface Identification {
      /**
       * A method that can be used to verify the individual's identity.
       *
       * - `social_security_number` - A social security number.
       * - `individual_taxpayer_identification_number` - An individual taxpayer
       *   identification number (ITIN).
       * - `passport` - A passport number.
       * - `drivers_license` - A driver's license number.
       * - `other` - Another identifying document.
       */
      method:
        | 'social_security_number'
        | 'individual_taxpayer_identification_number'
        | 'passport'
        | 'drivers_license'
        | 'other';

      /**
       * An identification number that can be used to verify the individual's identity,
       * such as a social security number. For Social Security Numbers and Individual
       * Taxpayer Identification Numbers, submit nine digits with no dashes or other
       * separators.
       */
      number: string;

      /**
       * Information about the United States driver's license used for identification.
       * Required if `method` is equal to `drivers_license`.
       */
      drivers_license?: Identification.DriversLicense;

      /**
       * Information about the identification document provided. Required if `method` is
       * equal to `other`.
       */
      other?: Identification.Other;

      /**
       * Information about the passport used for identification. Required if `method` is
       * equal to `passport`.
       */
      passport?: Identification.Passport;

      [k: string]: unknown;
    }

    export namespace Identification {
      /**
       * Information about the United States driver's license used for identification.
       * Required if `method` is equal to `drivers_license`.
       */
      export interface DriversLicense {
        /**
         * The driver's license's expiration date in YYYY-MM-DD format.
         */
        expiration_date: string;

        /**
         * The identifier of the File containing the front of the driver's license.
         */
        file_id: string;

        /**
         * The state that issued the provided driver's license.
         */
        state: string;

        /**
         * The identifier of the File containing the back of the driver's license.
         */
        back_file_id?: string;
      }

      /**
       * Information about the identification document provided. Required if `method` is
       * equal to `other`.
       */
      export interface Other {
        /**
         * The two-character ISO 3166-1 code representing the country that issued the
         * document (e.g., `US`).
         */
        country: string;

        /**
         * A description of the document submitted.
         */
        description: string;

        /**
         * The identifier of the File containing the front of the document.
         */
        file_id: string;

        /**
         * The identifier of the File containing the back of the document. Not every
         * document has a reverse side.
         */
        back_file_id?: string;

        /**
         * The document's expiration date in YYYY-MM-DD format.
         */
        expiration_date?: string;
      }

      /**
       * Information about the passport used for identification. Required if `method` is
       * equal to `passport`.
       */
      export interface Passport {
        /**
         * The two-character ISO 3166-1 code representing the country that issued the
         * document (e.g., `US`).
         */
        country: string;

        /**
         * The passport's expiration date in YYYY-MM-DD format.
         */
        expiration_date: string;

        /**
         * The identifier of the File containing the passport.
         */
        file_id: string;
      }
    }
  }

  /**
   * An assessment of the entity's potential risk of involvement in financial crimes,
   * such as money laundering.
   */
  export interface RiskRating {
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the risk
     * rating was performed.
     */
    rated_at: string;

    /**
     * The rating given to this entity.
     *
     * - `low` - Minimal risk of involvement in financial crime.
     * - `medium` - Moderate risk of involvement in financial crime.
     * - `high` - Elevated risk of involvement in financial crime.
     */
    rating: 'low' | 'medium' | 'high';
  }

  export interface SupplementalDocument {
    /**
     * The identifier of the File containing the document.
     */
    file_id: string;
  }

  export interface TermsAgreement {
    /**
     * The timestamp of when the Entity agreed to the terms.
     */
    agreed_at: string;

    /**
     * The IP address the Entity accessed reviewed the terms from.
     */
    ip_address: string;

    /**
     * The URL of the terms agreement. This link will be provided by your bank partner.
     */
    terms_url: string;
  }

  /**
   * If you are using a third-party service for identity verification, you can use
   * this field to associate this Entity with the identifier that represents them in
   * that service.
   */
  export interface ThirdPartyVerification {
    /**
     * The reference identifier for the third party verification.
     */
    reference: string;

    /**
     * The vendor that was used to perform the verification.
     *
     * - `alloy` - Alloy. See https://alloy.com for more information.
     * - `middesk` - Middesk. See https://middesk.com for more information.
     * - `oscilar` - Oscilar. See https://oscilar.com for more information.
     * - `persona` - Persona. See https://withpersona.com for more information.
     * - `taktile` - Taktile. See https://taktile.com for more information.
     */
    vendor: 'alloy' | 'middesk' | 'oscilar' | 'persona' | 'taktile';
  }

  /**
   * Details of the trust entity to create. Required if `structure` is equal to
   * `trust`.
   */
  export interface Trust {
    /**
     * The trust's physical address. Mail receiving locations like PO Boxes and PMB's
     * are disallowed.
     */
    address: Trust.Address;

    /**
     * Whether the trust is `revocable` or `irrevocable`. Irrevocable trusts require
     * their own Employer Identification Number. Revocable trusts require information
     * about the individual `grantor` who created the trust.
     *
     * - `revocable` - The trust is revocable by the grantor.
     * - `irrevocable` - The trust cannot be revoked.
     */
    category: 'revocable' | 'irrevocable';

    /**
     * The legal name of the trust.
     */
    name: string;

    /**
     * The trustees of the trust.
     */
    trustees: Array<Trust.Trustee>;

    /**
     * The identifier of the File containing the formation document of the trust.
     */
    formation_document_file_id?: string;

    /**
     * The two-letter United States Postal Service (USPS) abbreviation for the state in
     * which the trust was formed.
     */
    formation_state?: string;

    /**
     * The grantor of the trust. Required if `category` is equal to `revocable`.
     */
    grantor?: Trust.Grantor;

    /**
     * The Employer Identification Number (EIN) for the trust. Submit nine digits with
     * no dashes or other separators. Required if `category` is equal to `irrevocable`.
     */
    tax_identifier?: string;
  }

  export namespace Trust {
    /**
     * The trust's physical address. Mail receiving locations like PO Boxes and PMB's
     * are disallowed.
     */
    export interface Address {
      /**
       * The city of the address.
       */
      city: string;

      /**
       * The first line of the address. This is usually the street number and street.
       */
      line1: string;

      /**
       * The two-letter United States Postal Service (USPS) abbreviation for the state of
       * the address.
       */
      state: string;

      /**
       * The ZIP code of the address.
       */
      zip: string;

      /**
       * The second line of the address. This might be the floor or room number.
       */
      line2?: string;
    }

    export interface Trustee {
      /**
       * The structure of the trustee.
       *
       * - `individual` - The trustee is an individual.
       */
      structure: 'individual';

      /**
       * Details of the individual trustee. Within the trustee object, this is required
       * if `structure` is equal to `individual`.
       */
      individual?: Trustee.Individual;
    }

    export namespace Trustee {
      /**
       * Details of the individual trustee. Within the trustee object, this is required
       * if `structure` is equal to `individual`.
       */
      export interface Individual {
        /**
         * The individual's physical address. Mail receiving locations like PO Boxes and
         * PMB's are disallowed.
         */
        address: Individual.Address;

        /**
         * The person's date of birth in YYYY-MM-DD format.
         */
        date_of_birth: string;

        /**
         * A means of verifying the person's identity.
         */
        identification: Individual.Identification;

        /**
         * The person's legal name.
         */
        name: string;

        /**
         * The identification method for an individual can only be a passport, driver's
         * license, or other document if you've confirmed the individual does not have a US
         * tax id (either a Social Security Number or Individual Taxpayer Identification
         * Number).
         */
        confirmed_no_us_tax_id?: boolean;
      }

      export namespace Individual {
        /**
         * The individual's physical address. Mail receiving locations like PO Boxes and
         * PMB's are disallowed.
         */
        export interface Address {
          /**
           * The city, district, town, or village of the address.
           */
          city: string;

          /**
           * The two-letter ISO 3166-1 alpha-2 code for the country of the address.
           */
          country: string;

          /**
           * The first line of the address. This is usually the street number and street.
           */
          line1: string;

          /**
           * The second line of the address. This might be the floor or room number.
           */
          line2?: string;

          /**
           * The two-letter United States Postal Service (USPS) abbreviation for the US
           * state, province, or region of the address. Required in certain countries.
           */
          state?: string;

          /**
           * The ZIP or postal code of the address. Required in certain countries.
           */
          zip?: string;
        }

        /**
         * A means of verifying the person's identity.
         */
        export interface Identification {
          /**
           * A method that can be used to verify the individual's identity.
           *
           * - `social_security_number` - A social security number.
           * - `individual_taxpayer_identification_number` - An individual taxpayer
           *   identification number (ITIN).
           * - `passport` - A passport number.
           * - `drivers_license` - A driver's license number.
           * - `other` - Another identifying document.
           */
          method:
            | 'social_security_number'
            | 'individual_taxpayer_identification_number'
            | 'passport'
            | 'drivers_license'
            | 'other';

          /**
           * An identification number that can be used to verify the individual's identity,
           * such as a social security number. For Social Security Numbers and Individual
           * Taxpayer Identification Numbers, submit nine digits with no dashes or other
           * separators.
           */
          number: string;

          /**
           * Information about the United States driver's license used for identification.
           * Required if `method` is equal to `drivers_license`.
           */
          drivers_license?: Identification.DriversLicense;

          /**
           * Information about the identification document provided. Required if `method` is
           * equal to `other`.
           */
          other?: Identification.Other;

          /**
           * Information about the passport used for identification. Required if `method` is
           * equal to `passport`.
           */
          passport?: Identification.Passport;

          [k: string]: unknown;
        }

        export namespace Identification {
          /**
           * Information about the United States driver's license used for identification.
           * Required if `method` is equal to `drivers_license`.
           */
          export interface DriversLicense {
            /**
             * The driver's license's expiration date in YYYY-MM-DD format.
             */
            expiration_date: string;

            /**
             * The identifier of the File containing the front of the driver's license.
             */
            file_id: string;

            /**
             * The state that issued the provided driver's license.
             */
            state: string;

            /**
             * The identifier of the File containing the back of the driver's license.
             */
            back_file_id?: string;
          }

          /**
           * Information about the identification document provided. Required if `method` is
           * equal to `other`.
           */
          export interface Other {
            /**
             * The two-character ISO 3166-1 code representing the country that issued the
             * document (e.g., `US`).
             */
            country: string;

            /**
             * A description of the document submitted.
             */
            description: string;

            /**
             * The identifier of the File containing the front of the document.
             */
            file_id: string;

            /**
             * The identifier of the File containing the back of the document. Not every
             * document has a reverse side.
             */
            back_file_id?: string;

            /**
             * The document's expiration date in YYYY-MM-DD format.
             */
            expiration_date?: string;
          }

          /**
           * Information about the passport used for identification. Required if `method` is
           * equal to `passport`.
           */
          export interface Passport {
            /**
             * The two-character ISO 3166-1 code representing the country that issued the
             * document (e.g., `US`).
             */
            country: string;

            /**
             * The passport's expiration date in YYYY-MM-DD format.
             */
            expiration_date: string;

            /**
             * The identifier of the File containing the passport.
             */
            file_id: string;
          }
        }
      }
    }

    /**
     * The grantor of the trust. Required if `category` is equal to `revocable`.
     */
    export interface Grantor {
      /**
       * The individual's physical address. Mail receiving locations like PO Boxes and
       * PMB's are disallowed.
       */
      address: Grantor.Address;

      /**
       * The person's date of birth in YYYY-MM-DD format.
       */
      date_of_birth: string;

      /**
       * A means of verifying the person's identity.
       */
      identification: Grantor.Identification;

      /**
       * The person's legal name.
       */
      name: string;

      /**
       * The identification method for an individual can only be a passport, driver's
       * license, or other document if you've confirmed the individual does not have a US
       * tax id (either a Social Security Number or Individual Taxpayer Identification
       * Number).
       */
      confirmed_no_us_tax_id?: boolean;
    }

    export namespace Grantor {
      /**
       * The individual's physical address. Mail receiving locations like PO Boxes and
       * PMB's are disallowed.
       */
      export interface Address {
        /**
         * The city, district, town, or village of the address.
         */
        city: string;

        /**
         * The two-letter ISO 3166-1 alpha-2 code for the country of the address.
         */
        country: string;

        /**
         * The first line of the address. This is usually the street number and street.
         */
        line1: string;

        /**
         * The second line of the address. This might be the floor or room number.
         */
        line2?: string;

        /**
         * The two-letter United States Postal Service (USPS) abbreviation for the US
         * state, province, or region of the address. Required in certain countries.
         */
        state?: string;

        /**
         * The ZIP or postal code of the address. Required in certain countries.
         */
        zip?: string;
      }

      /**
       * A means of verifying the person's identity.
       */
      export interface Identification {
        /**
         * A method that can be used to verify the individual's identity.
         *
         * - `social_security_number` - A social security number.
         * - `individual_taxpayer_identification_number` - An individual taxpayer
         *   identification number (ITIN).
         * - `passport` - A passport number.
         * - `drivers_license` - A driver's license number.
         * - `other` - Another identifying document.
         */
        method:
          | 'social_security_number'
          | 'individual_taxpayer_identification_number'
          | 'passport'
          | 'drivers_license'
          | 'other';

        /**
         * An identification number that can be used to verify the individual's identity,
         * such as a social security number. For Social Security Numbers and Individual
         * Taxpayer Identification Numbers, submit nine digits with no dashes or other
         * separators.
         */
        number: string;

        /**
         * Information about the United States driver's license used for identification.
         * Required if `method` is equal to `drivers_license`.
         */
        drivers_license?: Identification.DriversLicense;

        /**
         * Information about the identification document provided. Required if `method` is
         * equal to `other`.
         */
        other?: Identification.Other;

        /**
         * Information about the passport used for identification. Required if `method` is
         * equal to `passport`.
         */
        passport?: Identification.Passport;

        [k: string]: unknown;
      }

      export namespace Identification {
        /**
         * Information about the United States driver's license used for identification.
         * Required if `method` is equal to `drivers_license`.
         */
        export interface DriversLicense {
          /**
           * The driver's license's expiration date in YYYY-MM-DD format.
           */
          expiration_date: string;

          /**
           * The identifier of the File containing the front of the driver's license.
           */
          file_id: string;

          /**
           * The state that issued the provided driver's license.
           */
          state: string;

          /**
           * The identifier of the File containing the back of the driver's license.
           */
          back_file_id?: string;
        }

        /**
         * Information about the identification document provided. Required if `method` is
         * equal to `other`.
         */
        export interface Other {
          /**
           * The two-character ISO 3166-1 code representing the country that issued the
           * document (e.g., `US`).
           */
          country: string;

          /**
           * A description of the document submitted.
           */
          description: string;

          /**
           * The identifier of the File containing the front of the document.
           */
          file_id: string;

          /**
           * The identifier of the File containing the back of the document. Not every
           * document has a reverse side.
           */
          back_file_id?: string;

          /**
           * The document's expiration date in YYYY-MM-DD format.
           */
          expiration_date?: string;
        }

        /**
         * Information about the passport used for identification. Required if `method` is
         * equal to `passport`.
         */
        export interface Passport {
          /**
           * The two-character ISO 3166-1 code representing the country that issued the
           * document (e.g., `US`).
           */
          country: string;

          /**
           * The passport's expiration date in YYYY-MM-DD format.
           */
          expiration_date: string;

          /**
           * The identifier of the File containing the passport.
           */
          file_id: string;
        }
      }
    }
  }
}

export interface EntityUpdateParams {
  /**
   * Details of the corporation entity to update. If you specify this parameter and
   * the entity is not a corporation, the request will fail.
   */
  corporation?: EntityUpdateParams.Corporation;

  /**
   * When your user last confirmed the Entity's details. Depending on your program,
   * you may be required to affirmatively confirm details with your users on an
   * annual basis.
   */
  details_confirmed_at?: string;

  /**
   * Details of the government authority entity to update. If you specify this
   * parameter and the entity is not a government authority, the request will fail.
   */
  government_authority?: EntityUpdateParams.GovernmentAuthority;

  /**
   * Details of the natural person entity to update. If you specify this parameter
   * and the entity is not a natural person, the request will fail.
   */
  natural_person?: EntityUpdateParams.NaturalPerson;

  /**
   * An assessment of the entity’s potential risk of involvement in financial crimes,
   * such as money laundering.
   */
  risk_rating?: EntityUpdateParams.RiskRating;

  /**
   * New terms that the Entity agreed to. Not all programs are required to submit
   * this data. This will not archive previously submitted terms.
   */
  terms_agreements?: Array<EntityUpdateParams.TermsAgreement>;

  /**
   * If you are using a third-party service for identity verification, you can use
   * this field to associate this Entity with the identifier that represents them in
   * that service.
   */
  third_party_verification?: EntityUpdateParams.ThirdPartyVerification;

  /**
   * Details of the trust entity to update. If you specify this parameter and the
   * entity is not a trust, the request will fail.
   */
  trust?: EntityUpdateParams.Trust;
}

export namespace EntityUpdateParams {
  /**
   * Details of the corporation entity to update. If you specify this parameter and
   * the entity is not a corporation, the request will fail.
   */
  export interface Corporation {
    /**
     * The entity's physical address. Mail receiving locations like PO Boxes and PMB's
     * are disallowed.
     */
    address?: Corporation.Address;

    /**
     * An email address for the business. Not every program requires an email for
     * submitted Entities.
     */
    email?: string;

    /**
     * The two-letter United States Postal Service (USPS) abbreviation for the
     * corporation's state of incorporation.
     */
    incorporation_state?: string;

    /**
     * The North American Industry Classification System (NAICS) code for the
     * corporation's primary line of business. This is a number, like `5132` for
     * `Software Publishers`. A full list of classification codes is available
     * [here](https://increase.com/documentation/data-dictionary#north-american-industry-classification-system-codes).
     */
    industry_code?: string;

    /**
     * The legal identifier of the corporation. This is usually the Employer
     * Identification Number (EIN).
     */
    legal_identifier?: Corporation.LegalIdentifier;

    /**
     * The legal name of the corporation.
     */
    name?: string;

    /**
     * A website for the business. Not every program requires a website for submitted
     * Entities.
     */
    website?: string;

    [k: string]: unknown;
  }

  export namespace Corporation {
    /**
     * The entity's physical address. Mail receiving locations like PO Boxes and PMB's
     * are disallowed.
     */
    export interface Address {
      /**
       * The city, district, town, or village of the address.
       */
      city: string;

      /**
       * The two-letter ISO 3166-1 alpha-2 code for the country of the address.
       */
      country: string;

      /**
       * The first line of the address. This is usually the street number and street.
       */
      line1: string;

      /**
       * The second line of the address. This might be the floor or room number.
       */
      line2?: string;

      /**
       * The two-letter United States Postal Service (USPS) abbreviation for the US
       * state, province, or region of the address. Required in certain countries.
       */
      state?: string;

      /**
       * The ZIP or postal code of the address. Required in certain countries.
       */
      zip?: string;
    }

    /**
     * The legal identifier of the corporation. This is usually the Employer
     * Identification Number (EIN).
     */
    export interface LegalIdentifier {
      /**
       * The identifier of the legal identifier. For US Employer Identification Numbers,
       * submit nine digits with no dashes or other separators.
       */
      value: string;

      /**
       * The category of the legal identifier.
       *
       * - `us_employer_identification_number` - The Employer Identification Number (EIN)
       *   for the company. The EIN is a 9-digit number assigned by the IRS; submit it as
       *   nine digits with no dashes or other separators.
       * - `other` - A legal identifier issued by a foreign government, like a tax
       *   identification number or registration number.
       */
      category?: 'us_employer_identification_number' | 'other';
    }
  }

  /**
   * Details of the government authority entity to update. If you specify this
   * parameter and the entity is not a government authority, the request will fail.
   */
  export interface GovernmentAuthority {
    /**
     * The entity's physical address. Mail receiving locations like PO Boxes and PMB's
     * are disallowed.
     */
    address?: GovernmentAuthority.Address;

    /**
     * The legal name of the government authority.
     */
    name?: string;
  }

  export namespace GovernmentAuthority {
    /**
     * The entity's physical address. Mail receiving locations like PO Boxes and PMB's
     * are disallowed.
     */
    export interface Address {
      /**
       * The city of the address.
       */
      city: string;

      /**
       * The first line of the address. This is usually the street number and street.
       */
      line1: string;

      /**
       * The two-letter United States Postal Service (USPS) abbreviation for the state of
       * the address.
       */
      state: string;

      /**
       * The ZIP code of the address.
       */
      zip: string;

      /**
       * The second line of the address. This might be the floor or room number.
       */
      line2?: string;
    }
  }

  /**
   * Details of the natural person entity to update. If you specify this parameter
   * and the entity is not a natural person, the request will fail.
   */
  export interface NaturalPerson {
    /**
     * The entity's physical address. Mail receiving locations like PO Boxes and PMB's
     * are disallowed.
     */
    address?: NaturalPerson.Address;

    /**
     * The identification method for an individual can only be a passport, driver's
     * license, or other document if you've confirmed the individual does not have a US
     * tax id (either a Social Security Number or Individual Taxpayer Identification
     * Number).
     */
    confirmed_no_us_tax_id?: boolean;

    /**
     * A means of verifying the person's identity.
     */
    identification?: NaturalPerson.Identification;

    /**
     * The legal name of the natural person.
     */
    name?: string;
  }

  export namespace NaturalPerson {
    /**
     * The entity's physical address. Mail receiving locations like PO Boxes and PMB's
     * are disallowed.
     */
    export interface Address {
      /**
       * The city, district, town, or village of the address.
       */
      city: string;

      /**
       * The two-letter ISO 3166-1 alpha-2 code for the country of the address.
       */
      country: string;

      /**
       * The first line of the address. This is usually the street number and street.
       */
      line1: string;

      /**
       * The second line of the address. This might be the floor or room number.
       */
      line2?: string;

      /**
       * The two-letter United States Postal Service (USPS) abbreviation for the US
       * state, province, or region of the address. Required in certain countries.
       */
      state?: string;

      /**
       * The ZIP or postal code of the address. Required in certain countries.
       */
      zip?: string;
    }

    /**
     * A means of verifying the person's identity.
     */
    export interface Identification {
      /**
       * A method that can be used to verify the individual's identity.
       *
       * - `social_security_number` - A social security number.
       * - `individual_taxpayer_identification_number` - An individual taxpayer
       *   identification number (ITIN).
       * - `passport` - A passport number.
       * - `drivers_license` - A driver's license number.
       * - `other` - Another identifying document.
       */
      method:
        | 'social_security_number'
        | 'individual_taxpayer_identification_number'
        | 'passport'
        | 'drivers_license'
        | 'other';

      /**
       * An identification number that can be used to verify the individual's identity,
       * such as a social security number. For Social Security Numbers and Individual
       * Taxpayer Identification Numbers, submit nine digits with no dashes or other
       * separators.
       */
      number: string;

      /**
       * Information about the United States driver's license used for identification.
       * Required if `method` is equal to `drivers_license`.
       */
      drivers_license?: Identification.DriversLicense;

      /**
       * Information about the identification document provided. Required if `method` is
       * equal to `other`.
       */
      other?: Identification.Other;

      /**
       * Information about the passport used for identification. Required if `method` is
       * equal to `passport`.
       */
      passport?: Identification.Passport;

      [k: string]: unknown;
    }

    export namespace Identification {
      /**
       * Information about the United States driver's license used for identification.
       * Required if `method` is equal to `drivers_license`.
       */
      export interface DriversLicense {
        /**
         * The driver's license's expiration date in YYYY-MM-DD format.
         */
        expiration_date: string;

        /**
         * The identifier of the File containing the front of the driver's license.
         */
        file_id: string;

        /**
         * The state that issued the provided driver's license.
         */
        state: string;

        /**
         * The identifier of the File containing the back of the driver's license.
         */
        back_file_id?: string;
      }

      /**
       * Information about the identification document provided. Required if `method` is
       * equal to `other`.
       */
      export interface Other {
        /**
         * The two-character ISO 3166-1 code representing the country that issued the
         * document (e.g., `US`).
         */
        country: string;

        /**
         * A description of the document submitted.
         */
        description: string;

        /**
         * The identifier of the File containing the front of the document.
         */
        file_id: string;

        /**
         * The identifier of the File containing the back of the document. Not every
         * document has a reverse side.
         */
        back_file_id?: string;

        /**
         * The document's expiration date in YYYY-MM-DD format.
         */
        expiration_date?: string;
      }

      /**
       * Information about the passport used for identification. Required if `method` is
       * equal to `passport`.
       */
      export interface Passport {
        /**
         * The two-character ISO 3166-1 code representing the country that issued the
         * document (e.g., `US`).
         */
        country: string;

        /**
         * The passport's expiration date in YYYY-MM-DD format.
         */
        expiration_date: string;

        /**
         * The identifier of the File containing the passport.
         */
        file_id: string;
      }
    }
  }

  /**
   * An assessment of the entity’s potential risk of involvement in financial crimes,
   * such as money laundering.
   */
  export interface RiskRating {
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the risk
     * rating was performed.
     */
    rated_at: string;

    /**
     * The rating given to this entity.
     *
     * - `low` - Minimal risk of involvement in financial crime.
     * - `medium` - Moderate risk of involvement in financial crime.
     * - `high` - Elevated risk of involvement in financial crime.
     */
    rating: 'low' | 'medium' | 'high';
  }

  export interface TermsAgreement {
    /**
     * The timestamp of when the Entity agreed to the terms.
     */
    agreed_at: string;

    /**
     * The IP address the Entity accessed reviewed the terms from.
     */
    ip_address: string;

    /**
     * The URL of the terms agreement. This link will be provided by your bank partner.
     */
    terms_url: string;
  }

  /**
   * If you are using a third-party service for identity verification, you can use
   * this field to associate this Entity with the identifier that represents them in
   * that service.
   */
  export interface ThirdPartyVerification {
    /**
     * The reference identifier for the third party verification.
     */
    reference: string;

    /**
     * The vendor that was used to perform the verification.
     *
     * - `alloy` - Alloy. See https://alloy.com for more information.
     * - `middesk` - Middesk. See https://middesk.com for more information.
     * - `oscilar` - Oscilar. See https://oscilar.com for more information.
     * - `persona` - Persona. See https://withpersona.com for more information.
     * - `taktile` - Taktile. See https://taktile.com for more information.
     */
    vendor: 'alloy' | 'middesk' | 'oscilar' | 'persona' | 'taktile';
  }

  /**
   * Details of the trust entity to update. If you specify this parameter and the
   * entity is not a trust, the request will fail.
   */
  export interface Trust {
    /**
     * The entity's physical address. Mail receiving locations like PO Boxes and PMB's
     * are disallowed.
     */
    address?: Trust.Address;

    /**
     * The legal name of the trust.
     */
    name?: string;
  }

  export namespace Trust {
    /**
     * The entity's physical address. Mail receiving locations like PO Boxes and PMB's
     * are disallowed.
     */
    export interface Address {
      /**
       * The city of the address.
       */
      city: string;

      /**
       * The first line of the address. This is usually the street number and street.
       */
      line1: string;

      /**
       * The two-letter United States Postal Service (USPS) abbreviation for the state of
       * the address.
       */
      state: string;

      /**
       * The ZIP code of the address.
       */
      zip: string;

      /**
       * The second line of the address. This might be the floor or room number.
       */
      line2?: string;
    }
  }
}

export interface EntityListParams extends PageParams {
  created_at?: EntityListParams.CreatedAt;

  /**
   * Filter records to the one with the specified `idempotency_key` you chose for
   * that object. This value is unique across Increase and is used to ensure that a
   * request is only processed once. Learn more about
   * [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key?: string;

  status?: EntityListParams.Status;
}

export namespace EntityListParams {
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
     * Filter Entities for those with the specified status or statuses. For GET
     * requests, this should be encoded as a comma-delimited string, such as
     * `?in=one,two,three`.
     */
    in?: Array<'active' | 'archived' | 'disabled'>;
  }
}

export declare namespace Entities {
  export {
    type Entity as Entity,
    type EntitiesPage as EntitiesPage,
    type EntityCreateParams as EntityCreateParams,
    type EntityUpdateParams as EntityUpdateParams,
    type EntityListParams as EntityListParams,
  };
}
