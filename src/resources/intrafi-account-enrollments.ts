// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class IntrafiAccountEnrollments extends APIResource {
  /**
   * Enroll an account in the IntraFi deposit sweep network
   *
   * @example
   * ```ts
   * const intrafiAccountEnrollment =
   *   await client.intrafiAccountEnrollments.create({
   *     account_id: 'account_in71c4amph0vgo2qllky',
   *     email_address: 'user@example.com',
   *   });
   * ```
   */
  create(
    body: IntrafiAccountEnrollmentCreateParams,
    options?: RequestOptions,
  ): APIPromise<IntrafiAccountEnrollment> {
    return this._client.post('/intrafi_account_enrollments', { body, ...options });
  }

  /**
   * Get an IntraFi Account Enrollment
   *
   * @example
   * ```ts
   * const intrafiAccountEnrollment =
   *   await client.intrafiAccountEnrollments.retrieve(
   *     'intrafi_account_enrollment_w8l97znzreopkwf2tg75',
   *   );
   * ```
   */
  retrieve(
    intrafiAccountEnrollmentID: string,
    options?: RequestOptions,
  ): APIPromise<IntrafiAccountEnrollment> {
    return this._client.get(path`/intrafi_account_enrollments/${intrafiAccountEnrollmentID}`, options);
  }

  /**
   * List IntraFi Account Enrollments
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const intrafiAccountEnrollment of client.intrafiAccountEnrollments.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: IntrafiAccountEnrollmentListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<IntrafiAccountEnrollmentsPage, IntrafiAccountEnrollment> {
    return this._client.getAPIList('/intrafi_account_enrollments', Page<IntrafiAccountEnrollment>, {
      query,
      ...options,
    });
  }

  /**
   * Unenroll an account from IntraFi
   *
   * @example
   * ```ts
   * const intrafiAccountEnrollment =
   *   await client.intrafiAccountEnrollments.unenroll(
   *     'intrafi_account_enrollment_w8l97znzreopkwf2tg75',
   *   );
   * ```
   */
  unenroll(
    intrafiAccountEnrollmentID: string,
    options?: RequestOptions,
  ): APIPromise<IntrafiAccountEnrollment> {
    return this._client.post(
      path`/intrafi_account_enrollments/${intrafiAccountEnrollmentID}/unenroll`,
      options,
    );
  }
}

export type IntrafiAccountEnrollmentsPage = Page<IntrafiAccountEnrollment>;

/**
 * IntraFi is a
 * [network of financial institutions](https://www.intrafi.com/network-banks) that
 * allows Increase users to sweep funds to multiple banks. This enables accounts to
 * become eligible for additional Federal Deposit Insurance Corporation (FDIC)
 * insurance. An IntraFi Account Enrollment object represents the status of an
 * account in the network. Sweeping an account to IntraFi doesn't affect funds
 * availability.
 */
export interface IntrafiAccountEnrollment {
  /**
   * The identifier of this enrollment at IntraFi.
   */
  id: string;

  /**
   * The identifier of the Increase Account being swept into the network.
   */
  account_id: string;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the enrollment was created.
   */
  created_at: string;

  /**
   * The contact email for the account owner, to be shared with IntraFi.
   */
  email_address: string | null;

  /**
   * The idempotency key you chose for this object. This value is unique across
   * Increase and is used to ensure that a request is only processed once. Learn more
   * about [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key: string | null;

  /**
   * The identifier of the account in IntraFi's system. This identifier will be
   * printed on any IntraFi statements or documents.
   */
  intrafi_id: string;

  /**
   * The status of the account in the network. An account takes about one business
   * day to go from `pending_enrolling` to `enrolled`.
   *
   * - `pending_enrolling` - The account is being added to the IntraFi network.
   * - `enrolled` - The account has been enrolled with IntraFi.
   * - `pending_unenrolling` - The account is being unenrolled from IntraFi's deposit
   *   sweep.
   * - `unenrolled` - The account was once enrolled, but is no longer enrolled at
   *   IntraFi.
   * - `requires_attention` - Something unexpected happened with this account.
   *   Contact Increase support.
   */
  status: 'pending_enrolling' | 'enrolled' | 'pending_unenrolling' | 'unenrolled' | 'requires_attention';

  /**
   * A constant representing the object's type. For this resource it will always be
   * `intrafi_account_enrollment`.
   */
  type: 'intrafi_account_enrollment';
}

export interface IntrafiAccountEnrollmentCreateParams {
  /**
   * The identifier for the account to be added to IntraFi.
   */
  account_id: string;

  /**
   * The contact email for the account owner, to be shared with IntraFi.
   */
  email_address: string;

  [k: string]: unknown;
}

export interface IntrafiAccountEnrollmentListParams extends PageParams {
  /**
   * Filter IntraFi Account Enrollments to the one belonging to an account.
   */
  account_id?: string;

  /**
   * Filter records to the one with the specified `idempotency_key` you chose for
   * that object. This value is unique across Increase and is used to ensure that a
   * request is only processed once. Learn more about
   * [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key?: string;

  status?: IntrafiAccountEnrollmentListParams.Status;
}

export namespace IntrafiAccountEnrollmentListParams {
  export interface Status {
    /**
     * Filter IntraFi Account Enrollments for those with the specified status or
     * statuses. For GET requests, this should be encoded as a comma-delimited string,
     * such as `?in=one,two,three`.
     */
    in?: Array<
      'pending_enrolling' | 'enrolled' | 'pending_unenrolling' | 'unenrolled' | 'requires_attention'
    >;
  }
}

export declare namespace IntrafiAccountEnrollments {
  export {
    type IntrafiAccountEnrollment as IntrafiAccountEnrollment,
    type IntrafiAccountEnrollmentsPage as IntrafiAccountEnrollmentsPage,
    type IntrafiAccountEnrollmentCreateParams as IntrafiAccountEnrollmentCreateParams,
    type IntrafiAccountEnrollmentListParams as IntrafiAccountEnrollmentListParams,
  };
}
