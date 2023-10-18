// Check if the input is pangram or not. (A pangram is a sentence that contains all the alphabets from A to Z)

import java.util.HashSet;

public class question3 {
    public static void main(String[] args) {
        // Read input string from the user
        String input = "The quick brown fox jumps over the lazy dog";

        // Check if the input is a pangram
        boolean isPangram = isPangram(input.toLowerCase());

        // Output the result
        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    // Function to check if a string is a pangram
    private static boolean isPangram(String input) {
        
        // Set to store unique lowercase letters
        HashSet<Character> uniqueLetters = new HashSet<>();

        // Iterate through the input string and add lowercase letters to the set
        for (char c : input.toCharArray()) {
            if (Character.isLetter(c)) {
                uniqueLetters.add(c);
            }
        }

        // If the set size is 26, the input is a pangram
        return uniqueLetters.size() == 26;
    }
}
