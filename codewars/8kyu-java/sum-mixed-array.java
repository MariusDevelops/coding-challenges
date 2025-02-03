import java.util.List;

public class MixedSum {
	public int sum(List<?> mixed) {
    int sum = 0;
    
    for (Object number : mixed) {
      if (number instanceof Integer) {
        sum += (Integer) number;
      } else if (number instanceof String) {
        sum += Integer.parseInt((String) number);
      }
    }
    
		return sum;
	}
}