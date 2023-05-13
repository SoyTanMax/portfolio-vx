import type { V2_MetaFunction } from "@remix-run/node";
import Hero from "~/components/Hero";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Max López - Ux Engineer" }];
};

export default function Index() {
  return (
    <div>
      <Hero />
    </div>
  );
}
