import { Option } from './types';

export const getSelectedOption = (options: Option[], value: string) => {
  for (const option of options) {
    if (!option.divider && option.value === value) return option;
  }
};
