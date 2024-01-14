import PageContainer from "@/components/PageContainer";
import { Dashboard } from "@/components/dashboard";

export default function HomePage() {
  const client = "pokemon";

  return (
    <PageContainer>
      <Dashboard client={client} />
    </PageContainer>
  );
}
