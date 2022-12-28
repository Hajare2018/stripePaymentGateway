import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { loadStripe } from "@stripe/stripe-js";

// const stripe = require("stripe")(
//   "sk_test_51MHgsxSH9BVqRXMDz4UXEGexAiOq62aCydmte4Cs2Cn86oD4k5C1ZwvibQG8bUioYX8hamHOa6YINwpMmwr2rSkT00IRofCTOd"
// );

function Hotelbooking() {
  const [data, setData] = useState([]);
  console.log(data,"Print data")
  const stripe = loadStripe("pk_test_51MHgsxSH9BVqRXMDBCmtg9qQuhcUQk4Z8CpU7AZUwOUUxLvCxeiE8VWsLW9cIYVU6gYHx6sZ4oST52MqTf5soBCO00GjroLQk0");

  async function getData() {
    const response = await fetch("http://localhost:4000/api/payment-get");
    const udata = await response.json();
    console.log(udata, "mydata");
    
    // // setData(udata);
  }

  useEffect(() => {
    getData();
  }, []);

  const columns = [
    {
      name: "Booking Number",
      selector: (row) => row.room_type,
    },
    {
      name: " Room Type",
      selector: (row) => row.amount,
    },
    {
      name: " Booking Date",
      selector: (row) => row.booking_date,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Address",
      selector: (row) => row.address,
    },
    {
      name: "Country",
      selector: (row) => row.country,
    },
    {
      name: "State",
      selector: (row) => row.state,
    },
    {
      name: "City",
      selector: (row) => row.city,
    },
    {
      name: "Pin No.",
      selector: (row) => row.pin,
    },
  ];
  return (
    <div>
      <DataTable
        columns={columns}
        data={data}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="450px"
        highlightOnHover
        // selectableRows
        selectableRowsHighlight
      />
    </div>
  );
}

export default Hotelbooking;



// // response stripe //


// {
//   "id": "ppage_1MJ0kSSH9BVqRXMDqGDxSHFr",
//   "object": "checkout.session",
//   "account_settings": {
//     "account_id": "acct_1MHgsxSH9BVqRXMD",
//     "assets": {
//       "icon": null,
//       "logo": null,
//       "use_logo": false
//     },
//     "branding": {
//       "background_color": null,
//       "border_style": "default",
//       "button_color": null,
//       "font_family": "default"
//     },
//     "country": "IN",
//     "display_name": null,
//     "privacy_policy_url": null,
//     "specified_commercial_transactions_act_url": null,
//     "statement_descriptor": null,
//     "support_email": null,
//     "support_phone": null,
//     "support_url": null,
//     "terms_of_service_url": null
//   },
//   "beta_versions": null,
//   "billing_address_collection": null,
//   "cancel_url": "http://localhost:3000/cancel",
//   "card_brands": {
//     "accel": false,
//     "amex": true,
//     "carnet": false,
//     "cartes_bancaires": false,
//     "diners": false,
//     "discover": false,
//     "eftpos_au": false,
//     "elo": false,
//     "girocard": false,
//     "jcb": false,
//     "mastercard": true,
//     "nyce": false,
//     "pulse": false,
//     "star": false,
//     "unionpay": false,
//     "visa": true,
//     "rupay": false
//   },
//   "client_reference_id": null,
//   "consent": null,
//   "consent_collection": null,
//   "cross_sell_group": null,
//   "currency": "inr",
//   "custom_fields": [
//   ],
//   "custom_text": {
//     "shipping_address": null,
//     "submit": null
//   },
//   "customer": null,
//   "customer_email": null,
//   "display_consent_collection_promotions": false,
//   "eid": "NA",
//   "email_collection": "always",
//   "enabled_third_party_wallets": [
//     {
//       "id": "APPLE_PAY",
//       "apple_pay": {
//         "required_version": 2
//       },
//       "enabled": false
//     },
//     {
//       "id": "GOOGLE_PAY",
//       "enabled": false,
//       "google_pay": {
//         "id": "GOOGLE_PAY",
//         "version_major": 2,
//         "version_minor": 0
//       }
//     }
//   ],
//   "enforcement_mode": "open",
//   "feature_flags": {
//     "checkout_passthrough_coupon": true,
//     "checkout_pm_reuse_enabled": true,
//     "checkout_lpm_adoption_lpm_popularity_ranking_experiment": true,
//     "checkout_pay_button_copy_enabled": true,
//     "checkout_send_expected_payment_method_type_param": true,
//     "checkout_link_local_storage_login_enabled": true,
//     "checkout_link_local_storage_login_on_custom_domains_enabled": true,
//     "checkout_disable_email_overwriting": true,
//     "checkout_phone_number_country_select_enabled": true,
//     "checkout_id_bank_transfer_enable_mandiri": true,
//     "checkout_validate_third_party_wallet_shipping_address": true,
//     "checkout_link_billing_country_sign_up_disabled": true,
//     "checkout_delay_form_render": true,
//     "checkout_enable_email_otp_phase_2": true,
//     "checkout_link_new_registration_copy_enabled": true,
//     "checkout_jp_specified_commercial_transactions_act": true,
//     "checkout_terms_of_service": true
//   },
//   "geocoding": {
//     "country_code": "IN",
//     "region_name": null
//   },
//   "has_dynamic_tax_rates": false,
//   "klarna_info": null,
//   "konbini_confirmation_number": null,
//   "line_item_group": {
//     "currency": "inr",
//     "discount_amounts": [
//     ],
//     "line_items": [
//       {
//         "id": "li_1MJ0kSSH9BVqRXMDi0DRIShx",
//         "object": "item",
//         "adjustable_quantity": null,
//         "cross_sell_from": null,
//         "description": null,
//         "discount_amounts": [
//         ],
//         "images": null,
//         "name": "Luxary Room",
//         "price": {
//           "id": "price_1MJ0kSSH9BVqRXMDJERV6EDk",
//           "object": "price",
//           "active": false,
//           "billing_scheme": "per_unit",
//           "currency": "inr",
//           "custom_unit_amount": null,
//           "livemode": false,
//           "product": {
//             "id": "prod_N35qHz15POupRI",
//             "object": "product",
//             "active": false,
//             "attributes": [
//             ],
//             "description": null,
//             "images": [
//             ],
//             "livemode": false,
//             "name": "Luxary Room",
//             "unit_label": null,
//             "url": null
//           },
//           "recurring": null,
//           "tax_behavior": "unspecified",
//           "tiers_mode": null,
//           "transform_quantity": null,
//           "type": "one_time",
//           "unit_amount": 200000,
//           "unit_amount_decimal": "200000"
//         },
//         "quantity": 1,
//         "subtotal": 200000,
//         "tax_amounts": [
//         ],
//         "total": 200000,
//         "unit_amount_override": null
//       }
//     ],
//     "shipping_rate": null,
//     "subtotal": 200000,
//     "tax_amounts": [
//     ],
//     "total": 200000
//   },
//   "link_info": null,
//   "link_settings": {
//     "consumer_found": null
//   },
//   "livemode": false,
//   "locale": null,
//   "mode": "payment",
//   "ordered_payment_method_types": [
//     "card"
//   ],
//   "payment_intent": {
//     "id": "pi_3MJ0lJSH9BVqRXMD0XWbSOr7",
//     "object": "payment_intent",
//     "amount": 200000,
//     "amount_details": {
//       "tip": {
//       }
//     },
//     "automatic_payment_methods": null,
//     "canceled_at": null,
//     "cancellation_reason": null,
//     "capture_method": "automatic",
//     "client_secret": "pi_3MJ0lJSH9BVqRXMD0XWbSOr7_secret_TjIigiFLJCq8GgqqvdoPSbVYl",
//     "confirmation_method": "automatic",
//     "created": 1671999937,
//     "currency": "inr",
//     "description": null,
//     "last_payment_error": null,
//     "livemode": false,
//     "next_action": null,
//     "payment_method": "pm_1MJ0lHSH9BVqRXMDSRvk5WYn",
//     "payment_method_types": [
//       "card"
//     ],
//     "processing": null,
//     "receipt_email": null,
//     "setup_future_usage": null,
//     "shipping": null,
//     "source": null,
//     "status": "succeeded"
//   },
//   "payment_method_collection": "always",
//   "payment_method_options": null,
//   "payment_method_specs": [
//     {
//       "type": "card",
//       "async": false,
//       "fields": [
//       ]
//     }
//   ],
//   "payment_method_types": [
//     "card"
//   ],
//   "phone_number_collection": {
//     "enabled": false
//   },
//   "policies": null,
//   "prefilled": null,
//   "session_id": "cs_test_a1n94Fyn6ECSxUgrlTFhmK6v90TjmvVZKyTmdKJNhKqHuSbFgqVlWOjtMS",
//   "setup_future_usage": null,
//   "setup_future_usage_for_payment_method_type": {
//   },
//   "setup_intent": null,
//   "shipping_address_collection": null,
//   "shipping_options": [
//   ],
//   "shipping_rate": null,
//   "state": "succeeded",
//   "submit_type": null,
//   "subscription_data": null,
//   "success_url": "http://localhost:3000/success",
//   "tax_context": {
//     "automatic_tax_address_source": null,
//     "automatic_tax_enabled": false,
//     "automatic_tax_error": null,
//     "automatic_tax_exempt": "none",
//     "customer_tax_country": null,
//     "dynamic_tax_enabled": false,
//     "has_maximum_tax_ids": false,
//     "tax_id_collection_enabled": false
//   },
//   "tax_meta": {
//     "computation_type": "manual",
//     "customer_tax_exempt": "none",
//     "error_reason": null,
//     "status": "complete"
//   },
//   "use_payment_methods": true,
//   "utm_codes": null
// }


// import React, { useEffect, useState } from "react";
// import DataTable from "react-data-table-component";

// function Payment() {

//     async function getData() {
//         const response = await fetch("http://localhost:4000/api/payment-get");
//         const udata = await response.json();
//         console.log(udata, "mydata");
        
//         // // setData(udata);
//       }
    
//       useEffect(() => {
//         getData();
//       }, []);
    
//       const columns = [
//         {
//           name: " Booking Date",
//           selector: (row) => row.session_id,
//         },
//         {
//           name: "Email",
//           selector: (row) => row.status,
//         },
//         {
//           name: "Address",
//           selector: (row) => row.ref_id,
//         },
    
//       ];
//   return (
//     <div>
//            <div className="container">
//       <DataTable
//         columns={columns}
//         data={data}
//         pagination
//         fixedHeader
//         fixedHeaderScrollHeight="450px"
//         highlightOnHover
//         selectableRowsHighlight
//       />
//     </div>
      
//     </div>
//   )
// }

// export default Payment;
