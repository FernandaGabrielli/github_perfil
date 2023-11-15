import styles from './Perfil.module.css';

// export default () => {}
//export default function () {}
// utilizando essas opcoes omite o const Perfil e o export no final

const Perfil = ({ nomeUsuario }) => {
    return (
        <header className={styles.header}> 
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} />
            <h1 className={styles.name}>
                {nomeUsuario}
                </h1>
        </header>
    )

}

export default Perfil;  