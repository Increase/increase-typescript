// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class EntityOnboardingSessions extends APIResource {
  /**
   * Create an Entity Onboarding Session
   *
   * @example
   * ```ts
   * const entityOnboardingSession =
   *   await client.entityOnboardingSessions.create({
   *     program_id: 'program_i2v2os4mwza1oetokh9i',
   *     redirect_url: 'https://example.com/onboarding/session',
   *   });
   * ```
   */
  create(
    body: EntityOnboardingSessionCreateParams,
    options?: RequestOptions,
  ): APIPromise<EntityOnboardingSession> {
    return this._client.post('/entity_onboarding_sessions', { body, ...options });
  }

  /**
   * Retrieve an Entity Onboarding Session
   *
   * @example
   * ```ts
   * const entityOnboardingSession =
   *   await client.entityOnboardingSessions.retrieve(
   *     'entity_onboarding_session_wid2ug11fsmvh3k9hymd',
   *   );
   * ```
   */
  retrieve(entityOnboardingSessionID: string, options?: RequestOptions): APIPromise<EntityOnboardingSession> {
    return this._client.get(path`/entity_onboarding_sessions/${entityOnboardingSessionID}`, options);
  }

  /**
   * List Entity Onboarding Session
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const entityOnboardingSession of client.entityOnboardingSessions.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: EntityOnboardingSessionListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<EntityOnboardingSessionsPage, EntityOnboardingSession> {
    return this._client.getAPIList('/entity_onboarding_sessions', Page<EntityOnboardingSession>, {
      query,
      ...options,
    });
  }

  /**
   * Expire an Entity Onboarding Session
   *
   * @example
   * ```ts
   * const entityOnboardingSession =
   *   await client.entityOnboardingSessions.expire(
   *     'entity_onboarding_session_wid2ug11fsmvh3k9hymd',
   *   );
   * ```
   */
  expire(entityOnboardingSessionID: string, options?: RequestOptions): APIPromise<EntityOnboardingSession> {
    return this._client.post(path`/entity_onboarding_sessions/${entityOnboardingSessionID}/expire`, options);
  }
}

export type EntityOnboardingSessionsPage = Page<EntityOnboardingSession>;

/**
 * Entity Onboarding Sessions let your customers onboard themselves by completing
 * Increase-hosted forms. Create a session and redirect your customer to the
 * returned URL. When they're done, they'll be redirected back to your site. This
 * API is used for [hosted onboarding](/documentation/hosted-onboarding).
 */
export interface EntityOnboardingSession {
  /**
   * The Entity Onboarding Session's identifier.
   */
  id: string;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the Entity Onboarding Session was created.
   */
  created_at: string;

  /**
   * The identifier of the Entity associated with this session, if one has been
   * created or was provided when creating the session.
   */
  entity_id: string | null;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the Entity Onboarding Session will expire.
   */
  expires_at: string;

  /**
   * The idempotency key you chose for this object. This value is unique across
   * Increase and is used to ensure that a request is only processed once. Learn more
   * about [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key: string | null;

  /**
   * The identifier of the Program the Entity will be onboarded to.
   */
  program_id: string;

  /**
   * The URL to redirect to after the onboarding session is complete. Increase will
   * include the query parameters `entity_onboarding_session_id` and `entity_id` when
   * redirecting.
   */
  redirect_url: string;

  /**
   * The URL containing the onboarding form. You should share this link with your
   * customer. Only present when the session is active.
   */
  session_url: string | null;

  /**
   * The status of the onboarding session.
   *
   * - `active` - The Entity Onboarding Session is active.
   * - `expired` - The Entity Onboarding Session has expired.
   */
  status: 'active' | 'expired';

  /**
   * A constant representing the object's type. For this resource it will always be
   * `entity_onboarding_session`.
   */
  type: 'entity_onboarding_session';
}

export interface EntityOnboardingSessionCreateParams {
  /**
   * The identifier of the Program the Entity will be onboarded to.
   */
  program_id: string;

  /**
   * The URL to redirect the customer to after they complete the onboarding form. The
   * redirect will include `entity_onboarding_session_id` and `entity_id` query
   * parameters.
   */
  redirect_url: string;

  /**
   * The identifier of an existing Entity to associate with the onboarding session.
   * If provided, the onboarding form will display any outstanding tasks required to
   * complete the Entity's onboarding.
   */
  entity_id?: string;

  [k: string]: unknown;
}

export interface EntityOnboardingSessionListParams extends PageParams {
  /**
   * Filter records to the one with the specified `idempotency_key` you chose for
   * that object. This value is unique across Increase and is used to ensure that a
   * request is only processed once. Learn more about
   * [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key?: string;

  status?: EntityOnboardingSessionListParams.Status;
}

export namespace EntityOnboardingSessionListParams {
  export interface Status {
    /**
     * Filter Entity Onboarding Session for those with the specified status or
     * statuses. For GET requests, this should be encoded as a comma-delimited string,
     * such as `?in=one,two,three`.
     */
    in?: Array<'active' | 'expired'>;
  }
}

export declare namespace EntityOnboardingSessions {
  export {
    type EntityOnboardingSession as EntityOnboardingSession,
    type EntityOnboardingSessionsPage as EntityOnboardingSessionsPage,
    type EntityOnboardingSessionCreateParams as EntityOnboardingSessionCreateParams,
    type EntityOnboardingSessionListParams as EntityOnboardingSessionListParams,
  };
}
