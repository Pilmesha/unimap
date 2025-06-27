'use client'
import { UseUser } from 'app/context/UseProvider';
import ButtonLoader from 'components/loaders/ButtonLoader';
import React, { useEffect, useState } from 'react'
import { Trans, useTranslation } from 'react-i18next';
import { LuEye, LuEyeClosed } from 'react-icons/lu';
import { createPersonalIdSchema, createPasswordSchema} from '../../validation/schemas/userSchema'
import { fetchTable } from 'assets/fetchTable';
interface Props {
  openLoginMoadl: () => void;
}

const Authentication:React.FC<Props>= ({openLoginMoadl}) => {
const[shownPass, setShownPass] = useState<true | false>(false);
const[username,setUsername] = useState<string>('');
const[password,setPassword] = useState<string>('');
const[loadingUser, setLoadingUser] = useState<boolean>(false);
const[tableDataError, setTableDataError] = useState<string | null>(null);
const [errors, setErrors] = useState<{ username?: string; password?: string }>({});
const { t } = useTranslation()
const { setUser, setIsLoginModalOpen, user} = UseUser()

const personalIdSchema = createPersonalIdSchema(t);
const passwordSchema = createPasswordSchema(t);

const handlePassTypechange = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  setShownPass((prev) => !prev)
}

const handleLogin  = async (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault()
  setLoadingUser(true)
  setTableDataError(null)

 try {
    const tableData = await fetchTable(username, password);
    if (!tableData || typeof tableData === 'string' || ('error' in tableData)) {
      setUser(null);
      setTableDataError(t('authenticate.userNotFound'));
    } else {
      console.log('table data :', tableData)
      setUser(tableData);
      setIsLoginModalOpen(false);
    }
  } catch (error: any) {
    setUser(null);
    setTableDataError('Server error. Please try again later.');
  } finally {
    setLoadingUser(false);
  }
}

  return (
    <main 
    onClick={openLoginMoadl}
    className='fixed inset-0 w-full h-full bg-[var(--blurrer-bg)] backdrop-blur-sm  flex  justify-center items-center z-50'>
        <div 
        onClick={(e) => e.stopPropagation()}
        className='w-[400px]  h-[350px] flex flex-col items-center justify-around bg-[var(--basic)] 
        shadow-lg py-[20px] gap-1 z-50 px-[5px]'>
            <div className='flex flex-col items-center justify-center gap-4'>
                <h1 className='text-[var(--background)] font-firago text-[32px] tracking-[0.1rem] font-extralight'>{t('authenticate.heading')}</h1>
                <p 
                className='text-[var(--second-text-color)] font-sans text-[12px]  font-extralight'>
                  <Trans
                  i18nKey='authenticate.mainText'
                  components={{
                    1: (
                        <a
                        href="https://uni.tsu.ge"
                        target="_blank"
                        className="text-twitter-blue underline italic"
                        />
                      ),
                  }}
                  />
                </p>
            </div>
            <form 
            className='relative text-center w-full flex flex-col items-center gap-3 '>
                <input 
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                  const value = e.target.value;
                  setUsername(value)
                  const result = personalIdSchema.safeParse(value);
                  setErrors(prev => ({
                    ...prev,
                    username: result.success ? undefined : result.error.errors[0].message,
                  }))
                }}
                value={username}
                type="text"
                placeholder={`${t('authenticate.personalId')}`}
                autoComplete='off'
                className='flex items-center justify-center w-[220px] h-[40px] border rounded-full 
                border-blue-400 text-[var(--second-text-color)] text-center placeholder:text-center
                focus:outline-none focus:ring-0'  />

                {errors.username && (
                  <p className="text-red-500 text-xs">{errors.username}</p>
                )}

                <div className='inset-0 relative'>
                  <input 
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                  const value = e.target.value;
                  setPassword(value)
                  const result = passwordSchema.safeParse(value);
                  setErrors(prev => ({
                    ...prev,
                    password: result.success ? undefined : result.error.errors[0].message,
                  }))
                }}
                value={password}
                type={shownPass ? 'text' : 'password'}
                placeholder= {`${t('authenticate.password')}`}
                autoComplete='off'
                className='flex items-center justify-center w-[220px] h-[40px] border rounded-full 
                border-blue-400 text-[var(--second-text-color)] text-center placeholder:text-center
                focus:outline-none focus:ring-0 '/>
                <button 
                type='button'
                onClick={handlePassTypechange}
                className='absolute bottom-[11px] right-[13px] text-black text-[18px] '>
                  {shownPass ? <LuEye /> : <LuEyeClosed />}
                </button>
                </div>

                  {errors.password && (
                    <p className="text-red-500 text-xs">{errors.password}</p>
                  )}

            </form>
            <p className='text-red-500 text-[15px]'>{tableDataError}</p>
            <button
            disabled={!!errors.username || !!errors.password}
            onClick={handleLogin}
            className='h-[40px] w-[110px] flex items-center justify-center border rounded-full 
                border-green-400 text-[var(--text-color)] bg-[var(--background)] cursor-pointer hover:scale-[1.1] transition-transform duration-300'>
                {loadingUser ? <ButtonLoader size={10} /> : t('authenticate.log_In')}
            </button>
        </div>
    </main>
  )
}

export default Authentication