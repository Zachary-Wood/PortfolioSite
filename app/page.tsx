"use client";
import { Hero, Grid, Clients, RecentProjects, Experience, Footer } from '@/components/ClientComponents';
import { navItems } from "@/data";




import FloatingNav from '@/components/ui/FloatingNav';

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
