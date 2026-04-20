import { DateTime } from "luxon";

export class DateTimeUtils {
  static isValidDateTimeFormat(current: string, format: string): boolean {
    if (!current) return false;

    const parsed = DateTime.fromFormat(
      current.trim(),
      format
    );

    return parsed.isValid;
  }
}