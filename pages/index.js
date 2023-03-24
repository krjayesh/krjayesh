import React from 'react'
import Head from 'next/head'

const Home2 = (props) => {
  return (
    <>
      <div className="home2-container">
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
        <div className="home2-container01">
          <span className="home2-text">
            <span>
              I&apos;m
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home2-text02">Jayesh Kumar</span>
            <span>, a 17-year-old UI designer from India.</span>
          </span>
          <span className="home2-text04">
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
              className="home2-link"
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
              className="home2-link01"
            >
              Crestly Consulting
            </a>
            <span> as a designer.</span>
          </span>
          <div className="home2-container02">
            <span className="home2-text08">Reach me at</span>
            <img
              alt="image"
              src="/playground_assets/hyphen1.svg"
              className="home2-image"
            />
            <a
              href="https://www.instagram.com/krjayesh2110/"
              target="_blank"
              rel="noreferrer noopener"
              className="home2-link02"
            >
              <div className="home2-container03">
                <img
                  alt="image"
                  src="/playground_assets/instagram1.svg"
                  className="home2-image01"
                />
              </div>
            </a>
            <a
              href="https://twitter.com/krjdesignz"
              target="_blank"
              rel="noreferrer noopener"
              className="home2-link03"
            >
              <div className="home2-container04">
                <img
                  alt="image"
                  src="/playground_assets/twitter1.svg"
                  className="home2-image02"
                />
              </div>
            </a>
            <a
              href="https://dribbble.com/krjayesh"
              target="_blank"
              rel="noreferrer noopener"
              className="home2-link04"
            >
              <div className="home2-container05">
                <img
                  alt="image"
                  src="/playground_assets/dribbble1.svg"
                  className="home2-image03"
                />
              </div>
            </a>
            <a
              href="https://wa.me/919428408742"
              target="_blank"
              rel="noreferrer noopener"
              className="home2-link05"
            >
              <div className="home2-container06">
                <img
                  alt="image"
                  src="/playground_assets/whatsapp1.svg"
                  className="home2-image04"
                />
              </div>
            </a>
            <a
              href="mailto:krjayesh2004@gmail.com?subject="
              className="home2-link06"
            >
              <div className="home2-container07">
                <img
                  alt="image"
                  src="/playground_assets/email.svg"
                  className="home2-image05"
                />
              </div>
            </a>
          </div>
          <div className="home2-container08">
            <a
              href="https://www.instagram.com/krjayesh2110/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="home2-container09">
                <img
                  alt="image"
                  src="/playground_assets/instagram1.svg"
                  className="home2-image06"
                />
              </div>
            </a>
            <a
              href="https://twitter.com/krjdesignz"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="home2-container10">
                <img
                  alt="image"
                  src="/playground_assets/twitter1.svg"
                  className="home2-image07"
                />
              </div>
            </a>
            <a
              href="https://dribbble.com/krjayesh"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="home2-container11">
                <img
                  alt="image"
                  src="/playground_assets/dribbble1.svg"
                  className="home2-image08"
                />
              </div>
            </a>
            <a
              href="https://wa.me/919428408742"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="home2-container12">
                <img
                  alt="image"
                  src="/playground_assets/whatsapp1.svg"
                  className="home2-image09"
                />
              </div>
            </a>
            <a href="mailto:krjayesh2004@gmail.com?subject=">
              <div className="home2-container13">
                <img
                  alt="image"
                  src="/playground_assets/email.svg"
                  className="home2-image10"
                />
              </div>
            </a>
          </div>
        </div>
        <div className="home2-container14">
          <img
            alt="image"
            src="/playground_assets/grinning-face-with-sweat--v2-1500h.png"
            className="home2-image11"
          />
          <span className="home2-text09">
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
          .home2-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/backgound%20image-1500w.webp');
            background-repeat: no-repeat;
            background-position: center;
          }
          .home2-container01 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home2-text {
            color: rgb(164, 171, 191);
            font-size: 2.34375vh;
            font-style: normal;
            font-family: Circular Std Book;
            font-weight: 400;
            line-height: 2.9296875vh;
            margin-bottom: 2.34375vh;
          }
          .home2-text02 {
            color: #00ffd4;
          }
          .home2-text04 {
            color: rgb(164, 171, 191);
            width: 71.875vh;
            font-size: 2.34375vh;
            font-style: normal;
            text-align: center;
            font-family: Circular Std Book;
            font-weight: 400;
            line-height: 3.41797vh;
            margin-bottom: 3.90625vh;
          }
          .home2-link {
            color: #2693ff;
          }
          .home2-link01 {
            color: #b752ff;
          }
          .home2-container02 {
            gap: 1.953125vh;
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home2-text08 {
            color: rgb(164, 171, 191);
            font-size: 2.34375vh;
            font-style: normal;
            font-family: Circular Std Book;
            font-weight: 400;
            line-height: 2.92969vh;
          }
          .home2-image {
            width: 2.34375vh;
            height: 2.34375vh;
            object-fit: cover;
            margin-left: 0.9765625vh;
            margin-right: 0.9765625vh;
          }
          .home2-link02 {
            display: contents;
          }
          .home2-container03 {
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
          .home2-container03:hover {
            background-color: #8b5cf6;
          }
          .home2-image01 {
            width: 2.9296875vh;
            height: 2.9296875vh;
            object-fit: cover;
          }
          .home2-link03 {
            display: contents;
          }
          .home2-container04 {
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
          .home2-container04:hover {
            background-color: #0090ff;
          }
          .home2-image02 {
            width: 2.9296875vh;
            height: 2.9296875vh;
            object-fit: cover;
          }
          .home2-link04 {
            display: contents;
          }
          .home2-container05 {
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
          .home2-container05:hover {
            background-color: #ff4de1;
          }
          .home2-image03 {
            width: 2.9296875vh;
            height: 2.9296875vh;
            object-fit: cover;
          }
          .home2-link05 {
            display: contents;
          }
          .home2-container06 {
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
          .home2-container06:hover {
            background-color: #00a653;
          }
          .home2-image04 {
            width: 2.9296875vh;
            height: 2.9296875vh;
            object-fit: cover;
          }
          .home2-link06 {
            display: contents;
          }
          .home2-container07 {
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
          .home2-container07:hover {
            background-color: #ff2e62;
          }
          .home2-image05 {
            width: 2.9296875vh;
            height: 2.9296875vh;
            object-fit: cover;
          }
          .home2-container08 {
            gap: 1.953125vh;
            flex: 0 0 auto;
            display: none;
            align-items: center;
            justify-content: center;
          }
          .home2-container09 {
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
          .home2-container09:hover {
            background-color: #8b5cf6;
          }
          .home2-image06 {
            width: 2.9296875vh;
            height: 2.9296875vh;
            object-fit: cover;
          }
          .home2-container10 {
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
          .home2-container10:hover {
            background-color: #0090ff;
          }
          .home2-image07 {
            width: 2.9296875vh;
            height: 2.9296875vh;
            object-fit: cover;
          }
          .home2-container11 {
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
          .home2-container11:hover {
            background-color: #ff4de1;
          }
          .home2-image08 {
            width: 2.9296875vh;
            height: 2.9296875vh;
            object-fit: cover;
          }
          .home2-container12 {
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
          .home2-container12:hover {
            background-color: #00a653;
          }
          .home2-image09 {
            width: 2.9296875vh;
            height: 2.9296875vh;
            object-fit: cover;
          }
          .home2-container13 {
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
          .home2-container13:hover {
            background-color: #ff2e62;
          }
          .home2-image10 {
            width: 2.9296875vh;
            height: 2.9296875vh;
            object-fit: cover;
          }
          .home2-container14 {
            gap: 0.5859375vh;
            flex: 0 0 auto;
            left: 0px;
            right: 0px;
            bottom: 7.8125vh;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: center;
            justify-content: center;
          }
          .home2-image11 {
            width: 2.9296875vh;
            height: 2.9296875vh;
            object-fit: cover;
          }
          .home2-text09 {
            color: rgb(164, 171, 191);
            font-size: 2.34375vh;
            font-style: normal;
            font-family: Circular Std Book;
            font-weight: 400;
            line-height: 2.92969vh;
          }
          @media (max-width: 420px) {
            .home2-text {
              width: 85vw;
              text-align: center;
            }
            .home2-text04 {
              width: 85vw;
            }
            .home2-container02 {
              display: none;
            }
            .home2-container08 {
              display: flex;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home2
