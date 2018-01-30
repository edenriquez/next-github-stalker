import Head from 'next/head'

const App = ({ children }) => (
  <div>
    <Head>
      <title>index</title>
      <link rel="stylesheet" href="https://bootswatch.com/4/cosmo/bootstrap.css"/>
    </Head>

    {children}

    <footer className='panel col-md-12'>
      <img src="static/logo.png" alt=""/>
      <p>
        <a className='footer-text' href='#'>React + NEXT + Graphql</a> 
      </p>
    </footer>



    <style jsx global>{`
      
      footer{
        padding: 25px;
        background: #123;
        text-align: center;
        bottom: 0px;
      }
      footer > img{
        max-width: 200px;
      }
      footer > p > a{
        font-size: 16px;
      }

      
    `}</style>
  </div>
)

export default App
