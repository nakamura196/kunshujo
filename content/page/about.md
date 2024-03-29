---
title: このサイトについて
description: Learn how to use @nuxt/content.
---

<br/>

## はじめに

東京大学総合図書館所蔵の田中芳男文庫『捃拾帖（くんしゅうじょう）』は、幕末から大正時代にかけての商品ラベルやチラシ、パンフレットなど多種多様な印刷物を貼り込んだスクラップブックで、2018年6月に[「田中芳男・博物学コレクション」](https://iiif.dl.itc.u-tokyo.ac.jp/repo/s/tanaka/)において全帖がデジタル公開されました。2019年には史料編纂所との連携により、[史料編纂所「摺物データベース」](https://wwwap2.hi.u-tokyo.ac.jp/ships/shipscontroller)で公開されていた『捃拾帖』第1帖から第18帖までのメタデータを活用し、貼り込み資料単位の検索が可能な[「電子展示『捃拾帖』」](https://kunshujo.dl.itc.u-tokyo.ac.jp/)を公開しました(*1)。

その後、第19帖以降のメタデータ作成が課題となっていましたが、本学が実施している「オンキャンパスジョブ」の活用や、特に2020年度における在宅勤務時の作業によりメタデータ作成が進み(*2)、「外国捃拾帖」を除く全帖のデータ入力が完了しました。

その公開サイトが、「電子展示『捃拾帖』（拡張版）」です。拡張版では全96帖分の貼り込み資料単位の検索（拡張版でも第1~18帖目の資料を含んでいます）だけでなく、構造化されたデータによる人物・地名などの絞り込み検索や、機械学習による自動タグ付与といった実験的な試みも行っています。

『捃拾帖』に貼り込まれた様々な資料の中から、幕末から大正時代にかけての文化、風俗、社会を思いがけず知ることができるかもしれません。是非ご活用ください。

(*1)「電子展示『捃拾帖』」も、引き続き公開しています。

(*2)[使われるための地道なデータづくりの話－コロナ禍だからできた「捃拾帖」 のタグ付け－](https://www.lib.u-tokyo.ac.jp/sites/default/files/2021-02/04_nakamura_ccby.pdf)（第4回東京大学学術資産アーカイブ化推進室セミナー資料）

<br/>

『捃拾帖』の解説：[田中芳男文庫と『捃拾帖』について　（電気通信大学　佐藤 賢一）](https://www.lib.u-tokyo.ac.jp/ja/library/general/tanaka-collection)



<br/><br/>

## 第19帖以降のデータ入力ルールについて

- 原則として、資料に書かれてある主だった事項を入力しています。
- 旧字は新字に変換しています。
- 漢数字はアラビア数字に変換しています。
- くずし字は平仮名にして入力しています。
- 全て大文字アルファベットで書かれている場合は、先頭文字のみ大文字とし他は小文字で入力しています（固有名詞や人名等をのぞく）。
- 資料に明記されていないが容易に類推できるものは、〔  〕を付けて入力しています。また
- 判読できない文字がある場合は、 □（四角記号）を入力しています。
- 判読できないものは「不明」と入力しています。

<br/>

- 第1～18帖のデータ入力ルールは、[「電子展示『捃拾帖』」の凡例](https://kunshujo.dl.itc.u-tokyo.ac.jp/legend.html)をご覧ください。

<br/><br/>

## データの構造化

上記の人手によるタグづけに加えて、以下の2つのデータ構造化を実施しました。
- 入力タグからの固有表現抽出
- Google Cloud Vision APIによる物体検出
- 色の抽出

<br/>

以下、それぞれについて説明します。

<br/>

### 入力タグからの固有表現抽出

人手によって作成されたタグは、それぞれの貼り込み資料に書かれてあることをそのまま入力したものです。そこで5回以上出現したタグについては、「人名」「組織・機関名」「地名」「年代・時間」「キーワード」に該当するものを更に人手により抽出し、標準となる値も与えました。

例えば「田中芳男殿」「田中芳男男爵」というタグに対し、「田中芳男」という値を追加することで、表記の揺れを吸収した検索を可能にしています。

<br/>

### Google Cloud Vision APIによる物体検出

上述した人手によるメタデータ付与に加えて、機械的なメタデータの付与も行いました。具体的には、Google Cloud Vison APIの物体検出機能を利用して、貼り込み資料内の物体を検出しました。検出した物体（以下、機械タグ）には誤りも含まれたため、目視によるチェックを行い、明らかに誤っている結果は除外しています。

<br/>

### 色の抽出

貼り込み資料および貼り込み資料から検出した物体のドミナントカラー（色）を抽出し、メタデータとして付与しています。ドミナントカラーの抽出には、NYPLが公開する以下の手法を使用しています。

https://github.com/nypl-publicdomain/pd-visualization#building-the-visualization

<br/>

### まとめ

上記のデータ構造化のプロセスを経て、次に示すメタデータの抽出と、それに基づく検索を可能としています。

<br/>

<v-img src="/img/etc/data.png" height="400px" contain></v-img>

<br/><br/>

## 機械学習サービス

本サービスは実験的なサービスとなります。予告無くサービスの中止、改変を行う事があります。<!-- また、AWS Lambdaを使用しているため、コールドスタート（初回実行時に時間がかかる）にご注意ください。-->

<br/>

### 物体検出

上述したプロセスにより作成した約33,000件のアノテーションデータを用いて、資料画像から貼り込み資料を検出するAPIおよびサービスを提供しています。物体検出の手法には、YOLOv5を用いています。

https://github.com/ultralytics/yolov5

<!-- 物体検出対象の画像の入力方法として、画像をアップロードする方法と、URLを指定する方法の2種類を提供します。特に後者については、検出結果をIIIF Presentation API v3に対応した形式で返却することで、本APIに対応したビューア（Mirador 3など）で閲覧することができます。 -->

デモアプリケーションをHugging Faceで公開しています。

https://huggingface.co/spaces/nakamura196/yolov5-kunshujo

データセットは以下で公開しています。

https://github.com/utda/kunshujo-layout-dataset

<br/>

### 類似画像検索

貼り込み資料画像から抽出した特徴量に基づき、類似する画像を提示します。特徴量については、inception-v3モデルを用いて抽出した2,048次元の特徴ベクトルを使用しています。またベクトルの類似度計算には近似最近傍探索ライブラリAnnoyを使用しています。

https://github.com/spotify/annoy

<!-- 検索結果は、人文学オープンデータ共同利用センターが提供するIIIF Curation APIに対応した形式で返却されます。同センターが提供するIIIF Curation Viewerを用いて、類似画像を閲覧することができます。 -->

デモアプリケーションをHugging Faceで公開しています。

https://huggingface.co/spaces/nakamura196/ann-kunshujo

