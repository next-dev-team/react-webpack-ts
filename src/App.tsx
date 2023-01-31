import { Button, Card, ConfigProvider, Space } from 'antd'
import { changeLanguage } from 'i18next'
import { StyleProvider } from '@ant-design/cssinjs'
import NiceModal from '@ebay/nice-modal-react'
import { themeConfig } from './theme'
import SecondaryButton from './components/General/SecondaryButton'

const HomePage = () => {
  const changeLang = (lang: 'km' | 'en', forceReload = true) => {
    changeLanguage(lang)
    forceReload && location.reload()
  }

  return (
    <Space wrap>
      <Card title="Common Stater" extra={
        <Icon className='emojione:flag-for-cambodia' />
      }>
        <h1>{t('title', { name: 'Jonh' })}
        </h1>
        
        <div className='h-30px w-100px bg-linear-colorPrimary'>
          Uno Css
        </div>


        <Space>
          <SecondaryButton onClick={() => changeLang('km')}>Change to Khmer</SecondaryButton>
          <Button type='primary' onClick={() => changeLang('en')}>Change to English</Button>
        </Space>
      </Card>
    </Space>
  )
}



export const App = () => {
  return (
    <>
      <ConfigProvider
        // https://ant.design/theme-editor
        theme={themeConfig}
      // locale={selectLocale}
      >
        {/* hashPriority to low will enable override such as tailwind etc*/}
        <StyleProvider hashPriority="low">
          <NiceModal.Provider>
            {/* <PusherProvider {...(defaultSettings.pusherConfig as any)}> */}
            {/* ---- children ----- */}
            <HomePage />
            {/* ----------------- */}
            {/* </PusherProvider> */}
          </NiceModal.Provider>
        </StyleProvider>
      </ConfigProvider>
    </>
  )
}
