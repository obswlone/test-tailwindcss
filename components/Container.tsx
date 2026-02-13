export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-360 mx-auto  mb-8">
      {children}
    </div>
  );
}
