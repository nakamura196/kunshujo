# 電子展示『捃拾帖』（拡張版）

東京大学総合図書館所蔵の田中芳男文庫『捃拾帖（くんしゅうじょう）』のデジタルアーカイブ検索システムです。

## 概要

『捃拾帖』は、幕末から大正時代にかけての商品ラベルやチラシ、パンフレットなど多種多様な印刷物を貼り込んだスクラップブックです。本システムでは、全96帖分の貼り込み資料単位の検索に加え、以下の機能を提供しています。

- 構造化されたデータによる人物・地名などの絞り込み検索
- 機械学習による自動タグ付与
- Google Cloud Vision APIによる物体検出
- 類似画像検索

## 技術スタック

- [Nuxt.js](https://nuxtjs.org/) v2
- [Vuetify](https://vuetifyjs.com/)
- TypeScript
- Leaflet（地図表示）
- OpenSeadragon（高解像度画像ビューア）

## セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動（http://localhost:8004）
npm run dev

# 本番用ビルド
npm run build
npm start

# 静的サイトの生成
npm run generate
```

## ディレクトリ構成

```
├── assets/          # CSS等の静的アセット
├── components/      # Vueコンポーネント
├── content/         # Nuxt Contentのマークダウンファイル
├── env/             # 環境別設定
├── lang/            # 多言語対応ファイル（日本語・英語）
├── layouts/         # レイアウトコンポーネント
├── pages/           # ページコンポーネント
├── plugins/         # Nuxtプラグイン
├── static/          # 静的ファイル（画像、データJSON等）
└── store/           # Vuexストア
```

## 関連リンク

- [電子展示『捃拾帖』](https://kunshujo.dl.itc.u-tokyo.ac.jp/) - 第1〜18帖の検索システム
- [田中芳男・博物学コレクション](https://da.dl.itc.u-tokyo.ac.jp/portal/collection/tanaka/) - デジタル公開サイト
- [捃拾帖レイアウトデータセット](https://github.com/utda/kunshujo-layout-dataset) - 物体検出用データセット

## ライセンス

[MIT License](LICENSE)