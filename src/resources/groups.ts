// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Groups extends APIResource {
  /**
   * Returns details for the currently authenticated Group.
   *
   * @example
   * ```ts
   * const group = await client.groups.retrieve();
   * ```
   */
  retrieve(options?: RequestOptions): APIPromise<Group> {
    return this._client.get('/groups/current', options);
  }
}

/**
 * Groups represent organizations using Increase. You can retrieve information
 * about your own organization via the API. More commonly, OAuth platforms can
 * retrieve information about the organizations that have granted them access.
 * Learn more about OAuth [here](https://increase.com/documentation/oauth).
 */
export interface Group {
  /**
   * The Group identifier.
   */
  id: string;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the Group
   * was created.
   */
  created_at: string;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `group`.
   */
  type: 'group';

  [k: string]: unknown;
}

export declare namespace Groups {
  export { type Group as Group };
}
