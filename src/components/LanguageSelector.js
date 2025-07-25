import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

export default function LanguageSelector() {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
      className="form-select w-auto"
    >
      <option value="fr">Français</option>
      <option value="en">English</option>
      <option value="es">Español</option>
    </select>
  );
}
