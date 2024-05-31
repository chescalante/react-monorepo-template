import Layout from "@/layout";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <Layout>
      <h3>Welcome Home!</h3>
    </Layout>
  );
}
