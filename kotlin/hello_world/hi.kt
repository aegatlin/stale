/*
$ kotlinc hi.kt
$ kotlin HiKt

or

$ kotlinc hi.kt -include-runtime -d hi.jar
$ java -jar hi.jar

Lastly, the empty settings.gradle file is necessary for the
kotlin-language-server root_path detection in neovim.
*/
fun main() {
  println("Hello, World!")
  println()
}
