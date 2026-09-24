import '../public/css/styles.css'

export const metadata = {
  title: 'Syllabex',
  description: 'Modular Revision Platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="https://unpkg.com/lucide@latest"></script>
      </head>
      <body className="bg-slate-50 text-slate-800 antialiased h-screen flex flex-col font-sans overflow-hidden">
        {children}
        <script src="/js/main.js" defer></script>
      </body>
    </html>
  )
}
