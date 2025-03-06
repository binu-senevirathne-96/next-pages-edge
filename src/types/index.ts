export interface PackageInfo {
  name: string;
  version: string;
  type: 'dependency' | 'devDependency';
}

export interface PackageData {
  packages: PackageInfo[];
  projectName: string;
  projectVersion: string;
}
