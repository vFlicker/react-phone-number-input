import { ElementType, useState } from 'react';
import { Country, getCountryCallingCode } from 'react-phone-number-input';
import cn from 'classnames';

import { country, countryCodes } from './config';
import { Option } from './types';
import { getSelectedOption } from './utils';

import './styles.css';

type CountrySelectWithIconProps = {
  value: string;
  options: Option[];
  iconComponent: ElementType;

  onChange: (value: string) => void;
};

export function CountrySelectWithIcon({
  value,
  options,
  iconComponent: Icon,

  onChange,
}: CountrySelectWithIconProps): JSX.Element {
  const [isCountryListOpen, setIsCountryListOpen] = useState(false);

  const toggleCountryList = () => {
    setIsCountryListOpen((prevIsOpen) => !prevIsOpen);
  };

  const selectedOption = getSelectedOption(options, value);

  return (
    <div className="input-select-container">
      <button
        className={cn('input-select-drop-down', {
          'input-select-drop-down--up': isCountryListOpen,
        })}
        type="button"
        onClick={toggleCountryList}
      >
        <Icon country={value} label={selectedOption && selectedOption.label} />
      </button>

      {isCountryListOpen && (
        <ul className="list">
          {countryCodes.map((code) => (
            <li
              className={cn('item', { 'item--active': value === code })}
              key={code}
              data-country-code={code}
              onClick={(evt) => {
                onChange(evt.currentTarget.dataset.countryCode as Country);
                toggleCountryList();
              }}
            >
              <img
                className="item__image"
                alt={value}
                src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${code}.svg`}
              />
              <div className="item__text">
                <span>{country[code]}</span> +{getCountryCallingCode(code)}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CountrySelectWithIcon;
