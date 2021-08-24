import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Layout } from '../../../components';
import Button from '../../../components/Button';
import { loginUserAPI } from '../../../config/redux';

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  handleCangeText = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  Submit = async (e) => {
    try {
      e.preventDefault()
      const { history } = this.props

      const { email, password } = this.state
      const res = await this.props.loginAPI({ email, password })
      if (res) {
        console.log('Success :', res);
        this.setState({
          email: '',
          password: ''
        })
        history.push('/')
      } else {
        alert('Login Failed!')
      }

    } catch (error) {
      alert('Error : ', error);
    }
  }

  render() {
    return (
      <Layout title="Login">
        <div className="w-screen h-full my-40 flex justify-center">
          <form className="rounded flex justify-center items-center flex-col" onSubmit={this.Submit}>
            <p className="mb-5 text-3xl uppercase text-yellow-200">Login</p>

            <input type="email" id="email" className="mb-5 p-3 w-80 bg-gray-800 focus:border-blue-700 rounded border-2 outline-none" placeholder="Email :" onChange={this.handleCangeText} required />

            <input type="password" id="password" className="mb-5 p-3 w-80 bg-gray-800 focus:border-blue-700 rounded border-2 outline-none" placeholder="Password :" onChange={this.handleCangeText} required />

            <Button loading={this.props.isLoading} title="SIGN IN" />

            <Link to="/sign-up" className="text-yellow-300 hover:text-blue-500 mt-10">Don't have an account? Sign Up</Link>
          </form>
        </div>

      </Layout>
    )
  }
}

const reduxState = (state) => ({
  isLoading: state.isLoading
})

const reduxDispatch = (data) => (dispatch) => ({
  loginAPI: (data) => dispatch(loginUserAPI(data))
})

export default connect(reduxState, reduxDispatch)(Login)