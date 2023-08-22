import React, { useState, useEffect } from 'react';
import axios from 'axios';

function InvoiceDetails() {
  const [invoice, setInvoice] = useState({});

  useEffect(() => {
    axios.get('/api/invoices/456') // Replace with the correct invoice ID
      .then(response => {
        setInvoice(response.data);
      })
      .catch(error => {
        console.error('Error fetching invoice:', error);
      });
  }, []);

  return (
    <div>
      <h2>Invoice Details</h2>
      <p>Invoice ID: {invoice.invoiceId}</p>
      <p>Due Date: {invoice.dueDate}</p>
      <p>Total Amount: {invoice.totalAmount}</p>
      {/* Display other invoice information */}
    </div>
  );
}

export default InvoiceDetails;
