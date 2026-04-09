import NavBar from "@/components/NavBar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar /> 
      <main className="w-full m-auto my-20 flex flex-col justify-center items-center md:w-1/2">{children}</main>
    </>
  );
}