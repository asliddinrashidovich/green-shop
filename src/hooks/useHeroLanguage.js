import { useTranslation } from 'react-i18next';

export const useHeroSliderData = () => {
  const { t } = useTranslation();

  return [
    {
        headerText: t('heroSlider1'),
        img: '/hero/flover_big1.png',
    },
    {
        headerText: t('heroSlider2'),  
        img: '/hero/hero-flower-3.png',
    },
    {
        headerText: t('heroSlider2'),      
        img: '/hero/hero-flower-2.png',
    }
  ];
};