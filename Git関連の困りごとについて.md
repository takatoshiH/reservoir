# Git関連の困りごとについて

## git add したファイルを取り消したい

### 全てのファイルを取り消したい
```
git reset HEAD
```

### 特定のファイルのみ取り消したい
```
git reset HEAD file_name
```

## commitメッセージを変更したい
### 直前のcommitメッセージを変更したい
```
git commit --amend -m "cssを修正"
```

### 2つ以上前のコミットメッセージを変更したい
この記事を参考に: https://www.granfairs.com/blog/staff/git-commit-fix

## 間違えたブランチでcommit してしまったのでstagingに戻したい

```
git reset --soft HEAD~
```