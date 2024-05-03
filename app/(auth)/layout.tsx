export default async function Layout({
    children,
 }: {
    children: React.ReactNode;
 }) {
    return (
       <div className="scroll-smooth">
          <div>{children}</div>
       </div>
    );
 }
 