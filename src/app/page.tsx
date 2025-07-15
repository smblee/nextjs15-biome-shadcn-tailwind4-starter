import { env } from "@/env"

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-4">
      <h1 className="font-bold text-4xl">Hello World</h1>
      <p>
        NEXT_PUBLIC_TEST: <strong>{env.NEXT_PUBLIC_TEST ?? "Not set. Copy .env.example to .env"}</strong>
      </p>
    </div>
  )
}
