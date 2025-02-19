import { Indicator } from './DropIndicator.styles';

interface DropIndicatorProps {
  beforeId?: string | number;
  column: string | number;
}

export const DropIndicator = ({ beforeId, column }: DropIndicatorProps) => {
  return <Indicator data-before={beforeId ?? '-1'} data-column={column} />;
};
