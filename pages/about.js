import React from 'react'
import App from '../components/App'
import BeadCrum from '../components/BeadCrum'
import Card from '../components/Card'
import 'isomorphic-unfetch'

export default class MyPage extends React.Component {
  render () {
    return (
      <App>
      <BeadCrum path={'index'}></BeadCrum>
      <h1 className='text-center'>Github Stalker</h1>
      <div className='col-md-4 offset-md-4'>
      <div className="card text-white bg-primary mb-3" >
        <div className="card-header">RNG </div>
        <div className="card-body">
          <h4 className="card-title">React + Next +Graphql stack</h4>
          <p className="card-text">By @eduardoenriquez </p>
        </div>
      </div>
      </div>
      <style global jsx>{`
        footer{
          display:none;
        }
        `}</style>
      </App>
    )
  }
}