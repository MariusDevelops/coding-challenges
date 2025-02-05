 class Clock {
  public static int Past(int h, int m, int s) {
    if (isValidTime(h, m, s)) {
      return (h * 60 * 60 * 1000) + (m * 60 * 1000) + (s * 1000);
    } else {
      return -1;
    }
  }
  
  public static boolean isValidTime(int h, int m, int s) {
    return h >= 0 && h <= 23 && m >= 0 && m <= 59 && s >= 0 && s <= 59;
  }
}