import 'react-phone-number-input/style.css';
import Input, { Country } from 'react-phone-number-input';
import cn from 'classnames';

import CountrySelectWithIcon from './country-select-with-icon';
import './styles.css';

type PhoneInputProps = {
  name: string;
  label: string;
  value: string;
  error?: string;
  defaultCountry?: Country;

  onChange: (value: string) => void;
};

export function PhoneInput({
  defaultCountry,
  name,
  value,
  label,
  error,

  onChange,
}: PhoneInputProps): JSX.Element {
  return (
    <div className="field">
      <Input
        id={`${name}-input`}
        className={cn('field__input', { 'field__input--error': error })}
        placeholder="Enter phone number"
        defaultCountry={defaultCountry}
        countrySelectComponent={CountrySelectWithIcon}
        value={value}
        onChange={onChange}
      />

      <label htmlFor={`${name}-input`} className="field__label">
        {label}
      </label>

      <div id={`${name}_input-error`} className="field__error">
        {error}
      </div>
    </div>
  );
}

export default PhoneInput;
