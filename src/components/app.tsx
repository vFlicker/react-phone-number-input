import { useState } from 'react';

import PhoneInput from './phone-input';

function App(): JSX.Element {
  const [phoneValue, setPhoneValue] = useState<string>('+380980000000');
  const error = phoneValue === '+380980000001' ? 'Some error text...' : '';

  return (
    <PhoneInput
      defaultCountry="UA"
      name="phone"
      label="Phone Number"
      value={phoneValue}
      error={error}
      onChange={setPhoneValue}
    />
  );
}

export default App;
