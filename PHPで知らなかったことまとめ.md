# define()

名前を指定して定数を定義することができる。const.php 的なファイルを作って定数を管理するときに使えそう。

```
define(string $constant_name, mixed $value, bool $case_insensitive = false): bool
```

# php_sapi_name()
ウェブサーバーと PHP の間のインターフェイスの型を返す

# empty とか is_nullについて
公式: https://www.php.net/manual/ja/types.comparisons.php

* empty <=> bool;: if($x) => 普通に使う分にはこんな感じ
* is_null <=> isset() => 普通に使う分にはこんな感じ

一部例外的なお話はあるが、普通に使う分にはこんな感じ

## is_null() == trueのケース
1. $x = null;
2. var $x;
3. $x が未定義

だけ

if($a) return $a;


一般論として、 list() での代入がどの順で行われるかに依存するコードは書かないことを推奨します。 代入の順番は、実装の都合によって今後も変わる可能性があるからです。

# foreachについて

```
foreach (array(1, 2, 3, 4) as $value) {
    echo $value;
}
```

的なことをして、繰り返しから抜けた後に `$value` には4が入っている問題(闇)

* $valueを他でも使いたいなとか思ったら `unset($value)`とかしましょう。

## PHPで現在のURLを取得する方法

```
echo $_SERVER["REQUEST_URI"];
```