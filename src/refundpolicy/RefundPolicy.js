import React from "react";
import "./RefundPolicy.css"; // Import the CSS file
import { Helmet } from 'react-helmet-async';

const RefundPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Refund & Cancellation Policy - Burj Tech Consultancy</title>
        <meta name="description" content="Review our Refund & Cancellation Policy at Burj Tech Consultancy. Details on eligibility, timelines, non-refundable items, cancellation process, and how to contact us for refunds or returns." />
        <link rel="canonical" href="https://www.btcglobal.info/refund-policy" />
      </Helmet>
      <div className="container my-5 refund-policy-container">
        <div className="card shadow-sm p-4 border-0">
          <h1 className="fw-bold mb-3 text-primary">Refund & Cancellation Policy</h1>
          <p className="text-muted">Last updated: October 2025</p>

          <p>
            At <strong>BURJ TECH CONSULTANCY</strong> ("we", "us", "our"), we strive to ensure 
            customer satisfaction with every purchase made through our website 
            <strong>www.btcglobal.info</strong>. This Refund and Cancellation Policy 
            outlines the conditions under which refunds, returns, or cancellations 
            may be requested and processed.
          </p>

          <h4 className="mt-4">1. Refund Eligibility</h4>
          <p>
            Refunds are only applicable under the following circumstances:
          </p>
          <ul>
            <li>
              Duplicate or excess payment due to a technical error or system glitch.
            </li>
            <li>
              Payment deducted but the order or service was not confirmed or delivered.
            </li>
            <li>
              Product received is defective, damaged, or not as described, subject to verification.
            </li>
            <li>
              Order cancelled before processing or dispatch (as per our cancellation policy).
            </li>
          </ul>
          <p>
            Refunds are not applicable for products or services marked as 
            <strong> "Non-Refundable"</strong> or <strong> "Final Sale"</strong>.
          </p>

          <h4 className="mt-4">2. Refund Timeline</h4>
          <p>
            Once approved, refunds will be initiated within <strong>7–10 business days</strong> 
            and credited back to the original payment method used during purchase.
          </p>
          <p>
            Please note that the exact time frame for the refund to reflect depends 
            on your bank, card issuer, or payment provider (e.g., Cashfree).
          </p>

          <h4 className="mt-4">3. Return or Replacement Process</h4>
          <p>
            If you have received a defective or incorrect product, you may request 
            a return or replacement within <strong>7 days</strong> of delivery by 
            contacting our support team at <strong>burjtechconsultancy@gmail.com</strong>.
          </p>
          <p>
            Returned products must be unused, in their original packaging, and 
            accompanied by the original invoice or proof of purchase. 
            Once we verify and approve your request, we will initiate a replacement 
            or refund as applicable.
          </p>

          <h4 className="mt-4">4. Non-Refundable & Non-Cancellable Items</h4>
          <p>
            The following products or services are strictly non-refundable and non-cancellable:
          </p>
          <ul>
            <li>Digital goods, downloadable products, or personalized items.</li>
            <li>Gift cards, vouchers, or promotional credits.</li>
            <li>Services that have already been rendered or initiated.</li>
            <li>Orders once shipped, if not eligible for return or damage claim.</li>
          </ul>
          <p>
            Such items will be clearly marked as "Non-Refundable" on the product or checkout page.
          </p>

          <h4 className="mt-4">5. Cancellation Process</h4>
          <p>
            Customers may request cancellation of an order before it has been processed or dispatched.
            To initiate a cancellation, contact our support team via email at 
            <strong>burjtechconsultancy@gmail.com</strong> with the order number, 
            payment details, and reason for cancellation.
          </p>
          <p>
            Once an order is processed or shipped, it cannot be cancelled. 
            In such cases, you may refer to our return or replacement procedure if applicable.
          </p>

          <h4 className="mt-4">6. Cancellation Fee</h4>
          <p>
            In case of an approved cancellation before processing or shipment, 
            a nominal <strong>cancellation fee of up to 2.5%–3% of the transaction value</strong> 
            may be deducted to cover payment gateway or administrative charges.
          </p>
          <p>
            This fee will be communicated clearly before the refund is processed.
          </p>

          <h4 className="mt-4">7. Requirements for Cancellation or Refund</h4>
          <p>
            To process any refund or cancellation request, the following details 
            must be submitted:
          </p>
          <ul>
            <li>Order ID and payment transaction reference.</li>
            <li>Registered name, contact number, and email ID.</li>
            <li>Proof of payment or invoice copy.</li>
            <li>Valid reason for refund or cancellation request.</li>
          </ul>
          <p>
            Requests with incomplete information or outside the allowed time frame 
            will not be accepted.
          </p>

          <h4 className="mt-4">8. Refund Approval Process</h4>
          <p>
            Upon receiving a valid refund or cancellation request, our team will 
            review and verify the transaction details. Approved refunds will be 
            initiated through the same payment mode (e.g., Cashfree or card provider).
          </p>

          <h4 className="mt-4">9. Contact Information</h4>
          <p>
            For all refund or cancellation-related queries, please contact:
          </p>
          <p>
            📧 <strong>burjtechconsultancy@gmail.com</strong> <br />
            📞 <strong>+91-9444369625</strong> <br />
            🏢 <strong>No.469/ Pavalamalli St, Narasimhapuram, Kakkalur, Tiruvallur - 602003</strong>
          </p>

          <h4 className="mt-4">10. Policy Updates</h4>
          <p>
            We reserve the right to amend or update this policy at any time without 
            prior notice. Any changes will be reflected on this page with the 
            updated "Last Updated" date.
          </p>
        </div>
      </div>
    </>
  );
};

export default RefundPolicy;