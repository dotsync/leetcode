#include <iostream>

int main() {
  int max;
  std::cout << "What is your number: ";
  std::cin >> max;


  for (int i = 1 ; i <= max; i ++) {
    if (i % 3 == 0 && i % 5 != 0) {
      std::cout << "Fizz\n";
    } else if (i % 3 != 0 && i % 5 == 0) {
      std::cout << "Buzz\n";
    } else if (i % 3 == 0 && i % 5 == 0) {
      std::cout << "FizzBuzz\n";
    } else {
      std::cout << i << "\n";
    }
  }

}
