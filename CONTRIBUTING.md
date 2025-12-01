# コントリビューションガイド

『電子展示「捃拾帖」（拡張版）』へのコントリビューションに興味をお持ちいただきありがとうございます。

## Issue の報告

バグの報告や機能リクエストは [GitHub Issues](https://github.com/utda/kunshujo/issues) からお願いします。

### バグ報告時に含めていただきたい情報

- 問題の概要
- 再現手順
- 期待される動作
- 実際の動作
- ブラウザとOSのバージョン

## プルリクエスト

1. このリポジトリをフォークしてください
2. 機能ブランチを作成してください (`git checkout -b feature/amazing-feature`)
3. 変更をコミットしてください (`git commit -m 'Add amazing feature'`)
4. ブランチにプッシュしてください (`git push origin feature/amazing-feature`)
5. プルリクエストを作成してください

## 開発環境のセットアップ

```bash
# リポジトリをクローン
git clone https://github.com/utda/kunshujo.git
cd kunshujo

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

## コーディング規約

- ESLint と Prettier の設定に従ってください
- コミット前に `npm run lint` を実行してください

## ライセンス

コントリビューションは [MIT License](LICENSE) のもとで提供されます。
