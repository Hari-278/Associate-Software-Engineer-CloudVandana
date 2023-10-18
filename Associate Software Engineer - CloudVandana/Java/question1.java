// Create an array with the values (1, 2, 3, 4, 5, 6, 7) and shuffle it.

import java.util.Arrays;
import java.util.Random;

public class question1 {
    public static void main(String[] args) {
        
        int[] array = {1, 2, 3, 4, 5, 6, 7};
        shuffleArray(array);
        System.out.println("Shuffled array: " + Arrays.toString(array));
    }

    private static void shuffleArray(int[] array) {
        Random random = new Random();
        for (int i = array.length - 1; i > 0; i--) {
            int index = random.nextInt(i + 1);
            
            int temp = array[i];
            array[i] = array[index];
            array[index] = temp;
        }
    }
}
