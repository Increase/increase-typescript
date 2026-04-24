// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EntityOnboardingSessionsAPI from '../entity-onboarding-sessions';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class EntityOnboardingSessions extends APIResource {
  /**
   * Simulates the submission of an
   * [Entity Onboarding Session](#entity-onboarding-sessions). This session must have
   * a `status` of `active`. After submission, the session will transition to
   * `expired` and a new Entity will be created.
   *
   * @example
   * ```ts
   * const entityOnboardingSession =
   *   await client.simulations.entityOnboardingSessions.submit(
   *     'entity_onboarding_session_wid2ug11fsmvh3k9hymd',
   *   );
   * ```
   */
  submit(entityOnboardingSessionID: string, options?: RequestOptions): APIPromise<EntityOnboardingSessionsAPI.EntityOnboardingSession> {
    return this._client.post(path`/simulations/entity_onboarding_sessions/${entityOnboardingSessionID}/submit`, options);
  }
}
