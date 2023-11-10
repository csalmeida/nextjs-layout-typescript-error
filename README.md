# NextJS Layout Error on Build

This repository replicates [the error discussed here](https://github.com/vercel/next.js/discussions/58275#discussioncomment-7532936), regarding running `next build` with a layout and parallel routes.

The error is as follows:

```bash
app/(auth)/archives/layout.tsx
Type error: Layout "app/(auth)/archives/layout.tsx" has an invalid "default" export:
  Type "Props" is not valid.
```

It seems to be caused by: 

```TypeScript
type Props = {
  children: React.ReactNode
  archivePanel: React.ReactNode
  archiveForm: React.ReactNode
}

export default function Layout({ children, archivePanel, archiveForm }: Props) {
  return (
      <div className="h-full">
          {children}
          {archivePanel}
          {archiveForm}
      </div>
  )
}
```

To replicate please setup the project and run `npm run build`.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
