import React from 'react'
import Head from 'next/head'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Jayesh Kumar • Interface Designer</title>
          <meta
            name="description"
            content="I'm a young ambitious designer creating delightful and accessible interface experience that people will love."
          />
          <meta
            property="og:title"
            content="Jayesh Kumar • Interface Designer"
          />
          <meta
            property="og:description"
            content="A raising gen-z UI designer from India."
          />
        </Head>
        <div className="home-container01">
          <span className="home-text">
            <span>
              I&apos;m
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text02">Jayesh Kumar</span>
            <span>, a 17-year-old UI designer from India.</span>
          </span>
          <span className="home-text04">
            <span>
              I&apos;m passionate about creating killer interfaces that users
              love. I design for
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <a
              href="https://joinblite.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link"
            >
              Blite
            </a>
            <span>
              , an app that helps high-schoolers stay on top of their schedules,
              and I also work at
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <a
              href="https://crestlyconsulting.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link01"
            >
              Crestly Consulting
            </a>
            <span> as a designer.</span>
          </span>
          <div className="home-container02">
            <span className="home-text08">Reach me at</span>
            <img
              alt="image"
              src="/playground_assets/seprater1.svg"
              className="home-image"
            />
            <a
              href="https://www.instagram.com/krjayesh2110/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link02"
            >
              <div className="home-container03">
                <img
                  alt="image"
                  src="/playground_assets/instagram1.svg"
                  className="home-image01"
                />
              </div>
            </a>
            <a
              href="https://twitter.com/krjdesignz"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link03"
            >
              <div className="home-container04">
                <img
                  alt="image"
                  src="/playground_assets/twitter1.svg"
                  className="home-image02"
                />
              </div>
            </a>
            <a
              href="https://dribbble.com/krjayesh"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link04"
            >
              <div className="home-container05">
                <img
                  alt="image"
                  src="/playground_assets/dribbble1.svg"
                  className="home-image03"
                />
              </div>
            </a>
            <a
              href="https://wa.me/919428408742"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link05"
            >
              <div className="home-container06">
                <img
                  alt="image"
                  src="/playground_assets/whatsapp1.svg"
                  className="home-image04"
                />
              </div>
            </a>
            <a
              href="mailto:krjayesh2004@gmail.com?subject="
              className="home-link06"
            >
              <div className="home-container07">
                <img
                  alt="image"
                  src="/playground_assets/email.svg"
                  className="home-image05"
                />
              </div>
            </a>
          </div>
          <div className="home-container08">
            <a
              href="https://www.instagram.com/krjayesh2110/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="home-container09">
                <img
                  alt="image"
                  src="/playground_assets/instagram1.svg"
                  className="home-image06"
                />
              </div>
            </a>
            <a
              href="https://twitter.com/krjdesignz"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="home-container10">
                <img
                  alt="image"
                  src="/playground_assets/twitter1.svg"
                  className="home-image07"
                />
              </div>
            </a>
            <a
              href="https://dribbble.com/krjayesh"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="home-container11">
                <img
                  alt="image"
                  src="/playground_assets/dribbble1.svg"
                  className="home-image08"
                />
              </div>
            </a>
            <a
              href="https://wa.me/919428408742"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="home-container12">
                <img
                  alt="image"
                  src="/playground_assets/whatsapp1.svg"
                  className="home-image09"
                />
              </div>
            </a>
            <a href="mailto:krjayesh2004@gmail.com?subject=">
              <div className="home-container13">
                <img
                  alt="image"
                  src="/playground_assets/email.svg"
                  className="home-image10"
                />
              </div>
            </a>
          </div>
        </div>
        <div className="home-container14">
          <img
            alt="image"
            src="/playground_assets/grinning-face-with-sweat--v2-1500h.png"
            className="home-image11"
          />
          <span className="home-text09">
            I’ll upload a resume soon
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('https://raw.githubusercontent.com/krjayesh/cdn/main/Backgound%20Image%20Lossless.webp?token=GHSAT0AAAAAACBPKQT22CXN2VKKETB5HJW4ZC3XQ4Q');
            background-repeat: no-repeat;
            background-position: center;
          }
          .home-container01 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text {
            color: rgb(164, 171, 191);
            font-size: 3.0837004405286343vh;
            font-style: normal;
            font-family: Circular Std Book;
            font-weight: 400;
            line-height: 3.891336270190896vh;
            margin-bottom: 2.202643171806167vh;
          }
          .home-text02 {
            color: #00ffd4;
          }
          .home-text04 {
            color: rgb(164, 171, 191);
            width: 96.0352422907489vh;
            font-size: 3.0837004405286343vh;
            font-style: normal;
            text-align: center;
            font-family: Circular Std Book;
            font-weight: 400;
            line-height: 3.891336270190896vh;
            margin-bottom: 5.873715124816447vh;
          }
          .home-link {
            color: #2693ff;
          }
          .home-link01 {
            color: #b752ff;
          }
          .home-container02 {
            gap: 2.9368575624082234vh;
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-text08 {
            color: rgb(164, 171, 191);
            font-size: 3.0837004405286343vh;
            font-style: normal;
            font-family: Circular Std Book;
            font-weight: 400;
            line-height: 3.891336270190896vh;
          }
          .home-image {
            width: 3.0837004405286343vh;
            height: 3.0837004405286343vh;
            object-fit: cover;
            margin-left: 0.9765625vh;
            margin-right: 0.9765625vh;
          }
          .home-link02 {
            display: contents;
          }
          .home-container03 {
            flex: 0 0 auto;
            width: 6.461086637298091vh;
            height: 6.461086637298091vh;
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-radius: 100%;
            justify-content: center;
            text-decoration: none;
            background-color: #1c253b;
          }
          .home-container03:hover {
            background-color: #8b5cf6;
          }
          .home-image01 {
            width: 3.8766519823788546vh;
            height: 3.8766519823788546vh;
            object-fit: cover;
          }
          .home-link03 {
            display: contents;
          }
          .home-container04 {
            flex: 0 0 auto;
            width: 6.461086637298091vh;
            height: 6.461086637298091vh;
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-radius: 100%;
            justify-content: center;
            text-decoration: none;
            background-color: #1c253b;
          }
          .home-container04:hover {
            background-color: #0090ff;
          }
          .home-image02 {
            width: 3.8766519823788546vh;
            height: 3.8766519823788546vh;
            object-fit: cover;
          }
          .home-link04 {
            display: contents;
          }
          .home-container05 {
            flex: 0 0 auto;
            width: 6.461086637298091vh;
            height: 6.461086637298091vh;
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-radius: 100%;
            justify-content: center;
            text-decoration: none;
            background-color: #1c253b;
          }
          .home-container05:hover {
            background-color: #ff4de1;
          }
          .home-image03 {
            width: 3.8766519823788546vh;
            height: 3.8766519823788546vh;
            object-fit: cover;
          }
          .home-link05 {
            display: contents;
          }
          .home-container06 {
            flex: 0 0 auto;
            width: 6.461086637298091vh;
            height: 6.461086637298091vh;
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-radius: 100%;
            justify-content: center;
            text-decoration: none;
            background-color: #1c253b;
          }
          .home-container06:hover {
            background-color: #00a653;
          }
          .home-image04 {
            width: 3.8766519823788546vh;
            height: 3.8766519823788546vh;
            object-fit: cover;
          }
          .home-link06 {
            display: contents;
          }
          .home-container07 {
            flex: 0 0 auto;
            width: 6.461086637298091vh;
            height: 6.461086637298091vh;
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-radius: 100%;
            justify-content: center;
            text-decoration: none;
            background-color: #1c253b;
          }
          .home-container07:hover {
            background-color: #ff2e62;
          }
          .home-image05 {
            width: 3.8766519823788546vh;
            height: 3.8766519823788546vh;
            object-fit: cover;
          }
          .home-container08 {
            gap: 1.953125vh;
            flex: 0 0 auto;
            display: none;
            align-items: center;
            justify-content: center;
          }
          .home-container09 {
            flex: 0 0 auto;
            width: 4.8828125vh;
            height: 4.8828125vh;
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-radius: 100%;
            justify-content: center;
            text-decoration: none;
            background-color: #1c253b;
          }
          .home-container09:hover {
            background-color: #8b5cf6;
          }
          .home-image06 {
            width: 2.9296875vh;
            height: 2.9296875vh;
            object-fit: cover;
          }
          .home-container10 {
            flex: 0 0 auto;
            width: 4.8828125vh;
            height: 4.8828125vh;
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-radius: 100%;
            justify-content: center;
            text-decoration: none;
            background-color: #1c253b;
          }
          .home-container10:hover {
            background-color: #0090ff;
          }
          .home-image07 {
            width: 2.9296875vh;
            height: 2.9296875vh;
            object-fit: cover;
          }
          .home-container11 {
            flex: 0 0 auto;
            width: 4.8828125vh;
            height: 4.8828125vh;
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-radius: 100%;
            justify-content: center;
            text-decoration: none;
            background-color: #1c253b;
          }
          .home-container11:hover {
            background-color: #ff4de1;
          }
          .home-image08 {
            width: 2.9296875vh;
            height: 2.9296875vh;
            object-fit: cover;
          }
          .home-container12 {
            flex: 0 0 auto;
            width: 4.8828125vh;
            height: 4.8828125vh;
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-radius: 100%;
            justify-content: center;
            text-decoration: none;
            background-color: #1c253b;
          }
          .home-container12:hover {
            background-color: #00a653;
          }
          .home-image09 {
            width: 2.9296875vh;
            height: 2.9296875vh;
            object-fit: cover;
          }
          .home-container13 {
            flex: 0 0 auto;
            width: 4.8828125vh;
            height: 4.8828125vh;
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-radius: 100%;
            justify-content: center;
            text-decoration: none;
            background-color: #1c253b;
          }
          .home-container13:hover {
            background-color: #ff2e62;
          }
          .home-image10 {
            width: 2.9296875vh;
            height: 2.9296875vh;
            object-fit: cover;
          }
          .home-container14 {
            gap: 2.0558002936857562vh;
            flex: 0 0 auto;
            left: 0px;
            right: 0px;
            bottom: 7.342143906020558vh;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: center;
            justify-content: center;
          }
          .home-image11 {
            width: 3.9647577092511015vh;
            height: 3.9647577092511015vh;
            object-fit: cover;
          }
          .home-text09 {
            color: #6a7388;
            font-size: 3.0837004405286343vh;
            font-style: normal;
            font-family: Circular Std Book;
            font-weight: 400;
            line-height: 3.9647577092511015vh;
          }
          @media (max-width: 420px) {
            .home-container {
              background-image: url('https://raw.githubusercontent.com/krjayesh/cdn/main/Backgound%20Image%20Mobile.webp?token=GHSAT0AAAAAACBPKQT3NWCKQQE75MY7TNZUZC3XR6A');
            }
            .home-text {
              width: 80vw;
              font-size: 2.3501762632197414vh;
              text-align: center;
              line-height: 2.937720329024677vh;
              margin-bottom: 2.937720329024677vh;
            }
            .home-text04 {
              width: 80vw;
              font-size: 2.3501762632197414vh;
              line-height: 2.937720329024677vh;
              margin-bottom: 4.8828125vh;
            }
            .home-container02 {
              display: none;
            }
            .home-container08 {
              display: flex;
            }
            .home-container14 {
              gap: 1.762632197414806vh;
            }
            .home-image11 {
              width: 2.937720329024677vh;
              height: 2.937720329024677vh;
            }
            .home-text09 {
              font-size: 2.3501762632197414vh;
              line-height: 2.937720329024677vh;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
