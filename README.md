# mato-labo / 研究室まとめるくん
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
* Hosting: Vercel or Firebase Hosting
* CDN: 今は使わない. 使うならCloudflare
* CI/CD: GitHub Actions
* テスト: Vitest, MSW(使うか迷う)
* ロギング: Pino [参考](https://zenn.dev/noko_noko/articles/27a1e00f4d914e)
* その他: tRPC/zod/Google Analytics
