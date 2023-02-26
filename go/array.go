package main

import "fmt"

func main() {
	var numbers = [...]int{10, 20, 30, 40, 50, 20}

	var maxNumber int

	for _, number := range numbers {
		if maxNumber < number {
			maxNumber = number
		}
	}

	fmt.Printf("%d", maxNumber)

}
