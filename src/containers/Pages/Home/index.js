import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { userImg } from '../../../assets'
import { Layout } from '../../../components'
import { addNotesAPI, getNotesAPI } from '../../../config/redux'

class Home extends Component {
    state = {
        title: '',
        content: '',
    }

    componentDidMount() {
        const userData = JSON.parse(localStorage.getItem('USERDATA'))
        this.props.getNotes(userData.uid)
    }

    save = () => {
        const { title, content } = this.state
        const userData = JSON.parse(localStorage.getItem('USERDATA'))

        const data = {
            title: title,
            content: content,
            date: new Date().getTime(),
            userId: userData.uid
        }

        this.props.addNotes(data)
        console.log(data);

    }


    onInputChange = (e, type) => {
        this.setState({
            [type]: e.target.value
        })
    }

    render() {
        const { title, content } = this.state
        const { notes } = this.props
        console.log('Notes : ', notes);

        return (
            <Layout title="Dashboard">
                <div className="w-full flex flex-col px-3 mt-10 lg:px-10">

                    <div className="w-11/12 md:w-4/6 mx-auto">
                        <div>
                            <div className="heading text-center font-bold text-2xl m-5 text-yellow-200">New Post</div>
                            <div className="flex flex-col text-gray-200 border border-gray-300 p-4 shadow-lg ">

                                <input className="title bg-gray-700 border border-gray-300 p-2 mb-4 outline-none" spellCheck="false" placeholder="Title" type="text" value={title} onChange={(e) => this.onInputChange(e, 'title')} />

                                <textarea className="description bg-gray-700 sec p-3 h-60 border border-gray-300 outline-none" spellCheck="false" placeholder="Describe everything about this post here" value={content} onChange={(e) => this.onInputChange(e, 'content')} />

                                <div className="flex pt-5">
                                    <button type="submit" className="btn border hover:bg-blue-400 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-blue-500" onClick={this.save}>Post</button>
                                </div>
                            </div>
                        </div>

                        {/* NOTES LIST */}

                        {
                            notes.length > 0 ? (
                                <Fragment>
                                    {
                                        notes.map(note => {
                                            return (
                                                <div key={note.id} className="bg-gray-800 w-full rounded-md shadow-md h-auto py-3 px-3 my-5">

                                                    <div className="w-full h-16 items-center flex justify-between ">
                                                        <div className="flex">
                                                            <img className=" rounded-full w-10 h-10 mr-3" src={userImg} alt="profile" />
                                                            <div>
                                                                <h3 className="text-md font-semibold text-white">{note.data.title}</h3>
                                                                <p className="text-xs text-gray-500">31 mnt</p>
                                                            </div>
                                                        </div>
                                                        <svg className="w-16" xmlns="http://www.w3.org/2000/svg" width={27} height={27} viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" strokeWidth={2} strokeLinecap="square" strokeLinejoin="round"><circle cx={12} cy={12} r={1} /><circle cx={19} cy={12} r={1} /><circle cx={5} cy={12} r={1} /></svg>
                                                    </div>

                                                    <p>{note.data.content}</p>

                                                    <div className="w-full h-8 flex items-center px-3 my-3">

                                                        <div className="bg-blue-500 z-10 w-5 h-5 rounded-full flex items-center justify-center ">
                                                            <svg className="w-3 h-3 fill-current text-white" xmlns="http://www.w3.org/2000/svg" width={27} height={27} viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" strokeWidth={2} strokeLinecap="square" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" /></svg>
                                                        </div>
                                                        <div className="bg-red-500 w-5 h-5 rounded-full flex items-center justify-center -ml-1">
                                                            <svg className="w-3 h-3 fill-current stroke-current text-white" xmlns="http://www.w3.org/2000/svg" width={27} height={27} viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" strokeWidth={2} strokeLinecap="square" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                                                        </div>

                                                        <div className="w-full flex justify-between">
                                                            <p className="ml-3 text-gray-500">12</p>
                                                            <p className="ml-3 text-gray-500">26 comment</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            )
                                        })
                                    }
                                </Fragment>
                            ) : null
                        }
                    </div>
                </div>

            </Layout>
        )
    }
}

const reduxState = (state) => ({
    userData: state.user,
    notes: state.notes
})

const reduxDispatch = (dispatch) => ({
    addNotes: (data) => dispatch(addNotesAPI(data)),
    getNotes: (data) => dispatch(getNotesAPI(data))
})

export default connect(reduxState, reduxDispatch)(Home)