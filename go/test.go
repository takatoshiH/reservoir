package main

func main() {

	for number := 0; number <= 100; number++ {
		if number%2 == 0 {
			println("偶数")
			continue
		}

		println("奇数")
	}
}
