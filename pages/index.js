import React from 'react'
import Link from 'next/link'
import App from '../components/App'
import BeadCrum from '../components/BeadCrum'
import Card from '../components/Card'
import 'isomorphic-unfetch'

export default class MyPage extends React.Component {

  static async getInitialProps () {
    const res = await fetch('http://localhost:4000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query:'{   gitHubUser(username: "conekta") {repos {id,full_name,description,name}} }' })
    })
    const json = await res.json()
    const response = json.data.gitHubUser
    
    return { response }
  }

  render () {
    const data = this.props.response
    return (
      <App>
        <BeadCrum path='about'></BeadCrum>
        <h1 className='text-center'>Github Stalker</h1>
        <div className="row offset-lg-2">
            { data ? 
              data.repos.map( r => <Card  key={r.id}  {...r} /> ) :
              <div>Github API rate limit</div> 
            }
        </div>
      </App>
    )
  }
}