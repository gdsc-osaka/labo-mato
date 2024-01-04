# [labo-mato / 研究室まとめるくん](https://labo-mato.pages.dev/)
## Gitルール
### ブランチ名
* `main`: メインブランチ. 現行でデプロイされてるコード
* `dev`: 開発中ブランチ
* `feat/<user_id>/<alias>#<issue_id>`: 新機能ブランチ. issueで "new feature" がついてるもの 
  `<user_id>`: GitHubのユーザーId  
  `<issue_id>`: Issue番号  
  `<alias>`: Issueの特徴を端的に表した文章  
  例) `feat/hari/1login_page#10`
* `hotfix/<user_id>/<alias>#<issue_id>`: バグ修正用ブランチ. issueで "bug" がついてるもの

### Commit Message
先頭に prefix を付ける. 例: `feat: ログインページを追加`  
prefix の一覧↓
* feat: 新しい機能
* fix: バグの修正
* docs: ドキュメントのみの変更
* style: 空白、フォーマット、セミコロン追加など
* refactor: 仕様に影響がないコード改善(リファクタ)
* perf: パフォーマンス向上関連
* test: テスト関連
* chore: ビルド、補助ツール、ライブラリ関連

## ディレクトリ構成
<pre>
├── next  // Next.jsのディレクトリ
└── README.md
</pre>

## 技術スタック(暫定)
* フロント: Next.js, KumaUI, (Tailwind?)
* バックエンド: Next.jsのAPI Routes
* DB: PlanetScale
* ORM: Prisma
* ストレージ: Cloudflare R2 (Cloud Storage は無料枠5GB/month, R2は10GB/month)
* 認証: Firebase Auth + NextAuth
* Hosting: Cloudflare Hosting
* CDN: 今は使わない. 使うならCloudflare
* CI/CD: GitHub Actions
* テスト: Vitest, MSW(使うか迷う)
* ロギング: Pino [参考](https://zenn.dev/noko_noko/articles/27a1e00f4d914e)
* その他: tRPC/zod/Google Analytics
