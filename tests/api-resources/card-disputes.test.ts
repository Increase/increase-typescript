// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Increase from 'increase';

const client = new Increase({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource cardDisputes', () => {
  test('create: only required params', async () => {
    const responsePromise = client.cardDisputes.create({
      disputed_transaction_id: 'transaction_uyrp7fld2ium70oa7oi',
      network: 'visa',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.cardDisputes.create({
      disputed_transaction_id: 'transaction_uyrp7fld2ium70oa7oi',
      network: 'visa',
      amount: 100,
      attachment_files: [{ file_id: 'file_id' }],
      explanation: 'x',
      visa: {
        category: 'fraud',
        authorization: { account_status: 'account_closed' },
        consumer_canceled_merchandise: {
          merchant_resolution_attempted: 'attempted',
          purchase_explanation: 'x',
          received_or_expected_at: '2019-12-27',
          return_outcome: 'not_returned',
          cardholder_cancellation: {
            canceled_at: '2019-12-27',
            canceled_prior_to_ship_date: 'canceled_prior_to_ship_date',
            cancellation_policy_provided: 'not_provided',
            reason: 'x',
          },
          not_returned: {},
          return_attempted: {
            attempt_explanation: 'x',
            attempt_reason: 'merchant_not_responding',
            attempted_at: '2019-12-27',
            merchandise_disposition: 'x',
          },
          returned: {
            return_method: 'dhl',
            returned_at: '2019-12-27',
            merchant_received_return_at: '2019-12-27',
            other_explanation: 'x',
            tracking_number: 'x',
          },
        },
        consumer_canceled_recurring_transaction: {
          cancellation_target: 'account',
          merchant_contact_methods: {
            application_name: 'x',
            call_center_phone_number: 'x',
            email_address: 'x',
            in_person_address: 'x',
            mailing_address: 'x',
            text_phone_number: 'x',
          },
          transaction_or_account_canceled_at: '2019-12-27',
          other_form_of_payment_explanation: 'x',
        },
        consumer_canceled_services: {
          cardholder_cancellation: {
            canceled_at: '2019-12-27',
            cancellation_policy_provided: 'not_provided',
            reason: 'x',
          },
          contracted_at: '2019-12-27',
          merchant_resolution_attempted: 'attempted',
          purchase_explanation: 'x',
          service_type: 'guaranteed_reservation',
          guaranteed_reservation: { explanation: 'cardholder_canceled_prior_to_service' },
          other: {},
          timeshare: {},
        },
        consumer_counterfeit_merchandise: {
          counterfeit_explanation: 'x',
          disposition_explanation: 'x',
          order_explanation: 'x',
          received_at: '2019-12-27',
        },
        consumer_credit_not_processed: {
          canceled_or_returned_at: '2019-12-27',
          credit_expected_at: '2019-12-27',
        },
        consumer_damaged_or_defective_merchandise: {
          merchant_resolution_attempted: 'attempted',
          order_and_issue_explanation: 'x',
          received_at: '2019-12-27',
          return_outcome: 'not_returned',
          not_returned: {},
          return_attempted: {
            attempt_explanation: 'x',
            attempt_reason: 'merchant_not_responding',
            attempted_at: '2019-12-27',
            merchandise_disposition: 'x',
          },
          returned: {
            return_method: 'dhl',
            returned_at: '2019-12-27',
            merchant_received_return_at: '2019-12-27',
            other_explanation: 'x',
            tracking_number: 'x',
          },
        },
        consumer_merchandise_misrepresentation: {
          merchant_resolution_attempted: 'attempted',
          misrepresentation_explanation: 'x',
          purchase_explanation: 'x',
          received_at: '2019-12-27',
          return_outcome: 'not_returned',
          not_returned: {},
          return_attempted: {
            attempt_explanation: 'x',
            attempt_reason: 'merchant_not_responding',
            attempted_at: '2019-12-27',
            merchandise_disposition: 'x',
          },
          returned: {
            return_method: 'dhl',
            returned_at: '2019-12-27',
            merchant_received_return_at: '2019-12-27',
            other_explanation: 'x',
            tracking_number: 'x',
          },
        },
        consumer_merchandise_not_as_described: {
          merchant_resolution_attempted: 'attempted',
          received_at: '2019-12-27',
          return_outcome: 'returned',
          return_attempted: {
            attempt_explanation: 'x',
            attempt_reason: 'merchant_not_responding',
            attempted_at: '2019-12-27',
            merchandise_disposition: 'x',
          },
          returned: {
            return_method: 'dhl',
            returned_at: '2019-12-27',
            merchant_received_return_at: '2019-12-27',
            other_explanation: 'x',
            tracking_number: 'x',
          },
        },
        consumer_merchandise_not_received: {
          cancellation_outcome: 'cardholder_cancellation_prior_to_expected_receipt',
          delivery_issue: 'delayed',
          last_expected_receipt_at: '2019-12-27',
          merchant_resolution_attempted: 'attempted',
          purchase_info_and_explanation: 'x',
          cardholder_cancellation_prior_to_expected_receipt: { canceled_at: '2019-12-27', reason: 'x' },
          delayed: {
            explanation: 'x',
            return_outcome: 'not_returned',
            not_returned: {},
            return_attempted: { attempted_at: '2019-12-27' },
            returned: { merchant_received_return_at: '2019-12-27', returned_at: '2019-12-27' },
          },
          delivered_to_wrong_location: { agreed_location: 'x' },
          merchant_cancellation: { canceled_at: '2019-12-27' },
          no_cancellation: {},
        },
        consumer_non_receipt_of_cash: {},
        consumer_original_credit_transaction_not_accepted: {
          explanation: 'x',
          reason: 'prohibited_by_local_laws_or_regulation',
        },
        consumer_quality_merchandise: {
          expected_at: '2019-12-27',
          merchant_resolution_attempted: 'attempted',
          purchase_info_and_quality_issue: 'x',
          received_at: '2019-12-27',
          return_outcome: 'not_returned',
          not_returned: {},
          ongoing_negotiations: {
            explanation: 'x',
            issuer_first_notified_at: '2019-12-27',
            started_at: '2019-12-27',
          },
          return_attempted: {
            attempt_explanation: 'x',
            attempt_reason: 'merchant_not_responding',
            attempted_at: '2019-12-27',
            merchandise_disposition: 'x',
          },
          returned: {
            return_method: 'dhl',
            returned_at: '2019-12-27',
            merchant_received_return_at: '2019-12-27',
            other_explanation: 'x',
            tracking_number: 'x',
          },
        },
        consumer_quality_services: {
          cardholder_cancellation: {
            accepted_by_merchant: 'accepted',
            canceled_at: '2019-12-27',
            reason: 'x',
          },
          non_fiat_currency_or_non_fungible_token_related_and_not_matching_description: 'not_related',
          purchase_info_and_quality_issue: 'x',
          services_received_at: '2019-12-27',
          cardholder_paid_to_have_work_redone: 'did_not_pay_to_have_work_redone',
          ongoing_negotiations: {
            explanation: 'x',
            issuer_first_notified_at: '2019-12-27',
            started_at: '2019-12-27',
          },
          restaurant_food_related: 'not_related',
        },
        consumer_services_misrepresentation: {
          cardholder_cancellation: {
            accepted_by_merchant: 'accepted',
            canceled_at: '2019-12-27',
            reason: 'x',
          },
          merchant_resolution_attempted: 'attempted',
          misrepresentation_explanation: 'x',
          purchase_explanation: 'x',
          received_at: '2019-12-27',
        },
        consumer_services_not_as_described: {
          cardholder_cancellation: {
            accepted_by_merchant: 'accepted',
            canceled_at: '2019-12-27',
            reason: 'x',
          },
          explanation: 'x',
          merchant_resolution_attempted: 'attempted',
          received_at: '2019-12-27',
        },
        consumer_services_not_received: {
          cancellation_outcome: 'cardholder_cancellation_prior_to_expected_receipt',
          last_expected_receipt_at: '2019-12-27',
          merchant_resolution_attempted: 'attempted',
          purchase_info_and_explanation: 'x',
          cardholder_cancellation_prior_to_expected_receipt: { canceled_at: '2019-12-27', reason: 'x' },
          merchant_cancellation: { canceled_at: '2019-12-27' },
          no_cancellation: {},
        },
        fraud: { fraud_type: 'account_or_credentials_takeover' },
        processing_error: {
          error_reason: 'duplicate_transaction',
          merchant_resolution_attempted: 'attempted',
          duplicate_transaction: { other_transaction_id: 'x' },
          incorrect_amount: { expected_amount: 0 },
          paid_by_other_means: {
            other_form_of_payment_evidence: 'canceled_check',
            other_transaction_id: 'x',
          },
        },
      },
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.cardDisputes.retrieve('card_dispute_h9sc95nbl1cgltpp7men');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = client.cardDisputes.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cardDisputes.list(
        {
          created_at: {
            after: '2019-12-27T18:11:19.117Z',
            before: '2019-12-27T18:11:19.117Z',
            on_or_after: '2019-12-27T18:11:19.117Z',
            on_or_before: '2019-12-27T18:11:19.117Z',
          },
          cursor: 'cursor',
          idempotency_key: 'x',
          limit: 1,
          status: { in: ['user_submission_required'] },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('submitUserSubmission: only required params', async () => {
    const responsePromise = client.cardDisputes.submitUserSubmission('card_dispute_h9sc95nbl1cgltpp7men', {
      network: 'visa',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('submitUserSubmission: required and optional params', async () => {
    const response = await client.cardDisputes.submitUserSubmission('card_dispute_h9sc95nbl1cgltpp7men', {
      network: 'visa',
      amount: 1,
      attachment_files: [{ file_id: 'file_id' }],
      explanation: 'x',
      visa: {
        category: 'merchant_prearbitration_decline',
        chargeback: {
          category: 'authorization',
          authorization: { account_status: 'account_closed' },
          consumer_canceled_merchandise: {
            merchant_resolution_attempted: 'attempted',
            purchase_explanation: 'x',
            received_or_expected_at: '2019-12-27',
            return_outcome: 'not_returned',
            cardholder_cancellation: {
              canceled_at: '2019-12-27',
              canceled_prior_to_ship_date: 'canceled_prior_to_ship_date',
              cancellation_policy_provided: 'not_provided',
              reason: 'x',
            },
            not_returned: {},
            return_attempted: {
              attempt_explanation: 'x',
              attempt_reason: 'merchant_not_responding',
              attempted_at: '2019-12-27',
              merchandise_disposition: 'x',
            },
            returned: {
              return_method: 'dhl',
              returned_at: '2019-12-27',
              merchant_received_return_at: '2019-12-27',
              other_explanation: 'x',
              tracking_number: 'x',
            },
          },
          consumer_canceled_recurring_transaction: {
            cancellation_target: 'account',
            merchant_contact_methods: {
              application_name: 'x',
              call_center_phone_number: 'x',
              email_address: 'x',
              in_person_address: 'x',
              mailing_address: 'x',
              text_phone_number: 'x',
            },
            transaction_or_account_canceled_at: '2019-12-27',
            other_form_of_payment_explanation: 'x',
          },
          consumer_canceled_services: {
            cardholder_cancellation: {
              canceled_at: '2019-12-27',
              cancellation_policy_provided: 'not_provided',
              reason: 'x',
            },
            contracted_at: '2019-12-27',
            merchant_resolution_attempted: 'attempted',
            purchase_explanation: 'x',
            service_type: 'guaranteed_reservation',
            guaranteed_reservation: { explanation: 'cardholder_canceled_prior_to_service' },
            other: {},
            timeshare: {},
          },
          consumer_counterfeit_merchandise: {
            counterfeit_explanation: 'x',
            disposition_explanation: 'x',
            order_explanation: 'x',
            received_at: '2019-12-27',
          },
          consumer_credit_not_processed: {
            canceled_or_returned_at: '2019-12-27',
            credit_expected_at: '2019-12-27',
          },
          consumer_damaged_or_defective_merchandise: {
            merchant_resolution_attempted: 'attempted',
            order_and_issue_explanation: 'x',
            received_at: '2019-12-27',
            return_outcome: 'not_returned',
            not_returned: {},
            return_attempted: {
              attempt_explanation: 'x',
              attempt_reason: 'merchant_not_responding',
              attempted_at: '2019-12-27',
              merchandise_disposition: 'x',
            },
            returned: {
              return_method: 'dhl',
              returned_at: '2019-12-27',
              merchant_received_return_at: '2019-12-27',
              other_explanation: 'x',
              tracking_number: 'x',
            },
          },
          consumer_merchandise_misrepresentation: {
            merchant_resolution_attempted: 'attempted',
            misrepresentation_explanation: 'x',
            purchase_explanation: 'x',
            received_at: '2019-12-27',
            return_outcome: 'not_returned',
            not_returned: {},
            return_attempted: {
              attempt_explanation: 'x',
              attempt_reason: 'merchant_not_responding',
              attempted_at: '2019-12-27',
              merchandise_disposition: 'x',
            },
            returned: {
              return_method: 'dhl',
              returned_at: '2019-12-27',
              merchant_received_return_at: '2019-12-27',
              other_explanation: 'x',
              tracking_number: 'x',
            },
          },
          consumer_merchandise_not_as_described: {
            merchant_resolution_attempted: 'attempted',
            received_at: '2019-12-27',
            return_outcome: 'returned',
            return_attempted: {
              attempt_explanation: 'x',
              attempt_reason: 'merchant_not_responding',
              attempted_at: '2019-12-27',
              merchandise_disposition: 'x',
            },
            returned: {
              return_method: 'dhl',
              returned_at: '2019-12-27',
              merchant_received_return_at: '2019-12-27',
              other_explanation: 'x',
              tracking_number: 'x',
            },
          },
          consumer_merchandise_not_received: {
            cancellation_outcome: 'cardholder_cancellation_prior_to_expected_receipt',
            delivery_issue: 'delayed',
            last_expected_receipt_at: '2019-12-27',
            merchant_resolution_attempted: 'attempted',
            purchase_info_and_explanation: 'x',
            cardholder_cancellation_prior_to_expected_receipt: { canceled_at: '2019-12-27', reason: 'x' },
            delayed: {
              explanation: 'x',
              return_outcome: 'not_returned',
              not_returned: {},
              return_attempted: { attempted_at: '2019-12-27' },
              returned: { merchant_received_return_at: '2019-12-27', returned_at: '2019-12-27' },
            },
            delivered_to_wrong_location: { agreed_location: 'x' },
            merchant_cancellation: { canceled_at: '2019-12-27' },
            no_cancellation: {},
          },
          consumer_non_receipt_of_cash: {},
          consumer_original_credit_transaction_not_accepted: {
            explanation: 'x',
            reason: 'prohibited_by_local_laws_or_regulation',
          },
          consumer_quality_merchandise: {
            expected_at: '2019-12-27',
            merchant_resolution_attempted: 'attempted',
            purchase_info_and_quality_issue: 'x',
            received_at: '2019-12-27',
            return_outcome: 'not_returned',
            not_returned: {},
            ongoing_negotiations: {
              explanation: 'x',
              issuer_first_notified_at: '2019-12-27',
              started_at: '2019-12-27',
            },
            return_attempted: {
              attempt_explanation: 'x',
              attempt_reason: 'merchant_not_responding',
              attempted_at: '2019-12-27',
              merchandise_disposition: 'x',
            },
            returned: {
              return_method: 'dhl',
              returned_at: '2019-12-27',
              merchant_received_return_at: '2019-12-27',
              other_explanation: 'x',
              tracking_number: 'x',
            },
          },
          consumer_quality_services: {
            cardholder_cancellation: {
              accepted_by_merchant: 'accepted',
              canceled_at: '2019-12-27',
              reason: 'x',
            },
            non_fiat_currency_or_non_fungible_token_related_and_not_matching_description: 'not_related',
            purchase_info_and_quality_issue: 'x',
            services_received_at: '2019-12-27',
            cardholder_paid_to_have_work_redone: 'did_not_pay_to_have_work_redone',
            ongoing_negotiations: {
              explanation: 'x',
              issuer_first_notified_at: '2019-12-27',
              started_at: '2019-12-27',
            },
            restaurant_food_related: 'not_related',
          },
          consumer_services_misrepresentation: {
            cardholder_cancellation: {
              accepted_by_merchant: 'accepted',
              canceled_at: '2019-12-27',
              reason: 'x',
            },
            merchant_resolution_attempted: 'attempted',
            misrepresentation_explanation: 'x',
            purchase_explanation: 'x',
            received_at: '2019-12-27',
          },
          consumer_services_not_as_described: {
            cardholder_cancellation: {
              accepted_by_merchant: 'accepted',
              canceled_at: '2019-12-27',
              reason: 'x',
            },
            explanation: 'x',
            merchant_resolution_attempted: 'attempted',
            received_at: '2019-12-27',
          },
          consumer_services_not_received: {
            cancellation_outcome: 'cardholder_cancellation_prior_to_expected_receipt',
            last_expected_receipt_at: '2019-12-27',
            merchant_resolution_attempted: 'attempted',
            purchase_info_and_explanation: 'x',
            cardholder_cancellation_prior_to_expected_receipt: { canceled_at: '2019-12-27', reason: 'x' },
            merchant_cancellation: { canceled_at: '2019-12-27' },
            no_cancellation: {},
          },
          fraud: { fraud_type: 'account_or_credentials_takeover' },
          processing_error: {
            error_reason: 'duplicate_transaction',
            merchant_resolution_attempted: 'attempted',
            duplicate_transaction: { other_transaction_id: 'x' },
            incorrect_amount: { expected_amount: 0 },
            paid_by_other_means: {
              other_form_of_payment_evidence: 'canceled_check',
              other_transaction_id: 'x',
            },
          },
        },
        merchant_prearbitration_decline: {
          reason:
            'The pre-arbitration received from the merchantdoes not explain how they obtained permission to charge the card.',
        },
        user_prearbitration: {
          reason: 'x',
          category_change: { category: 'authorization', reason: 'x' },
        },
      },
    });
  });

  test('withdraw', async () => {
    const responsePromise = client.cardDisputes.withdraw('card_dispute_h9sc95nbl1cgltpp7men', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
