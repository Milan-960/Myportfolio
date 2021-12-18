import client from "@sanity/client";

export default client({
  projectId: "pfmait3t",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-12-17",
});
