/// <reference types="@react-router/dev" />
/// <reference types="@react-router/cloudflare" />
/// <reference types="@cloudflare/workers-types" />

declare module "__STATIC_CONTENT_MANIFEST" {
  const manifest: string;
  export default manifest;
}
