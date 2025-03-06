import { PackageData } from '@/types';

// This function fetches package information from package.json
export async function fetchPackageInfo(): Promise<PackageData> {
  // Static package data for the Hello World app
  const packageData: PackageData = {
    projectName: 'next-pages-edge',
    projectVersion: '0.1.0',
    packages: [
      { name: 'next', version: '15.2.1', type: 'dependency' },
      { name: 'react', version: '^19.0.0', type: 'dependency' },
      { name: 'react-dom', version: '^19.0.0', type: 'dependency' },
      { name: '@eslint/eslintrc', version: '^3', type: 'devDependency' },
      { name: '@tailwindcss/postcss', version: '^4', type: 'devDependency' },
      { name: '@types/node', version: '^20', type: 'devDependency' },
      { name: '@types/react', version: '^19', type: 'devDependency' },
      { name: '@types/react-dom', version: '^19', type: 'devDependency' },
      { name: 'eslint', version: '^9', type: 'devDependency' },
      { name: 'eslint-config-next', version: '15.2.1', type: 'devDependency' },
      { name: 'eslint-config-prettier', version: '^10.0.2', type: 'devDependency' },
      { name: 'prettier', version: '^3.5.3', type: 'devDependency' },
      { name: 'tailwindcss', version: '^4', type: 'devDependency' },
      { name: 'typescript', version: '^5', type: 'devDependency' },
    ],
  };

  return packageData;
}
