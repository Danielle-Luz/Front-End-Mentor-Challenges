function printReceipt() {
  window.print();
}

const printReceiptButton = document.querySelector("#print-receipt-button");

printReceiptButton.addEventListener("click", printReceipt);