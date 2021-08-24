import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Layout } from '../../../components'
import Button from '../../../components/Button'
import { registerUserAPI } from '../../../config/redux'


class Register extends Component {
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
            const res = await this.props.registerAPI({ email, password })
            if (res) {
                console.log('Success :', res);
                this.setState({
                    email: '',
                    password: ''
                })
                history.push('/sign-in')
            } else {
                alert('Register Failed!')
            }

        } catch (error) {
            console.log('Error : ', error);
        }
    }

    render() {
        return (
            <Layout title="Register">
                <div className="w-screen h-full my-40 flex justify-center">
                    <form className="rounded flex justify-center items-center flex-col" onSubmit={this.Submit}>
                        <p className="mb-5 text-3xl uppercase text-yellow-200">Register</p>

                        <input type="email" id="email" className="mb-5 p-3 w-80 bg-gray-800 focus:border-blue-700 rounded border-2 outline-none" placeholder="Email :" onChange={this.handleCangeText} required value={this.state.email} />

                        <input type="password" id="password" className="mb-5 p-3 w-80 bg-gray-800 focus:border-blue-700 rounded border-2 outline-none" placeholder="Password :" onChange={this.handleCangeText} required value={this.state.password} />

                        <Button title="SIGN UP" loading={this.props.isLoading} />

                        <Link to="/sign-in" className="text-yellow-300 hover:text-blue-500 mt-10">Already have an account? Sign In</Link>
                    </form>
                </div>

            </Layout>
        )
    }

}

const reduxState = state => ({
    isLoading: state.isLoading
})

const reduxDispatch = dispatch => ({
    registerAPI: (data) => dispatch(registerUserAPI(data))
})

export default connect(reduxState, reduxDispatch)(Register)