import Layout from "@/layout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <Layout>
      <div className="flex flex-1 items-center justify-center">
        <h3>Home Page</h3>
      </div>
    </Layout>
  );
}
