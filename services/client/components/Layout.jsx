import styles from '../styles/Layout.module.css'
import Button from '@material-ui/core/Button'

const Layout = ({children}) => {
    return(
        <div className='font-sans text-xl'>
            <h1>Almost before we knew it, we had left the ground.</h1>
            <Button variant='contained' color='primary'>Iniciar Sesión</Button>
            {children}
        </div>
    )
}

export default Layout