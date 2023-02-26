package main

func main() {
	msg := "hello"

	func() {
		println(msg)
	}()
}
