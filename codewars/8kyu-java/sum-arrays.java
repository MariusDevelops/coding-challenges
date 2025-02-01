public class SumArray {

  public static double sum(double[] numbers) {
    if (numbers == null || numbers.length == 0) {
      return 0;
    }
    
    double sum = 0.0;
    for (double n : numbers) {
      sum += n;
    }
    
    return sum;
  }
}