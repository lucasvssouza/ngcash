export const currencyMask = (e: React.ChangeEvent<HTMLInputElement>) => {
  let amount = e.target.value;
  amount = amount.replace(/\D/g, "");
  if (amount.charAt(0) === "0") {
    amount = amount.slice(1);
    amount = amount.replace(/(\d)(\d{2})$/, "$1.$2");
  } else {
    amount = amount.replace(/(\d)(\d{2})$/, "$1.$2");
  }
  if (amount.charAt(amount.length - 3) !== ".") {
    if (amount.charAt(amount.length - 1) === "") {
      amount = "0.00" + amount;
    } else if (amount.charAt(amount.length - 2) === "") {
      amount = "0.0" + amount;
    } else if (amount.charAt(amount.length) === "") {
      amount = "0." + amount;
    }
  }
  e.target.value = amount;
  return e;
};
