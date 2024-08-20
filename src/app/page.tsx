import Image from "next/image";
import { ThemeProvider, GradientButton } from '@lobehub/ui'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <ThemeProvider>
        <GradientButton>Hello AIGC</GradientButton>
      </ThemeProvider>
      
    </main>
  );
}
