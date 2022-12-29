import data from '../input_data/config.json';

const parsedData = JSON.parse(JSON.stringify(data));

export const Colors = [...parsedData.color];
export const Footage = {...parsedData.footage};
export const Text = {...parsedData.text};
export const MainFontFamily = {...parsedData.main_font};
export const Logo = {...parsedData.logo};
