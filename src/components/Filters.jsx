import {Link, useParams} from "react-router-dom";

const Filters = () => {
    const {filter: activeFilter = 'all'} = useParams()

    return(
        <div style={{display: 'flex', justifyContent: 'center', gap: '0.5rem', color: 'black'}}>
            <Link
                to='/all'
                style={{
                    color: activeFilter === 'all' ? 'green' : null,
                    backgroundColor: activeFilter === 'all' ? 'white' : null,
                }}
            >all</Link>

            <Link
                to={activeFilter !== 'active' ? 'active' : 'all'}
                style={{
                    color: activeFilter === 'active' ? 'green' : null,
                    backgroundColor: activeFilter === 'active' ? 'white' : null,
                }}
            >active</Link>

            <Link
                to={activeFilter !== 'completed' ? 'completed' : 'all'}
                style={{
                    color: activeFilter === 'completed' ? 'green' : null,
                    backgroundColor: activeFilter === 'completed' ? 'white' : null,
                }}
            >completed</Link>
        </div>
    )
}

export default Filters