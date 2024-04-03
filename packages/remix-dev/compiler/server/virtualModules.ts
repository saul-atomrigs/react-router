interface VirtualModule {
  id: string;
  filter: RegExp;
}

export const serverBuildVirtualModule: VirtualModule = {
  id: "@react-router/dev/server-build",
  filter: /^@remix-run\/dev\/server-build$/,
};

export const assetsManifestVirtualModule: VirtualModule = {
  id: "@react-router/dev/assets-manifest",
  filter: /^@remix-run\/dev\/assets-manifest$/,
};
