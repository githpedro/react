import { useState } from "react"
export function InstaFollowCard({children, initialIsFollowing}){
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const imageSrc = `https://unavatar.io/github/${children}`
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClass = isFollowing ? 'ig-card-bt-follow': 'ig-card-bt' 

    const handleCLick = () => {
        setIsFollowing(!isFollowing)
    }

    return(
    <article className="ig-card">
        <header className="ig-card-hd">
            <img
                className="ig-card-img" 
                alt="Avatar 1" 
                src={imageSrc} />"
            <div className="ig-card-dv">
                <strong className='ig-card-st'>{children}</strong>
                <span className="ig-card-sp">Sugerencia para tí</span>
            </div>
        </header>

        <aside>
            <button className={buttonClass} onClick={handleCLick}>
                <span className="ig-card-text">{text}</span>
                <span className="ig-card-NoFollow">Dejar de Seguir</span>
            </button>
        </aside>
    </article>
    )
}