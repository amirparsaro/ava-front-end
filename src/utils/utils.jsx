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

export function getFileExtension(filePath) {
  if (typeof filePath !== 'string') return null;

  const lastDotIndex = filePath.lastIndexOf('.');
  if (lastDotIndex === -1 || lastDotIndex === filePath.length - 1) {
    return null;
  }

  return filePath.substring(lastDotIndex + 1).toLowerCase();
}
