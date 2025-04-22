import MainLayout from "@/components/layout/MainLayout";
import Hero from "@/components/home/Hero";
import AboutSummary from "@/components/home/AboutSummary";
import ServicesOverview from "@/components/home/ServicesOverview";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <AboutSummary />
      <ServicesOverview />
    </MainLayout>
  );
}
