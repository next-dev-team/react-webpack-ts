import { changeLanguage } from 'i18next'

export const App = () => {
  const changeLang = (lang: 'km' | 'en', forceReload = true) => {
    changeLanguage(lang)
    forceReload && location.reload()
  }

  return (
    <>
      <h1>{t('title', { name: 'Jonh' })}</h1>
      <button onClick={() => changeLang('km')}>Change To Khmer</button>
      <button onClick={() => changeLang('en')}>Change to English</button>
    </>
  )
}
