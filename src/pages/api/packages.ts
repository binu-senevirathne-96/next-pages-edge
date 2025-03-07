import type { NextApiRequest, NextApiResponse } from 'next';
import { PackageData } from '@/types';
import { fetchPackageInfo } from '@/common/packages';

export default async function handler(_req: NextApiRequest, res: NextApiResponse<PackageData>) {
  try {
    const packageData = await fetchPackageInfo();
    res.status(200).json(packageData);
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({
      projectName: 'next-pages-edge',
      projectVersion: '0.1.0',
      packages: [],
    });
  }
}
