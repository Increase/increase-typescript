// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CardDisputesAPI from '../card-disputes';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class CardDisputes extends APIResource {
  /**
   * After a [Card Dispute](#card-disputes) is created in production, the dispute
   * will initially be in a `pending_user_submission_reviewing` state. Since no
   * review or further action happens in sandbox, this endpoint simulates moving a
   * Card Dispute through its various states.
   *
   * @example
   * ```ts
   * const cardDispute =
   *   await client.simulations.cardDisputes.action(
   *     'card_dispute_h9sc95nbl1cgltpp7men',
   *     { network: 'visa' },
   *   );
   * ```
   */
  action(
    cardDisputeID: string,
    body: CardDisputeActionParams,
    options?: RequestOptions,
  ): APIPromise<CardDisputesAPI.CardDispute> {
    return this._client.post(path`/simulations/card_disputes/${cardDisputeID}/action`, { body, ...options });
  }
}

export interface CardDisputeActionParams {
  /**
   * The network of the Card Dispute. Details specific to the network are required
   * under the sub-object with the same identifier as the network.
   *
   * - `visa` - Visa
   */
  network: 'visa';

  /**
   * The Visa-specific parameters for the taking action on the dispute. Required if
   * and only if `network` is `visa`.
   */
  visa?: CardDisputeActionParams.Visa;
}

export namespace CardDisputeActionParams {
  /**
   * The Visa-specific parameters for the taking action on the dispute. Required if
   * and only if `network` is `visa`.
   */
  export interface Visa {
    /**
     * The action to take. Details specific to the action are required under the
     * sub-object with the same identifier as the action.
     *
     * - `accept_chargeback` - Simulate the merchant accepting the chargeback. This
     *   will move the dispute to a `won` state.
     * - `accept_user_submission` - Accept the user's submission and transmit it to the
     *   network. This will move the dispute to a `pending_response` state.
     * - `decline_user_prearbitration` - Simulate the merchant declining the user's
     *   pre-arbitration. This will move the dispute to a `lost` state.
     * - `receive_merchant_prearbitration` - Simulate the merchant issuing
     *   pre-arbitration. This will move the dispute to a `user_submission_required`
     *   state.
     * - `represent` - Simulate the merchant re-presenting the dispute. This will move
     *   the dispute to a `user_submission_required` state.
     * - `request_further_information` - Simulate further information being requested
     *   from the user. This will move the dispute to a `user_submission_required`
     *   state.
     * - `time_out_chargeback` - Simulate the merchant timing out responding to the
     *   chargeback. This will move the dispute to a `won` state.
     * - `time_out_merchant_prearbitration` - Simulate the user timing out responding
     *   to a merchant pre-arbitration. This will move the dispute to a `lost` state.
     * - `time_out_representment` - Simulate the user timing out responding to a
     *   merchant re-presentment. This will move the dispute to a `lost` state.
     * - `time_out_user_prearbitration` - Simulate the merchant timing out responding
     *   to a user pre-arbitration. This will move the dispute to a `win` state.
     */
    action:
      | 'accept_chargeback'
      | 'accept_user_submission'
      | 'decline_user_prearbitration'
      | 'receive_merchant_prearbitration'
      | 'represent'
      | 'request_further_information'
      | 'time_out_chargeback'
      | 'time_out_merchant_prearbitration'
      | 'time_out_representment'
      | 'time_out_user_prearbitration';

    /**
     * The parameters for accepting the chargeback. Required if and only if `action` is
     * `accept_chargeback`.
     */
    accept_chargeback?: Visa.AcceptChargeback;

    /**
     * The parameters for accepting the user submission. Required if and only if
     * `action` is `accept_user_submission`.
     */
    accept_user_submission?: Visa.AcceptUserSubmission;

    /**
     * The parameters for declining the prearbitration. Required if and only if
     * `action` is `decline_user_prearbitration`.
     */
    decline_user_prearbitration?: Visa.DeclineUserPrearbitration;

    /**
     * The parameters for receiving the prearbitration. Required if and only if
     * `action` is `receive_merchant_prearbitration`.
     */
    receive_merchant_prearbitration?: Visa.ReceiveMerchantPrearbitration;

    /**
     * The parameters for re-presenting the dispute. Required if and only if `action`
     * is `represent`.
     */
    represent?: Visa.Represent;

    /**
     * The parameters for requesting further information from the user. Required if and
     * only if `action` is `request_further_information`.
     */
    request_further_information?: Visa.RequestFurtherInformation;

    /**
     * The parameters for timing out the chargeback. Required if and only if `action`
     * is `time_out_chargeback`.
     */
    time_out_chargeback?: Visa.TimeOutChargeback;

    /**
     * The parameters for timing out the merchant prearbitration. Required if and only
     * if `action` is `time_out_merchant_prearbitration`.
     */
    time_out_merchant_prearbitration?: Visa.TimeOutMerchantPrearbitration;

    /**
     * The parameters for timing out the re-presentment. Required if and only if
     * `action` is `time_out_representment`.
     */
    time_out_representment?: Visa.TimeOutRepresentment;

    /**
     * The parameters for timing out the user prearbitration. Required if and only if
     * `action` is `time_out_user_prearbitration`.
     */
    time_out_user_prearbitration?: Visa.TimeOutUserPrearbitration;
  }

  export namespace Visa {
    /**
     * The parameters for accepting the chargeback. Required if and only if `action` is
     * `accept_chargeback`.
     */
    export interface AcceptChargeback {}

    /**
     * The parameters for accepting the user submission. Required if and only if
     * `action` is `accept_user_submission`.
     */
    export interface AcceptUserSubmission {}

    /**
     * The parameters for declining the prearbitration. Required if and only if
     * `action` is `decline_user_prearbitration`.
     */
    export interface DeclineUserPrearbitration {}

    /**
     * The parameters for receiving the prearbitration. Required if and only if
     * `action` is `receive_merchant_prearbitration`.
     */
    export interface ReceiveMerchantPrearbitration {}

    /**
     * The parameters for re-presenting the dispute. Required if and only if `action`
     * is `represent`.
     */
    export interface Represent {}

    /**
     * The parameters for requesting further information from the user. Required if and
     * only if `action` is `request_further_information`.
     */
    export interface RequestFurtherInformation {
      /**
       * The reason for requesting further information from the user.
       */
      reason: string;
    }

    /**
     * The parameters for timing out the chargeback. Required if and only if `action`
     * is `time_out_chargeback`.
     */
    export interface TimeOutChargeback {}

    /**
     * The parameters for timing out the merchant prearbitration. Required if and only
     * if `action` is `time_out_merchant_prearbitration`.
     */
    export interface TimeOutMerchantPrearbitration {}

    /**
     * The parameters for timing out the re-presentment. Required if and only if
     * `action` is `time_out_representment`.
     */
    export interface TimeOutRepresentment {}

    /**
     * The parameters for timing out the user prearbitration. Required if and only if
     * `action` is `time_out_user_prearbitration`.
     */
    export interface TimeOutUserPrearbitration {}
  }
}

export declare namespace CardDisputes {
  export { type CardDisputeActionParams as CardDisputeActionParams };
}
