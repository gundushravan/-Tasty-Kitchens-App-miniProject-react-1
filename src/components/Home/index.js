import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Footer from '../Footer'
import Header from '../Header'
import Carousel from '../Carousel'

import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <Header />
      <div className="home-container">
        <Carousel />
      </div>
      <Footer />
    </>
  )
}
export default Home
