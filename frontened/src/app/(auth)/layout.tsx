

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" flex h-screen items-center justify-center bg-gray-100 p-4">
      <div className="flex justify-center h-screen w-full max-w-md bg-white rounded-lg shadow-md p-6">
        {children}
      </div>
    </div>
  );
}
