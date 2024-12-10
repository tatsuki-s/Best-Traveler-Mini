# Best-Traveler

## 概要

Best-Travelerは，一関とその周辺地域のバスの時刻を地域住民と観光客向けに提供するWebサイトです。

Best-Traveler-Miniは，全体的な操作感を味わってもらうべく，本家からフォークしました。

特徴としては，WebPagesの機能を使うため，静的ファイルのみで構成されています。

## 機能

本家は一関平泉線の全バス停が利用できますが，Miniでは一関駅前・大町通り・大町角・平泉駅前のみです。

また，時刻一覧の表は一部のみ利用可能です。

## 実行方法

サーバーで開き，設定しているポートにアクセスするだけです。

## 実行環境

fetchメソッドを利用しているので，ApacheやPythonなどのとりあえずのことができるhttpサーバーがあれば正常に表示されます。

HTMLファイルを開くだけではヘッダーとフッターが読み込まれません。

## 使用したライブラリ・フレームワーク

Best-Travelerの開発において、以下のライブラリ・フレームワークを使用しました。

- Splide.js
- Lightbox2
- jQuery（Lightboxが使用）

いずれもCDNとしてjsDelivrを使っています。

## ディレクトリ構成
```
Best-Traveler/
├── index.html 	  # トップページ（本家はTopPage.html）
├── css/          # CSSファイル
├── image/        # 画像
├── js/           # JavaScriptファイル
└── README.md         # 説明書（このファイル）
```
