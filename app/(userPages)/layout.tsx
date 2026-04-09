import NavBar from "@/components/NavBar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar /> 
      <main className="w-full px-20 my-20 flex flex-col justify-center items-center">{children}</main>
    </>
  );
}