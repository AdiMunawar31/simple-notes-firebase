import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Loader from '../../components/Loader'
import { Home, Login, Register } from '../../containers/Pages'

export default function Routes() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, [])

    return loading ? (
        <Loader />
    ) : (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/sign-in" component={Login} />
                <Route path="/sign-up" component={Register} />
            </Switch>
        </BrowserRouter>
    )
}
