'use client'
import { UseUser } from 'app/context/UseProvider';
import ButtonLoader from 'components/loaders/ButtonLoader';
import React, { useState } from 'react'
import { Trans, useTranslation } from 'react-i18next';
import { LuEye, LuEyeClosed } from 'react-icons/lu';
import { createPersonalIdSchema, createPasswordSchema} from '../../validation/schemas/userSchema'
interface Props {
  openLoginMoadl: () => void;
}

const Authentication:React.FC<Props>= ({openLoginMoadl}) => {
const[shownPass, setShownPass] = useState<true | false>(false);
const[personalId,setPersonalId] = useState<string>('');
const[password,setPassword] = useState<string>('');
const[loadingUser, setLoadingUser] = useState<boolean>(false);
const [errors, setErrors] = useState<{ personalId?: string; password?: string }>({});
const { t } = useTranslation()
const { setUser, isLoginModalOpen} = UseUser()

const personalIdSchema = createPersonalIdSchema(t);
const passwordSchema = createPasswordSchema(t);

const handleTypeChange = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  setShownPass((prev) => !prev)
}

const handleLogin  = async () => {
  try {
    setLoadingUser(true)
    setErrors({})

    const response = await fetch('https://unimap-5vf6.onrender.com/schedule', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalId,
        password,
      })
    })
    if(!response.ok) {
      throw new Error ('response is not OK')
    }
    const data = await response.json();
    setUser(data)
    openLoginMoadl()
    setLoadingUser(false)   
  } catch (error) {
    console.error('error happaned while logging', error)
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
                  setPersonalId(value)
                  const result = personalIdSchema.safeParse(value);
                  setErrors(prev => ({
                    ...prev,
                    personalId: result.success ? undefined : result.error.errors[0].message,
                  }))
                }}
                value={personalId}
                type="text"
                placeholder={`${t('authenticate.personalId')}`}
                autoComplete='off'
                className='flex items-center justify-center w-[220px] h-[40px] border rounded-full 
                border-blue-400 text-[var(--second-text-color)] text-center placeholder:text-center
                focus:outline-none focus:ring-0'  />

                {errors.personalId && (
                  <p className="text-red-500 text-xs">{errors.personalId}</p>
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
                onClick={handleTypeChange}
                className='absolute bottom-[11px] right-[13px] text-black text-[18px] '>
                  {shownPass ? <LuEye /> : <LuEyeClosed />}
                </button>
                </div>

                  {errors.password && (
                    <p className="text-red-500 text-xs">{errors.password}</p>
                  )}

            </form>
            <button
            disabled={!!errors.personalId || !!errors.password}
            onClick={handleLogin}
            className='h-[40px] w-[110px] flex items-center justify-center border rounded-full 
                border-green-400 text-[var(--text-color)] bg-[var(--background)] cursor-pointer hover:scale-[1.1] transition-transform duration-300'>
                {loadingUser ? <ButtonLoader /> : t('authenticate.log_In')}
            </button>
        </div>
    </main>
  )
}

export default Authentication