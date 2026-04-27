// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class OAuthApplications extends APIResource {
  /**
   * Retrieve an OAuth Application
   *
   * @example
   * ```ts
   * const oauthApplication =
   *   await client.oauthApplications.retrieve(
   *     'application_gj9ufmpgh5i56k4vyriy',
   *   );
   * ```
   */
  retrieve(oauthApplicationID: string, options?: RequestOptions): APIPromise<OAuthApplication> {
    return this._client.get(path`/oauth_applications/${oauthApplicationID}`, options);
  }

  /**
   * List OAuth Applications
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const oauthApplication of client.oauthApplications.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: OAuthApplicationListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<OAuthApplicationsPage, OAuthApplication> {
    return this._client.getAPIList('/oauth_applications', Page<OAuthApplication>, { query, ...options });
  }
}

export type OAuthApplicationsPage = Page<OAuthApplication>;

/**
 * An OAuth Application lets you build an application for others to use with their
 * Increase data. You can create an OAuth Application via the Dashboard and read
 * information about it with the API. Learn more about OAuth
 * [here](https://increase.com/documentation/oauth).
 */
export interface OAuthApplication {
  /**
   * The OAuth Application's identifier.
   */
  id: string;

  /**
   * The OAuth Application's client_id. Use this to authenticate with the OAuth
   * Application.
   */
  client_id: string;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp when the OAuth
   * Application was created.
   */
  created_at: string;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp when the OAuth
   * Application was deleted.
   */
  deleted_at: string | null;

  /**
   * The name you chose for this OAuth Application.
   */
  name: string | null;

  /**
   * Whether the application is active.
   *
   * - `active` - The application is active and can be used by your users.
   * - `deleted` - The application is deleted.
   */
  status: 'active' | 'deleted';

  /**
   * A constant representing the object's type. For this resource it will always be
   * `oauth_application`.
   */
  type: 'oauth_application';
}

export interface OAuthApplicationListParams extends PageParams {
  created_at?: OAuthApplicationListParams.CreatedAt;

  status?: OAuthApplicationListParams.Status;
}

export namespace OAuthApplicationListParams {
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
     * Return results whose value is in the provided list. For GET requests, this
     * should be encoded as a comma-delimited string, such as `?in=one,two,three`.
     */
    in?: Array<'active' | 'deleted'>;
  }
}

export declare namespace OAuthApplications {
  export {
    type OAuthApplication as OAuthApplication,
    type OAuthApplicationsPage as OAuthApplicationsPage,
    type OAuthApplicationListParams as OAuthApplicationListParams,
  };
}
