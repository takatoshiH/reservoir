package main

func main() {
	n, m := swap(10, 20)
	println(n, m)
}

func swap(numberOne int, numberTwo int) (int, int) {
	return numberTwo, numberOne
}
