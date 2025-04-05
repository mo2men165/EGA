export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Let the middleware or children handle the content
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}