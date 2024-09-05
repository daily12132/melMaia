import { Roboto } from 'next/font/google'
import Head from 'next/head'
import Image from 'next/image'
import Img1 from '../../public/only1.jpg'
import Img2 from '../../public/only2.jpg'
import Img3 from '../../public/im13.png'
import { ArrowLeft, Share } from 'phosphor-react'
import { useEffect, useState } from 'react'
import Logo from '../../public/favicon.png'
import { FadeLoader } from 'react-spinners'
import Blur from '../../public/blur.jpg'
import Link from 'next/link'

const fonte = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
})

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [selectPlan, setSelectPlan] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2500)
  }, [loading])

  return (
    <>
      <Head>
        <title>MEL MAIA 🍯 - OnlyFans</title>
        <meta name="Teste" content="Teste" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main
        className={`w-full min-h-screen mx-auto bg-white text-black ${fonte.className}`}
      >
        {loading ? (
          <div className="fixed w-full h-full flex flex-col justify-center gap-4 items-center">
            <Image alt="logo" src={Logo} quality={100} width={96} />
            <FadeLoader />
          </div>
        ) : (
          <>
            <div
              style={{
                backgroundImage: `url(${Img1.src})`, // Define a imagem como background
                backgroundSize: 'cover', // Garante que a imagem cubra todo o background
                backgroundPosition: 'center', // Centraliza a imagem no background
              }}
              className="w-full flex items-start justify-start h-[196px] px-4 py-2"
            >
              <div className="flex items-center gap-4">
                <Link href="/">
                  <ArrowLeft size={22} color="#f5f5f5" weight="bold" />
                </Link>

                <div className="w-full flex flex-col justify-start text-white">
                  <p>MEL MAIA 🍯</p>

                  <Image
                    alt="status"
                    src={Img3}
                    quality={100}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
            <div className="w-full p-4">
              <div className="flex justify-between">
                <div className="w-[96px] relative flex-shrink-0">
                  <Image
                    src={Img2}
                    alt="Imagem1"
                    quality={100}
                    width={96}
                    className="absolute flex-shrink-0 left-0 top-[-50px] rounded-[50%] border-2 border-white"
                  />
                  <div className="absolute top-7 right-1 w-[15px] h-[15px] bg-green-500 rounded-full border-2 border-white" />
                </div>

                <div className="p-[10px] border border-[#e3e6e9] rounded-full">
                  <Share size={24} color="#00aff0" weight="bold" />
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-2">
                <div>
                  <h2 className="text-[19px] leading-[24px]">MEL MAIA 🍯</h2>
                  <div className="flex items-center gap-2">
                    <p className="text-[14px] text-[#8a96a3]">
                      @melissamelmaia
                    </p>
                    <div className="w-[3px] h-[3px] rounded-full bg-[#8a96a3]" />

                    <p className="text-[14px] text-[#8a96a3]">Disponivel</p>
                  </div>
                </div>

                <div>
                  <p className="text-[14px] text-black">
                    | Decidi compartilhar meu lado mais secreto 😈
                  </p>
                  <p className="text-[14px] text-black">
                    | Aqui, você vai ver tudo que não mostro em nenhum outro
                    lugar 💋
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-300 px-4">
              <h3 className="text-[#91999d]">ASSINATURA</h3>
              <p className="text-black">Oferta limitada: 50% de desconto.</p>

              <div className="flex items-star mt-5 mb-6">
                <div className="w-[47px] h-[47px] relative flex-shrink-0">
                  <Image
                    src={Img2}
                    alt="Imagem1"
                    quality={100}
                    width={47}
                    className="rounded-[50%] absolute ml-2 z-10 border-2 border-white flex-shrink-0"
                  />
                  <div className="absolute bottom-0 left-[47px] z-50 w-[12px] h-[12px] bg-green-500 rounded-full border-2 border-white" />
                </div>
                <div className="w-[325px] border rounded-md border-[rgb(163,186,198)] bg-[rgb(240,243,245)] p-4">
                  {!selectPlan ? (
                    <>
                      <h3 className="text-[#91999d] text-base">
                        Quer ver mais? 😈
                      </h3>

                      <p className="text-[#91999d] text-[13px]">
                        Conteúdo exclusivo só pra você 💋
                      </p>
                      <p className="text-[#91999d] text-[13px]">
                        Clica no botão aqui embaixo 🔥
                      </p>

                      <div className="flex flex-col gap-3 mt-3">
                        <button
                          onClick={() => setSelectPlan(true)}
                          className="w-full h-10 rounded-full bg-[#00AFF0] text-white"
                        >
                          ASSINAR CONTEUDOS 🔥
                        </button>

                        <Image
                          src={Blur}
                          alt="blur"
                          className="w-full h-[270px] rounded-md"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <h3 className="text-[#91999d] text-base text-center w-full">
                        Escolha um dos planos abaixo 👇
                        <br />
                        🔥Últimas 3 vagas restantes🔥
                      </h3>

                      <div className="flex flex-col gap-3 mt-4">
                        <Link href="#">
                          <button
                            onClick={() => setSelectPlan(true)}
                            className="w-full h-10 rounded-full bg-[#00AFF0] text-white"
                          >
                            😈SEMANAL R$32,90😈
                          </button>
                        </Link>
                        <Link href="#">
                          <button
                            onClick={() => setSelectPlan(true)}
                            className="w-full h-10 rounded-full bg-[#00AFF0] text-white"
                          >
                            💋MENSAL R$47,90💋
                          </button>
                        </Link>
                        <Link href="#">
                          <button
                            onClick={() => setSelectPlan(true)}
                            className="w-full h-10 rounded-full bg-[#00AFF0] text-white"
                          >
                            🔥VITALÍCIO R$67,90🔥
                          </button>
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
            <footer className="w-full flex items-center gap-8 border-t-4 p-4 border-[#355c83]">
              <div>
                <Image alt="logo" src={Logo} quality={100} width={86} />
              </div>
              <div className="w-full grid grid-cols-2 gap-2 text-[14px] text-[#8a96a3]">
                <p>@2024 OnlyFans</p>
                <p>Contato</p>
                <p>Blog</p>
                <p>Store</p>
                <p>Help</p>
                <p>Privacy</p>
              </div>
            </footer>
          </>
        )}
      </main>
    </>
  )
}
