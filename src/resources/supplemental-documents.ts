// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

export class SupplementalDocuments extends APIResource {
  /**
   * Create a supplemental document for an Entity
   *
   * @example
   * ```ts
   * const entitySupplementalDocument =
   *   await client.supplementalDocuments.create({
   *     entity_id: 'entity_n8y8tnk2p9339ti393yi',
   *     file_id: 'file_makxrc67oh9l6sg7w9yc',
   *   });
   * ```
   */
  create(
    body: SupplementalDocumentCreateParams,
    options?: RequestOptions,
  ): APIPromise<EntitySupplementalDocument> {
    return this._client.post('/entity_supplemental_documents', { body, ...options });
  }

  /**
   * List Entity Supplemental Document Submissions
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const entitySupplementalDocument of client.supplementalDocuments.list(
   *   { entity_id: 'entity_id' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    query: SupplementalDocumentListParams,
    options?: RequestOptions,
  ): PagePromise<EntitySupplementalDocumentsPage, EntitySupplementalDocument> {
    return this._client.getAPIList('/entity_supplemental_documents', Page<EntitySupplementalDocument>, {
      query,
      ...options,
    });
  }
}

export type EntitySupplementalDocumentsPage = Page<EntitySupplementalDocument>;

/**
 * Supplemental Documents are uploaded files connected to an Entity during
 * onboarding.
 */
export interface EntitySupplementalDocument {
  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the
   * Supplemental Document was created.
   */
  created_at: string;

  /**
   * The Entity the supplemental document is attached to.
   */
  entity_id: string;

  /**
   * The File containing the document.
   */
  file_id: string;

  /**
   * The idempotency key you chose for this object. This value is unique across
   * Increase and is used to ensure that a request is only processed once. Learn more
   * about [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key: string | null;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `entity_supplemental_document`.
   */
  type: 'entity_supplemental_document';
}

export interface SupplementalDocumentCreateParams {
  /**
   * The identifier of the Entity to associate with the supplemental document.
   */
  entity_id: string;

  /**
   * The identifier of the File containing the document.
   */
  file_id: string;

  [k: string]: unknown;
}

export interface SupplementalDocumentListParams extends PageParams {
  /**
   * The identifier of the Entity to list supplemental documents for.
   */
  entity_id: string;

  /**
   * Filter records to the one with the specified `idempotency_key` you chose for
   * that object. This value is unique across Increase and is used to ensure that a
   * request is only processed once. Learn more about
   * [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key?: string;
}

export declare namespace SupplementalDocuments {
  export {
    type EntitySupplementalDocument as EntitySupplementalDocument,
    type EntitySupplementalDocumentsPage as EntitySupplementalDocumentsPage,
    type SupplementalDocumentCreateParams as SupplementalDocumentCreateParams,
    type SupplementalDocumentListParams as SupplementalDocumentListParams,
  };
}
