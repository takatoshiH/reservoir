* イメージの取得
* 取得したイメージを元にコンテナの作成
* 作成されたコンテナの起動

### docker run hello-world
* hello-worldイメージの検索

* コンテナの元はイメージであり、イメージがないとコンテナを作成することはできない
* ローカルにhello-worldのイメージが存在しない場合, Docker Hubからイメージの取得が行われる

* ローカルのイメージの一覧の取得: docker images
* Docker Hubでのイメージの検索: docker search イメージ名
* DOcker Hubからのイメージの取得: docker pull イメージ名
* 取得したイメージからコンテナの起動: docker run イメージ名
* コンテナの一覧の取得 : docker ps
* 停止中も含めたコンテナの一覧の取得: docker ps -a


* DockerFileからイメージを作る: docker build
* イメージからコンテナを作る: docker run

Docker fileってこんな感じ

```
FROM ruby:alpine

RUN apk add --no-cache bash tzdata libxml2-dev libxslt-dev sqlite sqlite-dev nodejs postgresql-dev

WORKDIR /temple

COPY Gemfile .

RUN set -ex \
 && apk add --no-cache --virtual .build-dep build-base \
 && gem install nokogiri \
   -- --use-system-libraries \
   --with-xml2-config=/usr/bin/xml2-config \
   --with-xslt-config=/usr/bin/xslt-config \
 && bundle install \
 && apk del .build-dep
 
```

#### dockerコマンド(イメージ管理用

#### docker composeとは
* 複数のコンテナからなるサービスを構築、実行する手順を自動化し、管理を容易にする機能
* Docker compose では、composeファイルを用意してコマンドを1回実行する

#### docker composeを使うまでの手順
* それぞれのコンテナのDockerファイルの作成
* docker-compose.yml を作成し、それぞれ独立したコンテナの起動定義を行う
* docker-compose up コマンドを実行して、docker-compose.yml で定義したコンテナを開始する

# dockerfileを作成して、imagesを作るまで
* Dockerfileを作成する
* Dockerfileに中身を記述する