import { useRouteError} from 'react-router-dom'

const Error = () => {
    const err = useRouteError()
    return (
        <div>
            <center>
            <h2> Sorry !!! </h2>
            <h3> {err.status} : {err.statusText} </h3>
            <img src="https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1" alt=''/>
            </center>
        </div>
    )
}
export default Error