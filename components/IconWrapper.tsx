import React from 'react';
import * as LucideIcons from 'lucide-react';
import { LucideProps } from 'lucide-react';

interface IconWrapperProps extends Omit<LucideProps, 'ref'> {
  name: string;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ name, ...props }) => {
  const IconComponent = (LucideIcons as any)[name];
  if (!IconComponent) return null;
  return <IconComponent {...props} />;
};

export default IconWrapper;