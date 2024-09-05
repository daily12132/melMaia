import { Roboto } from 'next/font/google'
import Head from 'next/head'
import Image from 'next/image'
import { ArrowLeft, CheckCircle, DotsThree, UserPlus } from 'phosphor-react'
import Image1 from '../../public/im1.jpg'
import Image3 from '../../public/im3.jpg'
import Image4 from '../../public/im4.jpg'
import Image5 from '../../public/im5.jpg'
import Image6 from '../../public/im6.jpg'
import Image7 from '../../public/im7.jpg'
import Image8 from '../../public/im8.jpg'
import Image9 from '../../public/im9.jpg'
import Image10 from '../../public/im10.jpg'
import Image11 from '../../public/im11.jpg'
import Image12 from '../../public/im12.jpg'
import Logo from '../../public/insta.png'
import { ClipLoader } from 'react-spinners'
import { useEffect, useState } from 'react'
import {
  SVGIcon,
  SVGIcon2,
  SVGIcon3,
  SVGIcon4,
  SVGIcon5,
  SVGIcon6,
  SVGIcon7,
  SVGIcon8,
} from '../../public/icon'
import Link from 'next/link'

const fonte = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
})

export default function Home() {
  const [modal, setModal] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2500)
  }, [loading])

  useEffect(() => {
    setTimeout(() => {
      setModal(true)
    }, 5500)
  }, [modal])

  return (
    <>
      <Head>
        <title>
          MEL MAIA 🍯 (@melissamelmaia) • Fotos e vídeos do Instagram
        </title>
        <meta name="Teste" content="Teste" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/insta.png" />
      </Head>
      <main className={`w-full min-h-screen mx-auto ${fonte.className}`}>
        {modal && (
          <div className="fixed w-full h-full flex justify-center items-center">
            <div className="w-[90%] bg-black p-5 rounded-xl">
              <div className="w-full flex items-center gap-2 mb-4">
                <Image
                  alt="profile"
                  src={Image3}
                  quality={100}
                  width={48}
                  className="rounded-[50%]"
                />
                <div className="flex items-center gap-2">
                  <span className="font-semibold">melissamelmaia</span>

                  <span className="text-xs text-[#8e8e8e]">Publicidade</span>
                </div>
              </div>

              <div>
                <p>
                  Corre lá no onlyfans<span className="text-[#0095F6]">👇</span>
                  :
                </p>
                <p className="mt-2 font-bold text-xl">Quer ver mais? 😈</p>
                <p className="mt-2">Conteúdo exclusivo só pra você 💋</p>
                <p className="mt-2">Clica no botão aqui embaixo 🔥</p>
              </div>

              <Link
                href="/only"
                className="w-full flex justify-center py-[12px] px-5 mt-4 bg-[#0095F6] font-semibold rounded-[8px]"
              >
                ACESSAR CONTEÚDO 🔥
              </Link>

              <div className="w-full flex justify-between mt-[20px] text-[#8E8E8E]">
                <span>Sobre a conta</span>
                <span>•••</span>
              </div>
            </div>
          </div>
        )}

        {loading ? (
          <div className="fixed w-full h-full flex justify-center items-center">
            <Image
              alt="logo"
              src={Logo}
              quality={100}
              width={86}
              className="animate-pulse"
            />
          </div>
        ) : (
          <>
            <div className="w-full h-10">
              <header className="fixed top-0 w-full h-10 flex items-center justify-between px-[10px] bg-black">
                <ArrowLeft size={18} weight="bold" color="#f5f5f5" />
                <h1 className="text-base font-semibold flex items-center">
                  melissamelmaia
                  <span className="verified-icon"></span>
                </h1>
                <DotsThree size={18} weight="bold" color="#f5f5f5" />
              </header>
            </div>

            <div className="w-full flex flex-col justify-center items-start gap-4 px-4 mt-8">
              <div className="w-full flex items-center justify-between">
                <div
                  className="w-[84px] h-[84px] flex items-center justify-center rounded-[50%]"
                  style={{
                    background:
                      'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                  }}
                >
                  <Image
                    alt="profile"
                    src={Image1}
                    quality={100}
                    width={76}
                    height={76}
                    className="rounded-[50%] border-2 border-white"
                  />
                </div>

                <div className="flex-1 ml-8">
                  <div className="flex justify-between text-center">
                    <div>
                      <div className="font-bold">3.238</div>
                      <div className="text-xs">publicações</div>
                    </div>
                    <div>
                      <div className="font-bold">22,5 mi</div>
                      <div className="text-xs">seguidores</div>
                    </div>
                    <div>
                      <div className="font-bold">2.430</div>
                      <div className="text-xs">seguindo</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="flex items-center font-bold">
                  MEL MAIA 🍯{' '}
                  <CheckCircle size={16} weight="fill" color="#1977F2" />
                </h2>
                <p className="text-sm">@joguejon.bet</p>
                <p className="text-sm">| JogueComResponsabilidade!</p>
                <p className="text-sm">| 🔞 Só pra quem aguenta o calor!</p>
                <p className="text-sm">
                  | OF ⬇️ <span className="text-[#A8A8A8]">mais</span>
                </p>
                <p className="text-sm text-[#1977F2]">Ver tradução</p>
                <a>https://onlyfans.com/melissamelmaia</a>

                <div className="w-full flex items-center gap-2 mt-2">
                  <Image
                    alt="profile"
                    src="/im2.jpg"
                    quality={100}
                    width={32}
                    height={32}
                    className="rounded-[50%] border-2 border-white"
                  />
                  <p className="text-[#A8A8A8] text-sm">
                    Seguido(a) por{' '}
                    <span className="text-white font-bold">mcig, mcryansp</span>{' '}
                    e<span className="font-bold">outras 62 pessoas</span>
                  </p>
                </div>

                <div className="min-w-full flex items-center gap-[6px] mt-4">
                  <button className="w-full bg-[#0095f6] py-[6px] rounded font-semibold">
                    Seguir
                  </button>
                  <button className="w-full bg-[#363636] py-[6px] rounded font-semibold">
                    Mensagem
                  </button>
                  <button className="h-[36px] bg-[#363636] py-[6px] px-2 rounded font-semibold">
                    <UserPlus size={20} weight="fill" color="#f5f5f5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-start p-4">
              <div className="flex flex-col items-center gap-1">
                <Image
                  alt="profile"
                  src={Image3}
                  quality={100}
                  width={60}
                  height={60}
                  className="rounded-[50%] border-2 border-white"
                />
                <p className="text-xs">OF</p>
              </div>
            </div>

            <div className="flex justify-around py-2">
              <SVGIcon2 />
              <SVGIcon />
              <SVGIcon3 />
              <SVGIcon4 />
            </div>

            <div className="grid grid-cols-3 gap-1">
              <Image
                alt="profile"
                src={Image4}
                quality={100}
                className="h-[140px] object-cover"
              />
              <Image
                alt="profile"
                src={Image5}
                quality={100}
                className="h-[140px] object-cover"
              />
              <Image
                alt="profile"
                src={Image6}
                quality={100}
                className="h-[140px] object-cover"
              />
              <Image
                alt="profile"
                src={Image7}
                quality={100}
                className="h-[140px] object-cover"
              />
              <Image
                alt="profile"
                src={Image8}
                quality={100}
                className="h-[140px] object-cover"
              />
              <Image
                alt="profile"
                src={Image9}
                quality={100}
                className="h-[140px] object-cover"
              />
              <Image
                alt="profile"
                src={Image10}
                quality={100}
                className="h-[140px] object-cover"
              />
              <Image
                alt="profile"
                src={Image11}
                quality={100}
                className="h-[140px] object-cover"
              />
              <Image
                alt="profile"
                src={Image12}
                quality={100}
                className="h-[140px] object-cover"
              />
            </div>

            <div className="w-full flex flex-col items-center my-4 gap-[8px]">
              <p className="text-[#6B7280]">Carregando publicações antigas</p>
              <ClipLoader color="#0095f6" />
            </div>

            <div className="w-full h-[56px]">
              <footer className="fixed bottom-0 w-full flex items-center justify-around py-4 bg-black">
                <SVGIcon5 />
                <SVGIcon6 />
                <SVGIcon7 />
                <SVGIcon8 />
                <Image
                  alt="profile"
                  src={Image1}
                  quality={100}
                  width={24}
                  height={24}
                  className="rounded-[50%]"
                />
              </footer>
            </div>
          </>
        )}
      </main>
    </>
  )
}
