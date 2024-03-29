interface Option {
  label: string;
  value: string;
  key: string;
}

function createOptions(dropdown) {
  const DROPDOWN_KEYS = Object.getOwnPropertyNames(dropdown);
  const options: Option[] = [];

  DROPDOWN_KEYS.forEach((element, index) => {
    const option: Option = {
      label: dropdown[element],
      value: element,
      key: index.toString(),
    };
    options.push(option);
  });

  return options;
}

export default createOptions;
