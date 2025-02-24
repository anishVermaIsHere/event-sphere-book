import AppConfig from '@/config/app.config'

const Footer = () => {
  return (
    <footer className='w-full bg-slate-300'>
      <div className=''></div>
        <div className='flex items-center justify-center p-4'>
            <div className='text-[11px]'>
            Copyright (c) {new Date().getFullYear()} | {AppConfig.appName}
            </div>
        </div>
    </footer>
  )
}

export default Footer