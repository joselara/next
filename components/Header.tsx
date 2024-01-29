import { Container } from '@/components/Container';
import Avatar from '@/components/Avatar';

export default function Header({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="pointer-events-none flex flex-col pt-4">
        <Container>
          <div className="flex flex-1 justify-end md:justify-center">
            {/* <DesktopNav /> */}
          </div>
        </Container>
      </div>

      <Container>
        <div className="mt-24 mb-4">
          <Avatar />
        </div>
      </Container>

      {children}
    </>
  );
};

