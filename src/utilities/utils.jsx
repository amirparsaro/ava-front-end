export function toPersianDigits(input) {
  return input.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
}

export function timeToPersianDigits(input) {
  return input
    .split(":")
    .map(toPersianDigits)
    .join(":");
}

export function dateToPersianDigits(input) {
  return input
    .split("-")
    .map(toPersianDigits)
    .join("-");
}
